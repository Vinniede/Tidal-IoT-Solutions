"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Globe2,
  KeyRound,
  LockKeyhole,
  RadioTower,
  ShieldCheck,
  Signal,
  Smartphone,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const challenges = [
  "Unreliable field communication in remote areas",
  "Disconnected team coordination during incidents",
  "Unencrypted voice and data traffic",
  "Coverage gaps between locations",
  "Fragmented radio and mobile systems",
  "Slow emergency response handoff",
];

const workflow = [
  { label: "Users", icon: Users },
  { label: "Communication Devices", icon: Smartphone },
  { label: "Secure Network", icon: LockKeyhole },
  { label: "Dispatch Center", icon: RadioTower },
  { label: "Management", icon: ShieldCheck },
];

const features = [
  "PoC Push to Talk radios",
  "VoIP",
  "PABX",
  "Satellite",
  "Control Rooms",
  "Digital radio and push-to-talk",
  "Encrypted voice and data channels",
  "Group communications and dispatch control",
  "Emergency alerting and broadcast messaging",
  "Mobile integration for field workers",
  "Redundant coverage optimization",
  "Secure gateway access",
  "Operational logging and audit trails",
];

const benefits = [
  { value: "Faster", label: "Incident response" },
  { value: "More", label: "Reliable coverage" },
  { value: "Higher", label: "Team coordination" },
  { value: "Safer", label: "Communications" },
];

const industriesServed = [
  { title: "Government", icon: ShieldCheck },
  { title: "Utilities", icon: Signal },
  { title: "Mining", icon: Globe2 },
  { title: "Security", icon: KeyRound },
  { title: "Transport", icon: RadioTower },
  { title: "Emergency Services", icon: Users },
];

const processSteps = ["Assess", "Deploy", "Integrate", "Train", "Support"];

const faqs = [
  {
    question: "Can secure voice and data run over our existing network?",
    answer:
      "Yes. We can integrate with existing radio and mobile networks while adding encryption, redundancy, and central management.",
  },
  {
    question: "Do you support emergency alerting and group broadcasts?",
    answer:
      "Our platform includes group communications and alerting features designed for rapid response teams and field operations.",
  },
  {
    question: "How do you ensure communications stay available?",
    answer:
      "We design redundant network paths, fallback routing, and monitoring so key channels remain active during outages.",
  },
];

const relatedSolutions = [
  { title: "Resilient Networks", href: "/solutions/resilient-networks" },
  {
    title: "Integrated Cybersecurity",
    href: "/solutions/integrated-cybersecurity",
  },
  {
    title: "Intelligent Telematics",
    href: "/solutions/intelligent-telematics",
  },
];

export default function SecureCommunicationsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#F5F6F8] text-slate-700">
      <Navbar />
      <main>
        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-xl h-full sm:min-h-[640px]">
              <Image
                src="/images/solution-secure-communications-illustration.jpg"
                alt="Secure communications network"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="space-y-6 h-full">
              <SectionHeading
                eyebrow="Solution"
                title="Secure Communications for distributed organizations."
                description="Enterprise-grade voice, data, and dispatch tools that support secure collaboration across every environment."
              />
              <p className="max-w-2xl text-slate-700">
                We deliver communication systems that are resilient, encrypted,
                and easy to operate so teams can respond faster, coordinate
                clearly, and maintain control across remote operations.
              </p>
              <ul className="space-y-3 text-slate-700">
                {[
                  "PoC Push to Talk radios for fast field coordination",
                  "VoIP and PABX support for dispatch and office continuity",
                  "Satellite connectivity and control room communications for remote operations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00A651]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-[#00A651]">
                  Secure communication
                </p>
                <h2 className="mt-5 text-3xl font-semibold text-[#0B1F3A]">
                  From field radios to voice platforms and control rooms.
                </h2>
                <p className="mt-4 text-slate-600">
                  Designed for mission-critical operations, our communications
                  solution connects PoC radios, VoIP, PABX, satellite links,
                  and control room workflows in one secure environment.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "PoC PTT radios",
                    "VoIP & PABX",
                    "Satellite links",
                    "Control room operations",
                  ].map((tile) => (
                    <div
                      key={tile}
                      className="rounded-[1.75rem] bg-[#F5F6F8] p-4 text-sm text-slate-700"
                    >
                      {tile}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact">Speak with our specialists</Button>
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
              src="/images/Secure%20Communications/Command%20center.jfif"
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
                title="A communications platform built for dependable operations."
                description="Our secure communications combine radio, data, and mobile access so teams can collaborate across the most challenging conditions."
                titleClassName="!text-white !font-bold"
                descriptionClassName="!text-white !font-semibold"
              />
              <p className="mt-6 max-w-2xl text-slate-200 font-semibold">
                The solution is designed to reduce dropped messages, ensure
                encrypted traffic, and deliver consistent communications across
                remote and urban deployments through PoC radios, VoIP, PABX,
                satellite backhaul, and control room coordination.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/15 bg-slate-950/80 p-10 text-white shadow-2xl shadow-slate-950/25 backdrop-blur-sm">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#00A651]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#00A651]" />
                Solution overview
              </div>
              <p className="mt-6 text-slate-300">
                Our architecture combines rugged devices, secure transport, and
                centralized control for communications that stay operational
                when it matters most.
              </p>
              <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/15">
                <Image
                  src="/images/Secure%20Communications/Enterprise%20communications.jpg"
                  alt="Secure communication overview"
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
                title="Communication gaps that hinder field and control teams."
                description="These are the common issues organizations face when their communication systems are not designed for mission-critical use."
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
                src="/images/Secure%20Communications/Radio%20communication%20system.jfif"
                alt="Communication visual"
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
              src="/images/Secure%20Communications/Communication%20tower.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
          </div>
          <div className="relative mx-auto max-w-7xl text-white">
            <SectionHeading
              eyebrow="How Our Solution Works"
              title="A secure communication architecture that brings users, devices, and command together."
              description="Every stage supports the flow from individuals in the field to centralized operational control."
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
                eyebrow="Key Features"
                title="Core capabilities for PTT, voice, data, and control room communications."
                description="Features built for operations teams, dispatch centers, control rooms, and security-conscious enterprises."
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
                src="/images/Secure%20Communications/Push%20to%20talk%20network.jfif"
                alt="Push-to-talk network visual"
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
                title="Communications that improve coordination, response, and continuity."
                description="These outcomes help teams move faster and reduce the risk of missed or unreliable messages."
                titleClassName="!text-white !font-bold"
                descriptionClassName="!text-white !font-semibold"
              />
              <p className="max-w-2xl text-slate-300">
                Better communications reduce downtime, improve safety, and give
                leaders the confidence that teams stay connected during critical
                moments.
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
                A secure network for voice, data, and team coordination.
              </h3>
              <p className="mt-4 text-slate-600">
                Field radios, mobile clients, and dispatch systems are tied
                together through encrypted transport, centralized control, and
                monitoring.
              </p>
              <ul className="mt-8 space-y-4 text-slate-600">
                {[
                  "Field communication devices",
                  "Secure transport layers",
                  "Dispatch and command consoles",
                  "Operational logging and analytics",
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
                src="/images/Secure%20Communications/Push%20to%20talk%20network.jfif"
                alt="Secure push-to-talk network"
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
              src="/images/Secure%20Communications/Enterprise%20communications.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
          </div>
          <div className="relative mx-auto max-w-7xl text-white">
            <div className="max-w-2xl rounded-[1.5rem] border border-white/15 bg-white/10 p-5 shadow-lg backdrop-blur-sm min-h-[140px]">
              <SectionHeading
                eyebrow="Industries"
                title="Secure communications for operations with high reliability requirements."
                description="These sectors benefit from consistent coverage, group coordination, and emergency-ready channels."
                titleClassName="text-white"
                descriptionClassName="text-slate-200"
              />
            </div>
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
                title="Secure communications built on experience, redundancy, and service."
                description="We focus on reliability, clarity, and the right operational controls."
              />
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {[
                  "Encrypted architecture",
                  "Field-ready deployment",
                  "Dispatch and emergency workflows",
                  "Redundant coverage planning",
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
                src="/images/Secure%20Communications/Command%20center.jfif"
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
              src="/images/Secure%20Communications/Communication%20tower.jfif"
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
              title="A simple rollout for secure communication services."
              description="We make deployment predictable, transparent, and aligned with your team’s operating model."
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
                Communication backbone for a utilities field team.
              </h2>
              <div className="mt-8 space-y-6 text-slate-300">
                <div>
                  <p className="font-semibold text-white">Challenge</p>
                  <p className="mt-3">
                    A utility provider needed reliable command and control
                    across remote field crews during service restoration events.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Solution</p>
                  <p className="mt-3">
                    We deployed secure communications gateways and mobile
                    dispatch tools that supported voice and data in weak
                    coverage areas.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Results</p>
                  <p className="mt-3">
                    Response times improved, outage coordination became clearer,
                    and field teams stayed continuously connected.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <Image
                src="/images/deployment-photo.png"
                alt="Secure communications deployment"
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
              title="Answers to the communication questions we hear most."
              description="Everything from integration to emergency alerting, explained clearly."
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
              title="Strengthen communications with complementary infrastructure services."
              description="These solutions help you build a secure, resilient operations stack."
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
                    Explore the capabilities that help secure and extend your
                    communications deployment.
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
              Ready to connect
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Speak with our communication specialists.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We help you design a secure, reliable communications architecture
              that supports every team and keeps operations in sync.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Speak with specialists</Button>
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
