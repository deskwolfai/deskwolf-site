import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "AI Receptionist | DeskWolf LLC",
  description:
    "24/7 AI-powered call handling that answers, books, routes, and follows up in four languages. Never miss another call.",
  openGraph: {
    title: "AI Receptionist | DeskWolf LLC",
    description:
      "24/7 AI-powered call handling that answers, books, routes, and follows up in four languages.",
    url: "https://deskwolf.ai/ai-receptionist",
    siteName: "DeskWolf",
    type: "website",
  },
};

/* ── SVG Icons (inline for zero deps) ── */
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const GlobeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const MessageIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const ShuffleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /><line x1="4" y1="4" x2="9" y2="9" />
  </svg>
);
const FileTextIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
  </svg>
);
const CRMIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);
const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const DollarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const ChevronIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/* ── Checkmark helper ── */
const Check = () => (
  <span className="w-5 h-5 bg-gradient-to-br from-brand-green to-brand-cyan rounded-full flex items-center justify-center shrink-0 text-white text-[11px] font-bold">&#10003;</span>
);

/* ── Call flow steps ── */
const callFlowSteps = [
  { num: "01", title: "Call Comes In", desc: "A customer calls your business number. The AI agent picks up in under one second. No rings, no hold music." },
  { num: "02", title: "Greeting & Intent", desc: "The agent greets the caller by your business name and identifies the reason for their call using natural conversation." },
  { num: "03", title: "Answer or Route", desc: "If it is an FAQ, the agent answers from your trained knowledge base. If it needs a human, the call is warm-transferred instantly." },
  { num: "04", title: "Book or Capture", desc: "The agent books appointments directly into your calendar, captures contact details, and logs everything to your CRM." },
  { num: "05", title: "Follow-Up", desc: "Immediately after the call, a confirmation text and email are sent to the caller with booking details or next steps." },
];

/* ── FAQ data ── */
const faqs = [
  { q: "How does the AI know about my business?", a: "During onboarding, we train the agent on your FAQs, services, pricing, hours, policies, and anything else your receptionist would need to know. We can update the knowledge base anytime." },
  { q: "Will callers know it is AI?", a: "The voice sounds natural and conversational, not robotic. Most callers won't realize they're speaking with AI. That said, we never hide it. If asked directly, the agent will say it's an AI assistant." },
  { q: "Can it transfer to a real person?", a: "Absolutely. You define routing rules by department, caller type, or time of day. The agent warm-transfers live with context so the caller never repeats themselves." },
  { q: "Which calendars does it integrate with?", a: "Google Calendar, Outlook/Microsoft 365, Calendly, GoHighLevel, and most calendar systems that support API or iCal connections." },
  { q: "What if I already have a receptionist?", a: "The AI handles overflow, after-hours, and high-volume periods. Your human receptionist handles the calls they want to take. The two work together seamlessly." },
  { q: "How fast is the setup?", a: "Most businesses are live within 2–3 weeks. That includes discovery, knowledge base training, integration setup, and testing with your team." },
  { q: "Can it handle multiple callers at once?", a: "Yes. Unlike a human receptionist, the AI handles unlimited concurrent calls. No hold times, no missed rings, no busy signals." },
];

/* ── Integrations ── */
const integrations = [
  "GoHighLevel", "HubSpot", "Salesforce", "Google Calendar", "Outlook 365",
  "Calendly", "Google Sheets", "Slack", "Zapier", "n8n",
  "Twilio", "Custom API",
];

export default function AIReceptionistPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] min-h-screen flex items-center pt-[140px] pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] w-full">
          <div className="max-w-[720px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse-dot" />
              <span className="text-sm text-text-2">Inbound Voice AI</span>
            </div>

            <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-text mb-[18px] opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              Every Call Answered. Every Appointment Booked.{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                24/7.
              </span>
            </h1>

            <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[580px] mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
              Your AI Receptionist picks up in under one second, handles FAQs, books appointments, routes calls, and sends follow-ups. Four languages: English, Spanish, French, and Creole. No hold music. No missed revenue.
            </p>

            <div className="flex gap-3 flex-wrap justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
                Hear It Answer Your Phone
              </a>
              <a href="#how-it-works" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
                See How It Works
              </a>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14 opacity-0 animate-fade-up" style={{ animationDelay: "0.45s" }}>
              {[
                { num: "<1s", label: "Pickup Time" },
                { num: "24/7", label: "Availability" },
                { num: "4", label: "Languages" },
                { num: "99.8%", label: "Uptime" },
              ].map((s) => (
                <div key={s.label} className="p-4 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06]">
                  <div className="font-extrabold text-[24px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">{s.num}</div>
                  <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ CALL FLOW DIAGRAM ════════════ */}
      <section className="relative z-[2] py-[120px]" id="how-it-works">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">How It Works</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Five steps.<br />
              <span className="font-light text-text-2">Zero missed calls.</span>
            </h2>
            <p className="text-[17px] text-text-2">From ring to follow-up, your AI Receptionist handles the entire call flow automatically.</p>
          </div>

          <div className="flex flex-col gap-0 mt-16 max-w-[700px] mx-auto">
            {callFlowSteps.map((step, i) => (
              <div key={step.num} className={`rv d${(i % 3) + 1} flex gap-6 items-start relative`}>
                {/* Vertical connector line */}
                {i < callFlowSteps.length - 1 && (
                  <div className="absolute left-[23px] top-[48px] w-[2px] h-[calc(100%)] bg-gradient-to-b from-brand-blue/30 to-brand-purple/10" />
                )}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white font-extrabold text-[13px] shrink-0 relative z-[1]">
                  {step.num}
                </div>
                <div className="pb-10">
                  <h3 className="text-[18px] font-extrabold text-text mb-1">{step.title}</h3>
                  <p className="text-[15px] text-text-2 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ FEATURES GRID ════════════ */}
      <section className="relative z-[2] py-[120px]" id="features">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Features</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Everything a receptionist does.<br />
              <span className="font-light text-text-2">Without the overhead.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              { icon: <PhoneIcon />, color: "blue" as const, title: "Instant Pickup", desc: "Answers every call in under one second. No rings, no hold music, no voicemail black hole." },
              { icon: <CalendarIcon />, color: "purple" as const, title: "Live Booking", desc: "Books, reschedules, and cancels appointments directly in your calendar. Real-time availability checks." },
              { icon: <ShuffleIcon />, color: "amber" as const, title: "Smart Routing", desc: "Routes calls to the right person or department based on your rules: by intent, time of day, or caller type." },
              { icon: <MessageIcon />, color: "green" as const, title: "SMS & Email Follow-Up", desc: "Sends confirmation texts and emails immediately after every call with booking details and next steps." },
              { icon: <FileTextIcon />, color: "cyan" as const, title: "Full Transcripts", desc: "Every call is transcribed, summarized, and logged. Searchable history with call recordings." },
              { icon: <ShieldIcon />, color: "purple" as const, title: "HIPAA-Ready Handling", desc: "Sensitive call handling protocols for healthcare, legal, and financial services with configurable guardrails." },
            ].map((card, i) => (
              <GlassCard key={card.title} className={`p-8 rv d${(i % 3) + 1}`}>
                <GradientIcon color={card.color}>{card.icon}</GradientIcon>
                <h3 className="text-[18px] font-extrabold text-text mt-5 mb-2">{card.title}</h3>
                <p className="text-sm text-text-3 leading-relaxed">{card.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ MULTILINGUAL ════════════ */}
      <section className="relative z-[2] py-[120px]" id="languages">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rv">
              <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-cyan">Multilingual</span>
              <h2 className="text-[clamp(30px,4vw,46px)] mb-4">
                Four languages.{" "}
                <span className="bg-gradient-to-r from-brand-cyan to-brand-green bg-clip-text text-transparent">
                  One agent.
                </span>
              </h2>
              <p className="text-[17px] text-text-2 leading-relaxed mb-6">
                Your AI Receptionist detects the caller&apos;s language automatically and responds fluently. No language menus, no awkward transfers, no &ldquo;press 2 for Spanish.&rdquo;
              </p>
              <ul className="list-none flex flex-col gap-3">
                {[
                  { lang: "English", detail: "Full conversational fluency with natural American accent" },
                  { lang: "Spanish", detail: "Native-level Latinx and Castilian dialect support" },
                  { lang: "French", detail: "Metropolitan and Canadian French coverage" },
                  { lang: "Haitian Creole", detail: "Full Creole support for South Florida and Northeast markets" },
                ].map((item) => (
                  <li key={item.lang} className="flex items-start gap-3 text-[15px] text-text-2">
                    <Check />
                    <div>
                      <span className="font-semibold text-text">{item.lang}</span>
                      <span className="text-text-3">: {item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rv d2">
              <GlassCard className="p-10 text-center">
                <GradientIcon color="cyan" className="mx-auto"><GlobeIcon /></GradientIcon>
                <h3 className="text-[24px] font-extrabold text-text mt-6 mb-3">Automatic Language Detection</h3>
                <p className="text-[15px] text-text-2 leading-relaxed max-w-[400px] mx-auto mb-6">
                  The agent identifies the caller&apos;s language within the first few words and switches seamlessly. No prompts, no menus, no delays.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["English", "Espa\u00f1ol", "Fran\u00e7ais", "Krey\u00f2l"].map((lang) => (
                    <div key={lang} className="p-3 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06]">
                      <div className="font-semibold text-[15px] text-text">{lang}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ INTEGRATIONS ════════════ */}
      <section className="relative z-[2] py-[120px]" id="integrations">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-purple">Integrations</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Plugs into your<br />
              <span className="font-light text-text-2">existing stack.</span>
            </h2>
            <p className="text-[17px] text-text-2">Your AI Receptionist connects to the CRM, calendar, and tools you already use.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-12 max-w-[700px] mx-auto rv d1">
            {integrations.map((name) => (
              <span key={name} className="text-[14px] font-medium text-text-2 bg-white/[0.06] border border-white/10 px-5 py-2.5 rounded-[100px] backdrop-blur-[8px] transition-all duration-300 hover:border-brand-purple/30 hover:bg-white/[0.1]">
                {name}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              { icon: <CRMIcon />, color: "blue" as const, title: "CRM Sync", desc: "Every call automatically creates or updates contacts, logs call notes, and triggers follow-up sequences in your CRM." },
              { icon: <CalendarIcon />, color: "green" as const, title: "Calendar Booking", desc: "Real-time availability checks and instant booking. Handles rescheduling and cancellations without human intervention." },
              { icon: <MessageIcon />, color: "purple" as const, title: "Notifications", desc: "Instant alerts via email, SMS, Slack, or Discord when calls need attention. Customizable escalation rules." },
            ].map((card, i) => (
              <GlassCard key={card.title} className={`p-8 rv d${i + 1}`}>
                <GradientIcon color={card.color}>{card.icon}</GradientIcon>
                <h3 className="text-[18px] font-extrabold text-text mt-5 mb-2">{card.title}</h3>
                <p className="text-sm text-text-3 leading-relaxed">{card.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ ROI ════════════ */}
      <section className="relative z-[2] py-[120px]" id="roi">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[600px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-green">ROI</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              The math behind{" "}
              <span className="bg-gradient-to-r from-brand-green to-brand-cyan bg-clip-text text-transparent">
                missed calls.
              </span>
            </h2>
            <p className="text-[17px] text-text-2">Most businesses don&apos;t realize how much revenue walks out the door every week.</p>
          </div>

          <GlassCard className="p-[clamp(32px,5vw,52px)] mt-12 rv d1">
            <div className="max-w-[800px] mx-auto">
              {/* The math breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-6 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06]">
                  <div className="font-extrabold text-[36px] bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">15</div>
                  <div className="text-[14px] text-text-2 mt-1">Missed calls per week</div>
                  <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">Industry Average</div>
                </div>
                <div className="text-center p-6 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06]">
                  <div className="font-extrabold text-[36px] bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">$200</div>
                  <div className="text-[14px] text-text-2 mt-1">Average value per call</div>
                  <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">Conservative Estimate</div>
                </div>
                <div className="text-center p-6 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06]">
                  <div className="font-extrabold text-[36px] bg-gradient-to-r from-brand-cyan to-brand-green bg-clip-text text-transparent">52</div>
                  <div className="text-[14px] text-text-2 mt-1">Weeks per year</div>
                  <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">No Days Off</div>
                </div>
              </div>

              {/* Result */}
              <div className="text-center p-8 bg-white/[0.06] rounded-[var(--radius-std)] border border-brand-blue/20">
                <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-text-3 mb-2">Annual Revenue Lost to Missed Calls</div>
                <div className="font-extrabold text-[clamp(40px,6vw,64px)] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent leading-tight">
                  $156,000
                </div>
                <p className="text-[15px] text-text-2 mt-3 max-w-[500px] mx-auto">
                  15 calls &times; $200 &times; 52 weeks = $156,000 in lost revenue every year. Your AI Receptionist costs $1,500/month. That&apos;s a <strong className="text-text">8.7x return</strong> on investment.
                </p>
              </div>

              {/* Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                <div className="p-6 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06] text-center">
                  <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mb-2">Full-Time Receptionist</div>
                  <div className="font-extrabold text-[28px] text-text">$3,200+/mo</div>
                  <p className="text-[13px] text-text-3 mt-1">Salary, benefits, PTO, sick days. Only works 40 hours/week.</p>
                </div>
                <div className="p-6 bg-white/[0.04] rounded-[var(--radius-sm)] border border-brand-green/20 text-center">
                  <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-brand-green mb-2">AI Receptionist</div>
                  <div className="font-extrabold text-[28px] bg-gradient-to-r from-brand-green to-brand-cyan bg-clip-text text-transparent">$1,500/mo</div>
                  <p className="text-[13px] text-text-3 mt-1">24/7/365. Unlimited concurrent calls. No sick days. No turnover.</p>
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="text-center mt-8 rv d2">
            <a href="/resources/roi-calculator" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-6 py-3 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
              Calculate Your ROI &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section className="relative z-[2] py-[120px]" id="faq">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">FAQ</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Questions about the<br />
              <span className="font-light text-text-2">AI Receptionist.</span>
            </h2>
          </div>
          <div className="max-w-[700px] mx-auto mt-12 flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className={`rv d${(i % 3) + 1}`}>
                <details className="group bg-white/[0.04] backdrop-blur-[16px] border border-white/[0.08] rounded-[var(--radius-std)] overflow-hidden transition-all duration-300 hover:border-brand-purple/20 hover:bg-white/[0.06]">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-[15px] font-semibold text-text [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="shrink-0 text-text-3 transition-transform duration-300 group-open:rotate-180">
                      <ChevronIcon />
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-[14px] text-text-2 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative z-[2] py-[120px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <GlassCard className="p-[clamp(32px,5vw,52px)] rv">
            <div className="max-w-[600px] mx-auto text-center">
              <GradientIcon color="blue" className="mx-auto"><PhoneIcon /></GradientIcon>
              <h2 className="text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-text mt-6 mb-4">
                Hear your AI Receptionist{" "}
                <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                  live.
                </span>
              </h2>
              <p className="text-[17px] text-text-2 leading-relaxed mb-8">
                Book a free demo and we&apos;ll set up a live call with an AI agent trained on your business. You&apos;ll hear exactly what your customers will hear.
              </p>
              <div className="flex gap-3 flex-wrap justify-center">
                <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
                  Hear It Answer Your Phone
                </a>
                <a href="/pricing" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
                  View Pricing
                </a>
              </div>
            </div>
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
