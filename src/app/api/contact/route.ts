import { NextRequest, NextResponse } from "next/server";

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

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, business, industry, challenge } = await req.json();

    if (!email || !name) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }

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
        tags: ["website", "contact-form", industry].filter(Boolean),
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

      // Add note with challenge if provided
      if (challenge) {
        await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
          method: "POST",
          headers: ghlHeaders,
          body: JSON.stringify({
            body: `Industry: ${industry || "Not specified"}\nChallenge: ${challenge}`,
            userId: contactId,
          }),
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact form error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
