import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function NotFound() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      <section className="relative z-[2] min-h-[80vh] flex items-center justify-center pt-[140px] pb-[100px]">
        <div className="max-w-[600px] mx-auto px-[clamp(20px,5vw,64px)] text-center">
          {/* Big 404 */}
          <div className="text-[clamp(100px,20vw,180px)] font-extrabold leading-none tracking-[-0.04em] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent rv">
            404
          </div>

          {/* Wolf */}
          <div className="text-[60px] leading-none my-4 rv d1" role="img" aria-label="wolf">
            &#128058;
          </div>

          <h1 className="text-[clamp(24px,4vw,36px)] font-extrabold text-text mb-3 rv d2">
            Looks like this page wandered off.
          </h1>

          <p className="text-[17px] text-text-2 max-w-[420px] mx-auto mb-10 rv d3">
            Even our AI couldn&rsquo;t find what you&rsquo;re looking for. Let&rsquo;s get you back on track.
          </p>

          <div className="flex gap-3 flex-wrap justify-center rv d4">
            <a
              href="/"
              className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white text-[#0F172A] shadow-[0_4px_20px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]"
            >
              Go Home
            </a>
            <a
              href="/demo"
              className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]"
            >
              Book a Demo
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
