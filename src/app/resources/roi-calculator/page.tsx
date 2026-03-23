"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

/* ── SVG Icons (inline for zero deps) ── */
const CalculatorIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="8" y2="10.01" /><line x1="12" y1="10" x2="12" y2="10.01" /><line x1="16" y1="10" x2="16" y2="10.01" /><line x1="8" y1="14" x2="8" y2="14.01" /><line x1="12" y1="14" x2="12" y2="14.01" /><line x1="16" y1="14" x2="16" y2="14.01" /><line x1="8" y1="18" x2="8" y2="18.01" /><line x1="12" y1="18" x2="16" y2="18" />
  </svg>
);
const DollarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const TrendUpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
  </svg>
);
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

/* ── Helper: format currency ── */
function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

/* ── Business type presets ── */
const businessTypes = [
  { label: "Select your industry (optional)", calls: 0, missed: 0, value: 0 },
  { label: "Dental / Med Spa", calls: 120, missed: 30, value: 250 },
  { label: "HVAC / Plumbing", calls: 100, missed: 35, value: 350 },
  { label: "Legal / Law Firm", calls: 80, missed: 25, value: 500 },
  { label: "Real Estate", calls: 90, missed: 30, value: 400 },
  { label: "Home Services", calls: 110, missed: 40, value: 300 },
  { label: "Insurance", calls: 100, missed: 30, value: 450 },
  { label: "Auto / Body Shop", calls: 85, missed: 25, value: 600 },
  { label: "Other", calls: 0, missed: 0, value: 0 },
];

const DESKWOLF_MONTHLY_COST = 1500;

export default function ROICalculatorPage() {
  const [weeklyCalls, setWeeklyCalls] = useState(100);
  const [missedPct, setMissedPct] = useState(30);
  const [avgValue, setAvgValue] = useState(250);

  const results = useMemo(() => {
    const weeklyMissed = Math.round(weeklyCalls * (missedPct / 100));
    const annualMissed = weeklyMissed * 52;
    const annualLost = annualMissed * avgValue;
    const annualCost = DESKWOLF_MONTHLY_COST * 12;
    const netAnnualGain = annualLost - annualCost;
    const paybackDays = annualLost > 0 ? Math.ceil((DESKWOLF_MONTHLY_COST / (annualLost / 365))) : 0;
    const roi = annualCost > 0 ? annualLost / annualCost : 0;

    return {
      weeklyMissed,
      annualMissed,
      annualLost,
      annualCost,
      netAnnualGain,
      paybackDays,
      roi,
    };
  }, [weeklyCalls, missedPct, avgValue]);

  function handleBusinessType(idx: number) {
    const preset = businessTypes[idx];
    if (preset.calls > 0) {
      setWeeklyCalls(preset.calls);
      setMissedPct(preset.missed);
      setAvgValue(preset.value);
    }
  }

  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] pt-[160px] pb-[80px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center">
          <div className="rv">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse-dot" />
              <span className="text-sm text-text-2">Free Tool</span>
            </div>
            <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-5 max-w-[800px] mx-auto">
              See What Missed Calls{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                Actually Cost You.
              </span>
            </h1>
            <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[560px] mx-auto">
              Plug in your numbers. Get an instant breakdown of lost revenue, payback period, and net annual gain from an AI receptionist.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════ CALCULATOR ════════════ */}
      <section className="relative z-[2] pb-[120px]" id="calculator">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* ── INPUTS ── */}
            <div className="rv">
              <GlassCard className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <GradientIcon color="blue"><CalculatorIcon /></GradientIcon>
                  <h2 className="text-[22px] font-extrabold text-text">Your Numbers</h2>
                </div>

                {/* Business type dropdown */}
                <div className="mb-6">
                  <label className="block font-mono text-[11px] tracking-[0.08em] uppercase text-text-3 mb-2">
                    Business Type
                  </label>
                  <select
                    onChange={(e) => handleBusinessType(Number(e.target.value))}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-[14px] px-4 py-3 text-[15px] text-text appearance-none cursor-pointer focus:outline-none focus:border-brand-purple/40 transition-colors"
                  >
                    {businessTypes.map((bt, i) => (
                      <option key={bt.label} value={i} className="bg-[#1E293B] text-white">{bt.label}</option>
                    ))}
                  </select>
                </div>

                {/* Weekly call volume */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="font-mono text-[11px] tracking-[0.08em] uppercase text-text-3">
                      Weekly Call Volume
                    </label>
                    <span className="font-extrabold text-[18px] bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                      {weeklyCalls}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={500}
                    step={5}
                    value={weeklyCalls}
                    onChange={(e) => setWeeklyCalls(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/[0.08] accent-brand-blue"
                  />
                  <div className="flex justify-between text-[11px] text-text-3 mt-1">
                    <span>10</span><span>500</span>
                  </div>
                </div>

                {/* Missed call percentage */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="font-mono text-[11px] tracking-[0.08em] uppercase text-text-3">
                      Missed Call Percentage
                    </label>
                    <span className="font-extrabold text-[18px] bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">
                      {missedPct}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={80}
                    step={1}
                    value={missedPct}
                    onChange={(e) => setMissedPct(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/[0.08] accent-brand-purple"
                  />
                  <div className="flex justify-between text-[11px] text-text-3 mt-1">
                    <span>5%</span><span>80%</span>
                  </div>
                </div>

                {/* Average ticket value */}
                <div className="mb-2">
                  <label className="block font-mono text-[11px] tracking-[0.08em] uppercase text-text-3 mb-2">
                    Average Ticket / Job Value ($)
                  </label>
                  <input
                    type="number"
                    min={10}
                    max={50000}
                    step={10}
                    value={avgValue}
                    onChange={(e) => setAvgValue(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-[14px] px-4 py-3 text-[15px] text-text focus:outline-none focus:border-brand-purple/40 transition-colors"
                  />
                </div>
              </GlassCard>
            </div>

            {/* ── OUTPUTS ── */}
            <div className="rv d2 flex flex-col gap-5">
              {/* Big number: Annual revenue lost */}
              <GlassCard className="p-8 text-center">
                <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-text-3 mb-2">Annual Revenue Lost to Missed Calls</div>
                <div className="font-extrabold text-[clamp(36px,5vw,56px)] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent leading-tight">
                  {fmt(results.annualLost)}
                </div>
                <p className="text-[14px] text-text-3 mt-2">
                  {results.weeklyMissed} missed calls/week &times; {fmt(avgValue)} &times; 52 weeks
                </p>
              </GlassCard>

              {/* Three metric cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <GlassCard className="p-6 text-center">
                  <GradientIcon color="green" className="mx-auto mb-3"><DollarIcon /></GradientIcon>
                  <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mb-1">DeskWolf Cost</div>
                  <div className="font-extrabold text-[22px] text-text">{fmt(DESKWOLF_MONTHLY_COST)}/mo</div>
                </GlassCard>

                <GlassCard className="p-6 text-center">
                  <GradientIcon color="cyan" className="mx-auto mb-3"><ClockIcon /></GradientIcon>
                  <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mb-1">Payback Period</div>
                  <div className="font-extrabold text-[22px] bg-gradient-to-r from-brand-cyan to-brand-green bg-clip-text text-transparent">
                    {results.paybackDays > 0 ? `${results.paybackDays} days` : "—"}
                  </div>
                </GlassCard>

                <GlassCard className="p-6 text-center">
                  <GradientIcon color="purple" className="mx-auto mb-3"><TrendUpIcon /></GradientIcon>
                  <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mb-1">ROI</div>
                  <div className="font-extrabold text-[22px] bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">
                    {results.roi > 0 ? `${results.roi.toFixed(1)}x` : "—"}
                  </div>
                </GlassCard>
              </div>

              {/* Net annual gain */}
              <GlassCard className="p-8 text-center">
                <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-text-3 mb-2">Net Annual Gain</div>
                <div className={`font-extrabold text-[clamp(32px,4.5vw,48px)] leading-tight ${results.netAnnualGain >= 0 ? "bg-gradient-to-r from-brand-green to-brand-cyan bg-clip-text text-transparent" : "text-[#EF4444]"}`}>
                  {fmt(results.netAnnualGain)}
                </div>
                <p className="text-[14px] text-text-3 mt-2">
                  Revenue recovered minus {fmt(results.annualCost)}/year for DeskWolf
                </p>
              </GlassCard>

              {/* CTA */}
              <div className="text-center mt-2">
                <a
                  href="/demo"
                  className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]"
                >
                  Book a Demo With Your Numbers
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ CONTEXT SECTION ════════════ */}
      <section className="relative z-[2] py-[100px]" id="context">
        <div className="max-w-[800px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <GlassCard className="p-[clamp(32px,5vw,48px)] rv">
            <div className="text-center">
              <h3 className="text-[clamp(24px,3vw,32px)] font-extrabold text-text mb-4">
                How we calculate{" "}
                <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                  these numbers.
                </span>
              </h3>
              <div className="text-left max-w-[560px] mx-auto">
                <ul className="list-none flex flex-col gap-4 text-[15px] text-text-2 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white text-[11px] font-bold shrink-0 mt-0.5">1</span>
                    <span><strong className="text-text">Weekly missed calls</strong> = your weekly volume &times; your missed percentage. This is how many potential customers hear silence every week.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-purple to-brand-cyan flex items-center justify-center text-white text-[11px] font-bold shrink-0 mt-0.5">2</span>
                    <span><strong className="text-text">Annual revenue lost</strong> = missed calls &times; 52 weeks &times; your average ticket value. Not every missed call would have converted, but even partial recovery changes the math dramatically.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-cyan to-brand-green flex items-center justify-center text-white text-[11px] font-bold shrink-0 mt-0.5">3</span>
                    <span><strong className="text-text">Net gain</strong> = recovered revenue minus $18,000/year for DeskWolf. The payback period shows how many days until the service has paid for itself.</span>
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>
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
