import Link from "next/link";

const productLinks = [
  { label: "AI Receptionist", href: "/services#core" },
  { label: "Lead Qualifier", href: "/services#core" },
  { label: "Call-Back Agent", href: "/services#core" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Free Tools", href: "https://tools.deskwolf.ai" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-[2] pt-16 pb-7 bg-white/[0.03] backdrop-blur-[16px] border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-[17px] mb-3 flex items-center gap-2">
              <div className="w-[22px] h-[22px] bg-gradient-to-br from-brand-blue to-brand-purple rounded-md flex items-center justify-center text-[11px] text-white font-extrabold">
                W
              </div>
              DeskWolf LLC
            </h3>
            <p className="text-sm text-text-3 max-w-[260px] leading-relaxed">
              Done-for-you voice AI and automation systems for businesses that
              live by the phone.
            </p>
            <div className="font-mono text-[11px] text-text-3 mt-3">
              San Bernardino, CA — Est. 2026
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-text-3 mb-4">
              Products
            </h4>
            <ul className="list-none">
              {productLinks.map((l) => (
                <li key={l.href} className="mb-2">
                  <Link
                    href={l.href}
                    className="text-sm text-text-2 no-underline transition-colors duration-200 hover:text-brand-cyan"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-text-3 mb-4">
              Company
            </h4>
            <ul className="list-none">
              {companyLinks.map((l) => (
                <li key={l.href} className="mb-2">
                  <Link
                    href={l.href}
                    className="text-sm text-text-2 no-underline transition-colors duration-200 hover:text-brand-cyan"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-text-3 mb-4">
              Legal
            </h4>
            <ul className="list-none">
              {legalLinks.map((l) => (
                <li key={l.href} className="mb-2">
                  <Link
                    href={l.href}
                    className="text-sm text-text-2 no-underline transition-colors duration-200 hover:text-brand-cyan"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-white/[0.06] gap-3 text-center">
          <p className="text-xs text-text-3">
            &copy; 2026 DeskWolf LLC. All rights reserved.
          </p>
          <div className="font-mono text-[11px] font-medium tracking-[0.08em] text-text-3">
            EVERY CALL
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              .
            </span>{" "}
            HANDLED
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
              .
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
