import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "You're Losing $52,000 a Year to Voicemail — DeskWolf LLC",
  description:
    "Five missed calls a week at $200 each adds up to $52,000 a year. Here's the math, the technology, and the fix.",
};

export default function Losing52kToVoicemail() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] pt-[160px] pb-[60px]">
        <div className="max-w-[760px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-2 h-2 bg-brand-amber rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">Revenue Recovery</span>
          </div>

          <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-[18px] opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            You&apos;re Losing $52,000 a Year to Voicemail.{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              Here&apos;s the Fix.
            </span>
          </h1>

          <div className="flex items-center justify-center gap-4 text-[13px] text-text-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <span>By Vic Roque, Founder &amp; CEO</span>
            <span className="w-1 h-1 bg-text-3 rounded-full" />
            <span>March 15, 2026</span>
            <span className="w-1 h-1 bg-text-3 rounded-full" />
            <span>8 min read</span>
          </div>
        </div>
      </section>

      {/* ════════════ ARTICLE BODY ════════════ */}
      <section className="relative z-[2] pb-[80px]">
        <div className="max-w-[760px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <article className="rv">
            {/* ── Intro ── */}
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Let me give you a number. Five missed calls a week. That&apos;s it. Five. At an average customer value of $200, that&apos;s $1,000 a week walking out the door. Over a year? $52,000.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Not because your service is bad. Not because your prices are too high. Not because a competitor outperformed you. Because nobody picked up the phone.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              That number isn&apos;t hypothetical. It&apos;s the conservative estimate for most local service businesses. Some are losing two or three times that and don&apos;t even know it, because missed calls don&apos;t show up on a P&amp;L. They just quietly disappear.
            </p>

            {/* ── Section: The Technology Works ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              The Technology Actually Works Now
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Two years ago, AI voice agents sounded like robots reading a teleprompter. You could spot them in the first three seconds. That era is over.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              In 2026, the voice quality is nearly indistinguishable from a human receptionist. Natural pauses, appropriate tone, the ability to handle interruptions and pivot mid-conversation. Most callers don&apos;t realize they&apos;re not talking to a person. And frankly, they don&apos;t care &mdash; they care that someone answered.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              The gap between &ldquo;AI voice&rdquo; and &ldquo;human voice&rdquo; has shrunk to the point where the only meaningful question is: does it solve the problem? For answering phones, booking appointments, and qualifying leads &mdash; it does.
            </p>

            {/* ── Section: Competitive Equalizer ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              The Great Equalizer
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Here&apos;s what most people miss about this technology: it doesn&apos;t just save money. It levels the playing field.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              A five-person law firm with an AI voice agent has the same phone responsiveness as a 200-attorney practice with a full reception team. A solo plumber with AI answering his calls presents the same professional front as a franchise operation with a call center.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              Before this technology, competing on responsiveness meant competing on headcount. That&apos;s no longer true. The business that answers every call wins &mdash; and now any business can be that business.
            </p>

            {/* ── Section: The Real Numbers ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              The Real Numbers Nobody Talks About
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Home service businesses miss 27% of inbound calls during normal business hours. Not after hours. During the day. When someone is actively trying to give them money.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              The generic AI sales pitch says &ldquo;never miss a call again!&rdquo; Cool slogan. Means nothing without the math behind it.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              So let&apos;s do the math. Take a salon. Forty calls per week is normal for a busy location. During peak hours &mdash; lunch, late afternoon, Saturday morning &mdash; they&apos;re missing 8 to 11 of those calls. Not because they&apos;re ignoring people, but because they&apos;re cutting hair. That&apos;s their job.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              At an average ticket of $60, those missed calls represent $480 to $660 in lost revenue. Every single week. That&apos;s not a marketing problem. That&apos;s not a lead generation problem. That&apos;s a phone problem. And it has a phone solution.
            </p>

            {/* ── Section: Honest About Setup ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              This Isn&apos;t Plug-and-Play (And Anyone Who Says Otherwise Is Lying)
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              I&apos;m going to be straight with you because too many companies in this space aren&apos;t: setting up an AI voice agent is not a five-minute install. It&apos;s not &ldquo;flip a switch and you&apos;re done.&rdquo;
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              A real deployment takes one to three weeks. The agent needs to learn your business &mdash; your services, your pricing, your scheduling rules, your FAQ, the way you talk to customers. That takes configuration, testing, and iteration. Cutting corners on setup is how you end up with an AI that books a root canal at a dog groomer.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              The tradeoff is worth it. Once it&apos;s dialed in, it runs 24/7 with no sick days, no hold times, and no attitude on a Monday morning. But that &ldquo;once it&apos;s dialed in&rdquo; part? That&apos;s real work, and you should expect it.
            </p>

            {/* ── Section: Day One ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              Three Things Your AI Should Do From Day One
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Forget the feature lists and the buzzwords. If your AI phone system doesn&apos;t do these three things immediately, it&apos;s not solving the problem:
            </p>

            <h3 className="text-[18px] font-bold text-text mb-3">
              1. Answer every call, 24/7
            </h3>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Not &ldquo;most calls.&rdquo; Not &ldquo;calls during business hours.&rdquo; Every call. The 2 AM emergency plumbing request. The Sunday morning dental pain. The Friday night &ldquo;do you have availability tomorrow?&rdquo; Every single one gets answered by a voice that sounds like your business, knows your services, and can take the next step.
            </p>

            <h3 className="text-[18px] font-bold text-text mb-3">
              2. Call back missed leads in under 5 seconds
            </h3>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Speed-to-lead isn&apos;t a marketing buzzword. Harvard Business Review found that calling a lead back within five minutes makes you 100x more likely to make contact. Five minutes. Most businesses take hours. Some take days. An AI agent calls back in under five seconds. That&apos;s not an incremental improvement &mdash; it&apos;s a category shift.
            </p>

            <h3 className="text-[18px] font-bold text-text mb-3">
              3. Deliver a transcript after every call
            </h3>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              You should know exactly what was said, what was promised, and what needs follow-up &mdash; without having to listen to recordings. A clean transcript after every conversation means nothing falls through the cracks. It also means accountability: you can see exactly how the AI is representing your business.
            </p>

            {/* ── Section: Bottom Line ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              The Bottom Line
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Fifty-two thousand dollars a year. That&apos;s what&apos;s leaking out of your business through voicemail. Not because you&apos;re doing anything wrong &mdash; but because you physically can&apos;t answer every call while also doing the work that earns the call in the first place.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              The technology to fix it exists today. It works. It&apos;s not magic and it&apos;s not instant &mdash; but it&apos;s real, and it&apos;s proven.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8]">
              The only question is how long you want to keep paying $52K for the privilege of sending people to voicemail.
            </p>
          </article>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative z-[2] py-[60px]">
        <div className="max-w-[760px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center rv">
          <div className="bg-glass-strong backdrop-blur-[16px] border border-white/[0.07] rounded-[var(--radius-std)] p-[clamp(32px,5vw,56px)]">
            <h2 className="text-[clamp(24px,3vw,32px)] font-extrabold text-text mb-4">
              Ready to stop losing revenue to voicemail?
            </h2>
            <p className="text-[16px] text-text-2 mb-8 max-w-[480px] mx-auto">
              Book a 15-minute demo. We&apos;ll show you exactly how many calls your business is missing &mdash; and what it&apos;s costing you.
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
