import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "AI Phone Systems for Gyms & Fitness Studios — DeskWolf LLC",
  description:
    "Stop losing members to missed calls. DeskWolf answers every call 24/7, books trial classes, handles membership inquiries, and recovers no-shows automatically.",
};

/* ── SVG Icons (inline for zero deps) ── */
const PhoneOffIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07" />
    <path d="M1 1l22 22" /><path d="M4.22 4.22A19.79 19.79 0 0 0 2.12 21.9 2 2 0 0 0 4.11 24h0" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const UserXIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="18" y1="8" x2="23" y2="13" /><line x1="23" y1="8" x2="18" y2="13" />
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

export default function GymsFitnessPage() {
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
            <span className="text-sm text-text-2">Gyms &amp; Fitness Studios</span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-text mb-[18px] max-w-[800px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Your Trainers Should Be Coaching&nbsp;&mdash;{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              Not Answering Phones.
            </span>
          </h1>

          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[600px] mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Every unanswered call is a potential member who signs up somewhere else.
            DeskWolf picks up 24/7, books trials, answers class questions, and recovers no-shows&nbsp;&mdash; so your staff stays on the floor.
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
              Missed calls kill<br />
              <span className="font-light text-text-2">membership growth.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              {
                icon: <PhoneOffIcon />,
                color: "blue" as const,
                title: "Staff Are on the Floor",
                desc: "When trainers are coaching a 6am boot camp or running a packed spin class, nobody picks up the phone. That interested caller moves on to the gym down the street.",
              },
              {
                icon: <UserXIcon />,
                color: "amber" as const,
                title: "No-Shows Wreck Revenue",
                desc: "Members who skip their sessions without notice leave holes in your schedule and money on the table. Manual follow-up is inconsistent at best and nonexistent at worst.",
              },
              {
                icon: <CalendarIcon />,
                color: "green" as const,
                title: "Trial Bookings Slip Through",
                desc: "Someone calls about a free trial at 8pm. Nobody answers. They Google the next option. By the time you call back in the morning, they already signed up somewhere else.",
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
                The math is simple.
              </h2>
              <p className="text-[17px] text-text-2 leading-relaxed mb-8">
                Most gyms miss at least 15 calls per month from prospective members.
                At an average membership value of $100/month, that adds up fast&nbsp;&mdash; and those are conservative numbers.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { num: "15", label: "Missed calls/mo" },
                  { num: "$100", label: "Avg membership" },
                  { num: "$1,500", label: "Lost/month" },
                  { num: "$6,000+", label: "Lost/year" },
                ].map((s) => (
                  <div key={s.label} className="p-5 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06]">
                    <div className="font-extrabold text-[28px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">{s.num}</div>
                    <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-text-3 italic">
                Many gyms miss significantly more. Boutique studios with group class models can lose 2&ndash;3x this amount.
                DeskWolf pays for itself by catching what your staff physically can&rsquo;t.
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
              <span className="font-light text-text-2">Built for fitness businesses.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {[
              {
                title: "Class Schedule & Program Info",
                items: [
                  "Answers questions about class times, instructors, and formats",
                  "Provides info on personal training packages and pricing",
                  "Describes amenities, hours, and location details",
                  "Handles multi-location routing if you have multiple studios",
                ],
              },
              {
                title: "Trial & Membership Booking",
                items: [
                  "Books free trial sessions directly into your calendar",
                  "Handles membership tier questions and pricing",
                  "Sends confirmation texts with studio address and what to bring",
                  "Captures lead info and syncs to your CRM automatically",
                ],
              },
              {
                title: "No-Show Recovery",
                items: [
                  "Automatically calls members who missed their session",
                  "Offers easy rebooking with a single confirmation",
                  "Reduces churn by keeping members engaged",
                  "Tracks recovery rates so you see exactly what you saved",
                ],
              },
              {
                title: "Membership Inquiry Handling",
                items: [
                  "Answers billing, freeze, and cancellation questions",
                  "Routes upgrade inquiries to your sales team",
                  "Handles after-hours calls with the same quality as 9-to-5",
                  "Supports English, Spanish, French, and Creole",
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
              <GradientIcon color="green"><QuoteIcon /></GradientIcon>
              <div>
                <blockquote className="italic text-[17px] text-text leading-relaxed mb-4">
                  &ldquo;We were losing 20+ calls a week during classes. DeskWolf picked up on day one and booked 8 trial sessions in the first week alone. My trainers haven&rsquo;t touched the phone since.&rdquo;
                </blockquote>
                <div className="text-[13px] text-text-3 font-medium">
                  &mdash; Marcus T., Owner, Iron Republic Fitness
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
            <h2 className="text-[clamp(30px,4vw,46px)] mb-10">Common questions from gym owners.</h2>
          </div>

          <div className="flex flex-col gap-5">
            {[
              {
                q: "Can it handle questions about specific class schedules and instructors?",
                a: "Yes. We train your AI agent on your full class schedule, instructor bios, and program descriptions. When a caller asks about your 6am HIIT class or who teaches Saturday yoga, it gives them a specific, accurate answer.",
              },
              {
                q: "What happens when someone wants to cancel or freeze their membership?",
                a: "You control the script. The AI can provide policy info, walk them through freeze options, or route the call to a manager for retention conversations. Most gym owners set it to offer a freeze first, then escalate cancellations to a human.",
              },
              {
                q: "How does the no-show recovery work?",
                a: "When a member misses a booked session, DeskWolf automatically calls them within a configurable window. It offers to rebook on the spot. You see recovery stats in your dashboard so you know exactly how many sessions were saved.",
              },
              {
                q: "Will it sound robotic or off-putting to my members?",
                a: "No. DeskWolf uses natural-sounding voice AI that adapts tone to the conversation. Callers regularly complete full interactions without realizing they are speaking with an AI agent. We test and refine the voice during setup until it matches your brand.",
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
              Stop Losing Members to{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                Missed Calls.
              </span>
            </h2>
            <p className="text-[17px] text-text-2 mb-8">
              See how DeskWolf works for your gym. Live demo, real scenario, zero pressure.
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
