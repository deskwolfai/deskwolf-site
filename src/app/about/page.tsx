import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "About DeskWolf LLC",
  description:
    "The founding story behind DeskWolf. Born from a decade of answering calls, managing systems, and watching businesses lose money to problems that shouldn't exist.",
};

/* ── SVG Icons (inline for zero deps) ── */
const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const GlobeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const BookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
const DollarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const FaceplateIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6v6H9z" />
  </svg>
);
const WolfIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
  </svg>
);
const HeadsetIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] min-h-[70vh] flex items-center pt-[140px] pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] w-full text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">Our Story</span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-[18px] max-w-[800px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Built by someone who&rsquo;s actually{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              answered the phone at 10pm.
            </span>
          </h1>

          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[620px] mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            DeskWolf wasn&rsquo;t born in a boardroom or a venture pitch. It was born from a decade of answering calls, managing systems, and watching businesses lose money to problems that shouldn&rsquo;t exist.
          </p>

          <div className="flex gap-3 flex-wrap justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white text-[#0F172A] shadow-[0_4px_20px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]">
              Book a Free Demo
            </a>
            <a href="#founder" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
              Meet the Team
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ FOUNDER ════════════ */}
      <section className="relative z-[2] py-[120px]" id="founder">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 items-start">
            {/* Left — avatar & label */}
            <div className="rv text-center lg:text-left">
              <div className="w-[120px] h-[120px] bg-gradient-to-br from-brand-blue to-brand-purple rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center font-extrabold text-[40px] text-white shadow-[0_12px_40px_rgba(139,92,246,0.3)]">
                VR
              </div>
              <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Founder</span>
              <h2 className="text-[clamp(30px,4vw,42px)] font-extrabold text-text mt-1 mb-1">Vic Roque</h2>
              <div className="font-mono text-[12px] tracking-[0.06em] text-brand-purple">Founder &amp; CEO</div>
            </div>

            {/* Right — bio & quote */}
            <div className="rv d2">
              <p className="text-[17px] text-text-2 leading-relaxed mb-6">
                A decade inside seven-figure digital businesses. From AgencyBox to Grow Channels to WRKS Online, Vic has operated in the trenches of lead generation, client services, and systems design for businesses that live and die by the phone. Born in Manila, Philippines and raised in San Bernardino, CA, he built DeskWolf to solve a problem he watched destroy revenue for years: missed calls, broken follow-ups, and businesses bleeding money to problems that AI can fix overnight.
              </p>
              <p className="text-[17px] text-text-2 leading-relaxed mb-8">
                DeskWolf isn&rsquo;t a platform play or a VC-backed experiment. It&rsquo;s a practical AI operations company built by someone who knows what it&rsquo;s like to be the last person in the office, the one answering the phone at 10pm, and the one who loses sleep when a client&rsquo;s system goes down.
              </p>

              {/* Quote */}
              <div className="italic text-[19px] text-text leading-relaxed p-8 bg-white/[0.04] backdrop-blur-[16px] border-l-[3px] border-l-brand-purple rounded-r-[var(--radius-std)] shadow-[var(--shadow-std)]">
                &ldquo;We don&rsquo;t automate because we can. We automate because we should. Intelligently, cleanly, and securely.&rdquo;
                <div className="mt-3 text-[13px] text-text-3 not-italic font-medium">— Vic Roque, Founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ TEAM ════════════ */}
      <section className="relative z-[2] py-[120px]" id="team">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">The Team</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">Operators, not observers.</h2>
            <p className="text-[17px] text-text-2">Every person on this team has built, sold, or managed systems in the real world. No theorists.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              {
                initials: "VR",
                name: "Vic Roque",
                role: "Founder & CEO",
                desc: "A decade inside seven-figure digital businesses. Built DeskWolf to bring practical AI to the businesses that need it most.",
                quote: "Only automate what you should. Intelligently, cleanly, and securely.",
              },
              {
                initials: "OL",
                name: "Owen Leaton",
                role: "Co-Founder & CTO",
                desc: "Systems architect. Python, C++, automation infrastructure. Princess Yachts background. Builds the AI systems that power every deployment.",
                quote: "If it doesn't solve a real problem, it doesn't ship.",
              },
              {
                initials: "CM",
                name: "Curtis Maki",
                role: "CMO",
                desc: "40,000+ doors knocked. $3.6M in lifetime value generated. Sales-to-systems operator who turned the grind into a growth engine.",
                quote: "Smart marketing isn't louder. It's more precise.",
              },
            ].map((m, i) => (
              <GlassCard key={m.name} className={`p-9 text-center rv d${i + 1}`}>
                <div className="w-[72px] h-[72px] bg-gradient-to-br from-brand-blue to-brand-purple rounded-full mx-auto mb-4 flex items-center justify-center font-extrabold text-[22px] text-white">
                  {m.initials}
                </div>
                <h4 className="text-[17px] font-extrabold text-text mb-1">{m.name}</h4>
                <div className="font-mono text-[11px] tracking-[0.06em] text-brand-purple mb-3">{m.role}</div>
                <p className="text-sm text-text-3 leading-relaxed mb-4">{m.desc}</p>
                <div className="text-xs italic text-text-2 border-t border-white/[0.06] pt-4">
                  &ldquo;{m.quote}&rdquo;
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ VALUES ════════════ */}
      <section className="relative z-[2] py-[120px]" id="values">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Our Values</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">What we stand for.<br /><span className="font-light text-text-2">Every decision, every build.</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              {
                icon: <ShieldIcon />,
                color: "blue" as const,
                title: "Done-for-you, always",
                desc: "We don't hand you a login and wish you luck. We build it, deploy it, manage it, and optimize it. Your job is to run your business.",
              },
              {
                icon: <GlobeIcon />,
                color: "green" as const,
                title: "Transparency over lock-in",
                desc: "Your tools, your accounts, your data. We never hold your systems hostage. If you leave, everything you paid for stays with you.",
              },
              {
                icon: <BookIcon />,
                color: "purple" as const,
                title: "Understand first, automate second",
                desc: "We learn your business before we touch a single automation. No cookie-cutter deployments. Every system is built on understanding.",
              },
              {
                icon: <DollarIcon />,
                color: "amber" as const,
                title: "Fight for your bottom line",
                desc: "We treat your money like our own. Every recommendation, every tool choice, every optimization is made with your ROI in mind.",
              },
              {
                icon: <PhoneIcon />,
                color: "blue" as const,
                title: "Every call matters",
                desc: "One missed call is a missed opportunity. We built DeskWolf because we've seen what happens when phones go unanswered. It's not acceptable.",
              },
            ].map((v, i) => (
              <GlassCard key={v.title} className={`p-8 rv d${i + 1}`}>
                <GradientIcon color={v.color}>{v.icon}</GradientIcon>
                <h4 className="text-[17px] font-extrabold text-text mb-2 mt-5">{v.title}</h4>
                <p className="text-sm text-text-3 leading-relaxed">{v.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ WOLF STORY ════════════ */}
      <section className="relative z-[2] py-[120px]" id="wolf-story">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16 items-center">
            {/* Left — Wolf visual */}
            <div className="rv flex items-center justify-center">
              <div className="w-[200px] h-[200px] bg-white/[0.04] backdrop-blur-[16px] border border-white/[0.08] rounded-full flex items-center justify-center shadow-[0_32px_100px_-20px_rgba(139,92,246,0.15)]">
                <span className="text-[100px] leading-none select-none" role="img" aria-label="wolf">
                  &#128058;
                </span>
              </div>
            </div>

            {/* Right — content */}
            <div className="rv d2">
              <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">The Name</span>
              <h2 className="text-[clamp(30px,4vw,46px)] mt-2 mb-6">Why the wolf?</h2>

              <div className="flex flex-col gap-6">
                {[
                  {
                    icon: <FaceplateIcon />,
                    title: "The Steel Faceplate",
                    desc: "\"Desk\" isn't about a piece of furniture. It's about the front desk, the first point of contact. The steel barrier between your business and chaos. DeskWolf is that faceplate: always on, always ready, always professional.",
                  },
                  {
                    icon: <WolfIcon />,
                    title: "The Wolf",
                    desc: "Wolves are relentless, intelligent, and they work as a pack. They don't quit when it gets hard. They adapt, communicate, and protect what matters. That's the energy behind everything we build.",
                  },
                  {
                    icon: <HeadsetIcon />,
                    title: "The Headset",
                    desc: "This started with phones. Every system we build traces back to the same mission: never let a call go unanswered, never let a lead go cold, never let a business lose money to something preventable.",
                  },
                ].map((trait) => (
                  <div key={trait.title} className="flex gap-4 items-start p-5 rounded-[var(--radius-sm)] bg-white/[0.04] border border-white/[0.08] transition-all duration-300 hover:border-brand-purple/30 hover:bg-white/[0.08]">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-brand-purple bg-white/[0.06] border border-white/[0.08]">
                      {trait.icon}
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-text mb-1">{trait.title}</h4>
                      <p className="text-sm text-text-3 leading-relaxed">{trait.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ HOW WE'RE DIFFERENT ════════════ */}
      <section className="relative z-[2] py-[120px]" id="different">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">The Difference</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">Why this is different.<br /><span className="font-light text-text-2">Side by side.</span></h2>
          </div>

          {/* Comparison table */}
          <div className="mt-12 rv d1">
            <GlassCard className="p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[640px]">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th className="px-7 py-5 text-[13px] font-bold text-text-3 w-[200px]"></th>
                      <th className="px-5 py-5 text-center">
                        <div className="text-[14px] font-extrabold bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">DeskWolf</div>
                      </th>
                      <th className="px-5 py-5 text-center text-[13px] font-semibold text-text-3">Hiring a Receptionist</th>
                      <th className="px-5 py-5 text-center text-[13px] font-semibold text-text-3">Answering Service</th>
                      <th className="px-5 py-5 text-center text-[13px] font-semibold text-text-3">DIY Chatbot</th>
                    </tr>
                  </thead>
                  <tbody className="text-[13px]">
                    {[
                      { feature: "Monthly Cost", dw: "$2,000–$3,000", hire: "$3,500+ (salary + benefits)", ans: "$0.75–$1.25/min", diy: "$50–$300" },
                      { feature: "24/7 Coverage", dw: "yes", hire: "no", ans: "yes", diy: "yes" },
                      { feature: "Calls Handled Simultaneously", dw: "Unlimited", hire: "1", ans: "Limited", diy: "N/A (text only)" },
                      { feature: "Appointment Booking", dw: "yes", hire: "yes", ans: "Some", diy: "no" },
                      { feature: "Multilingual", dw: "yes", hire: "Rare", ans: "Extra cost", diy: "Limited" },
                      { feature: "CRM Integration", dw: "yes", hire: "Manual", ans: "Rare", diy: "Some" },
                      { feature: "Call Transcripts", dw: "yes", hire: "no", ans: "Extra cost", diy: "N/A" },
                      { feature: "Vendor Lock-In", dw: "no", hire: "N/A", ans: "yes", diy: "yes" },
                      { feature: "Fully Managed", dw: "yes", hire: "You manage", ans: "Partial", diy: "You build it" },
                    ].map((row) => (
                      <tr key={row.feature} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                        <td className="px-7 py-4 font-semibold text-text">{row.feature}</td>
                        <td className="px-5 py-4 text-center font-semibold text-brand-green">
                          {row.dw === "yes" ? "✓" : row.dw === "no" ? "✗" : row.dw}
                        </td>
                        <td className="px-5 py-4 text-center text-text-3">
                          {row.hire === "yes" ? "✓" : row.hire === "no" ? <span className="text-[#EF4444]">✗</span> : row.hire}
                        </td>
                        <td className="px-5 py-4 text-center text-text-3">
                          {row.ans === "yes" ? "✓" : row.ans === "no" ? <span className="text-[#EF4444]">✗</span> : row.ans}
                        </td>
                        <td className="px-5 py-4 text-center text-text-3">
                          {row.diy === "yes" ? "✓" : row.diy === "no" ? <span className="text-[#EF4444]">✗</span> : row.diy}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </div>

          <div className="mt-8 text-center rv d2">
            <p className="text-[15px] text-text-2 max-w-[520px] mx-auto">
              The difference isn&rsquo;t just price. It&rsquo;s ownership. With DeskWolf, you own your tools, your data, and your system. No lock-in. No markup. No surprises.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════ OUR TECH STACK ════════════ */}
      <section className="relative z-[2] py-[120px]" id="tech-stack">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Under the Hood</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">Our tech stack.<br /><span className="font-light text-text-2">Enterprise-grade. Transparent.</span></h2>
            <p className="text-[17px] text-text-2">Every tool we deploy is set up under your accounts. You own the keys, the data, and the subscriptions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              { icon: <PhoneIcon />, color: "blue" as const, title: "Voice AI Platform", desc: "VAPI-powered voice agents with natural language processing, real-time call handling, and sub-second response times. Handles unlimited concurrent calls." },
              { icon: <GlobeIcon />, color: "green" as const, title: "CRM & Pipeline", desc: "GoHighLevel for lead management, pipeline automation, follow-up sequences, and appointment booking. Full API integration." },
              { icon: <ShieldIcon />, color: "purple" as const, title: "Automation Engine", desc: "n8n workflow automation for data routing, webhook processing, email triggers, and multi-system orchestration." },
              { icon: <BookIcon />, color: "amber" as const, title: "Telephony", desc: "Twilio for reliable call routing, phone number management, SMS follow-ups, and carrier-grade voice quality." },
              { icon: <DollarIcon />, color: "cyan" as const, title: "Cloud Infrastructure", desc: "Google Cloud, Vercel, and enterprise hosting for 99.8%+ uptime. Distributed, scalable, and monitored 24/7." },
              { icon: <PhoneIcon />, color: "blue" as const, title: "Analytics & Monitoring", desc: "Full call transcription, sentiment analysis, performance dashboards, and cost tracking. Every call is logged and searchable." },
            ].map((item, i) => (
              <GlassCard key={item.title} className={`p-8 rv d${(i % 3) + 1}`}>
                <GradientIcon color={item.color}>{item.icon}</GradientIcon>
                <h4 className="text-[17px] font-extrabold text-text mb-2 mt-5">{item.title}</h4>
                <p className="text-sm text-text-3 leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>

          <div className="mt-12 text-center rv">
            <GlassCard className="p-8 max-w-[600px] mx-auto">
              <div className="font-extrabold text-[20px] text-text mb-2">You own your tools. Always.</div>
              <p className="text-sm text-text-3 leading-relaxed mb-5">
                Every API key, every account, every piece of data lives under your name. We charge for expertise and management, never for tool markup. If we part ways, everything stays with you.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Zero tool markup", "Your accounts", "Your data", "No lock-in", "Full transparency"].map((tag) => (
                  <span key={tag} className="text-[11px] font-medium text-text-2 bg-white/[0.06] border border-white/10 px-3 py-1.5 rounded-[100px]">{tag}</span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ════════════ VISION QUOTE ════════════ */}
      <section className="relative z-[2] py-[120px]">
        <div className="max-w-[800px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center rv">
          <blockquote className="italic text-[clamp(22px,3vw,30px)] text-text leading-relaxed font-light">
            &ldquo;Every business deserves a front desk that never sleeps, never misses, and never stops learning.&rdquo;
          </blockquote>
          <p className="text-[17px] text-text-2 mt-6 max-w-[520px] mx-auto">
            That&rsquo;s the vision. Not AI for the sake of AI, but intelligent systems that protect revenue, save time, and let business owners focus on what they do best.
          </p>
          <div className="mt-8 font-mono text-[11px] tracking-[0.1em] uppercase text-text-3">
            Highland, CA | Est. March 2026
          </div>
          <div className="mt-8">
            <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
              Book a Free Demo
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
