import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "DeskWolf AI Builders Community | DeskWolf LLC",
  description:
    "Join 1,000+ people learning AI from scratch. Free to start. No experience needed. Live workshops, step-by-step courses, and a community that answers your questions.",
};

/* ── SVG Icons (inline for zero deps) ── */
const BriefcaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
const UserIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);
const TrendingUpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
  </svg>
);
const SparklesIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
  </svg>
);
const BookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

/* ── Reusable check mark ── */
const Check = () => (
  <span className="w-5 h-5 bg-gradient-to-br from-brand-green to-brand-cyan rounded-full flex items-center justify-center shrink-0 text-white text-[11px] font-bold">
    &#10003;
  </span>
);

export default function CommunityPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] min-h-[70vh] flex items-center pt-[140px] pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">Free to Join</span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-text mb-[18px] max-w-[800px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            You Don&rsquo;t Need to Be Technical.{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              You Just Need the Right Room.
            </span>
          </h1>

          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[600px] mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            You watched the YouTube tutorials. You played with ChatGPT. You still don&rsquo;t have a working AI system.
            That&rsquo;s not because AI is too hard. It&rsquo;s because you tried to figure it out alone.
            DeskWolf AI Builders exists to fix that.
          </p>

          <div className="flex gap-3 flex-wrap justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <a href="https://www.skool.com/deskwolf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white text-[#0F172A] shadow-[0_4px_20px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]">
              Join Free on Skool
            </a>
            <a href="#curriculum" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
              See What You&rsquo;ll Learn
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ WHO THIS IS FOR ════════════ */}
      <section className="relative z-[2] py-[120px]" id="who">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Built For Beginners</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              If you&rsquo;re advanced,<br />
              <span className="font-light text-text-2">this isn&rsquo;t for you.</span>
            </h2>
            <p className="text-[17px] text-text-2 leading-relaxed mb-4">
              We&rsquo;re focused on the person starting from zero. Every module, every workshop, every answer is designed for people who&rsquo;ve never built anything with AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[
              {
                icon: <BriefcaseIcon />,
                color: "amber" as const,
                title: "First-Time Business Owners",
                desc: "You just started your business and keep hearing about AI but have no idea where to begin. Start here.",
              },
              {
                icon: <UserIcon />,
                color: "blue" as const,
                title: "Non-Technical People",
                desc: "You don't code. You don't want to code. You just want AI to handle things for you. We speak your language.",
              },
              {
                icon: <TrendingUpIcon />,
                color: "green" as const,
                title: "Career Changers",
                desc: "You want to add AI skills to your resume or start offering AI services. This is the hands-on training ground.",
              },
              {
                icon: <SparklesIcon />,
                color: "cyan" as const,
                title: "Curious Minds",
                desc: "You've used ChatGPT a few times but you know there's more. There is. A lot more. And it's not as complicated as it looks.",
              },
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

      {/* ════════════ CURRICULUM ════════════ */}
      <section className="relative z-[2] py-[120px]" id="curriculum">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">The Curriculum</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Everything you need to go<br />
              <span className="font-light text-text-2">from zero to confident.</span>
            </h2>
            <p className="text-[17px] text-text-2 leading-relaxed mb-4">
              All modules included when you join. No upsells, no paywalls between lessons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {[
              {
                num: "01",
                title: "AI 101: The Real Starting Point",
                desc: "Before tools and automations, you need to understand what AI actually is, what it can do, and how to talk to it properly.",
                items: [
                  "What AI is (and what it isn't) in plain English",
                  "How to get better answers from ChatGPT, Claude, and Gemini",
                  "Free vs paid tiers: what you actually get when you upgrade",
                  "What \"memory\" and \"context\" mean (and why your AI keeps forgetting things)",
                  "How to have a real conversation with AI instead of just asking questions",
                ],
              },
              {
                num: "02",
                title: "Setting Up Your AI Workspace",
                desc: "Install the tools, create the accounts, and get comfortable before you build anything.",
                items: [
                  "Installing Claude on your computer for the first time",
                  "Setting up ChatGPT Plus and what the paid features actually do",
                  "Google accounts, calendars, and the tools that connect to everything",
                  "File organization: where to put things so AI can find them later",
                  "Your first real task: getting AI to do something useful today",
                ],
              },
              {
                num: "03",
                title: "AI for Everyday Tasks",
                desc: "Start using AI to save time on things you already do every day.",
                items: [
                  "Writing emails, messages, and social posts with AI assistance",
                  "Summarizing documents, articles, and meeting notes",
                  "Generating proper images (what to ask for, what tools to use)",
                  "Making AI proofread, edit, and improve your writing",
                  "Using AI to research anything in 5 minutes instead of 5 hours",
                ],
              },
              {
                num: "04",
                title: "Your First Automations",
                desc: "Connect tools so things happen automatically without you lifting a finger.",
                items: [
                  "What Zapier is and why it matters (old-school automation made simple)",
                  "Your first automation: \"When X happens, do Y automatically\"",
                  "Calendar automations: reminders, follow-ups, scheduling",
                  "Email automations: auto-replies, sorting, forwarding",
                  "The difference between Zapier, Make, and n8n (and which to start with)",
                ],
              },
              {
                num: "05",
                title: "AI for Your Business",
                desc: "Apply what you've learned to real business problems.",
                items: [
                  "Setting up an AI assistant that knows your business",
                  "Creating a FAQ bot that answers customer questions",
                  "Using AI to write your website copy, social media, and marketing",
                  "Basic CRM concepts: keeping track of leads and customers",
                  "How AI voice agents work (and when they make sense for your business)",
                ],
              },
              {
                num: "06",
                title: "Building Confidence",
                desc: "Go from 'I think I can do this' to 'I know I can do this.'",
                items: [
                  "How to evaluate new AI tools without getting overwhelmed",
                  "When to DIY vs when to hire someone (knowing the line)",
                  "Staying current without drowning in AI news",
                  "Connecting with other builders in the community",
                  "What to do next: paths forward based on your goals",
                ],
              },
            ].map((mod, i) => (
              <GlassCard key={mod.num} className={`p-8 rv d${(i % 2) + 1}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-extrabold text-[28px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">{mod.num}</span>
                  <h3 className="text-[18px] font-extrabold text-text">{mod.title}</h3>
                </div>
                <p className="text-sm text-text-3 leading-relaxed mb-4">{mod.desc}</p>
                <ul className="list-none flex flex-col gap-3">
                  {mod.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] text-text-2 leading-relaxed">
                      <Check />{item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ WHAT YOU GET ════════════ */}
      <section className="relative z-[2] py-[120px]" id="membership">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Membership</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Free to join.{" "}
              <span className="font-light text-text-2">Everything unlocked.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            <GlassCard className="p-8 rv d1">
              <div className="mb-4">
                <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-green">Free Tier</span>
                <h3 className="text-[24px] font-extrabold text-text mt-2">$0/mo</h3>
              </div>
              <ul className="list-none flex flex-col gap-3">
                {[
                  "Community access and discussion",
                  "Module 1: AI 101 (full course)",
                  "Weekly Q&A recordings",
                  "Resource recommendations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] text-text-2 leading-relaxed">
                    <Check />{item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="https://www.skool.com/deskwolf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
                  Join Free
                </a>
              </div>
            </GlassCard>

            <GlassCard className="p-8 rv d2 border-brand-purple/30">
              <div className="mb-4">
                <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-purple">Full Access</span>
                <h3 className="text-[24px] font-extrabold text-text mt-2">$97/mo</h3>
              </div>
              <ul className="list-none flex flex-col gap-3">
                {[
                  "All 6 course modules",
                  "Live weekly workshops (recorded)",
                  "Full template and resource library",
                  "Direct support from the DeskWolf team",
                  "Private channels for your questions",
                  "Monthly guest expert sessions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] text-text-2 leading-relaxed">
                    <Check />{item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="https://www.skool.com/deskwolf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
                  Get Full Access
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ════════════ SOCIAL PROOF / GOAL ════════════ */}
      <section className="relative z-[2] py-[100px]" id="goal">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <GlassCard className="p-[clamp(32px,5vw,52px)] rv">
            <div className="max-w-[640px] mx-auto text-center">
              <GradientIcon color="green"><UsersIcon /></GradientIcon>
              <h2 className="text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-text mb-4 mt-5">
                Our goal: 1,000 builders in this room.
              </h2>
              <p className="text-[17px] text-text-2 leading-relaxed mb-8">
                Every member gets personal attention. Every question gets answered. That&rsquo;s why we grow deliberately. If you&rsquo;re in, you matter.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { num: "1,000", label: "Member goal" },
                  { num: "6", label: "Course modules" },
                  { num: "Growing daily", label: "Current status" },
                ].map((s) => (
                  <div key={s.label} className="p-5 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06]">
                    <div className="font-extrabold text-[28px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">{s.num}</div>
                    <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-text-3 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ════════════ BOTTOM CTA ════════════ */}
      <section className="relative z-[2] py-[120px]" id="cta">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[600px] mx-auto rv">
            <h2 className="text-[clamp(30px,4vw,46px)] mb-4">
              You don&rsquo;t need to hire an agency to get AI working{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                for your business.
              </span>
            </h2>
            <p className="text-[17px] text-text-2 mb-8">
              You just need someone who&rsquo;ll answer your questions when you get stuck.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="https://www.skool.com/deskwolf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
                Join Free on Skool
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
