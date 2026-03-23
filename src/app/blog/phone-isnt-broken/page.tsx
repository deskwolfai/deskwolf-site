import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Your Phone Isn't Broken. You're Just Missing Every Call | DeskWolf LLC",
  description:
    "DeskWolf isn't a chatbot or an app. It answers your actual business phone line with a real voice, 24/7. Here's how it works.",
};

export default function PhoneIsntBroken() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] pt-[160px] pb-[60px]">
        <div className="max-w-[760px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">AI Education</span>
          </div>

          <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-[18px] opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Your Phone Isn&apos;t Broken.{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              You&apos;re Just Missing Every Call
            </span>
          </h1>

          <div className="flex items-center justify-center gap-4 text-[13px] text-text-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <span>By Vic Roque, Founder &amp; CEO</span>
            <span className="w-1 h-1 bg-text-3 rounded-full" />
            <span>March 14, 2026</span>
            <span className="w-1 h-1 bg-text-3 rounded-full" />
            <span>7 min read</span>
          </div>
        </div>
      </section>

      {/* ════════════ ARTICLE BODY ════════════ */}
      <section className="relative z-[2] pb-[80px]">
        <div className="max-w-[760px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <article className="rv">
            {/* ── Intro ── */}
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              A salon owner asked me last month: &ldquo;So it&apos;s like ChatGPT but for my phone?&rdquo;
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              I get why she said it. When most people think of AI, they picture a text box. You type something in, it spits something back out. Maybe it writes an email for you, or summarizes a document. It&apos;s a tool you go to when you need it, like a calculator.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              That&apos;s the wrong mental model for what we do. DeskWolf doesn&apos;t sit in a tab waiting for you to type. It answers your actual business phone line. A real voice. A real conversation. No menu tree. No &ldquo;press 1 for English.&rdquo; No hold music. Someone calls your number, and a voice that sounds like your business picks up on the first ring.
            </p>

            {/* ── Section: The Problem ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              The Problem You Don&apos;t See
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Here&apos;s what nobody tells business owners: you&apos;re missing 20 to 40 percent of your incoming calls during peak hours. During business hours. When you&apos;re open.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              You don&apos;t notice because you&apos;re busy doing the work. The electrician is on a job site. The dentist is with a patient. The salon owner has foils in someone&apos;s hair. The phone rings, nobody&apos;s free, it goes to voicemail, and the caller hangs up and dials the next result on Google.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              After hours? It&apos;s 100 percent. Every call after closing goes to voicemail. Every weekend call. Every holiday. Every late-night emergency. All voicemail. And here&apos;s what research consistently shows: most people don&apos;t leave voicemails anymore. They just call the next business.
            </p>

            {/* ── Section: What We Actually Do ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              What DeskWolf Actually Does
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              We&apos;re not a chatbot. We&apos;re not a mobile app. We&apos;re not a dashboard you have to learn. We answer your phone.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              When someone calls your business line, they hear a natural voice that knows your services, your hours, your pricing, and your scheduling rules. It handles the conversation the way a trained receptionist would, except it doesn&apos;t take breaks, doesn&apos;t call in sick, and doesn&apos;t put anyone on hold.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              We offer three products, and each one solves a specific problem:
            </p>

            <h3 className="text-[18px] font-bold text-text mb-3">
              Inbound Receptionist
            </h3>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Answers every incoming call. Greets callers by your business name. Handles FAQs, books appointments, routes urgent calls to your cell. Runs 24/7 so you never send another human being to voicemail.
            </p>

            <h3 className="text-[18px] font-bold text-text mb-3">
              Missed Call-Back Agent
            </h3>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              When a call does slip through (maybe you were on another call, maybe it happened before you went live with us) this agent calls them back. Not in five minutes. Not in an hour. In under five seconds. The lead is still holding their phone. They&apos;re still thinking about the problem they called you about. And now you&apos;re calling them back before they&apos;ve had time to Google your competitor.
            </p>

            <h3 className="text-[18px] font-bold text-text mb-3">
              Outbound Lead Qualifier
            </h3>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              You&apos;ve got a list of leads from a marketing campaign, a trade show, or a referral sheet. This agent calls them, qualifies them based on your criteria, and books the ones worth your time directly onto your calendar. You stop spending hours chasing cold leads and start spending time with people who are ready to buy.
            </p>

            {/* ── Section: Speed-to-Lead ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              Why 5 Seconds Matters More Than 5 Minutes
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              There&apos;s a well-known study from Harvard Business Review: if you call a lead back within five minutes, you&apos;re 100 times more likely to make contact than if you wait 30 minutes. One hundred times.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Most businesses respond to missed calls in hours. Some take days. A few never call back at all. They just hope the person will try again. They won&apos;t.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              DeskWolf calls back in under five seconds. Not five minutes. Five seconds. The caller barely has time to put their phone down. That&apos;s not a small edge. It&apos;s the kind of speed that turns a missed opportunity into a booked appointment before the customer even knows they were missed.
            </p>

            {/* ── Section: Done-for-You ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              No Dashboards, No Platforms, No Learning Curve
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              One thing I&apos;ve learned talking to hundreds of business owners: they don&apos;t want another platform to log into. They don&apos;t want another dashboard to check. They already have scheduling software, accounting tools, maybe a CRM they half-use. The last thing they need is more software.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              DeskWolf is done-for-you. We set it up. We configure the voice. We train it on your business. We test it until it handles your calls the way you would. You get transcripts of every call, a summary of every booking, and a report when something needs your attention.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-10">
              You don&apos;t have to manage it. That&apos;s the whole point. You focus on the work. We handle the phones.
            </p>

            {/* ── Bottom Line ── */}
            <h2 className="text-[22px] font-extrabold text-text mb-4">
              The Bottom Line
            </h2>
            <p className="text-[16px] text-text-2 leading-[1.8] mb-6">
              Your phone isn&apos;t broken. It rings plenty. The problem is that no one&apos;s there to answer it when it does.
            </p>
            <p className="text-[16px] text-text-2 leading-[1.8]">
              That&apos;s not a technology problem. It&apos;s a capacity problem. And now there&apos;s a technology solution for it that actually works, sounds natural, and doesn&apos;t require you to learn a single new tool. Your phone rings. Someone answers. That&apos;s it.
            </p>
          </article>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative z-[2] py-[60px]">
        <div className="max-w-[760px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center rv">
          <div className="bg-glass-strong backdrop-blur-[16px] border border-white/[0.07] rounded-[var(--radius-std)] p-[clamp(32px,5vw,56px)]">
            <h2 className="text-[clamp(24px,3vw,32px)] font-extrabold text-text mb-4">
              Want to hear what it sounds like?
            </h2>
            <p className="text-[16px] text-text-2 mb-8 max-w-[480px] mx-auto">
              Book a 15-minute demo and we&apos;ll walk through how DeskWolf handles calls for businesses like yours.
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
