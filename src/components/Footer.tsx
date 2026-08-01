import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

function WhatsAppIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.02 3.5C9.05 3.5 3.5 9.14 3.5 16.13c0 2.24.59 4.42 1.7 6.31L3.5 28.5l6.2-1.7c1.84 1.01 3.92 1.53 6.11 1.53 6.97 0 12.62-5.64 12.62-12.62S23 3.5 16.02 3.5Zm0 2.24c5.75 0 10.38 4.63 10.38 10.38 0 5.76-4.63 10.38-10.38 10.38-1.79 0-3.52-.47-5.03-1.35l-.36-.21-3.68 1.01 1.01-3.58-.22-.37c-.95-1.6-1.45-3.45-1.45-5.33 0-5.75 4.63-10.38 10.38-10.38Zm-4.5 5.13c-.2 0-.4.02-.59.08-.25.08-.45.26-.58.5-.1.17-.24.47-.27.82-.09.57.04 1.28.38 2.02.53 1.17 1.64 2.46 3.11 3.72 1.32 1.13 2.51 1.74 3.79 2.19.95.34 1.67.28 2.2-.06.38-.25.6-.55.71-.94.06-.23.05-.44-.05-.63-.12-.22-.45-.39-.95-.7-.38-.24-.94-.59-1.36-.85-.25-.15-.38-.2-.57-.02-.17.17-.4.46-.62.7-.22.24-.46.26-.79.1-.37-.18-1.23-.46-2.36-1.34-1.16-.9-1.96-2.1-2.22-2.45-.21-.29-.02-.49.1-.7.1-.17.22-.43.34-.66.11-.2.12-.38-.02-.52-.08-.1-.34-.36-.75-.68-.2-.16-.43-.32-.63-.49a1.79 1.79 0 0 0-.54-.22c-.16-.03-.31-.04-.47-.04Z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-[var(--brand-primary)] px-4 py-10 text-white sm:px-8 sm:py-12 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="brand-color-flow text-sm font-black uppercase tracking-[0.3em]">Tidal IoT Solutions</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Build intelligent infrastructure with confidence.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            We help organizations across East Africa deploy secure, scalable, and dependable systems that support growth and resilience.
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 sm:rounded-[2rem] sm:p-6">
          <h3 className="text-xl font-semibold">Let&apos;s talk about your next deployment</h3>
          <p className="mt-3 text-slate-300">Tell us about your environment, your challenges, and the outcomes you want to achieve.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Link href="mailto:info@tidal-iot.com" aria-label="Email Tidal IoT Solutions" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-[var(--brand-success)]/50 hover:bg-white/10">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-success)]/15 text-[var(--brand-success)] transition group-hover:bg-[var(--brand-success)] group-hover:text-[var(--brand-primary)]"><Mail className="h-4 w-4" /></span>
              <span className="text-sm font-medium text-slate-200">Email us</span>
            </Link>
            <Link href="tel:+254700000000" aria-label="Call Tidal IoT Solutions" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-[var(--brand-success)]/50 hover:bg-white/10">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-success)]/15 text-[var(--brand-success)] transition group-hover:bg-[var(--brand-success)] group-hover:text-[var(--brand-primary)]"><Phone className="h-4 w-4" /></span>
              <span className="text-sm font-medium text-slate-200">Call us</span>
            </Link>
            <Link href="/contact" aria-label="Find Tidal IoT Solutions in Nairobi" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-[var(--brand-success)]/50 hover:bg-white/10">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-success)]/15 text-[var(--brand-success)] transition group-hover:bg-[var(--brand-success)] group-hover:text-[var(--brand-primary)]"><MapPin className="h-4 w-4" /></span>
              <span className="text-sm font-medium text-slate-200">Nairobi, KE</span>
            </Link>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="mailto:info@tidal-iot.com" className="inline-flex items-center justify-center break-all rounded-full bg-[var(--brand-success)] px-5 py-3 font-semibold text-[var(--brand-primary)] transition hover:bg-[var(--brand-success)]">
              info@tidal-iot.com
            </Link>
            <Link href="#home" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              Back to top
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p className="brand-color-flow">&copy; {new Date().getFullYear()} Tidal IoT Solutions. All rights reserved.</p>
        <p>Intelligent infrastructure for resilient operations.</p>
      </div>
    </footer>
  );
}

export function FloatingWhatsAppButton() {
  return (
    <Link
      href="https://wa.me/254700000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Tidal IoT Solutions on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </Link>
  );
}
