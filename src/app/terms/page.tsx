import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Terms of Service — DeskWolf LLC",
  description:
    "Terms and conditions governing DeskWolf LLC services including AI voice agents, CRM automation, and consulting. Effective March 2026.",
};

export default function TermsPage() {
  return (
    <div className="relative overflow-hidden">
      <Aurora />
      <Navbar />
      <RevealObserver />

      {/* ════════════ HERO ════════════ */}
      <section className="relative z-[2] pt-[160px] pb-[80px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,3.5vw,40px)] text-center">
          <span className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-brand-blue rv">Legal</span>
          <h1 className="text-[clamp(36px,5.5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text mb-4 rv d1">
            Terms of Service
          </h1>
          <p className="text-[17px] text-text-2 max-w-[520px] mx-auto rv d2">
            Effective date: March 2026 &middot; Last updated: March 2026
          </p>
        </div>
      </section>

      {/* ════════════ CONTENT ════════════ */}
      <section className="relative z-[2] pb-[120px]">
        <div className="max-w-[800px] mx-auto px-[clamp(16px,3.5vw,40px)]">
          <div className="rv d3 space-y-12 text-[16px] text-text-2 leading-relaxed [&_h2]:text-[clamp(22px,3vw,28px)] [&_h2]:font-extrabold [&_h2]:text-text [&_h2]:mb-4 [&_h3]:text-[18px] [&_h3]:font-bold [&_h3]:text-text [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul_li]:mb-2">

            <div>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the services provided by DeskWolf LLC (&ldquo;DeskWolf,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a California limited liability company. By engaging our services or using our website at deskwolf.ai, you agree to be bound by these Terms.
              </p>
            </div>

            <div>
              <h2>1. Services Provided</h2>
              <p>DeskWolf provides the following services, subject to the scope defined in your individual service agreement:</p>
              <ul>
                <li><strong>AI voice agent deployment:</strong> Design, build, and manage AI-powered phone agents that handle inbound calls, qualify leads, book appointments, and follow up with customers on your behalf.</li>
                <li><strong>CRM automation:</strong> Configuration and management of customer relationship management systems, including contact workflows, pipeline automation, and reporting.</li>
                <li><strong>Consulting:</strong> Strategic advisory on AI adoption, business process optimization, and technology integration.</li>
                <li><strong>Content creation:</strong> Production of marketing materials, case studies, and business documentation as specified in your service agreement.</li>
              </ul>
              <p>The specific scope, deliverables, and timeline for your engagement are defined in your individual service agreement or statement of work.</p>
            </div>

            <div>
              <h2>2. Subscription and Payment Terms</h2>

              <h3>Subscription Structure</h3>
              <p>After initial setup and deployment, all DeskWolf services operate on a month-to-month subscription basis. There are no long-term contracts or annual commitments required.</p>

              <h3>Initial Setup</h3>
              <p>Some services require a one-time setup fee to cover deployment, configuration, and training of AI systems. This fee is specified in your service agreement and is due before work begins.</p>

              <h3>Monthly Subscription</h3>
              <p>Monthly service fees are invoiced at the beginning of each billing cycle and are due upon receipt. Late payments may result in service suspension after a 7-day grace period with written notice.</p>

              <h3>Tool Costs</h3>
              <p>Third-party tool costs (API usage, telephony minutes, CRM subscriptions) are passed through at cost with no markup. These costs are billed separately or itemized on your monthly invoice.</p>

              <h3>Cancellation</h3>
              <p>Either party may cancel the subscription with 30 days written notice. See Section 8 (Termination) for details on the cancellation and transition process.</p>
            </div>

            <div>
              <h2>3. Tool Ownership and Client Data</h2>
              <p>DeskWolf operates on a zero vendor lock-in principle. This means:</p>
              <ul>
                <li><strong>API accounts:</strong> All third-party accounts (CRM, telephony, AI platforms) are set up under your name or your business entity. You own these accounts.</li>
                <li><strong>Data ownership:</strong> All customer data, call recordings, transcripts, contact lists, and analytics generated through our services belong to you.</li>
                <li><strong>Configurations:</strong> AI agent configurations, workflow automations, CRM pipelines, and integrations we build for you are your property.</li>
                <li><strong>Credentials:</strong> All API keys, login credentials, and access tokens for your tools remain under your control.</li>
              </ul>
              <p>If you terminate your service, you retain full ownership and access to all accounts, data, and configurations. Nothing is held hostage.</p>
            </div>

            <div>
              <h2>4. Acceptable Use</h2>
              <p>You agree not to use DeskWolf services to:</p>
              <ul>
                <li>Engage in any activity that violates local, state, federal, or international law.</li>
                <li>Send unsolicited bulk communications (spam) through AI voice agents or automated systems.</li>
                <li>Misrepresent AI-generated communications as human when legally required to disclose.</li>
                <li>Abuse, overload, or deliberately disrupt AI systems, telephony infrastructure, or third-party platforms.</li>
                <li>Collect or process personal data in violation of applicable privacy laws (CCPA, GDPR, TCPA, etc.).</li>
                <li>Use AI agents to harass, threaten, or deceive any individual.</li>
                <li>Resell DeskWolf services without prior written authorization.</li>
              </ul>
              <p>Violation of these terms may result in immediate suspension or termination of services without refund.</p>
            </div>

            <div>
              <h2>5. Limitation of Liability</h2>
              <p>To the maximum extent permitted by applicable law:</p>
              <ul>
                <li>DeskWolf shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of revenue, lost profits, loss of data, or business interruption.</li>
                <li>DeskWolf&rsquo;s total aggregate liability for any claims arising out of or related to these Terms or our services shall not exceed the total fees paid by you to DeskWolf during the three (3) months immediately preceding the event giving rise to the claim.</li>
                <li>DeskWolf is not liable for service disruptions, outages, or errors caused by third-party platforms (including but not limited to telephony providers, CRM platforms, and AI infrastructure providers) that are beyond our reasonable control.</li>
              </ul>
              <p>This limitation of liability applies regardless of the legal theory on which the claim is based, including breach of contract, negligence, strict liability, or any other theory.</p>
            </div>

            <div>
              <h2>6. Intellectual Property</h2>

              <h3>DeskWolf&rsquo;s Intellectual Property</h3>
              <p>DeskWolf retains all intellectual property rights in its proprietary systems, frameworks, methodologies, tools, and processes used to deliver services. This includes our internal orchestration systems, deployment workflows, and operational infrastructure.</p>

              <h3>Client Intellectual Property</h3>
              <p>You retain all rights to your business data, brand assets, customer information, and any content you provide to us. Configurations, automations, and AI agent setups built specifically for your business are your property as outlined in Section 3.</p>

              <h3>Feedback</h3>
              <p>If you provide suggestions, ideas, or feedback about our services, we may use that feedback to improve our offerings without obligation to compensate you, unless otherwise agreed in writing.</p>
            </div>

            <div>
              <h2>7. Warranties and Disclaimers</h2>
              <p>DeskWolf provides services with reasonable skill and care. However:</p>
              <ul>
                <li>We do not guarantee specific business outcomes, revenue increases, or lead conversion rates.</li>
                <li>AI systems operate probabilistically and may occasionally produce unexpected responses. We continuously monitor and optimize agent performance but cannot guarantee 100% accuracy.</li>
                <li>Services are provided &ldquo;as is&rdquo; to the extent permitted by law, without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.</li>
              </ul>
            </div>

            <div>
              <h2>8. Termination</h2>

              <h3>By Either Party</h3>
              <p>Either party may terminate the service agreement with 30 days written notice sent to the other party&rsquo;s designated contact email.</p>

              <h3>Transition Assistance</h3>
              <p>Upon termination, DeskWolf will provide reasonable transition assistance to ensure continuity of your operations. This includes:</p>
              <ul>
                <li>Documentation of all active configurations and workflows.</li>
                <li>Transfer of any credentials or access still managed by DeskWolf.</li>
                <li>A transition call to walk through your systems and answer questions.</li>
                <li>30 days of email support for transition-related questions after the final service date.</li>
              </ul>

              <h3>Immediate Termination</h3>
              <p>DeskWolf reserves the right to terminate services immediately and without notice in cases of material breach of these Terms, including violations of the Acceptable Use policy, non-payment exceeding 30 days, or illegal activity.</p>
            </div>

            <div>
              <h2>9. Indemnification</h2>
              <p>You agree to indemnify and hold harmless DeskWolf LLC, its officers, employees, and agents from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your use of our services, your violation of these Terms, or your violation of any applicable law or regulation.</p>
            </div>

            <div>
              <h2>10. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the state or federal courts located in San Bernardino County, California.</p>
            </div>

            <div>
              <h2>11. Modifications</h2>
              <p>We reserve the right to modify these Terms at any time. When we make material changes, we will update the &ldquo;Last updated&rdquo; date at the top of this page and notify active clients by email at least 15 days before the changes take effect. Your continued use of our services after the effective date constitutes acceptance of the modified Terms.</p>
            </div>

            <div>
              <h2>12. Severability</h2>
              <p>If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>
            </div>

            <div>
              <h2>13. Contact</h2>
              <p>For questions about these Terms, contact us at:</p>
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
