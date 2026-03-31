import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import GlassCard from "@/components/GlassCard";
import NewsletterForm from "@/components/NewsletterForm";
import CalendlyEmbed from "../demo/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Meet Vic | Book a Call | DeskWolf LLC",
  description:
    "Book a 15-minute discovery call with Vic Roque, founder of DeskWolf. No pitch, no pressure — just a walkthrough tailored to your business.",
};

const Check = () => (
  <span className="w-5 h-5 bg-gradient-to-br from-brand-green to-brand-cyan rounded-full flex items-center justify-center shrink-0 text-white text-[11px] font-bold">&#10003;</span>
);

export default function MeetVicPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] min-h-[60vh] flex items-center pt-[120px] pb-[40px]">
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)", animation: "glowBreath 4s ease-in-out infinite" }} />
        <div className="absolute top-[20%] left-[30%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(26,95,212,0.12) 0%, transparent 70%)", animation: "glowBreath 5s ease-in-out 1s infinite" }} />

        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] w-full">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white/[0.06] border border-white/10 rounded-[100px] mb-8 shadow-[0_4px_16px_rgba(0,0,0,0.1)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-2.5 h-2.5 bg-brand-green rounded-full animate-pulse-dot" />
              <span className="font-mono text-[12px] font-medium tracking-[0.08em] uppercase text-brand-green">Booking Open</span>
            </div>

            <h1 className="text-[clamp(40px,7vw,76px)] font-extrabold leading-[1.04] tracking-[-0.04em] text-text mb-5 opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              Meet{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                Vic.
              </span>
            </h1>

            <p className="text-[clamp(17px,1.8vw,20px)] text-text-2 max-w-[520px] mx-auto mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
              15-minute discovery call with the founder. No pitch, no pressure &mdash; just a walkthrough tailored to your business.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════ BOOKING EMBED ════════════ */}
      <section className="relative z-[2] pb-[100px]">
        <div className="max-w-[800px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <GlassCard className="p-8 rv">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[56px] h-[56px] bg-gradient-to-br from-brand-blue to-brand-purple rounded-full flex items-center justify-center font-extrabold text-[18px] text-white shrink-0">
                VR
              </div>
              <div>
                <h3 className="text-[18px] font-extrabold text-text">Vic Roque</h3>
                <div className="font-mono text-[11px] tracking-[0.06em] text-brand-purple">
                  Founder &amp; CEO
                </div>
              </div>
            </div>
            <CalendlyEmbed url="https://api.leadconnectorhq.com/widget/bookings/discovery-vic" />
          </GlassCard>
        </div>
      </section>

      {/* ════════════ PRE-CALL CHECKLIST ════════════ */}
      <section className="relative z-[2] py-[80px]">
        <div className="max-w-[800px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <GlassCard className="p-[clamp(28px,4vw,44px)] rv">
            <div className="text-center mb-8">
              <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Before Your Call</span>
              <h3 className="text-[clamp(22px,3vw,28px)] font-extrabold text-text mt-2">Pre-call checklist</h3>
              <p className="text-sm text-text-3 mt-2">Having these ready makes the call more useful for you.</p>
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
