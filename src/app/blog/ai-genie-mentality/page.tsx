import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Most People Are Still Using AI Like a Genie — DeskWolf LLC",
  description:
    "The AI hype bubble exists inside a very small room. Most business owners haven't walked in yet — and the ones who have are using it wrong.",
};

export default function AIGenieMentality() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] pt-[160px] pb-[60px]">
        <div className="max-w-[760px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">Thought Leadership</span>
          </div>

          <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-[18px] opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Most People Are Still Using AI Like a Genie.{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              Here&apos;s Why That&apos;s Costing Them.
            </span>
          </h1>

          <div className="flex items-center justify-center gap-4 text-[13px] text-text-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <span>By Vic Roque, Founder &amp; CEO</span>
            <span className="w-1 h-1 bg-text-3 rounded-full" />
            <span>March 14, 2026</span>
            <span className="w-1 h-1 bg-text-3 rounded-full" />
            <span>9 min read</span>
          </div>
        </div>
      </section>

      {/* ════════════ ARTICLE BODY ════════════ */}
      <section className="relative z-[2] pb-[80px]">
        <div className="max-w-[760px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <article className="rv">
            {/* ── Intro ── */}
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              There&apos;s a bubble around AI right now. But it&apos;s not the kind of bubble most people think. It&apos;s not a market bubble or a valuation bubble. It&apos;s an awareness bubble &mdash; and it exists inside a very small room.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              If you spend time in tech circles, on Twitter, in startup communities, it feels like everyone is using AI for everything. New tools every week. New frameworks every day. Agents, copilots, orchestrators. The conversation moves so fast it feels like the whole world has already made the shift.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              It hasn&apos;t. Not even close.
            </p>

            {/* ── Section: The Real Numbers ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              The Numbers Tell a Different Story
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Pew Research has been tracking AI adoption for years. Their data is consistent: about 65% of Americans have heard of ChatGPT. That sounds like a lot until you see the next number &mdash; only 23% have actually used it.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              That means roughly three out of four people who know about the most famous AI tool in history have never opened it. Not once. They&apos;ve heard the name. They&apos;ve seen the headlines. They haven&apos;t touched it.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              And among the 23% who have tried it? The overwhelming majority used it like a text box. They typed in a question, got an answer, and closed the tab. Maybe they asked it to write a birthday card or explain something they saw in the news. They used the most powerful technology of the decade the same way they&apos;d use a Magic 8-Ball. Ask, receive, done.
            </p>

            {/* ── Section: The Genie Model ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              The Genie Model vs. The Workflow Model
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Here&apos;s the mental model most people are stuck in: AI is a genie. You rub the lamp, make a wish, and hope for something useful. &ldquo;Write me a business plan.&rdquo; &ldquo;Generate a marketing strategy.&rdquo; &ldquo;Create a social media calendar.&rdquo;
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              The output looks impressive for about thirty seconds. Then you try to use it and realize it&apos;s generic, surface-level, and disconnected from your actual business. You spent ten minutes prompting and got something you&apos;d throw away. So you conclude: &ldquo;AI isn&apos;t that useful.&rdquo;
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              That&apos;s not an AI problem. That&apos;s a framing problem.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              The businesses getting real value from AI aren&apos;t asking genies for wishes. They&apos;re building workflows. Automated sequences where AI handles specific, repeatable tasks inside a larger process. The AI doesn&apos;t decide what to do &mdash; it executes a well-defined step in a chain that was designed by a human who understands the problem.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              That&apos;s the difference between asking AI to &ldquo;write me a business plan&rdquo; and using AI to automatically qualify every inbound lead, route them to the right person, and book a meeting before they call your competitor. Same technology. Completely different result.
            </p>

            {/* ── Section: The Gap ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              The Biggest Gap in Business Right Now
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              The gap between awareness and actual use is massive. And it&apos;s not closing as fast as the tech industry thinks. Most business owners &mdash; the plumber, the salon owner, the law firm partner, the property manager &mdash; are still on the outside of this. They&apos;ve heard the noise. They haven&apos;t felt the value.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              And here&apos;s the thing: that gap is exactly where the opportunity sits. Not for people selling AI tools. For people solving real problems with AI as the engine underneath.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              Nobody cares that your solution uses AI. They care that their phone gets answered. They care that leads get followed up on. They care that Saturday morning calls don&apos;t go to voicemail. The technology is irrelevant. The outcome is everything.
            </p>

            {/* ── Section: Use Cases ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              The Tool Is Irrelevant. The Use Case Is Everything.
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              When we talk to business owners, we don&apos;t lead with AI. We lead with the problem.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              &ldquo;You&apos;re missing 30% of your calls during business hours. Do you know how much that&apos;s costing you?&rdquo; That&apos;s a conversation they understand. That&apos;s a number they can feel. The fact that the solution runs on AI is a technical detail &mdash; like telling someone their car uses internal combustion. They don&apos;t care about the engine. They care that it gets them to work.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              A dental practice drowning in calls during cleaning season doesn&apos;t need &ldquo;AI.&rdquo; They need every call answered and every appointment booked. That&apos;s a use case.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              A contractor missing $500 service calls while he&apos;s on a roof doesn&apos;t need &ldquo;an AI agent.&rdquo; He needs someone to pick up the phone and schedule the job. That&apos;s a use case.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              A law firm that can&apos;t return missed calls for hours doesn&apos;t need &ldquo;automation.&rdquo; They need the call returned in seconds, with the right questions asked, and the consultation booked. That&apos;s a use case.
            </p>

            {/* ── Section: What Changes ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              What Changes When You Stop Thinking Like a Genie
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              The moment you stop treating AI as a wish machine and start treating it as infrastructure, everything shifts. You stop asking &ldquo;what can AI do?&rdquo; and start asking &ldquo;what&apos;s the most expensive problem I have that follows a predictable pattern?&rdquo;
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              That second question is where the money is. Because predictable problems have predictable solutions. And predictable solutions can be automated reliably. Not with genie wishes. With systems.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              The businesses that figure this out in 2026 will have a structural advantage over the ones that don&apos;t. Not because AI is magic. Because they identified their most expensive bottleneck and removed it with technology that runs 24/7 without fatigue, ego, or a lunch break.
            </p>

            {/* ── Bottom Line ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              The Bottom Line
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Most people are still using AI like a genie. And most of them are disappointed with the results, because genies don&apos;t exist.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8]">
              What does exist is the ability to automate specific, high-value, repetitive tasks in your business with technology that&apos;s finally good enough to trust. The question isn&apos;t whether AI works. The question is whether you&apos;re using it on the right problem.
            </p>
          </article>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative z-[2] py-[60px]">
        <div className="max-w-[760px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center rv">
          <div className="bg-glass-strong backdrop-blur-[16px] border border-white/[0.07] rounded-[var(--radius-std)] p-[clamp(32px,5vw,56px)]">
            <h2 className="text-[clamp(24px,3vw,32px)] font-extrabold text-text mb-4">
              Curious what AI can actually do for your business?
            </h2>
            <p className="text-[16px] text-text-2 mb-8 max-w-[480px] mx-auto">
              Book a 15-minute demo. We&apos;ll show you the specific use case that makes sense for your industry &mdash; no genie lamps required.
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
