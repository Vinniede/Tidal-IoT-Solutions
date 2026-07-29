"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CarFront, Globe2, RadioTower, ShieldCheck, Sparkles, Wifi } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const challenges = [
  "Limited fleet visibility across routes and depots",
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

const faqItems = [
  {
    question: "Can Tidal support mixed fleet types?",
    answer: "Yes. We connect trucks, vans, trailers, and specialty assets through a unified telematics and communications platform.",
  },
  {
    question: "How quickly can fleet tracking be activated?",
    answer: "Deployment can begin within days, with real-time tracking available as soon as devices are installed and systems are configured.",
  },
  {
    question: "Do you integrate with existing dispatch systems?",
    answer: "We integrate telematics and communications data with your operational tools to improve visibility without disrupting workflows.",
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
    <div className="min-h-screen bg-[#F8FBFC] text-slate-700">
      <Navbar />
      <main>
        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Industry"
                title="Logistics & Transport"
                description="Improve fleet visibility, asset management, and delivery performance with connected, secure operations."
              />
              <p className="max-w-2xl text-slate-600">
                Tidal helps logistics teams monitor vehicles, secure shipments, and optimize routes through integrated telematics, communications, and network resilience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact">Optimize Your Fleet</Button>
                <Button href="/industries" variant="secondary">Back to industries</Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl sm:min-h-[340px]"><Image src="/images/industry-logistics.jfif" alt="Logistics operations" fill className="object-cover" priority /></div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#E8FFF9] text-[#00a999]">
                  <CarFront className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-[#071A2F]">Connected logistics that keep deliveries moving.</h2>
                <p className="mt-4 text-slate-600">
                  A vivid operational view of fleet status, route performance, and cargo security for faster decisions. 
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
                title="The modern logistics challenge is visibility across every mile."
                description="Operators need connected systems for vehicles, cargo, and teams to deliver reliably and safely."
              />
              <p className="mt-6 text-slate-600">
                Logistics organizations benefit from real-time fleet telemetry, secure communications, and route intelligence that reduce risk and improve customer satisfaction.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#00C4B3]">Logistics focus</p>
              <p className="mt-6 text-slate-600">
                We align data, connectivity, and operations so your transport teams can respond to disruptions, manage resources, and keep services moving.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F8FBFC] px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Industry Challenges"
              title="Logistics teams face visibility, cost, safety, and utilization pressures."
              description="These challenges slow operations and create uncertainty across the supply chain."
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
              title="Logistics is moving toward connected, predictive, and automated operations."
              description="These trends are redefining how fleets, warehouses, and delivery networks coordinate."
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
                title="We connect vehicles, people, and systems for clearer logistics outcomes."
                description="Our approach combines telematics, secure communications, and reliable networks tailored to logistics workflows."
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
                        <div>
                          <p className="font-semibold">{solution.title}</p>
                        </div>
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
                title="The logistics outcomes that matter most."
                description="These business benefits reflect the real value delivered when operations are connected and visible."
              />
              <p className="max-w-2xl text-slate-300">
                Better visibility, safer fleets, and faster delivery times help logistics teams meet customer expectations and reduce operational risk.
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
            <div>
              <SectionHeading
                eyebrow="Technology in Action"
                title="A workflow that maps logistics data to operational decisions."
                description="Every stage ensures visibility for vehicles, cargo, and command teams."
              />
              <div className="mt-10 grid gap-6 md:grid-cols-3 xl:grid-cols-6">
                {workflow.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.label} className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-3xl bg-[#E8FFF9] text-[#00C4B3]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className="mt-4 font-semibold text-[#071A2F]">{step.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-[#F8FBFC] p-10 shadow-sm">
              <Image src="/images/industry-logistics.jfif" alt="Logistics technology" width={640} height={520} className="rounded-[1.75rem] object-cover" priority />
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="rounded-[2rem] border border-slate-200 bg-[#071A2F] p-10 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#5DE6D6]">Featured success story</p>
              <h2 className="mt-5 text-3xl font-semibold">Fleet optimization for a regional delivery network.</h2>
              <div className="mt-8 space-y-6 text-slate-300">
                <div>
                  <p className="font-semibold text-white">Challenge</p>
                  <p className="mt-3">A logistics operator lacked end-to-end visibility into vehicle location, load status, and driver performance.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Solution</p>
                  <p className="mt-3">We deployed telematics, secure communications, and an operations dashboard to centralize control. </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Results</p>
                  <p className="mt-3">The operator reduced delivery delay risk by 30% and improved route utilization across the fleet.</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <Image src="/images/deployment-photo.png" alt="Logistics deployment" width={640} height={520} className="rounded-[1.75rem] object-cover" priority />
            </div>
          </div>
        </section>

        <section className="bg-[#F8FBFC] px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Our Implementation Approach"
              title="A logistics deployment path designed for clear rollout and support."
              description="We move from assessment to training and ongoing support with minimal disruption."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-5">
              {[
                "Assessment",
                "Device Installation",
                "Configuration",
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
              title="Logistics questions we hear most from operations teams."
              description="Get clarity on deployment, integration, and operational benefits."
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
                    <span className="text-slate-500">{openFaq === index ? "−" : "+"}</span>
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
              title="Other sectors with similar infrastructure needs."
              description="These industries also benefit from connected operations, secure communications, and resilient infrastructure."
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5DE6D6]">Ready to optimize</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Optimize your fleet with Tidal.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Talk to our team about a logistics deployment that improves visibility, safety, and delivery performance.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Optimize Your Fleet</Button>
              <Button href="/industries" variant="secondary">Back to industries</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
