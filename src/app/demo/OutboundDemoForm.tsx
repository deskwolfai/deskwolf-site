"use client";

import { useState } from "react";

/** Format a 10-digit US phone string as (xxx) xxx-xxxx for display only */
function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const BUSINESS_TYPES = [
  "",
  "Restaurant / Food Service",
  "Salon / Barbershop / Beauty",
  "Medical / Dental / Clinic",
  "HVAC / Plumbing / Electrical",
  "Solar / Home Services",
  "Gym / Fitness Studio",
  "Real Estate / Property",
  "Law / Professional Services",
  "Auto Shop / Dealership",
  "Insurance Agency",
  "Coach / Consultant / Creator",
  "Other",
];

export default function OutboundDemoForm() {
  const [firstName, setFirstName] = useState("");
  const [phoneDisplay, setPhoneDisplay] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;

    if (!firstName || firstName.length < 2) {
      setStatus("error");
      setMessage("First name is required");
      return;
    }
    const digits = phoneDisplay.replace(/\D/g, "");
    if (digits.length !== 10) {
      setStatus("error");
      setMessage("Please enter a valid 10-digit US mobile number");
      return;
    }
    if (!consent) {
      setStatus("error");
      setMessage("Please check the consent box to receive the AI demo call");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/demo/call-me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          phone: digits,
          business_type: businessType,
          consent: true,
          website: honeypot,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Angel is calling you now. Pick up!");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again or call (909) 757-0141.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error — try again, or call (909) 757-0141.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-6">
        {/* Big ringing phone */}
        <div className="flex justify-center mb-5">
          <div
            className="w-[88px] h-[88px] rounded-[24px] bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan flex items-center justify-center shadow-[0_8px_32px_rgba(139,92,246,0.4)]"
            style={{ animation: "ringPulse 1.4s ease-out infinite" }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-extrabold text-text mb-2">Angel is calling you now</h3>
        <p className="text-text-2 text-[15px] mb-1">{message}</p>
        <p className="text-text-3 text-xs mt-4">
          Calling from <span className="text-brand-cyan font-semibold">(909) 757-0141</span>. Pick up within 10 seconds.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="absolute -left-[9999px] -top-[9999px]"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 block mb-1.5">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => { setFirstName(e.target.value); setStatus("idle"); }}
            placeholder="Vic"
            maxLength={50}
            required
            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-[var(--radius-sm)] px-4 py-3 text-text text-[15px] outline-none focus:border-brand-purple/50 focus:bg-white/[0.06] transition-colors placeholder:text-text-3/60"
          />
        </div>

        <div>
          <label className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 block mb-1.5">Mobile Number</label>
          <input
            type="tel"
            value={phoneDisplay}
            onChange={(e) => { setPhoneDisplay(formatPhone(e.target.value)); setStatus("idle"); }}
            placeholder="(909) 555-0123"
            inputMode="numeric"
            required
            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-[var(--radius-sm)] px-4 py-3 text-text text-[15px] outline-none focus:border-brand-purple/50 focus:bg-white/[0.06] transition-colors placeholder:text-text-3/60"
          />
        </div>
      </div>

      <div>
        <label className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 block mb-1.5">
          What kind of business? <span className="text-text-3/60 normal-case tracking-normal">(optional — helps Angel personalize)</span>
        </label>
        <select
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-[var(--radius-sm)] px-4 py-3 text-text text-[15px] outline-none focus:border-brand-purple/50 focus:bg-white/[0.06] transition-colors appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23ffffff80' d='M6 8L0 0h12z'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 16px center",
          }}
        >
          {BUSINESS_TYPES.map((bt) => (
            <option key={bt} value={bt} className="bg-[#0F172A]">
              {bt || "— Skip / not sure —"}
            </option>
          ))}
        </select>
      </div>

      <label className="flex items-start gap-3 cursor-pointer mt-1">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => { setConsent(e.target.checked); setStatus("idle"); }}
          className="mt-[3px] w-4 h-4 accent-brand-purple cursor-pointer shrink-0"
        />
        <span className="text-[12px] text-text-3 leading-relaxed">
          Yes, I consent to receive an automated AI demo call from DeskWolf at the number above.
          I understand this is an artificial voice and I can end the call at any time.
          One-time call only. We will not sell or share my number.
        </span>
      </label>

      {status === "error" && (
        <div className="text-[13px] text-red-400 bg-red-500/[0.08] border border-red-500/20 rounded-[var(--radius-sm)] px-4 py-3">
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2.5 w-full py-4 px-8 mt-2 rounded-[100px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan text-white font-semibold text-[15px] shadow-[0_8px_32px_rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.01] hover:shadow-[0_16px_48px_rgba(139,92,246,0.4)] disabled:opacity-60 disabled:cursor-wait disabled:hover:translate-y-0 disabled:hover:scale-100"
      >
        {status === "loading" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Calling you now...
          </>
        ) : (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Have Angel Call Me Now
          </>
        )}
      </button>

      <p className="text-[11px] text-text-3/70 text-center leading-relaxed mt-1">
        One-time AI demo call. No sales pressure, ends in 60-90 seconds.
      </p>
    </form>
  );
}
