import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Chris. — DeskWolf LLC",
  description: "You found it.",
};

export default function ChrisPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      <section className="relative z-[2] min-h-screen flex items-center justify-center pt-[120px] pb-[100px]">
        {/* Big glow behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)" }} />

        <div className="max-w-[800px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white/[0.06] border border-white/10 rounded-[100px] mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-2.5 h-2.5 bg-brand-amber rounded-full animate-pulse-dot" />
            <span className="font-mono text-[12px] font-medium tracking-[0.08em] uppercase text-brand-amber">Classified Personnel File</span>
          </div>

          {/* Name */}
          <h1 className="text-[clamp(60px,10vw,120px)] font-extrabold leading-[0.95] tracking-[-0.05em] text-text mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Chris<span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">.</span>
          </h1>

          <p className="text-[clamp(18px,2vw,24px)] text-text-2 max-w-[500px] mx-auto mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Legend. Menace. The reason we had to build rate limiting.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { num: "100%", label: "That Guy" },
              { num: "0", label: "Chill Given" },
              { num: "24/7", label: "Chaos Mode" },
              { num: "1", label: "Of a Kind" },
            ].map((s) => (
              <div key={s.label} className="bg-white/[0.04] backdrop-blur-[16px] border border-white/[0.08] rounded-[20px] p-5">
                <div className="font-extrabold text-[28px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">{s.num}</div>
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="bg-white/[0.04] backdrop-blur-[16px] border-l-[3px] border-l-brand-purple rounded-r-[20px] p-8 max-w-[500px] mx-auto">
              <p className="italic text-[19px] text-text leading-relaxed">
                &ldquo;If this page exists, it means someone at DeskWolf thought I was important enough to waste server resources on.&rdquo;
              </p>
              <div className="mt-4 font-mono text-[11px] tracking-[0.06em] text-brand-purple">— Chris, probably</div>
            </div>
          </div>

          {/* Easter egg */}
          <div className="mt-16 opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
            <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-text-3 mb-3">Official DeskWolf Assessment</p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan rounded-[100px]">
              <span className="text-white font-bold text-sm">Certified Homie</span>
              <span className="text-white/60 text-xs">Since Day One</span>
            </div>
          </div>

          {/* Tiny footer note */}
          <p className="mt-20 text-[11px] text-text-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.9s" }}>
            This page will self-destruct. Or not. Depends on how Chris acts.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
