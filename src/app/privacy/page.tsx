import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Privacy Policy — DeskWolf LLC",
  description:
    "How DeskWolf LLC collects, uses, and protects your personal information. Effective March 2026.",
};

export default function PrivacyPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] pt-[160px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] text-center">
          <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue rv">Legal</span>
          <h1 className="text-[clamp(36px,5.5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-4 rv d1">
            Privacy Policy
          </h1>
          <p className="text-[17px] text-text-2 max-w-[520px] mx-auto rv d2">
            Effective date: March 2026 &middot; Last updated: March 2026
          </p>
        </div>
      </section>

      {/* ════════════ CONTENT ════════════ */}
      <section className="relative z-[2] pb-[120px]">
        <div className="max-w-[800px] mx-auto px-[clamp(20px,5vw,64px)]">
          <div className="rv d3 space-y-12 text-[16px] text-text-2 leading-relaxed [&_h2]:text-[clamp(22px,3vw,28px)] [&_h2]:font-extrabold [&_h2]:text-text [&_h2]:mb-4 [&_h3]:text-[18px] [&_h3]:font-bold [&_h3]:text-text [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul_li]:mb-2">

            <div>
              <p>
                DeskWolf LLC (&ldquo;DeskWolf,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website deskwolf.ai and provides AI-powered voice agent, CRM automation, and consulting services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of our services.
              </p>
            </div>

            <div>
              <h2>1. Information We Collect</h2>

              <h3>Information You Provide Directly</h3>
              <ul>
                <li><strong>Contact form submissions:</strong> Name, email address, phone number, company name, and the content of your message.</li>
                <li><strong>Demo bookings:</strong> Name, email, phone number, business type, and scheduling preferences.</li>
                <li><strong>Newsletter signups:</strong> Email address.</li>
                <li><strong>Service onboarding:</strong> Business information, phone system credentials, CRM access details, and calendar configurations necessary to deploy and manage your AI systems.</li>
              </ul>

              <h3>Information Collected Automatically</h3>
              <ul>
                <li><strong>Usage data:</strong> Pages visited, time spent on pages, click patterns, and referring URLs.</li>
                <li><strong>Device information:</strong> Browser type, operating system, screen resolution, and IP address.</li>
                <li><strong>Call data:</strong> When AI voice agents are deployed for your business, we process call metadata (timestamps, duration, caller phone numbers) and call recordings as part of service delivery. This data belongs to you.</li>
              </ul>
            </div>

            <div>
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul>
                <li><strong>Service delivery:</strong> To deploy, configure, and manage AI voice agents, CRM automations, and related systems on your behalf.</li>
                <li><strong>Communication:</strong> To respond to inquiries, send appointment confirmations, provide service updates, and deliver requested information.</li>
                <li><strong>Service improvement:</strong> To analyze usage patterns, diagnose technical issues, and improve the performance and reliability of our systems.</li>
                <li><strong>Marketing:</strong> To send newsletter content to subscribers who have opted in. You can unsubscribe at any time.</li>
                <li><strong>Legal compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
              </ul>
              <p>We do not sell your personal information. We do not use your data for advertising purposes.</p>
            </div>

            <div>
              <h2>3. Third-Party Services</h2>
              <p>We use the following third-party services to operate our business and deliver our services. Each has its own privacy policy governing its use of data:</p>
              <ul>
                <li><strong>GoHighLevel (CRM):</strong> Contact management, appointment scheduling, and communication workflows. Data processed includes contact information and interaction history.</li>
                <li><strong>VAPI (Voice AI):</strong> AI voice agent infrastructure for call handling. Processes call audio, transcriptions, and caller metadata.</li>
                <li><strong>Google Analytics:</strong> Website traffic analysis. Collects anonymized usage data including pages visited, session duration, and geographic region.</li>
                <li><strong>Vercel (Hosting):</strong> Website hosting and content delivery. Processes server logs including IP addresses and request data.</li>
                <li><strong>Stripe / Payment processors:</strong> Payment processing for service subscriptions. We do not store credit card numbers on our servers.</li>
              </ul>
              <p>We only share information with third parties to the extent necessary to deliver our services. We do not share your data with third parties for their own marketing purposes.</p>
            </div>

            <div>
              <h2>4. Data Retention</h2>
              <p>We retain your personal information for as long as your account is active or as needed to provide you services. Specifically:</p>
              <ul>
                <li><strong>Active clients:</strong> Data is retained for the duration of the service relationship plus 90 days after termination to facilitate transitions.</li>
                <li><strong>Contact form submissions:</strong> Retained for up to 24 months unless you request earlier deletion.</li>
                <li><strong>Newsletter subscribers:</strong> Email addresses are retained until you unsubscribe.</li>
                <li><strong>Call recordings and transcripts:</strong> Retained according to your service agreement. These belong to you and are deleted upon request.</li>
              </ul>
              <p>You may request deletion of your data at any time by emailing <a href="mailto:contact@deskwolf.ai" className="text-brand-purple hover:text-brand-cyan transition-colors">contact@deskwolf.ai</a>.</p>
            </div>

            <div>
              <h2>5. Cookies</h2>
              <p>Our website uses cookies for the following purposes:</p>
              <ul>
                <li><strong>Essential cookies:</strong> Required for basic website functionality such as navigation and form submissions.</li>
                <li><strong>Analytics cookies:</strong> Used by Google Analytics to understand how visitors interact with our website. These cookies collect anonymized data.</li>
              </ul>
              <p>We do not use advertising cookies, retargeting cookies, or third-party tracking cookies for ad networks. You can disable cookies through your browser settings, though some website features may not function properly without essential cookies.</p>
            </div>

            <div>
              <h2>6. Your Rights</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> You may request a copy of the personal information we hold about you.</li>
                <li><strong>Correction:</strong> You may request that we correct inaccurate or incomplete personal information.</li>
                <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to legal retention requirements.</li>
                <li><strong>Opt-out:</strong> You may unsubscribe from marketing communications at any time using the unsubscribe link in any email or by contacting us directly.</li>
                <li><strong>Data portability:</strong> You may request your data in a structured, commonly used format.</li>
              </ul>
              <p>To exercise any of these rights, contact us at <a href="mailto:contact@deskwolf.ai" className="text-brand-purple hover:text-brand-cyan transition-colors">contact@deskwolf.ai</a>. We will respond to all requests within 30 days.</p>
            </div>

            <div>
              <h2>7. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encrypted data transmission (TLS/SSL), secure credential storage, access controls, and regular security reviews.</p>
              <p>However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2>8. Children&rsquo;s Privacy</h2>
              <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child under 18, we will take steps to delete that information promptly. If you believe we have collected information from a minor, please contact us at <a href="mailto:contact@deskwolf.ai" className="text-brand-purple hover:text-brand-cyan transition-colors">contact@deskwolf.ai</a>.</p>
            </div>

            <div>
              <h2>9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. When we make material changes, we will update the &ldquo;Last updated&rdquo; date at the top of this page and, where appropriate, notify you by email. Your continued use of our services after any changes constitutes acceptance of the updated policy.</p>
            </div>

            <div>
              <h2>10. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or our data practices, contact us at:</p>
              <div className="p-6 bg-white/[0.04] backdrop-blur-[16px] border border-white/[0.08] rounded-[var(--radius-std)] mt-4">
                <p className="mb-1"><strong className="text-text">DeskWolf LLC</strong></p>
                <p className="mb-1">San Bernardino, CA 92407</p>
                <p className="mb-0">
                  Email: <a href="mailto:contact@deskwolf.ai" className="text-brand-purple hover:text-brand-cyan transition-colors">contact@deskwolf.ai</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
