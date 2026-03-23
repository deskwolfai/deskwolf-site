import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import GradientIcon from "@/components/GradientIcon";
import RevealObserver from "@/components/RevealObserver";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "A.N.G.E.L. | DeskWolf LLC",
  description:
    "Meet A.N.G.E.L., DeskWolf's flagship AI All-in-One Assistant. Autonomous Networked General Enterprise Layer. Application only.",
  openGraph: {
    title: "A.N.G.E.L. | DeskWolf LLC",
    description:
      "Meet A.N.G.E.L., DeskWolf's flagship AI All-in-One Assistant. Application only.",
    url: "https://deskwolf.ai/products/angel",
    siteName: "DeskWolf",
    type: "website",
  },
};

/* ── SVG Icons for feature grid (inline for zero deps) ── */
const MicIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>;
const CRMIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>;
const PenIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>;
const SearchIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>;
const MailIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
const CalendarIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
const UserCheckIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" /></svg>;
const ChartIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>;
const ShareIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>;
const FileIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>;
const DollarIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>;
const UserPlusIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>;
const ActivityIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>;
const GlobeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>;
const PuzzleIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.61-1.61a2.404 2.404 0 0 1 1.705-.707c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02z" /></svg>;
const EyeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>;
const BookIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>;
const BoltIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>;
const ClockIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
const MessageIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
const MailboxIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg>;
const LayoutIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>;
const VideoIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>;
const ImageIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>;
const FileTextIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>;
const ListIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>;
const CompassIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>;

/* ── Feature tiles data ── */
const features = [
  { icon: <MicIcon />, title: "Voice Agent Management" },
  { icon: <CRMIcon />, title: "CRM Automation" },
  { icon: <PenIcon />, title: "Content Generation" },
  { icon: <SearchIcon />, title: "Research & Analysis" },
  { icon: <MailIcon />, title: "Email Automation" },
  { icon: <CalendarIcon />, title: "Calendar Management" },
  { icon: <UserCheckIcon />, title: "Lead Qualification" },
  { icon: <ChartIcon />, title: "Call Analytics" },
  { icon: <ShareIcon />, title: "Social Media Management" },
  { icon: <FileIcon />, title: "Report Generation" },
  { icon: <BoltIcon />, title: "Data Pipeline Automation" },
  { icon: <PuzzleIcon />, title: "Workflow Orchestration" },
  { icon: <FileTextIcon />, title: "Document Processing" },
  { icon: <DollarIcon />, title: "Cost Optimization" },
  { icon: <UserPlusIcon />, title: "Client Onboarding" },
  { icon: <ActivityIcon />, title: "Performance Monitoring" },
  { icon: <GlobeIcon />, title: "Multi-Language Support" },
  { icon: <PuzzleIcon />, title: "API Integration Hub" },
  { icon: <EyeIcon />, title: "Competitive Intelligence" },
  { icon: <BookIcon />, title: "Brand Voice Training" },
  { icon: <DollarIcon />, title: "Invoice & Billing Automation" },
  { icon: <BookIcon />, title: "Knowledge Base Management" },
  { icon: <CalendarIcon />, title: "Appointment Scheduling" },
  { icon: <ClockIcon />, title: "Follow-Up Sequences" },
  { icon: <MessageIcon />, title: "Discord Bot Management" },
  { icon: <MailboxIcon />, title: "Google Workspace Integration" },
  { icon: <LayoutIcon />, title: "Webflow Site Management" },
  { icon: <VideoIcon />, title: "Video & Audio Processing" },
  { icon: <ImageIcon />, title: "Image Generation" },
  { icon: <FileTextIcon />, title: "PDF & Document Creation" },
  { icon: <ListIcon />, title: "Task Prioritization" },
  { icon: <CompassIcon />, title: "Strategic Advisory" },
];

/* ── Color cycle for feature tiles ── */
const colorCycle: Array<"blue" | "green" | "amber" | "purple" | "cyan"> = ["blue", "purple", "green", "amber", "cyan"];

export default function AngelPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] min-h-[80vh] flex items-center pt-[140px] pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] w-full text-center">
          {/* Application Only badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 pl-2.5 bg-white/[0.06] border border-white/10 rounded-[100px] mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse-dot" />
            <span className="text-sm text-text-2">Application Only</span>
          </div>

          <h1 className="text-[clamp(40px,6vw,72px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-text mb-3 max-w-[900px] mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Meet{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              A.N.G.E.L.
            </span>
          </h1>

          <p className="text-[clamp(18px,2vw,24px)] text-text-2 font-light max-w-[600px] mx-auto mb-2 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Our Flagship AI All-in-One Assistant
          </p>

          <p className="font-mono text-[12px] tracking-[0.08em] uppercase text-text-3 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Autonomous Networked General Enterprise Layer
          </p>

          <p className="text-[clamp(15px,1.5vw,17px)] text-text-2 max-w-[640px] mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            A.N.G.E.L. is not a chatbot. She&rsquo;s a full AI operations system that handles everything from research and content creation to CRM automation, voice agent management, reporting, and strategic analysis. She&rsquo;s the brain behind every DeskWolf deployment.
          </p>

          <div className="flex gap-3 flex-wrap justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a href="/contact" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
              Apply for Access
            </a>
            <a href="#capabilities" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-white/[0.06] text-text backdrop-blur-[12px] border border-glass-border transition-all duration-300 hover:bg-white/90 hover:-translate-y-[3px] hover:shadow-[var(--shadow-std)]">
              See What She Can Do
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ CAPABILITIES GRID ════════════ */}
      <section className="relative z-[2] py-[120px]" id="capabilities">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="text-center max-w-[560px] mx-auto rv">
            <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-purple">Capabilities</span>
            <h2 className="text-[clamp(30px,4vw,46px)] mb-3">
              32 capabilities.{" "}
              <span className="font-light text-text-2">One system.</span>
            </h2>
            <p className="text-[17px] text-text-2">
              Every tool, integration, and workflow, orchestrated by a single AI that understands your business.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 mt-12">
            {features.map((feat, i) => (
              <div
                key={feat.title}
                className={`rv d${(i % 6) + 1}`}
              >
                <GlassCard className="p-4 text-center h-full flex flex-col items-center justify-center gap-2.5 min-h-[110px]">
                  <div className={`w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 bg-gradient-to-br ${
                    colorCycle[i % colorCycle.length] === "blue" ? "from-blue-light to-brand-purple" :
                    colorCycle[i % colorCycle.length] === "green" ? "from-brand-green to-brand-cyan" :
                    colorCycle[i % colorCycle.length] === "amber" ? "from-brand-amber to-[#EF4444]" :
                    colorCycle[i % colorCycle.length] === "purple" ? "from-brand-purple to-[#EC4899]" :
                    "from-brand-cyan to-brand-green"
                  } text-white shadow-sm`}>
                    {feat.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-text leading-tight">{feat.title}</span>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ WHAT SETS ANGEL APART ════════════ */}
      <section className="relative z-[2] py-[120px]" id="difference">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16 items-center">
            {/* Left — visual */}
            <div className="rv flex items-center justify-center">
              <div className="w-[220px] h-[220px] bg-gradient-to-br from-brand-purple/20 via-brand-blue/10 to-brand-cyan/20 backdrop-blur-[16px] border border-white/[0.08] rounded-full flex items-center justify-center shadow-[0_32px_100px_-20px_rgba(139,92,246,0.25)]">
                <span className="text-[64px] font-extrabold bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent select-none leading-none">
                  A.
                </span>
              </div>
            </div>

            {/* Right — content */}
            <div className="rv d2">
              <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue">Not a Chatbot</span>
              <h2 className="text-[clamp(30px,4vw,46px)] mt-2 mb-6">She doesn&rsquo;t just answer questions. She runs operations.</h2>

              <div className="flex flex-col gap-5">
                {[
                  {
                    title: "Orchestration, Not Conversation",
                    desc: "A.N.G.E.L. reads workflows, executes tools, handles failures, and improves systems autonomously. She doesn't wait for prompts. She follows SOPs and makes intelligent decisions.",
                  },
                  {
                    title: "Deterministic Execution",
                    desc: "AI handles reasoning while Python scripts handle execution. Every API call, data transformation, and file operation runs through tested, reliable code, not probabilistic guesses.",
                  },
                  {
                    title: "Self-Improving System",
                    desc: "Every failure makes the system stronger. A.N.G.E.L. identifies what broke, fixes the tool, verifies the fix, and updates the workflow so it never happens again.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start p-5 rounded-[var(--radius-sm)] bg-white/[0.04] border border-white/[0.08] transition-all duration-300 hover:border-brand-purple/30 hover:bg-white/[0.08]">
                    <div>
                      <h4 className="text-[15px] font-bold text-text mb-1">{item.title}</h4>
                      <p className="text-sm text-text-3 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ HOW TO GET ANGEL ════════════ */}
      <section className="relative z-[2] py-[120px]" id="access">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="max-w-[700px] mx-auto rv">
            <GlassCard className="p-10 text-center">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase px-3.5 py-1.5 rounded-[100px] text-white font-medium bg-gradient-to-r from-brand-blue to-brand-purple mb-6">
                Application Only
              </span>
              <h3 className="text-[clamp(24px,3vw,32px)] font-extrabold text-text mb-3">
                How to Get{" "}
                <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">A.N.G.E.L.</span>
              </h3>
              <p className="text-[16px] text-text-2 leading-relaxed max-w-[520px] mx-auto mb-4">
                A.N.G.E.L. is not self-serve. We evaluate your business, your needs, and your readiness. If it&rsquo;s a fit, we onboard you personally.
              </p>
              <p className="text-[14px] text-text-3 leading-relaxed max-w-[480px] mx-auto mb-8">
                This isn&rsquo;t gatekeeping. It&rsquo;s quality control. A.N.G.E.L. is deeply integrated into your operations, and we need to make sure the deployment is set up for success. Every client gets a custom configuration built around their specific workflows, tools, and goals.
              </p>

              <div className="flex flex-col gap-3 text-left max-w-[400px] mx-auto mb-8">
                {[
                  "We learn your business inside and out",
                  "We design a custom deployment plan",
                  "We build, test, and deploy your A.N.G.E.L. instance",
                  "We optimize continuously based on real performance",
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-3 text-[14px] text-text-2">
                    <span className="w-6 h-6 bg-gradient-to-br from-brand-blue to-brand-purple rounded-full flex items-center justify-center shrink-0 text-white text-[11px] font-bold mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </div>
                ))}
              </div>

              <a href="/contact" className="inline-flex items-center gap-2 font-semibold text-sm no-underline px-8 py-3.5 rounded-[100px] bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]">
                Apply for Access
              </a>
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
