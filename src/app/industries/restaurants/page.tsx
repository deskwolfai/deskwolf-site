import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "AI Phone Systems for Restaurants & Food Service — DeskWolf LLC",
  description:
    "Stop losing orders to missed calls during the dinner rush. DeskWolf answers every call 24/7, handles FAQs, takes reservation requests, and routes catering inquiries.",
};

/* ── SVG Icons (inline for zero deps) ── */
const PhoneOffIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07" />
    <path d="M1 1l22 22" /><path d="M4.22 4.22A19.79 19.79 0 0 0 2.12 21.9 2 2 0 0 0 4.11 24h0" />
  </svg>
);
const RepeatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);
const ClipboardIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
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

export default function RestaurantsPage() {
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
            <span className="text-sm text-text-2">Restaurants &amp; Food Service</span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-text mb-[18px] max-w-[800px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            The Phone Rings During the Rush.{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              DeskWolf Handles It.
            </span>
          </h1>

          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[600px] mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            80% of restaurant calls are the same five questions: hours, menu, reservations, catering, and directions.
            DeskWolf answers them all instantly so your staff stays focused on the guests in the room.
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
              Your staff is slammed.<br />
              <span className="font-light text-text-2">The phone keeps ringing.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              {
                icon: <PhoneOffIcon />,
                color: "amber" as const,
                title: "The Dinner Rush Blackout",
                desc: "Between 5pm and 9pm, your staff is plating food, running tables, and managing the floor. The phone rings and either goes to voicemail or gets answered by someone too busy to give a proper response.",
              },
              {
                icon: <RepeatIcon />,
                color: "blue" as const,
                title: "The Same 5 Questions on Repeat",
                desc: "\"What are your hours?\" \"Do you have outdoor seating?\" \"Are you open on Monday?\" \"Do you do catering?\" \"Where are you located?\" Your team answers these dozens of times a day instead of serving guests.",
              },
              {
                icon: <ClipboardIcon />,
                color: "green" as const,
                title: "Catering & Large Party Losses",
                desc: "A catering inquiry for a 50-person event comes in during the Friday rush. It goes to voicemail. By Monday, they booked with someone who actually picked up. That single call was worth thousands.",
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
                Every missed call is an empty table.
              </h2>
              <p className="text-[17px] text-text-2 leading-relaxed mb-8">
                Restaurants miss an average of 20 calls per week.
                With an average ticket of $40, that adds up to over $41,000 per year in lost revenue&nbsp;&mdash; and that doesn&rsquo;t count catering inquiries.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { num: "20", label: "Missed calls/wk" },
                  { num: "$40", label: "Avg ticket" },
                  { num: "$800", label: "Lost/week" },
                  { num: "$41K+", label: "Lost/year" },
                ].map((s) => (
                  <div key={s.label} className="p-5 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06]">
                    <div className="font-extrabold text-[28px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">{s.num}</div>
                    <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-text-3 italic">
                A single catering inquiry can be worth $2,000&ndash;$10,000.
                One recovered call during the holiday season can pay for an entire year of DeskWolf.
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
              <span className="font-light text-text-2">Built for restaurants.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {[
              {
                title: "FAQ Automation",
                items: [
                  "Instantly answers hours, location, parking, and dress code questions",
                  "Shares daily specials, happy hour info, and seasonal menu highlights",
                  "Handles allergen and dietary restriction inquiries accurately",
                  "Updates automatically when you change hours or menus",
                ],
              },
              {
                title: "Reservation Handling",
                items: [
                  "Takes reservation requests with party size, date, and time preferences",
                  "Sends confirmation texts with your address and parking info",
                  "Handles modification and cancellation requests",
                  "Routes large party bookings to your events manager",
                ],
              },
              {
                title: "Catering Inquiry Routing",
                items: [
                  "Captures event details: date, headcount, budget, dietary needs",
                  "Sends organized inquiry summaries to your catering team instantly",
                  "Provides basic catering menu and pricing info to callers",
                  "Follows up with callers who don't hear back within your set window",
                ],
              },
              {
                title: "Takeout & Order Info",
                items: [
                  "Directs callers to your online ordering system",
                  "Provides estimated wait times during peak hours",
                  "Answers questions about delivery radius and minimum order",
                  "Handles gift card inquiries and special event bookings",
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
                  &ldquo;Our host used to spend half the dinner shift on the phone answering the same questions. Now DeskWolf handles all of that. She actually gets to greet guests at the door. And we caught a $4,500 catering inquiry on a Tuesday night that would have gone straight to voicemail.&rdquo;
                </blockquote>
                <div className="text-[13px] text-text-3 font-medium">
                  &mdash; Linda C., Owner, Olive &amp; Vine Kitchen
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
            <h2 className="text-[clamp(30px,4vw,46px)] mb-10">Common questions from restaurant owners.</h2>
          </div>

          <div className="flex flex-col gap-5">
            {[
              {
                q: "Can it handle menu changes and daily specials?",
                a: "Yes. You can update your specials, seasonal items, or menu changes at any time and the AI reflects them immediately. No waiting for a developer or submitting a ticket. Your DeskWolf dashboard lets you edit info directly, or just tell your account manager and we handle it.",
              },
              {
                q: "What about allergen and dietary restriction questions?",
                a: "We train the AI on your full menu including allergens, vegetarian/vegan options, and gluten-free items. When a caller asks if you have nut-free options or a vegan entree, they get an accurate answer immediately instead of being put on hold while someone checks with the kitchen.",
              },
              {
                q: "Does it actually book reservations or just take messages?",
                a: "It depends on your setup. If you use a reservation platform like OpenTable or Resy, DeskWolf can walk callers through the process and direct them to book. If you manage reservations manually, it captures the request details and sends them directly to your host or manager for confirmation.",
              },
              {
                q: "We get a lot of calls in Spanish. Can it handle that?",
                a: "Yes. DeskWolf supports English, Spanish, French, and Creole out of the box. It detects the caller's language and responds accordingly. No extra setup, no extra cost. Your Spanish-speaking customers get the same quality experience as everyone else.",
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
              Stop Losing Orders to{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                the Dinner Rush.
              </span>
            </h2>
            <p className="text-[17px] text-text-2 mb-8">
              See how DeskWolf works for your restaurant. Live demo, real scenario, zero pressure.
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
