"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/Button";

type HeroCta = {
  label: string;
  href: string;
};

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  bgSrc?: string;
  fgSrc?: string;
};

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta = { label: "Schedule a consultation", href: "/contact" },
  secondaryCta = { label: "Explore outcomes", href: "/insights" },
  bgSrc,
  fgSrc,
}: HeroSectionProps) {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#eaf5f6] px-4 py-0 sm:px-8 lg:px-12">
      {bgSrc ? (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Image src={bgSrc} alt="" fill sizes="100vw" className="object-cover opacity-100" priority quality={100} />
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(248,251,252,.75)_0%,rgba(248,251,252,.55)_45%,rgba(248,251,252,.2)_100%)]" />
        </div>
      ) : null}
      {fgSrc ? (
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[48%] lg:block">
          <Image src={fgSrc} alt="" fill sizes="48vw" className="object-cover object-center opacity-100" />
        </div>
      ) : null}
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl lg:py-0"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00C4B3]/30 bg-white/80 px-4 py-2 text-sm font-medium text-[#103B56] shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#00C4B3]" />
            {eyebrow}
          </div>
          <h1 className="hero-copy-effect mt-5 text-3xl font-semibold tracking-tight text-[#071A2F] min-[420px]:text-4xl sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="hero-description-effect mt-6 text-lg font-medium leading-8 text-slate-700 sm:text-xl">
            {description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            <Button href={secondaryCta.href} variant="secondary">
              <span className="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#00C4B3]/15 text-[#00C4B3]">
                <Play className="h-4 w-4 fill-current" />
              </span>
              {secondaryCta.label}
            </Button>
          </div>
          <div className="mt-7 flex flex-wrap gap-2 sm:gap-3">
            {[
              "Enterprise trust",
              "Security-first delivery",
              "Scalable by design",
            ].map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-600 shadow-sm sm:px-4 sm:text-sm">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative hidden lg:block"
        >
          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_rgba(7,26,47,0.12)]">
            <div className="rounded-[1.5rem] bg-[#071A2F] p-5 text-white">
              <div className="flex items-center justify-between rounded-full bg-white/10 px-4 py-2 text-sm">
                <span>Operations intelligence</span>
                <span className="rounded-full bg-[#00C4B3] px-3 py-1 text-xs font-semibold text-[#071A2F]">Live</span>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-2xl bg-[#103B56] p-5">
                  <p className="text-sm text-slate-300">Connected infrastructure</p>
                  <div className="mt-4 h-28 rounded-2xl bg-gradient-to-br from-[#5DE6D6] to-[#00C4B3] p-4">
                    <div className="flex h-full items-end justify-between gap-2">
                      {[44, 68, 52, 80, 64].map((height) => (
                        <div key={height} className="w-full rounded-t-xl bg-white/80" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Secure traffic</p>
                    <p className="mt-2 text-2xl font-semibold">98.2%</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Critical alerts</p>
                    <p className="mt-2 text-2xl font-semibold">12 queued</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#E8FFF9] p-2 text-[#00C4B3]">
                <ArrowRight className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#071A2F]">Proactive operations</p>
                <p className="text-sm text-slate-500">From field to command center</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
