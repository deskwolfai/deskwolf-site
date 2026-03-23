import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";
import ScrollTransform from "@/components/ScrollTransform";

/* ── SVG Icons (inline for zero deps) ── */
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const RecoverIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
  </svg>
);
const BoltIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);
const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
  </svg>
);
const DollarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const PulseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);
const BookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
const GridIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9z" />
  </svg>
);

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] min-h-screen flex items-center pt-[140px] pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-[60px] items-center">
            {/* Left — glass card */}
            <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-[32px] saturate-[1.5] border border-white/[0.08] rounded-[var(--radius-lg)] p-[clamp(32px,5vw,52px)] shadow-[0_32px_100px_-20px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.06)]">
              {/* Shimmer effect */}
              <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-shimmer pointer-events-none"
                style={{ background: "linear-gradient(115deg, transparent 42%, rgba(255,255,255,0.06) 46%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 54%, transparent 58%)" }} />

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse-dot" />
                <span className="text-sm text-text-2">AI Systems Online</span>
              </div>

              <h1 className="text-[clamp(44px,6.5vw,72px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-text mb-[18px] opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
                Every call.<br />
                <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                  Handled.
                </span>
              </h1>

              <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[460px] mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
                Your phones answered 24/7, missed calls recovered automatically, and every lead qualified before you even check your phone. We handle everything.
              </p>

              <div className="flex gap-3 flex-wrap opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
                <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white text-[#0F172A] shadow-[0_4px_20px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]">
                  Hear Your AI Receptionist Live
                </a>
                <a href="/how-it-works" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
                  See What You're Missing
                </a>
              </div>

              <div className="mt-10 flex items-center gap-3 flex-wrap opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-text-3">Trusted by</span>
                <div className="flex gap-1.5 flex-wrap">
                  {["Martinez Dental", "RQ Supply", "Sunrise Med Spa"].map((name) => (
                    <span key={name} className="text-[11px] font-medium text-text-2 bg-white/[0.06] border border-white/10 px-3 py-1 rounded-[100px] backdrop-blur-[8px]">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — notification stack */}
            <div className="relative h-[480px] opacity-0 animate-fade-up hidden lg:block" style={{ animationDelay: "0.4s" }}>
              {[
                { icon: <PhoneIcon />, color: "blue", title: "Call Answered", desc: "Martinez Family Dental, inbound", time: "Just now", top: 0, left: 20, delay: "0.6s" },
                { icon: <CalendarIcon />, color: "green", title: "Appointment Booked", desc: "Tuesday 2:00 PM, cleaning", time: "12s ago", top: 100, left: 80, delay: "0.9s" },
                { icon: <RecoverIcon />, color: "amber", title: "Missed Call Recovered", desc: "Peak HVAC, callback successful", time: "2m ago", top: 200, left: 40, delay: "1.2s" },
                { icon: <BoltIcon />, color: "purple", title: "Lead Qualified", desc: "Web form → Score: 94, auto-booked", time: "5m ago", top: 300, left: 100, delay: "1.5s" },
              ].map((n) => (
                <div
                  key={n.title}
                  className="absolute w-[340px] bg-[rgba(15,18,27,0.85)] backdrop-blur-[20px] saturate-[1.4] border border-white/[0.1] rounded-[var(--radius-std)] px-6 py-5 flex items-center gap-4 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-[400ms] cursor-pointer hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5),var(--shadow-glow)] animate-notif-in"
                  style={{ top: n.top, left: n.left, animationDelay: n.delay }}
                >
                  <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 bg-gradient-to-br ${
                    n.color === "blue" ? "from-blue-light to-brand-purple" :
                    n.color === "green" ? "from-brand-green to-brand-cyan" :
                    n.color === "amber" ? "from-brand-amber to-[#EF4444]" :
                    "from-brand-purple to-[#EC4899]"
                  }`}>
                    {n.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text mb-0.5">{n.title}</h4>
                    <p className="text-xs text-text-3 leading-snug">{n.desc}</p>
                  </div>
                  <span className="font-mono text-[10px] text-text-3 ml-auto shrink-0">{n.time}</span>
                </div>
              ))}

              {/* Floating stats */}
              <div className="absolute bottom-10 left-0 bg-[rgba(15,18,27,0.85)] backdrop-blur-[16px] border border-white/[0.1] rounded-[var(--radius-sm)] px-4 py-3 shadow-[var(--shadow-std)] text-center opacity-0 animate-fade-up" style={{ animationDelay: "1.8s" }}>
                <div className="font-extrabold text-[22px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">$18,250</div>
                <div className="font-mono text-[9px] tracking-[0.08em] uppercase text-text-3">Saved / Year</div>
              </div>
              <div className="absolute bottom-[100px] right-0 bg-[rgba(15,18,27,0.85)] backdrop-blur-[16px] border border-white/[0.1] rounded-[var(--radius-sm)] px-4 py-3 shadow-[var(--shadow-std)] text-center opacity-0 animate-fade-up" style={{ animationDelay: "2s" }}>
                <div className="font-extrabold text-[22px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">99.8%</div>
                <div className="font-mono text-[9px] tracking-[0.08em] uppercase text-text-3">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ SCROLL TRANSFORMATION ════════════ */}
      <ScrollTransform />

      {/* ════════════ LEAD MAGNET ════════════ */}
      <section className="relative z-[2] py-[100px]" id="resources">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Free Resources</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">Start here.<br /><span className="font-light text-text-2">No commitment.</span></h2>
            <p className="text-[17px] text-text-2">Free tools to see exactly what unanswered calls are costing you, and whether AI is the right fix.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              { icon: <GridIcon />, color: "blue" as const, title: "Missed Call Revenue Calculator", desc: "Plug in your call volume. See the dollar amount you're losing to voicemail every month.", tag: "Calculator", delay: "d1" },
              { icon: <CheckIcon />, color: "green" as const, title: "AI Readiness Checklist", desc: "Answer 10 questions, get a clear yes or not-yet. Takes 5 minutes.", tag: "Checklist", delay: "d2" },
              { icon: <BookIcon />, color: "purple" as const, title: "Voice AI Guide for Business Owners", desc: "How AI phone systems actually work, what they cost, and what to watch out for. Plain English, no pitch.", tag: "Guide", delay: "d3" },
            ].map((card) => (
              <GlassCard key={card.title} className={`p-8 rv ${card.delay}`}>
                <GradientIcon color={card.color}>{card.icon}</GradientIcon>
                <h4 className="text-[17px] font-extrabold text-text mb-2 mt-5">{card.title}</h4>
                <p className="text-sm text-text-3 leading-relaxed">{card.desc}</p>
                <span className="inline-block font-mono text-[10px] tracking-[0.08em] uppercase px-3 py-1 rounded-[100px] mt-4 bg-blue-pale text-brand-blue">{card.tag}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ VISION ════════════ */}
      <section className="relative z-[2] py-[120px]" id="about">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="rv">
              <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Our Approach</span>
              <h2 className="text-[clamp(30px,4vw,46px)] mb-4">Understand first.<br /><span className="font-light text-text-2">Automate second.</span></h2>
              <p className="mt-3.5 max-w-[460px] text-text-2">DeskWolf is an AI operations partner. We design, build, deploy, and manage intelligent phone systems for local businesses. Not a SaaS platform. Not a call center. A completely new approach to phone operations that didn't exist two years ago. We build it, run it, and treat your money like our own.</p>
            </div>
            <div className="rv d2">
              <div className="italic text-[19px] text-text leading-relaxed p-8 bg-white/[0.04] backdrop-blur-[16px] border-l-[3px] border-l-brand-purple rounded-r-[var(--radius-std)] shadow-[var(--shadow-std)]">
                &ldquo;We only automate what we should. Intelligently, cleanly, and securely.&rdquo;
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7">
                {[
                  { icon: <ShieldIcon />, color: "b", title: "Done-For-You", desc: "We build, install, and manage it." },
                  { icon: <ClockIcon />, color: "c", title: "24/7 Coverage", desc: "Never miss another call." },
                  { icon: <DollarIcon />, color: "a", title: "Full Transparency", desc: "Your tools, your accounts." },
                  { icon: <PulseIcon />, color: "p", title: "Cost Optimization", desc: "We fight for your bottom line." },
                ].map((v, i) => (
                  <div key={v.title} className={`flex gap-3 items-start p-3.5 rounded-[var(--radius-sm)] bg-white/[0.04] border border-white/[0.08] transition-all duration-300 cursor-pointer hover:border-brand-purple/30 hover:bg-white/[0.08] hover:shadow-[0_4px_16px_rgba(139,92,246,0.06)] rv d${i + 3}`}>
                    <div className={`w-[34px] h-[34px] rounded-lg flex items-center justify-center shrink-0 text-white bg-gradient-to-br ${
                      v.color === "b" ? "from-blue-light to-brand-purple" :
                      v.color === "c" ? "from-brand-cyan to-brand-green" :
                      v.color === "a" ? "from-brand-amber to-[#EF4444]" :
                      "from-brand-purple to-[#EC4899]"
                    }`}>
                      {v.icon}
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-text mb-0.5">{v.title}</h4>
                      <p className="text-xs text-text-3 leading-snug">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ PRIMARY OFFER ════════════ */}
      <section className="relative z-[2] py-[120px]" id="offer">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="rv">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase px-3.5 py-1.5 rounded-[100px] text-white font-medium bg-gradient-to-r from-blue-light to-brand-purple">Core Product</span>
              <h2 className="text-[clamp(30px,4vw,46px)] mt-4 mb-3.5">Stop Losing Revenue to Voicemail</h2>
              <p className="text-[17px] text-text-2 max-w-[460px]">Your AI receptionist answers every call, books appointments, and follows up by text. Live in two weeks, running 24/7 from day one.</p>
              <ul className="list-none mt-6 flex flex-col gap-2.5">
                {[
                  "24/7 natural voice call handling",
                  "FAQ responses trained on your business",
                  "Live calendar booking & rescheduling",
                  "English, Spanish, French, Creole",
                  "Post-call text & email confirmations",
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-[15px] text-text-2">
                    <span className="w-5 h-5 bg-gradient-to-br from-brand-green to-brand-cyan rounded-full flex items-center justify-center shrink-0 text-white text-[11px] font-bold">&#10003;</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
                  Hear It Handle a Call
                </a>
              </div>
            </div>

            <div className="rv d2">
              <GlassCard className="p-10 text-center">
                <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-text-3 mb-5">Live Performance</div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: "<1s", label: "Response Time" },
                    { num: "99.8%", label: "Uptime" },
                    { num: "4", label: "Languages" },
                    { num: "24/7", label: "Coverage" },
                  ].map((s) => (
                    <div key={s.label} className="p-5 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06]">
                      <div className="font-extrabold text-[28px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">{s.num}</div>
                      <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-5 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06]">
                  <div className="flex justify-between text-xs font-semibold mb-2">
                    <span className="text-text">Call Resolution Rate</span>
                    <span className="text-brand-blue">92%</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan w-[92%]" />
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ TESTIMONIALS ════════════ */}
      <section className="relative z-[2] py-[120px]" id="testimonials">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Results</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">What business owners<br /><span className="font-light text-text-2">are saying.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              { quote: "We were missing 20+ calls a week during peak hours. DeskWolf caught every single one from day one. The ROI was obvious within the first month.", initials: "SM", name: "Sarah Martinez", role: "Owner, Martinez Family Dental" },
              { quote: "I'm on job sites all day. Having an AI that answers like my best receptionist and books appointments into my calendar? That changed everything.", initials: "RK", name: "Robert Kim", role: "Owner, Peak HVAC Services" },
              { quote: "The missed call-back feature alone recovered $4,200 in the first 60 days. We were leaving money on the table and didn't even know it.", initials: "JL", name: "Jessica Lee", role: "Manager, Sunrise Med Spa" },
            ].map((t, i) => (
              <GlassCard key={t.name} className={`p-8 rv d${i + 1}`}>
                <div className="text-base tracking-[2px] mb-4 bg-gradient-to-r from-brand-amber to-[#EF4444] bg-clip-text text-transparent">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <blockquote className="italic text-[15px] text-text leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-pale to-brand-purple/15 rounded-full flex items-center justify-center font-bold text-[13px] text-brand-blue">{t.initials}</div>
                  <div>
                    <div className="font-semibold text-sm text-text">{t.name}</div>
                    <div className="text-xs text-text-3">{t.role}</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ OTHER OFFERS ════════════ */}
      <section className="relative z-[2] py-[120px]" id="more">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">More Products</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">Close the gaps<br /><span className="font-light text-text-2">in your phone coverage.</span></h2>
            <p className="text-[17px] text-text-2">Each product recovers revenue from a different blind spot. Run them solo or stack them together.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">
            {[
              {
                badge: "Expansion", badgeColor: "from-brand-amber to-[#D97706]",
                title: "Outbound Lead Qualifier",
                desc: "A lead fills out your form. The phone rings seconds later. They're greeted by name, qualified, and booked before they start browsing your competitor.",
                features: ["Instant callback from form submissions", "Lead qualification via custom script", "Appointment booking into your calendar", "CRM integration and full call logging"],
              },
              {
                badge: "Recovery", badgeColor: "from-brand-green to-brand-cyan",
                title: "Missed Call-Back Agent",
                desc: "Every dropped call and missed ring gets called back automatically within minutes. No lead left behind.",
                features: ["Auto-detect all dropped and missed calls", "Immediate outbound callback attempt", "Custom greeting and qualification", "Appointment booking on callback"],
              },
            ].map((card, i) => (
              <GlassCard key={card.title} className={`p-10 rv d${i + 1}`}>
                <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase px-3.5 py-1.5 rounded-[100px] text-white font-medium bg-gradient-to-r ${card.badgeColor}`}>{card.badge}</span>
                <h3 className="text-[22px] font-extrabold text-text mt-4 mb-2.5">{card.title}</h3>
                <p className="text-[15px] text-text-2 leading-relaxed mb-5">{card.desc}</p>
                <ul className="list-none border-t border-white/[0.06] pt-4">
                  {card.features.map((f) => (
                    <li key={f} className="text-[13px] text-text-2 py-1 pl-[18px] relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gradient-to-r before:from-brand-blue before:to-brand-purple before:opacity-60">{f}</li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ TEAM ════════════ */}
      <section className="relative z-[2] py-[120px]" id="team">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">The Team</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">Built by people who<br /><span className="font-light text-text-2">answer phones at 10pm.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              { initials: "VR", name: "Vic Roque", role: "Founder & CEO", desc: "A decade inside seven-figure digital businesses. Built DeskWolf to bring practical AI to the businesses that need it most." },
              { initials: "OL", name: "Owen Leaton", role: "Co-Founder & CTO", desc: "Systems architect. Python, C++, automation infrastructure. Builds the AI systems that power every deployment." },
              { initials: "CM", name: "Curtis Maki", role: "CMO", desc: "40,000 doors knocked. $3.6M in lifetime value. Sales-to-systems operator who knows the grind." },
            ].map((m, i) => (
              <GlassCard key={m.name} className={`p-9 text-center rv d${i + 1}`}>
                <div className="w-[72px] h-[72px] bg-gradient-to-br from-brand-blue to-brand-purple rounded-full mx-auto mb-4 flex items-center justify-center font-extrabold text-[22px] text-white">{m.initials}</div>
                <h4 className="text-[17px] font-extrabold text-text mb-1">{m.name}</h4>
                <div className="font-mono text-[11px] tracking-[0.06em] text-brand-purple mb-3">{m.role}</div>
                <p className="text-sm text-text-3 leading-relaxed">{m.desc}</p>
              </GlassCard>
            ))}
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
