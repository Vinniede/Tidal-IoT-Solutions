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
            <div className="space-y-4">
              <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl sm:min-h-[340px]"><Image src="/images/industry-banking.jfif" alt="Financial operations" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" priority /></div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#E8FFF9] text-[#00a999]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-[#071A2F]">Secure infrastructure for financial operations.</h2>
                <p className="mt-4 text-slate-600">Protect sensitive data, ensure uptime, and maintain compliance across your branch and digital services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <div>
              <SectionHeading
                eyebrow="Industry Overview"
                title="Financial institutions need secure, reliable systems that can scale with customer demand."
                description="Availability, privacy, and operational trust are essential for every banking network."
              />
              <p className="mt-6 text-slate-600">
                Tidal builds infrastructure that helps banks stay online, protect sensitive transactions, and support distributed teams with confidence.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#00C4B3]">Financial services focus</p>
              <p className="mt-6 text-slate-600">
                Our solutions are built for secure operations across branches, back-office teams, and digital service channels.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F8FBFC] px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Industry Challenges"
              title="Financial networks face security, availability, and compliance challenges."
              description="These issues can impact customer trust, transaction continuity, and operational efficiency."
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
              title="Banking is balancing digital convenience with secure, resilient infrastructure."
              description="The next wave of financial services demands seamless security and operational visibility."
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
                title="We deliver secure infrastructure that keeps financial services available and compliant."
                description="Our solutions protect branch networks, remote teams, and transaction systems from downtime and risk."
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
                title="The benefits of resilient financial infrastructure."
                description="Stronger uptime, security, and compliance help institutions move forward with confidence."
              />
              <p className="max-w-2xl text-slate-300">
                Better availability and stronger protection mean fewer disruptions, faster service, and more trust from customers.
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
                title="A financial workflow that secures transactions and operations."
                description="Our design connects branches, data, and compliance controls into a single resilient system."
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
              <Image src="/images/industry-banking.jfif" alt="Financial technology" width={640} height={520} className="rounded-[1.75rem] object-cover" priority />
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

        <section className="bg-[#F8FBFC] px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Our Implementation Approach"
              title="A secure rollout for financial network modernization."
              description="We introduce resilience and compliance in phases that minimize disruption."
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

        <section className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
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
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:border-[#00C4B3] hover:bg-[#F8FBFC]"
                >
                  <p className="font-semibold text-[#071A2F]">{industry.title}</p>
                  <p className="mt-4 text-slate-600">Explore how Tidal supports related operational needs.</p>
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
