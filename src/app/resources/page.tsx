import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Resources — DeskWolf LLC",
  description:
    "Calculators, guides, and tools to help you understand the ROI of AI voice agents for your business.",
  openGraph: {
    title: "Resources — DeskWolf LLC",
    description:
      "Calculators, guides, and tools to help you understand the ROI of AI voice agents for your business.",
    url: "https://deskwolf.ai/resources",
    siteName: "DeskWolf",
    type: "website",
  },
};

/* ── SVG Icons (inline for zero deps) ── */
const CalculatorIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="8" y2="10.01" /><line x1="12" y1="10" x2="12" y2="10.01" /><line x1="16" y1="10" x2="16" y2="10.01" /><line x1="8" y1="14" x2="8" y2="14.01" /><line x1="12" y1="14" x2="12" y2="14.01" /><line x1="16" y1="14" x2="16" y2="14.01" /><line x1="8" y1="18" x2="8" y2="18.01" /><line x1="12" y1="18" x2="16" y2="18" />
  </svg>
);
const PhoneOffIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /><line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);
const BlueprintIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);
const BookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
const PenIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);
const DatabaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ── Resource data ── */
const resources = [
  {
    icon: <CalculatorIcon />,
    color: "blue" as const,
    tag: "Calculator",
    tagColor: "bg-blue-pale text-brand-blue",
    title: "ROI Calculator",
    desc: "Plug in your numbers and see exactly how much revenue AI voice agents can recover for your business.",
    href: "/resources/roi-calculator",
  },
  {
    icon: <PhoneOffIcon />,
    color: "amber" as const,
    tag: "Calculator",
    tagColor: "bg-brand-amber/10 text-brand-amber",
    title: "Missed Call Revenue Calculator",
    desc: "Calculate how much money your business loses every year to unanswered phone calls.",
    href: "/resources/missed-call-calculator",
  },
  {
    icon: <BlueprintIcon />,
    color: "purple" as const,
    tag: "Guide",
    tagColor: "bg-brand-purple/10 text-brand-purple",
    title: "24/7 Front Desk Blueprint",
    desc: "A step-by-step guide to building a never-off front desk using AI voice agents, CRM automation, and smart routing.",
    href: "/resources/front-desk-blueprint",
  },
  {
    icon: <BookIcon />,
    color: "cyan" as const,
    tag: "Glossary",
    tagColor: "bg-brand-cyan/10 text-brand-cyan",
    title: "AI Voice Operations Glossary",
    desc: "Plain-language definitions for every term in the AI voice agent space. No jargon, no fluff.",
    href: "/glossary",
  },
  {
    icon: <PenIcon />,
    color: "green" as const,
    tag: "Blog",
    tagColor: "bg-brand-green/10 text-brand-green",
    title: "Blog",
    desc: "Practical articles on AI automation, voice agents, and running a smarter local business.",
    href: "/blog",
  },
  {
    icon: <DatabaseIcon />,
    color: "blue" as const,
    tag: "Knowledge Base",
    tagColor: "bg-blue-pale text-brand-blue",
    title: "Knowledge Base",
    desc: "Technical docs, integration guides, and troubleshooting for DeskWolf deployments.",
    href: "/knowledge-base",
  },
];

export default function ResourcesPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] pt-[180px] pb-[100px]">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] text-center">
          <div className="rv">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse-dot" />
              <span className="text-sm text-text-2">Resources</span>
            </div>
            <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-5 max-w-[800px] mx-auto">
              Tools to Help You{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                Make the Call.
              </span>
            </h1>
            <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[560px] mx-auto">
              Calculators, guides, and reference material to help you understand the ROI of AI voice agents — before you commit.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════ RESOURCE GRID ════════════ */}
      <section className="relative z-[2] pb-[120px]" id="resources">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((item, i) => (
              <Link key={item.title} href={item.href} className="no-underline block">
                <GlassCard className={`p-8 h-full rv d${(i % 3) + 1}`}>
                  <div className="flex items-center justify-between mb-5">
                    <GradientIcon color={item.color}>{item.icon}</GradientIcon>
                    <span className={`font-mono text-[10px] tracking-[0.08em] uppercase px-3 py-1 rounded-[100px] font-medium ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-[20px] font-extrabold text-text mb-2">{item.title}</h3>
                  <p className="text-sm text-text-3 leading-relaxed mb-5">{item.desc}</p>
                  <div className="flex items-center gap-1.5 text-[13px] font-semibold text-brand-blue mt-auto">
                    Explore <ArrowRightIcon />
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ NEWSLETTER ════════════ */}
      <section className="relative z-[2] py-[100px] overflow-hidden" id="newsletter"
        style={{ background: "linear-gradient(135deg, #F1F5F9 0%, #1E293B 50%, #334155 100%)" }}>
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 50% 50% at 80% 20%, rgba(139,92,246,0.15), transparent), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(6,182,212,0.1), transparent)" }} />
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] relative z-[1] text-center">
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
