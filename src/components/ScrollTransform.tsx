"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollTransform() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      const totalScroll = container.offsetHeight - windowH;
      if (totalScroll <= 0) return;

      const scrolled = -rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / totalScroll)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Phases
  const phase1 = Math.min(1, progress * 2.5);                         // 0-40%
  const phase2 = Math.max(0, Math.min(1, (progress - 0.3) * 2.5));    // 30-70%
  const phase3 = Math.max(0, Math.min(1, (progress - 0.6) * 2.5));    // 60-100%

  const phoneRotate = 6 - phase2 * 6;
  const phoneScale = 0.9 + phase2 * 0.1;
  const chaosOpacity = 1 - phase2;
  const orderOpacity = phase2;
  const screenHue = phase2 * 120;
  const ringScale = 1 + phase3 * 0.25;
  const glowOpacity = phase2 * 0.5;

  return (
    <section ref={containerRef} className="relative z-[2]" style={{ height: "200vh" }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: glowOpacity,
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 30% 60%, rgba(26,95,212,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left — Text */}
            <div className="relative h-[280px] lg:h-[340px]">
              {/* Chaos text */}
              <div
                className="absolute inset-0 flex flex-col justify-center"
                style={{ opacity: chaosOpacity, transform: `translateY(${phase2 * -30}px)` }}
              >
                <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-[#EF4444] mb-4">The Problem</span>
                <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold text-text leading-[1.1] mb-4">
                  Every missed call is<br />
                  <span className="text-[#EF4444]">money walking away.</span>
                </h2>
                <p className="text-[16px] text-text-2 max-w-[420px]">
                  Your phone rings while you&rsquo;re with a client. It goes to voicemail. The caller hangs up and calls your competitor. This happens 5, 10, 20 times a week.
                </p>
              </div>

              {/* Order text */}
              <div
                className="absolute inset-0 flex flex-col justify-center"
                style={{ opacity: orderOpacity, transform: `translateY(${(1 - phase2) * 30}px)` }}
              >
                <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-green mb-4">The Solution</span>
                <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold text-text leading-[1.1] mb-4">
                  Every call answered.<br />
                  <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">Every lead captured.</span>
                </h2>
                <p className="text-[16px] text-text-2 max-w-[420px]">
                  DeskWolf&rsquo;s AI picks up every call, books appointments, qualifies leads, and follows up — automatically. 24/7. In four languages.
                </p>
              </div>
            </div>

            {/* Right — Phone */}
            <div className="flex items-center justify-center">
              <div
                className="relative w-[280px] h-[520px] sm:w-[300px] sm:h-[560px]"
                style={{ transform: `rotate(${phoneRotate}deg) scale(${phoneScale})` }}
              >
                {/* Phone frame */}
                <div className="absolute inset-0 rounded-[40px] border-[3px] border-white/[0.12] bg-[rgba(10,12,18,0.95)] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.05)] overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[26px] bg-[#0A0C12] rounded-b-[14px] z-10" />

                  {/* Screen */}
                  <div className="absolute inset-[3px] rounded-[37px] overflow-hidden">
                    {/* Screen tint */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(180deg, rgba(${Math.round(239 - screenHue * 1.5)},${Math.round(68 + screenHue * 0.5)},${Math.round(68 + screenHue * 0.4)},0.07) 0%, rgba(10,12,18,0.98) 50%)`,
                      }}
                    />

                    {/* Chaos — missed calls */}
                    <div className="absolute inset-0 p-5 pt-10 flex flex-col gap-2.5" style={{ opacity: chaosOpacity }}>
                      <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#EF4444] mt-3 mb-1">5 Missed Calls</div>
                      {["Dr. Martinez — 2:15 PM", "Jane K. — 1:48 PM", "Robert S. — 12:30 PM", "Unknown — 11:55 AM", "Peak HVAC — 10:22 AM"].map((call, i) => (
                        <div
                          key={call}
                          className="flex items-center gap-2.5 p-2.5 rounded-[10px] bg-[#EF4444]/[0.06] border border-[#EF4444]/15"
                          style={{ opacity: Math.min(1, phase1 - i * 0.12), transform: `translateX(${Math.max(0, (1 - phase1 + i * 0.12)) * 20}px)` }}
                        >
                          <div className="w-7 h-7 rounded-full bg-[#EF4444]/15 flex items-center justify-center shrink-0">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3" />
                              <line x1="4" y1="4" x2="20" y2="20" stroke="#EF4444" strokeWidth="2" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[11px] font-semibold text-[#EF4444] truncate">{call}</div>
                            <div className="text-[9px] text-text-3">Went to voicemail</div>
                          </div>
                        </div>
                      ))}
                      <div className="mt-auto text-center pb-4">
                        <div className="font-extrabold text-[26px] text-[#EF4444]">-$1,000</div>
                        <div className="font-mono text-[8px] tracking-[0.08em] uppercase text-text-3">Lost today</div>
                      </div>
                    </div>

                    {/* Order — AI handling */}
                    <div className="absolute inset-0 p-5 pt-10 flex flex-col gap-2.5" style={{ opacity: orderOpacity }}>
                      <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-brand-green mt-3 mb-1 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse-dot" />
                        A.N.G.E.L. Active
                      </div>
                      {[
                        { text: "Call Answered — Martinez", sub: "Booked for Tuesday" },
                        { text: "Lead Qualified — Jane K.", sub: "Score: 94 → demo booked" },
                        { text: "Callback — Robert S.", sub: "Connected in 4 seconds" },
                        { text: "FAQ — Walk-in", sub: "Hours + pricing sent" },
                        { text: "Follow-up — Peak HVAC", sub: "Confirmation texted" },
                      ].map((item, i) => (
                        <div
                          key={item.text}
                          className="flex items-center gap-2.5 p-2.5 rounded-[10px] bg-white/[0.03] border border-white/[0.06]"
                          style={{ opacity: Math.min(1, Math.max(0, orderOpacity * 1.5 - i * 0.12)), transform: `translateX(${Math.max(0, (1 - orderOpacity) * 20)}px)` }}
                        >
                          <div className="w-7 h-7 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[11px] font-semibold text-text truncate">{item.text}</div>
                            <div className="text-[9px] text-text-3">{item.sub}</div>
                          </div>
                        </div>
                      ))}
                      <div className="mt-auto text-center pb-4">
                        <div className="font-extrabold text-[26px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">+$1,000</div>
                        <div className="font-mono text-[8px] tracking-[0.08em] uppercase text-text-3">Recovered today</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pulse rings */}
                <div
                  className="absolute inset-[-16px] rounded-[52px] border-2 border-brand-purple/25 pointer-events-none"
                  style={{ transform: `scale(${ringScale})`, opacity: phase3 * 0.4 }}
                />
                <div
                  className="absolute inset-[-32px] rounded-[64px] border border-brand-blue/15 pointer-events-none"
                  style={{ transform: `scale(${ringScale * 1.04})`, opacity: phase3 * 0.25 }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        {progress < 0.05 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-fade-up" style={{ opacity: 0.5 }}>
            <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-text-3">Scroll</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-text-3 animate-bounce">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
}
