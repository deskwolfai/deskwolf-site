import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Coming Soon | DeskWolf LLC",
  description:
    "This feature is on the way. Sign up to get notified when it launches.",
};

export default function ComingSoonPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      <section className="relative z-[2] min-h-[80vh] flex items-center justify-center pt-[140px] pb-[100px]">
        <div className="max-w-[600px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] rv">
            <div className="w-2 h-2 bg-brand-amber rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">In Development</span>
          </div>

          <h1 className="text-[clamp(42px,7vw,72px)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-4 rv d1">
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              Coming Soon.
            </span>
          </h1>

          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[460px] mx-auto mb-10 rv d2">
            We&rsquo;re building something great. This page isn&rsquo;t ready yet, but it will be soon.
          </p>

          {/* Email capture */}
          <div className="mb-12 rv d3">
            <p className="text-[15px] text-text-3 mb-4">Get notified when this launches</p>
            <div className="bg-white/[0.04] backdrop-blur-[16px] border border-white/[0.08] rounded-[var(--radius-std)] p-6">
              <NewsletterForm />
            </div>
          </div>

          {/* Navigation links */}
          <div className="rv d4">
            <p className="text-[13px] font-mono tracking-[0.1em] uppercase text-text-3 mb-4">In the meantime</p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a
                href="/services"
                className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-6 py-3 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[2px] hover:shadow-[var(--shadow-std)]"
              >
                Our Services
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-6 py-3 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[2px] hover:shadow-[var(--shadow-std)]"
              >
                Pricing
              </a>
              <a
                href="/demo"
                className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-6 py-3 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
