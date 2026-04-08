import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import CalendlyEmbed from "./CalendlyEmbed";

export const metadata: Metadata = {
  title: "Try Angel Live | DeskWolf LLC",
  description:
    "Experience DeskWolf's AI receptionist Angel. Call her live to ask anything, or book a discovery call with our founder Vic Roque.",
};

export default function DemoPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ DEMO HUB HERO (2 OPTIONS) ════════════ */}
      <section className="relative z-[2] min-h-screen flex items-center pt-[110px] pb-[60px]">
        {/* Background glow layers */}
        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)", animation: "glowBreath 4s ease-in-out infinite" }} />
        <div className="absolute top-[20%] left-[20%] w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(26,95,212,0.11) 0%, transparent 70%)", animation: "glowBreath 5s ease-in-out 1s infinite" }} />
        <div className="absolute top-[25%] right-[20%] w-[380px] h-[380px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)", animation: "glowBreath 6s ease-in-out 2s infinite" }} />

        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] w-full">
          {/* Header */}
          <div className="max-w-[820px] mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white/[0.06] border border-white/10 rounded-[100px] mb-7 shadow-[0_4px_16px_rgba(0,0,0,0.1)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-2.5 h-2.5 bg-brand-green rounded-full animate-pulse-dot" />
              <span className="font-mono text-[12px] font-medium tracking-[0.08em] uppercase text-brand-green">A.N.G.E.L. is Online</span>
            </div>

            <h1 className="text-[clamp(36px,6vw,68px)] font-extrabold leading-[1.04] tracking-[-0.04em] text-text mb-5 opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              Don&rsquo;t take our word for it.{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                Talk to her.
              </span>
            </h1>

            <p className="text-[clamp(16px,1.7vw,19px)] text-text-2 max-w-[620px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
              Two ways to get started. Call Angel and ask her anything about DeskWolf, or skip straight to a 30-minute discovery call with our founder.
            </p>
          </div>

          {/* ──── THE 2-OPTION HUB ──── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[920px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>

            {/* ─── 1. CALL ANGEL ─── */}
            <a
              href="tel:+19097570141"
              className="group relative block no-underline"
            >
              <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-br from-brand-green/50 via-brand-cyan/50 to-brand-blue/50 opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-300" />
              <div className="relative h-full bg-[rgba(12,14,20,0.85)] backdrop-blur-[24px] border border-white/[0.10] rounded-[28px] p-[clamp(28px,3.5vw,40px)] transition-all duration-300 group-hover:border-white/[0.18] group-hover:-translate-y-1 group-hover:shadow-[0_24px_64px_-12px_rgba(16,185,129,0.3)]">
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-green mb-5">Option 1 · Talk to Angel</div>

                <div className="w-[80px] h-[80px] rounded-[22px] bg-gradient-to-br from-brand-green to-brand-cyan flex items-center justify-center mb-6 shadow-[0_8px_28px_rgba(16,185,129,0.35)]" style={{ animation: "ringPulse 2.4s ease-out infinite" }}>
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>

                <h3 className="text-[26px] font-extrabold text-text mb-3 leading-tight">Call Angel right now</h3>
                <p className="text-[14px] text-text-3 leading-relaxed mb-6">
                  Pick up your phone and dial. She answers in under one second, in English, Spanish or French. Ask her anything about DeskWolf.
                </p>

                <div className="text-[clamp(28px,4vw,36px)] font-extrabold tracking-[-0.02em] bg-gradient-to-r from-brand-green to-brand-cyan bg-clip-text text-transparent mb-5">
                  (909) 757-0141
                </div>

                <div className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-[100px] bg-gradient-to-r from-brand-green to-brand-cyan text-white font-semibold text-[15px] shadow-[0_8px_24px_rgba(16,185,129,0.3)] transition-all duration-300 group-hover:shadow-[0_12px_32px_rgba(16,185,129,0.4)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Tap to dial
                </div>

                <div className="flex items-center justify-center gap-5 mt-5 flex-wrap">
                  <div className="flex items-center gap-1.5 text-[11px] text-text-3">
                    <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                    Available 24/7
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-text-3">
                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                    Free to call
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-text-3">
                    <div className="w-1.5 h-1.5 bg-brand-purple rounded-full" />
                    No signup
                  </div>
                </div>
              </div>
            </a>

            {/* ─── 2. BOOK WITH VIC ─── */}
            <a
              href="#book-vic"
              className="group relative block no-underline"
            >
              <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-br from-brand-blue/50 via-brand-purple/50 to-brand-cyan/50 opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-300" />
              <div className="relative h-full bg-[rgba(12,14,20,0.85)] backdrop-blur-[24px] border border-white/[0.10] rounded-[28px] p-[clamp(28px,3.5vw,40px)] transition-all duration-300 group-hover:border-white/[0.18] group-hover:-translate-y-1 group-hover:shadow-[0_24px_64px_-12px_rgba(139,92,246,0.3)]">
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-purple mb-5">Option 2 · Talk to a Human</div>

                <div className="w-[80px] h-[80px] rounded-[22px] bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan flex items-center justify-center mb-6 shadow-[0_8px_28px_rgba(139,92,246,0.4)] font-extrabold text-[26px] text-white">
                  VR
                </div>

                <h3 className="text-[26px] font-extrabold text-text mb-3 leading-tight">Book with Vic Roque</h3>
                <p className="text-[14px] text-text-3 leading-relaxed mb-6">
                  Founder &amp; CEO. 30 minutes, no pitch. Vic will look at your business, your phone setup, and your numbers, and tell you straight if AI voice makes sense for you.
                </p>

                <div className="text-[16px] font-bold text-text-2 mb-5">
                  30-min discovery call · Free
                </div>

                <div className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-[100px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan text-white font-semibold text-[15px] shadow-[0_8px_24px_rgba(139,92,246,0.3)] transition-all duration-300 group-hover:shadow-[0_12px_32px_rgba(139,92,246,0.4)]">
                  See available times
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>

                <div className="flex items-center justify-center gap-5 mt-5 flex-wrap">
                  <div className="flex items-center gap-1.5 text-[11px] text-text-3">
                    <div className="w-1.5 h-1.5 bg-brand-purple rounded-full" />
                    No pitch
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-text-3">
                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                    No pressure
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-text-3">
                    <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                    Just real talk
                  </div>
                </div>
              </div>
            </a>

          </div>

          {/* Hub footer note */}
          <p className="text-center text-sm text-text-3 mt-10 max-w-[600px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            Not sure which one? Start with <span className="text-brand-green font-semibold">Option 1</span> — it&rsquo;s the fastest way to hear what AI voice quality sounds like in 2026.
          </p>
        </div>
      </section>

      {/* ════════════ BOOK WITH VIC (CALENDAR EMBED) ════════════ */}
      <section id="book-vic" className="relative z-[2] py-[100px] scroll-mt-[100px]">
        <div className="max-w-[920px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv mb-10">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-purple">Book a Discovery Call</span>
            <h2 className="text-[clamp(28px,3.8vw,42px)] mt-2 mb-3">
              30 minutes with{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                Vic Roque.
              </span>
            </h2>
            <p className="text-[16px] text-text-2">
              Founder &amp; CEO of DeskWolf. Pick a time that works — your invite and meeting link arrive in your email instantly.
            </p>
          </div>

          <div className="relative rv">
            <div className="absolute -inset-[2px] rounded-[28px] bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan opacity-25 blur-[3px]" />
            <div className="relative bg-[rgba(12,14,20,0.92)] backdrop-blur-[40px] border border-white/[0.12] rounded-[28px] p-[clamp(16px,2vw,24px)] shadow-[0_40px_100px_-20px_rgba(139,92,246,0.25)]">
              <CalendlyEmbed url="https://api.leadconnectorhq.com/widget/bookings/discovery-vic" />
            </div>
          </div>

          <div className="text-center mt-8 rv">
            <p className="text-sm text-text-3">
              Don&apos;t see a time that works?{" "}
              <a href="mailto:contact@deskwolf.ai" className="text-brand-cyan no-underline hover:underline">
                Email us at contact@deskwolf.ai
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
