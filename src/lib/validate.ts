/**
 * Request validation utilities.
 *
 * SECURITY: Strict input validation at system boundaries.
 * Reject anything that doesn't match expected shape/length.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s()+-]{7,20}$/;

/** Sanitize string input — trim, enforce max length */
function sanitize(value: unknown, maxLen: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen);
}

export interface ContactInput {
  name: string;
  email: string;
  phone: string;
  business: string;
  industry: string;
  challenge: string;
  smsConsent: boolean;
}

export function validateContactInput(body: Record<string, unknown>): {
  valid: boolean;
  data?: ContactInput;
  error?: string;
} {
  const name = sanitize(body.name, 100);
  const email = sanitize(body.email, 254);
  const phone = sanitize(body.phone, 20);
  const business = sanitize(body.business, 200);
  const industry = sanitize(body.industry, 50);
  const challenge = sanitize(body.challenge, 2000);

  if (!name || name.length < 2) {
    return { valid: false, error: "Name is required (min 2 characters)" };
  }

  if (!email || !EMAIL_RE.test(email)) {
    return { valid: false, error: "Valid email is required" };
  }

  if (phone && !PHONE_RE.test(phone)) {
    return { valid: false, error: "Invalid phone number format" };
  }

  // Honeypot check — if the hidden "website" field has a value, it's a bot
  if (body.website && typeof body.website === "string" && body.website.trim().length > 0) {
    // Silently succeed — don't reveal that we caught them
    return { valid: false, error: "__honeypot__" };
  }

  // SMS/call consent — required for A2P 10DLC compliance
  const smsConsent = body.smsConsent === "yes" || body.smsConsent === true;
  if (!smsConsent) {
    return { valid: false, error: "SMS and call consent is required" };
  }

  return {
    valid: true,
    data: { name, email, phone, business, industry, challenge, smsConsent },
  };
}

export function validateSubscribeInput(body: Record<string, unknown>): {
  valid: boolean;
  email?: string;
  error?: string;
} {
  const email = sanitize(body.email, 254);

  if (!email || !EMAIL_RE.test(email)) {
    return { valid: false, error: "Valid email is required" };
  }

  // Honeypot
  if (body.company && typeof body.company === "string" && body.company.trim().length > 0) {
    return { valid: false, error: "__honeypot__" };
  }

  return { valid: true, email };
}
