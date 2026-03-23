import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog — DeskWolf LLC",
  description:
    "Practical AI insights for local business owners. Articles on missed calls, voice agents, speed-to-lead, and how to evaluate AI phone systems.",
};

/* ── SVG Icons (inline for zero deps) ── */
const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const BookOpenIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M5 12h14" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ── Article data ── */
const articles = [
  {
    title: "You're Losing $52,000 a Year to Voicemail. Here's the Fix.",
    excerpt:
      "Five missed calls a week at $200 each. That's $52,000 a year walking out the door — not because you're bad at business, but because the phone rang and nobody answered. AI voice agents exist to stop that.",
    date: "March 15, 2026",
    readTime: "8 min read",
    category: "Revenue Recovery",
    categoryColor: "text-brand-amber bg-brand-amber/10",
    href: "/blog/losing-52k-to-voicemail",
  },
  {
    title: "Your Phone Isn't Broken — You're Just Missing Every Call",
    excerpt:
      "A salon owner looked me dead in the face and said, 'So it's like ChatGPT but for my phone?' DeskWolf isn't a chatbot — it answers your actual business phone line with a real voice, 24/7.",
    date: "March 14, 2026",
    readTime: "7 min read",
    category: "AI Education",
    categoryColor: "text-brand-blue bg-blue-pale",
    href: "/blog/phone-isnt-broken",
  },
  {
    title: "Most People Are Still Using AI Like a Genie. Here's Why That's Costing Them.",
    excerpt:
      "The AI revolution is real — but for most business owners, it's still just a buzzword. The gap between 'heard of ChatGPT' and 'built a system that runs my front desk' is where the real opportunity sits.",
    date: "March 14, 2026",
    readTime: "9 min read",
    category: "Thought Leadership",
    categoryColor: "text-brand-purple bg-brand-purple/10",
    href: "/blog/ai-genie-mentality",
  },
  {
    title: "Which Jobs AI Is Killing in 2026 (And Which Ones It Can't Touch)",
    excerpt:
      "Oracle cut 45,000 jobs. Block eliminated 4,000+. The displacement is already happening. Here's how to figure out which side of the line you're on — and what to do about it.",
    date: "March 16, 2026",
    readTime: "10 min read",
    category: "Industry Insights",
    categoryColor: "text-brand-cyan bg-brand-cyan/10",
    href: "/blog/jobs-ai-is-replacing",
  },
  {
    title: "Speed-to-Lead: Why the First 60 Seconds Matter More Than Your Sales Script",
    excerpt:
      "Responding within 5 minutes makes you 100x more likely to connect with a lead. Most businesses take hours. Here's what happens in those lost minutes — and how to fix it.",
    date: "Coming Soon",
    readTime: "5 min read",
    category: "Sales",
    categoryColor: "text-brand-green bg-brand-green/10",
    href: "/coming-soon",
  },
  {
    title: "How to Evaluate AI Phone Systems for Your Business",
    excerpt:
      "Not all AI voice agents are created equal. From voice quality to integration depth to data ownership — the 12 questions you should ask any vendor before signing a contract.",
    date: "Coming Soon",
    readTime: "9 min read",
    category: "Guide",
    categoryColor: "text-brand-amber bg-brand-amber/10",
    href: "/coming-soon",
  },
];

export default function BlogPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] min-h-[60vh] flex items-center pt-[140px] pb-[80px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">Resources</span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-[18px] max-w-[700px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            The{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              DeskWolf
            </span>{" "}
            Blog
          </h1>

          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[560px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Practical AI insights for local business owners. No fluff, no jargon&nbsp;&mdash; just actionable ideas you can use today.
          </p>
        </div>
      </section>

      {/* ════════════ FEATURED ARTICLE ════════════ */}
      <section className="relative z-[2] pb-[80px]" id="featured">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <Link href={articles[0].href} className="block no-underline rv">
            <GlassCard className="p-0 overflow-hidden transition-all duration-300 hover:border-brand-purple/30 hover:shadow-[0_0_60px_-12px_rgba(139,92,246,0.15)]">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] items-center">
                {/* Content */}
                <div className="p-[clamp(24px,4vw,48px)]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[10px] tracking-[0.08em] uppercase px-3 py-1 rounded-[100px] text-brand-amber bg-brand-amber/10 font-medium">Featured</span>
                    <span className="text-[12px] text-text-3 flex items-center gap-1.5"><CalendarIcon /> {articles[0].date}</span>
                  </div>
                  <h2 className="text-[clamp(24px,3vw,34px)] font-extrabold text-text leading-[1.15] mb-4">
                    {articles[0].title}
                  </h2>
                  <p className="text-[16px] text-text-2 leading-relaxed mb-5">
                    {articles[0].excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple">
                    Read Article <ArrowRightIcon />
                  </span>
                </div>
                {/* Visual placeholder */}
                <div className="hidden lg:flex items-center justify-center p-12 bg-gradient-to-br from-brand-blue/10 via-brand-purple/10 to-brand-cyan/10 min-h-[300px]">
                  <GradientIcon color="amber"><BookOpenIcon /></GradientIcon>
                </div>
              </div>
            </GlassCard>
          </Link>
        </div>
      </section>

      {/* ════════════ ARTICLE GRID ════════════ */}
      <section className="relative z-[2] py-[80px]" id="articles">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">All Articles</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              Latest from the pack.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {articles.map((article, i) => (
              <Link key={article.title} href={article.href} className="block no-underline">
                <GlassCard className={`p-0 h-full flex flex-col transition-all duration-300 hover:border-brand-purple/30 hover:shadow-[0_0_40px_-12px_rgba(139,92,246,0.12)] hover:-translate-y-1 rv d${(i % 3) + 1}`}>
                  {/* Top color bar */}
                  <div className="h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan" />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className={`font-mono text-[10px] tracking-[0.08em] uppercase px-3 py-1 rounded-[100px] font-medium ${article.categoryColor}`}>
                        {article.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[17px] font-extrabold text-text leading-[1.3] mb-3 flex-1">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-text-3 leading-relaxed mb-5">
                      {article.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] mt-auto">
                      <div className="flex items-center gap-4 text-[12px] text-text-3">
                        <span className="flex items-center gap-1.5"><CalendarIcon /> {article.date}</span>
                        <span className="flex items-center gap-1.5"><ClockIcon /> {article.readTime}</span>
                      </div>
                      <span className="text-brand-purple">
                        <ArrowRightIcon />
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>

          {/* More articles note */}
          <div className="text-center mt-12 rv">
            <GlassCard className="inline-block px-8 py-5">
              <p className="text-[15px] text-text-2">
                More articles coming soon. Subscribe below to get notified when new content drops.
              </p>
            </GlassCard>
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
