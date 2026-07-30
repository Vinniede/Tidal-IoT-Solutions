"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Building2, CreditCard, Globe2, Lock, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const challenges = [
  "Endpoint and branch security gaps",
  "Transaction systems that must stay available",
  "Remote workforce access without exposing data",
  "Regulatory demand for stronger audit trails",
  "Cash handling and branch network risk",
  "Legacy infrastructure limiting digital expansion",
];

const trends = [
  "Hybrid branch and digital banking models",
  "Zero trust connectivity for remote operations",
  "Real-time transaction monitoring and alerts",
  "Secure mobile access for advisors and staff",
  "Data-driven fraud prevention and compliance",
];

const supportAreas = [
  "Encrypted branch and office networks",
  "Transaction monitoring for availability and integrity",
  "Secure remote access for distributed teams",
  "Compliance-ready security operations",
];

const solutions = [
  { title: "Secure Networks", icon: ShieldCheck },
  { title: "Transaction Resilience", icon: CreditCard },
  { title: "Remote Access Security", icon: Lock },
  { title: "Compliance Operations", icon: Globe2 },
];

const benefits = [
  { value: "Higher", label: "transaction availability" },
  { value: "Stronger", label: "data protection" },
  { value: "Faster", label: "incident response" },
  { value: "Improved", label: "branch security" },
  { value: "Clearer", label: "audit visibility" },
  { value: "Better", label: "customer trust" },
];

const workflow = [
  { label: "Branch Network", icon: Building2 },
  { label: "Transaction Layer", icon: CreditCard },
  { label: "Secure Gateway", icon: Lock },
  { label: "Monitoring", icon: Sparkles },
  { label: "Compliance", icon: Globe2 },
];

const galleryImages = [
  {
    src: "/images/Banking/Digital banking.jfif",
    title: "Digital banking",
    description: "A modern view of secure digital financial experiences and branch connectivity.",
  },
  {
    src: "/images/Banking/Financial technology.jfif",
    title: "Financial technology",
    description: "Technology built to support resilient services and trusted transactions.",
  },
  {
    src: "/images/Banking/Secure banking.jfif",
    title: "Secure banking",
    description: "Security-first infrastructure designed for compliance and continuity.",
  },
  {
    src: "/images/Banking/Secure transactions.jfif",
    title: "Secure transactions",
    description: "A clear visual for the integrity and protection of high-value financial flows.",
  },
];

const faqItems = [
  {
    question: "Can Tidal support branch and remote office security?",
    answer: "Yes. We secure branch networks, remote staff access, and transaction systems with enterprise-grade connectivity and monitoring.",
  },
  {
    question: "How do you help with financial compliance?",
    answer: "We build systems that provide the visibility and security controls needed to support regulatory reporting and audits.",
  },
  {
    question: "Can you protect cash operations and transaction flows?",
    answer: "Our solutions help safeguard branch operations, ATMs, and payment systems with secured backhaul and resilient networks.",
  },
];

const relatedIndustries = [
  { title: "Government", href: "/industries/government" },
  { title: "Security Companies", href: "/industries/security-companies" },
  { title: "SMEs", href: "/industries/smes" },
];

export default function BankingFinancialServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#F8FBFC] text-slate-700">
      <Navbar />
      <main>
        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <SectionHeading
                  eyebrow="Industry"
                  title="Banking & Financial Services"
                  description="Protected networks and resilient transaction infrastructure for modern financial operations."
                />
                <p className="max-w-2xl text-slate-600">
                  We help banks and financial institutions secure branch networks, protect remote teams, and keep digital services available under pressure.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact">Request a consultation</Button>
                  <Button href="/industries" variant="secondary">Back to industries</Button>
                </div>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#E8FFF9] text-[#00a999]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-[#071A2F]">Secure infrastructure for financial operations.</h2>
                <p className="mt-4 text-slate-600">Protect sensitive data, ensure uptime, and maintain compliance across your branch and digital services.</p>
              </div>
            </div>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl"><Image src="/images/Banking/Secure banking.jfif" alt="Financial operations" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-center" quality={100} priority /></div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10">
            <Image src="/images/Banking/Secure banking.jfif" alt="" fill sizes="100vw" className="object-cover object-center" quality={100} />
          
          </div>
          <div className="relative mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
            <div className="rounded-[2rem] border border-white/10 bg-transparent p-10 text-white shadow-2xl flex flex-col gap-6">
              <SectionHeading
                eyebrow="Industry Overview"
                title="Financial institutions need secure, reliable systems that can scale with customer demand."
                description="Availability, privacy, and operational trust are essential for every banking network."
              />
              <p className="mt-2 text-white font-semibold">
                Tidal builds infrastructure that helps banks stay online, protect sensitive transactions, and support distributed teams with confidence.
              </p>
              <div className="w-full max-w-xs rounded-lg bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[#5CE3D0]">Financial services focus</p>
                <p className="mt-3 text-slate-200 text-sm">Secure operations for branches, back-office, and digital channels.</p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-transparent p-8 text-white shadow-xl flex h-full items-center">
              <div className="w-full">
                <div className="flex flex-col justify-center h-full gap-6">
                  <div>
                    <p className="text-2xl font-bold">99.9%</p>
                    <p className="text-sm text-slate-200">Transaction availability</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">PCI-ready</p>
                    <p className="text-sm text-slate-200">Compliance posture</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">Real-time</p>
                    <p className="text-sm text-slate-200">Monitoring & alerts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8FBFC] px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <SectionHeading
                eyebrow="Industry Challenges"
                title="Financial networks face security, availability, and compliance challenges."
                description="These issues can impact customer trust, transaction continuity, and operational efficiency."
              />
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {challenges.slice(0,4).map((challenge) => (
                  <div key={challenge} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                    <p className="text-slate-700">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
              <Image src="/images/Banking/Secure transactions.jfif" alt="Banking challenges visual" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-center" quality={100} />
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10">
            <Image src="/images/Banking/Financial technology.jfif" alt="" fill sizes="100vw" className="object-cover object-center" quality={100} />
            <div className="absolute inset-0 bg-slate-950/30" />
          </div>
          <div className="relative mx-auto max-w-7xl text-white">
            <SectionHeading
              eyebrow="Industry Trends"
              title="Banking is balancing digital convenience with secure, resilient infrastructure."
              description="The next wave of financial services demands seamless security and operational visibility."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {trends.map((trend) => (
                <div key={trend} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-white shadow-sm">
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
                title="We deliver secure infrastructure that keeps financial services available and compliant."
                description="Our solutions protect branch networks, remote teams, and transaction systems from downtime and risk."
              />
              <div className="mt-8 space-y-4 text-slate-600 text-sm">
                {supportAreas.map((item) => (
                  <div key={item} className="rounded-[2rem] border border-slate-200 bg-[#F8FBFC] p-4 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
              <Image src="/images/Banking/Financial technology.jfif" alt="Banking key features visual" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-center" quality={100} />
            </div>
          </div>
        </section>

        <section className="bg-[#071A2F] px-6 py-24 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <div className="space-y-6">
                <SectionHeading
                  eyebrow="Benefits"
                  title="The benefits of resilient financial infrastructure."
                  description="Stronger uptime, security, and compliance help institutions move forward with confidence."
                />
                <p className="max-w-2xl text-slate-300">
                  Better availability and stronger protection mean fewer disruptions, faster service, and more trust from customers.
                </p>
              </div>
              <div className="mt-8">
                <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                  {benefits.map((item) => (
                    <div key={item.label} className="min-w-0 rounded-[2rem] bg-white/10 p-6 text-slate-100 shadow-sm">
                      <p className="text-2xl font-semibold">{item.value}</p>
                      <p className="mt-2 text-slate-300 text-sm break-words">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <Image src="/images/deployment-photo.png" alt="Financial benefits visual" fill className="object-cover object-center" />
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
            <div>
              <SectionHeading
                eyebrow="Technology in Action"
                title="A financial workflow that secures transactions and operations."
                description="Our design connects branches, data, and compliance controls into a single resilient system."
              />
              <div className="mt-8 grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                {workflow.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.label} className="rounded-[2rem] border border-slate-200 bg-white p-4 text-center shadow-sm min-w-0">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-3xl bg-[#E8FFF9] text-[#00C4B3]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-4 text-sm font-semibold text-[#071A2F] break-words">{step.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-[#F8FBFC] p-10 shadow-sm h-full min-h-[420px]">
                <Image src="/images/Banking/Secure banking.jfif" alt="Financial technology" width={640} height={520} className="rounded-[1.75rem] object-cover" priority />
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="rounded-[2rem] border border-slate-200 bg-[#071A2F] p-10 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#5DE6D6]">Featured success story</p>
              <h2 className="mt-5 text-3xl font-semibold">Branch network hardening for a regional bank.</h2>
              <div className="mt-8 space-y-6 text-slate-300">
                <div>
                  <p className="font-semibold text-white">Challenge</p>
                  <p className="mt-3">A bank network needed stronger branch security and reliable transaction connectivity for remote teams.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Solution</p>
                  <p className="mt-3">We deployed secure networking, encrypted access, and monitoring for branch and remote operations.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Results</p>
                  <p className="mt-3">The bank achieved higher branch uptime and improved risk visibility across its network.</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <Image src="/images/deployment-photo.png" alt="Financial services deployment" width={640} height={520} className="rounded-[1.75rem] object-cover" priority />
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#F8FBFC] px-6 py-24 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10">
            <Image src="/images/Banking/Financial technology.jfif" alt="" fill sizes="100vw" className="object-cover object-center" quality={100} />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Our Implementation Approach"
              title="A secure rollout for financial network modernization."
              description="We introduce resilience and compliance in phases that minimize disruption."
              titleClassName="text-[#071A2F] font-bold"
              descriptionClassName="text-[#071A2F] font-semibold"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Assessment",
                "Design",
                "Deployment",
                "Training",
                "Support",
              ].map((step) => (
                <div key={step} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 text-center text-white shadow-sm">
                  <p className="text-[#00C4B3] font-bold text-lg">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Banking and finance questions answered."
              description="Clear guidance for financial leaders planning resilient infrastructure investments."
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

        <section className="relative isolate overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10">
            <Image src="/images/Banking/Secure transactions.jfif" alt="" fill sizes="100vw" className="object-cover object-center" quality={100} />
            <div className="absolute inset-0 bg-slate-950/30" />
          </div>
          <div className="relative mx-auto max-w-7xl text-white">
            <SectionHeading
              eyebrow="Related Industries"
              title="Other sectors with shared infrastructure needs."
              description="These industries also require secure operations, reliable communications, and strong service continuity."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {relatedIndustries.map((industry) => (
                <Link
                  key={industry.title}
                  href={industry.href}
                  className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-white shadow-sm transition hover:border-[#00C4B3] hover:bg-slate-900/90"
                >
                  <p className="font-bold text-white text-lg transition-colors hover:text-[#00C4B3]">{industry.title}</p>
                  <p className="mt-4 text-slate-200 font-medium">Explore how Tidal supports related operational needs.</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#071A2F] px-6 py-24 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#102A45] p-14 text-center shadow-[0_30px_80px_rgba(7,26,47,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5DE6D6]">Ready to protect</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Protect your financial network with Tidal.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Talk to our team about a secure infrastructure strategy for your banking operations.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Request a consultation</Button>
              <Button href="/industries" variant="secondary">Back to industries</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
