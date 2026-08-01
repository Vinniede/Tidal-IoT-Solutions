"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Building2,
  Globe2,
  Landmark,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const challenges = [
  "Legacy systems that slow modernization",
  "Public safety and emergency response coordination",
  "Fragmented communications across agency silos",
  "Critical infrastructure resilience demands",
  "Pressure to deliver digital citizen services",
  "Complex governance, compliance, and reporting needs",
];

const trends = [
  "Connected civic infrastructure and operations",
  "Digital service delivery with secure access",
  "Emergency communications redundancy",
  "Smart resource monitoring for public assets",
  "Resilient networking for mission-critical systems",
];

const supportAreas = [
  "Resilient network architecture for government operations",
  "Redundant communications for emergency teams",
  "Continuous monitoring for critical infrastructure",
  "Compliance-ready cybersecurity design",
];

const solutions = [
  { title: "Resilient Networks", icon: Building2 },
  { title: "Secure Communications", icon: Landmark },
  { title: "Cybersecurity & Compliance", icon: ShieldCheck },
];

const benefits = [
  { value: "Faster", label: "response coordination" },
  { value: "Stronger", label: "service resilience" },
  { value: "Clearer", label: "agency collaboration" },
  { value: "Safer", label: "public operations" },
  { value: "More", label: "digital service availability" },
  { value: "Reduced", label: "incident risk" },
];

const workflow = [
  { label: "Citizen Services", icon: Users },
  { label: "Public Systems", icon: Globe2 },
  { label: "Secure Network", icon: ShieldCheck },
  { label: "Command Center", icon: Landmark },
  { label: "Infrastructure", icon: Building2 },
];

const faqItems = [
  {
    question: "Can Tidal support public-sector compliance requirements?",
    answer:
      "Yes. We create government-grade systems with security, reporting, and governance aligned to public-sector mandates.",
  },
  {
    question: "How do you support emergency response communications?",
    answer:
      "We deliver redundant communications paths and monitoring to keep dispatch, field teams, and command units connected.",
  },
  {
    question: "Do you help modernize legacy civic infrastructure?",
    answer:
      "Our phased approach preserves service continuity while introducing resilient, modern infrastructure capabilities.",
  },
];

const relatedIndustries = [
  { title: "Utilities", href: "/industries/utilities" },
  { title: "Security Companies", href: "/industries/security-companies" },
  {
    title: "Banking & Financial Services",
    href: "/industries/banking-financial-services",
  },
];

export default function GovernmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#F5F6F8] text-slate-700">
      <Navbar />
      <main>
        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <SectionHeading
                  eyebrow="Industry"
                  title="Government"
                  description="Secure, resilient infrastructure for public agencies, emergency response, and digital services."
                />
                <p className="max-w-2xl text-slate-600">
                  Tidal helps agencies protect critical infrastructure,
                  coordinate teams, and deliver citizen services with continuity
                  and security.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact">
                    Modernize Public Infrastructure
                  </Button>
                  <Button href="/industries" variant="secondary">
                    Back to industries
                  </Button>
                </div>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#F5F6F8] text-[#00A651]">
                  <Landmark className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-[#0B1F3A]">
                  Trusted systems for public service delivery.
                </h2>
                <p className="mt-4 text-slate-600">
                  Enterprise-grade networks and secure coordination for
                  government operations and emergency response.
                </p>
              </div>
            </div>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
              <Image
                src="/images/Government/Smart%20city.jfif"
                alt="Government operations"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/Government/Smart%20government.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
          </div>
          <div className="relative mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
            <div className="rounded-[2rem] border border-white/10 bg-[#0B1F3A]/90 p-10 text-white shadow-2xl flex flex-col gap-6">
              <SectionHeading
                eyebrow="Industry Overview"
                title="Public systems need resilience, security, and service continuity."
                description="Government agencies operate under pressure to deliver services and protect critical infrastructure simultaneously."
                titleClassName="!text-white !font-bold"
                descriptionClassName="!text-white !font-semibold"
              />
              <p className="mt-2 text-white font-semibold">
                Our solutions ensure secure connections between agencies, field
                teams, and citizens while maintaining availability for essential
                services.
              </p>
              <div className="w-full max-w-xs rounded-lg bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[#00A651]">
                  Public-sector focus
                </p>
                <p className="mt-3 text-slate-200 text-sm">
                  Modernize infrastructure, secure operations, and improve
                  coordination for trusted civic delivery.
                </p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[#6E1E2D]/90 p-8 text-white shadow-xl flex h-full items-center">
              <div className="w-full">
                <div className="flex flex-col justify-center h-full gap-6">
                  <div>
                    <p className="text-2xl font-bold">99.99%</p>
                    <p className="text-sm text-slate-200">Operational uptime</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-sm text-slate-200">
                      Monitoring & support
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">Multi-site</p>
                    <p className="text-sm text-slate-200">
                      Distributed resilience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F6F8] px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <SectionHeading
                eyebrow="Industry Challenges"
                title="Government agencies face legacy, security, and continuity challenges."
                description="The right infrastructure must address operations, readiness, and compliance simultaneously."
              />
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {challenges.slice(0, 4).map((challenge) => (
                  <div
                    key={challenge}
                    className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
                  >
                    <p className="text-slate-700">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
              <Image
                src="/images/Government/Public%20safety.jfif"
                alt="Government challenges visual"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
                quality={100}
              />
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/Government/Emergency%20operations%20center.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
            <div className="absolute inset-0 bg-slate-950/30" />
          </div>
          <div className="relative mx-auto max-w-7xl text-white">
            <SectionHeading
              eyebrow="Industry Trends"
              title="Public-sector services are becoming more connected and resilient."
              description="Modern government depends on smart infrastructure, redundant communications, and service automation."
              titleClassName="!text-[var(--brand-gold)] !font-bold"
              descriptionClassName="!text-[var(--brand-gold)] !font-semibold"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {trends.map((trend) => (
                <div
                  key={trend}
                  className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-white shadow-sm"
                >
                  <p className="font-bold text-white">{trend}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <SectionHeading
                eyebrow="Key Features"
                title="We design government technology with security and reliability at the core."
                description="Our work helps agencies connect teams, monitor infrastructure, and maintain service continuity."
              />
              <div className="mt-10 space-y-4 text-slate-600">
                {supportAreas.map((item) => (
                  <div
                    key={item}
                    className="rounded-[2rem] border border-slate-200 bg-[#F5F6F8] p-6 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
              <Image
                src="/images/Government/Digital%20government.jfif"
                alt="Government key features visual"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
                quality={100}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#0B1F3A] px-6 py-24 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <div className="space-y-6">
                <SectionHeading
                  eyebrow="Benefits"
                  title="The public-sector benefits of secure resilience."
                  description="Improved coordination, safer services, and stronger citizen trust are the outcomes we build toward."
                  titleClassName="!text-white !font-bold"
                  descriptionClassName="!text-white !font-semibold"
                />
                <p className="max-w-2xl text-slate-300">
                  Secure infrastructure and communications support reliable
                  service delivery and faster incident response across
                  government operations.
                </p>
              </div>
              <div className="mt-8">
                <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                  {benefits.map((item) => (
                    <div
                      key={item.label}
                      className="min-w-0 rounded-[2rem] bg-white/10 p-6 text-slate-100 shadow-sm"
                    >
                      <p className="text-2xl font-semibold">{item.value}</p>
                      <p className="mt-2 text-slate-300 text-sm break-words">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <Image
                src="/images/deployment-photo.png"
                alt="Public sector benefits visual"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
            <div>
              <SectionHeading
                eyebrow="Technology in Action"
                title="A government workflow built for continuity and control."
                description="From citizen services to emergency response, every layer is designed for secure delivery."
              />
              <div className="mt-8 grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                {workflow.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.label}
                      className="rounded-[2rem] border border-slate-200 bg-white p-4 text-center shadow-sm min-w-0"
                    >
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-3xl bg-[#F5F6F8] text-[#00A651]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-4 text-sm font-semibold text-[#0B1F3A] break-words">
                        {step.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-[#F5F6F8] p-10 shadow-sm h-full min-h-[420px]">
              <Image
                src="/images/Government/Smart%20city.jfif"
                alt="Government technology"
                width={640}
                height={520}
                className="rounded-[1.75rem] object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="rounded-[2rem] border border-slate-200 bg-[#0B1F3A] p-10 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#00A651]">
                Featured success story
              </p>
              <h2 className="mt-5 text-3xl font-semibold">
                Secure coordination for an emergency response agency.
              </h2>
              <div className="mt-8 space-y-6 text-slate-300">
                <div>
                  <p className="font-semibold text-white">Challenge</p>
                  <p className="mt-3">
                    The agency needed dependable voice and data coordination
                    across multiple teams during incidents.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Solution</p>
                  <p className="mt-3">
                    We implemented redundant communications and centralized
                    monitoring to help teams stay connected.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Results</p>
                  <p className="mt-3">
                    Response times improved and cross-agency handoffs became
                    more reliable.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <Image
                src="/images/deployment-photo.png"
                alt="Public sector deployment"
                width={640}
                height={520}
                className="rounded-[1.75rem] object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#F5F6F8] px-6 py-24 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/Government/Smart%20government.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
          </div>
          <div className="relative mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 shadow-[0_30px_80px_rgba(7,26,47,0.22)] backdrop-blur-sm sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="Our Implementation Approach"
              title="A phased rollout for secure public-sector modernization."
              description="We move from assessment to deployment to long-term support with minimal disruption."
              titleClassName="!text-white !font-bold"
              descriptionClassName="!text-white !font-semibold"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Assessment",
                "Design",
                "Deployment",
                "Training",
                "Support",
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 text-center text-white shadow-sm"
                >
                  <p className="text-[#00A651] font-bold text-lg">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Government technology questions answered."
              description="Practical answers for public-sector leaders evaluating infrastructure modernization."
            />
            <div className="mt-12 space-y-4">
              {faqItems.map((faq, index) => (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#F5F6F8] shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left text-lg font-semibold text-[#0B1F3A]"
                  >
                    <span>{faq.question}</span>
                    <span className="text-slate-500">
                      {openFaq === index ? "−" : "+"}
                    </span>
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

        <section className="relative isolate overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/Government/Public%20safety.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
            <div className="absolute inset-0 bg-slate-950/40" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Related Industries"
              title="Other sectors with similar resilience needs."
              description="These industries also require secure networks, reliable operations, and strong monitoring."
              titleClassName="!text-white !font-bold"
              descriptionClassName="!text-white !font-semibold"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {relatedIndustries.map((industry) => (
                <Link
                  key={industry.title}
                  href={industry.href}
                  className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-white shadow-sm transition hover:border-[#00A651] hover:bg-slate-900/90"
                >
                  <p className="text-lg font-semibold text-white transition-colors hover:text-[#00A651]">
                    {industry.title}
                  </p>
                  <p className="mt-4 text-white/90 font-medium">
                    Explore how Tidal supports related operational environments.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0B1F3A] px-6 py-24 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#6E1E2D] p-14 text-center shadow-[0_30px_80px_rgba(7,26,47,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00A651]">
              Ready to modernize
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Modernize public infrastructure with confidence.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Discover how Tidal can help your agency build resilient services
              and secure critical operations.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Modernize Public Infrastructure</Button>
              <Button href="/industries" variant="secondary">
                Back to industries
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
