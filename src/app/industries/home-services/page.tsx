import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "AI Phone Systems for Home Services & Contractors — DeskWolf LLC",
  description:
    "Stop losing $500+ jobs to missed calls. DeskWolf answers every call 24/7, dispatches emergencies, books estimates, and routes by service area.",
};

/* ── SVG Icons (inline for zero deps) ── */
const PhoneOffIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07" />
    <path d="M1 1l22 22" /><path d="M4.22 4.22A19.79 19.79 0 0 0 2.12 21.9 2 2 0 0 0 4.11 24h0" />
  </svg>
);
const AlertTriangleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const MapPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
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

export default function HomeServicesPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] min-h-[70vh] flex items-center pt-[140px] pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">Home Services &amp; Contractors</span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-text mb-[18px] max-w-[800px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            You&rsquo;re on the Job Site.{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              DeskWolf&rsquo;s on the Phone.
            </span>
          </h1>

          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[600px] mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Every missed call is a $500+ job walking to your competitor.
            DeskWolf answers 24/7, books estimates, triages emergencies, and routes by service area&nbsp;&mdash; while you stay focused on the work.
          </p>

          <div className="flex gap-3 flex-wrap justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white text-[#0F172A] shadow-[0_4px_20px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]">
              Book a Demo
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
              You can&rsquo;t answer calls<br />
              <span className="font-light text-text-2">with drywall dust on your hands.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              {
                icon: <PhoneOffIcon />,
                color: "blue" as const,
                title: "No Front Desk Staff",
                desc: "You're a contractor, not a call center. When you're knee-deep in a project, the phone rings and nobody answers. That caller needed a plumber right now, so they call the next one on Google.",
              },
              {
                icon: <AlertTriangleIcon />,
                color: "amber" as const,
                title: "Emergency Calls Get Lost",
                desc: "A burst pipe at 11pm. A furnace failure in January. These are the highest-value calls in your business and they hit when you're off the clock. Every hour of delay costs your customer money and costs you the job.",
              },
              {
                icon: <MapPinIcon />,
                color: "green" as const,
                title: "Wrong Area, Wrong Service",
                desc: "You waste time on calls from outside your service area or for services you don't offer. By the time you figure that out and get back to real leads, they've already booked someone else.",
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
                The math is brutal.
              </h2>
              <p className="text-[17px] text-text-2 leading-relaxed mb-8">
                Home service businesses miss an average of 10 calls per week.
                With an average job value of $500, every week of missed calls is $5,000 walking out the door.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { num: "10", label: "Missed calls/wk" },
                  { num: "$500", label: "Avg job value" },
                  { num: "$5K", label: "Lost/week" },
                  { num: "$260K", label: "Lost/year" },
                ].map((s) => (
                  <div key={s.label} className="p-5 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06]">
                    <div className="font-extrabold text-[28px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">{s.num}</div>
                    <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-text-3 italic">
                For HVAC, plumbing, and electrical contractors, emergency calls often carry 2&ndash;3x premiums.
                A single after-hours job can pay for months of DeskWolf service.
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
              <span className="font-light text-text-2">Built for contractors.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {[
              {
                title: "After-Hours Dispatch",
                items: [
                  "Answers calls 24/7, including nights, weekends, and holidays",
                  "Captures job details: problem type, address, urgency level",
                  "Sends instant text alerts to you or your on-call tech",
                  "Provides callers with estimated response windows",
                ],
              },
              {
                title: "Emergency Triage",
                items: [
                  "Identifies true emergencies vs. routine requests",
                  "Escalates urgent calls (burst pipes, gas leaks, no heat) immediately",
                  "Routes non-urgent requests to next-day scheduling",
                  "Custom triage scripts tailored to your trade",
                ],
              },
              {
                title: "Estimate Scheduling",
                items: [
                  "Books estimate appointments directly into your calendar",
                  "Confirms service address and scope of work upfront",
                  "Sends confirmation texts with your company info and arrival window",
                  "Reduces back-and-forth by collecting details on the first call",
                ],
              },
              {
                title: "Service Area Routing",
                items: [
                  "Screens callers by zip code and service area",
                  "Routes calls to the right crew based on location and trade",
                  "Politely declines out-of-area requests without wasting your time",
                  "Supports multi-location and multi-crew operations",
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
              <GradientIcon color="blue"><QuoteIcon /></GradientIcon>
              <div>
                <blockquote className="italic text-[17px] text-text leading-relaxed mb-4">
                  &ldquo;I used to check my voicemail at the end of every job and find 3&ndash;4 missed calls. Half of them already hired someone else. DeskWolf caught a $2,800 emergency HVAC job on a Sunday night in the first month. That alone paid for six months of service.&rdquo;
                </blockquote>
                <div className="text-[13px] text-text-3 font-medium">
                  &mdash; Jason R., Owner, Summit Mechanical Services
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
            <h2 className="text-[clamp(30px,4vw,46px)] mb-10">Common questions from contractors.</h2>
          </div>

          <div className="flex flex-col gap-5">
            {[
              {
                q: "Can it handle emergency calls differently from routine requests?",
                a: "Absolutely. We build a custom triage script during setup. The AI knows the difference between a burst pipe at midnight and someone asking about a kitchen remodel next month. Emergencies get escalated immediately via text and call alerts to your on-call person.",
              },
              {
                q: "What if I only service certain zip codes?",
                a: "DeskWolf screens callers by address or zip code before booking anything. If a call comes from outside your service area, it politely lets them know and can even recommend a partner contractor if you set that up. No more wasted trips.",
              },
              {
                q: "I have multiple crews. Can it route to the right one?",
                a: "Yes. You define routing rules by trade, location, or availability. A plumbing call goes to your plumbing crew. An electrical call goes to your electrician. Weekend calls go to whoever is on-call. It all runs automatically.",
              },
              {
                q: "Do I need to change my phone number?",
                a: "No. DeskWolf forwards from your existing business number. Your customers, your Google listing, your truck wraps — nothing changes. The AI picks up when you can't, and you can override it any time you want to answer yourself.",
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
              Stop Losing Jobs to{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                Voicemail.
              </span>
            </h2>
            <p className="text-[17px] text-text-2 mb-8">
              See how DeskWolf works for your trade. Live demo, real scenario, zero pressure.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
                Book a Demo
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
