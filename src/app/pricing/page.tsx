import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Agency Services & Pricing — DeskWolf LLC",
  description:
    "Personalized AI consulting and deployment for your business. We work inside your operations — strategy, build, launch, and ongoing management. Transparent pricing, no lock-in.",
  openGraph: {
    title: "Agency Services & Pricing — DeskWolf LLC",
    description:
      "Personalized AI consulting and deployment. We work inside your business.",
    url: "https://deskwolf.ai/pricing",
    siteName: "DeskWolf",
    type: "website",
  },
};

/* ── SVG Icons (inline for zero deps) ── */
const WrenchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
const RefreshIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <polyline points="1 4 1 10 7 10" /><polyline points="23 20 23 14 17 14" /><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
  </svg>
);
const PuzzleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.61-1.61a2.404 2.404 0 0 1 1.705-.707c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02z" />
  </svg>
);
const DollarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const UserIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);
const ChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);
const CRMIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);
const BoltIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);
const LightbulbIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M9 18h6" /><path d="M10 22h4" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
  </svg>
);
const MicIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);
const AvatarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 1 0-16 0" />
  </svg>
);
const BotIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" />
  </svg>
);
const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const ChevronIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/* ── Checkmark helper ── */
const Check = () => (
  <span className="w-5 h-5 bg-gradient-to-br from-brand-green to-brand-cyan rounded-full flex items-center justify-center shrink-0 text-white text-[11px] font-bold">&#10003;</span>
);

/* ── Tier data ── */
const tiers = [
  {
    name: "Self-Serve",
    label: "Starter",
    price: "$1,500",
    period: "/mo",
    featured: false,
    features: [
      "1 AI voice agent (inbound)",
      "Business hours call handling",
      "FAQ responses trained on your business",
      "Appointment booking",
      "Post-call text confirmations",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Get Started",
    ctaHref: "/demo",
  },
  {
    name: "Core",
    label: "White-Glove",
    price: "$2,500",
    period: "/mo",
    featured: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter, plus:",
      "24/7 coverage (after-hours included)",
      "Missed call-back agent",
      "Outbound lead qualifier",
      "Multi-language support",
      "CRM integration & call logging",
      "Dedicated account manager",
      "Weekly optimization reviews",
      "Priority support (Slack/Discord)",
    ],
    cta: "Book a Demo",
    ctaHref: "/demo",
  },
  {
    name: "Enterprise",
    label: "Multi-Location",
    price: "Custom",
    period: "",
    featured: false,
    features: [
      "Everything in Core, plus:",
      "Unlimited locations & agents",
      "Custom workflow automation",
      "API access & white-labeling",
      "Dedicated systems engineer",
      "SLA guarantees",
      "Quarterly business reviews",
      "Volume pricing",
    ],
    cta: "Contact Sales",
    ctaHref: "/demo",
  },
];

/* ── Included items ── */
const included = [
  { icon: <WrenchIcon />, color: "green" as const, title: "Break-Fix Support", desc: "Something breaks, we fix it. No extra charge, no ticket queues. Your system stays online." },
  { icon: <RefreshIcon />, color: "blue" as const, title: "Tech Evolution", desc: "As AI improves, your system improves. We upgrade models, retrain agents, and deploy updates automatically." },
  { icon: <PuzzleIcon />, color: "purple" as const, title: "Deeper Integrations", desc: "CRM, calendar, PMS, EHR — we connect your AI to the tools you already use." },
  { icon: <DollarIcon />, color: "amber" as const, title: "Cost Optimization", desc: "We monitor your usage, optimize API calls, and fight for the lowest possible cost every month." },
  { icon: <UserIcon />, color: "cyan" as const, title: "AM Consultation", desc: "Your dedicated account manager is available for monthly strategy calls and system reviews." },
  { icon: <ChartIcon />, color: "green" as const, title: "Monthly Optimization", desc: "Call analysis, script refinement, and agent tuning based on real performance data." },
];

/* ── Add-on data ── */
const addons = [
  { icon: <CRMIcon />, color: "blue" as const, title: "CRM Automation", desc: "Full GoHighLevel or HubSpot automation — pipelines, sequences, reporting.", price: "$1,000/mo" },
  { icon: <BoltIcon />, color: "purple" as const, title: "AI Automations", desc: "Custom n8n workflows — intake forms, email routing, data sync, alerts.", price: "$500/mo" },
  { icon: <LightbulbIcon />, color: "amber" as const, title: "Tech Consulting", desc: "Ad-hoc consulting for AI strategy, vendor selection, or architecture review.", price: "$100/hr" },
  { icon: <MicIcon />, color: "cyan" as const, title: "Voice/Video Cloning", desc: "Clone your voice or create branded video content with AI-generated media.", price: "$1,000" },
  { icon: <AvatarIcon />, color: "green" as const, title: "AI Avatar", desc: "Custom AI spokesperson for video content, training materials, or marketing.", price: "$500" },
  { icon: <BotIcon />, color: "purple" as const, title: "Additional Agents", desc: "Deploy more AI agents across departments, locations, or use cases.", price: "$1,500/mo" },
];

/* ── FAQ data ── */
const faqs = [
  { q: "How long does setup take?", a: "Most deployments go live within 2–3 weeks. That includes discovery, agent training, integration setup, and testing. Complex multi-location builds may take 4–6 weeks." },
  { q: "What happens if I cancel?", a: "You keep everything. Your trained agents, your accounts, your data — it's all yours. We don't hold anything hostage. We'll even help you transition if needed." },
  { q: "Do I need to buy other software?", a: "You'll need accounts for the underlying APIs (phone provider, calendar, CRM) but we help you set those up and choose the most cost-effective options. No markup on any tool." },
  { q: "Can it handle multiple languages?", a: "Yes. Our agents support English, Spanish, French, and Haitian Creole out of the box. Additional languages can be added on request." },
  { q: "What if customers don't like talking to AI?", a: "Our agents are designed to be natural and helpful — not robotic. That said, every call can include a live-transfer option so callers can reach a human when they prefer." },
  { q: "How many calls can it handle at once?", a: "There's no practical limit. Unlike a human receptionist, AI agents handle concurrent calls without hold times or missed rings." },
  { q: "Do you offer a trial?", a: "We offer a free demo call where you can hear the agent in action on a live line. After onboarding, we include a 30-day performance guarantee." },
];

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] pt-[180px] pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center">
          <div className="rv">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse-dot" />
              <span className="text-sm text-text-2">Agency Services</span>
            </div>
            <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-5 max-w-[800px] mx-auto">
              We Work Inside Your Business.{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                Not From a Dashboard.
              </span>
            </h1>
            <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[640px] mx-auto">
              This isn&rsquo;t a product you install yourself. It&rsquo;s a personalized consultation and deployment — we learn your business, build your AI systems, and manage them ongoing. Transparent pricing, no lock-in, you own everything.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════ PRICING TIERS ════════════ */}
      <section className="relative z-[2] pb-[120px]" id="pricing">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {tiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`rv d${i + 1} relative rounded-[var(--radius-lg)] ${
                  tier.featured
                    ? "bg-gradient-to-b from-brand-blue/20 via-brand-purple/10 to-transparent p-[1px]"
                    : ""
                }`}
              >
                {/* Glow behind featured card */}
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
                  {/* Badge */}
                  {tier.featured && tier.badge && (
                    <span className="inline-flex self-start items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase px-3.5 py-1.5 rounded-[100px] text-white font-medium bg-gradient-to-r from-brand-blue to-brand-purple mb-4">
                      {tier.badge}
                    </span>
                  )}

                  <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-text-3 mb-1">{tier.label}</div>
                  <h3 className="text-[22px] font-extrabold text-text mb-1">{tier.name}</h3>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-[clamp(32px,4vw,42px)] font-extrabold bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                      {tier.price}
                    </span>
                    {tier.period && <span className="text-sm text-text-3">{tier.period}</span>}
                  </div>

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

      {/* ════════════ WHAT EVERY SUBSCRIPTION INCLUDES ════════════ */}
      <section className="relative z-[2] py-[120px]" id="included">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Included</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              What every subscription<br />
              <span className="font-light text-text-2">includes.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {included.map((item, i) => (
              <GlassCard key={item.title} className={`p-8 rv d${(i % 3) + 1}`}>
                <GradientIcon color={item.color}>{item.icon}</GradientIcon>
                <h4 className="text-[17px] font-extrabold text-text mb-2 mt-5">{item.title}</h4>
                <p className="text-sm text-text-3 leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ ADD-ON PRICING ════════════ */}
      <section className="relative z-[2] py-[120px]" id="addons">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-purple">Add-Ons</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Need more?<br />
              <span className="font-light text-text-2">Add what you need.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 mt-12 max-w-[800px] mx-auto">
            {addons.map((addon, i) => (
              <GlassCard key={addon.title} className={`rv d${(i % 3) + 1}`}>
                <div className="flex items-center gap-5 p-6 flex-wrap sm:flex-nowrap">
                  <GradientIcon color={addon.color}>{addon.icon}</GradientIcon>
                  <div className="flex-1 min-w-[200px]">
                    <h4 className="text-[16px] font-extrabold text-text mb-1">{addon.title}</h4>
                    <p className="text-sm text-text-3 leading-relaxed">{addon.desc}</p>
                  </div>
                  <div className="shrink-0">
                    <span className="font-extrabold text-[20px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                      {addon.price}
                    </span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ TOOL COST TRANSPARENCY ════════════ */}
      <section className="relative z-[2] py-[120px]" id="transparency">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="max-w-[700px] mx-auto rv">
            <GlassCard className="p-10 text-center">
              <GradientIcon color="green"><ShieldIcon /></GradientIcon>
              <h3 className="text-[clamp(24px,3vw,32px)] font-extrabold text-text mt-6 mb-3">
                You own your tools.{" "}
                <span className="bg-gradient-to-r from-brand-green to-brand-cyan bg-clip-text text-transparent">Always.</span>
              </h3>
              <p className="text-[16px] text-text-2 leading-relaxed max-w-[520px] mx-auto mb-7">
                Every API key, every account, every piece of data lives under your name. We never mark up tool costs, and if you leave, everything stays with you. Zero vendor lock-in is not a talking point — it&apos;s how we operate.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Zero tool markup",
                  "Your accounts, your data",
                  "No vendor lock-in",
                  "We optimize costs monthly",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] font-medium text-text-2 bg-white/[0.06] border border-white/10 px-4 py-2 rounded-[100px] backdrop-blur-[8px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section className="relative z-[2] py-[120px]" id="faq">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">FAQ</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Common questions.<br />
              <span className="font-light text-text-2">Straight answers.</span>
            </h2>
          </div>
          <div className="max-w-[700px] mx-auto mt-12 flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className={`rv d${(i % 3) + 1}`}>
                <details className="group bg-white/[0.04] backdrop-blur-[16px] border border-white/[0.08] rounded-[var(--radius-std)] overflow-hidden transition-all duration-300 hover:border-brand-purple/20 hover:bg-white/[0.06]">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-[15px] font-semibold text-text [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="shrink-0 text-text-3 transition-transform duration-300 group-open:rotate-180">
                      <ChevronIcon />
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-[14px] text-text-2 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative z-[2] py-[120px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center">
          <div className="rv">
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Ready to see it<br />
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">in action?</span>
            </h2>
            <p className="text-[17px] text-text-2 max-w-[440px] mx-auto mb-8">
              Book your free demo and hear what your AI receptionist sounds like — live, on a real call.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
                Book a Free Demo
              </a>
              <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
                Contact Sales
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
