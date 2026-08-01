"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  BatteryCharging,
  Blocks,
  BriefcaseBusiness,
  Building2,
  CarFront,
  ChevronDown,
  FileText,
  FolderOpen,
  Globe2,
  KeyRound,
  LockKeyhole,
  Menu,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Wifi,
  X,
} from "lucide-react";
import { navItems } from "@/constants/site";

const megaMenus = {
  Solutions: [
    {
      title: "Intelligent Telematics",
      description: "Connected fleet visibility and route intelligence.",
      href: "/solutions/intelligent-telematics",
      icon: CarFront,
    },
    {
      title: "Mission Critical Communication",
      description: "Secure voice, data, and control systems for the field.",
      href: "/solutions/secure-communications",
      icon: RadioTower,
    },
    {
      title: "E-Mobility Solutions",
      description: "Connected charging and smarter electric mobility operations.",
      href: "/solutions/e-mobility",
      icon: BatteryCharging,
    },
    {
      title: "Resilient Networks",
      description: "Reliable infrastructure engineered for continuity and scale.",
      href: "/solutions/resilient-networks",
      icon: Globe2,
    },
    {
      title: "Integrated Cybersecurity",
      description: "Zero-trust protection, monitoring, and governance.",
      href: "/solutions/integrated-cybersecurity",
      icon: ShieldCheck,
    },
  ],
  Industries: [
    {
      title: "Logistics & Transport",
      description: "Fleet visibility and resilient distribution operations.",
      href: "/industries/logistics-transport",
      icon: Blocks,
    },
    {
      title: "Government",
      description: "Secure systems built for public accountability and continuity.",
      href: "/industries/government",
      icon: Building2,
    },
    {
      title: "Banking & Finance",
      description: "Protected infrastructure for branch and enterprise operations.",
      href: "/industries/banking-financial-services",
      icon: LockKeyhole,
    },
    {
      title: "Utilities",
      description: "Field operations that need resilient monitoring and uptime.",
      href: "/industries/utilities",
      icon: Wifi,
    },
    {
      title: "Security Companies",
      description: "Always-on systems for coordinated response and control.",
      href: "/industries/security-companies",
      icon: KeyRound,
    },
    {
      title: "SMEs",
      description: "Practical digital modernization designed to grow with you.",
      href: "/industries/smes",
      icon: Sparkles,
    },
  ],
} as const;

const insightsMenu = [
  {
    title: "Blog",
    description: "Insights, practical thinking, and infrastructure commentary.",
    href: "/insights/blog",
    icon: FileText,
  },
  {
    title: "Case Studies",
    description: "Real deployments demonstrating measurable operational outcomes.",
    href: "/insights/case-studies",
    icon: BriefcaseBusiness,
  },
  {
    title: "Resources",
    description: "Tools, guides, and strategic assets for smarter planning.",
    href: "/insights/resources",
    icon: FolderOpen,
  },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const hideDropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearDropdownTimer = () => {
    if (hideDropdownTimeout.current) {
      clearTimeout(hideDropdownTimeout.current);
      hideDropdownTimeout.current = null;
    }
  };

  const scheduleDropdownClose = () => {
    clearDropdownTimer();
    hideDropdownTimeout.current = setTimeout(() => setHoveredDropdown(null), 180);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearDropdownTimer();
    };
  }, []);

  return (
    <header className={`navbar-shell ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-glass mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link href="/" className="nav-branding flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm sm:h-12 sm:w-12">
            <Image
              src="/images/Company%20Logo.jpeg"
              alt="Tidal IoT Solutions"
              width={48}
              height={48}
              className="h-full w-full object-contain p-1"
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="brand-3d text-lg font-black tracking-tight min-[380px]:text-[1.5rem] sm:text-[1.75rem]">
              Tidal IoT Solutions
            </p>
            <p className="brand-tagline hidden min-[380px]:flex">
              <span>Connect</span>
              <span className="brand-tagline-separator">•</span>
              <span>Secure</span>
              <span className="brand-tagline-separator">•</span>
              <span>Optimize</span>
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const itemActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href) ||
                  item.subItems?.some((subItem) => pathname?.startsWith(subItem.href));

            const isMegaMenu = item.label === "Solutions" || item.label === "Industries";
            const isInsightsDropdown = item.label === "Insights";
            const megaMenuItems = isMegaMenu ? megaMenus[item.label as keyof typeof megaMenus] : [];
            const insightsMenuItems = isInsightsDropdown ? insightsMenu : [];

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.subItems && setHoveredDropdown(item.href)}
                onMouseLeave={() => item.subItems && scheduleDropdownClose()}
              >
                <Link
                  href={item.href}
                  className={`navbar-link ${itemActive ? "active" : ""}`}
                >
                  {item.label}
                  {item.subItems ? (
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:-rotate-180" />
                  ) : null}
                </Link>

                {item.subItems ? (
                  <div
                    className={`navbar-dropdown ${isMegaMenu || isInsightsDropdown ? "navbar-dropdown-mega" : "navbar-dropdown-compact"} ${hoveredDropdown === item.href ? "visible" : ""}`}
                    onMouseEnter={clearDropdownTimer}
                    onMouseLeave={scheduleDropdownClose}
                  >
                    {isMegaMenu ? (
                      <div className="navbar-mega-grid">
                        {megaMenuItems.map((entry) => {
                          const Icon = entry.icon;
                          return (
                            <Link
                              key={entry.href}
                              href={entry.href}
                              className="navbar-mega-item"
                            >
                              <span className="navbar-mega-icon">
                                <Icon className="h-4 w-4" />
                              </span>
                              <span className="navbar-mega-content">
                                <span className="navbar-mega-title">{entry.title}</span>
                                <span className="navbar-mega-description">{entry.description}</span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    ) : isInsightsDropdown ? (
                      <div className="navbar-mega-grid insights-grid">
                        {insightsMenuItems.map((entry) => {
                          const Icon = entry.icon;
                          return (
                            <Link
                              key={entry.href}
                              href={entry.href}
                              className="navbar-mega-item"
                            >
                              <span className="navbar-mega-icon">
                                <Icon className="h-4 w-4" />
                              </span>
                              <span className="navbar-mega-content">
                                <span className="navbar-mega-title">{entry.title}</span>
                                <span className="navbar-mega-description">{entry.description}</span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="navbar-submenu">
                        {item.subItems.map((entry) => (
                          <Link
                            key={entry.href}
                            href={entry.href}
                            className="navbar-submenu-item"
                          >
                            {entry.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/contact" className="navbar-cta">
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
        <div className="mobile-nav px-4 py-5 sm:px-6 lg:hidden">
          <div className="space-y-4">
            {navItems.map((item) => (
              <div key={item.href} className="space-y-2">
                <Link
                  href={item.href}
                  className="mobile-nav-item"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.subItems ? (
                  <div className="mobile-subnav space-y-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Link href="/contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>
              Request consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
