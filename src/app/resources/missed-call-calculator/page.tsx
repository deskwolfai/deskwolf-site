"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

/* ── SVG Icons (inline for zero deps) ── */
const PhoneOffIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);
const DollarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const TrendDownIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M5 12h14" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function MissedCallCalculatorPage() {
  const [callsPerWeek, setCallsPerWeek] = useState(50);
  const [missRate, setMissRate] = useState(30);
  const [avgRevenue, setAvgRevenue] = useState(300);

  const missedPerWeek = Math.round(callsPerWeek * (missRate / 100));
  const weeklyLost = missedPerWeek * avgRevenue;
  const monthlyLost = weeklyLost * 4.33;
  const annualLost = weeklyLost * 52;

  const avgSalary = 45000;
  const salariesEquiv = (annualLost / avgSalary).toFixed(1);
  const vacationCost = 5000;
  const vacationsEquiv = Math.round(annualLost / vacationCost);

  const formatCurrency = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] pt-[160px] pb-[80px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">Free Tool</span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-[18px] max-w-[800px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Missed Call{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              Revenue Calculator
            </span>
          </h1>

          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[580px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Find out exactly how much revenue your business is losing to missed calls every week, month, and year.
          </p>
        </div>
      </section>

      {/* ════════════ CALCULATOR ════════════ */}
      <section className="relative z-[2] py-[80px]" id="calculator">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ── Inputs ── */}
            <div className="rv">
              <GlassCard className="p-8">
                <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue mb-4 block">Your Numbers</span>
                <h3 className="text-[22px] font-extrabold text-text mb-8">Enter your business data</h3>

                {/* Calls per week */}
                <div className="mb-8">
                  <label className="flex items-center justify-between mb-3">
                    <span className="text-[15px] font-semibold text-text">Calls per week</span>
                    <span className="font-mono text-[18px] font-extrabold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">{callsPerWeek}</span>
                  </label>
                  <input
                    type="range"
                    min={5}
                    max={500}
                    step={5}
                    value={callsPerWeek}
                    onChange={(e) => setCallsPerWeek(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10 accent-[#8B5CF6]"
                  />
                  <div className="flex justify-between text-[11px] text-text-3 font-mono mt-1">
                    <span>5</span><span>500</span>
                  </div>
                </div>

                {/* Miss rate */}
                <div className="mb-8">
                  <label className="flex items-center justify-between mb-3">
                    <span className="text-[15px] font-semibold text-text">Estimated miss rate</span>
                    <span className="font-mono text-[18px] font-extrabold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">{missRate}%</span>
                  </label>
                  <input
                    type="range"
                    min={5}
                    max={80}
                    step={5}
                    value={missRate}
                    onChange={(e) => setMissRate(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10 accent-[#8B5CF6]"
                  />
                  <div className="flex justify-between text-[11px] text-text-3 font-mono mt-1">
                    <span>5%</span><span>80%</span>
                  </div>
                  <p className="text-[12px] text-text-3 mt-2">Industry average: 30-40% of calls go unanswered for small businesses.</p>
                </div>

                {/* Avg revenue per customer */}
                <div className="mb-4">
                  <label className="flex items-center justify-between mb-3">
                    <span className="text-[15px] font-semibold text-text">Avg revenue per customer</span>
                    <span className="font-mono text-[18px] font-extrabold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">{formatCurrency(avgRevenue)}</span>
                  </label>
                  <input
                    type="range"
                    min={50}
                    max={5000}
                    step={50}
                    value={avgRevenue}
                    onChange={(e) => setAvgRevenue(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10 accent-[#8B5CF6]"
                  />
                  <div className="flex justify-between text-[11px] text-text-3 font-mono mt-1">
                    <span>$50</span><span>$5,000</span>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* ── Results ── */}
            <div className="rv d2">
              <GlassCard className="p-8">
                <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-red-400 mb-4 block">Revenue Lost</span>
                <h3 className="text-[22px] font-extrabold text-text mb-2">You&rsquo;re losing an estimated</h3>
                <p className="text-[14px] text-text-3 mb-8">Based on <strong className="text-text">{missedPerWeek} missed calls</strong> per week</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="p-5 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06] text-center">
                    <GradientIcon color="amber"><DollarIcon /></GradientIcon>
                    <div className="font-extrabold text-[24px] bg-gradient-to-r from-brand-amber to-[#EF4444] bg-clip-text text-transparent mt-3">{formatCurrency(weeklyLost)}</div>
                    <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">Per Week</div>
                  </div>
                  <div className="p-5 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06] text-center">
                    <GradientIcon color="amber"><CalendarIcon /></GradientIcon>
                    <div className="font-extrabold text-[24px] bg-gradient-to-r from-brand-amber to-[#EF4444] bg-clip-text text-transparent mt-3">{formatCurrency(monthlyLost)}</div>
                    <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">Per Month</div>
                  </div>
                  <div className="p-5 bg-red-500/[0.08] rounded-[var(--radius-sm)] border border-red-400/20 text-center">
                    <GradientIcon color="amber"><TrendDownIcon /></GradientIcon>
                    <div className="font-extrabold text-[28px] text-red-400 mt-3">{formatCurrency(annualLost)}</div>
                    <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">Per Year</div>
                  </div>
                </div>

                {/* Comparisons */}
                <div className="p-5 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06] mb-6">
                  <h4 className="text-[14px] font-extrabold text-text mb-3">To put that in perspective:</h4>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-purple rounded-full flex items-center justify-center shrink-0 text-white text-[12px] font-bold">
                        <PhoneOffIcon />
                      </span>
                      <p className="text-[14px] text-text-2">
                        That&rsquo;s equivalent to <strong className="text-text">{salariesEquiv} full-time employee salaries</strong> walking out the door every year.
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-gradient-to-br from-brand-green to-brand-cyan rounded-full flex items-center justify-center shrink-0 text-white text-[12px] font-bold">
                        <CalendarIcon />
                      </span>
                      <p className="text-[14px] text-text-2">
                        Or <strong className="text-text">{vacationsEquiv} family vacations</strong> you could have taken instead.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex gap-3 flex-wrap">
                  <a href="/contact" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-6 py-3 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
                    Download Full Report
                  </a>
                  <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-6 py-3 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
                    Book a Demo
                    <ArrowRightIcon />
                  </a>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ CONTEXT ════════════ */}
      <section className="relative z-[2] py-[100px]" id="context">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">The Reality</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Why these numbers matter.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              {
                icon: <PhoneOffIcon />,
                color: "amber" as const,
                stat: "62%",
                title: "of callers won't leave a voicemail",
                desc: "When someone calls your business and no one picks up, the majority simply hang up and call the next company on Google. You never even know they called.",
              },
              {
                icon: <DollarIcon />,
                color: "blue" as const,
                stat: "5-10x",
                title: "lifetime value multiplier",
                desc: "A missed call isn't just one lost sale. It's the repeat business, referrals, and reviews that customer would have generated over years. The real cost compounds.",
              },
              {
                icon: <TrendDownIcon />,
                color: "purple" as const,
                stat: "78%",
                title: "buy from the first responder",
                desc: "Research shows that the first business to respond wins the deal the vast majority of the time. Speed-to-lead isn't a nice-to-have — it's the entire game.",
              },
            ].map((card, i) => (
              <GlassCard key={card.title} className={`p-8 text-center rv d${i + 1}`}>
                <GradientIcon color={card.color}>{card.icon}</GradientIcon>
                <div className="font-extrabold text-[36px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent mt-4">{card.stat}</div>
                <h4 className="text-[15px] font-extrabold text-text mt-1 mb-3">{card.title}</h4>
                <p className="text-sm text-text-3 leading-relaxed">{card.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative z-[2] py-[120px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center">
          <div className="rv">
            <h2 className="text-[clamp(30px,4vw,46px)] mb-4">
              Stop the bleeding.{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                Start recovering.
              </span>
            </h2>
            <p className="text-[17px] text-text-2 max-w-[480px] mx-auto mb-8">
              DeskWolf answers every call, 24/7. See how it works in a live demo tailored to your business.
            </p>
            <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
              Book a Free Demo
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ NEWSLETTER ════════════ */}
      <section className="relative z-[2] py-[100px] overflow-hidden" id="newsletter"
        style={{ background: "linear-gradient(135deg, #F1F5F9 0%, #1E293B 50%, #334155 100%)" }}>
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 50% 50% at 80% 20%, rgba(139,92,246,0.15), transparent), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(6,182,212,0.1), transparent)" }} />
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] relative z-[1] text-center">
          <div className="rv">
            <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-white/50">Stay Connected</span>
            <h2 className="text-[clamp(30px,4vw,46px)] text-white mb-3">Get the no-fluff AI newsletter.</h2>
            <p className="text-[17px] text-white/60 max-w-[440px] mx-auto mb-7">Practical AI insights for local business owners. No spam, no jargon.</p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
