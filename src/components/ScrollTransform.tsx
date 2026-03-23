"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-driven transformation section.
 * A big phone outline morphs from "chaos" (missed calls, red alerts)
 * to "order" (DeskWolf handling everything, green confirmations)
 * as the user scrolls through the sticky container.
 */
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

      // progress: 0 when container top hits viewport top, 1 when bottom hits viewport bottom
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / totalScroll));
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Phase breakpoints
  const phase1 = Math.min(1, progress * 3);       // 0-33%: chaos appears
  const phase2 = Math.max(0, Math.min(1, (progress - 0.33) * 3)); // 33-66%: transformation
  const phase3 = Math.max(0, Math.min(1, (progress - 0.66) * 3)); // 66-100%: order

  // Interpolations
  const phoneRotate = 8 - phase2 * 8;        // 8deg → 0deg
  const phoneScale = 0.85 + phase2 * 0.15;   // 0.85 → 1.0
  const glowOpacity = phase2 * 0.6;          // 0 → 0.6
  const chaosOpacity = 1 - phase2;            // 1 → 0
  const orderOpacity = phase2;                // 0 → 1
  const ringScale = 1 + phase3 * 0.3;        // 1 → 1.3
  const screenHue = phase2 * 120;             // 0 (red) → 120 (green)

  return (
    <section ref={containerRef} className="relative z-[2]" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background glow that intensifies */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-100"
          style={{
            opacity: glowOpacity,
            background: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 30% 60%, rgba(26,95,212,0.08) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 70% 40%, rgba(6,182,212,0.08) 0%, transparent 60%)`,
          }}
        />

        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — Text that transitions */}
            <div className="relative min-h-[300px]">
              {/* Chaos text */}
              <div
                className="absolute inset-0 flex flex-col justify-center transition-all duration-300"
                style={{ opacity: chaosOpacity, transform: `translateY(${phase2 * -40}px)` }}
              >
                <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-[#EF4444] mb-4">The Problem</span>
                <h2 className="text-[clamp(30px,4vw,46px)] font-extrabold text-text leading-[1.1] mb-4">
                  Every missed call is
                  <br />
                  <span className="text-[#EF4444]">money walking away.</span>
                </h2>
                <p className="text-[17px] text-text-2 max-w-[440px]">
                  Your phone rings while you&rsquo;re with a client. It goes to voicemail. The caller hangs up and calls your competitor. This happens 5, 10, 20 times a week.
                </p>
              </div>

              {/* Order text */}
              <div
                className="absolute inset-0 flex flex-col justify-center transition-all duration-300"
                style={{ opacity: orderOpacity, transform: `translateY(${(1 - phase2) * 40}px)` }}
              >
                <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-green mb-4">The Solution</span>
                <h2 className="text-[clamp(30px,4vw,46px)] font-extrabold text-text leading-[1.1] mb-4">
                  Every call answered.
                  <br />
                  <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">Every lead captured.</span>
                </h2>
                <p className="text-[17px] text-text-2 max-w-[440px]">
                  DeskWolf&rsquo;s AI picks up every call, books appointments, qualifies leads, and follows up — automatically. 24/7. In four languages.
                </p>
              </div>
            </div>

            {/* Right — Phone graphic that transforms */}
            <div className="flex items-center justify-center">
              <div
                className="relative w-[320px] h-[580px] transition-transform duration-100"
                style={{
                  transform: `rotate(${phoneRotate}deg) scale(${phoneScale})`,
                }}
              >
                {/* Phone frame */}
                <div className="absolute inset-0 rounded-[44px] border-[3px] border-white/[0.15] bg-[rgba(12,14,20,0.9)] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-[#0C0E14] rounded-b-[16px] z-10" />

                  {/* Screen content — transitions from red chaos to green order */}
                  <div className="absolute inset-[3px] rounded-[41px] overflow-hidden">
                    {/* Screen background glow */}
                    <div
                      className="absolute inset-0 transition-all duration-300"
                      style={{
                        background: `linear-gradient(180deg, rgba(${255 - screenHue * 2},${screenHue * 0.7},${screenHue * 0.5},0.06) 0%, rgba(12,14,20,0.95) 40%)`,
                      }}
                    />

                    {/* Chaos state — missed call alerts */}
                    <div className="absolute inset-0 p-6 pt-12 flex flex-col gap-3 transition-all duration-300" style={{ opacity: chaosOpacity }}>
                      <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#EF4444] mt-4 mb-2">5 Missed Calls</div>
                      {["Dr. Martinez — 2:15 PM", "Jane K. — 1:48 PM", "Robert S. — 12:30 PM", "Unknown — 11:55 AM", "Peak HVAC — 10:22 AM"].map((call, i) => (
                        <div
                          key={call}
                          className="flex items-center gap-3 p-3 rounded-[12px] bg-[#EF4444]/[0.08] border border-[#EF4444]/20"
                          style={{ opacity: Math.min(1, phase1 - i * 0.15), transform: `translateX(${Math.max(0, (1 - phase1 + i * 0.15)) * 30}px)` }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#EF4444]/20 flex items-center justify-center shrink-0">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" />
                              <line x1="1" y1="1" x2="23" y2="23" stroke="#EF4444" strokeWidth="2" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[12px] font-semibold text-[#EF4444] truncate">{call}</div>
                            <div className="text-[10px] text-text-3">Went to voicemail</div>
                          </div>
                        </div>
                      ))}
                      <div className="mt-auto text-center">
                        <div className="font-extrabold text-[28px] text-[#EF4444]">-$1,000</div>
                        <div className="font-mono text-[9px] tracking-[0.08em] uppercase text-text-3">Lost today</div>
                      </div>
                    </div>

                    {/* Order state — AI handling everything */}
                    <div className="absolute inset-0 p-6 pt-12 flex flex-col gap-3 transition-all duration-300" style={{ opacity: orderOpacity }}>
                      <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-brand-green mt-4 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse-dot" />
                        A.N.G.E.L. Active
                      </div>
                      {[
                        { text: "Call Answered — Dr. Martinez", sub: "Appointment booked for Tuesday", color: "brand-green" },
                        { text: "Lead Qualified — Jane K.", sub: "Score: 94 → auto-booked demo", color: "brand-blue" },
                        { text: "Callback Sent — Robert S.", sub: "Connected in 4 seconds", color: "brand-cyan" },
                        { text: "FAQ Handled — Walk-in", sub: "Hours + pricing delivered", color: "brand-purple" },
                        { text: "Follow-up Texted — Peak HVAC", sub: "Confirmation sent automatically", color: "brand-amber" },
                      ].map((item, i) => (
                        <div
                          key={item.text}
                          className="flex items-center gap-3 p-3 rounded-[12px] bg-white/[0.04] border border-white/[0.08]"
                          style={{ opacity: Math.min(1, (orderOpacity - 0.2) * 2 - i * 0.1), transform: `translateX(${Math.max(0, (1 - orderOpacity + i * 0.08)) * -30}px)` }}
                        >
                          <div className={`w-8 h-8 rounded-full bg-${item.color}/20 flex items-center justify-center shrink-0`}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[12px] font-semibold text-text truncate">{item.text}</div>
                            <div className="text-[10px] text-text-3">{item.sub}</div>
                          </div>
                        </div>
                      ))}
                      <div className="mt-auto text-center">
                        <div className="font-extrabold text-[28px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">+$1,000</div>
                        <div className="font-mono text-[9px] tracking-[0.08em] uppercase text-text-3">Recovered today</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pulse rings on completion */}
                <div
                  className="absolute inset-[-20px] rounded-[60px] border-2 border-brand-purple/30 pointer-events-none transition-all duration-300"
                  style={{ transform: `scale(${ringScale})`, opacity: phase3 * 0.5 }}
                />
                <div
                  className="absolute inset-[-40px] rounded-[72px] border border-brand-blue/20 pointer-events-none transition-all duration-300"
                  style={{ transform: `scale(${ringScale * 1.05})`, opacity: phase3 * 0.3 }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {progress < 0.1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-fade-up">
            <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-text-3">Scroll to see the transformation</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-text-3 animate-bounce">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
}
