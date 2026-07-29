"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Building2, Globe2, ShieldCheck, Sparkles, Wifi, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const challenges = [
  "Aging infrastructure with limited remote visibility",
  "Field teams that need reliable communications",
  "Incident response when outages affect critical services",
  "Distributed asset monitoring across substations and lines",
  "Cyber risk to grid operations and control systems",
  "Regulatory pressure for uptime and reporting",
];

const trends = [
  "Smart grid telemetry and asset monitoring",
  "Remote crew connectivity and safety tools",
  "Predictive maintenance for distributed assets",
  "Resilient operations for essential services",
  "Secure OT networks for grid control",
];

const supportAreas = [
  "Field monitoring for distributed energy assets",
  "Secure communications for maintenance crews",
  "Redundant network paths for critical stations",
  "Operational visibility for outage response",
];

const solutions = [
  { title: "Grid Monitoring", icon: Sparkles },
  { title: "Field Communications", icon: Wifi },
  { title: "Network Resilience", icon: Globe2 },
  { title: "Cybersecurity", icon: ShieldCheck },
];

const benefits = [
  { value: "Faster", label: "outage response" },
  { value: "More", label: "grid visibility" },
  { value: "Safer", label: "field operations" },
  { value: "Higher", label: "service reliability" },
  { value: "Better", label: "asset intelligence" },
  { value: "Stronger", label: "operational resilience" },
];

const workflow = [
  { label: "Field Sensors", icon: Zap },
  { label: "Control Center", icon: Building2 },
  { label: "Secure Network", icon: ShieldCheck },
  { label: "Remote Teams", icon: Wifi },
  { label: "Analytics", icon: Globe2 },
];

const faqItems = [
  {
    question: "Can Tidal support remote utility asset monitoring?",
    answer: "Yes. We connect distributed assets to centralized operations with secure telemetry and alerting.",
  },
  {
    question: "How do you support field crew communications?",
    answer: "We provide reliable, encrypted mobile connectivity and operational voice/data channels for crew teams.",
  },
  {
    question: "Can you improve outage response coordination?",
    answer: "Our infrastructure improves visibility and communication so teams can respond faster and more safely.",
  },
];

const relatedIndustries = [
  { title: "Government", href: "/industries/government" },
  { title: "Logistics & Transport", href: "/industries/logistics-transport" },
  { title: "Security Companies", href: "/industries/security-companies" },
];

export default function UtilitiesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#F8FBFC] text-slate-700">
      <Navbar />
      <main>
        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Industry"
                title="Utilities"
                description="Robust systems for essential services, field operations, and critical network stability."
              />
              <p className="max-w-2xl text-slate-600">
                Tidal supports utility providers with secure connectivity, asset monitoring, and operational intelligence that keep service moving.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact">Talk to our team</Button>
                <Button href="/industries" variant="secondary">Back to industries</Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl sm:min-h-[340px]"><Image src="/images/industry-utilities.jfif" alt="Utility operations" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" priority /></div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#E8FFF9] text-[#00a999]">
                  <Building2 className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-[#071A2F]">Resilient infrastructure for utilities.</h2>
                <p className="mt-4 text-slate-600">Monitoring and connectivity that help utilities deliver continuous service under changing conditions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <div>
              <SectionHeading
                eyebrow="Industry Overview"
                title="Utilities need visibility, safety, and reliability across distributed systems."
                description="Field teams, control centers, and assets must stay connected through all conditions."
              />
              <p className="mt-6 text-slate-600">
                Our work helps utilities monitor remote assets, coordinate crews, and protect networks that power critical services.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#00C4B3]">Utility focus</p>
              <p className="mt-6 text-slate-600">
                We build resilient operations for energy, water, and infrastructure providers that must maintain uptime and safety.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F8FBFC] px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Industry Challenges"
              title="Utilities face aging infrastructure, field complexity, and resilience demands."
              description="These issues directly affect service continuity and customer reliability."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {challenges.map((challenge) => (
                <div key={challenge} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <p className="text-slate-700">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Industry Trends"
              title="Utilities are adopting smart telemetry, safer field operations, and resilient networking."
              description="These trends help providers manage assets, crews, and outages more effectively."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {trends.map((trend) => (
                <div key={trend} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <p className="font-semibold text-[#071A2F]">{trend}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
            <div>
              <SectionHeading
                eyebrow="How Tidal Supports Your Industry"
                title="We provide utilities with secure monitoring, communications, and redundancy."
                description="Our solutions give control rooms and field teams the connectivity they need to manage essential services."
              />
              <div className="mt-10 space-y-4 text-slate-600">
                {supportAreas.map((item) => (
                  <div key={item} className="rounded-[2rem] border border-slate-200 bg-[#F8FBFC] p-6 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-[#071A2F] p-10 text-white shadow-xl">
              <div className="rounded-[1.75rem] bg-[#0e2b47] p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-[#5DE6D6]">Recommended solutions</p>
                <div className="mt-8 grid gap-4">
                  {solutions.map((solution) => {
                    const Icon = solution.icon;
                    return (
                      <div key={solution.title} className="flex items-center gap-4 rounded-[1.75rem] border border-white/10 bg-white/10 p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#E8FFF9] text-[#00C4B3]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <p className="font-semibold">{solution.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#071A2F] px-6 py-24 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Benefits"
                title="Reliable utilities depend on secure, monitored networks."
                description="When your systems are connected and resilient, service reliability improves across the board."
              />
              <p className="max-w-2xl text-slate-300">
                Better outage response, safer crews, and improved asset visibility help utilities deliver on customer expectations.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item.label} className="rounded-[2rem] bg-white/10 p-8 text-slate-100 shadow-sm">
                  <p className="text-3xl font-semibold">{item.value}</p>
                  <p className="mt-3 text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <SectionHeading
                eyebrow="Technology in Action"
                title="A utility workflow that keeps infrastructure visible and connected."
                description="We link field devices, control systems, and teams through secure, resilient networks."
              />
              <div className="mt-10 grid gap-6 md:grid-cols-5">
                {workflow.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.label} className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-[#E8FFF9] text-[#00C4B3]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className="mt-6 font-semibold text-[#071A2F]">{step.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-[#F8FBFC] p-10 shadow-sm">
              <Image src="/images/industry-utilities.jfif" alt="Utility technology" width={640} height={520} className="rounded-[1.75rem] object-cover" priority />
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="rounded-[2rem] border border-slate-200 bg-[#071A2F] p-10 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#5DE6D6]">Featured success story</p>
              <h2 className="mt-5 text-3xl font-semibold">Faster outage response for a utility provider.</h2>
              <div className="mt-8 space-y-6 text-slate-300">
                <div>
                  <p className="font-semibold text-white">Challenge</p>
                  <p className="mt-3">A utility provider lacked remote visibility into field assets and crew communications during outages.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Solution</p>
                  <p className="mt-3">We delivered field telemetry, secure crew communications, and resilient network paths for critical sites.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Results</p>
                  <p className="mt-3">Outage response times improved and service interruptions were contained more quickly.</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <Image src="/images/deployment-photo.png" alt="Utility deployment" width={640} height={520} className="rounded-[1.75rem] object-cover" priority />
            </div>
          </div>
        </section>

        <section className="bg-[#F8FBFC] px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Our Implementation Approach"
              title="A utility deployment path built for reliability and safety."
              description="We deliver phased rollout, training, and support so your teams can operate with confidence."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-5">
              {[
                "Assessment",
                "Design",
                "Deployment",
                "Training",
                "Support",
              ].map((step) => (
                <div key={step} className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
                  <p className="font-semibold text-[#071A2F]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Utilities questions answered."
              description="Answers to common questions about monitoring, communications, and grid resilience."
            />
            <div className="mt-12 space-y-4">
              {faqItems.map((faq, index) => (
                <div key={faq.question} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#F8FBFC] shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left text-lg font-semibold text-[#071A2F]"
                  >
                    <span>{faq.question}</span>
                    <span className="text-slate-500">{openFaq === index ? "-" : "+"}</span>
                  </button>
                  {openFaq === index ? (
                    <div className="border-t border-slate-200 bg-white px-6 py-6 text-slate-600">
                      {faq.answer}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Related Industries"
              title="Other sectors that value resilient networks and field communications."
              description="These industries also rely on secure operations and real-time monitoring."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {relatedIndustries.map((industry) => (
                <Link
                  key={industry.title}
                  href={industry.href}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:border-[#00C4B3] hover:bg-[#F8FBFC]"
                >
                  <p className="font-semibold text-[#071A2F]">{industry.title}</p>
                  <p className="mt-4 text-slate-600">Explore how Tidal supports related essential services.</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#071A2F] px-6 py-24 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#102A45] p-14 text-center shadow-[0_30px_80px_rgba(7,26,47,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5DE6D6]">Ready to secure</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Secure your utility operations with Tidal.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Talk to our team about resilient infrastructure that keeps your service delivery stable.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Talk to our team</Button>
              <Button href="/industries" variant="secondary">Back to industries</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
