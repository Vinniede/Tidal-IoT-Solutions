"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CarFront,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Sparkles,
  Wifi,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const challenges = [
  "Limited Fleet Management across operations",
  "Unpredictable fuel and maintenance costs",
  "Asset misuse and inefficient route planning",
  "Driver safety and compliance gaps",
  "Delayed delivery visibility for customers",
  "Manual reporting and disconnected systems",
];

const workflow = [
  { label: "Vehicle", icon: CarFront },
  { label: "GPS Device", icon: Wifi },
  { label: "Cloud Platform", icon: Globe2 },
  { label: "Analytics", icon: BarChart3 },
  { label: "Business Decisions", icon: CheckCircle2 },
];

const features = [
  "Real-time GPS tracking",
  "Fleet monitoring and health alerts",
  "Driver behaviour analytics",
  "Fuel and efficiency monitoring",
  "Asset status and location tracking",
  "Geofencing and route alerts",
  "Route optimization guidance",
  "Maintenance scheduling notifications",
];

const benefits = [
  { value: "22%", label: "Lower fuel spend" },
  { value: "35%", label: "Faster route planning" },
  { value: "41%", label: "Improved driver compliance" },
  { value: "100%", label: "Operational visibility" },
];

const industriesServed = [
  { title: "Logistics", icon: Globe2 },
  { title: "Construction", icon: Building2 },
  { title: "Utilities", icon: Wifi },
  { title: "Government", icon: ShieldCheck },
  { title: "Security", icon: Sparkles },
  { title: "SMEs", icon: CarFront },
];

const processSteps = [
  "Assessment",
  "Installation",
  "Configuration",
  "Training",
  "Support",
];

const faqs = [
  {
    question: "Can this platform support mixed vehicle fleets?",
    answer:
      "Yes. Our telematics solution connects cars, trucks, vans, and specialty assets through a single unified dashboard.",
  },
  {
    question: "How quickly can we start monitoring assets?",
    answer:
      "Most deployments begin generating location and health data within hours of installation and platform onboarding.",
  },
  {
    question: "Does this integrate with existing reporting systems?",
    answer:
      "We can connect telematics data to your operations tools, ERP systems, and reporting workflows for better decision support.",
  },
];

const relatedSolutions = [
  { title: "Secure Communications", href: "/solutions/secure-communications" },
  { title: "Resilient Networks", href: "/solutions/resilient-networks" },
  {
    title: "Integrated Cybersecurity",
    href: "/solutions/integrated-cybersecurity",
  },
];

export default function IntelligentTelematicsPage() {
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
                title="Intelligent Telematics for fleet, asset, and route performance."
                description="Turn vehicle data into operational visibility, safer driver behaviour, and predictable delivery outcomes across distributed operations."
              />
              <p className="max-w-2xl text-slate-600">
                Our telematics platform connects vehicles, assets, and control
                centers so your teams can monitor movement, reduce waste, and
                make faster decisions with confidence.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Live GPS tracking",
                  "Fleet dashboard insights",
                  "Driver safety alerts",
                  "Route and maintenance automation",
                ].map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.75rem] border border-slate-200 bg-[#F5F6F8] p-5"
                  >
                    <p className="font-semibold text-[#0B1F3A]">{point}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm mt-8">
                <p className="text-sm uppercase tracking-[0.3em] text-[#00A651]">
                  Fleet Management
                </p>
                <h2 className="mt-5 text-3xl font-semibold text-[#0B1F3A]">
                  Live tracking, route insight, and control center clarity.
                </h2>
                <p className="mt-4 text-slate-600">
                  A modern telematics dashboard that brings maps, vehicles,
                  alerts, and analytics into one operational workspace.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Fleet dashboard",
                    "Vehicle tracking",
                    "Route analytics",
                    "Real-time alerts",
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
                <Button href="/contact">Request Fleet Consultation</Button>
                <Button href="/solutions" variant="secondary">
                  Back to solutions
                </Button>
              </div>
            </div>

            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-xl h-full sm:min-h-[640px]">
              <Image
                src="/images/solution-telematics-illustration.png"
                alt="Fleet telematics dashboard"
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
              src="/images/Intelligent%20Telematics/Fleet%20monitoring%20illustration.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/55 to-slate-950/80" />
          </div>
          <div className="relative mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
            <div className="text-white">
              <SectionHeading
                eyebrow="Overview"
                title="A telematics solution designed for operational teams, not just reporting."
                description="We help businesses move from disconnected asset data to a single source of truth that improves uptime, safety, and customer performance."
                titleClassName="!text-white !font-bold"
                descriptionClassName="!text-white !font-semibold"
              />
              <p className="mt-6 max-w-2xl text-white font-semibold">
                Intelligent Telematics is built for fleets and field operations
                that need secure tracking, automated alerts, and analytics that
                support faster execution across every route.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/15 bg-slate-950/80 p-10 text-white shadow-2xl shadow-slate-950/25 backdrop-blur-sm">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#00A651]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#00A651]" />
                Solution overview
              </div>
              <p className="mt-6 text-slate-300">
                We combine vehicle telemetry, geofencing, driver monitoring, and
                intelligent routing in a secure platform that helps operators
                reduce risk and improve efficiency.
              </p>
              <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/15">
                <Image
                  src="/images/Intelligent%20Telematics/Vehicle%20telematics.jfif"
                  alt="Fleet monitoring overview"
                  width={640}
                  height={420}
                  className="h-56 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F6F8] px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <SectionHeading
                eyebrow="Business Challenges"
                title="Common fleet issues we solve for enterprise operators."
                description="We map the operational pain points that prevent teams from delivering predictable service and safe performance."
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
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl h-full sm:min-h-[620px]">
              <Image
                src="/images/Intelligent%20Telematics/GPS%20fleet%20tracking.jfif"
                alt="Fleet management visual"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/Intelligent%20Telematics/Connected%20logistics.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
          </div>
          <div className="relative mx-auto max-w-7xl text-white">
            <SectionHeading
              eyebrow="How it works"
              title="A practical flow from vehicle telemetry to decision-ready insight."
              description="Each stage is designed to keep teams informed, responsive, and aligned with business goals."
              align="left"
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
          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <SectionHeading
                eyebrow="Key Features"
                title="Capabilities that make fleet operations more visible and controllable."
                description="Every feature is tuned to reduce risk, improve performance, and simplify team workflows."
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
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl h-full sm:min-h-[620px]">
              <Image
                src="/images/Intelligent%20Telematics/Fleet%20management%20dashboard.jfif"
                alt="Fleet dashboard visual"
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
                eyebrow="Benefits & Outcomes"
                title="Operational improvements that can change the way your fleet performs."
                description="These outcomes reflect the real value teams gain from connected telematics and stronger route intelligence."
                align="left"
                titleClassName="!text-white !font-bold"
                descriptionClassName="!text-white !font-semibold"
              />
              <p className="max-w-2xl text-slate-300">
                Our customers see faster decision cycles, better cost control,
                and clearer accountability across every vehicle and asset in
                their operations.
              </p>
            </div>
            <div className="mx-auto max-w-7xl grid gap-4 sm:grid-cols-2 h-full items-stretch">
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
                A connected flow from vehicles to business insight.
              </h3>
              <p className="mt-4 text-slate-600">
                Sensors and GPS devices feed secure cloud services that deliver
                analytics, dashboards, and alerts to operators and managers.
              </p>
              <ul className="mt-8 space-y-4 text-slate-600">
                {[
                  "Vehicle telemetry devices",
                  "Secure mobile and cloud connectivity",
                  "Central dashboard with route and asset intelligence",
                  "Reporting and alerts for operational teams",
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
                src="/images/solution-telematics-illustration.png"
                alt="Telematics ecosystem"
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
              src="/images/Intelligent%20Telematics/Vehicle%20telematics.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
          </div>
          <div className="relative mx-auto max-w-7xl text-white">
            <SectionHeading
              eyebrow="Industries Served"
              title="Telematics that supports the teams driving every mile."
              description="This solution is built for sectors where visibility, safety, and reliable delivery matter most."
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
                title="Expertise, support, and a platform designed for enterprise operations."
                description="We combine secure deployment, active monitoring, and practical service design to make telematics reliable."
              />
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {[
                  "Security-first deployment",
                  "Operational onboarding and support",
                  "Scalable rollout planning",
                  "Data-driven insights for fleet managers",
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
                src="/images/Intelligent%20Telematics/Fleet%20monitoring%20illustration.jfif"
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
              src="/images/Intelligent%20Telematics/GPS%20fleet%20tracking.jfif"
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
              title="A clear deployment path from assessment to sustained support."
              description="Our process keeps rollout simple, transparent, and aligned with your operational objectives."
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
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="rounded-[2rem] border border-slate-200 bg-[#0B1F3A] p-10 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#00A651]">
                Featured case study
              </p>
              <h2 className="mt-5 text-3xl font-semibold">
                Regional distributor gains real-time fleet control.
              </h2>
              <div className="mt-8 space-y-6 text-slate-300">
                <div>
                  <p className="font-semibold text-white">Challenge</p>
                  <p className="mt-3">
                    A multi-branch logistics operator struggled with delayed
                    delivery visibility and high fuel waste.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Solution</p>
                  <p className="mt-3">
                    We deployed telematics devices across 120 vehicles,
                    implemented route alerts, and built a central operations
                    dashboard.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Results</p>
                  <p className="mt-3">
                    They reduced fuel spend by 18%, improved route adherence,
                    and achieved faster customer updates.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <Image
                src="/images/deployment-photo.png"
                alt="Telematics field deployment"
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
              title="Answers to the questions operations teams ask most."
              description="Clear guidance on deployment, integration, and how telematics becomes part of daily workflow."
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
              title="Complementary services that strengthen telematics deployments."
              description="These capabilities help extend visibility, reliability, and security across your broader infrastructure."
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
                    Explore the capabilities that reinforce fleet performance
                    and operational continuity.
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
              Ready to modernize
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Request fleet consultation and improve visibility today.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Our team helps you design a telematics deployment that drives
              efficiency, safety, and confidence across every route.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Request Fleet Consultation</Button>
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
