"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Products", href: "#offer" },
  { label: "Results", href: "#testimonials" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] px-6 pr-2 py-2 backdrop-blur-[24px] saturate-[1.6] border border-white/[0.08] rounded-[100px] flex items-center gap-1 max-w-[680px] w-[calc(100%-32px)] transition-all duration-300 ${
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

        <ul className="hidden md:flex gap-0.5 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-medium text-text-2 no-underline px-3.5 py-2 rounded-[100px] transition-all duration-200 hover:bg-brand-purple/15 hover:text-brand-purple"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#newsletter"
          className="hidden md:block text-[13px] font-semibold text-[#0F172A] bg-white px-5 py-2.5 rounded-[100px] no-underline transition-all duration-250 hover:bg-[#E2E8F0] hover:scale-[1.03]"
        >
          Book a Demo
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden relative w-8 h-8 bg-transparent border-none cursor-pointer p-1.5"
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
        <div className="fixed inset-0 z-[99] bg-[rgba(8,9,13,0.97)] backdrop-blur-[40px] flex flex-col items-center justify-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[22px] font-semibold text-text no-underline hover:text-brand-purple"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#newsletter"
            className="text-[22px] font-semibold text-brand-purple no-underline"
            onClick={() => setMenuOpen(false)}
          >
            Book a Demo
          </a>
        </div>
      )}
    </>
  );
}
