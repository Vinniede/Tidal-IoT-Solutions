"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Briefcase,
  Globe2,
  ShieldCheck,
  Sparkles,
  Wifi,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const challenges = [
  "Limited IT resources and tight budgets",
  "Need for scalable systems without complexity",
  "Securing remote and hybrid work environments",
  "Managing distributed sites with minimal staff",
  "Balancing growth with reliable connectivity",
  "Reducing vendor burden while increasing capability",
];

const trends = [
  "Managed connectivity for small enterprises",
  "Cloud-first operations with secure access",
  "Simplified monitoring for business owners",
  "Scalable networks that grow with demand",
  "Practical cybersecurity for non-specialist teams",
];

const supportAreas = [
  "Affordable, scaled network solutions",
  "Secure remote access for teams and branches",
  "Managed monitoring with proactive alerts",
  "Simple systems designed for growing businesses",
];

const solutions = [
  { title: "Managed Networks", icon: Wifi },
  { title: "Secure Access", icon: ShieldCheck },
  { title: "Cloud Connectivity", icon: Globe2 },
  { title: "Rapid Deployment", icon: Sparkles },
];

const benefits = [
  { value: "Less", label: "IT burden" },
  { value: "More", label: "uptime and reliability" },
  { value: "Faster", label: "rollout capability" },
  { value: "Stronger", label: "security posture" },
  { value: "Smarter", label: "growth readiness" },
  { value: "Better", label: "support visibility" },
];

const workflow = [
  { label: "Office & Stores", icon: Briefcase },
  { label: "Connected Devices", icon: Wifi },
  { label: "Secure Cloud", icon: Globe2 },
  { label: "Managed Services", icon: ShieldCheck },
  { label: "Growth Support", icon: Zap },
];

const galleryImages = [
  {
    src: "/images/SMEs/Modern business office.jfif",
    title: "Modern business office",
    description:
      "A polished, connected workspace built for secure collaboration.",
  },
  {
    src: "/images/SMEs/Startup workspace.jfif",
    title: "Startup workspace",
    description:
      "Flexible infrastructure that supports fast-growing teams and evolving needs.",
  },
  {
    src: "/images/SMEs/Cloud collaboration.jfif",
    title: "Cloud collaboration",
    description:
      "Simplified access and collaboration for remote and hybrid teams.",
  },
  {
    src: "/images/SMEs/Small business technology.jfif",
    title: "Small business technology",
    description:
      "Practical technology design that keeps operations efficient and dependable.",
  },
];

const faqItems = [
  {
    question: "Can Tidal work with a small IT team?",
    answer:
      "Yes. We provide managed infrastructure that reduces the day-to-day burden on smaller IT teams.",
  },
  {
    question: "How quickly can SMEs deploy your solutions?",
    answer:
      "We design rapid rollouts with practical configuration and support so smaller businesses can move quickly.",
  },
  {
    question: "Do you help protect hybrid work environments?",
    answer:
      "Our secure connectivity and access controls help distributed teams work safely from office and remote locations.",
  },
];

const relatedIndustries = [
  { title: "Logistics & Transport", href: "/industries/logistics-transport" },
  {
    title: "Banking & Financial Services",
    href: "/industries/banking-financial-services",
  },
  { title: "Utilities", href: "/industries/utilities" },
];

export default function SMEsPage() {
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
                  title="SMEs"
                  description="Practical modernization that scales from first deployment to growth."
                />
                <p className="max-w-2xl text-slate-600">
                  We help smaller enterprises adopt secure, resilient systems
                  without sacrificing simplicity or budget discipline.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact">Learn more</Button>
                  <Button href="/industries" variant="secondary">
                    Back to industries
                  </Button>
                </div>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#F5F6F8] text-[#00A651]">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-[#0B1F3A]">
                  Modern infrastructure for growing businesses.
                </h2>
                <p className="mt-4 text-slate-600">
                  Practical systems that scale with your business while keeping
                  complexity manageable.
                </p>
              </div>
            </div>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
              <Image
                src="/images/SMEs/Startup workspace.jfif"
                alt="SME operations"
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
              src="/images/SMEs/Cloud collaboration.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
          </div>
          <div className="relative mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
            <div className="rounded-[2rem] border border-white/10 bg-transparent p-10 text-white shadow-2xl flex flex-col gap-6">
              <SectionHeading
                eyebrow="Industry Overview"
                title="SMEs need affordable, scalable infrastructure without unnecessary complexity."
                description="Smaller teams benefit from solutions that are easy to manage and built to grow."
                titleClassName="text-[#00A651]"
                descriptionClassName="text-[#D4AF37]"
              />
              <p className="mt-2 text-white font-semibold">
                Tidal helps growing businesses stay secure, connected, and
                operationally efficient with managed systems that scale.
              </p>
              <div className="w-full max-w-xs rounded-lg bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[#00A651]">
                  SME focus
                </p>
                <p className="mt-3 text-slate-200 text-sm">
                  Practical systems for small teams that need reliability.
                </p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-transparent p-8 text-white shadow-xl flex h-full items-center">
              <div className="w-full">
                <div className="flex flex-col justify-center h-full gap-6">
                  <div>
                    <p className="text-2xl font-bold">Simple</p>
                    <p className="text-sm text-slate-200">Managed setup</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">Affordable</p>
                    <p className="text-sm text-slate-200">Predictable costs</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">Scalable</p>
                    <p className="text-sm text-slate-200">Grow with demand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/SMEs/Small business technology.jfif"
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
              title="Growing businesses are choosing managed, secure, and scalable infrastructure."
              description="This helps them move quickly while keeping operations dependable."
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
                title="We deliver managed, secure systems that take the load off smaller teams."
                description="Our approach gives SMEs the infrastructure they need without unnecessary complexity."
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
                src="/images/SMEs/Cloud collaboration.jfif"
                alt="SME key features visual"
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
                  title="Modern systems help SMEs operate reliably and grow smarter."
                  description="The right infrastructure reduces risk and frees teams to focus on business goals."
                />
                <p className="max-w-2xl text-slate-300">
                  Stronger uptime, simpler management, and scalable support let
                  smaller businesses move forward with confidence.
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
                alt="SME benefits visual"
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
                title="A workflow for fast, manageable SME infrastructure."
                description="We link offices, devices, and cloud services through secure, simple networks."
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
                src="/images/SMEs/Modern business office.jfif"
                alt="SME technology"
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
                A small business modernized connectivity and cut downtime.{" "}
              </h2>
              <div className="mt-8 space-y-6 text-slate-300">
                <div>
                  <p className="font-semibold text-white">Challenge</p>
                  <p className="mt-3">
                    The company needed a practical, reliable network to support
                    remote staff and store locations.{" "}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Solution</p>
                  <p className="mt-3">
                    We delivered a managed network, secure access, and
                    monitoring with minimal complexity.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Results</p>
                  <p className="mt-3">
                    The business achieved more reliable operations and had more
                    bandwidth for growth.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <Image
                src="/images/deployment-photo.png"
                alt="SME deployment"
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
              src="/images/SMEs/Cloud collaboration.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Our Implementation Approach"
              title="A practical rollout for growing businesses."
              description="We deploy infrastructure, train staff, and provide support in stages tailored to your pace."
              titleClassName="text-[#0B1F3A] font-bold"
              descriptionClassName="text-[#0B1F3A] font-semibold"
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
              title="SME technology questions answered."
              description="Answers for smaller businesses choosing secure infrastructure with minimal overhead."
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
              src="/images/SMEs/Small business technology.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
            <div className="absolute inset-0 bg-slate-950/30" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Related Industries"
              title="Other sectors that benefit from secure, scalable operations."
              description="These industries also need practical infrastructure, support, and reliable connectivity."
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
                    Explore how Tidal supports related infrastructure needs.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0B1F3A] px-6 py-24 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#6E1E2D] p-14 text-center shadow-[0_30px_80px_rgba(7,26,47,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00A651]">
              Ready to grow
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Scale your SME operations with Tidal.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Talk to our team about infrastructure that supports growth without
              unnecessary complexity.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Learn more</Button>
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
