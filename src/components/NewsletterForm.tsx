"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're in!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Network error — try again");
    }
  }

  if (status === "success") {
    return (
      <div className="max-w-[420px] mx-auto text-center py-4">
        <p className="text-white font-semibold text-lg">You're in!</p>
        <p className="text-white/60 text-sm mt-1">Check your inbox soon.</p>
      </div>
    );
  }

  return (
    <form
      className="flex gap-1.5 max-w-[420px] mx-auto bg-white/10 backdrop-blur-[12px] border border-white/15 rounded-[100px] p-[5px] max-[480px]:flex-col max-[480px]:rounded-[var(--radius-std)] max-[480px]:p-3"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
        className="flex-1 bg-transparent border-none outline-none px-5 py-3 font-sans text-sm text-white placeholder:text-white/40"
        required
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-white text-[#0F172A] font-semibold text-sm px-6 py-3 border-none rounded-[100px] cursor-pointer transition-all duration-200 whitespace-nowrap hover:bg-[#F0F4F8] hover:scale-[1.02] disabled:opacity-60 disabled:cursor-wait max-[480px]:w-full max-[480px]:py-3.5 max-[480px]:rounded-[var(--radius-sm)]"
      >
        {status === "loading" ? "Sending..." : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-xs mt-1 text-center w-full">{message}</p>
      )}
    </form>
  );
}
