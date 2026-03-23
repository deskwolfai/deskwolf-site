import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Partner With Us — DeskWolf LLC",
  description:
    "Partner with DeskWolf to offer AI voice agents and automation to your clients. Referral, integration, and white-label partnership tiers available.",
  openGraph: {
    title: "Partner With Us — DeskWolf LLC",
    description:
      "Partner with DeskWolf to offer AI voice agents and automation to your clients.",
    url: "https://deskwolf.ai/partners",
    siteName: "DeskWolf",
    type: "website",
  },
};

/* ── SVG Icons (inline for zero deps) ── */
const DollarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const PuzzleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.61-1.61a2.404 2.404 0 0 1 1.705-.707c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02z" />
  </svg>
);
const LayersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
  </svg>
);
const MegaphoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const CodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
const MonitorIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);
const ServerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);
const RefreshIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <polyline points="1 4 1 10 7 10" /><polyline points="23 20 23 14 17 14" /><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
  </svg>
);
const BoltIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);
const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

/* ── Checkmark helper ── */
const Check = () => (
  <span className="w-5 h-5 bg-gradient-to-br from-brand-green to-brand-cyan rounded-full flex items-center justify-center shrink-0 text-white text-[11px] font-bold">&#10003;</span>
);

/* ── Partner types ── */
const partnerTypes = [
  { icon: <MegaphoneIcon />, color: "blue" as const, title: "Marketing Agencies", desc: "You run campaigns and drive leads. We make sure none of those leads hit voicemail. Offer AI voice agents as an add-on to your existing services." },
  { icon: <CodeIcon />, color: "purple" as const, title: "Web Developers & Designers", desc: "You build the website. We build the AI that answers when visitors call. A natural extension of any web project." },
  { icon: <MonitorIcon />, color: "green" as const, title: "CRM Consultants", desc: "You set up GoHighLevel, HubSpot, or Salesforce. We integrate AI that logs calls, updates pipelines, and books appointments automatically." },
  { icon: <ServerIcon />, color: "amber" as const, title: "IT Managed Services", desc: "You manage the tech stack. We add an AI layer that handles phones, follow-ups, and scheduling without adding headcount." },
];

/* ── Tier data ── */
const tiers = [
  {
    label: "Tier 1",
    name: "Referral Partner",
    featured: false,
    features: [
      "10% commission on every referred client's first invoice",
      "Unique referral link and tracking",
      "Marketing assets and swipe copy",
      "Dedicated affiliate support",
      "No minimum referrals required",
    ],
    cta: "Apply Now",
    ctaHref: "/contact",
  },
  {
    label: "Tier 2",
    name: "Integration Partner",
    featured: true,
    badge: "Recommended",
    features: [
      "Everything in Referral Partner, plus:",
      "Co-build custom integrations for shared clients",
      "Co-marketing opportunities (case studies, webinars)",
      "Joint sales support and proposals",
      "Early access to new features and APIs",
      "Partner directory listing on deskwolf.ai",
    ],
    cta: "Apply Now",
    ctaHref: "/contact",
  },
  {
    label: "Tier 3",
    name: "White-Label Partner",
    featured: false,
    comingSoon: true,
    features: [
      "Everything in Integration Partner, plus:",
      "Rebrand DeskWolf AI under your own company",
      "Custom pricing and packaging",
      "Dedicated engineering support",
      "Volume licensing and SLA guarantees",
      "Priority roadmap input",
    ],
    cta: "Join Waitlist",
    ctaHref: "/contact",
  },
];

/* ── Benefits ── */
const benefits = [
  { icon: <DollarIcon />, color: "green" as const, title: "Recurring Revenue", desc: "Earn commissions on every client you refer. Integration and white-label partners unlock additional revenue streams." },
  { icon: <MegaphoneIcon />, color: "blue" as const, title: "Co-Marketing", desc: "Joint case studies, shared webinars, and cross-promotion. We help you grow your audience while you help grow ours." },
  { icon: <ShieldIcon />, color: "purple" as const, title: "Dedicated Partner Support", desc: "A real human on our team who knows your business, answers your questions, and helps close deals together." },
  { icon: <BoltIcon />, color: "amber" as const, title: "Early Access", desc: "Be the first to see new features, integrations, and products before they launch publicly." },
  { icon: <RefreshIcon />, color: "cyan" as const, title: "Continuous Improvement", desc: "As DeskWolf evolves, your partnership gets stronger. New capabilities mean new upsell opportunities for your clients." },
  { icon: <LayersIcon />, color: "green" as const, title: "Scalable Model", desc: "Whether you refer one client or fifty, the system works. No extra overhead, no inventory, no fulfillment headaches." },
];

export default function PartnersPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] min-h-[70vh] flex items-center pt-[140px] pb-[100px]">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">Partnerships</span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-[18px] max-w-[800px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Partner With{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              DeskWolf.
            </span>
          </h1>

          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[620px] mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            You serve businesses. We make those businesses more efficient. Together, we create a complete solution — and you earn revenue doing it.
          </p>

          <div className="flex gap-3 flex-wrap justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <a href="/contact" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
              Apply to Partner
            </a>
            <a href="/referral" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
              Already a Partner? Sign In
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ WHO WE PARTNER WITH ════════════ */}
      <section className="relative z-[2] py-[120px]" id="who">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">For Complementary Agencies</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Built for businesses that<br />
              <span className="font-light text-text-2">serve other businesses.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">
            {partnerTypes.map((pt, i) => (
              <GlassCard key={pt.title} className={`p-8 rv d${(i % 3) + 1}`}>
                <GradientIcon color={pt.color}>{pt.icon}</GradientIcon>
                <h4 className="text-[17px] font-extrabold text-text mb-2 mt-5">{pt.title}</h4>
                <p className="text-sm text-text-3 leading-relaxed">{pt.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PARTNERSHIP TIERS ════════════ */}
      <section className="relative z-[2] py-[120px]" id="tiers">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-purple">Partnership Tiers</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Choose your level<br />
              <span className="font-light text-text-2">of partnership.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch mt-12">
            {tiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`rv d${i + 1} relative rounded-[var(--radius-lg)] ${
                  tier.featured
                    ? "bg-gradient-to-b from-brand-blue/20 via-brand-purple/10 to-transparent p-[1px]"
                    : ""
                }`}
              >
                {tier.featured && (
                  <div className="absolute -inset-[1px] rounded-[var(--radius-lg)] bg-gradient-to-b from-brand-blue via-brand-purple to-brand-cyan opacity-30 blur-[2px] -z-10" />
                )}
                <GlassCard
                  className={`p-9 h-full flex flex-col ${
                    tier.featured
                      ? "border-brand-purple/30 shadow-[0_0_60px_-12px_rgba(139,92,246,0.25)]"
                      : ""
                  }`}
                >
                  {tier.featured && tier.badge && (
                    <span className="inline-flex self-start items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase px-3.5 py-1.5 rounded-[100px] text-white font-medium bg-gradient-to-r from-brand-blue to-brand-purple mb-4">
                      {tier.badge}
                    </span>
                  )}
                  {"comingSoon" in tier && tier.comingSoon && (
                    <span className="inline-flex self-start items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase px-3.5 py-1.5 rounded-[100px] text-white/70 font-medium bg-white/[0.08] border border-white/10 mb-4">
                      Coming Soon
                    </span>
                  )}

                  <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-text-3 mb-1">{tier.label}</div>
                  <h3 className="text-[22px] font-extrabold text-text mb-6">{tier.name}</h3>

                  <ul className="list-none flex flex-col gap-2.5 mb-8 flex-1">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-[14px] text-text-2">
                        <Check />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={tier.ctaHref}
                    className={`inline-flex items-center justify-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] w-full text-center ${
                      tier.featured
                        ? "bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]"
                        : "bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border hover:bg-white/90 hover:shadow-[var(--shadow-std)]"
                    }`}
                  >
                    {tier.cta}
                  </a>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ BENEFITS ════════════ */}
      <section className="relative z-[2] py-[120px]" id="benefits">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Partner Benefits</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              What you get<br />
              <span className="font-light text-text-2">as a DeskWolf partner.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {benefits.map((b, i) => (
              <GlassCard key={b.title} className={`p-8 rv d${(i % 3) + 1}`}>
                <GradientIcon color={b.color}>{b.icon}</GradientIcon>
                <h4 className="text-[17px] font-extrabold text-text mb-2 mt-5">{b.title}</h4>
                <p className="text-sm text-text-3 leading-relaxed">{b.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative z-[2] py-[120px]">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] text-center">
          <div className="rv">
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Let&rsquo;s build{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">together.</span>
            </h2>
            <p className="text-[17px] text-text-2 max-w-[440px] mx-auto mb-8">
              Apply to become a DeskWolf partner. Tell us about your business and how you serve your clients — we&rsquo;ll find the right fit.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="/contact" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
                Apply to Partner
              </a>
              <a href="/referral" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
                Already a Partner? Sign In
              </a>
            </div>
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
