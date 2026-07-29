import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-[#071A2F] px-4 py-10 text-white sm:px-8 sm:py-12 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5DE6D6]">Tidal IoT Solutions</p>
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
            <Link href="mailto:hello@tidal-iot.com" aria-label="Email Tidal IoT Solutions" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-[#5DE6D6]/50 hover:bg-white/10">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00C4B3]/15 text-[#5DE6D6] transition group-hover:bg-[#00C4B3] group-hover:text-[#071A2F]"><Mail className="h-4 w-4" /></span>
              <span className="text-sm font-medium text-slate-200">Email us</span>
            </Link>
            <Link href="tel:+254700000000" aria-label="Call Tidal IoT Solutions" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-[#5DE6D6]/50 hover:bg-white/10">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00C4B3]/15 text-[#5DE6D6] transition group-hover:bg-[#00C4B3] group-hover:text-[#071A2F]"><Phone className="h-4 w-4" /></span>
              <span className="text-sm font-medium text-slate-200">Call us</span>
            </Link>
            <Link href="/contact" aria-label="Find Tidal IoT Solutions in Nairobi" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-[#5DE6D6]/50 hover:bg-white/10">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00C4B3]/15 text-[#5DE6D6] transition group-hover:bg-[#00C4B3] group-hover:text-[#071A2F]"><MapPin className="h-4 w-4" /></span>
              <span className="text-sm font-medium text-slate-200">Nairobi, KE</span>
            </Link>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="mailto:hello@tidal-iot.com" className="inline-flex items-center justify-center break-all rounded-full bg-[#00C4B3] px-5 py-3 font-semibold text-[#071A2F] transition hover:bg-[#5DE6D6]">
              hello@tidal-iot.com
            </Link>
            <Link href="#home" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              Back to top
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Tidal IoT Solutions. All rights reserved.</p>
        <p>Intelligent infrastructure for resilient operations.</p>
      </div>
    </footer>
  );
}
