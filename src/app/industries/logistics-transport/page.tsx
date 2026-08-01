"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CarFront,
  Globe2,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Wifi,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const challenges = [
  "Limited Fleet Management across routes and depots",
  "Rising fuel and operating costs without insight",
  "Driver safety and compliance gaps in the field",
  "Inefficient route planning and delivery delays",
  "Cargo security and theft risk during transit",
  "Underutilized assets and slow capacity planning",
];

const trends = [
  "Connected fleets with live location intelligence",
  "AI-assisted logistics and dynamic routing",
  "Predictive maintenance for vehicles and assets",
  "Digital fleet management with centralized dashboards",
  "Real-time tracking for customer promise delivery",
];

const supportAreas = [
  "Live vehicle and asset monitoring",
  "Secure communications for dispatch and drivers",
  "Route optimization and delivery alerts",
  "Cargo tracking with geofencing and status updates",
];

const solutions = [
  { title: "Intelligent Telematics", icon: CarFront },
  { title: "Secure Communications", icon: RadioTower },
  { title: "Resilient Networks", icon: Globe2 },
  { title: "Integrated Cybersecurity", icon: ShieldCheck },
];

const benefits = [
  { value: "18%", label: "Lower operating costs" },
  { value: "30%", label: "Faster deliveries" },
  { value: "40%", label: "Improved driver safety" },
  { value: "100%", label: "Real-time visibility" },
  { value: "Reduced", label: "Downtime and delays" },
  { value: "Better", label: "Cargo security" },
];

const workflow = [
  { label: "Vehicles", icon: CarFront },
  { label: "GPS Tracking", icon: Wifi },
  { label: "Communication", icon: RadioTower },
  { label: "Cloud Platform", icon: Globe2 },
  { label: "Analytics", icon: Sparkles },
  { label: "Operations Team", icon: ShieldCheck },
];

const galleryImages = [
  {
    src: "/images/Logistics/Connected warehouse.jfif",
    title: "Connected warehouse",
    description:
      "Operational visibility that supports modern logistics and inventory flow.",
  },
  {
    src: "/images/Logistics/Distribution center.jfif",
    title: "Distribution center",
    description:
      "A high-clarity view of the movement and coordination behind fulfillment.",
  },
  {
    src: "/images/Logistics/Logistics dashboard.jfif",
    title: "Logistics dashboard",
    description:
      "Real-time data that helps teams make faster, smarter decisions.",
  },
  {
    src: "/images/Logistics/Route optimization.jfif",
    title: "Route optimization",
    description:
      "Smarter routing and planning for stronger service performance.",
  },
];

const faqItems = [
  {
    question: "Can Tidal support mixed fleet types?",
    answer:
      "Yes. We connect trucks, vans, trailers, and specialty assets through a unified telematics and communications platform.",
  },
  {
    question: "How quickly can fleet tracking be activated?",
    answer:
      "Deployment can begin within days, with real-time tracking available as soon as devices are installed and systems are configured.",
  },
  {
    question: "Do you integrate with existing dispatch systems?",
    answer:
      "We integrate telematics and communications data with your operational tools to improve visibility without disrupting workflows.",
  },
];

const relatedIndustries = [
  { title: "Utilities", href: "/industries/utilities" },
  { title: "Security Companies", href: "/industries/security-companies" },
  { title: "Government", href: "/industries/government" },
];

export default function LogisticsTransportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#F5F6F8] text-slate-700">
      <Navbar />
      <main>
        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-stretch">
            <div className="space-y-8">
              <div className="space-y-6">
                <SectionHeading
                  eyebrow="Industry"
                  title="Logistics & Transport"
                  description="Improve Fleet Management, asset tracking, and delivery performance with connected, secure operations."
                />
                <p className="max-w-2xl text-slate-600">
                  Tidal helps logistics teams monitor vehicles, secure
                  shipments, and optimize routes through integrated telematics,
                  communications, and network resilience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact">Optimize Your Fleet</Button>
                  <Button href="/industries" variant="secondary">
                    Back to industries
                  </Button>
                </div>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#F5F6F8] text-[#00A651]">
                  <CarFront className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-[#0B1F3A]">
                  Connected logistics that keep deliveries moving.
                </h2>
                <p className="mt-4 text-slate-600">
                  A vivid operational view of fleet status, route performance,
                  and cargo security for faster decisions.
                </p>
              </div>
            </div>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
              <Image
                src="/images/Logistics/Logistics fleet.jfif"
                alt="Logistics operations"
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
              src="/images/Logistics/Fleet monitoring.jfif"
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
                title="The modern logistics challenge is visibility across every mile."
                description="Operators need connected systems for vehicles, cargo, and teams to deliver reliably and safely."
                titleClassName="!text-white !font-bold"
                descriptionClassName="!text-white !font-semibold"
              />
              <p className="mt-2 text-white font-semibold">
                Logistics organizations benefit from real-time fleet telemetry,
                secure communications, and route intelligence that reduce risk
                and improve customer satisfaction.
              </p>
              <div className="w-full max-w-xs rounded-lg bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[#00A651]">
                  Logistics focus
                </p>
                <p className="mt-3 text-slate-200 text-sm">
                  Data, connectivity, and operations aligned for resilient
                  delivery.
                </p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[#6E1E2D]/90 p-8 text-white shadow-xl flex h-full items-center">
              <div className="w-full">
                <div className="flex flex-col justify-center h-full gap-6">
                  <div>
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-sm text-slate-200">
                      Real-time visibility
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">30%+</p>
                    <p className="text-sm text-slate-200">Faster deliveries</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">Predictive</p>
                    <p className="text-sm text-slate-200">
                      Maintenance & routing
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
                title="Logistics teams face visibility, cost, safety, and utilization pressures."
                description="These challenges slow operations and create uncertainty across the supply chain."
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
                src="/images/Logistics/Connected warehouse.jfif"
                alt="Logistics challenges visual"
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
              src="/images/Logistics/Fleet monitoring.jfif"
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
              title="Logistics is moving toward connected, predictive, and automated operations."
              description="These trends are redefining how fleets, warehouses, and delivery networks coordinate."
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
                title="We connect vehicles, people, and systems for clearer logistics outcomes."
                description="Our approach combines telematics, secure communications, and reliable networks tailored to logistics workflows."
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
                src="/images/Logistics/Route optimization.jfif"
                alt="Logistics key features visual"
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
                  title="The logistics outcomes that matter most."
                  description="These business benefits reflect the real value delivered when operations are connected and visible."
                  titleClassName="!text-white !font-bold"
                  descriptionClassName="!text-white !font-semibold"
                />
                <p className="max-w-2xl text-slate-300">
                  Better visibility, safer fleets, and faster delivery times
                  help logistics teams meet customer expectations and reduce
                  operational risk.
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
                src="/images/Logistics/Fleet analytics.jfif"
                alt="Logistics benefits visual"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <SectionHeading
                eyebrow="Technology in Action"
                title="A workflow that maps logistics data to operational decisions."
                description="Every stage ensures visibility for vehicles, cargo, and command teams."
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
                src="/images/Logistics/Logistics dashboard.jfif"
                alt="Logistics technology"
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
                Fleet optimization for a regional delivery network.
              </h2>
              <div className="mt-8 space-y-6 text-slate-300">
                <div>
                  <p className="font-semibold text-white">Challenge</p>
                  <p className="mt-3">
                    A logistics operator lacked end-to-end visibility into
                    vehicle location, load status, and driver performance.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Solution</p>
                  <p className="mt-3">
                    We deployed telematics, secure communications, and an
                    operations dashboard to centralize control.{" "}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Results</p>
                  <p className="mt-3">
                    The operator reduced delivery delay risk by 30% and improved
                    route utilization across the fleet.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <Image
                src="/images/deployment-photo.png"
                alt="Logistics deployment"
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
              src="/images/Logistics/Distribution center.jfif"
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
              title="A logistics deployment path designed for clear rollout and support."
              description="We move from assessment to training and ongoing support with minimal disruption."
              titleClassName="!text-white !font-bold"
              descriptionClassName="!text-white !font-semibold"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Assessment",
                "Device Installation",
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
              title="Logistics questions we hear most from operations teams."
              description="Get clarity on deployment, integration, and operational benefits."
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
              src="/images/Logistics/Route optimization.jfif"
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
              title="Other sectors with similar infrastructure needs."
              description="These industries also benefit from connected operations, secure communications, and resilient infrastructure."
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
                    Explore how Tidal supports related operational needs.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0B1F3A] px-6 py-24 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#6E1E2D] p-14 text-center shadow-[0_30px_80px_rgba(7,26,47,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00A651]">
              Ready to optimize
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Optimize your fleet with Tidal.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Talk to our team about a logistics deployment that improves
              visibility, safety, and delivery performance.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Optimize Your Fleet</Button>
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
