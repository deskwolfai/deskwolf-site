import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "AI Phone Systems for Influencers & Entrepreneurs | DeskWolf LLC",
  description:
    "Stop losing high-ticket leads to slow follow-up. DeskWolf calls back every form submission in under 30 seconds, qualifies leads, and books discovery calls automatically.",
};

/* ── SVG Icons (inline for zero deps) ── */
const RocketIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3" />
  </svg>
);
const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const FilterIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);
const DollarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const QuoteIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
);

/* ── Reusable check mark ── */
const Check = () => (
  <span className="w-5 h-5 bg-gradient-to-br from-brand-green to-brand-cyan rounded-full flex items-center justify-center shrink-0 text-white text-[11px] font-bold">
    &#10003;
  </span>
);

export default function InfluencersEntrepreneursPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] min-h-[70vh] flex items-center pt-[140px] pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-2 h-2 bg-brand-amber rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">Influencers &amp; Entrepreneurs</span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-text mb-[18px] max-w-[800px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Your Form Submitted. Their Phone Rang.{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              5 Seconds.
            </span>
          </h1>

          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[600px] mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            You&rsquo;re spending thousands on ads driving leads to forms. But if your team takes hours to call back, those leads are already gone.
            DeskWolf calls every submission in under 30 seconds, qualifies them live, and books the ones worth your time.
          </p>

          <div className="flex gap-3 flex-wrap justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white text-[#0F172A] shadow-[0_4px_20px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]">
              Watch It Call a Lead Live
            </a>
            <a href="#problem" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
              See the Problem
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ THE PROBLEM ════════════ */}
      <section className="relative z-[2] py-[120px]" id="problem">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">The Problem</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Leads go cold<br />
              <span className="font-light text-text-2">faster than you think.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              {
                icon: <RocketIcon />,
                color: "amber" as const,
                title: "Speed-to-Lead Is the Entire Game",
                desc: "You spend $5K or more per month on ads. A lead fills out your form. Your VA calls back 4 to 6 hours later. By then, the lead has cooled off, forgotten your offer, or bought from someone who responded faster. Research shows responding within 5 minutes makes you 100x more likely to connect.",
              },
              {
                icon: <UsersIcon />,
                color: "blue" as const,
                title: "Your Team Can't Keep Up",
                desc: "You're coaching clients, creating content, running launches, and managing a team. The phone is nobody's primary job. Leads pile up in a spreadsheet. Some get called. Some don't. The ones that don't represent thousands in lost revenue.",
              },
              {
                icon: <FilterIcon />,
                color: "green" as const,
                title: "Qualification Wastes Your Time",
                desc: "Not every lead is ready to buy. But your sales team spends hours on calls with tire-kickers, people who can't afford your offer, or leads who just wanted the free thing. Every minute on an unqualified call is a minute not spent closing a real deal.",
              },
            ].map((card, i) => (
              <GlassCard key={card.title} className={`p-8 rv d${i + 1}`}>
                <GradientIcon color={card.color}>{card.icon}</GradientIcon>
                <h3 className="text-[18px] font-extrabold text-text mt-5 mb-2">{card.title}</h3>
                <p className="text-sm text-text-3 leading-relaxed">{card.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ ROI MATH ════════════ */}
      <section className="relative z-[2] py-[100px]" id="roi">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <GlassCard className="p-[clamp(32px,5vw,52px)] rv">
            <div className="max-w-[640px] mx-auto text-center">
              <GradientIcon color="amber"><DollarIcon /></GradientIcon>
              <h2 className="text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-text mb-4 mt-5">
                The math changes everything.
              </h2>
              <p className="text-[17px] text-text-2 leading-relaxed mb-8">
                Most coaches and creators convert 5% of form submissions with manual follow-up.
                Drop the callback time from hours to seconds, and close rates jump to 10 to 15%.
                At a $3,000 average offer, the difference is massive.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { num: "80", label: "Submissions/mo" },
                  { num: "$3K", label: "Avg offer value" },
                  { num: "5%→15%", label: "Close rate lift" },
                  { num: "$24K+", label: "Additional revenue/mo" },
                ].map((s) => (
                  <div key={s.label} className="p-5 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06]">
                    <div className="font-extrabold text-[28px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">{s.num}</div>
                    <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-text-3 italic">
                Going from 4 closes to 12 closes per month on the same ad spend.
                DeskWolf pays for itself with a single additional sale.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ════════════ HOW DESKWOLF SOLVES IT ════════════ */}
      <section className="relative z-[2] py-[120px]" id="solution">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">The Solution</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              How DeskWolf solves it.<br />
              <span className="font-light text-text-2">Built for coaches, creators, and founders.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {[
              {
                title: "Instant Form-to-Call",
                items: [
                  "Calls back every form submission in under 30 seconds",
                  "Works with website forms, Facebook Lead Ads, Google Ads forms, and landing pages",
                  "Lead is still on your site when the phone rings",
                  "No leads sitting in a queue waiting for Monday morning",
                ],
              },
              {
                title: "AI Qualification Script",
                items: [
                  "Custom questions designed for your offer: budget, timeline, decision-maker status",
                  "Lead scoring: hot, warm, or nurture based on answers",
                  "Disqualifies tire-kickers before they reach your calendar",
                  "Handles common objections naturally: 'just browsing,' 'send me info,' 'what's the cost'",
                ],
              },
              {
                title: "Automatic Booking",
                items: [
                  "Qualified leads get booked directly into your calendar with full context",
                  "Hot leads get live-transferred to your closer in real time",
                  "Unqualified leads get tagged for nurture sequences",
                  "Confirmation texts sent automatically with meeting details",
                ],
              },
              {
                title: "CRM Integration",
                items: [
                  "Every call logged with transcript, recording, and qualification score",
                  "Contacts created and updated in your CRM automatically",
                  "Pipeline stages updated based on call outcomes",
                  "Works with GoHighLevel, HubSpot, Salesforce, and Zapier",
                ],
              },
            ].map((block, i) => (
              <GlassCard key={block.title} className={`p-8 rv d${(i % 2) + 1}`}>
                <h3 className="text-[18px] font-extrabold text-text mb-4">{block.title}</h3>
                <ul className="list-none flex flex-col gap-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] text-text-2 leading-relaxed">
                      <Check />{item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ TESTIMONIAL ════════════ */}
      <section className="relative z-[2] py-[100px]" id="testimonial">
        <div className="max-w-[800px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <GlassCard className="p-[clamp(32px,5vw,48px)] rv">
            <div className="flex gap-5 items-start">
              <GradientIcon color="amber"><QuoteIcon /></GradientIcon>
              <div>
                <blockquote className="italic text-[17px] text-text leading-relaxed mb-4">
                  &ldquo;We were spending $8K a month on ads and our VA was calling leads back 3 to 4 hours later. Half of them never picked up. DeskWolf started calling them back in under 10 seconds. We went from 4 closes to 11 in the first month on the same ad spend. That&rsquo;s $21K in additional revenue.&rdquo;
                </blockquote>
                <div className="text-[13px] text-text-3 font-medium">
                  Alex Rivera, Founder, Rivera Coaching Group
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section className="relative z-[2] py-[120px]" id="faq">
        <div className="max-w-[800px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">FAQ</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-10">Common questions from influencers and entrepreneurs.</h2>
          </div>

          <div className="flex flex-col gap-5">
            {[
              {
                q: "Does it work with Facebook and Google Lead Ads?",
                a: "Yes. We connect directly to Facebook Lead Ads and Google Ads lead form extensions via API. When a lead form is submitted on any platform, DeskWolf calls them back within seconds. No middleware, no delays.",
              },
              {
                q: "Can I customize the qualification questions?",
                a: "Completely. We build the script with you during onboarding. You define what qualifies a lead, what disqualifies one, and what questions matter most to your sales process. Budget, timeline, decision-maker status, previous experience, whatever you need.",
              },
              {
                q: "What if the lead doesn't answer?",
                a: "DeskWolf retries on a schedule you configure. For example, 3 attempts over 24 hours. If they never pick up, they get tagged for a nurture sequence: email, SMS, or whatever follow-up system you already use.",
              },
              {
                q: "I don't get phone calls, just form submissions. Is this still for me?",
                a: "That's exactly what the Outbound Lead Qualifier is built for. It's not about answering your phone. It's about calling your leads before they go cold. Form submits, phone rings, lead gets qualified, appointment gets booked. All automatic.",
              },
            ].map((faq, i) => (
              <GlassCard key={i} className={`p-7 rv d${(i % 3) + 1}`}>
                <h4 className="text-[15px] font-extrabold text-text mb-2">{faq.q}</h4>
                <p className="text-sm text-text-3 leading-relaxed">{faq.a}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative z-[2] py-[120px]" id="cta">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[600px] mx-auto rv">
            <h2 className="text-[clamp(30px,4vw,46px)] mb-4">
              Close More Deals on the{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                Same Ad Spend.
              </span>
            </h2>
            <p className="text-[17px] text-text-2 mb-8">
              See how DeskWolf calls your leads back in seconds. Live demo, real scenario, zero pressure.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
                Watch It Call a Lead Live
              </a>
              <a href="/industries" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
                Back to Industries
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
