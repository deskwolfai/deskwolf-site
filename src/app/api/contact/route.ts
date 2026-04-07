import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, checkCircuitBreaker } from "@/lib/rate-limit";
import { validateContactInput } from "@/lib/validate";
import { verifyTurnstile } from "@/lib/turnstile";

const GHL_API_KEY = process.env.GHL_API_KEY || "";
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || "";
const GHL_BASE = "https://services.leadconnectorhq.com";

const PIPELINE_ID = "D0L2Ia6fMwflvC0NILQ6";
const CONTACT_STAGE_ID = "209e4ba8-ea8a-4b8c-9862-0e64bc1ae6b3";

const ghlHeaders = {
  Authorization: `Bearer ${GHL_API_KEY}`,
  Version: "2021-07-28",
  "Content-Type": "application/json",
};

/**
 * SECURITY CONFIG
 * - Rate limit: 5 submissions per IP per hour
 * - Circuit breaker: 200 total submissions per day (all IPs combined)
 */
const RATE_LIMIT = { max: 5, windowSeconds: 3600, prefix: "contact" };
const DAILY_MAX = 200;

export async function POST(req: NextRequest) {
  try {
    // ── Circuit breaker ──
    const circuit = checkCircuitBreaker("contact", DAILY_MAX);
    if (circuit.open) {
      console.warn(`[SECURITY] Circuit breaker OPEN on /api/contact — ${circuit.count} hits today`);
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
      console.warn(`[SECURITY] Rate limited IP ${ip} on /api/contact`);
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
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

    const validation = validateContactInput(body);

    // Honeypot triggered — silently return success to fool the bot
    if (!validation.valid && validation.error === "__honeypot__") {
      return NextResponse.json({ success: true });
    }

    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    // ── Turnstile verification ──
    const turnstileValid = await verifyTurnstile(body.turnstileToken as string || "");
    if (!turnstileValid) {
      return NextResponse.json(
        { error: "Verification failed. Please try again." },
        { status: 403 }
      );
    }

    const { name, email, phone, business, industry, challenge } = validation.data!;
    const consentTimestamp = new Date().toISOString();

    if (!GHL_API_KEY) {
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    const [firstName, ...lastParts] = name.trim().split(" ");
    const lastName = lastParts.join(" ");

    // Create contact
    let contactId = "";
    const contactRes = await fetch(`${GHL_BASE}/contacts/`, {
      method: "POST",
      headers: ghlHeaders,
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        firstName,
        lastName,
        email,
        phone,
        companyName: business,
        tags: ["website", "contact-form", "sms-consent-given", industry].filter(Boolean),
        source: "deskwolf.ai contact form",
      }),
    });

    if (contactRes.ok) {
      const data = await contactRes.json();
      contactId = data.contact?.id || "";
    } else {
      const lookupRes = await fetch(
        `${GHL_BASE}/contacts/lookup?locationId=${GHL_LOCATION_ID}&email=${encodeURIComponent(email)}`,
        { headers: ghlHeaders }
      );
      if (lookupRes.ok) {
        const lookupData = await lookupRes.json();
        contactId = lookupData.contacts?.[0]?.id || "";
      }
    }

    if (contactId) {
      // Create opportunity
      await fetch(`${GHL_BASE}/opportunities/`, {
        method: "POST",
        headers: ghlHeaders,
        body: JSON.stringify({
          pipelineId: PIPELINE_ID,
          pipelineStageId: CONTACT_STAGE_ID,
          locationId: GHL_LOCATION_ID,
          contactId,
          name: `Contact Form — ${name}`,
          status: "open",
          source: "deskwolf.ai",
        }),
      });

      // Add note with challenge + SMS/call consent audit trail
      await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
        method: "POST",
        headers: ghlHeaders,
        body: JSON.stringify({
          body: `Industry: ${industry || "Not specified"}\nChallenge: ${challenge || "Not provided"}\n\n--- SMS/Call Consent Audit ---\nConsent given: YES\nTimestamp: ${consentTimestamp}\nIP: ${ip}\nSource: deskwolf.ai contact form`,
          userId: contactId,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact form error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
