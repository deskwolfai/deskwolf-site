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
  title: "Industries — DeskWolf LLC",
  description:
    "AI phone systems built for your industry. Gyms, home services, restaurants, real estate, legal, auto shops, and more.",
};

/* ── SVG Icons (inline for zero deps) ── */
const DumbbellIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M6.5 6.5h11M6.5 17.5h11" /><rect x="2" y="4" width="4" height="16" rx="1" /><rect x="18" y="4" width="4" height="16" rx="1" /><rect x="6" y="7" width="2" height="10" rx="0.5" /><rect x="16" y="7" width="2" height="10" rx="0.5" />
  </svg>
);
const WrenchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
const UtensilsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
  </svg>
);
const HomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
const CarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M5 17h14M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h8l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2" /><circle cx="7.5" cy="17" r="2" /><circle cx="16.5" cy="17" r="2" />
  </svg>
);
const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const SolarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);
const BedIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V8" />
  </svg>
);
const RocketIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);
const MessageIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const industries = [
  {
    icon: <DumbbellIcon />,
    color: "green" as const,
    name: "Gyms & Fitness Studios",
    pain: "Staff coaching classes can't answer phones. No-shows wreck schedules.",
    stat: "$6K+/yr in lost memberships recovered",
    href: "/industries/gyms-fitness",
    live: true,
  },
  {
    icon: <WrenchIcon />,
    color: "blue" as const,
    name: "Home Services & Contractors",
    pain: "Owner on a job site, missing $500+ calls with no front desk.",
    stat: "$260K/yr in missed revenue recovered",
    href: "/industries/home-services",
    live: true,
  },
  {
    icon: <UtensilsIcon />,
    color: "amber" as const,
    name: "Restaurants & Food Service",
    pain: "Phone rings during dinner rush. 80% of calls are the same 5 questions.",
    stat: "$41K+/yr in missed orders recovered",
    href: "/industries/restaurants",
    live: true,
  },
  {
    icon: <HomeIcon />,
    color: "purple" as const,
    name: "Real Estate",
    pain: "Leads call once and move on. Speed-to-lead decides who wins the listing.",
    stat: "5-minute response = 21x more likely to convert",
    href: "/coming-soon",
    live: false,
  },
  {
    icon: <BriefcaseIcon />,
    color: "blue" as const,
    name: "Legal & Professional Services",
    pain: "Potential clients call after hours when they need help most.",
    stat: "$4,000+ average case value at risk per missed call",
    href: "/coming-soon",
    live: false,
  },
  {
    icon: <CarIcon />,
    color: "green" as const,
    name: "Auto Shops",
    pain: "Technicians can't stop mid-repair to answer the phone.",
    stat: "$800+ average repair ticket left on the table",
    href: "/coming-soon",
    live: false,
  },
  {
    icon: <SolarIcon />,
    color: "amber" as const,
    name: "Solar Installation & Energy",
    pain: "Homeowners call once. If you miss it, the next installer gets the job.",
    stat: "$15,000+ average residential solar installation at risk",
    href: "/industries/solar",
    live: true,
  },
  {
    icon: <BedIcon />,
    color: "purple" as const,
    name: "Hotels & Hospitality",
    pain: "Front desk buried during check-in. Reservation calls go unanswered.",
    stat: "$200+ per night room revenue lost per missed booking",
    href: "/coming-soon",
    live: false,
  },
  {
    icon: <RocketIcon />,
    color: "cyan" as const,
    name: "Digital Entrepreneurs & Coaches",
    pain: "Solo operators can't scale past their own availability.",
    stat: "3x more discovery calls booked with 24/7 intake",
    href: "/coming-soon",
    live: false,
  },
];

export default function IndustriesPage() {
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
            <span className="text-sm text-text-2">Industry Solutions</span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-text mb-[18px] max-w-[800px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            AI Phone Systems Built for{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              Your Industry.
            </span>
          </h1>

          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[600px] mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Every industry has different call patterns, different pain points, and different revenue at stake.
            We build voice AI that understands yours.
          </p>

          <div className="flex gap-3 flex-wrap justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white text-[#0F172A] shadow-[0_4px_20px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]">
              Book a Demo
            </a>
            <a href="#industries" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
              Browse Industries
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ INDUSTRY GRID ════════════ */}
      <section className="relative z-[2] py-[120px]" id="industries">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Verticals</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Find your industry.<br />
              <span className="font-light text-text-2">See what you&rsquo;re leaving on the table.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {industries.map((ind, i) => (
              <Link key={ind.name} href={ind.href} className="no-underline group">
                <GlassCard className={`p-8 h-full rv d${(i % 3) + 1} transition-all duration-300 group-hover:border-brand-purple/30 group-hover:bg-white/[0.08]`}>
                  <div className="flex items-center justify-between mb-5">
                    <GradientIcon color={ind.color}>{ind.icon}</GradientIcon>
                    {!ind.live && (
                      <span className="font-mono text-[10px] tracking-[0.08em] uppercase px-3 py-1 rounded-[100px] bg-white/[0.06] text-text-3 font-medium">Coming Soon</span>
                    )}
                  </div>
                  <h3 className="text-[18px] font-extrabold text-text mb-2">{ind.name}</h3>
                  <p className="text-sm text-text-3 leading-relaxed mb-4">{ind.pain}</p>
                  <div className="text-[13px] font-semibold bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent mb-4">
                    {ind.stat}
                  </div>
                  <div className="flex items-center gap-1.5 text-[13px] font-semibold text-brand-blue group-hover:gap-2.5 transition-all duration-300">
                    {ind.live ? "Explore Solutions" : "Get Notified"} <ArrowIcon />
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ DON'T SEE YOUR INDUSTRY ════════════ */}
      <section className="relative z-[2] py-[100px]" id="custom">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <GlassCard className="p-[clamp(32px,5vw,52px)] rv">
            <div className="max-w-[640px] mx-auto text-center">
              <GradientIcon color="purple"><MessageIcon /></GradientIcon>
              <h2 className="text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-text mb-4 mt-5">
                Don&rsquo;t see your industry?
              </h2>
              <p className="text-[17px] text-text-2 leading-relaxed mb-8">
                If your business gets phone calls, we can build a voice AI system for it.
                Every deployment is custom-built around your call patterns, your FAQs, and your workflows.
                Tell us what you need and we&rsquo;ll show you exactly how it works.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
                Contact Us
              </a>
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
