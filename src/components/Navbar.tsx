"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";

/* ── Nav Data ── */

const solutionTopLinks = [
  { label: "Pricing & Plans", href: "/pricing" },
];

const productLinks = [
  { label: "All Products", href: "/ai-receptionist", accent: true },
  { label: "AI Receptionist", href: "/ai-receptionist" },
  { label: "Lead Qualifier", href: "/lead-qualifier" },
  { label: "A.N.G.E.L.", href: "/products/angel" },
];

const learnLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Free Resources", href: "/resources" },
  { label: "AI Glossary", href: "/glossary" },
  { label: "Knowledge Base", href: "/knowledge-base" },
];

const aboutTopLinks = [
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
];

const industryLinks = [
  { label: "All Industries", href: "/industries", accent: true },
  { label: "Gyms & Fitness", href: "/industries/gyms-fitness" },
  { label: "Home Services", href: "/industries/home-services" },
  { label: "Restaurants", href: "/industries/restaurants" },
  { label: "Solar & Energy", href: "/industries/solar" },
  { label: "Real Estate", href: "/coming-soon" },
  { label: "Legal", href: "/coming-soon" },
  { label: "Auto Shops", href: "/coming-soon" },
  { label: "Hotels", href: "/coming-soon" },
];

/* ── Chevron ── */
const Chevron = ({ className = "" }: { className?: string }) => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/* ── Dropdown panel styles (fully opaque to prevent bleed-through) ── */
const panelClass = "bg-[#0C0E14] border border-white/[0.08] rounded-[16px] p-2 shadow-[0_16px_48px_rgba(0,0,0,0.5)]";

/* ── Simple Dropdown ── */
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
        <Chevron className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[220px] z-[110] ${panelClass}`}>
          {items.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              onClick={onClose}
              className={`block text-[13px] font-medium no-underline px-3.5 py-2.5 rounded-[10px] transition-all duration-200 hover:bg-brand-purple/15 ${
                item.accent ? "text-brand-cyan font-semibold" : "text-text-2 hover:text-brand-purple"
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

/* ── Dropdown with sub-menu (used by Solutions and About) ── */
function NestedDropdown({ label, topLinks, subLabel, subLinks, open, onToggle, onClose }: {
  label: string;
  topLinks: { label: string; href: string }[];
  subLabel: string;
  subLinks: { label: string; href: string; accent?: boolean }[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [subOpen, setSubOpen] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
        setSubOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setSubOpen(false);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="text-[13px] font-medium text-text-2 px-3.5 py-2 rounded-[100px] transition-all duration-200 hover:bg-brand-purple/15 hover:text-brand-purple bg-transparent border-none cursor-pointer flex items-center gap-1"
      >
        {label}
        <Chevron className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[220px] z-[110] ${panelClass}`}>
          {topLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block text-[13px] font-medium text-text-2 no-underline px-3.5 py-2.5 rounded-[10px] transition-all duration-200 hover:bg-brand-purple/15 hover:text-brand-purple"
            >
              {item.label}
            </Link>
          ))}

          <div className="h-px bg-white/[0.08] mx-2 my-1.5" />

          {/* Sub-menu trigger */}
          <div className="relative">
            <button
              onClick={() => setSubOpen(!subOpen)}
              onMouseEnter={() => setSubOpen(true)}
              className="w-full text-left text-[13px] font-medium text-text-2 px-3.5 py-2.5 rounded-[10px] transition-all duration-200 hover:bg-brand-purple/15 hover:text-brand-purple bg-transparent border-none cursor-pointer flex items-center justify-between"
            >
              {subLabel}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>

            {subOpen && (
              <div
                className={`absolute left-full top-0 ml-1 w-[200px] z-[120] ${panelClass}`}
                onMouseLeave={() => setSubOpen(false)}
              >
                {subLinks.map((item) => (
                  <Link
                    key={item.href + item.label}
                    href={item.href}
                    onClick={() => { onClose(); setSubOpen(false); }}
                    className={`block text-[13px] font-medium no-underline px-3.5 py-2 rounded-[10px] transition-all duration-200 hover:bg-brand-purple/15 ${
                      item.accent ? "text-brand-cyan font-semibold" : "text-text-2 hover:text-brand-purple"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Main Navbar ── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const scrollDir = useRef<"up" | "down">("up");
  const anchor = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      const isMobile = window.innerWidth < 1024;
      if (isMobile && y > 100) {
        // Only change direction after 30px of consistent movement
        if (y > lastScrollY.current) {
          // scrolling down
          if (scrollDir.current === "up") anchor.current = y;
          if (y - anchor.current > 30) {
            scrollDir.current = "down";
            setHidden(true);
          }
        } else {
          // scrolling up
          if (scrollDir.current === "down") anchor.current = y;
          if (anchor.current - y > 15) {
            scrollDir.current = "up";
            setHidden(false);
          }
        }
      } else {
        setHidden(false);
        scrollDir.current = "up";
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = useCallback(() => setOpenDropdown(null), []);

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] px-6 pr-2 py-2 backdrop-blur-[24px] saturate-[1.6] border border-white/[0.08] rounded-[100px] flex items-center gap-1 max-w-[720px] w-[calc(100%-24px)] transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(12,14,20,0.9)] shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
            : "bg-[rgba(12,14,20,0.7)] shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
        } ${hidden && !menuOpen ? "-translate-y-[calc(100%+24px)]" : ""}`}
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
            <NestedDropdown
              label="Solutions"
              topLinks={solutionTopLinks}
              subLabel="Products"
              subLinks={productLinks}
              open={openDropdown === "solutions"}
              onToggle={() => setOpenDropdown(openDropdown === "solutions" ? null : "solutions")}
              onClose={closeAll}
            />
          </li>
          <li>
            <Dropdown
              label="Learn"
              items={learnLinks}
              open={openDropdown === "learn"}
              onToggle={() => setOpenDropdown(openDropdown === "learn" ? null : "learn")}
              onClose={closeAll}
            />
          </li>
          <li>
            <NestedDropdown
              label="About"
              topLinks={aboutTopLinks}
              subLabel="Industries"
              subLinks={industryLinks}
              open={openDropdown === "about"}
              onToggle={() => setOpenDropdown(openDropdown === "about" ? null : "about")}
              onClose={closeAll}
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
        <div className="fixed inset-0 z-[99] bg-[rgba(8,9,13,0.97)] backdrop-blur-[40px] flex flex-col items-center justify-center gap-3 overflow-y-auto py-20">
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-text-3 mb-1">Solutions</span>
          <Link href="/pricing" className="text-[20px] font-semibold text-text no-underline hover:text-brand-purple" onClick={() => setMenuOpen(false)}>
            Pricing & Plans
          </Link>
          {productLinks.filter(l => l.label !== "All Products").map((l) => (
            <Link key={l.href + l.label} href={l.href} className="text-[18px] font-semibold text-text-2 no-underline hover:text-brand-purple" onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}

          <div className="w-12 h-px bg-white/10 my-2" />
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-text-3 mb-1">Learn</span>
          {learnLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-[18px] font-semibold text-text-2 no-underline hover:text-brand-purple" onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}

          <div className="w-12 h-px bg-white/10 my-2" />
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-text-3 mb-1">About</span>
          {aboutTopLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-[18px] font-semibold text-text-2 no-underline hover:text-brand-purple" onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}

          <div className="w-12 h-px bg-white/10 my-1" />
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-text-3 mb-1">Industries</span>
          {industryLinks.filter(l => l.label !== "All Industries").map((l) => (
            <Link key={l.href + l.label} href={l.href} className="text-[16px] font-semibold text-text-3 no-underline hover:text-brand-purple" onClick={() => setMenuOpen(false)}>
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
