"use client";

import { ArrowRight, ArrowUpRight, ShieldCheck, Wifi } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { MetricCard } from "@/components/MetricCard";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import {
  caseStudies,
  featurePoints,
  industries,
  insights,
  metrics,
  partnerNames,
  processSteps,
  solutions,
  technologies,
} from "@/constants/site";

export default function Home() {
  const partnerLogos: Record<string, string> = {
    Safaricom: "/images/Safaricom.jfif",
    "Kenya Power": "/images/Kenya%20Power.jfif",
    Airtel: "/images/Airtel.png",
    "Nairobi Metro": "/images/Nairobi%20Metro.jfif",
    "M-PESA": "/images/M-PESA.png",
    Sokowatch: "/images/Sokowatch.jfif",
  };
  return (
    <div className="min-h-screen bg-[#F8FBFC] text-slate-700">
      <Navbar />
      <main>
        <HeroSection
          eyebrow="East Africa’s intelligent infrastructure partner"
          title="Beyond Connectivity. Building Intelligent Infrastructure."
          description="We design resilient digital infrastructure for organizations that need to move faster, operate safer, and scale with confidence."
          primaryCta={{ label: "Explore Solutions", href: "/solutions" }}
          secondaryCta={{ label: "Request Consultation", href: "/contact" }}
          bgSrc="/images/home-hero-background.jpg"
        />

        <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[#eaf5f6] px-6 py-12 sm:px-8 lg:px-12">
          <Image src="/images/home-why-choose-panel-pattern.jfif" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-[#eaf5f6]/75 to-white/55" />
          <div className="relative mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00a999]">Trusted by</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#071A2F] sm:text-3xl">Ambitious operators across East Africa.</h2>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              {partnerNames.map((name) => (
                <div key={name} className="flex h-14 min-w-[132px] items-center justify-center rounded-2xl border border-white/90 bg-white/85 px-4 shadow-[0_10px_24px_rgba(7,26,47,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#00C4B3]/50 hover:shadow-md">
                  <Image src={partnerLogos[name]} alt={name} width={110} height={30} className="h-auto max-h-8 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="overview" className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading
                eyebrow="Company overview"
                title="We build the infrastructure behind dependable growth."
                description="Tidal IoT Solutions combines field-ready connectivity, resilient operations, and modern security to support enterprises that cannot afford downtime."
              />
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <MetricCard key={metric.label} value={metric.value} label={metric.label} />
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-[#F8FBFC] p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-[#E8FFF9] p-2 text-[#00C4B3]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#071A2F]">Security without friction</h3>
                    <p className="mt-2 text-slate-600">
                      Every solution is engineered to preserve performance while meeting the governance expectations of modern enterprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="relative isolate overflow-hidden bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <Image src="/images/home-solutions-cards-illustration.png" alt="" fill className="object-cover object-center opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/52 to-white/0" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Solutions"
              title="Purpose-built systems for intelligent operations."
              description="From connected assets to secure communications, our solutions are shaped around real-world operational needs."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <motion.article
                    key={solution.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/72 p-8 shadow-[0_16px_36px_rgba(7,26,47,0.13)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#00C4B3]/60 hover:bg-white/85 hover:shadow-[0_22px_45px_rgba(7,26,47,0.2)]"
                  >
                    <div className="absolute inset-x-8 top-0 h-1 rounded-b-full bg-gradient-to-r from-transparent via-[#00C4B3] to-transparent opacity-70" />
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00C4B3]/20 bg-[#E8FFF9]/90 text-[#00a999] shadow-sm transition duration-300 group-hover:scale-110 group-hover:bg-[#00C4B3] group-hover:text-[#071A2F]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-[#071A2F]">{solution.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{solution.description}</p>
                    <ul className="mt-6 space-y-2 text-sm text-slate-600">
                      {solution.points.map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#00C4B3]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="industries" className="relative isolate overflow-hidden px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="pointer-events-none absolute inset-0 z-0">
            <Image src="/images/solutions-featured-approach-background.jpg" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="pointer-events-none absolute inset-0 z-0 bg-white/5" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="inline-block rounded-[2rem] bg-white/85 p-6 shadow-sm backdrop-blur-sm">
              <SectionHeading
                eyebrow="Industries"
                title="Trusted across sectors where reliability is non-negotiable."
                description="We support organizations with complex operations, distributed teams, and high expectations for continuity."
              />
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 z-0 flex items-start justify-end">
                <Image src="/images/home-industries-hero-accent.png" alt="Industries accent" width={520} height={420} className="h-auto w-full max-w-[520px] object-contain" />
              </div>
              <div className="relative z-10 mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <div key={industry.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#071A2F] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-[#071A2F]">{industry.title}</h3>
                    <p className="mt-3 text-slate-600">{industry.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        </section>

        <section className="bg-[#071A2F] px-6 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5DE6D6]">Why choose Tidal</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Modern infrastructure designed for clarity, control, and confidence.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                We bring together systems thinking, secure architecture, and business alignment so every deployment supports long-term resilience.
              </p>
              <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#103B56] shadow-2xl">
                <Image src="/images/home-hero-foreground-accent.jpg" alt="Connected infrastructure visual" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F]/70 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 text-sm font-semibold tracking-wide text-white">Designed for dependable operations</p>
              </div>
            </div>
            <div className="grid gap-4">
              {featurePoints.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-[#00C4B3]/20 p-2 text-[#5DE6D6]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                        <p className="mt-2 text-slate-300">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Our process"
              title="A disciplined approach from assessment to optimization."
              description="We turn complexity into a clear path with practical milestones and measurable outcomes."
            />
            <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
              <div className="grid gap-4 sm:grid-cols-2">
                {processSteps.map((step) => (
                  <div key={step.number} className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#00C4B3]/50 hover:shadow-lg">
                    <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-[#071A2F] px-3 text-xs font-bold tracking-wider text-[#5DE6D6]">{step.number}</span>
                    <h3 className="mt-5 text-xl font-semibold text-[#071A2F]">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                  </div>
                ))}
              </div>
              <div className="relative isolate min-h-[340px] overflow-hidden rounded-[2rem] bg-[#071A2F] p-3 shadow-[0_24px_60px_rgba(7,26,47,0.22)] sm:p-5">
                <Image src="/images/home-process-graphic.jpg" alt="Tidal's delivery process from discovery through support" fill sizes="(min-width: 640px) 55vw, 100vw" className="hidden object-cover sm:block" />
                <Image src="/images/home-process-graphic.jfif" alt="Tidal's delivery process stages" fill sizes="100vw" className="object-cover sm:hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F]/65 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-7 sm:left-7 sm:right-7">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5DE6D6]">One connected method</p>
                    <p className="mt-2 text-lg font-semibold">Clear progress at every stage.</p>
                  </div>
                  <span className="hidden rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold backdrop-blur sm:inline-block">Discover → Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="technology" className="relative isolate overflow-hidden bg-[#F8FBFC] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="pointer-events-none absolute inset-0 z-0">
            <Image src="/images/home-technology-panel-visual.jpg" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="pointer-events-none absolute inset-0 z-0 bg-[#F8FBFC]/5" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="rounded-[2rem] bg-white/85 p-6 shadow-sm backdrop-blur-sm">
              <SectionHeading
                eyebrow="Technology & innovation"
                title="Practical capabilities built for real-world operations."
                description="We modernize infrastructure with IoT, resilient networking, cybersecurity, and analytics designed for enterprise environments."
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {technologies.map((tech) => (
                  <div key={tech.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-[#071A2F]">{tech.title}</h3>
                    <p className="mt-3 text-slate-600">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
              <div className="relative z-10 rounded-[1.75rem] bg-[#071A2F] p-8 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-[#5DE6D6]">Platform overview</p>
                <h2 className="mt-5 text-3xl font-semibold">Connected systems that keep teams informed and secure.</h2>
                <p className="mt-6 text-slate-300">
                  Our approach brings telemetry, network health, threat visibility, and operations insight into a single enterprise-ready view.
                </p>
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    "Fleet monitoring",
                    "Network connectivity",
                    "Cybersecurity posture",
                    "Analytics dashboards",
                  ].map((item) => (
                    <div key={item} className="rounded-3xl bg-white/10 p-4 text-sm text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="case-studies" className="relative isolate overflow-hidden bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="pointer-events-none absolute inset-0 z-0">
            <Image src="/images/insights-featured-content-pattern.jpg" alt="" fill className="object-cover opacity-100" />
            <div className="absolute inset-0 bg-white/25" />
          </div>
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_rgba(7,26,47,0.10),_transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 z-0">
            <Image src="/images/industries-final-cta-background.jpg" alt="" fill className="object-cover opacity-100" />
            <div className="absolute inset-0 bg-white/20" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Featured case studies"
              title="Outcomes that strengthen operations and trust."
              description="Each engagement is shaped around the realities of the business, the environment, and the long-term roadmap."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <div key={study.title} className="rounded-[2rem] border border-slate-200 bg-[#F8FBFC] p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00C4B3]">{study.category}</p>
                  <h3 className="mt-4 text-xl font-semibold text-[#071A2F]">{study.title}</h3>
                  <p className="mt-3 text-slate-600">{study.description}</p>
                  <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2 font-semibold text-[#071A2F]">
                      <ArrowUpRight className="h-4 w-4 text-[#00C4B3]" />
                      Impact
                    </div>
                    <p className="mt-2">{study.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className="relative isolate overflow-hidden px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <Image src="/images/insights-featured-content-pattern.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-white/5" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 rounded-[2rem] bg-white/85 p-6 shadow-sm backdrop-blur-sm md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Latest insights"
                title="Thoughtful perspectives on modern infrastructure."
                description="We publish practical guidance for leaders navigating connectivity, resilience, and smart growth."
              />
              <Button href="/insights" variant="secondary">View resources</Button>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {insights.map((insight) => (
                <article key={insight.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00C4B3]">{insight.tag}</p>
                  <h3 className="mt-4 text-xl font-semibold text-[#071A2F]">{insight.title}</h3>
                  <p className="mt-3 text-slate-600">{insight.description}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#071A2F]">
                    Read more <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 sm:px-8 sm:pb-20 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-[#071A2F] to-[#103B56] p-10 text-white shadow-[0_30px_80px_rgba(7,26,47,0.12)] lg:flex-row lg:items-end lg:justify-between lg:p-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5DE6D6]">Ready to advance</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Bring clarity and resilience to your next infrastructure investment.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact">Discuss your project</Button>
              <Button href="/solutions" variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                Explore solutions
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
