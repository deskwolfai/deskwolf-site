import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, checkCircuitBreaker } from "@/lib/rate-limit";
import { validateSubscribeInput } from "@/lib/validate";

const GHL_API_KEY = process.env.GHL_API_KEY || "";
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || "";
const GHL_BASE = "https://services.leadconnectorhq.com";

const PIPELINE_ID = "D0L2Ia6fMwflvC0NILQ6";
const NEWSLETTER_STAGE_ID = "3688dd31-4d6f-43e9-90f6-03bb59dd289c";

const ghlHeaders = {
  Authorization: `Bearer ${GHL_API_KEY}`,
  Version: "2021-07-28",
  "Content-Type": "application/json",
};

/**
 * SECURITY CONFIG
 * - Rate limit: 3 signups per IP per hour
 * - Circuit breaker: 500 total signups per day (all IPs combined)
 */
const RATE_LIMIT = { max: 3, windowSeconds: 3600, prefix: "subscribe" };
const DAILY_MAX = 500;

export async function POST(req: NextRequest) {
  try {
    // ── Circuit breaker ──
    const circuit = checkCircuitBreaker("subscribe", DAILY_MAX);
    if (circuit.open) {
      console.warn(`[SECURITY] Circuit breaker OPEN on /api/subscribe — ${circuit.count} hits today`);
      return NextResponse.json(
        { error: "Service temporarily unavailable. Please try again later." },
        { status: 503 }
      );
    }

    // ── Rate limiting ──
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const limit = checkRateLimit(ip, RATE_LIMIT);
    if (!limit.allowed) {
      console.warn(`[SECURITY] Rate limited IP ${ip} on /api/subscribe`);
      return NextResponse.json(
        { error: "Too many attempts. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((limit.resetAt - Date.now()) / 1000)),
          },
        }
      );
    }

    // ── Input validation + honeypot ──
    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const validation = validateSubscribeInput(body);

    // Honeypot triggered — silently succeed to fool the bot
    if (!validation.valid && validation.error === "__honeypot__") {
      return NextResponse.json({ success: true, message: "Subscribed" });
    }

    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const email = validation.email!;

    if (!GHL_API_KEY) {
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    // Step 1: Create or find contact
    let contactId = "";

    const contactRes = await fetch(`${GHL_BASE}/contacts/`, {
      method: "POST",
      headers: ghlHeaders,
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        email,
        tags: ["newsletter", "website"],
        source: "deskwolf.ai newsletter form",
      }),
    });

    if (contactRes.ok) {
      const data = await contactRes.json();
      contactId = data.contact?.id || "";
    } else {
      // Contact likely already exists — look them up
      const lookupRes = await fetch(
        `${GHL_BASE}/contacts/lookup?locationId=${GHL_LOCATION_ID}&email=${encodeURIComponent(email)}`,
        { headers: ghlHeaders }
      );
      if (lookupRes.ok) {
        const lookupData = await lookupRes.json();
        contactId = lookupData.contacts?.[0]?.id || "";
      }
    }

    if (!contactId) {
      return NextResponse.json({ success: true, message: "Subscribed" });
    }

    // Step 2: Create opportunity in Vercel Website Leads pipeline
    await fetch(`${GHL_BASE}/opportunities/`, {
      method: "POST",
      headers: ghlHeaders,
      body: JSON.stringify({
        pipelineId: PIPELINE_ID,
        pipelineStageId: NEWSLETTER_STAGE_ID,
        locationId: GHL_LOCATION_ID,
        contactId,
        name: `Newsletter — ${email}`,
        status: "open",
        source: "deskwolf.ai",
      }),
    });

    return NextResponse.json({ success: true, message: "Subscribed" });
  } catch (e) {
    console.error("Subscribe error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
