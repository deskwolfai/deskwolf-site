/**
 * In-memory rate limiter for Vercel serverless functions.
 *
 * SECURITY: This is per-instance — Vercel may spin up multiple instances
 * under load, so a determined attacker could bypass by hitting different
 * instances. For production hardening, upgrade to Upstash Redis.
 * But this still blocks 95%+ of spam/bot abuse and is zero-cost.
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

// Clean up expired entries every 5 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (now > entry.resetAt) store.delete(key);
  }
}, 5 * 60 * 1000);

export interface RateLimitConfig {
  /** Max requests allowed in the window */
  max: number;
  /** Window duration in seconds */
  windowSeconds: number;
  /** Prefix for the key (e.g., "contact", "subscribe") */
  prefix: string;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
}

export function checkRateLimit(
  ip: string,
  config: RateLimitConfig
): RateLimitResult {
  const key = `${config.prefix}:${ip}`;
  const now = Date.now();
  const entry = store.get(key);

  // No existing entry or expired — allow and start fresh
  if (!entry || now > entry.resetAt) {
    const resetAt = now + config.windowSeconds * 1000;
    store.set(key, { count: 1, resetAt });
    return { allowed: true, remaining: config.max - 1, resetAt };
  }

  // Entry exists and within window
  if (entry.count >= config.max) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count++;
  return {
    allowed: true,
    remaining: config.max - entry.count,
    resetAt: entry.resetAt,
  };
}

/**
 * Daily circuit breaker — tracks total hits per endpoint per day.
 * If an endpoint exceeds the daily max, ALL requests are blocked
 * regardless of individual IP rate limits.
 */
interface CircuitEntry {
  count: number;
  date: string; // YYYY-MM-DD
}

const circuitStore = new Map<string, CircuitEntry>();

export function checkCircuitBreaker(
  endpoint: string,
  dailyMax: number
): { open: boolean; count: number } {
  const today = new Date().toISOString().slice(0, 10);
  const entry = circuitStore.get(endpoint);

  // New day — reset
  if (!entry || entry.date !== today) {
    circuitStore.set(endpoint, { count: 1, date: today });
    return { open: false, count: 1 };
  }

  entry.count++;

  if (entry.count > dailyMax) {
    return { open: true, count: entry.count };
  }

  return { open: false, count: entry.count };
}
