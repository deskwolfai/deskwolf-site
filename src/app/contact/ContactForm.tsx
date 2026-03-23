"use client";

import { useState } from "react";
import Turnstile from "@/components/Turnstile";

const industries = [
  "Medical",
  "Home Services",
  "Restaurants",
  "Fitness",
  "Real Estate",
  "Legal",
  "Auto",
  "Insurance",
  "Hospitality",
  "Digital Entrepreneurs",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken }),
      });
      const json = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(json.message || "We got your info. Your phone is about to ring.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(json.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error — try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-cyan rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
          &#10003;
        </div>
        <p className="text-text font-bold text-xl mb-2">You&apos;re all set.</p>
        <p className="text-text-2 text-sm">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="font-mono text-[10px] tracking-[0.1em] uppercase text-text-3">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="bg-white/[0.06] border border-white/[0.1] rounded-[var(--radius-sm)] px-4 py-3 text-sm text-text placeholder:text-text-3 outline-none transition-all duration-200 focus:border-brand-purple/40 focus:bg-white/[0.08]"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="font-mono text-[10px] tracking-[0.1em] uppercase text-text-3">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@business.com"
            className="bg-white/[0.06] border border-white/[0.1] rounded-[var(--radius-sm)] px-4 py-3 text-sm text-text placeholder:text-text-3 outline-none transition-all duration-200 focus:border-brand-purple/40 focus:bg-white/[0.08]"
          />
        </div>
      </div>

      {/* Row 2: Phone + Business */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="font-mono text-[10px] tracking-[0.1em] uppercase text-text-3">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(555) 123-4567"
            className="bg-white/[0.06] border border-white/[0.1] rounded-[var(--radius-sm)] px-4 py-3 text-sm text-text placeholder:text-text-3 outline-none transition-all duration-200 focus:border-brand-purple/40 focus:bg-white/[0.08]"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="business" className="font-mono text-[10px] tracking-[0.1em] uppercase text-text-3">
            Business Name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            required
            placeholder="Acme Services"
            className="bg-white/[0.06] border border-white/[0.1] rounded-[var(--radius-sm)] px-4 py-3 text-sm text-text placeholder:text-text-3 outline-none transition-all duration-200 focus:border-brand-purple/40 focus:bg-white/[0.08]"
          />
        </div>
      </div>

      {/* Industry */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="industry" className="font-mono text-[10px] tracking-[0.1em] uppercase text-text-3">
          Industry
        </label>
        <select
          id="industry"
          name="industry"
          required
          defaultValue=""
          className="bg-white/[0.06] border border-white/[0.1] rounded-[var(--radius-sm)] px-4 py-3 text-sm text-text outline-none transition-all duration-200 focus:border-brand-purple/40 focus:bg-white/[0.08] appearance-none cursor-pointer"
        >
          <option value="" disabled className="bg-[#1E293B] text-text-3">
            Select your industry
          </option>
          {industries.map((ind) => (
            <option key={ind} value={ind} className="bg-[#1E293B] text-text">
              {ind}
            </option>
          ))}
        </select>
      </div>

      {/* Challenge */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="challenge" className="font-mono text-[10px] tracking-[0.1em] uppercase text-text-3">
          What&apos;s your biggest phone challenge?
        </label>
        <textarea
          id="challenge"
          name="challenge"
          rows={4}
          placeholder="Missing calls after hours, can't keep up during peak times, no way to follow up on missed calls..."
          className="bg-white/[0.06] border border-white/[0.1] rounded-[var(--radius-sm)] px-4 py-3 text-sm text-text placeholder:text-text-3 outline-none transition-all duration-200 focus:border-brand-purple/40 focus:bg-white/[0.08] resize-y"
        />
      </div>

      {/* Honeypot — invisible to humans, bots auto-fill it */}
      <div className="absolute -left-[9999px] -top-[9999px]" aria-hidden="true" tabIndex={-1}>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <Turnstile onToken={setTurnstileToken} />

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full font-semibold text-sm px-8 py-4 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.01] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)] disabled:opacity-60 disabled:cursor-wait cursor-pointer"
      >
        {status === "loading" ? "Submitting..." : "Submit & Get Your Demo Call"}
      </button>

      {status === "error" && (
        <p className="text-red-400 text-sm text-center">{message}</p>
      )}
    </form>
  );
}
