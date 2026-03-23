import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import GlassCard from "@/components/GlassCard";
import NewsletterForm from "@/components/NewsletterForm";
import CalendlyEmbed from "./CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book a Demo — DeskWolf LLC",
  description:
    "Pick your team member. Pick your time. Book a live demo of DeskWolf AI phone systems.",
};

const team = [
  {
    initials: "VR",
    name: "Vic Roque",
    role: "Founder & CEO",
    calendlyUrl: "https://calendly.com/vic-deskwolf",
  },
  {
    initials: "CM",
    name: "Curtis Maki",
    role: "CMO",
    calendlyUrl: "https://calendly.com/curtis-deskwolf",
  },
];

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
            <span className="text-sm text-text-2">Book a Demo</span>
          </div>
          <h1 className="text-[clamp(36px,5.5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-4">
            Pick your team member.{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              Pick your time.
            </span>
          </h1>
          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[520px] mx-auto">
            Choose who you&apos;d like to meet with and select a time that works.
          </p>
        </div>
      </section>

      {/* ════════════ TEAM SELECTOR + CALENDLY ════════════ */}
      <section className="relative z-[2] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <GlassCard key={member.initials} className={`p-8 rv d${i + 1}`}>
                {/* Member header */}
                <div className="flex items-center gap-4 mb-6">
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

                {/* Calendly embed */}
                <CalendlyEmbed url={member.calendlyUrl} />
              </GlassCard>
            ))}
          </div>

          {/* Fallback note */}
          <div className="text-center mt-10 rv">
            <p className="text-sm text-text-3">
              Don&apos;t see a time that works?{" "}
              <a
                href="mailto:hello@deskwolf.ai"
                className="text-brand-cyan no-underline hover:underline"
              >
                Email us at hello@deskwolf.ai
              </a>
            </p>
          </div>
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
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] relative z-[1] text-center">
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
