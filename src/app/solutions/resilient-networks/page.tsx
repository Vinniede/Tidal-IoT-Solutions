"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Cpu,
  Globe2,
  Server,
  ShieldCheck,
  Wifi,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const challenges = [
  "Unexpected downtime from single-path networks",
  "Uneven coverage and slow connectivity",
  "Legacy infrastructure that cannot scale",
  "Poor traffic prioritization for critical services",
  "Lack of network visibility and monitoring",
  "Insufficient resilience for hybrid operations",
];

const workflow = [
  { label: "Internet", icon: Cloud },
  { label: "Firewall", icon: ShieldCheck },
  { label: "Core Network", icon: Server },
  { label: "Switches", icon: Cpu },
  { label: "Wi-Fi", icon: Wifi },
  { label: "Users", icon: Globe2 },
];

const features = [
  "LAN and WAN architecture",
  "SD-WAN design and management",
  "High-availability failover",
  "Cloud and edge connectivity",
  "Wireless and fiber deployment",
  "Network monitoring and alerting",
  "Infrastructure design reviews",
  "Ongoing performance tuning",
];

const benefits = [
  { value: "99.98%", label: "Availability" },
  { value: "3x", label: "Faster failover" },
  { value: "20%", label: "Lower latency" },
  { value: "50%", label: "Reduced outages" },
];

const industriesServed = [
  { title: "Logistics", icon: Globe2 },
  { title: "Government", icon: ShieldCheck },
  { title: "Banking", icon: Cloud },
  { title: "Utilities", icon: Wifi },
  { title: "Healthcare", icon: CheckCircle2 },
  { title: "Education", icon: Server },
];

const processSteps = [
  "Site Survey",
  "Design",
  "Deployment",
  "Testing",
  "Support",
];

const faqs = [
  {
    question: "How do you improve network resilience?",
    answer:
      "We build redundant paths, failover logic, and proactive monitoring so network services stay available during disruptions.",
  },
  {
    question: "Can you integrate with cloud services and edge sites?",
    answer:
      "Yes. Our network designs support hybrid infrastructure, connecting cloud, data center, and remote edge deployments.",
  },
  {
    question: "What kinds of monitoring do you provide?",
    answer:
      "We provide active performance monitoring, traffic visibility, and alerting for latency, packet loss, and availability.",
  },
];

const relatedSolutions = [
  {
    title: "Integrated Cybersecurity",
    href: "/solutions/integrated-cybersecurity",
  },
  { title: "Secure Communications", href: "/solutions/secure-communications" },
  {
    title: "Intelligent Telematics",
    href: "/solutions/intelligent-telematics",
  },
];

export default function ResilientNetworksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#F5F6F8] text-slate-700">
      <Navbar />
      <main>
        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-stretch">
            <div className="space-y-6 h-full">
              <SectionHeading
                eyebrow="Solution"
                title="Resilient Networks designed for uptime, scale, and security."
                description="We build enterprise-grade architectures that keep people, applications, and services connected under any condition."
              />
              <p className="max-w-2xl text-slate-600">
                From campus networks to distributed edge sites, our resilient
                network services reduce outages, improve throughput, and create
                predictable performance.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Redundant architectures",
                  "Edge-ready deployments",
                  "Performance monitoring",
                  "Scalable design",
                ].map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.75rem] border border-slate-200 bg-[#F5F6F8] p-5"
                  >
                    <p className="font-semibold text-[#0B1F3A]">{point}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#F5F6F8] text-[#00A651]">
                  <Server className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-[#0B1F3A]">
                  Network architecture made to withstand interruptions.
                </h2>
                <p className="mt-4 text-slate-600">
                  We design connectivity with redundancy, visibility, and
                  predictable failover so your services stay online.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact">Build a stronger network</Button>
                <Button href="/solutions" variant="secondary">
                  Back to solutions
                </Button>
              </div>
            </div>

            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-xl h-full sm:min-h-[640px]">
              <Image
                src="/images/solution-network-infrastructure-illustration.jfif"
                alt="Resilient network infrastructure"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/Resilient Networks/Fiber optic network.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/55 to-slate-950/80" />
          </div>
          <div className="relative mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start text-white">
            <div>
              <SectionHeading
                eyebrow="Overview"
                title="Networks that keep your operations moving without surprise outages."
                description="We design and deploy resilient networking for the full stack from transport to access and monitoring."
              />
              <p className="mt-6 max-w-2xl text-slate-200 font-semibold">
                Our approach balances redundancy, performance, and security so
                teams can rely on critical systems and scale safely as demand
                grows.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#00A651]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#00A651]" />
                Solution overview
              </div>
              <p className="mt-6 text-slate-600">
                We combine high-availability routing, edge resilience, and
                proactive monitoring to support both real-time services and
                long-term growth.
              </p>
              <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200">
                <Image
                  src="/images/Resilient Networks/Network infrastructure.jfif"
                  alt="Network overview"
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
                title="Network problems that threaten availability and performance."
                description="These are the issues our resilient network designs are built to prevent."
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
                src="/images/Resilient Networks/Cloud networking.jfif"
                alt="Resilient network visual"
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
              src="/images/Resilient Networks/Enterprise data center.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
          </div>
          <div className="relative mx-auto max-w-7xl text-white">
            <SectionHeading
              eyebrow="Network Architecture"
              title="A layered topology that supports uptime, security, and scale."
              description="From external transport to local access, every layer is designed for resilient operations."
              align="left"
              titleClassName="lg:text-5xl"
              descriptionClassName="text-lg sm:text-xl"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-6">
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
                eyebrow="Services"
                title="Network services that support modern enterprise demands."
                description="Each capability is designed to improve availability, throughput, and operational readiness."
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
                src="/images/Resilient Networks/Server racks.jfif"
                alt="Data center services visual"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#0B1F3A] px-6 py-24 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Benefits"
                title="The outcomes your operations need from a resilient network."
                description="We focus on availability, performance, and infrastructure that supports enterprise growth."
              />
              <p className="max-w-2xl text-slate-300">
                Teams gain confidence in their network, with fewer outages,
                faster recovery, and better capacity for new applications.
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
                Technology ecosystem
              </div>
              <h3 className="mt-6 text-3xl font-semibold text-[#0B1F3A]">
                Topology and tools for a stronger network foundation.
              </h3>
              <p className="mt-4 text-slate-600">
                We align transport, core services, edge connectivity, and user
                access so every layer contributes to reliable operations.
              </p>
              <ul className="mt-8 space-y-4 text-slate-600">
                {[
                  "Redundant internet and WAN paths",
                  "Secure core and edge switching",
                  "Wireless and wired access management",
                  "Monitoring and failover automation",
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
                src="/images/solution-network-infrastructure-illustration.jfif"
                alt="Network topology"
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
              src="/images/Resilient Networks/Network infrastructure.jfif"
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
              title="Networks that support mission-critical teams and services."
              description="These industries rely on high availability, security, and performance from their network infrastructure."
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
                eyebrow="Why choose Tidal"
                title="Networking expertise that keeps enterprise systems dependable."
                description="We combine design, deployment, and support so network infrastructure drives performance and resilience."
              />
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {[
                  "Availability-focused architecture",
                  "Scalable design for future growth",
                  "Monitoring and service readiness",
                  "Security-aware infrastructure",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
                  >
                    <p className="font-semibold text-[#0B1F3A]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
              <Image
                src="/images/Resilient Networks/Fiber optic network.jfif"
                alt="Why choose Tidal visual"
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
              src="/images/Resilient Networks/Cloud networking.jfif"
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
              title="From survey to support, a reliable network deployment path."
              description="We keep each step visible and aligned with your operational priorities."
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
                High-availability networking for a regional bank.
              </h2>
              <div className="mt-8 space-y-6 text-slate-300">
                <div>
                  <p className="font-semibold text-white">Challenge</p>
                  <p className="mt-3">
                    A banking network needed reliable branch connectivity
                    without service interruptions during peak loads.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Solution</p>
                  <p className="mt-3">
                    We implemented redundant WAN paths, performance monitoring,
                    and local failover for critical services.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Results</p>
                  <p className="mt-3">
                    The bank reduced network outages and delivered a more
                    predictable service experience for branch users.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <Image
                src="/images/deployment-photo.png"
                alt="Network deployment"
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
              title="Your network resilience questions, answered."
              description="Clear direction on redundancy, monitoring, and hybrid deployments."
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
              title="Extend resilience with complementary services."
              description="These solutions help secure communication, telematics, and cybersecurity across your network."
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
                    Explore the services that reinforce your resilient network
                    strategy.
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
              Ready to strengthen
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Build a stronger network foundation today.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Our team can assess your network, design a resilient architecture,
              and deliver a deployment that keeps operations online.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Build a stronger network</Button>
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
