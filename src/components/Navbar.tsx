"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems } from "@/constants/site";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b transition duration-300 ${scrolled ? "border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm" : "border-transparent bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8 sm:py-4 lg:px-12">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image src="/images/Company%20Logo.jpeg" alt="Tidal IoT Solutions" width={40} height={40} className="h-9 w-9 shrink-0 rounded-full object-cover sm:h-10 sm:w-10" />
          <div>
            <p className="brand-color-flow text-base font-black tracking-tight min-[380px]:text-lg sm:text-xl">Tidal IoT Solutions</p>
            <p className="hidden text-xs uppercase tracking-[0.3em] text-slate-500 min-[380px]:block">Intelligent infrastructure</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.subItems && setHoveredDropdown(item.href)}
              onMouseLeave={() => item.subItems && setHoveredDropdown(null)}
            >
              <Link href={item.href} className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-[#071A2F]">
                {item.label}
                {item.subItems ? <ChevronDown className="h-4 w-4" /> : null}
              </Link>
              {item.subItems ? (
                <div
                  className={`absolute left-0 top-full z-20 min-w-[220px] rounded-3xl border border-slate-200 bg-white p-3 shadow-xl transition-opacity duration-150 ${hoveredDropdown === item.href ? "visible opacity-100" : "invisible opacity-0"}`}
                >
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="block rounded-3xl px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-[#071A2F]"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/contact" className="rounded-full bg-[#071A2F] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#103B56]">
            Request consultation
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="ml-3 shrink-0 rounded-full border border-slate-200 p-2 text-slate-700 lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-5 sm:px-6 sm:py-6 lg:hidden">
          <div className="space-y-4">
            {navItems.map((item) => (
              <div key={item.href} className="space-y-2">
                <Link
                  href={item.href}
                  className="block text-base font-semibold text-slate-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.subItems ? (
                  <div className="space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block rounded-2xl px-4 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-[#071A2F]"
                        onClick={() => setMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#071A2F] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#103B56]"
              onClick={() => setMenuOpen(false)}
            >
              Contact us
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
