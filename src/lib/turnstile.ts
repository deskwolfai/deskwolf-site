const SECRET_KEY = process.env.TURNSTILE_SECRET_KEY || "";

export async function verifyTurnstile(token: string): Promise<boolean> {
  // Graceful degradation — if no secret key configured, skip verification
  if (!SECRET_KEY) return true;
  if (!token) return false;

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: SECRET_KEY,
          response: token,
        }),
      }
    );
    const data = await res.json();
    return data.success === true;
  } catch {
    // If verification fails, allow the request (fail-open to not break forms)
    console.error("[TURNSTILE] Verification request failed");
    return true;
  }
}
