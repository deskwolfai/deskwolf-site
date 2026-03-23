import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import GlassCard from "@/components/GlassCard";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "How It Works | DeskWolf LLC",
  description:
    "From first call to full coverage in 30 days. Discovery, build, launch, manage. Done-for-you AI phone systems.",
};

/* ── Step data ── */
const steps = [
  {
    num: "01",
    title: "Discovery",
    color: "from-blue-light to-brand-purple",
    badgeBg: "bg-blue-pale text-brand-blue",
    desc: "We start with a 15-minute call. No pitch, no pressure. We listen to how your phones work today, where calls are falling through, and what a fix would look like for your business.",
    detail: "15-min call",
  },
  {
    num: "02",
    title: "Build",
    color: "from-brand-purple to-[#EC4899]",
    badgeBg: "bg-[rgba(139,92,246,0.1)] text-brand-purple",
    desc: "We configure your AI voice agent from scratch. Custom greetings, FAQ responses, appointment booking logic, call routing rules, and CRM integrations. All built around your actual business.",
    detail: "1-3 weeks",
  },
  {
    num: "03",
    title: "Launch",
    color: "from-brand-green to-brand-cyan",
    badgeBg: "bg-[rgba(16,185,129,0.1)] text-brand-green",
    desc: "Your AI goes live. We monitor every call for the first 30 days, fine-tuning responses and catching edge cases. You get full visibility into performance from day one.",
    detail: "Go live + 30-day monitoring",
  },
  {
    num: "04",
    title: "Manage",
    color: "from-brand-amber to-[#EF4444]",
    badgeBg: "bg-[rgba(245,158,11,0.1)] text-brand-amber",
    desc: "We stay on as your AI operations partner. Ongoing optimization, seasonal adjustments, new feature rollouts, and cost management. You focus on running your business.",
    detail: "Ongoing optimization",
  },
];

/* ── "Don't have to" items ── */
const dontDo = [
  "Learn Software",
  "Manage Tools",
  "Write Scripts",
  "Handle Technical Setup",
  "Monitor Anything",
  "Fight Customer Support",
];

/* ── "Included" items ── */
const included = [
  "Full Setup",
  "All Integrations",
  "Agent Training",
  "30-Day Monitoring",
  "Break-Fix",
  "Ongoing Optimization",
  "Dedicated AM",
  "Tech Evolution",
];

/* ── FAQ data ── */
const faqs = [
  {
    q: "How long does setup take?",
    a: "Most businesses are live within 1-3 weeks. Simple setups can go faster. Complex multi-location deployments may take a bit longer. We'll give you a clear timeline during discovery.",
  },
  {
    q: "Are there any special requirements?",
    a: "Nope. You just need a phone number and a business. We handle everything else: the tech, the setup, the integrations, the monitoring. That's the whole point.",
  },
  {
    q: "Can I keep my existing phone number?",
    a: "Yes. We work with your current number and carrier. No need to change anything your customers already know.",
  },
  {
    q: "What if something breaks?",
    a: "We fix it. Break-fix is included in every plan. If your AI agent goes down or a call doesn't route correctly, we're on it. Usually before you even notice.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No long-term contracts. We earn your business every month. If you decide to leave, we make the transition smooth.",
  },
];

/* ── Timeline data ── */
const timeline = [
  { label: "Day 1", desc: "Discovery call. We learn your business." },
  { label: "Week 2", desc: "AI agent built and tested" },
  { label: "Month 1", desc: "Live with 30-day monitoring" },
  { label: "Month 3", desc: "Fully optimized, running on autopilot" },
];

export default function HowItWorksPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] min-h-[70vh] flex items-center pt-[140px] pb-[80px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] w-full">
          <GlassCard className="p-[clamp(36px,5vw,56px)] max-w-[720px] mx-auto text-center rv">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse-dot" />
              <span className="text-sm text-text-2">How It Works</span>
            </div>
            <h1 className="text-[clamp(36px,5.5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-5">
              From first call to full coverage{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                in 30 days.
              </span>
            </h1>
            <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[480px] mx-auto mb-8">
              Four steps. No jargon. No homework. We handle the tech so you can handle the business.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white text-[#0F172A] shadow-[0_4px_20px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]"
              >
                Start Your Discovery Call
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]"
              >
                See the Process
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ════════════ 4-STEP PROCESS ════════════ */}
      <section className="relative z-[2] py-[120px]" id="process">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">
              The Process
            </span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Four steps.<br />
              <span className="font-light text-text-2">Zero guesswork.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {steps.map((s, i) => (
              <GlassCard key={s.num} className={`p-9 rv d${i + 1}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-[14px] flex items-center justify-center text-white font-extrabold text-lg shrink-0 bg-gradient-to-br ${s.color}`}
                  >
                    {s.num}
                  </div>
                  <div>
                    <h3 className="text-[20px] font-extrabold text-text">{s.title}</h3>
                    <span className={`inline-block font-mono text-[10px] tracking-[0.08em] uppercase px-3 py-0.5 rounded-[100px] mt-1 ${s.badgeBg}`}>
                      {s.detail}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-text-2 leading-relaxed">{s.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ TIMELINE ════════════ */}
      <section className="relative z-[2] py-[100px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">
              Timeline
            </span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Your roadmap<br />
              <span className="font-light text-text-2">at a glance.</span>
            </h2>
          </div>
          <GlassCard className="p-10 mt-12 rv">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((t, i) => (
                <div key={t.label} className="text-center">
                  <div className="font-extrabold text-[28px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent mb-2">
                    {t.label}
                  </div>
                  <p className="text-sm text-text-2">{t.desc}</p>
                  {i < timeline.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 text-text-3 text-lg" />
                  )}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ════════════ WHAT YOU DON'T HAVE TO DO ════════════ */}
      <section className="relative z-[2] py-[100px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">
              Your Side
            </span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              What you don&apos;t<br />
              <span className="font-light text-text-2">have to do.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {dontDo.map((item, i) => (
              <GlassCard key={item} className={`p-6 rv d${(i % 3) + 1}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0 bg-gradient-to-br from-[#EF4444] to-brand-amber text-white font-bold text-lg">
                    &#10007;
                  </div>
                  <span className="text-[15px] font-bold text-text">{item}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ WHAT'S INCLUDED ════════════ */}
      <section className="relative z-[2] py-[100px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">
              What You Get
            </span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Everything included.<br />
              <span className="font-light text-text-2">No add-ons. No surprises.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {included.map((item, i) => (
              <GlassCard key={item} className={`p-6 rv d${(i % 4) + 1}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0 bg-gradient-to-br from-brand-green to-brand-cyan text-white font-bold text-lg">
                    &#10003;
                  </div>
                  <span className="text-[15px] font-bold text-text">{item}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section className="relative z-[2] py-[100px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">
              FAQ
            </span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Common questions.<br />
              <span className="font-light text-text-2">Straight answers.</span>
            </h2>
          </div>
          <div className="max-w-[720px] mx-auto mt-12 flex flex-col gap-3 rv">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white/[0.04] backdrop-blur-[16px] border border-white/[0.07] rounded-[var(--radius-std)] overflow-hidden transition-all duration-300 hover:border-brand-purple/20"
              >
                <summary className="flex items-center justify-between cursor-pointer px-7 py-5 text-[15px] font-bold text-text list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="text-text-3 text-xl transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">
                    +
                  </span>
                </summary>
                <div className="px-7 pb-6 text-sm text-text-2 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative z-[2] py-[100px]" id="cta">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center rv">
          <h2 className="text-[clamp(30px,4vw,46px)] font-extrabold text-text mb-4">
            Ready to capture every call, around the clock?
          </h2>
          <p className="text-[17px] text-text-2 max-w-[460px] mx-auto mb-8">
            Start with a 15-minute discovery call. No commitment, no pressure.
          </p>
          <a
            href="/demo"
            className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]"
          >
            Start Your Discovery Call
          </a>
        </div>
      </section>

      {/* ════════════ NEWSLETTER ════════════ */}
      <section
        className="relative z-[2] py-[100px] overflow-hidden"
        id="newsletter"
        style={{ background: "linear-gradient(135deg, #F1F5F9 0%, #1E293B 50%, #334155 100%)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 80% 20%, rgba(139,92,246,0.15), transparent), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(6,182,212,0.1), transparent)",
          }}
        />
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] relative z-[1] text-center">
          <div className="rv">
            <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-white/50">Stay Connected</span>
            <h2 className="text-[clamp(30px,4vw,46px)] text-white mb-3">Get the no-fluff AI newsletter.</h2>
            <p className="text-[17px] text-white/60 max-w-[440px] mx-auto mb-7">
              Practical AI insights for local business owners. No spam, no jargon.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
