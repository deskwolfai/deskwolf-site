import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, checkCircuitBreaker } from "@/lib/rate-limit";
import { validateDemoCallInput } from "@/lib/validate";

/**
 * POST /api/demo/call-me
 *
 * Triggers an outbound ElevenLabs call from Angel Demo to a website visitor
 * who tapped the "Have Angel call me right now" button on /demo.
 *
 * SECURITY (every layer matters — each call costs real $$$):
 * - Rate limit:    3 calls per phone number per 5 minutes  (per-number throttle, allows retries; different people on same network can each call)
 * - Circuit breaker: 30 calls per day, all IPs   (hard daily cap on spend)
 * - Honeypot:      bots filling "website" field get a fake success
 * - TCPA:          requires explicit `consent: true` in body before any call fires
 * - Validation:    name + E.164-normalized US phone required
 *
 * The $80K rule: at ~$0.20/min ElevenLabs Twilio outbound + 3min hard cap per call,
 * worst case daily spend is 30 calls * $0.60 = $18/day. Bounded.
 */

const EL_API = "https://api.elevenlabs.io/v1/convai/twilio/outbound-call";
const EL_KEY = process.env.ELEVENLABS_API_KEY || "";
const DEMO_AGENT_ID = process.env.ELEVENLABS_DEMO_AGENT_ID || "";
const AGENT_PHONE_ID = process.env.ELEVENLABS_AGENT_PHONE_ID || "";

const RATE_LIMIT = { max: 3, windowSeconds: 300, prefix: "demo-call-me" };
const DAILY_MAX = 30;

export async function POST(req: NextRequest) {
  try {
    // ── Circuit breaker (hard daily spend cap) ──
    const circuit = checkCircuitBreaker("demo-call-me", DAILY_MAX);
    if (circuit.open) {
      console.warn(`[SECURITY] Demo call-me circuit OPEN — ${circuit.count} hits today`);
      return NextResponse.json(
        { error: "Demo line is fully booked for today. Try again tomorrow, or just call us directly at (909) 757-0141." },
        { status: 503 }
      );
    }

    // ── Parse + validate body early so we can key the rate limit on phone number ──
    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const validation = validateDemoCallInput(body);

    // Honeypot triggered — fake success to fool the bot
    if (!validation.valid && validation.error === "__honeypot__") {
      return NextResponse.json({ success: true });
    }

    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { first_name, phone, business_type } = validation.data!;

    // ── Rate limiting (per phone number — allows different people on same network) ──
    const limit = checkRateLimit(phone, RATE_LIMIT);
    if (!limit.allowed) {
      console.warn(`[SECURITY] Rate limited phone ${phone.slice(0, 6)}*** on /api/demo/call-me`);
      return NextResponse.json(
        { error: "Too many requests for this number. Try again in a few minutes, or call us directly at (909) 757-0141." },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((limit.resetAt - Date.now()) / 1000)),
          },
        }
      );
    }

    // ── Server config check ──
    if (!EL_KEY || !DEMO_AGENT_ID || !AGENT_PHONE_ID) {
      console.error(
        "[CONFIG] Missing ElevenLabs env vars: " +
          `EL_KEY=${!!EL_KEY} DEMO_AGENT_ID=${!!DEMO_AGENT_ID} AGENT_PHONE_ID=${!!AGENT_PHONE_ID}`
      );
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    // ── Fire the outbound call ──
    const elPayload = {
      agent_id: DEMO_AGENT_ID,
      agent_phone_number_id: AGENT_PHONE_ID,
      to_number: phone,
      conversation_initiation_client_data: {
        dynamic_variables: {
          caller_first_name: first_name,
          caller_business_type: business_type,
          caller_phone: phone,
        },
      },
    };

    const elRes = await fetch(EL_API, {
      method: "POST",
      headers: {
        "xi-api-key": EL_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(elPayload),
    });

    if (!elRes.ok) {
      const errText = await elRes.text();
      // Don't echo the upstream error to the client — keeps internal details private
      console.error(`[ELEVENLABS] outbound-call failed ${elRes.status}: ${errText}`);
      return NextResponse.json(
        { error: "Couldn't reach the demo line right now. Try again in a minute, or call us at (909) 757-0141." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Angel is calling you now at ${phone}. Pick up!`,
    });
  } catch (e) {
    console.error("/api/demo/call-me error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
