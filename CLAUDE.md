# DeskWolf Website — Agent Instructions

## Stack
- Next.js 15 + Tailwind v4 + TypeScript
- Vercel auto-deploy on push to master
- Git identity: `deskwolfai <contact@deskwolf.ai>`
- GHL API for contact/subscribe forms

## Security: Non-Negotiable Rules

These rules are MANDATORY for every change to this codebase. Violation is a production blocker.

### 1. Every API route must be protected.
- **Rate limiting**: Every POST endpoint must use `@/lib/rate-limit.ts` with IP-based throttling.
- **Circuit breaker**: Every endpoint that calls a paid API (GHL, etc.) must have a daily circuit breaker.
- **Input validation**: Every endpoint must use `@/lib/validate.ts` — strict schema checks, length caps, type enforcement.
- **Honeypot fields**: Every form must include an invisible honeypot field. Bots that fill it get a fake success response.
- No endpoint ships without all four protections.

### 2. The $80K Rule
Before adding or modifying any API route, ask: **"If this endpoint got hit 1 million times tonight, what would it cost?"**
- If the answer is "a lot" or "I don't know" — add rate limiting, circuit breaker, and spending caps BEFORE shipping.
- If the provider doesn't have a hard spending cap, build one in the circuit breaker.

### 3. Never trust user input.
- Sanitize all strings (trim + max length).
- Validate email format with regex.
- Reject malformed JSON bodies.
- Never expose internal error details in responses.
- Never log or echo API keys, tokens, or secrets.

### 4. Webhook and external trigger security.
- Any webhook endpoint must require a secret header for authentication.
- Never create an unauthenticated endpoint that triggers paid operations.

### 5. Security file locations.
- Rate limiter: `src/lib/rate-limit.ts`
- Input validator: `src/lib/validate.ts`
- These are shared infrastructure — extend them, don't bypass them.

## Design System
- Container: `max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]`
- Colors: brand-blue (#1A5FD4), brand-purple (#8B5CF6), brand-cyan (#06B6D4), brand-green (#10B981), brand-amber (#F59E0B)
- Glass: bg-white/[0.04], border-white/[0.08]
- Fonts: Plus Jakarta Sans (body), JetBrains Mono (labels)
- Components: Aurora, Navbar, Footer, GlassCard, GradientIcon, RevealObserver, NewsletterForm

## Deployment
- Push to `master` triggers Vercel auto-deploy.
- Always run `npm run build` locally before pushing.
- Env vars: GHL_API_KEY, GHL_LOCATION_ID (set in Vercel dashboard).
