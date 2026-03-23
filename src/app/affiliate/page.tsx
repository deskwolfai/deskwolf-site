import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Affiliate Program — DeskWolf LLC",
  description:
    "Earn 10% of every first invoice when you refer businesses to DeskWolf. Unlimited referrals, paid within 5 business days. No caps, no catches.",
  openGraph: {
    title: "Affiliate Program — DeskWolf LLC",
    description:
      "Earn 10% of every first invoice when you refer businesses to DeskWolf.",
    url: "https://deskwolf.ai/affiliate",
    siteName: "DeskWolf",
    type: "website",
  },
};

/* ── SVG Icons (inline for zero deps) ── */
const LinkIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
const UserPlusIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" />
  </svg>
);
const DollarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
const MegaphoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const BookOpenIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
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

/* ── Step data ── */
const steps = [
  {
    num: "01",
    icon: <LinkIcon />,
    color: "blue" as const,
    title: "Share Your Link",
    desc: "Apply to become an affiliate and get your unique referral link. Share it with your network, clients, or audience.",
  },
  {
    num: "02",
    icon: <UserPlusIcon />,
    color: "purple" as const,
    title: "They Sign Up",
    desc: "When someone clicks your link and becomes a DeskWolf client, we track the referral automatically.",
  },
  {
    num: "03",
    icon: <DollarIcon />,
    color: "green" as const,
    title: "You Get Paid",
    desc: "Earn 10% of their first invoice. No caps, no limits. Payment hits your account within 5 business days.",
  },
];

/* ── Audience data ── */
const audience = [
  { icon: <MegaphoneIcon />, color: "blue" as const, title: "Marketing Agencies", desc: "You already advise clients on growth tools. Add AI voice agents to your recommendation stack and earn when they convert." },
  { icon: <BookOpenIcon />, color: "purple" as const, title: "Business Coaches & Consultants", desc: "Your clients trust your advice. When you point them to DeskWolf, you&rsquo;re solving their missed-call problem and getting paid for it." },
  { icon: <BriefcaseIcon />, color: "amber" as const, title: "Tech Providers & IT Consultants", desc: "If you set up CRMs, phone systems, or automation for businesses, DeskWolf fits right into your ecosystem." },
  { icon: <LinkIcon />, color: "green" as const, title: "Content Creators & Influencers", desc: "Have an audience of business owners? Share DeskWolf with them and monetize your reach with a product that actually delivers." },
];

/* ── FAQ data ── */
const faqs = [
  { q: "How much can I earn per referral?", a: "You earn 10% of the referred client's first invoice. Since our plans range from $1,500 to custom enterprise pricing, a single referral can net you $150 to well over $500." },
  { q: "Is there a limit on how many people I can refer?", a: "No. There is no cap on referrals. Refer one business or refer a hundred — you earn on every single one." },
  { q: "When do I get paid?", a: "Within 5 business days after the referred client pays their first invoice. We don't hold your money." },
  { q: "Do I need to be a DeskWolf customer to be an affiliate?", a: "No. You don't need to be a client. You just need to understand what we do well enough to make genuine referrals." },
  { q: "How do I track my referrals?", a: "We're building a self-serve referral dashboard (coming soon). In the meantime, we track every referral manually and send you confirmation when a referred client signs up." },
];

export default function AffiliatePage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] min-h-[70vh] flex items-center pt-[140px] pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">Affiliate Program</span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-[18px] max-w-[800px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Earn With{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              Every Referral.
            </span>
          </h1>

          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[620px] mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Know a business that&rsquo;s missing calls and losing revenue? Send them to DeskWolf and earn 10% of their first invoice. No caps, no catches, paid within 5 business days.
          </p>

          <div className="flex gap-3 flex-wrap justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <a href="/contact" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
              Apply to Become an Affiliate
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ HOW IT WORKS ════════════ */}
      <section className="relative z-[2] py-[120px]" id="how-it-works">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">How It Works</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Three steps.{" "}
              <span className="font-light text-text-2">That&rsquo;s it.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {steps.map((step, i) => (
              <GlassCard key={step.title} className={`p-9 text-center rv d${i + 1}`}>
                <div className="font-mono text-[32px] font-extrabold bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent mb-4">
                  {step.num}
                </div>
                <GradientIcon color={step.color} className="mx-auto">{step.icon}</GradientIcon>
                <h4 className="text-[17px] font-extrabold text-text mb-2 mt-5">{step.title}</h4>
                <p className="text-sm text-text-3 leading-relaxed">{step.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ COMMISSION DETAILS ════════════ */}
      <section className="relative z-[2] py-[120px]" id="commission">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="max-w-[700px] mx-auto rv">
            <GlassCard className="p-10 text-center">
              <GradientIcon color="green" className="mx-auto"><DollarIcon /></GradientIcon>
              <h3 className="text-[clamp(24px,3vw,32px)] font-extrabold text-text mt-6 mb-3">
                10% of the first invoice.{" "}
                <span className="bg-gradient-to-r from-brand-green to-brand-cyan bg-clip-text text-transparent">Every time.</span>
              </h3>
              <p className="text-[16px] text-text-2 leading-relaxed max-w-[520px] mx-auto mb-7">
                No complicated tier structures. No minimum referrals. No waiting months for your payout. You refer, they sign, you get paid within 5 business days.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "10% first invoice",
                  "Unlimited referrals",
                  "Paid in 5 business days",
                  "No minimum threshold",
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

      {/* ════════════ WHO IT'S FOR ════════════ */}
      <section className="relative z-[2] py-[120px]" id="who">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-purple">Who It&rsquo;s For</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Perfect for people who<br />
              <span className="font-light text-text-2">already talk to business owners.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">
            {audience.map((item, i) => (
              <GlassCard key={item.title} className={`p-8 rv d${(i % 3) + 1}`}>
                <GradientIcon color={item.color}>{item.icon}</GradientIcon>
                <h4 className="text-[17px] font-extrabold text-text mb-2 mt-5">{item.title}</h4>
                <p className="text-sm text-text-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ WHAT YOU GET ════════════ */}
      <section className="relative z-[2] py-[120px]" id="benefits">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Benefits</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">What you get as an affiliate.</h2>
          </div>
          <div className="max-w-[600px] mx-auto mt-12 rv d1">
            <ul className="list-none flex flex-col gap-4">
              {[
                "10% commission on every referred client's first invoice",
                "Unique referral link to share anywhere",
                "Marketing assets and swipe copy to help you promote",
                "Real-time referral tracking (dashboard coming soon)",
                "Dedicated affiliate support from the DeskWolf team",
                "No cap on earnings — refer as many businesses as you want",
                "Early access to new products and features",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-text-2">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
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
              Ready to start{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">earning?</span>
            </h2>
            <p className="text-[17px] text-text-2 max-w-[440px] mx-auto mb-8">
              Apply to become a DeskWolf affiliate. It takes two minutes, and there&rsquo;s no commitment required.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
              Apply to Become an Affiliate
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
