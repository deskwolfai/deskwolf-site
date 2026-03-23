import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "AI Voice Operations Glossary | DeskWolf LLC",
  description:
    "Plain-language definitions for every term in AI voice operations. From automated callbacks to warm transfers, learn what it all means.",
};

/* ── SVG Icon ── */
const BookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

/* ── Glossary data ── */
const terms: { term: string; definition: string }[] = [
  {
    term: "AI Voice Agent",
    definition:
      "Software that answers phone calls using artificial intelligence and natural language processing. Unlike robotic IVR systems, modern AI voice agents understand context, respond conversationally, and can handle complex interactions like booking appointments or qualifying leads.",
  },
  {
    term: "Automated Callback",
    definition:
      "A system that automatically calls back anyone who called your business but didn't connect with a live person or AI agent. Automated callbacks ensure no lead is lost to a missed ring or dropped call, typically triggering within seconds of the missed event.",
  },
  {
    term: "Call Flow",
    definition:
      "The designed path a phone call takes from the moment it's answered to the moment it ends. A call flow defines greetings, menu options, qualification questions, routing rules, and escalation paths. Well-designed call flows feel natural to the caller while collecting the information your business needs.",
  },
  {
    term: "Call Routing",
    definition:
      "The process of directing incoming calls to the right person, department, or system based on predefined rules. Routing can be based on caller intent, time of day, language preference, or urgency level. AI-powered routing uses real-time conversation analysis rather than rigid menu trees.",
  },
  {
    term: "Call Transcript",
    definition:
      "A written record of everything said during a phone call, generated automatically by speech-to-text technology. Call transcripts are searchable, exportable, and used for quality assurance, training, and dispute resolution. Most AI systems generate both full transcripts and summarized versions.",
  },
  {
    term: "CRM Integration",
    definition:
      "The connection between your AI phone system and your Customer Relationship Management software (like GoHighLevel, HubSpot, or Salesforce). When integrated, call data, contact information, and appointment bookings flow directly into your CRM without manual data entry.",
  },
  {
    term: "Discovery Call",
    definition:
      "An initial consultation where a service provider learns about your business, call volume, pain points, and goals before recommending or building a solution. At DeskWolf, discovery calls map your existing call flow and identify where AI can have the biggest impact.",
  },
  {
    term: "FAQ Training",
    definition:
      "The process of teaching an AI voice agent your business-specific frequently asked questions and their correct answers. This includes pricing, hours, services, policies, and common objections. The more thoroughly an agent is FAQ-trained, the more calls it can handle without human intervention.",
  },
  {
    term: "Inbound Call Handling",
    definition:
      "The process of answering and managing phone calls that come into your business. Inbound handling covers everything from the initial greeting to call resolution — answering questions, booking appointments, routing to staff, and sending follow-up communications.",
  },
  {
    term: "IVR (Interactive Voice Response)",
    definition:
      "A legacy phone system that uses pre-recorded menus and keypad inputs to route callers. 'Press 1 for sales, press 2 for support.' IVR systems are rigid, frustrating for callers, and being rapidly replaced by conversational AI that understands natural speech.",
  },
  {
    term: "Lead Qualification",
    definition:
      "The process of determining whether a caller is a good fit for your services before passing them to your sales team. AI agents qualify leads by asking scripted questions about budget, timeline, location, and needs — then scoring and routing them based on the answers.",
  },
  {
    term: "Missed Call Recovery",
    definition:
      "A system designed to capture and follow up on every call your business fails to answer. This typically includes automatic callbacks, text messages with booking links, and CRM logging. Missed call recovery prevents the 62% of callers who won't leave a voicemail from becoming lost revenue.",
  },
  {
    term: "Natural Language Processing (NLP)",
    definition:
      "The AI technology that enables computers to understand, interpret, and respond to human speech. NLP is what allows an AI voice agent to understand 'I need to reschedule my Thursday appointment' without requiring the caller to navigate a menu or use specific keywords.",
  },
  {
    term: "Outbound Dialer",
    definition:
      "An AI system that makes phone calls on your behalf. Outbound dialers are used for lead follow-up, appointment confirmations, post-service check-ins, and proactive outreach. Unlike robocalls, AI outbound dialers have natural conversations tailored to each recipient.",
  },
  {
    term: "Post-Call Summary",
    definition:
      "An automated report generated after each phone call that summarizes the key points: who called, what they needed, what actions were taken, and what follow-up is required. Post-call summaries are sent to your team and logged in your CRM so nothing falls through the cracks.",
  },
  {
    term: "Response Time",
    definition:
      "The time between when a customer initiates contact and when they receive a response. For phone calls, this is the time between the first ring and someone (or something) picking up. AI voice agents achieve sub-second response times, compared to industry averages of 30+ seconds for human-staffed lines.",
  },
  {
    term: "Speed-to-Lead",
    definition:
      "The measure of how quickly your business responds to a new lead or inquiry. Research shows that responding within 60 seconds makes you 391% more likely to convert compared to waiting just 5 minutes. AI systems achieve speed-to-lead measured in milliseconds, not minutes.",
  },
  {
    term: "Text Follow-Up",
    definition:
      "An automated SMS message sent to a caller after their phone interaction. Text follow-ups typically include appointment confirmations, booking links, business information, or thank-you messages. They serve as a written record and a conversion tool for callers who didn't book during the call.",
  },
  {
    term: "Voice Clone",
    definition:
      "A synthetic reproduction of a specific person's voice created using AI. Voice cloning captures the tone, cadence, and speech patterns of a real person, allowing AI agents to speak in a voice that represents your brand. Ethical voice cloning requires consent from the person being cloned.",
  },
  {
    term: "Warm Transfer",
    definition:
      "A call handoff where the AI agent stays on the line, introduces the caller to the human team member, provides context about the conversation, and only disconnects after confirming the handoff is complete. Warm transfers prevent callers from having to repeat themselves and ensure a smooth transition.",
  },
  {
    term: "Workflow Automation",
    definition:
      "The use of software to automatically execute a series of business tasks triggered by specific events. In voice AI, a single phone call can trigger a workflow that logs the contact, books an appointment, sends a confirmation text, updates a CRM pipeline, and notifies your team — all without human involvement.",
  },
];

/* ── Group terms by first letter ── */
const grouped = terms.reduce<Record<string, typeof terms>>((acc, t) => {
  const letter = t.term[0].toUpperCase();
  if (!acc[letter]) acc[letter] = [];
  acc[letter].push(t);
  return acc;
}, {});
const sortedLetters = Object.keys(grouped).sort();

export default function GlossaryPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] pt-[160px] pb-[80px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">Reference</span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-[18px] max-w-[800px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            AI Voice Operations{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              Glossary
            </span>
          </h1>

          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[580px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Plain-language definitions for every term you&rsquo;ll encounter in AI voice operations. No jargon, no fluff. Just clear explanations.
          </p>
        </div>
      </section>

      {/* ════════════ LETTER NAV ════════════ */}
      <section className="relative z-[2] pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="flex flex-wrap gap-2 justify-center rv">
            {sortedLetters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center font-mono font-extrabold text-[14px] text-text-2 no-underline transition-all duration-300 hover:bg-brand-purple/20 hover:border-brand-purple/30 hover:text-text"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ GLOSSARY ════════════ */}
      <section className="relative z-[2] py-[80px]" id="glossary">
        <div className="max-w-[900px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          {sortedLetters.map((letter, li) => (
            <div key={letter} id={`letter-${letter}`} className={`mb-12 rv d${(li % 3) + 1}`}>
              {/* Letter header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center shrink-0">
                  <span className="font-mono font-extrabold text-[20px] text-white">{letter}</span>
                </div>
                <div className="flex-1 h-px bg-white/[0.08]" />
              </div>

              {/* Terms */}
              <div className="flex flex-col gap-4">
                {grouped[letter].map((t) => (
                  <GlassCard key={t.term} className="p-6 transition-all duration-300 hover:border-brand-purple/20 hover:bg-white/[0.06]">
                    <h3 className="text-[17px] font-extrabold text-text mb-2">{t.term}</h3>
                    <p className="text-[14px] text-text-3 leading-relaxed">{t.definition}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative z-[2] py-[100px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <GlassCard className="p-[clamp(32px,5vw,48px)] rv">
            <div className="max-w-[560px] mx-auto text-center">
              <GradientIcon color="blue"><BookIcon /></GradientIcon>
              <h2 className="text-[clamp(24px,3vw,34px)] font-extrabold text-text mt-6 mb-3">
                Still have questions?
              </h2>
              <p className="text-[16px] text-text-2 leading-relaxed mb-7">
                We&rsquo;re happy to walk you through any of these concepts and show you how they apply to your specific business.
              </p>
              <div className="flex gap-3 flex-wrap justify-center">
                <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
                  Book a Free Demo
                </a>
                <a href="/contact" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
                  Contact Us
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
