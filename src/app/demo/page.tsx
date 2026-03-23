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
  title: "Book a Demo — DeskWolf LLC",
  description:
    "Pick your team member. Pick your time. See exactly how DeskWolf AI phone systems would work for your business.",
};

/* ── SVG Icons ── */
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
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

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] pt-[160px] pb-[60px]">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] text-center rv">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
            <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">Free Discovery Call</span>
          </div>
          <h1 className="text-[clamp(36px,5.5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-4">
            See DeskWolf in Action.{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              Live.
            </span>
          </h1>
          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[580px] mx-auto mb-3">
            Pick your team member, choose a time, and hear what your AI receptionist sounds like on a real call. No sales pitch — just a live walkthrough tailored to your business.
          </p>
          <p className="text-sm text-text-3 max-w-[400px] mx-auto">
            15 minutes. No commitment. No credit card required.
          </p>
        </div>
      </section>

      {/* ════════════ WHAT TO EXPECT ════════════ */}
      <section className="relative z-[2] py-[60px]">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rv">
            {[
              { icon: <PhoneIcon />, color: "blue" as const, title: "Live Demo Call", desc: "Hear the AI agent handle a real call — your business, your questions." },
              { icon: <ClockIcon />, color: "green" as const, title: "15 Minutes", desc: "Short, focused, and tailored to your specific situation." },
              { icon: <CheckIcon />, color: "purple" as const, title: "Custom Walkthrough", desc: "We show you exactly how it works for your industry and setup." },
              { icon: <ShieldIcon />, color: "amber" as const, title: "No Pressure", desc: "No pitch. No obligation. Just a real demonstration of the technology." },
            ].map((item, i) => (
              <GlassCard key={item.title} className={`p-6 rv d${i + 1}`}>
                <GradientIcon color={item.color}>{item.icon}</GradientIcon>
                <h4 className="text-[15px] font-extrabold text-text mt-4 mb-1.5">{item.title}</h4>
                <p className="text-sm text-text-3 leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ TEAM SELECTOR + CALENDARS ════════════ */}
      <section className="relative z-[2] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="text-center max-w-[560px] mx-auto rv mb-10">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Choose Your Team Member</span>
            <h2 className="text-[clamp(26px,3.5vw,36px)] mt-2">Pick who you&apos;d like to meet with.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <GlassCard key={member.initials} className={`p-8 rv d${i + 1}`}>
                {/* Member header */}
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

                {/* Calendar embed */}
                <CalendlyEmbed url={member.calendlyUrl} />
              </GlassCard>
            ))}
          </div>

          {/* Fallback note */}
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
        <div className="max-w-[800px] mx-auto px-[clamp(20px,5vw,64px)]">
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

      {/* ════════════ SOCIAL PROOF ════════════ */}
      <section className="relative z-[2] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rv">
            {[
              { num: "<1s", label: "AI Response Time" },
              { num: "24/7", label: "Coverage" },
              { num: "99.8%", label: "Uptime" },
              { num: "4", label: "Languages Supported" },
            ].map((stat) => (
              <GlassCard key={stat.label} className="p-6 text-center">
                <div className="font-extrabold text-[clamp(24px,3vw,32px)] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">{stat.num}</div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">{stat.label}</div>
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
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] relative z-[1] text-center">
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
