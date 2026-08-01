"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { navItems } from "@/constants/site";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${scrolled ? "border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm" : "border-transparent bg-transparent"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-3 lg:px-10">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm sm:h-14 sm:w-14">
            <Image
              src="/images/Company%20Logo.jpeg"
              alt="Tidal IoT Solutions"
              width={56}
              height={56}
              className="h-full w-full object-contain p-1"
            />
          </div>
          <div>
            <p className="brand-3d text-lg font-black tracking-tight min-[380px]:text-2xl sm:text-3xl">
              Tidal IoT Solutions
            </p>
            <p className="hidden text-xs uppercase tracking-[0.3em] text-[var(--brand-secondary)]/80 min-[380px]:block">
              Intelligent infrastructure
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-4 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const itemActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href) ||
                  item.subItems?.some((subItem) =>
                    pathname?.startsWith(subItem.href),
                  );

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() =>
                  item.subItems && setHoveredDropdown(item.href)
                }
                onMouseLeave={() => item.subItems && setHoveredDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`group relative inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-sm font-semibold transition duration-200 ${itemActive ? "text-[var(--brand-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--brand-primary)]"} hover:bg-[var(--brand-primary)]/5 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-gold)]/50`}
                >
                  {item.label}
                  {item.subItems ? (
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:-rotate-180" />
                  ) : null}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] transition-all duration-200 ${itemActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
                {item.subItems ? (
                  <div
                    className={`absolute left-0 top-full z-20 min-w-[240px] rounded-3xl border border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur-xl transition-all duration-200 transform ${hoveredDropdown === item.href ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-2 pointer-events-none"}`}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block rounded-3xl px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-[#0B1F3A]"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-secondary)] to-[var(--brand-gold)] px-3 py-2 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-gold)]/50"
          >
            Request consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="ml-3 shrink-0 rounded-full border border-[var(--brand-gold)]/30 bg-[var(--brand-primary)]/5 p-2 text-[var(--brand-primary)] lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-5 sm:px-6 sm:py-6 lg:hidden backdrop-blur-xl shadow-2xl transition-all duration-300">
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
                        className="block rounded-2xl px-4 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-[#0B1F3A]"
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
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-primary)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-secondary)]"
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
