import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Service Agreement — DeskWolf LLC",
  description:
    "A plain-language summary of what you get, what you own, and how DeskWolf works with you. No legalese required.",
};

/* ── SVG Icons ── */
const PackageIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const KeyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
  </svg>
);
const DollarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const DoorIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
    <line x1="15" y1="13" x2="15" y2="13.01" />
  </svg>
);
const WrenchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const HandshakeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
  </svg>
);

const sections = [
  {
    icon: <PackageIcon />,
    color: "blue" as const,
    title: "What You Get",
    items: [
      "AI voice agent(s) custom-built for your business",
      "CRM setup, pipeline configuration, and automation workflows",
      "Third-party integrations (calendar, phone, email, etc.)",
      "Ongoing monitoring, optimization, and management",
      "Regular performance reports and recommendations",
    ],
  },
  {
    icon: <KeyIcon />,
    color: "green" as const,
    title: "What You Own",
    items: [
      "All API keys and third-party accounts — registered under your name",
      "All customer data, call recordings, and transcripts",
      "AI agent configurations, scripts, and trained models",
      "CRM pipelines, workflows, and contact lists",
      "Everything we build for you is yours, full stop",
    ],
  },
  {
    icon: <DollarIcon />,
    color: "amber" as const,
    title: "What We Charge",
    items: [
      "One-time setup fee for deployment and configuration",
      "Monthly subscription for ongoing management and optimization",
      "Third-party tool costs passed through at cost — zero markup",
      "No hidden fees, no surprise charges, no long-term contracts",
      "All pricing clearly outlined before any work begins",
    ],
  },
  {
    icon: <DoorIcon />,
    color: "purple" as const,
    title: "What Happens If You Cancel",
    items: [
      "Give us 30 days written notice — that's it",
      "We provide a complete transition handoff",
      "All accounts, data, and configurations stay with you",
      "30 days of email support after your final service date",
      "No cancellation fees, no penalties, no hostage situations",
    ],
  },
  {
    icon: <WrenchIcon />,
    color: "cyan" as const,
    title: "What Happens If Something Breaks",
    items: [
      "We fix it — that's included in your subscription",
      "Critical issues: 1 business hour response time",
      "Standard issues: same business day response",
      "Root cause analysis provided for recurring problems",
      "System improvements implemented proactively, not just reactively",
    ],
  },
  {
    icon: <HandshakeIcon />,
    color: "blue" as const,
    title: "What We Need From You",
    items: [
      "Access to your phone system, CRM, and calendar",
      "Timely feedback on agent training and call quality",
      "A point of contact for questions and approvals",
      "Honest communication about your business needs and changes",
      "That's it — we handle the rest",
    ],
  },
];

export default function ServiceAgreementPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] min-h-[60vh] flex items-center pt-[140px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] rv">
            <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">Plain Language</span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-[18px] max-w-[800px] mx-auto rv d1">
            Service Agreement,{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              in plain English.
            </span>
          </h1>

          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[580px] mx-auto mb-8 rv d2">
            No legalese, no fine print tricks. Here&rsquo;s exactly what our service relationship looks like — what you get, what you own, and how it all works.
          </p>

          <div className="flex gap-3 flex-wrap justify-center rv d3">
            <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white text-[#0F172A] shadow-[0_4px_20px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]">
              Book a Free Demo
            </a>
            <a href="/terms" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
              Full Terms of Service
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ AGREEMENT CARDS ════════════ */}
      <section className="relative z-[2] py-[120px]">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sections.map((s, i) => (
              <GlassCard key={s.title} className={`p-8 rv d${i + 1}`}>
                <GradientIcon color={s.color}>{s.icon}</GradientIcon>
                <h3 className="text-[19px] font-extrabold text-text mt-5 mb-4">{s.title}</h3>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-3 items-start text-sm text-text-3 leading-relaxed">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-brand-green">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ RESPONSE TIMES ════════════ */}
      <section className="relative z-[2] py-[120px]">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Support</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">Response Times</h2>
            <p className="text-[17px] text-text-2">When something needs attention, we move fast.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12 max-w-[700px] mx-auto">
            <GlassCard className="p-8 text-center rv d1">
              <div className="text-[clamp(36px,5vw,48px)] font-extrabold bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent mb-2">
                1 Hour
              </div>
              <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-brand-purple mb-3">Critical Issues</div>
              <p className="text-sm text-text-3">Agent down, calls not routing, system outage. We respond within 1 business hour.</p>
            </GlassCard>
            <GlassCard className="p-8 text-center rv d2">
              <div className="text-[clamp(36px,5vw,48px)] font-extrabold bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent mb-2">
                Same Day
              </div>
              <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-brand-purple mb-3">Standard Requests</div>
              <p className="text-sm text-text-3">Configuration changes, optimization requests, reporting questions. Same business day response.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ════════════ BOTTOM LINE ════════════ */}
      <section className="relative z-[2] py-[120px]">
        <div className="max-w-[800px] mx-auto px-[clamp(20px,5vw,64px)] text-center rv">
          <blockquote className="italic text-[clamp(22px,3vw,30px)] text-text leading-relaxed font-light">
            &ldquo;You own everything. We manage everything. You can leave anytime. That&rsquo;s how it should work.&rdquo;
          </blockquote>
          <p className="text-[17px] text-text-2 mt-6 max-w-[520px] mx-auto">
            We believe the best way to keep clients is to never make them feel trapped. Our service stands on its own merits — not on contracts designed to be hard to leave.
          </p>
          <div className="mt-8 flex gap-3 flex-wrap justify-center">
            <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
              Book a Free Demo
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
              Questions? Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
