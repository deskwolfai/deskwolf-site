import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Knowledge Base | DeskWolf LLC",
  description:
    "Find answers about AI voice agents, CRM integration, call analytics, billing, and more. The DeskWolf knowledge base has everything you need.",
  openGraph: {
    title: "Knowledge Base | DeskWolf LLC",
    description:
      "Find answers about AI voice agents, CRM integration, call analytics, billing, and more.",
    url: "https://deskwolf.ai/knowledge-base",
    siteName: "DeskWolf",
    type: "website",
  },
};

/* ── SVG Icons (inline for zero deps) ── */
const RocketIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);
const MicIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);
const MonitorIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const ChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);
const DollarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const WrenchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
const CodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ── Category data ── */
const categories = [
  {
    icon: <RocketIcon />,
    color: "blue" as const,
    title: "Getting Started",
    desc: "How DeskWolf works, what to expect during onboarding, and how to get the most out of your AI system from day one.",
    articles: 6,
  },
  {
    icon: <MicIcon />,
    color: "purple" as const,
    title: "AI Voice Agents",
    desc: "How the AI handles calls, how to train it on your business, call routing logic, and frequently asked questions about voice quality.",
    articles: 9,
  },
  {
    icon: <MonitorIcon />,
    color: "green" as const,
    title: "CRM Integration",
    desc: "Connecting your CRM to DeskWolf, pipeline setup, automatic lead routing, and keeping your data in sync.",
    articles: 7,
  },
  {
    icon: <CalendarIcon />,
    color: "amber" as const,
    title: "Calendar & Booking",
    desc: "Appointment scheduling configuration, availability settings, buffer times, timezone handling, and booking confirmations.",
    articles: 5,
  },
  {
    icon: <ChartIcon />,
    color: "cyan" as const,
    title: "Call Analytics",
    desc: "Reading your performance reports, understanding call transcripts, tracking conversion rates, and measuring ROI.",
    articles: 8,
  },
  {
    icon: <DollarIcon />,
    color: "green" as const,
    title: "Billing & Account",
    desc: "Plans and pricing details, invoice history, how to upgrade or downgrade, and cancellation policy.",
    articles: 4,
  },
  {
    icon: <WrenchIcon />,
    color: "amber" as const,
    title: "Troubleshooting",
    desc: "Common issues and their fixes, how to escalate problems, system status checks, and diagnostic steps.",
    articles: 6,
  },
  {
    icon: <CodeIcon />,
    color: "purple" as const,
    title: "API & Integrations",
    desc: "Webhook setup, third-party connections, API documentation, and how to extend your DeskWolf deployment.",
    articles: 5,
  },
];

export default function KnowledgeBasePage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] pt-[180px] pb-[80px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center">
          <div className="rv">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse-dot" />
              <span className="text-sm text-text-2">Support</span>
            </div>
            <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-5 max-w-[800px] mx-auto">
              Knowledge{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                Base.
              </span>
            </h1>
            <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[560px] mx-auto mb-10">
              Find answers, learn how things work, and get the most out of your DeskWolf deployment.
            </p>

            {/* Search bar (visual only) */}
            <div className="max-w-[520px] mx-auto">
              <div className="flex items-center gap-3 bg-white/[0.06] backdrop-blur-[16px] border border-white/[0.1] rounded-[100px] px-6 py-4 transition-all duration-300 focus-within:border-brand-purple/30 focus-within:bg-white/[0.08]">
                <span className="text-text-3 shrink-0">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  placeholder="Search the knowledge base..."
                  className="flex-1 bg-transparent text-[15px] text-text placeholder:text-text-3 outline-none border-none"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ CATEGORIES GRID ════════════ */}
      <section className="relative z-[2] py-[120px]" id="categories">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat, i) => (
              <a href="/coming-soon" key={cat.title} className="no-underline">
                <GlassCard className={`p-7 h-full rv d${(i % 4) + 1}`}>
                  <GradientIcon color={cat.color}>{cat.icon}</GradientIcon>
                  <h4 className="text-[16px] font-extrabold text-text mb-2 mt-5">{cat.title}</h4>
                  <p className="text-[13px] text-text-3 leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-mono text-text-3">{cat.articles} articles</span>
                    <span className="text-brand-purple transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRightIcon />
                    </span>
                  </div>
                </GlassCard>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CONTACT CTA ════════════ */}
      <section className="relative z-[2] py-[120px]" id="help">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="max-w-[600px] mx-auto rv">
            <GlassCard className="p-10 text-center">
              <h3 className="text-[clamp(24px,3vw,32px)] font-extrabold text-text mb-3">
                Can&rsquo;t find what you need?
              </h3>
              <p className="text-[16px] text-text-2 leading-relaxed max-w-[440px] mx-auto mb-7">
                Our team is here to help. Reach out and we&rsquo;ll get you the answer, usually within a few hours.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
                Contact Support
              </a>
            </GlassCard>
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
