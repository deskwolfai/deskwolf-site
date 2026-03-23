import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Case Studies & Testimonials — DeskWolf LLC",
  description:
    "Real results from real businesses. See how DeskWolf AI voice agents recover missed calls, book appointments, and protect revenue for local businesses.",
};

/* ── SVG Icons (inline for zero deps) ── */
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const BoltIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);
const MoonIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M5 12h14" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const TrendUpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
  </svg>
);

/* ── Star rating helper ── */
const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5 text-brand-amber">
    {Array.from({ length: count }).map((_, i) => (
      <StarIcon key={i} />
    ))}
  </div>
);

/* ── Case study data ── */
const caseStudies = [
  {
    icon: <PhoneIcon />,
    color: "blue" as const,
    tag: "Dental",
    business: "Martinez Family Dental",
    location: "Riverside, CA",
    challenge:
      "During peak hours, the front desk was overwhelmed. With two hygienists, one dentist, and a single receptionist, the practice was missing 20+ calls per week. Patients calling for cleanings, emergency appointments, and insurance questions were going straight to voicemail — and most never called back.",
    solution:
      "DeskWolf deployed an AI Receptionist trained on Martinez Family Dental's full service menu, insurance accepted, and scheduling rules. The agent handles inbound calls 24/7, answers FAQs, books appointments directly into their practice management system, and sends text confirmations to patients.",
    results: [
      { metric: "$4,200", label: "Revenue recovered in first 60 days" },
      { metric: "100%", label: "Calls answered (zero missed)" },
      { metric: "23", label: "New patients booked by AI in month one" },
      { metric: "< 1s", label: "Average answer time" },
    ],
    quote: "We had no idea how much money was walking out the door. DeskWolf paid for itself in the first two weeks.",
    person: "Dr. Maria Martinez",
    role: "Owner, Martinez Family Dental",
  },
  {
    icon: <BoltIcon />,
    color: "amber" as const,
    tag: "HVAC",
    business: "Peak HVAC Services",
    location: "Denver, CO",
    challenge:
      "The owner and lead technician were on job sites 10+ hours a day. Calls from potential customers — many worth $500 or more per service call — were going to voicemail. By the time they returned calls at the end of the day, most prospects had already hired a competitor.",
    solution:
      "DeskWolf deployed an AI Receptionist for inbound calls and a Call-Back Agent to recover any calls that slipped through. The AI books service appointments, provides instant quotes for common jobs, and routes emergency calls directly to the on-call technician.",
    results: [
      { metric: "34", label: "Service calls booked in first month" },
      { metric: "$18,700", label: "Revenue from AI-booked jobs (month one)" },
      { metric: "0", label: "Calls going to voicemail" },
      { metric: "24/7", label: "Coverage including weekends" },
    ],
    quote: "I was losing jobs every single day and didn't even know it. Now my phone is handled whether I'm on a roof or asleep.",
    person: "Derek Simmons",
    role: "Owner, Peak HVAC Services",
  },
  {
    icon: <MoonIcon />,
    color: "green" as const,
    tag: "Med Spa",
    business: "Sunrise Med Spa",
    location: "Scottsdale, AZ",
    challenge:
      "Sunrise Med Spa's busiest inquiry window was evenings and weekends — exactly when no one was answering the phone. After-hours calls were going to a generic voicemail, and follow-up was inconsistent. They estimated 30-40% of first-time callers never rebooked after reaching voicemail.",
    solution:
      "DeskWolf deployed a 24/7 AI Receptionist with full service knowledge — from Botox and filler pricing to package deals and membership plans. The agent books consultations, answers treatment questions, and sends follow-up texts with booking links after every call.",
    results: [
      { metric: "47%", label: "Increase in after-hours bookings" },
      { metric: "62", label: "Consultations booked by AI (first 90 days)" },
      { metric: "$31,000", label: "Estimated revenue from AI-booked consults" },
      { metric: "4.9/5", label: "Caller satisfaction rating" },
    ],
    quote: "Our clients don't even realize they're talking to AI. The booking rate after hours went from almost nothing to nearly half our total appointments.",
    person: "Jessica Nguyen",
    role: "Practice Manager, Sunrise Med Spa",
  },
];

/* ── Testimonial data ── */
const testimonials = [
  {
    quote: "We switched from a traditional answering service and cut our costs in half while actually booking more appointments. Should have done this a year ago.",
    name: "Tom Hadley",
    role: "Office Manager",
    business: "Bright Smile Orthodontics",
  },
  {
    quote: "The speed-to-lead difference is unreal. Before DeskWolf, we'd return calls hours later. Now every inquiry gets a response in under a second. Our close rate doubled.",
    name: "Rachel Park",
    role: "Owner",
    business: "Park & Associates Insurance",
  },
  {
    quote: "I was skeptical about AI handling my calls. Then I listened to the recordings. The agent sounds more professional than most receptionists I've hired.",
    name: "Marcus Bell",
    role: "Founder",
    business: "Bell Plumbing & Mechanical",
  },
  {
    quote: "What sold me was the transparency. My accounts, my data, my tools. DeskWolf set everything up under my name and never tried to lock me in.",
    name: "Sarah Coleman",
    role: "Practice Owner",
    business: "Coleman Chiropractic",
  },
  {
    quote: "We run three locations. Before DeskWolf, we needed a receptionist at each one. Now one AI system handles all three, 24/7, for less than half the cost of one employee.",
    name: "James Whitaker",
    role: "CEO",
    business: "Whitaker Auto Group",
  },
  {
    quote: "The after-hours coverage alone was worth it. We were losing weekend leads to competitors who picked up the phone. That's over now.",
    name: "Linda Castillo",
    role: "Operations Director",
    business: "Castillo Property Management",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] min-h-[70vh] flex items-center pt-[140px] pb-[100px]">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">Proven Results</span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-[18px] max-w-[800px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Real Results from{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              Real Businesses.
            </span>
          </h1>

          <p className="text-[clamp(16px,1.6vw,18px)] text-text-2 max-w-[620px] mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            These aren&rsquo;t hypotheticals. Every number below comes from businesses that were losing revenue to missed calls&nbsp;&mdash; until they weren&rsquo;t.
          </p>

          <div className="flex gap-3 flex-wrap justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white text-[#0F172A] shadow-[0_4px_20px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]">
              Book a Free Demo
            </a>
            <a href="#testimonials" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
              Read Testimonials
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ CASE STUDIES ════════════ */}
      <section className="relative z-[2] py-[120px]" id="case-studies">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Case Studies</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              The numbers speak<br />
              <span className="font-light text-text-2">for themselves.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-16 mt-16">
            {caseStudies.map((study, i) => (
              <div key={study.business} className={`rv d${(i % 3) + 1}`}>
                <GlassCard className="p-0 overflow-hidden">
                  {/* Header */}
                  <div className="p-8 pb-0 flex items-start gap-5 flex-wrap sm:flex-nowrap">
                    <GradientIcon color={study.color}>{study.icon}</GradientIcon>
                    <div className="flex-1 min-w-[200px]">
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <span className="font-mono text-[10px] tracking-[0.08em] uppercase px-3 py-1 rounded-[100px] bg-white/[0.06] border border-white/10 text-text-3 font-medium">{study.tag}</span>
                        <span className="text-[12px] text-text-3">{study.location}</span>
                      </div>
                      <h3 className="text-[clamp(22px,3vw,28px)] font-extrabold text-text">{study.business}</h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left — challenge & solution */}
                    <div>
                      <h4 className="text-[15px] font-extrabold text-text mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        The Challenge
                      </h4>
                      <p className="text-sm text-text-3 leading-relaxed mb-6">{study.challenge}</p>

                      <h4 className="text-[15px] font-extrabold text-text mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-green" />
                        The Solution
                      </h4>
                      <p className="text-sm text-text-3 leading-relaxed">{study.solution}</p>
                    </div>

                    {/* Right — results */}
                    <div>
                      <h4 className="text-[15px] font-extrabold text-text mb-4 flex items-center gap-2">
                        <GradientIcon color="green"><TrendUpIcon /></GradientIcon>
                        Results
                      </h4>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {study.results.map((r) => (
                          <div key={r.label} className="p-4 bg-white/[0.04] rounded-[var(--radius-sm)] border border-white/[0.06]">
                            <div className="font-extrabold text-[22px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">{r.metric}</div>
                            <div className="font-mono text-[10px] tracking-[0.06em] uppercase text-text-3 mt-1">{r.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Quote */}
                      <div className="italic text-[15px] text-text leading-relaxed p-5 bg-white/[0.04] backdrop-blur-[16px] border-l-[3px] border-l-brand-purple rounded-r-[var(--radius-sm)]">
                        &ldquo;{study.quote}&rdquo;
                        <div className="mt-2 text-[12px] text-text-3 not-italic font-medium">
                          &mdash; {study.person}, {study.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ TESTIMONIALS ════════════ */}
      <section className="relative z-[2] py-[120px]" id="testimonials">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-purple">Testimonials</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              What our clients say.<br />
              <span className="font-light text-text-2">Unfiltered.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {testimonials.map((t, i) => (
              <GlassCard key={t.name} className={`p-8 rv d${(i % 3) + 1}`}>
                <Stars />
                <p className="text-[15px] text-text-2 leading-relaxed mt-4 mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-white/[0.06] pt-4">
                  <div className="text-[15px] font-extrabold text-text">{t.name}</div>
                  <div className="font-mono text-[11px] tracking-[0.06em] text-text-3">{t.role}, {t.business}</div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative z-[2] py-[120px]" id="cta">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="text-center max-w-[600px] mx-auto rv">
            <h2 className="text-[clamp(30px,4vw,46px)] mb-4">
              Ready to be our{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                next case study?
              </span>
            </h2>
            <p className="text-[17px] text-text-2 mb-8">
              Book a free demo and see exactly how DeskWolf would work for your business. No pressure, no commitment&nbsp;&mdash; just a live walkthrough.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
                Book a Free Demo
                <ArrowRightIcon />
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
                Contact Us
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
