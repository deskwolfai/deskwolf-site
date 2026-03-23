import { NextRequest, NextResponse } from "next/server";

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

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

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
