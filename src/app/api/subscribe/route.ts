import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_API_KEY || "";
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || "";
const GHL_BASE = "https://services.leadconnectorhq.com";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    if (!GHL_API_KEY) {
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    // Create contact in GHL with newsletter tag
    const res = await fetch(`${GHL_BASE}/contacts/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        email,
        tags: ["newsletter", "website"],
        source: "deskwolf.ai newsletter form",
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      // GHL returns 422 if contact already exists — that's fine
      if (res.status === 422 || err.includes("duplicate")) {
        return NextResponse.json({ success: true, message: "Already subscribed" });
      }
      console.error("GHL error:", res.status, err);
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Subscribed" });
  } catch (e) {
    console.error("Subscribe error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
