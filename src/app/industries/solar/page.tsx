import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "AI Phone Systems for Solar Installation & Energy | DeskWolf LLC",
  description:
    "Stop losing $15K+ installations to missed calls. DeskWolf answers every call 24/7, qualifies leads, books site surveys, and handles solar FAQs instantly.",
};

/* ── SVG Icons (inline for zero deps) ── */
const PhoneOffIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07" />
    <path d="M1 1l22 22" /><path d="M4.22 4.22A19.79 19.79 0 0 0 2.12 21.9 2 2 0 0 0 4.11 24h0" />
  </svg>
);
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
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

export default function SolarPage() {
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
            <span className="text-sm text-text-2">Solar Installation &amp; Energy</span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-text mb-[18px] max-w-[800px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            They Called Once.{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              DeskWolf Picked Up.
            </span>
          </h1>

          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[600px] mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Homeowners research 3&ndash;5 installers. They call once. If nobody picks up, they move to the next company on the list.
            DeskWolf answers 24/7, qualifies leads, books site surveys, and handles solar FAQs. You never lose a $15K+ installation to voicemail.
          </p>

          <div className="flex gap-3 flex-wrap justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white text-[#0F172A] shadow-[0_4px_20px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]">
              Catch Every $15K Lead
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
              Solar sales are won<br />
              <span className="font-light text-text-2">in the first five minutes.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              {
                icon: <PhoneOffIcon />,
                color: "amber" as const,
                title: "One Call, One Chance",
                desc: "Homeowners research 3-5 installers and call down the list. If you don't answer, they don't leave a voicemail. They call the next company. Solar sales cycles are long and competitive, and the first installer to connect wins.",
              },
              {
                icon: <ClockIcon />,
                color: "blue" as const,
                title: "Research Happens After Hours",
                desc: "Homeowners research solar in the evenings and on weekends, exactly when your office is closed. By Monday morning, the leads that called Friday night have already talked to two other installers.",
              },
              {
                icon: <ClipboardIcon />,
                color: "green" as const,
                title: "Unqualified Leads Waste Time",
                desc: "Renters, shaded roofs, HOA restrictions. Your sales team wastes hours on calls that were never going to close. Every minute spent on a bad lead is a minute not spent on a $20K installation.",
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
                Solar companies miss an average of 8 calls per week.
                With an average installation value of $20,000 and a 15% close rate, every week of missed calls is $24,000 in pipeline walking out the door.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { num: "8", label: "Missed calls/wk" },
                  { num: "$20K", label: "Avg install value" },
                  { num: "$24K", label: "Pipeline lost/wk" },
                  { num: "$1.2M", label: "Pipeline lost/yr" },
                ].map((s) => (
                  <div key={s.label} className="p-5 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06]">
                    <div className="font-extrabold text-[28px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">{s.num}</div>
                    <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-text-3 italic">
                Even recovering just 2 missed calls per week at a 15% close rate adds $312K in annual pipeline.
                A single closed installation can pay for a full year of DeskWolf service.
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
              <span className="font-light text-text-2">Built for solar companies.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {[
              {
                title: "Speed-to-Lead on Every Submission",
                items: [
                  "Instant callback on website form submissions, connecting within seconds",
                  "Calls back leads from canvassing QR codes and tablet forms automatically",
                  "Speed-to-lead is everything in solar. First to connect wins the deal",
                  "No leads sitting in a queue waiting for Monday morning follow-up",
                ],
              },
              {
                title: "After-Hours Call Handling",
                items: [
                  "Answers calls 24/7, including evenings and weekends when homeowners research",
                  "Captures caller details, property info, and interest level",
                  "Provides instant answers on financing, panel types, and installation timelines",
                  "Sends qualified lead alerts to your sales team in real time",
                ],
              },
              {
                title: "Site Survey Scheduling",
                items: [
                  "Books site survey appointments directly into your calendar",
                  "Confirms property address, roof type, and homeowner status upfront",
                  "Sends confirmation texts with your company info and appointment details",
                  "Reduces no-shows by collecting commitment before the visit",
                ],
              },
              {
                title: "Lead Qualification & FAQ Handling",
                items: [
                  "Screens for homeowner vs. renter before booking appointments",
                  "Asks qualifying questions: roof type, shade, HOA restrictions",
                  "Handles common FAQs: financing options, ROI, panel types, timelines",
                  "Routes only qualified, ready-to-buy leads to your sales team",
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
                  &ldquo;We were losing leads every weekend. Homeowners would fill out a form Friday night and by Monday they&rsquo;d already signed with someone else. DeskWolf calls them back in under a minute. We closed two extra installs in the first month&nbsp;&mdash; that&rsquo;s $38K in revenue we would have lost.&rdquo;
                </blockquote>
                <div className="text-[13px] text-text-3 font-medium">
                  &mdash; Marcus T., Sales Manager, Apex Solar Solutions
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
            <h2 className="text-[clamp(30px,4vw,46px)] mb-10">Common questions from solar companies.</h2>
          </div>

          <div className="flex flex-col gap-5">
            {[
              {
                q: "Can the AI handle technical questions about solar panels?",
                a: "Yes. During setup, we train the AI on your specific products, financing options, and installation process. It can answer questions about panel efficiency, warranty terms, net metering, tax credits, and payback timelines, all customized to your offerings.",
              },
              {
                q: "What about leads from door-to-door canvassing?",
                a: "Our Outbound Lead Qualifier calls back form submissions from canvassing QR codes and tablets within seconds. When a homeowner scans your code and fills out a form, DeskWolf connects with them before they lose interest. That alone can dramatically increase your canvassing conversion rate.",
              },
              {
                q: "Do you handle HOA and permitting questions?",
                a: "The AI is trained on common HOA and permitting FAQs specific to your service area. It can walk homeowners through typical approval timelines, common restrictions, and what documentation they'll need. That reduces friction and keeps leads moving forward.",
              },
              {
                q: "How does it work with our CRM?",
                a: "Full integration with common solar CRMs: Salesforce, HubSpot, GHL, and more. Leads, appointments, and call summaries sync automatically. Your sales team sees every interaction in their existing workflow without switching tools or manual data entry.",
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
              Stop Losing Installs to{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                Voicemail.
              </span>
            </h2>
            <p className="text-[17px] text-text-2 mb-8">
              See how DeskWolf works for solar companies. Live demo, real scenario, zero pressure.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
                Close More Installs This Month
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
