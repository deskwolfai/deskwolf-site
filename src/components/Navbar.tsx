"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const resourceLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "ROI Calculator", href: "/resources/roi-calculator" },
  { label: "Missed Call Calculator", href: "/resources/missed-call-calculator" },
  { label: "Front Desk Blueprint", href: "/resources/front-desk-blueprint" },
  { label: "AI Glossary", href: "/glossary" },
  { label: "Blog", href: "/blog" },
  { label: "Knowledge Base", href: "/knowledge-base" },
];

const productLinks = [
  { label: "AI Receptionist", href: "/ai-receptionist" },
  { label: "Lead Qualifier", href: "/lead-qualifier" },
  { label: "A.N.G.E.L.", href: "/products/angel", accent: true },
];

const links = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
];

function Dropdown({ label, items, open, onToggle, onClose }: {
  label: string;
  items: { label: string; href: string; accent?: boolean }[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="text-[13px] font-medium text-text-2 px-3.5 py-2 rounded-[100px] transition-all duration-200 hover:bg-brand-purple/15 hover:text-brand-purple bg-transparent border-none cursor-pointer flex items-center gap-1"
      >
        {label}
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[220px] bg-[rgba(12,14,20,0.95)] backdrop-blur-[24px] border border-white/[0.08] rounded-[16px] p-2 shadow-[0_16px_48px_rgba(0,0,0,0.3)] z-[110]">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`block text-[13px] font-medium no-underline px-3.5 py-2.5 rounded-[10px] transition-all duration-200 hover:bg-brand-purple/15 ${
                item.accent
                  ? "text-brand-purple font-semibold"
                  : "text-text-2 hover:text-brand-purple"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] px-6 pr-2 py-2 backdrop-blur-[24px] saturate-[1.6] border border-white/[0.08] rounded-[100px] flex items-center gap-1 max-w-[1020px] w-[calc(100%-24px)] transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(12,14,20,0.9)] shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
            : "bg-[rgba(12,14,20,0.7)] shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
        }`}
        style={{ boxShadow: scrolled ? undefined : "0 4px 24px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.06)" }}
      >
        <Link href="/" className="font-extrabold text-[17px] text-text flex items-center gap-2 mr-auto no-underline">
          <div className="w-7 h-7 bg-gradient-to-br from-brand-blue to-brand-purple rounded-lg flex items-center justify-center text-[13px] text-white font-extrabold">
            W
          </div>
          DeskWolf
        </Link>

        <ul className="hidden lg:flex gap-0.5 list-none items-center">
          <li>
            <Dropdown
              label="Products"
              items={productLinks}
              open={openDropdown === "products"}
              onToggle={() => setOpenDropdown(openDropdown === "products" ? null : "products")}
              onClose={() => setOpenDropdown(null)}
            />
          </li>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[13px] font-medium text-text-2 no-underline px-3.5 py-2 rounded-[100px] transition-all duration-200 hover:bg-brand-purple/15 hover:text-brand-purple"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Dropdown
              label="Resources"
              items={resourceLinks}
              open={openDropdown === "resources"}
              onToggle={() => setOpenDropdown(openDropdown === "resources" ? null : "resources")}
              onClose={() => setOpenDropdown(null)}
            />
          </li>
        </ul>

        <Link
          href="/demo"
          className="hidden lg:block text-[13px] font-semibold text-[#0F172A] bg-white px-5 py-2.5 rounded-[100px] no-underline transition-all duration-250 hover:bg-[#E2E8F0] hover:scale-[1.03]"
        >
          Book a Demo
        </Link>

        {/* Hamburger */}
        <button
          className="lg:hidden relative w-8 h-8 bg-transparent border-none cursor-pointer p-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block absolute left-[7px] w-[18px] h-0.5 bg-text rounded-sm transition-all duration-300 ${menuOpen ? "top-[15px] rotate-45" : "top-[10px]"}`} />
          <span className={`block absolute left-[7px] w-[18px] h-0.5 bg-text rounded-sm transition-all duration-300 top-[15px] ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block absolute left-[7px] w-[18px] h-0.5 bg-text rounded-sm transition-all duration-300 ${menuOpen ? "top-[15px] -rotate-45" : "top-[20px]"}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[99] bg-[rgba(8,9,13,0.97)] backdrop-blur-[40px] flex flex-col items-center justify-center gap-4 overflow-y-auto py-20">
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-text-3 mb-1">Products</span>
          {productLinks.map((l) => (
            <Link key={l.href} href={l.href} className={`text-[20px] font-semibold no-underline ${l.accent ? "text-brand-purple" : "text-text hover:text-brand-purple"}`} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="w-12 h-px bg-white/10 my-2" />
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[20px] font-semibold text-text no-underline hover:text-brand-purple" onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="w-12 h-px bg-white/10 my-2" />
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-text-3 mb-1">Resources</span>
          {resourceLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-[18px] font-semibold text-text-2 no-underline hover:text-brand-purple" onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="w-12 h-px bg-white/10 my-2" />
          <Link href="/demo" className="text-[20px] font-semibold text-brand-purple no-underline" onClick={() => setMenuOpen(false)}>
            Book a Demo
          </Link>
        </div>
      )}
    </>
  );
}
