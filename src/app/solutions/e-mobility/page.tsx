"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  CarFront,
  Globe2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { partnerNames } from "@/constants/site";

const challenges = [
  "Fragmented EV charging operations across sites and fleets",
  "Limited visibility into charger uptime, energy use, and availability",
  "Inconsistent payment, access, and user experience at charging points",
  "Complex maintenance and service coordination for distributed assets",
];

const workflow = [
  { label: "Assess", icon: Zap },
  { label: "Plan", icon: Building2 },
  { label: "Deploy", icon: Globe2 },
  { label: "Operate", icon: ShieldCheck },
];

const capabilities = [
  "Smart charging management and remote monitoring",
  "Fleet electrification planning and charger deployment support",
  "Live visibility for station health, usage, and performance",
  "Secure payment, access, and operator control workflows",
  "Integration with mobility platforms and energy systems",
];

const useCases = [
  {
    title: "Fleet operators",
    description: "Manage depot charging, utilization, and vehicle readiness.",
  },
  {
    title: "Charge point operators",
    description:
      "Monitor uptime, dispatch support, and customer access seamlessly.",
  },
  {
    title: "Municipal and smart city teams",
    description:
      "Support public EV infrastructure with better visibility and control.",
  },
  {
    title: "Commercial properties",
    description:
      "Offer reliable charging as part of modern tenant and visitor services.",
  },
];

const benefits = [
  { value: "24/7", label: "Charging visibility" },
  { value: "Lower", label: "Downtime and service delays" },
  { value: "Smarter", label: "Fleet electrification" },
  { value: "Stronger", label: "User experience" },
];

const faqs = [
  {
    question: "Can this support both public and private charging networks?",
    answer:
      "Yes. We design solutions for fleet depots, public charging hubs, and commercial sites with the same focus on visibility, reliability, and manageability.",
  },
  {
    question: "How does the platform improve station operations?",
    answer:
      "It brings charger status, energy usage, fault alerts, and access controls into a central operating view so teams can act faster.",
  },
  {
    question: "Do you support fleet electrification rollout planning?",
    answer:
      "We can help plan charging deployments, map operational requirements, and align infrastructure with fleet growth and site constraints.",
  },
];

const relatedSolutions = [
  {
    title: "Intelligent Telematics",
    href: "/solutions/intelligent-telematics",
  },
  { title: "Resilient Networks", href: "/solutions/resilient-networks" },
  {
    title: "Mission Critical Communication",
    href: "/solutions/secure-communications",
  },
];

export default function EMobilityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const partnerLogos: Record<string, string> = {
    Teltonika: "/images/Our%20Partners/Teltonika.jfif",
    MettaX: "/images/Our%20Partners/MettaX.jfif",
    JimiioT: "/images/Our%20Partners/JimiioT.jfif",
    Tramigo: "/images/Our%20Partners/Tramigo.png",
    Inrico: "/images/Our%20Partners/Inrico.png",
    Belfone: "/images/Our%20Partners/Belfone.jfif",
    Concox: "/images/Our%20Partners/Concox.png",
    Hytera: "/images/Our%20Partners/Hytera.jfif",
    Streamax: "/images/Our%20Partners/Streamax.jfif",
    Kenwood: "/images/Our%20Partners/Kenwood.png",
    Dahua: "/images/Our%20Partners/Dahua.png",
    Huawei: "/images/Our%20Partners/Huawei.jfif",
    HIkvision: "/images/Our%20Partners/HIkvision.png",
    ZkTeco: "/images/Our%20Partners/ZkTeco.png",
    Hisense: "/images/Our%20Partners/Hisense.jfif",
    Ploywall: "/images/Our%20Partners/Ploywall.png",
    Escort: "/images/Our%20Partners/Escort.png",
    Baofeng: "/images/Our%20Partners/Baofeng.jfif",
    Wialon: "/images/Our%20Partners/Wialon.jfif",
    "Pilot Telematics": "/images/Our%20Partners/Pilot.png",
    LookCam: "/images/Our%20Partners/LookCam.png",
    Protrack: "/images/Our%20Partners/Protrack.png",
    Iridium: "/images/Our%20Partners/Iridium.png",
    Thuraya: "/images/Our%20Partners/Thuraya.png",
    Garmin: "/images/Our%20Partners/Garmin.png",
    Orbcomm: "/images/Our%20Partners/Orbcomm.png",
    Xerafy: "/images/Our%20Partners/Xerafy.png",
    SEEWORLD: "/images/Our%20Partners/SEEWORLD.png",
    BSJ: "/images/Our%20Partners/BSJ.png",
    Ruptela: "/images/Our%20Partners/Ruptela.png",
    Quectel: "/images/Our%20Partners/Quectel.png",
    Matrix: "/images/Our%20Partners/Matrix.png",
  };

  return (
    <div className="min-h-screen bg-[#F5F6F8] text-slate-700">
      <Navbar />
      <main>
        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-xl h-full sm:min-h-[640px]">
              <Image
                src="/images/E-Mobility/emobility-background.jpg"
                alt="Electric mobility infrastructure"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="space-y-6 h-full">
              <SectionHeading
                eyebrow="Solution"
                title="E-Mobility Solutions for smarter charging and electric transport operations."
                description="Modern infrastructure for charging networks, fleet electrification, and connected mobility services."
              />
              <p className="max-w-2xl text-slate-700">
                Tidal helps organizations design and operate electric mobility
                systems that are reliable, visible, and ready to scale across
                growing fleets and public infrastructure.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Connected charging operations",
                  "Fleet electrification support",
                  "Operational visibility",
                  "Secure access and payments",
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
                <p className="text-sm uppercase tracking-[0.3em] text-[#00A651]">
                  E-Mobility
                </p>
                <h2 className="mt-5 text-3xl font-semibold text-[#0B1F3A]">
                  A practical path from deployment to dependable operations.
                </h2>
                <p className="mt-4 text-slate-600">
                  Our approach combines charging intelligence, connected
                  monitoring, and field-ready support to keep EV operations
                  moving.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Smart charger monitoring",
                    "Fleet charging coordination",
                    "Energy and usage insights",
                    "Remote service support",
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
                <Button href="/contact">Talk to our e-mobility team</Button>
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
              src="/images/E-Mobility/Modern%20EV%20Charging%20Station.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/55 to-slate-950/80" />
          </div>
          <div className="relative mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="text-white">
              <SectionHeading
                eyebrow="Overview"
                title="Built for the realities of modern EV networks and electric fleets."
                description="We support organizations that need dependable charging operations, clear visibility, and better service continuity."
                titleClassName="!text-white !font-bold"
                descriptionClassName="!text-white !font-semibold"
              />
              <p className="mt-6 max-w-2xl text-slate-200 font-semibold">
                From depot charging to public stations, our solution brings
                operational clarity and control to the systems that keep EV
                services available.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/15 bg-slate-950/80 p-10 text-white shadow-2xl shadow-slate-950/25 backdrop-blur-sm">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#00A651]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#00A651]" />
                Solution focus
              </div>
              <p className="mt-6 text-slate-300">
                We connect charging operations, fleet planning, and management
                workflows in a way that improves uptime, user experience, and
                dependable service delivery.
              </p>
              <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/15">
                <Image
                  src="/images/E-Mobility/Smart%20Charging%20Dashboard.png"
                  alt="Charging dashboard overview"
                  width={640}
                  height={420}
                  className="h-56 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F6F8] px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading
                eyebrow="Business Challenges"
                title="Common issues that slow EV network performance and growth."
                description="These are the operational barriers that often prevent charging services from staying efficient and consistent."
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
            <div className="relative h-full min-h-[560px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl sm:min-h-[680px]">
              <Image
                src="/images/E-Mobility/Future%20city%20transportation.jfif"
                alt="Electric mobility visual"
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
              src="/images/E-Mobility/EV%20Charging%20Technician.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/55 to-slate-950/80" />
          </div>
          <div className="relative mx-auto max-w-7xl text-white">
            <SectionHeading
              eyebrow="How It Works"
              title="A practical path from planning to dependable charging operations."
              description="Each stage is designed to make EV deployment, monitoring, and service support easier to manage."
              titleClassName="!text-white !font-bold lg:text-5xl"
              descriptionClassName="!text-white !font-semibold text-lg sm:text-xl"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                eyebrow="Key Capabilities"
                title="Capabilities that make electric mobility services easier to manage and scale."
                description="Every capability is designed to strengthen uptime, visibility, and control across EV operations."
              />
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="rounded-[2rem] border border-slate-200 bg-[#F5F6F8] p-8 shadow-sm"
                  >
                    <p className="font-semibold text-[#0B1F3A]">{capability}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[520px] h-full overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl sm:min-h-[640px]">
              <Image
                src="/images/E-Mobility/Corporate%20EV%20Parking.jfif"
                alt="EV charging infrastructure"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#0B1F3A] px-6 py-24 text-white sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/E-Mobility/Fleet%20Charging%20Depot.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
            <div className="absolute inset-0 bg-slate-950/50" />
          </div>
          <div className="mx-auto grid max-w-7xl items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Benefits"
                title="Operational outcomes that support better EV service delivery."
                description="These outcomes reflect the value of dependable charging infrastructure and smarter mobility operations."
                titleClassName="!text-white !font-bold"
                descriptionClassName="!text-white !font-semibold"
              />
              <p className="max-w-2xl text-slate-300">
                Better visibility and stronger control help teams improve
                charging reliability, automate support, and deliver a smoother
                experience for users.
              </p>
            </div>
            <div className="grid h-full items-stretch gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item.label}
                  className="h-full rounded-[2rem] bg-white/10 p-8 text-slate-100 shadow-sm"
                >
                  <p className="text-3xl font-semibold">{item.value}</p>
                  <p className="mt-3 text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/E-Mobility/smart%20background.jfif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/55 to-slate-950/70" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-3xl rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_50px_rgba(7,26,47,0.2)] backdrop-blur-sm sm:p-8">
              <SectionHeading
                eyebrow="Use Cases"
                title="Flexible deployment options for charging networks and fleet operations."
                description="Our approach is designed to fit different operating models without sacrificing control or service quality."
                titleClassName="!text-white !font-bold"
                descriptionClassName="!text-white !font-semibold"
              />
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-sm backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white text-[#00A651] shadow-sm">
                    {useCase.title.includes("Fleet") ? (
                      <CarFront className="h-6 w-6" />
                    ) : useCase.title.includes("Charge") ? (
                      <BatteryCharging className="h-6 w-6" />
                    ) : useCase.title.includes("Municipal") ? (
                      <Building2 className="h-6 w-6" />
                    ) : (
                      <Zap className="h-6 w-6" />
                    )}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {useCase.title}
                  </h3>
                  <p className="mt-3 text-slate-200">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Questions about EV infrastructure and mobility operations."
              description="Clear guidance on deployment, operations, and long-term support."
              titleClassName="!text-white !font-bold"
              descriptionClassName="!text-white !font-semibold"
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
                    <span className="text-[#00A651]">
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
              title="Complementary solutions for connected mobility operations."
              description="These services strengthen the broader technology stack behind EV infrastructure and fleet enablement."
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
                    Explore the services that reinforce your connected mobility
                    strategy.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#00A651]">
                    View solution
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
