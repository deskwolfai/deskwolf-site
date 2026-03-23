import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "The 24/7 Front Desk Blueprint | DeskWolf LLC",
  description:
    "A complete guide to building an AI-powered front desk that never sleeps. Architecture, cost breakdown, and implementation timeline for local businesses.",
};

/* ── SVG Icons (inline for zero deps) ── */
const AlertIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const CpuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);
const GitBranchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);
const DollarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const RocketIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M5 12h14" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ── Reusable check mark for lists ── */
const Check = () => (
  <span className="w-5 h-5 bg-gradient-to-br from-brand-green to-brand-cyan rounded-full flex items-center justify-center shrink-0 text-white text-[11px] font-bold">&#10003;</span>
);

/* ── Architecture steps ── */
const archSteps = [
  { num: "01", label: "Phone Call", desc: "Customer calls your business number. Any carrier, any device." },
  { num: "02", label: "AI Voice Agent", desc: "Answers in < 1 second. Greets naturally, asks the right questions, handles FAQs." },
  { num: "03", label: "CRM Update", desc: "Logs the call, creates or updates the contact, tags the lead, and triggers workflows." },
  { num: "04", label: "Calendar Booking", desc: "Books appointments in real-time based on your availability rules." },
  { num: "05", label: "Follow-Up", desc: "Sends text confirmation, email recap, and triggers any post-call sequences automatically." },
];

/* ── Timeline phases ── */
const phases = [
  { phase: "Discovery", duration: "Day 1-2", items: ["Business audit & call flow mapping", "FAQ collection & script drafting", "Integration requirements review"] },
  { phase: "Build", duration: "Day 3-7", items: ["Agent training on your business data", "CRM & calendar integration", "Call routing & transfer rules"] },
  { phase: "Launch", duration: "Day 8-10", items: ["Live testing with real calls", "Fine-tuning voice & responses", "Team training & handoff"] },
  { phase: "Optimize", duration: "Ongoing", items: ["Weekly performance reviews", "Script refinement from call data", "New feature deployment"] },
];

export default function FrontDeskBlueprintPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] min-h-[70vh] flex items-center pt-[140px] pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">Free Guide</span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-[18px] max-w-[800px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            The 24/7 Front Desk{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              Blueprint
            </span>
          </h1>

          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[600px] mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            A complete guide to building an AI-powered front desk that never sleeps, never misses a call, and costs less than half of what you&rsquo;re paying now.
          </p>

          <div className="flex gap-3 flex-wrap justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <a href="#problem" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white text-[#0F172A] shadow-[0_4px_20px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]">
              Read the Guide
            </a>
            <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
              Skip to Demo
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ 1. THE PROBLEM ════════════ */}
      <section className="relative z-[2] py-[120px]" id="problem">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16 items-start">
            <div className="rv">
              <GradientIcon color="amber"><AlertIcon /></GradientIcon>
              <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-amber mt-5 block">Section 1</span>
              <h2 className="text-[clamp(30px,4vw,42px)] font-extrabold text-text mt-2">Why traditional front desks fail.</h2>
            </div>
            <div className="rv d2">
              <p className="text-[17px] text-text-2 leading-relaxed mb-6">
                The traditional front desk was designed for a world where businesses operated 9-to-5 and customers were willing to wait. That world doesn&rsquo;t exist anymore.
              </p>
              <p className="text-[17px] text-text-2 leading-relaxed mb-8">
                Today&rsquo;s customers expect instant responses. They search on their phones at 9pm, call during their lunch break, and move to the next option if no one picks up. A single receptionist can&rsquo;t handle peak call volume, doesn&rsquo;t work evenings or weekends, calls in sick, takes vacations, and costs $35,000-$50,000 per year before benefits.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { stat: "62%", label: "of callers won't leave a voicemail" },
                  { stat: "30-40%", label: "of calls go unanswered at small businesses" },
                  { stat: "78%", label: "of customers buy from the first responder" },
                  { stat: "$50K+", label: "in revenue lost annually to missed calls" },
                ].map((s) => (
                  <div key={s.label} className="p-4 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06]">
                    <div className="font-extrabold text-[24px] bg-gradient-to-r from-brand-amber to-[#EF4444] bg-clip-text text-transparent">{s.stat}</div>
                    <div className="text-[12px] text-text-3 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ 2. THE SOLUTION ════════════ */}
      <section className="relative z-[2] py-[120px]" id="solution">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16 items-start">
            <div className="rv">
              <GradientIcon color="blue"><CpuIcon /></GradientIcon>
              <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue mt-5 block">Section 2</span>
              <h2 className="text-[clamp(30px,4vw,42px)] font-extrabold text-text mt-2">AI voice agents, explained simply.</h2>
            </div>
            <div className="rv d2">
              <p className="text-[17px] text-text-2 leading-relaxed mb-6">
                An AI voice agent is software that answers phone calls using natural language processing. It doesn&rsquo;t sound like a robot reading a script. It listens, understands context, and responds conversationally, like a well-trained receptionist who knows your business inside and out.
              </p>
              <p className="text-[17px] text-text-2 leading-relaxed mb-8">
                These agents are trained on your specific business data: your services, pricing, FAQ responses, scheduling rules, and preferred call flow. They can answer questions, book appointments, route calls to the right person, and send follow-up texts, all without human intervention.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Answers calls in under 1 second. No rings, no hold music",
                  "Handles unlimited simultaneous calls. No busy signals, ever",
                  "Works 24/7/365: evenings, weekends, holidays",
                  "Speaks multiple languages: English, Spanish, French, Creole",
                  "Learns and improves from every conversation",
                  "Costs a fraction of a human receptionist",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[15px] text-text-2">
                    <Check />{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ 3. THE ARCHITECTURE ════════════ */}
      <section className="relative z-[2] py-[120px]" id="architecture">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <GradientIcon color="purple"><GitBranchIcon /></GradientIcon>
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-purple mt-5 block">Section 3</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mt-2 mb-3">The architecture.</h2>
            <p className="text-[17px] text-text-2">Phone &rarr; AI &rarr; CRM &rarr; Calendar &rarr; Follow-up. Five steps, fully automated.</p>
          </div>

          <div className="flex flex-col gap-4 mt-12 max-w-[700px] mx-auto">
            {archSteps.map((step, i) => (
              <div key={step.num} className={`rv d${(i % 3) + 1}`}>
                <GlassCard className="p-0">
                  <div className="flex items-center gap-5 p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center shrink-0">
                      <span className="font-mono font-extrabold text-[14px] text-white">{step.num}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[16px] font-extrabold text-text mb-1">{step.label}</h4>
                      <p className="text-sm text-text-3 leading-relaxed">{step.desc}</p>
                    </div>
                    {i < archSteps.length - 1 && (
                      <span className="hidden sm:block text-text-3">
                        <ArrowRightIcon />
                      </span>
                    )}
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ 4. COST BREAKDOWN ════════════ */}
      <section className="relative z-[2] py-[120px]" id="cost">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <GradientIcon color="green"><DollarIcon /></GradientIcon>
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-green mt-5 block">Section 4</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mt-2 mb-3">The cost breakdown.</h2>
            <p className="text-[17px] text-text-2">AI system vs human receptionist. The numbers aren&rsquo;t even close.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12 max-w-[800px] mx-auto">
            {/* Human receptionist */}
            <GlassCard className="p-8 rv d1">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] tracking-[0.08em] uppercase px-3 py-1 rounded-[100px] bg-red-400/10 text-red-400 font-medium">Traditional</span>
              </div>
              <h3 className="text-[20px] font-extrabold text-text mb-1">Human Receptionist</h3>
              <div className="font-extrabold text-[28px] text-red-400 mb-6">$3,500+<span className="text-sm text-text-3 font-normal">/mo</span></div>
              <ul className="list-none flex flex-col gap-2.5">
                {[
                  { item: "Base salary", cost: "$2,500-3,500/mo" },
                  { item: "Benefits & taxes", cost: "+$500-1,000/mo" },
                  { item: "Training & turnover", cost: "+$200-500/mo" },
                  { item: "Coverage hours", cost: "40 hrs/week max" },
                  { item: "Simultaneous calls", cost: "1 at a time" },
                  { item: "Languages", cost: "Usually 1" },
                  { item: "Sick days & vacation", cost: "15-20 days/year" },
                ].map((row) => (
                  <li key={row.item} className="flex items-center justify-between text-[13px]">
                    <span className="text-text-3">{row.item}</span>
                    <span className="text-text-2 font-medium">{row.cost}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* AI system */}
            <div className="relative rv d2">
              <div className="absolute -inset-[1px] rounded-[var(--radius-lg)] bg-gradient-to-b from-brand-blue via-brand-purple to-brand-cyan opacity-30 blur-[2px] -z-10" />
              <GlassCard className="p-8 border-brand-purple/30 shadow-[0_0_60px_-12px_rgba(139,92,246,0.25)] h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase px-3.5 py-1.5 rounded-[100px] text-white font-medium bg-gradient-to-r from-brand-blue to-brand-purple">Recommended</span>
                </div>
                <h3 className="text-[20px] font-extrabold text-text mb-1">DeskWolf AI System</h3>
                <div className="font-extrabold text-[28px] bg-gradient-to-r from-brand-green to-brand-cyan bg-clip-text text-transparent mb-6">$1,500<span className="text-sm text-text-3 font-normal">/mo</span></div>
                <ul className="list-none flex flex-col gap-2.5">
                  {[
                    { item: "Monthly service fee", cost: "$1,500/mo" },
                    { item: "API & phone costs", cost: "~$50-150/mo" },
                    { item: "Training & updates", cost: "Included" },
                    { item: "Coverage hours", cost: "24/7/365" },
                    { item: "Simultaneous calls", cost: "Unlimited" },
                    { item: "Languages", cost: "4 built-in" },
                    { item: "Downtime", cost: "99.9% uptime" },
                  ].map((row) => (
                    <li key={row.item} className="flex items-center justify-between text-[13px]">
                      <span className="text-text-3">{row.item}</span>
                      <span className="text-brand-green font-medium">{row.cost}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>

          <div className="text-center mt-8 rv">
            <GlassCard className="inline-block px-8 py-5">
              <p className="text-[15px] text-text-2">
                Annual savings: <strong className="text-brand-green font-extrabold">$24,000+</strong> per year, with better coverage, faster response times, and zero sick days.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ════════════ 5. IMPLEMENTATION TIMELINE ════════════ */}
      <section className="relative z-[2] py-[120px]" id="timeline">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <GradientIcon color="cyan"><RocketIcon /></GradientIcon>
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-cyan mt-5 block">Section 5</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mt-2 mb-3">Implementation timeline.</h2>
            <p className="text-[17px] text-text-2">Discovery &rarr; Build &rarr; Launch &rarr; Optimize. Most businesses go live within 1-3 weeks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {phases.map((p, i) => (
              <GlassCard key={p.phase} className={`p-7 rv d${i + 1}`}>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center mb-4">
                  <span className="font-mono font-extrabold text-[13px] text-white">{i + 1}</span>
                </div>
                <h4 className="text-[17px] font-extrabold text-text mb-1">{p.phase}</h4>
                <div className="font-mono text-[11px] tracking-[0.06em] text-brand-purple mb-4">{p.duration}</div>
                <ul className="list-none flex flex-col gap-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-text-3">
                      <span className="text-brand-green mt-0.5"><CheckIcon /></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative z-[2] py-[120px]" id="cta">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <GlassCard className="p-[clamp(32px,5vw,52px)] rv">
            <div className="max-w-[600px] mx-auto text-center">
              <GradientIcon color="blue"><PhoneIcon /></GradientIcon>
              <h2 className="text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-text mt-6 mb-4">
                Want us to{" "}
                <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                  build this for you?
                </span>
              </h2>
              <p className="text-[17px] text-text-2 leading-relaxed mb-8">
                Book a free demo and we&rsquo;ll walk you through exactly how a 24/7 AI front desk would work for your specific business. No pressure, no commitment.
              </p>
              <div className="flex gap-3 flex-wrap justify-center">
                <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
                  Book a Free Demo
                  <ArrowRightIcon />
                </a>
                <a href="/pricing" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
                  View Pricing
                </a>
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
