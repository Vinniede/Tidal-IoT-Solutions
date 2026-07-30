"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Eye,
  Globe2,
  Lock,
  ShieldAlert,
  ShieldCheck,
  Wifi,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const challenges = [
  "Remote site visibility gaps for patrol teams",
  "Secure communications across officers and command",
  "Incident response coordination under pressure",
  "Managing access and alarm data across locations",
  "Protecting evidence and operational telemetry",
  "Ensuring consistent coverage in distributed territories",
];

const trends = [
  "Connected security operations centers",
  "Encrypted mobile communications for patrols",
  "Edge monitoring across sites and assets",
  "Coordinated incident response with real-time alerts",
  "Integrated access control and network monitoring",
];

const supportAreas = [
  "Secure command-center connectivity",
  "Remote monitoring for critical sites",
  "Encrypted communications for mobile teams",
  "Incident-ready operational visibility",
];

const solutions = [
  { title: "Operational Networks", icon: ShieldCheck },
  { title: "Mobile Connectivity", icon: Wifi },
  { title: "Edge Monitoring", icon: Eye },
  { title: "Secure Access", icon: Lock },
];

const benefits = [
  { value: "Faster", label: "incident response" },
  { value: "Safer", label: "field teams" },
  { value: "Stronger", label: "site visibility" },
  { value: "Better", label: "response coordination" },
  { value: "More", label: "operational confidence" },
  { value: "Lower", label: "security risk" },
];

const workflow = [
  { label: "Patrol Teams", icon: ShieldAlert },
  { label: "Site Sensors", icon: Eye },
  { label: "Command Center", icon: Globe2 },
  { label: "Secure Communications", icon: Wifi },
  { label: "Access Control", icon: Lock },
];

const galleryImages = [
  {
    src: "/images/Security/Security command center.jfif",
    title: "Security command center",
    description:
      "A clear view of coordinated monitoring and fast operational response.",
  },
  {
    src: "/images/Security/Surveillance dashboard.jfif",
    title: "Surveillance dashboard",
    description: "Real-time visibility for sites, teams, and active incidents.",
  },
  {
    src: "/images/Security/CCTV monitoring.jfif",
    title: "CCTV monitoring",
    description:
      "Mission-ready monitoring that supports situational awareness and control.",
  },
  {
    src: "/images/Security/Access control.jfif",
    title: "Access control",
    description:
      "Secure access management for modern, distributed environments.",
  },
];

const faqItems = [
  {
    question: "Can Tidal support encrypted communications for security teams?",
    answer:
      "Yes. We deploy secure voice and data paths that protect communication between officers and control rooms.",
  },
  {
    question: "How do you help coordinate remote patrol operations?",
    answer:
      "Our systems provide visibility and alerting so command teams can keep mobile units aligned and responsive.",
  },
  {
    question: "Can you secure remote surveillance and access control data?",
    answer:
      "We protect remote site telemetry and access systems with resilient networks and operational monitoring.",
  },
];

const relatedIndustries = [
  { title: "Government", href: "/industries/government" },
  { title: "Logistics & Transport", href: "/industries/logistics-transport" },
  { title: "Utilities", href: "/industries/utilities" },
];

export default function SecurityCompaniesPage() {
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
                  title="Security Companies"
                  description="Secure communications, connected monitoring, and rapid response infrastructure for security operators."
                />
                <p className="max-w-2xl text-slate-600">
                  Tidal helps security providers deploy resilient networks,
                  protect remote teams, and maintain visibility across
                  distributed operations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact">Talk to our team</Button>
                  <Button href="/industries" variant="secondary">
                    Back to industries
                  </Button>
                </div>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#F5F6F8] text-[#00A651]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-[#0B1F3A]">
                  Resilient infrastructure for modern security operations.
                </h2>
                <p className="mt-4 text-slate-600">
                  We secure voice, video, access control, and incident workflows
                  across remote and mission-critical environments.
                </p>
              </div>
            </div>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
              <Image
                src="/images/Security/Security command center.jfif"
                alt="Security command center"
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
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Security/Security control room.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
            <div className="rounded-[2rem] border border-white/10 bg-transparent p-10 text-white shadow-2xl flex flex-col gap-6">
              <SectionHeading
                eyebrow="Industry Overview"
                title="Security operations need visibility, coordination, and secure remote connectivity."
                description="Teams must stay connected across sites, vehicles, and command centers so incidents resolve quickly."
              />
              <p className="mt-2 text-white font-semibold">
                Our solutions help security providers monitor remote locations,
                protect communications, and improve response readiness.
              </p>
              <div className="w-full max-w-xs rounded-lg bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[#00A651]">
                  Security focus
                </p>
                <p className="mt-3 text-slate-200 text-sm">
                  Secure connectivity and monitoring for incident readiness.
                </p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-transparent p-8 text-white shadow-xl flex h-full items-center">
              <div className="w-full">
                <div className="flex flex-col justify-center h-full gap-6">
                  <div>
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-sm text-slate-200">
                      Monitoring & alerts
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">Encrypted</p>
                    <p className="text-sm text-slate-200">Mobile comms</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">Edge</p>
                    <p className="text-sm text-slate-200">Site monitoring</p>
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
                title="Security companies struggle with remote visibility and secure incident coordination."
                description="These gaps can slow response times and increase operational risk."
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
                src="/images/Security/CCTV monitoring.jfif"
                alt="Security challenges visual"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
                quality={100}
              />
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Security/Access control.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl text-white">
            <SectionHeading
              eyebrow="Industry Trends"
              title="Security operations are evolving toward connected command and field intelligence."
              description="Real-time visibility and encrypted mobile communications are becoming essential."
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
                title="We deliver secure operations and real-time awareness for security teams."
                description="Our platforms help teams stay connected, monitor remote sites, and respond quickly to incidents."
              />
              <div className="mt-8 space-y-4 text-slate-600 text-sm">
                {supportAreas.map((item) => (
                  <div
                    key={item}
                    className="rounded-[2rem] border border-slate-200 bg-[#F5F6F8] p-4 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
              <Image
                src="/images/Security/Surveillance dashboard.jfif"
                alt="Security key features visual"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
                quality={100}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#0B1F3A] px-6 py-24 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <SectionHeading
                  eyebrow="Benefits"
                  title="The security outcomes that matter most."
                  description="Faster response, safer teams, and stronger site assurance help companies stay ahead of threats."
                />
                <p className="max-w-2xl text-slate-300">
                  Secure communications and operational visibility reduce risk,
                  improve coverage, and build confidence across teams.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[2rem] bg-white/10 p-6 text-slate-100 shadow-sm"
                  >
                    <p className="text-2xl font-semibold">{item.value}</p>
                    <p className="mt-2 text-slate-300 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <Image
                src="/images/deployment-photo.png"
                alt="Security benefits visual"
                fill
                className="object-cover object-center"
                quality={100}
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
            <div>
              <SectionHeading
                eyebrow="Technology in Action"
                title="A security workflow built around awareness and response."
                description="We connect patrols, sites, and command centers through secure, reliable infrastructure."
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
            <div className="rounded-[2rem] border border-slate-200 bg-[#F5F6F8] p-10 shadow-sm h-full min-h-[420px] relative overflow-hidden">
              <Image
                src="/images/Security/Security command center.jfif"
                alt="Security technology"
                fill
                className="object-cover object-center rounded-[1.75rem]"
                quality={100}
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
                Patrol coordination for a private security provider.
              </h2>
              <div className="mt-8 space-y-6 text-slate-300">
                <div>
                  <p className="font-semibold text-white">Challenge</p>
                  <p className="mt-3">
                    The firm needed better remote visibility and secure
                    communications for patrol and response teams.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Solution</p>
                  <p className="mt-3">
                    We implemented secure network pathways, mobile connectivity,
                    and command center monitoring.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Results</p>
                  <p className="mt-3">
                    Response coordination improved, and remote coverage became
                    more consistent across sites.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <Image
                src="/images/deployment-photo.png"
                alt="Security deployment"
                width={640}
                height={520}
                className="rounded-[1.75rem] object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#0B1F3A] px-6 py-24 text-white sm:px-8 lg:px-12">
          <Image
            src="/images/Security/Security control room.jfif"
            alt="Security control room"
            fill
            sizes="100vw"
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-[#0B1F3A]/30" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Our Implementation Approach"
              title="A secure security deployment path built for field readiness."
              description="We deliver reliable infrastructure, training, and support for remote operations."
              titleClassName="text-white font-bold"
              descriptionClassName="text-white font-semibold"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Assessment",
                "Deployment",
                "Configuration",
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
              title="Security company questions answered."
              description="Answers for teams planning secure operations, remote monitoring, and response coordination."
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
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Security/Access control.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl text-[#00A651]">
            <SectionHeading
              eyebrow="Related Industries"
              title="Other sectors that rely on secure operations and visibility."
              description="These industries also benefit from connected teams, remote monitoring, and resilient infrastructure."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {relatedIndustries.map((industry) => (
                <Link
                  key={industry.title}
                  href={industry.href}
                  className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-white shadow-sm transition hover:border-[#00A651] hover:bg-slate-900/90"
                >
                  <p className="font-bold text-white text-lg transition-colors hover:text-[#00A651]">
                    {industry.title}
                  </p>
                  <p className="mt-4 text-slate-200 font-medium">
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
              Ready for action
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Coordinate your security operations with Tidal.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Talk to our team about a secure, connected approach for your
              security workforce.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Get a briefing</Button>
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
