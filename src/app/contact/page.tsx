import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import NewsletterForm from "@/components/NewsletterForm";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — DeskWolf LLC",
  description:
    "Get in touch with DeskWolf. Submit the form and get a live AI demo call — your phone will ring.",
};

/* ── SVG Icons ── */
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
  </svg>
);

/* ── Social icons (small, inline) ── */
const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/company/deskwolf" },
  { label: "Facebook", href: "https://facebook.com/deskwolf" },
  { label: "Instagram", href: "https://instagram.com/deskwolf" },
  { label: "X / Twitter", href: "https://x.com/deskwolf" },
  { label: "YouTube", href: "https://youtube.com/@deskwolf" },
  { label: "TikTok", href: "https://tiktok.com/@deskwolf" },
  { label: "Threads", href: "https://threads.net/@deskwolf" },
];

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] pt-[160px] pb-[60px]">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] text-center rv">
          <h1 className="text-[clamp(44px,6.5vw,72px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-text mb-4">
            Let&apos;s Talk.
          </h1>
          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[520px] mx-auto">
            Fill out the form and your phone will ring. That&apos;s our AI calling you back with a live demo. Pick up — that&apos;s all you need to do.
          </p>
        </div>
      </section>

      {/* ════════════ CONTACT FORM + INFO ════════════ */}
      <section className="relative z-[2] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            {/* Left — Form */}
            <GlassCard className="p-[clamp(28px,4vw,44px)] rv">
              <ContactForm />
            </GlassCard>

            {/* Right — Info stack */}
            <div className="flex flex-col gap-5">
              {/* What happens next */}
              <GlassCard className="p-7 rv d1">
                <div className="flex gap-4 items-start">
                  <GradientIcon color="amber">
                    <PhoneIcon />
                  </GradientIcon>
                  <div>
                    <h4 className="text-[15px] font-extrabold text-text mb-1.5">What happens next</h4>
                    <p className="text-sm text-text-2 leading-relaxed">
                      After you submit, your phone will ring. That&apos;s our AI. Pick up — that&apos;s your demo.
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Contact info */}
              <GlassCard className="p-7 rv d2">
                <h4 className="text-[15px] font-extrabold text-text mb-4">Contact Info</h4>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-text-2">
                    <MailIcon />
                    <a href="mailto:contact@deskwolf.ai" className="text-text-2 no-underline hover:text-brand-cyan transition-colors">
                      contact@deskwolf.ai
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-2">
                    <PhoneIcon />
                    <a href="tel:+19090000000" className="text-text-2 no-underline hover:text-brand-cyan transition-colors">
                      (909) 000-0000
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-2">
                    <MapPinIcon />
                    <span>San Bernardino, CA</span>
                  </div>
                </div>
              </GlassCard>

              {/* Response time */}
              <div className="rv d3">
                <div className="inline-flex items-center gap-2.5 px-5 py-3 bg-white/[0.06] border border-white/[0.1] rounded-[100px] backdrop-blur-[12px]">
                  <ClockIcon />
                  <span className="text-sm font-semibold text-text">We respond within 1 business hour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ SOCIAL LINKS ════════════ */}
      <section className="relative z-[2] py-[60px]">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] text-center rv">
          <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue mb-5 block">
            Follow Us
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[100px] bg-white/[0.06] border border-white/[0.1] text-sm font-medium text-text-2 no-underline backdrop-blur-[8px] transition-all duration-300 hover:bg-white/[0.12] hover:border-brand-purple/30 hover:text-text hover:-translate-y-0.5"
              >
                {s.label}
              </a>
            ))}
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
