import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Which Jobs AI Is Killing in 2026 (And Which Ones It Can't Touch) | DeskWolf LLC",
  description:
    "Oracle cut 45K jobs. JPMorgan is using AI for team-level work. Here's what's actually happening to jobs in 2026, and which careers are more valuable than ever.",
};

export default function JobsAIIsReplacing() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] pt-[160px] pb-[60px]">
        <div className="max-w-[760px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">Industry Insights</span>
          </div>

          <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-[18px] opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Which Jobs AI Is Killing in 2026{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              (And Which Ones It Can&apos;t Touch)
            </span>
          </h1>

          <div className="flex items-center justify-center gap-4 text-[13px] text-text-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <span>By Vic Roque, Founder &amp; CEO</span>
            <span className="w-1 h-1 bg-text-3 rounded-full" />
            <span>March 16, 2026</span>
            <span className="w-1 h-1 bg-text-3 rounded-full" />
            <span>10 min read</span>
          </div>
        </div>
      </section>

      {/* ════════════ ARTICLE BODY ════════════ */}
      <section className="relative z-[2] pb-[80px]">
        <div className="max-w-[760px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <article className="rv">
            {/* ── Intro ── */}
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Oracle cut 45,000 jobs. Block laid off over 4,000. JPMorgan is deploying AI to handle work that used to require entire teams. These aren&apos;t startups trimming fat. These are the largest companies in the world restructuring around technology that didn&apos;t exist three years ago.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              The question everyone&apos;s asking is: which jobs are next? But that&apos;s the wrong question. The better one is: what makes a job safe, and what makes it vulnerable? Because the answer isn&apos;t as simple as &ldquo;robots are coming for everyone.&rdquo;
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              Some jobs are more valuable now than they were five years ago. Some are disappearing in real time. The difference comes down to one word.
            </p>

            {/* ── Section: The First Wave ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              The First Wave Already Hit
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              The first category of jobs to feel the impact was what you&apos;d call &ldquo;predictable knowledge work.&rdquo; Data entry. Basic customer service. Template-based copywriting. Routine bookkeeping. Scheduling coordination. First-pass legal document review.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              These jobs share a common trait: they follow rules. Input comes in, you apply a known process, output goes out. The decisions involved are low-stakes and pattern-based. You don&apos;t need judgment. You need accuracy and speed.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              AI is exceptionally good at accuracy and speed when the rules are clear. It doesn&apos;t get tired at 4 PM. It doesn&apos;t make more mistakes on Monday morning. It processes the 10,000th form with the same precision as the first. For pure rule-following work, there&apos;s no argument that AI is faster, cheaper, and more consistent than a human doing the same thing.
            </p>

            {/* ── Section: The Test ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              The Real Test Isn&apos;t &ldquo;Is This Hard?&rdquo;
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              People assume that complex jobs are safe and simple jobs aren&apos;t. That&apos;s wrong. The test isn&apos;t difficulty. It&apos;s predictability.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              A radiologist reading an X-ray is doing something incredibly skilled. But it&apos;s also highly pattern-based, which is why AI can now match or exceed human accuracy on certain types of medical imaging. The job is hard, but the process is predictable.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              On the other hand, a kindergarten teacher manages unpredictable situations all day long. Emotional outbursts, creative problem-solving on the fly, reading the room, adapting to thirty different personalities simultaneously. The job doesn&apos;t pay what radiology pays, but it&apos;s far less automatable, because it&apos;s fundamentally unpredictable.
            </p>

            {/* ── Section: What Holds Up ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              The Jobs That Hold Up
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              The World Economic Forum scores jobs on an &ldquo;automation resistance&rdquo; scale. The ones at the top share three traits: physical dexterity in unpredictable environments, high-stakes judgment, or deep emotional labor.
            </p>

            <h3 className="text-[18px] font-bold text-text mb-3">
              Physical Dexterity: Skilled Trades
            </h3>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Electricians score 94 out of 100 on the WEF scale. Plumbers, HVAC technicians, welders: all in the 90s. Why? Because every job site is different. The walls are different, the wiring is different, the access points are different. You can&apos;t send a robot into a crawl space in a 1940s house and expect it to figure out what the previous homeowner did with the plumbing.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              MIT&apos;s research is clear on this: general-purpose robotics won&apos;t reach the trades until after 2030 at the earliest. The physical world is too variable, and the cost of robotic systems that can handle that variability is still orders of magnitude too high. Skilled trades aren&apos;t just safe. They&apos;re getting more valuable as fewer people enter them.
            </p>

            <h3 className="text-[18px] font-bold text-text mb-3">
              High-Stakes Judgment: Medicine, Law, Strategy
            </h3>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Surgeons score 96 out of 100. Not because surgery is physically impossible for machines (robotic surgery already exists) but because the judgment calls during surgery are life-and-death decisions that depend on context, experience, and adaptation. AI can assist. It can&apos;t replace the person making the call.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              The same applies to senior attorneys, strategic consultants, and crisis managers. The work involves navigating ambiguity where the stakes are too high for a statistical model to be the final decision-maker. AI is the best research assistant these professionals have ever had. It&apos;s not their replacement.
            </p>

            <h3 className="text-[18px] font-bold text-text mb-3">
              Emotional Labor: Therapy, Teaching, Care
            </h3>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              Therapists score 97 out of 100. The highest on the scale. Because what they do is fundamentally about human connection, trust, and the ability to read what someone isn&apos;t saying. AI can simulate empathy. It can&apos;t feel it, and it can&apos;t build the kind of therapeutic relationship that actual healing requires. The same is true for social workers, counselors, and primary care providers who spend as much time listening as diagnosing.
            </p>

            {/* ── Section: The Skills Pivot ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              The Skills Pivot That Actually Matters
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              The advice you hear everywhere is &ldquo;learn AI.&rdquo; Take a prompt engineering course. Learn to use the tools. That&apos;s fine, but it misses the point.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              The real pivot isn&apos;t learning how to use AI tools. It&apos;s understanding where human judgment gets amplified by AI, and positioning yourself at that intersection.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              Anthropic published research showing that AI is currently handling roughly 15% of tasks across most professional roles with no measurable quality loss. Not 15% of jobs. Fifteen percent of tasks within each job. That&apos;s augmentation, not replacement. The person who understands which 15% to delegate, and uses the freed-up time to do higher-value work, becomes more productive, not less relevant.
            </p>

            {/* ── Section: What to Watch ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              Categories Worth Watching
            </h2>

            <h3 className="text-[18px] font-bold text-text mb-3">
              AI Oversight Roles
            </h3>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              As AI handles more tasks, someone needs to verify the output, catch errors, and make judgment calls on edge cases. These roles didn&apos;t exist three years ago. They&apos;re growing fast. If you understand both the domain and the technology, you&apos;re in a strong position.
            </p>

            <h3 className="text-[18px] font-bold text-text mb-3">
              Skilled Trades
            </h3>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Already covered, but worth emphasizing: the trades are experiencing a labor shortage at the same time AI is making office work more efficient. Demand is up, supply is down, and the work can&apos;t be automated for at least another decade. Economically, that&apos;s an exceptional position to be in.
            </p>

            <h3 className="text-[18px] font-bold text-text mb-3">
              Care and Mental Health
            </h3>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              The mental health crisis isn&apos;t slowing down, and AI isn&apos;t going to counsel someone through grief. Therapists, counselors, psychiatric nurses, and social workers are in a category that gets more essential as everything else speeds up. When the world moves faster, more people need help processing it.
            </p>

            <h3 className="text-[18px] font-bold text-text mb-3">
              Strategic Roles
            </h3>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              CEOs, creative directors, product strategists, senior architects: roles where the job is to synthesize information from multiple domains, weigh competing priorities, and make decisions under uncertainty. AI gives these people better data and faster analysis. It doesn&apos;t replace the judgment they apply to it.
            </p>

            {/* ── Bottom Line ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              The Bottom Line
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              AI is not coming for all jobs. It&apos;s coming for predictable tasks within jobs. The roles that are entirely predictable (pure rule-following with no judgment required) are the ones that contract. Everything else adapts.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              The people who thrive in this environment won&apos;t be the ones who &ldquo;learned AI.&rdquo; They&apos;ll be the ones who understood their own value clearly enough to know which parts of their work to hand off, and which parts to double down on.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8]">
              The technology is moving fast. The fundamentals of human value haven&apos;t changed at all.
            </p>
          </article>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative z-[2] py-[60px]">
        <div className="max-w-[760px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center rv">
          <div className="bg-glass-strong backdrop-blur-[16px] border border-white/[0.07] rounded-[var(--radius-std)] p-[clamp(32px,5vw,56px)]">
            <h2 className="text-[clamp(24px,3vw,32px)] font-extrabold text-text mb-4">
              See how AI handles the predictable stuff so you don&apos;t have to
            </h2>
            <p className="text-[16px] text-text-2 mb-8 max-w-[480px] mx-auto">
              Book a 15-minute demo and we&apos;ll show you exactly which tasks in your business can run on autopilot.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 bg-white text-[#0F172A] font-semibold text-[15px] px-8 py-4 rounded-[100px] no-underline transition-all duration-200 hover:bg-[#F0F4F8] hover:scale-[1.02]"
            >
              Book Your Demo
            </Link>
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
