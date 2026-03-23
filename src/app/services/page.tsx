import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Services — DeskWolf LLC",
  description:
    "Done-for-you AI voice agents, CRM automation, consulting, and content creation.",
};

/* ── SVG Icons (inline for zero deps) ── */
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const BoltIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);
const RecoverIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
  </svg>
);
const GearIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const CpuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);
const CompassIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);
const MicIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);
const VideoIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);
const CodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
const MessageIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const FileTextIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
  </svg>
);
const MoonIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
const GlobeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const AlertIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

/* ── Reusable check mark for feature lists ── */
const Check = () => (
  <span className="w-5 h-5 bg-gradient-to-br from-brand-green to-brand-cyan rounded-full flex items-center justify-center shrink-0 text-white text-[11px] font-bold">
    &#10003;
  </span>
);

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] min-h-screen flex items-center pt-[140px] pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] w-full">
          <div className="max-w-[720px] mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse-dot" />
              <span className="text-sm text-text-2">Full Service Menu</span>
            </div>

            <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-text mb-[18px] opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              Everything Your Front Desk Should Be Doing&nbsp;&mdash;{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                Without Hiring Anyone New.
              </span>
            </h1>

            <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[580px] mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
              AI voice agents, CRM automation, consulting, and content creation.
              All done-for-you. All managed by us. Pick what you need, or stack them all.
            </p>

            <div className="flex gap-3 flex-wrap justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <a href="#core" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white text-[#0F172A] shadow-[0_4px_20px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]">
                See Core Products
              </a>
              <a href="#services" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
                Browse All Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ CORE PRODUCTS ════════════ */}
      <section className="relative z-[2] py-[120px]" id="core">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Core Products</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Three AI agents.<br />
              <span className="font-light text-text-2">Total phone coverage.</span>
            </h2>
            <p className="text-[17px] text-text-2">Each product solves a different part of your phone problem. Sold independently or combined.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12">
            {/* AI Receptionist */}
            <GlassCard className="p-8 rv d1">
              <div className="flex items-center justify-between mb-5">
                <GradientIcon color="blue"><PhoneIcon /></GradientIcon>
                <span className="font-mono text-[10px] tracking-[0.08em] uppercase px-3 py-1 rounded-[100px] bg-blue-pale text-brand-blue font-medium">Inbound</span>
              </div>
              <h3 className="text-[20px] font-extrabold text-text mb-1">AI Receptionist</h3>
              <div className="font-extrabold text-[22px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent mb-3">From $1,500/mo</div>
              <p className="text-sm text-text-3 leading-relaxed mb-5">
                24/7 call handling. Answers FAQs, books appointments, routes calls, and sends follow-up texts. Your front desk, always on.
              </p>
              <ul className="list-none flex flex-col gap-2">
                {[
                  "Natural voice call handling",
                  "FAQ responses trained on your business",
                  "Live calendar booking & rescheduling",
                  "Call routing & warm transfers",
                  "Post-call text & email confirmations",
                  "English, Spanish, French, Creole",
                  "Full call transcripts & analytics",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-text-2"><Check />{f}</li>
                ))}
              </ul>
              <div className="flex gap-1.5 flex-wrap mt-5 pt-5 border-t border-white/[0.06]">
                {["Dental", "Med Spa", "HVAC", "Legal", "Real Estate"].map((tag) => (
                  <span key={tag} className="text-[10px] font-medium text-text-3 bg-white/[0.06] border border-white/10 px-2.5 py-0.5 rounded-[100px]">{tag}</span>
                ))}
              </div>
            </GlassCard>

            {/* Lead Qualifier */}
            <GlassCard className="p-8 rv d2">
              <div className="flex items-center justify-between mb-5">
                <GradientIcon color="amber"><BoltIcon /></GradientIcon>
                <span className="font-mono text-[10px] tracking-[0.08em] uppercase px-3 py-1 rounded-[100px] bg-brand-amber/10 text-brand-amber font-medium">Outbound</span>
              </div>
              <h3 className="text-[20px] font-extrabold text-text mb-1">Lead Qualifier</h3>
              <div className="font-extrabold text-[22px] bg-gradient-to-r from-brand-amber to-[#EF4444] bg-clip-text text-transparent mb-3">From $1,500/mo</div>
              <p className="text-sm text-text-3 leading-relaxed mb-5">
                Instant callback on every form submission. Greets leads by name, qualifies them via custom script, and books appointments automatically.
              </p>
              <ul className="list-none flex flex-col gap-2">
                {[
                  "Instant callback from form submissions",
                  "Lead qualification via custom script",
                  "Appointment booking into your calendar",
                  "CRM integration & full call logging",
                  "Custom greeting & qualification flow",
                  "Priority routing for hot leads",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-text-2"><Check />{f}</li>
                ))}
              </ul>
              <div className="flex gap-1.5 flex-wrap mt-5 pt-5 border-t border-white/[0.06]">
                {["Home Services", "Insurance", "Solar", "Roofing", "Auto"].map((tag) => (
                  <span key={tag} className="text-[10px] font-medium text-text-3 bg-white/[0.06] border border-white/10 px-2.5 py-0.5 rounded-[100px]">{tag}</span>
                ))}
              </div>
            </GlassCard>

            {/* Call-Back Agent */}
            <GlassCard className="p-8 rv d3">
              <div className="flex items-center justify-between mb-5">
                <GradientIcon color="green"><RecoverIcon /></GradientIcon>
                <span className="font-mono text-[10px] tracking-[0.08em] uppercase px-3 py-1 rounded-[100px] bg-brand-green/10 text-brand-green font-medium">Recovery</span>
              </div>
              <h3 className="text-[20px] font-extrabold text-text mb-1">Call-Back Agent</h3>
              <div className="font-extrabold text-[22px] bg-gradient-to-r from-brand-green to-brand-cyan bg-clip-text text-transparent mb-3">From $500/mo</div>
              <p className="text-sm text-text-3 leading-relaxed mb-5">
                Every dropped call, every missed ring&nbsp;&mdash; automatically called back. No lead left behind.
              </p>
              <ul className="list-none flex flex-col gap-2">
                {[
                  "Auto-detect all dropped & missed calls",
                  "Immediate outbound callback attempt",
                  "Custom greeting & qualification",
                  "Appointment booking on callback",
                  "Full call logging & transcripts",
                  "Escalation rules for VIP callers",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-text-2"><Check />{f}</li>
                ))}
              </ul>
              <div className="flex gap-1.5 flex-wrap mt-5 pt-5 border-t border-white/[0.06]">
                {["Any Industry", "High Call Volume", "After Hours"].map((tag) => (
                  <span key={tag} className="text-[10px] font-medium text-text-3 bg-white/[0.06] border border-white/10 px-2.5 py-0.5 rounded-[100px]">{tag}</span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ════════════ STACK PITCH ════════════ */}
      <section className="relative z-[2] py-[100px]" id="stack">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <GlassCard className="p-[clamp(32px,5vw,52px)] rv">
            <div className="max-w-[640px] mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase px-3.5 py-1.5 rounded-[100px] text-white font-medium bg-gradient-to-r from-brand-blue to-brand-purple mb-5">Best Value</span>
              <h2 className="text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-text mb-4">
                All three products.{" "}
                <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                  Total phone coverage.
                </span>
              </h2>
              <p className="text-[17px] text-text-2 leading-relaxed mb-8">
                When you stack all three agents, you get a complete phone system that answers every inbound call, qualifies every new lead instantly, and recovers every missed opportunity&nbsp;&mdash; 24/7, in four languages, without hiring a single person.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { num: "24/7", label: "Coverage" },
                  { num: "<1s", label: "Response Time" },
                  { num: "4", label: "Languages" },
                  { num: "99%+", label: "Uptime" },
                ].map((s) => (
                  <div key={s.label} className="p-5 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06]">
                    <div className="font-extrabold text-[28px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">{s.num}</div>
                    <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
                Book a Demo
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ════════════ ADDITIONAL SERVICES ════════════ */}
      <section className="relative z-[2] py-[120px]" id="services">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Additional Services</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Beyond the phones.<br />
              <span className="font-light text-text-2">Full-stack automation.</span>
            </h2>
            <p className="text-[17px] text-text-2">Standalone services or add-ons to your voice AI deployment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              {
                icon: <GearIcon />, color: "blue" as const,
                title: "CRM Automation",
                price: "From $1,000",
                features: [
                  "Pipeline & deal stage automation",
                  "Lead scoring & routing rules",
                  "Automated follow-up sequences",
                  "Reporting dashboards",
                  "Integration with your existing tools",
                ],
              },
              {
                icon: <CpuIcon />, color: "purple" as const,
                title: "AI Automations",
                price: "From $500",
                features: [
                  "Workflow design & implementation",
                  "Data enrichment pipelines",
                  "Document processing & extraction",
                  "Custom AI integrations",
                  "Monitoring & maintenance",
                ],
              },
              {
                icon: <CompassIcon />, color: "blue" as const,
                title: "Tech & AI Consulting",
                price: "From $100",
                features: [
                  "AI readiness assessment",
                  "Technology stack audit",
                  "Implementation roadmap",
                  "Vendor evaluation & selection",
                  "Ongoing advisory retainer",
                ],
              },
              {
                icon: <MicIcon />, color: "amber" as const,
                title: "AI Voice/Video Cloning",
                price: "$1,000",
                features: [
                  "Professional voice clone",
                  "Multi-language voice output",
                  "Video avatar generation",
                  "Brand-consistent media assets",
                  "Royalty-free commercial use",
                ],
              },
              {
                icon: <VideoIcon />, color: "green" as const,
                title: "AI Avatar Content Creator",
                price: "$500",
                features: [
                  "AI-generated video content",
                  "Social media format optimization",
                  "Script-to-video pipeline",
                  "Branded templates & overlays",
                  "Monthly content packages",
                ],
              },
              {
                icon: <CodeIcon />, color: "purple" as const,
                title: "Custom Builds",
                price: "Custom Quote",
                features: [
                  "Bespoke AI tool development",
                  "API integrations & middleware",
                  "Internal dashboard builds",
                  "Data pipeline architecture",
                  "Dedicated project management",
                ],
              },
            ].map((card, i) => (
              <GlassCard key={card.title} className={`p-8 rv d${(i % 3) + 1}`}>
                <GradientIcon color={card.color}>{card.icon}</GradientIcon>
                <h3 className="text-[18px] font-extrabold text-text mt-5 mb-1">{card.title}</h3>
                <div className="font-extrabold text-[20px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent mb-4">{card.price}</div>
                <ul className="list-none flex flex-col gap-2">
                  {card.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-[13px] text-text-2"><Check />{f}</li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ ADD-ONS ════════════ */}
      <section className="relative z-[2] py-[100px]" id="addons">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Included</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Built-in add-ons.<br />
              <span className="font-light text-text-2">No extra charge.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[
              { icon: <MessageIcon />, color: "blue" as const, title: "SMS Follow-Up", desc: "Automatic text messages after every call with confirmation details." },
              { icon: <FileTextIcon />, color: "purple" as const, title: "Call Transcripts", desc: "Full transcription and summary of every call, searchable and exportable." },
              { icon: <MoonIcon />, color: "green" as const, title: "After-Hours Coverage", desc: "Your AI agent never sleeps. Calls are handled 24/7/365." },
              { icon: <GlobeIcon />, color: "amber" as const, title: "Multilingual Support", desc: "English, Spanish, French, and Creole built into every deployment." },
            ].map((card, i) => (
              <GlassCard key={card.title} className={`p-7 rv d${i + 1}`}>
                <GradientIcon color={card.color}>{card.icon}</GradientIcon>
                <h4 className="text-[15px] font-extrabold text-text mt-4 mb-2">{card.title}</h4>
                <p className="text-sm text-text-3 leading-relaxed">{card.desc}</p>
                <span className="inline-block font-mono text-[10px] tracking-[0.08em] uppercase px-3 py-1 rounded-[100px] mt-4 bg-brand-green/10 text-brand-green">Included</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ TRANSPARENCY NOTE ════════════ */}
      <section className="relative z-[2] py-[100px]">
        <div className="max-w-[800px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <GlassCard className="p-[clamp(32px,5vw,48px)] rv">
            <div className="flex gap-5 items-start">
              <GradientIcon color="amber"><AlertIcon /></GradientIcon>
              <div>
                <h3 className="text-[20px] font-extrabold text-text mb-3">Full transparency on tool costs.</h3>
                <p className="text-[15px] text-text-2 leading-relaxed">
                  Every tool we deploy is set up under <strong className="text-text">your accounts</strong>. You own the API keys, the subscriptions, and the data. We never mark up third-party costs.
                  Our fee covers the build, deployment, training, and ongoing management&nbsp;&mdash; the tools themselves are at-cost, paid directly by you.
                  No hidden fees. No vendor lock-in. If we part ways, everything stays yours.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative z-[2] py-[120px]" id="cta">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[600px] mx-auto rv">
            <h2 className="text-[clamp(30px,4vw,46px)] mb-4">
              Book Your{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                Free Demo
              </span>
            </h2>
            <p className="text-[17px] text-text-2 mb-8">
              See exactly how DeskWolf would work for your business. No pressure, no commitment&nbsp;&mdash; just a live walkthrough tailored to your setup.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white text-[#0F172A] shadow-[0_4px_20px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]">
                Book a Demo
              </a>
              <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
                Schedule a Call
              </a>
            </div>
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
