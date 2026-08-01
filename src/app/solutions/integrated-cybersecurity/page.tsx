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
  { value: "Faster", label: "Incident response" },
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

const processSteps = ["Discover", "Protect", "Monitor", "Respond", "Adapt"];

const faqs = [
  {
    question: "How do you protect against ransomware?",
    answer:
      "We combine endpoint controls, network segregation, threat monitoring, and response planning to reduce the risk and impact of ransomware incidents.",
  },
  {
    question: "Do you support compliance initiatives?",
    answer:
      "Yes. We help align controls, monitoring, and governance with the standards that matter to your organization.",
  },
  {
    question: "Can you support legacy infrastructure?",
    answer:
      "Our team assesses existing systems and builds protective controls around them while planning for safer modernization.",
  },
];

const relatedSolutions = [
  { title: "Resilient Networks", href: "/solutions/resilient-networks" },
  { title: "Secure Communications", href: "/solutions/secure-communications" },
  {
    title: "Intelligent Telematics",
    href: "/solutions/intelligent-telematics",
  },
];

export default function IntegratedCybersecurityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#F5F6F8] text-slate-700">
      <Navbar />
      <main>
        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-xl h-full sm:min-h-[640px]">
              <Image
                src="/images/solution-cybersecurity-illustration.jfif"
                alt="Cybersecurity monitoring"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="space-y-6 h-full">
              <SectionHeading
                eyebrow="Solution"
                title="Integrated Cybersecurity for the systems that matter most."
                description="We help organizations prevent, detect, respond to, and recover from cyber threats while keeping operations running."
              />
              <p className="max-w-2xl text-slate-600">
                Our cybersecurity services are built around enterprise risk,
                operational resilience, and controls that protect both field
                systems and corporate infrastructure.
              </p>
              <ul className="space-y-3 text-slate-600">
                {[
                  "Threat monitoring and incident readiness",
                  "Endpoint, network, and application protection",
                  "Compliance-aware governance and reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00A651]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-[#00A651]">
                  Security operations
                </p>
                <h2 className="mt-5 text-3xl font-semibold text-[#0B1F3A]">
                  Modern cybersecurity designed for enterprise continuity.
                </h2>
                <p className="mt-4 text-slate-600">
                  Protect systems, detect threats, and recover faster with an
                  integrated security program built for your infrastructure.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact">Protect your business today</Button>
                <Button href="/solutions" variant="secondary">
                  Back to solutions
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/Integrated Cybersecurity/Cybersecurity dashboard.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/55 to-slate-950/80" />
          </div>
          <div className="relative mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
            <div className="text-white">
              <SectionHeading
                eyebrow="Overview"
                title="Security designed around people, systems, and risk."
                description="We help enterprises move beyond point tools to a cohesive cybersecurity program that protects mission-critical operations."
                titleClassName="!text-white !font-bold"
                descriptionClassName="!text-white !font-semibold"
              />
              <p className="mt-6 max-w-2xl text-slate-200 font-semibold">
                Our integrated approach brings together assessments, protection,
                monitoring, and response so security is part of how your
                organization operates.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/15 bg-slate-950/80 p-10 text-white shadow-2xl shadow-slate-950/25 backdrop-blur-sm">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#00A651]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#00A651]" />
                Solution overview
              </div>
              <p className="mt-6 text-slate-300">
                We embed security controls into infrastructure operations with
                clear risk management, monitoring, and response practices.
              </p>
              <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/15">
                <Image
                  src="/images/Integrated Cybersecurity/Threat monitoring.jfif"
                  alt="Cybersecurity overview"
                  width={640}
                  height={420}
                  className="h-56 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F6F8] px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-stretch">
            <div>
              <SectionHeading
                eyebrow="Business Challenges"
                title="Cyber risks that put operations, data, and compliance at stake."
                description="These security gaps are what our integrated cybersecurity services are designed to address."
              />
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {challenges.map((challenge) => (
                  <div
                    key={challenge}
                    className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
                  >
                    <p className="text-slate-700">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[560px] h-full overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl sm:min-h-[680px]">
              <Image
                src="/images/Integrated Cybersecurity/Digital security shield.jfif"
                alt="Security challenges visual"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/Integrated Cybersecurity/Firewall visualization.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
          </div>
          <div className="relative mx-auto max-w-7xl text-white">
            <SectionHeading
              eyebrow="Security Framework"
              title="A practical progression from prevention to improvement."
              description="Our security lifecycle supports defense, detection, response, recovery, and continuous improvement."
              align="left"
              titleClassName="!text-white !font-bold lg:text-5xl"
              descriptionClassName="!text-white !font-semibold text-lg sm:text-xl"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {workflow.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.label}
                    className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-[#F5F6F8] text-[#00A651]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-6 font-semibold text-[#0B1F3A]">
                      {step.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-stretch">
            <div>
              <SectionHeading
                eyebrow="Security Services"
                title="Capabilities that protect risks across infrastructure layers."
                description="These services cover assessment, protection, monitoring, and response for enterprise systems."
              />
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-[2rem] border border-slate-200 bg-[#F5F6F8] p-8 shadow-sm"
                  >
                    <p className="font-semibold text-[#0B1F3A]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[520px] h-full overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl sm:min-h-[640px]">
              <Image
                src="/images/Integrated Cybersecurity/Security operations center.jfif"
                alt="Security services visual"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#0B1F3A] px-6 py-24 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Benefits"
                title="Security outcomes that support continuity and trust."
                description="Protecting your systems means less disruption, better compliance, and higher confidence for stakeholders."
                titleClassName="!text-white !font-bold"
                descriptionClassName="!text-white !font-semibold"
              />
              <p className="max-w-2xl text-slate-300">
                Our customers strengthen resilience, reduce exposure, and make
                security a stable part of their operations.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 h-full items-stretch">
              {benefits.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[2rem] bg-white/10 p-8 text-slate-100 shadow-sm h-full"
                >
                  <p className="text-3xl font-semibold">{item.value}</p>
                  <p className="mt-3 text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="rounded-[2rem] border border-slate-200 bg-[#F5F6F8] p-10 shadow-sm">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#00A651]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#00A651]" />
                Security layers
              </div>
              <h3 className="mt-6 text-3xl font-semibold text-[#0B1F3A]">
                Protection across users, devices, network, and data.
              </h3>
              <p className="mt-4 text-slate-600">
                Each layer of your infrastructure is covered with controls,
                monitoring, and response capabilities that work together.
              </p>
              <ul className="mt-8 space-y-4 text-slate-600">
                {[
                  "User and identity controls",
                  "Device and endpoint protection",
                  "Network and access security",
                  "Application and data governance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00A651]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <Image
                src="/images/solution-cybersecurity-illustration.jfif"
                alt="Security layers"
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
              src="/images/Integrated Cybersecurity/Threat monitoring.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
          </div>
          <div className="relative mx-auto max-w-7xl text-white">
            <SectionHeading
              eyebrow="Industries"
              title="Cybersecurity for regulated and high-risk environments."
              description="We support organizations that cannot tolerate breaches, downtime, or compliance failures."
              titleClassName="text-white"
              descriptionClassName="text-slate-200"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {industriesServed.map((industry) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={industry.title}
                    className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#F5F6F8] text-[#00A651]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-[#0B1F3A]">
                      {industry.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <SectionHeading
                eyebrow="Compliance"
                title="Supporting security controls with clear process and documentation."
                description="Our work is built to reduce audit risk and make compliance more practical for your teams."
              />
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {compliance.map((item) => (
                  <div
                    key={item}
                    className="rounded-[2rem] border border-slate-200 bg-[#F5F6F8] p-8 shadow-sm"
                  >
                    <p className="font-semibold text-[#0B1F3A]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
              <Image
                src="/images/Integrated Cybersecurity/Threat monitoring.jfif"
                alt="Compliance visual"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/Integrated Cybersecurity/Cybersecurity dashboard.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
            <div className="absolute inset-0 bg-slate-950/70" />
          </div>
          <div className="relative mx-auto max-w-7xl text-white">
            <SectionHeading
              eyebrow="Implementation Process"
              title="A disciplined security program from discovery to continuous improvement."
              description="Our cybersecurity approach keeps capabilities aligned with your risk and operational needs."
              titleClassName="text-white"
              descriptionClassName="text-slate-200"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step) => (
                <div
                  key={step}
                  className="rounded-[2rem] border border-slate-200 bg-[#F5F6F8] p-8 text-center shadow-sm"
                >
                  <p className="text-lg font-semibold text-[#0B1F3A]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="rounded-[2rem] border border-slate-200 bg-[#0B1F3A] p-10 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#00A651]">
                Featured case study
              </p>
              <h2 className="mt-5 text-3xl font-semibold">
                Security transformation for a financial services firm.
              </h2>
              <div className="mt-8 space-y-6 text-slate-300">
                <div>
                  <p className="font-semibold text-white">Challenge</p>
                  <p className="mt-3">
                    A financial services client needed stronger controls without
                    disrupting customer-facing systems.{" "}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Solution</p>
                  <p className="mt-3">
                    We integrated endpoint protection, network segmentation, and
                    monitoring while preserving uptime.{" "}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Results</p>
                  <p className="mt-3">
                    Security posture improved, audit readiness increased, and
                    incident readiness became part of day-to-day operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <Image
                src="/images/cybersecurity-article.png"
                alt="Cybersecurity case study"
                width={640}
                height={520}
                className="rounded-[1.75rem] object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-6 py-24 sm:px-8 lg:px-12 text-white">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Cybersecurity questions answered for enterprise leaders."
              description="Practical guidance on threat protection, monitoring, and compliance."
              titleClassName="text-white"
              descriptionClassName="text-slate-300"
            />
            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.35)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left text-lg font-semibold text-white"
                  >
                    <span>{faq.question}</span>
                    <span className="text-cyan-300">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index ? (
                    <div className="border-t border-slate-800 bg-slate-900 px-6 py-6 text-slate-300">
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
              titleClassName="text-slate-950"
              descriptionClassName="text-slate-600"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {relatedSolutions.map((solution) => (
                <Link
                  key={solution.title}
                  href={solution.href}
                  className="rounded-[2rem] bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-[0_25px_50px_rgba(15,23,42,0.12)] transition-transform hover:-translate-y-1 hover:shadow-[0_35px_80px_rgba(15,23,42,0.18)]"
                >
                  <p className="font-semibold text-slate-950">
                    {solution.title}
                  </p>
                  <p className="mt-4 text-slate-600">
                    Explore the infrastructure capabilities that help secure
                    your enterprise.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
                    View solution
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0B1F3A] px-6 py-24 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#6E1E2D] p-14 text-center shadow-[0_30px_80px_rgba(7,26,47,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00A651]">
              Ready to protect
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Protect your infrastructure with integrated cybersecurity.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Our cybersecurity team helps you build protection that supports
              both operations and compliance.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Protect your business today</Button>
              <Button href="/solutions" variant="secondary">
                Explore other solutions
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
