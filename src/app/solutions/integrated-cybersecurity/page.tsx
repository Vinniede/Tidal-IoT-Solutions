"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  AlertTriangle,
  Cpu,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const challenges = [
  "Ransomware and malware risk",
  "Phishing and social engineering attacks",
  "Data breaches and compliance exposure",
  "Insider threats and privileged access gaps",
  "Unpatched endpoint vulnerabilities",
  "Lack of security visibility across infrastructure",
];

const workflow = [
  { label: "Prevent", icon: ShieldCheck },
  { label: "Detect", icon: AlertTriangle },
  { label: "Respond", icon: KeyRound },
  { label: "Recover", icon: Cpu },
  { label: "Improve", icon: Sparkles },
];

const features = [
  "Risk assessments and governance",
  "Vulnerability testing and hardening",
  "Endpoint and network protection",
  "Firewall and access control management",
  "Security monitoring and detection",
  "Incident response readiness",
  "Awareness training for teams",
  "Compliance support and reporting",
];

const benefits = [
  { value: "Reduced", label: "Cyber risk" },
  { value: "Stronger", label: "Data protection" },
  { value: "Better", label: "Regulatory posture" },
  { value: "Faster", label: "Incident response" },
  { value: "More", label: "Operational trust" },
  { value: "Improved", label: "Resilience" },
];

const industriesServed = [
  { title: "Government", icon: ShieldCheck },
  { title: "Financial Services", icon: LockKeyhole },
  { title: "Healthcare", icon: Users },
  { title: "Education", icon: Sparkles },
  { title: "Utilities", icon: Cpu },
  { title: "Corporate Enterprises", icon: ShieldAlert },
];

const compliance = [
  "Risk and control assessments",
  "Policy and process alignment",
  "Audit-ready documentation",
  "Regulatory risk reduction",
];

const processSteps = [
  "Discover",
  "Protect",
  "Monitor",
  "Respond",
  "Adapt",
];

const faqs = [
  {
    question: "How do you protect against ransomware?",
    answer: "We combine endpoint controls, network segregation, threat monitoring, and response planning to reduce the risk and impact of ransomware incidents.",
  },
  {
    question: "Do you support compliance initiatives?",
    answer: "Yes. We help align controls, monitoring, and governance with the standards that matter to your organization."
  },
  {
    question: "Can you support legacy infrastructure?",
    answer: "Our team assesses existing systems and builds protective controls around them while planning for safer modernization."
  },
];

const relatedSolutions = [
  { title: "Resilient Networks", href: "/solutions/resilient-networks" },
  { title: "Secure Communications", href: "/solutions/secure-communications" },
  { title: "Intelligent Telematics", href: "/solutions/intelligent-telematics" },
];

export default function IntegratedCybersecurityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#F8FBFC] text-slate-700">
      <Navbar />
      <main>
        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="space-y-4">
              <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl sm:min-h-[340px]"><Image src="/images/solution-cybersecurity-illustration.jfif" alt="Cybersecurity monitoring" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" priority /></div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-[#00a999]">Security operations</p>
                <h2 className="mt-5 text-3xl font-semibold text-[#071A2F]">Modern cybersecurity designed for enterprise continuity.</h2>
                <p className="mt-4 text-slate-600">
                  Protect systems, detect threats, and recover faster with an integrated security program built for your infrastructure. 
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Solution"
                title="Integrated Cybersecurity for the systems that matter most."
                description="We help organizations prevent, detect, respond to, and recover from cyber threats while keeping operations running."
              />
              <p className="max-w-2xl text-slate-600">
                Our cybersecurity services are built around enterprise risk, operational resilience, and controls that protect both field systems and corporate infrastructure.
              </p>
              <ul className="space-y-3 text-slate-600">
                {[
                  "Threat monitoring and incident readiness",
                  "Endpoint, network, and application protection",
                  "Compliance-aware governance and reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00C4B3]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact">Protect your business today</Button>
                <Button href="/solutions" variant="secondary">Back to solutions</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
            <div>
              <SectionHeading
                eyebrow="Overview"
                title="Security designed around people, systems, and risk."
                description="We help enterprises move beyond point tools to a cohesive cybersecurity program that protects mission-critical operations."
              />
              <p className="mt-6 max-w-2xl text-slate-600">
                Our integrated approach brings together assessments, protection, monitoring, and response so security is part of how your organization operates. 
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#00C4B3]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#00C4B3]" />
                Solution overview
              </div>
              <p className="mt-6 text-slate-600">
                We embed security controls into infrastructure operations with clear risk management, monitoring, and response practices. 
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F8FBFC] px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Business Challenges"
              title="Cyber risks that put operations, data, and compliance at stake."
              description="These security gaps are what our integrated cybersecurity services are designed to address."
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
              eyebrow="Security Framework"
              title="A practical progression from prevention to improvement."
              description="Our security lifecycle supports defense, detection, response, recovery, and continuous improvement."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-5">
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
        </section>

        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Security Services"
              title="Capabilities that protect risks across infrastructure layers."
              description="These services cover assessment, protection, monitoring, and response for enterprise systems."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => (
                <div key={feature} className="rounded-[2rem] border border-slate-200 bg-[#F8FBFC] p-8 shadow-sm">
                  <p className="font-semibold text-[#071A2F]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#071A2F] px-6 py-24 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Benefits"
                title="Security outcomes that support continuity and trust."
                description="Protecting your systems means less disruption, better compliance, and higher confidence for stakeholders."
              />
              <p className="max-w-2xl text-slate-300">
                Our customers strengthen resilience, reduce exposure, and make security a stable part of their operations. 
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
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="rounded-[2rem] border border-slate-200 bg-[#F8FBFC] p-10 shadow-sm">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#00C4B3]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#00C4B3]" />
                Security layers
              </div>
              <h3 className="mt-6 text-3xl font-semibold text-[#071A2F]">Protection across users, devices, network, and data.</h3>
              <p className="mt-4 text-slate-600">
                Each layer of your infrastructure is covered with controls, monitoring, and response capabilities that work together. 
              </p>
              <ul className="mt-8 space-y-4 text-slate-600">
                {[
                  "User and identity controls",
                  "Device and endpoint protection",
                  "Network and access security",
                  "Application and data governance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00C4B3]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <Image src="/images/solution-cybersecurity-illustration.jfif" alt="Security layers" width={640} height={520} className="rounded-[1.75rem] object-cover" priority />
            </div>
          </div>
        </section>

        <section className="bg-[#F8FBFC] px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Industries"
              title="Cybersecurity for regulated and high-risk environments."
              description="We support organizations that cannot tolerate breaches, downtime, or compliance failures."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {industriesServed.map((industry) => {
                const Icon = industry.icon;
                return (
                  <div key={industry.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#E8FFF9] text-[#00C4B3]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-[#071A2F]">{industry.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Compliance"
              title="Supporting security controls with clear process and documentation."
              description="Our work is built to reduce audit risk and make compliance more practical for your teams."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {compliance.map((item) => (
                <div key={item} className="rounded-[2rem] border border-slate-200 bg-[#F8FBFC] p-8 shadow-sm">
                  <p className="font-semibold text-[#071A2F]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Implementation Process"
              title="A disciplined security program from discovery to continuous improvement."
              description="Our cybersecurity approach keeps capabilities aligned with your risk and operational needs."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-5">
              {processSteps.map((step) => (
                <div key={step} className="rounded-[2rem] border border-slate-200 bg-[#F8FBFC] p-8 text-center shadow-sm">
                  <p className="text-lg font-semibold text-[#071A2F]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="rounded-[2rem] border border-slate-200 bg-[#071A2F] p-10 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#5DE6D6]">Featured case study</p>
              <h2 className="mt-5 text-3xl font-semibold">Security transformation for a financial services firm.</h2>
              <div className="mt-8 space-y-6 text-slate-300">
                <div>
                  <p className="font-semibold text-white">Challenge</p>
                  <p className="mt-3">A financial services client needed stronger controls without disrupting customer-facing systems. </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Solution</p>
                  <p className="mt-3">We integrated endpoint protection, network segmentation, and monitoring while preserving uptime. </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Results</p>
                  <p className="mt-3">Security posture improved, audit readiness increased, and incident readiness became part of day-to-day operations.</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <Image src="/images/cybersecurity-article.png" alt="Cybersecurity case study" width={640} height={520} className="rounded-[1.75rem] object-cover" priority />
            </div>
          </div>
        </section>

        <section className="bg-[#F8FBFC] px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Cybersecurity questions answered for enterprise leaders."
              description="Practical guidance on threat protection, monitoring, and compliance."
            />
            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left text-lg font-semibold text-[#071A2F]"
                  >
                    <span>{faq.question}</span>
                    <span className="text-slate-500">{openFaq === index ? "−" : "+"}</span>
                  </button>
                  {openFaq === index ? (
                    <div className="border-t border-slate-200 bg-[#F8FBFC] px-6 py-6 text-slate-600">
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
              eyebrow="Related Solutions"
              title="Security should be part of every infrastructure deployment."
              description="These solutions strengthen your control plane across network and communications."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {relatedSolutions.map((solution) => (
                <Link
                  key={solution.title}
                  href={solution.href}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:border-[#00C4B3] hover:bg-[#F8FBFC]"
                >
                  <p className="font-semibold text-[#071A2F]">{solution.title}</p>
                  <p className="mt-4 text-slate-600">Explore the infrastructure capabilities that help secure your enterprise. </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#071A2F]">
                    View solution
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#071A2F] px-6 py-24 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#102A45] p-14 text-center shadow-[0_30px_80px_rgba(7,26,47,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5DE6D6]">Ready to protect</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Protect your infrastructure with integrated cybersecurity.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Our cybersecurity team helps you build protection that supports both operations and compliance. 
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Protect your business today</Button>
              <Button href="/solutions" variant="secondary">Explore other solutions</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
