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

  return {
    valid: true,
    data: { name, email, phone, business, industry, challenge },
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

/**
 * Demo "Have Angel call me now" form input.
 * - first_name: required, 2-50 chars
 * - phone: required, must be normalizable to E.164 US format
 * - business_type: optional, max 80 chars (industry tag for personalization)
 * - consent: required, must be exactly true (TCPA: explicit consent to receive an AI call)
 * - website: honeypot
 */
export interface DemoCallInput {
  first_name: string;
  phone: string;          // normalized to E.164, e.g. "+19095551234"
  business_type: string;  // may be empty string
}

/** Normalize a US phone string to E.164 (+1XXXXXXXXXX). Returns null if not a 10-digit US number. */
export function normalizeUsPhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return null;
}

export function validateDemoCallInput(body: Record<string, unknown>): {
  valid: boolean;
  data?: DemoCallInput;
  error?: string;
} {
  const first_name = sanitize(body.first_name, 50);
  const phone_raw = sanitize(body.phone, 20);
  const business_type = sanitize(body.business_type, 80);
  const consent = body.consent === true;

  // Honeypot — silently succeed for bots
  if (body.website && typeof body.website === "string" && body.website.trim().length > 0) {
    return { valid: false, error: "__honeypot__" };
  }

  if (!first_name || first_name.length < 2) {
    return { valid: false, error: "First name is required (min 2 characters)" };
  }

  if (!phone_raw) {
    return { valid: false, error: "Phone number is required" };
  }

  const phone = normalizeUsPhone(phone_raw);
  if (!phone) {
    return { valid: false, error: "Please enter a valid 10-digit US mobile number" };
  }

  if (!consent) {
    return { valid: false, error: "Consent is required to receive an AI demo call" };
  }

  return {
    valid: true,
    data: { first_name, phone, business_type },
  };
}
