import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Careers at DeskWolf LLC",
  description:
    "Join a small, remote-first team building practical AI for local businesses. No corporate politics. Just smart people solving real problems.",
};

/* ── SVG Icons ── */
const RocketIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);
const BrainIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z" />
  </svg>
);
const DollarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const openPositions = [
  {
    title: "Account Manager",
    type: "Remote",
    color: "blue" as const,
    description:
      "Manage client relationships from onboarding through optimization. You'll be the primary point of contact for businesses using our AI systems, coordinating deployments, handling escalations, and making sure every client feels taken care of.",
    requirements: [
      "2+ years in a client-facing account management or customer success role",
      "Strong written and verbal communication skills",
      "Experience with CRM platforms (GoHighLevel, HubSpot, Salesforce, or similar)",
      "Ability to explain technical concepts to non-technical business owners",
      "Self-motivated. You don't need someone watching over your shoulder",
    ],
  },
  {
    title: "AI Systems Engineer",
    type: "Remote",
    color: "green" as const,
    description:
      "Build and maintain AI voice agent deployments for our clients. You'll work with voice AI platforms, telephony systems, and CRM integrations to create reliable, production-grade AI systems that handle real business calls.",
    requirements: [
      "Proficiency in Python and experience with REST API integrations",
      "Understanding of AI/ML systems, prompt engineering, or conversational AI",
      "Experience with cloud infrastructure and deployment workflows",
      "Ability to debug complex multi-system integrations",
      "Comfort working in a fast-moving, ship-daily environment",
    ],
  },
  {
    title: "Sales Development Representative",
    type: "Remote",
    color: "amber" as const,
    description:
      "Drive outbound prospecting and fill our demo pipeline. You'll research local businesses that are losing money to missed calls, craft compelling outreach, and schedule qualified demos for the team.",
    requirements: [
      "Previous sales or business development experience",
      "Self-starter who can manage their own pipeline and targets",
      "Comfortable selling AI and technology products to non-technical buyers",
      "Excellent phone and email communication skills",
      "Familiarity with outbound prospecting tools (Apollo, LinkedIn Sales Nav, etc.)",
    ],
  },
  {
    title: "Content Creator",
    type: "Remote",
    color: "purple" as const,
    description:
      "Write blog posts, case studies, social media content, and marketing materials that help business owners understand the value of AI without the hype. Clear, practical writing that builds trust.",
    requirements: [
      "Strong writing skills with a portfolio of published B2B content",
      "Understanding of content marketing strategy and SEO fundamentals",
      "Familiarity with AI, automation, or SaaS topics",
      "Ability to translate complex technical concepts into accessible language",
      "Experience with LinkedIn, blog, and email content formats",
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] min-h-[70vh] flex items-center pt-[140px] pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] rv">
            <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">We&rsquo;re Hiring</span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-[18px] max-w-[800px] mx-auto rv d1">
            Build the Future of{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              Business AI.
            </span>
          </h1>

          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[580px] mx-auto mb-8 rv d2">
            We&rsquo;re a small, remote-first team building practical AI for local businesses. No corporate politics. No unnecessary meetings. Just smart people solving real problems.
          </p>

          <a href="#positions" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white text-[#0F172A] shadow-[0_4px_20px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)] rv d3">
            View Open Positions
          </a>
        </div>
      </section>

      {/* ════════════ CULTURE ════════════ */}
      <section className="relative z-[2] py-[120px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Culture</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">How we work.</h2>
            <p className="text-[17px] text-text-2">We care about output, not optics. Results, not rituals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              {
                icon: <RocketIcon />,
                color: "blue" as const,
                title: "Ship fast, learn faster",
                desc: "We move quickly and iterate constantly. Perfection is the enemy of progress. Ship it, test it, improve it. Every deployment teaches us something new.",
              },
              {
                icon: <BrainIcon />,
                color: "purple" as const,
                title: "Understand before automating",
                desc: "We don't automate for the sake of automation. Every system we build starts with understanding the problem from the ground up. Shortcuts come after fundamentals.",
              },
              {
                icon: <DollarIcon />,
                color: "green" as const,
                title: "Treat client money like your own",
                desc: "We recommend what works, not what's expensive. No upselling, no unnecessary tools, no bloated deployments. Every dollar a client spends should generate real value.",
              },
            ].map((v, i) => (
              <GlassCard key={v.title} className={`p-8 rv d${i + 1}`}>
                <GradientIcon color={v.color}>{v.icon}</GradientIcon>
                <h4 className="text-[17px] font-extrabold text-text mb-2 mt-5">{v.title}</h4>
                <p className="text-sm text-text-3 leading-relaxed">{v.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PERKS ════════════ */}
      <section className="relative z-[2] py-[120px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Why DeskWolf</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">What you get.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[
              { title: "Fully Remote", desc: "Work from anywhere. We care about what you deliver, not where you sit." },
              { title: "Real Impact", desc: "Small team means your work directly shapes the product and the company." },
              { title: "AI-First Tooling", desc: "Use cutting-edge AI tools daily. We build with what we sell." },
              { title: "No Bureaucracy", desc: "Flat structure, direct communication, fast decisions. Zero red tape." },
            ].map((perk, i) => (
              <div key={perk.title} className={`p-6 bg-white/[0.04] backdrop-blur-[16px] border border-white/[0.08] rounded-[var(--radius-std)] rv d${i + 1}`}>
                <h4 className="text-[15px] font-bold text-text mb-2">{perk.title}</h4>
                <p className="text-sm text-text-3 leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ OPEN POSITIONS ════════════ */}
      <section className="relative z-[2] py-[120px]" id="positions">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Open Roles</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">Open Positions</h2>
            <p className="text-[17px] text-text-2">Every role is remote. Every role matters.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {openPositions.map((pos, i) => (
              <GlassCard key={pos.title} className={`p-8 flex flex-col rv d${i + 1}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[20px] font-extrabold text-text">{pos.title}</h3>
                  <span className="font-mono text-[11px] tracking-[0.06em] uppercase text-brand-green bg-brand-green/10 px-3 py-1 rounded-full border border-brand-green/20">
                    {pos.type}
                  </span>
                </div>
                <p className="text-sm text-text-2 leading-relaxed mb-5">{pos.description}</p>
                <div className="mb-6">
                  <h4 className="text-[13px] font-bold text-text mb-3 uppercase tracking-[0.05em]">Requirements</h4>
                  <ul className="space-y-2">
                    {pos.requirements.map((req) => (
                      <li key={req} className="flex gap-2.5 items-start text-sm text-text-3 leading-relaxed">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1 text-brand-purple">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto pt-4 border-t border-white/[0.06]">
                  <a
                    href={`mailto:contact@deskwolf.ai?subject=Application: ${pos.title}`}
                    className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-6 py-3 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]"
                  >
                    Apply Now
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ GENERAL APPLICATION ════════════ */}
      <section className="relative z-[2] py-[120px]">
        <div className="max-w-[800px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center rv">
          <h2 className="text-[clamp(30px,4vw,46px)] font-extrabold text-text mb-4">
            Don&rsquo;t see your role?
          </h2>
          <p className="text-[17px] text-text-2 max-w-[520px] mx-auto mb-8">
            We&rsquo;re always looking for talented people who share our mission. If you think you&rsquo;d be a great fit, send us your resume and tell us what you&rsquo;d bring to the team.
          </p>
          <a
            href="mailto:contact@deskwolf.ai?subject=General Application"
            className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white text-[#0F172A] shadow-[0_4px_20px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]"
          >
            Send a General Application
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
