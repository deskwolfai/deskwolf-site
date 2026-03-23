import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Outbound Lead Qualifier — DeskWolf LLC",
  description:
    "AI-powered speed-to-lead. Every form submission gets an instant callback that qualifies, books, and logs — automatically.",
  openGraph: {
    title: "Outbound Lead Qualifier — DeskWolf LLC",
    description:
      "AI-powered speed-to-lead. Every form submission gets an instant callback that qualifies, books, and logs.",
    url: "https://deskwolf.ai/lead-qualifier",
    siteName: "DeskWolf",
    type: "website",
  },
};

/* ── SVG Icons (inline for zero deps) ── */
const BoltIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);
const FormIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="9" x2="15" y2="9" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="12" y2="17" />
  </svg>
);
const TableIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const ClipboardIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
  </svg>
);
const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const CRMIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);
const ChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);
const TargetIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);
const UserPlusIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" />
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

/* ── Trigger sources ── */
const triggerSources = [
  { icon: <FormIcon />, color: "amber" as const, title: "Form Submissions", desc: "Website contact forms, landing pages, Facebook Lead Ads, Google Ads forms — any form that captures a lead." },
  { icon: <TableIcon />, color: "green" as const, title: "Spreadsheet Rows", desc: "Add a new row to Google Sheets or upload a CSV. The agent calls every new entry automatically." },
  { icon: <UserPlusIcon />, color: "blue" as const, title: "Manual Entry", desc: "Paste a phone number into the dashboard or push a contact from your CRM. The agent calls immediately." },
  { icon: <CRMIcon />, color: "purple" as const, title: "CRM Triggers", desc: "New contact created, deal stage changed, or tag applied — any CRM event can trigger an outbound call." },
];

/* ── Qualification flow steps ── */
const qualSteps = [
  { num: "01", title: "Lead Triggers Call", desc: "A form is submitted, a spreadsheet row is added, or a CRM event fires. The system detects the new lead instantly." },
  { num: "02", title: "Phone Rings in Seconds", desc: "The AI agent calls the lead within seconds of the trigger. Not minutes. Not hours. Seconds. While they're still on your website." },
  { num: "03", title: "Personalized Greeting", desc: "The agent greets the lead by name, references what they submitted, and establishes context immediately." },
  { num: "04", title: "Qualification Script", desc: "Custom questions designed for your business — budget, timeline, scope, decision-maker status. Every answer is captured and scored." },
  { num: "05", title: "Objection Handling", desc: "The agent handles common pushback naturally. 'I'm just browsing,' 'Send me an email,' 'What's the cost?' — all scripted and tested." },
  { num: "06", title: "Book or Route", desc: "Qualified leads get booked directly into your calendar. Hot leads get live-transferred to your sales team. Unqualified leads get tagged for nurture." },
];

/* ── FAQ data ── */
const faqs = [
  { q: "How fast does the callback actually happen?", a: "Typically under 30 seconds from the moment the form is submitted. The speed depends on the trigger source — direct form integrations are fastest. CRM and spreadsheet triggers add a few seconds for processing." },
  { q: "Can I customize the qualification questions?", a: "Completely. We build the script with you during onboarding. You define what qualifies a lead, what disqualifies one, and what questions matter most to your sales process." },
  { q: "What if the lead doesn't answer?", a: "The agent retries on a configurable schedule — for example, 3 attempts over 24 hours. You define the cadence, number of retries, and what happens if they never pick up (text, email, or nurture sequence)." },
  { q: "Does it work with Facebook/Google Lead Ads?", a: "Yes. We connect directly to Facebook Lead Ads and Google Ads lead form extensions via API. When a lead form is submitted on any platform, the call fires instantly." },
  { q: "Can the agent transfer to a live person?", a: "Absolutely. You define hot-lead criteria and the agent will warm-transfer the call in real-time to your sales rep — with full context from the qualification conversation." },
  { q: "How do I see the results?", a: "Every call is logged with a full transcript, qualification score, outcome (booked, transferred, nurture, disqualified), and recording. Results sync to your CRM and are visible in a reporting dashboard." },
  { q: "What CRMs do you integrate with?", a: "GoHighLevel, HubSpot, Salesforce, Pipedrive, and any CRM that supports webhooks or Zapier. We also integrate directly with Google Sheets for simpler setups." },
];

export default function LeadQualifierPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] min-h-screen flex items-center pt-[140px] pb-[100px]">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] w-full">
          <div className="max-w-[720px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-2 h-2 bg-brand-amber rounded-full animate-pulse-dot" />
              <span className="text-sm text-text-2">Outbound Voice AI</span>
            </div>

            <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-text mb-[18px] opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              The Phone Rings Before They Close the Tab.{" "}
              <span className="bg-gradient-to-r from-brand-amber to-[#EF4444] bg-clip-text text-transparent">
                Every Time.
              </span>
            </h1>

            <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[580px] mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
              Your Outbound Lead Qualifier calls every new lead within seconds of submission, qualifies them with your custom script, handles objections, and books appointments — automatically.
            </p>

            <div className="flex gap-3 flex-wrap justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-amber to-[#EF4444] text-white shadow-[0_4px_20px_rgba(245,158,11,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(245,158,11,0.35)]">
                Book a Live Demo
              </a>
              <a href="#speed-to-lead" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
                See the Speed Advantage
              </a>
            </div>

            {/* Speed-to-lead stat */}
            <div className="mt-14 opacity-0 animate-fade-up" style={{ animationDelay: "0.45s" }}>
              <GlassCard className="p-8 text-center">
                <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-text-3 mb-3">Industry data shows</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <div className="font-extrabold text-[32px] bg-gradient-to-r from-brand-amber to-[#EF4444] bg-clip-text text-transparent">78%</div>
                    <div className="text-[13px] text-text-2 mt-1">of customers buy from the first responder</div>
                  </div>
                  <div>
                    <div className="font-extrabold text-[32px] bg-gradient-to-r from-brand-amber to-[#EF4444] bg-clip-text text-transparent">5 min</div>
                    <div className="text-[13px] text-text-2 mt-1">after 5 minutes, contact rates drop 10x</div>
                  </div>
                  <div>
                    <div className="font-extrabold text-[32px] bg-gradient-to-r from-brand-amber to-[#EF4444] bg-clip-text text-transparent">&lt;30s</div>
                    <div className="text-[13px] text-text-2 mt-1">DeskWolf average callback time</div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ TRIGGER SOURCES ════════════ */}
      <section className="relative z-[2] py-[120px]" id="speed-to-lead">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-amber">Trigger Sources</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Leads come from everywhere.<br />
              <span className="font-light text-text-2">We call them all.</span>
            </h2>
            <p className="text-[17px] text-text-2">Any source that creates a lead can trigger an instant outbound call.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {triggerSources.map((card, i) => (
              <GlassCard key={card.title} className={`p-8 rv d${(i % 3) + 1}`}>
                <div className="flex items-start gap-5">
                  <GradientIcon color={card.color}>{card.icon}</GradientIcon>
                  <div>
                    <h3 className="text-[18px] font-extrabold text-text mb-2">{card.title}</h3>
                    <p className="text-sm text-text-3 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ QUALIFICATION FLOW ════════════ */}
      <section className="relative z-[2] py-[120px]" id="how-it-works">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-amber">How It Works</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              From submission to<br />
              <span className="font-light text-text-2">booked appointment.</span>
            </h2>
            <p className="text-[17px] text-text-2">The full journey, automated end to end.</p>
          </div>

          <div className="flex flex-col gap-0 mt-16 max-w-[700px] mx-auto">
            {qualSteps.map((step, i) => (
              <div key={step.num} className={`rv d${(i % 3) + 1} flex gap-6 items-start relative`}>
                {i < qualSteps.length - 1 && (
                  <div className="absolute left-[23px] top-[48px] w-[2px] h-[calc(100%)] bg-gradient-to-b from-brand-amber/30 to-[#EF4444]/10" />
                )}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-amber to-[#EF4444] flex items-center justify-center text-white font-extrabold text-[13px] shrink-0 relative z-[1]">
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

      {/* ════════════ SCRIPT & OBJECTION HANDLING ════════════ */}
      <section className="relative z-[2] py-[120px]" id="qualification">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="rv">
              <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-amber">Qualification</span>
              <h2 className="text-[clamp(30px,4vw,46px)] mb-4">
                Your script.{" "}
                <span className="bg-gradient-to-r from-brand-amber to-[#EF4444] bg-clip-text text-transparent">
                  Your rules.
                </span>
              </h2>
              <p className="text-[17px] text-text-2 leading-relaxed mb-6">
                Every qualification call follows a script built around your business. You decide the questions, the scoring criteria, and what counts as a qualified lead.
              </p>
              <ul className="list-none flex flex-col gap-3">
                {[
                  "Custom qualification questions tailored to your sales process",
                  "Lead scoring based on answers — hot, warm, or nurture",
                  "Budget, authority, need, and timeline (BANT) framework built in",
                  "Multi-path conversation flows based on caller responses",
                  "Disqualification criteria to protect your team's time",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-text-2">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rv d2">
              <GlassCard className="p-8">
                <GradientIcon color="amber"><ShieldIcon /></GradientIcon>
                <h3 className="text-[20px] font-extrabold text-text mt-5 mb-4">Built-In Objection Handling</h3>
                <p className="text-[15px] text-text-2 leading-relaxed mb-5">
                  The agent doesn&apos;t fumble when a lead pushes back. Every common objection has a tested, natural response.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { objection: "\"I'm just browsing.\"", response: "Acknowledges, offers value, keeps the door open for booking." },
                    { objection: "\"Can you just send me an email?\"", response: "Confirms email, sends info, and offers a quick 2-minute overview now." },
                    { objection: "\"What does it cost?\"", response: "Provides range based on their answers, positions value before price." },
                    { objection: "\"I need to talk to my partner.\"", response: "Offers to schedule a joint call, captures partner contact." },
                    { objection: "\"I'm not ready yet.\"", response: "Tags for nurture, schedules a follow-up at their preferred time." },
                  ].map((item) => (
                    <div key={item.objection} className="p-4 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06]">
                      <div className="font-semibold text-[14px] text-brand-amber mb-1">{item.objection}</div>
                      <div className="text-[13px] text-text-3">{item.response}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ CRM SYNC & LOGGING ════════════ */}
      <section className="relative z-[2] py-[120px]" id="crm">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-purple">CRM Integration</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Every call logged.<br />
              <span className="font-light text-text-2">Every detail captured.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              { icon: <CRMIcon />, color: "blue" as const, title: "Contact Sync", desc: "New leads are created automatically. Existing contacts are updated with call notes, qualification scores, and outcomes." },
              { icon: <ClipboardIcon />, color: "green" as const, title: "Full Call Logging", desc: "Transcripts, recordings, duration, qualification answers, and disposition — all logged to the contact record." },
              { icon: <CalendarIcon />, color: "purple" as const, title: "Auto-Booking", desc: "Qualified leads are booked into your calendar with context. Your sales team sees who they're meeting and why." },
              { icon: <TargetIcon />, color: "amber" as const, title: "Lead Scoring", desc: "Every lead gets a qualification score based on their answers. Hot leads are flagged for immediate follow-up." },
              { icon: <ChartIcon />, color: "cyan" as const, title: "Pipeline Updates", desc: "Deals are moved through pipeline stages automatically based on call outcomes and qualification results." },
              { icon: <PhoneIcon />, color: "green" as const, title: "Call Recordings", desc: "Full audio recordings stored and accessible from the contact record. Review any call, anytime." },
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

      {/* ════════════ ROI ════════════ */}
      <section className="relative z-[2] py-[120px]" id="roi">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="text-center max-w-[600px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-green">ROI</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Speed-to-lead turns into{" "}
              <span className="bg-gradient-to-r from-brand-green to-brand-cyan bg-clip-text text-transparent">
                revenue.
              </span>
            </h2>
            <p className="text-[17px] text-text-2">Here&apos;s what happens when you close the gap between submission and callback.</p>
          </div>

          <GlassCard className="p-[clamp(32px,5vw,52px)] mt-12 rv d1">
            <div className="max-w-[800px] mx-auto">
              {/* Before / After comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06]">
                  <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mb-4">Without Lead Qualifier</div>
                  <ul className="list-none flex flex-col gap-2.5">
                    {[
                      { label: "Monthly form submissions", val: "80" },
                      { label: "Average close rate", val: "5%" },
                      { label: "Average ticket value", val: "$3,000" },
                      { label: "Monthly closed revenue", val: "$12,000" },
                    ].map((row) => (
                      <li key={row.label} className="flex items-center justify-between text-[14px]">
                        <span className="text-text-3">{row.label}</span>
                        <span className="font-semibold text-text">{row.val}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-white/[0.04] rounded-[var(--radius-sm)] border border-brand-green/20">
                  <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-brand-green mb-4">With Lead Qualifier</div>
                  <ul className="list-none flex flex-col gap-2.5">
                    {[
                      { label: "Monthly form submissions", val: "80" },
                      { label: "Close rate (speed-to-lead lift)", val: "10–15%" },
                      { label: "Average ticket value", val: "$3,000" },
                      { label: "Monthly closed revenue", val: "$24,000–$36,000" },
                    ].map((row) => (
                      <li key={row.label} className="flex items-center justify-between text-[14px]">
                        <span className="text-text-3">{row.label}</span>
                        <span className="font-semibold bg-gradient-to-r from-brand-green to-brand-cyan bg-clip-text text-transparent">{row.val}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Result */}
              <div className="text-center p-8 bg-white/[0.06] rounded-[var(--radius-std)] border border-brand-amber/20">
                <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-text-3 mb-2">Additional Monthly Revenue</div>
                <div className="font-extrabold text-[clamp(40px,6vw,64px)] bg-gradient-to-r from-brand-amber to-[#EF4444] bg-clip-text text-transparent leading-tight">
                  $12,000–$24,000
                </div>
                <p className="text-[15px] text-text-2 mt-3 max-w-[500px] mx-auto">
                  Doubling your close rate from 5% to 10–15% with instant callbacks. At $1,500/month, the Lead Qualifier pays for itself in the first week.
                </p>
              </div>

              {/* Unit economics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {[
                  { num: "$1,500", label: "Monthly Cost" },
                  { num: "8–16x", label: "ROI" },
                  { num: "<7 days", label: "Payback" },
                  { num: "$144K+", label: "Annual Gain" },
                ].map((s) => (
                  <div key={s.label} className="p-5 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06] text-center">
                    <div className="font-extrabold text-[24px] bg-gradient-to-r from-brand-amber to-[#EF4444] bg-clip-text text-transparent">{s.num}</div>
                    <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">{s.label}</div>
                  </div>
                ))}
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
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-amber">FAQ</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Questions about the<br />
              <span className="font-light text-text-2">Lead Qualifier.</span>
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
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <GlassCard className="p-[clamp(32px,5vw,52px)] rv">
            <div className="max-w-[600px] mx-auto text-center">
              <GradientIcon color="amber" className="mx-auto"><BoltIcon /></GradientIcon>
              <h2 className="text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-text mt-6 mb-4">
                Stop losing leads to{" "}
                <span className="bg-gradient-to-r from-brand-amber to-[#EF4444] bg-clip-text text-transparent">
                  slow follow-up.
                </span>
              </h2>
              <p className="text-[17px] text-text-2 leading-relaxed mb-8">
                Book a demo and see how fast your leads get called back. We&apos;ll walk you through the full qualification flow, live.
              </p>
              <div className="flex gap-3 flex-wrap justify-center">
                <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-amber to-[#EF4444] text-white shadow-[0_4px_20px_rgba(245,158,11,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(245,158,11,0.35)]">
                  Book a Live Demo
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
