import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import NewsletterForm from "@/components/NewsletterForm";
import CalendlyEmbed from "./CalendlyEmbed";

export const metadata: Metadata = {
  title: "Try It Now | Call A.N.G.E.L. Live | DeskWolf LLC",
  description:
    "Call A.N.G.E.L. right now and experience DeskWolf's AI receptionist live. No signup, no demo booking required. Just dial.",
};

/* ── SVG Icons ── */
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const PhoneBigIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#phoneGrad)" strokeWidth="1.8" strokeLinecap="round">
    <defs>
      <linearGradient id="phoneGrad" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="50%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
  </svg>
);
const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);
const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const WaveIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
const GlobeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const team = [
  {
    initials: "VR",
    name: "Vic Roque",
    role: "Founder & CEO",
    desc: "Talk directly to the founder. Best for businesses ready to explore a full AI phone system.",
    calendlyUrl: "https://api.leadconnectorhq.com/widget/bookings/discovery-vic",
  },
  {
    initials: "CM",
    name: "Curtis Maki",
    role: "CMO",
    desc: "Great for understanding the ROI and marketing impact of AI voice agents on your business.",
    calendlyUrl: "https://api.leadconnectorhq.com/widget/bookings/discovery-curtis",
  },
];

const Check = () => (
  <span className="w-5 h-5 bg-gradient-to-br from-brand-green to-brand-cyan rounded-full flex items-center justify-center shrink-0 text-white text-[11px] font-bold">&#10003;</span>
);

export default function DemoPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ TRY IT NOW HERO ════════════ */}
      <section className="relative z-[2] min-h-screen flex items-center pt-[120px] pb-[80px]">
        {/* Extra glow layers behind the hero */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)", animation: "glowBreath 4s ease-in-out infinite" }} />
        <div className="absolute top-[20%] left-[30%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(26,95,212,0.12) 0%, transparent 70%)", animation: "glowBreath 5s ease-in-out 1s infinite" }} />
        <div className="absolute top-[25%] right-[25%] w-[350px] h-[350px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)", animation: "glowBreath 6s ease-in-out 2s infinite" }} />

        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] w-full">
          <div className="max-w-[800px] mx-auto text-center">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white/[0.06] border border-white/10 rounded-[100px] mb-8 shadow-[0_4px_16px_rgba(0,0,0,0.1)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-2.5 h-2.5 bg-brand-green rounded-full animate-pulse-dot" />
              <span className="font-mono text-[12px] font-medium tracking-[0.08em] uppercase text-brand-green">A.N.G.E.L. is Online</span>
            </div>

            {/* Main headline */}
            <h1 className="text-[clamp(40px,7vw,76px)] font-extrabold leading-[1.04] tracking-[-0.04em] text-text mb-5 opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              Don&rsquo;t take our word for it.
              <br />
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                Call her yourself.
              </span>
            </h1>

            <p className="text-[clamp(17px,1.8vw,20px)] text-text-2 max-w-[520px] mx-auto mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
              A.N.G.E.L. is our AI receptionist. She&rsquo;s live right now. Pick up your phone and hear what the future of your front desk sounds like.
            </p>

            {/* ──── THE PHONE CARD ──── */}
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <div className="relative max-w-[560px] mx-auto">
                {/* Outer glow ring */}
                <div className="absolute -inset-[2px] rounded-[32px] bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan opacity-40 blur-[3px]" />

                <div className="relative overflow-hidden bg-[rgba(12,14,20,0.85)] backdrop-blur-[40px] saturate-[1.8] border border-white/[0.12] rounded-[32px] p-[clamp(32px,5vw,52px)] shadow-[0_40px_120px_-20px_rgba(139,92,246,0.25),0_0_80px_-20px_rgba(26,95,212,0.2)]">
                  {/* Shimmer sweep */}
                  <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-shimmer pointer-events-none" style={{ background: "linear-gradient(115deg, transparent 42%, rgba(255,255,255,0.04) 46%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 54%, transparent 58%)" }} />

                  {/* Floating phone icon */}
                  <div className="flex justify-center mb-6" style={{ animation: "floatPhone 4s ease-in-out infinite" }}>
                    <div className="w-[88px] h-[88px] rounded-[24px] bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan flex items-center justify-center shadow-[0_8px_32px_rgba(139,92,246,0.4)]" style={{ animation: "ringPulse 2.4s ease-out infinite" }}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-text-3 mb-3 text-center">Try it now. Call A.N.G.E.L.</div>

                  {/* Phone number */}
                  <a
                    href="tel:+19097570141"
                    className="block text-center no-underline group"
                  >
                    <div className="text-[clamp(36px,6vw,56px)] font-extrabold tracking-[-0.02em] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent transition-all duration-300 group-hover:scale-[1.03]">
                      (909) 757-0141
                    </div>
                  </a>

                  {/* Sound wave visualizer */}
                  <div className="flex items-center justify-center gap-[3px] mt-5 mb-6 h-[28px]">
                    {[0.6, 0.3, 0.8, 0.5, 1, 0.4, 0.9, 0.6, 0.3, 0.7, 0.5, 0.8, 0.4, 0.6, 0.9, 0.3, 0.7, 0.5, 0.8, 0.6].map((delay, i) => (
                      <div
                        key={i}
                        className="w-[3px] rounded-full bg-gradient-to-t from-brand-blue via-brand-purple to-brand-cyan origin-bottom"
                        style={{
                          height: "100%",
                          animation: `waveBar ${0.8 + delay * 0.6}s ease-in-out ${delay * 0.3}s infinite`,
                        }}
                      />
                    ))}
                  </div>

                  {/* CTA button */}
                  <a
                    href="tel:+19097570141"
                    className="flex items-center justify-center gap-3 w-full py-4.5 px-8 rounded-[100px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan text-white font-semibold text-[16px] no-underline shadow-[0_8px_32px_rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_16px_48px_rgba(139,92,246,0.4)]"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Call A.N.G.E.L. Now
                  </a>

                  {/* Sub-info */}
                  <div className="flex items-center justify-center gap-6 mt-5 flex-wrap">
                    <div className="flex items-center gap-1.5 text-[12px] text-text-3">
                      <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                      Available 24/7
                    </div>
                    <div className="flex items-center gap-1.5 text-[12px] text-text-3">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                      Free to call
                    </div>
                    <div className="flex items-center gap-1.5 text-[12px] text-text-3">
                      <div className="w-1.5 h-1.5 bg-brand-purple rounded-full" />
                      No signup required
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom tagline */}
            <p className="text-sm text-text-3 mt-8 max-w-[400px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              She answers calls, books appointments, handles FAQs, and follows up. Just like your best receptionist, but she never sleeps.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════ WHAT SHE CAN DO ════════════ */}
      <section className="relative z-[2] py-[100px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">What to Try</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">Ask her anything.<br /><span className="font-light text-text-2">She&rsquo;s ready.</span></h2>
            <p className="text-[17px] text-text-2">When you call A.N.G.E.L., try these to see what she can do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              { icon: <PhoneIcon />, color: "blue" as const, title: "Ask About Services", desc: "\"What services does DeskWolf offer?\" Hear how she handles a real FAQ with natural conversation." },
              { icon: <ClockIcon />, color: "green" as const, title: "Book an Appointment", desc: "\"I'd like to schedule a demo.\" She'll walk you through booking a time that works." },
              { icon: <WaveIcon />, color: "purple" as const, title: "Ask Tough Questions", desc: "\"How much does it cost?\" or \"How is this different from an answering service?\" She handles objections." },
              { icon: <GlobeIcon />, color: "amber" as const, title: "Try Another Language", desc: "Switch to Spanish mid-call. She speaks English, Spanish, French, and Haitian Creole fluently." },
              { icon: <ShieldIcon />, color: "cyan" as const, title: "Test Her Knowledge", desc: "Ask about specific industries, pricing tiers, or technical details. She knows the business inside out." },
              { icon: <CheckIcon />, color: "blue" as const, title: "Just Chat", desc: "Have a conversation. See how natural she sounds. Notice there's no hold music, no \"press 1\", no waiting." },
            ].map((item, i) => (
              <GlassCard key={item.title} className={`p-8 rv d${(i % 3) + 1}`}>
                <GradientIcon color={item.color}>{item.icon}</GradientIcon>
                <h4 className="text-[17px] font-extrabold text-text mb-2 mt-5">{item.title}</h4>
                <p className="text-sm text-text-3 leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ SOCIAL PROOF STATS ════════════ */}
      <section className="relative z-[2] py-[80px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rv">
            {[
              { num: "<1s", label: "Response Time" },
              { num: "24/7", label: "Always On" },
              { num: "99.8%", label: "Uptime" },
              { num: "4", label: "Languages" },
            ].map((stat) => (
              <GlassCard key={stat.label} className="p-6 text-center">
                <div className="font-extrabold text-[clamp(24px,3vw,32px)] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">{stat.num}</div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ OR BOOK A HUMAN ════════════ */}
      <section className="relative z-[2] py-[120px]" id="book">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv mb-10">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-purple">Prefer a Human?</span>
            <h2 className="text-[clamp(26px,3.5vw,40px)] mt-2 mb-3">
              Book a call with the{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                team.
              </span>
            </h2>
            <p className="text-[17px] text-text-2">15-minute discovery call. No pitch, no pressure. Just a walkthrough tailored to your business.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <GlassCard key={member.initials} className={`p-8 rv d${i + 1}`}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-[56px] h-[56px] bg-gradient-to-br from-brand-blue to-brand-purple rounded-full flex items-center justify-center font-extrabold text-[18px] text-white shrink-0">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-[18px] font-extrabold text-text">{member.name}</h3>
                    <div className="font-mono text-[11px] tracking-[0.06em] text-brand-purple">
                      {member.role}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-text-3 leading-relaxed mb-6">{member.desc}</p>
                <CalendlyEmbed url={member.calendlyUrl} />
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-10 rv">
            <p className="text-sm text-text-3">
              Don&apos;t see a time that works?{" "}
              <a href="mailto:contact@deskwolf.ai" className="text-brand-cyan no-underline hover:underline">
                Email us at contact@deskwolf.ai
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ════════════ PRE-DEMO CHECKLIST ════════════ */}
      <section className="relative z-[2] py-[80px]">
        <div className="max-w-[800px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <GlassCard className="p-[clamp(28px,4vw,44px)] rv">
            <div className="text-center mb-8">
              <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Before Your Call</span>
              <h3 className="text-[clamp(22px,3vw,28px)] font-extrabold text-text mt-2">Pre-demo checklist</h3>
              <p className="text-sm text-text-3 mt-2">Having these ready makes the demo more useful for you.</p>
            </div>
            <ul className="list-none flex flex-col gap-3 max-w-[500px] mx-auto">
              {[
                "Know your approximate weekly call volume",
                "Have your average ticket or job value handy",
                "Think about your busiest hours and biggest pain points",
                "Have your current phone setup in mind (who answers, when, how)",
                "Any specific questions about AI phone systems",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-text-2">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
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
