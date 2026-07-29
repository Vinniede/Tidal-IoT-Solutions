"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Lightbulb,
  CheckCircle2,
  Globe2,
  Handshake,
  ShieldCheck,
  Sparkles,
  Wifi,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { industries, partnerNames } from "@/constants/site";

const missionVision = [
  {
    title: "Mission",
    description: "Deliver intelligent infrastructure solutions that help organizations operate securely, reliably, and with long-term clarity.",
    icon: Lightbulb,
  },
  {
    title: "Vision",
    description: "Be the trusted technology partner for enterprises that demand resilient, future-ready systems across East Africa and beyond.",
    icon: Globe2,
  },
];

const coreValues = [
  {
    title: "Innovation",
    description: "We adopt new thinking where it delivers measurable operational advantage.",
    icon: Sparkles,
  },
  {
    title: "Integrity",
    description: "We build trust through transparency, accountability, and respectful partnership.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Success",
    description: "Our work is guided by the outcomes you need, not just the technology itself.",
    icon: Handshake,
  },
  {
    title: "Security",
    description: "Every design is made to protect operations, data, and critical services.",
    icon: ShieldCheck,
  },
  {
    title: "Collaboration",
    description: "We work closely with teams to align systems with real business processes.",
    icon: Building2,
  },
  {
    title: "Excellence",
    description: "We deliver work with precision, discipline, and a focus on long-term reliability.",
    icon: CheckCircle2,
  },
];

const expertiseAreas = [
  {
    title: "IoT & Telematics",
    description: "Turn asset telemetry into dependable business intelligence for fleet, field, and remote operations.",
  },
  {
    title: "Resilient Networks",
    description: "Design and deploy robust connectivity that stays online across urban, remote, and hybrid environments.",
  },
  {
    title: "Cybersecurity",
    description: "Protect mission-critical systems with integrated controls, monitoring, and governance.",
  },
  {
    title: "Secure Communications",
    description: "Enable private, low-latency channels for distributed teams and connected operations.",
  },
];

const whyChooseItems = [
  {
    title: "Enterprise Focus",
    description: "We build solutions for organizations that operate with high stakes and complex workflows.",
    icon: Building2,
  },
  {
    title: "End-to-End Solutions",
    description: "From strategy through support, we manage the full infrastructure lifecycle.",
    icon: Globe2,
  },
  {
    title: "Cybersecurity First",
    description: "Security is a foundational requirement, not an afterthought.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable Infrastructure",
    description: "Our systems are designed to grow with new locations, users, and requirements.",
    icon: Wifi,
  },
  {
    title: "Dedicated Support",
    description: "We stay engaged post-launch to keep operations stable and continuously improving.",
    icon: Handshake,
  },
  {
    title: "Innovation Driven",
    description: "We help clients adopt new capabilities without compromising reliability.",
    icon: Lightbulb,
  },
];

const journeySteps = [
  {
    title: "Founded",
    detail: "Established to bring secure infrastructure to organizations that need dependable connectivity and intelligent operations.",
  },
  {
    title: "Expanded Services",
    detail: "Added telematics, network resilience, cybersecurity, and field communications to support broader enterprise needs.",
  },
  {
    title: "Strategic Partnerships",
    detail: "Forged relationships with technology providers to strengthen delivery and integration.",
  },
  {
    title: "Regional Growth",
    detail: "Built teams and deployments across East Africa, serving customers in both public and private sectors.",
  },
  {
    title: "Future Innovation",
    detail: "Continuing to evolve our solutions toward smarter, safer, and more efficient infrastructure.",
  },
];

const pillars = [
  {
    title: "Operational reliability",
    description: "We design infrastructure that stays online and performs consistently in challenging settings.",
    icon: Building2,
  },
  {
    title: "Security-led design",
    description: "Every solution includes practical controls, monitoring, and governance for mission-critical systems.",
    icon: ShieldCheck,
  },
  {
    title: "Customer-first delivery",
    description: "We focus on business outcomes, clear communication, and dependable support across the lifecycle.",
    icon: Handshake,
  },
];

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We serve logistics, government, financial services, utilities, security companies, and SMEs with infrastructure solutions tailored to each sector.",
  },
  {
    question: "Do you provide nationwide support?",
    answer: "Yes. We support deployments across East Africa with local teams and remote operational monitoring.",
  },
  {
    question: "Can you customize solutions?",
    answer: "Absolutely. Every engagement is customized to your environment, risks, and business outcomes.",
  },
  {
    question: "Do you work with government organizations?",
    answer: "Yes. We have experience delivering secure, accountable systems for public sector and regulated clients.",
  },
  {
    question: "How can we request a consultation?",
    answer: "Use the contact form, email hello@tidal-iot.com, or schedule a call through our contact page.",
  },
];

const industrySlug = (title: string) =>
  `/industries/${title.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const partnerLogos: Record<string, string> = {
    Safaricom: "/images/Safaricom.jfif",
    "Kenya Power": "/images/Kenya%20Power.jfif",
    Airtel: "/images/Airtel.png",
    "Nairobi Metro": "/images/Nairobi%20Metro.jfif",
    "M-PESA": "/images/M-PESA.png",
    Sokowatch: "/images/Sokowatch.jfif",
  };

  return (
    <div className="min-h-screen bg-[#F8FBFC] text-slate-700">
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden bg-white px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
          <Image src="/images/about-hero-background.jfif" alt="" fill className="object-cover opacity-100" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-[#071A2F]/20" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="flex h-full flex-col justify-center space-y-5 rounded-[2rem] border border-white/70 bg-white/82 p-6 shadow-xl backdrop-blur-sm">
              <SectionHeading
                eyebrow="About"
                title="Engineering Intelligent Infrastructure for a Connected Future."
                description="Tidal IoT Solutions delivers intelligent telematics, secure communications, resilient networks, and cybersecurity for organizations that need reliable outcomes, not just technology."
              />
              <p className="max-w-2xl text-slate-600">
                We help enterprise teams turn challenging operational requirements into dependable systems. Our work is built around trust, clarity, and long-term performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/solutions">Explore solutions</Button>
                <Button href="/contact" variant="secondary">Contact our team</Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative min-h-[180px] overflow-hidden rounded-[2rem] border border-white/80 bg-[#071A2F] shadow-xl sm:min-h-[220px]"><Image src="/images/about-hero-foreground-visual.jfif" alt="Connected teams and digital collaboration" fill className="object-cover" priority /></div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-[#00a999]">Enterprise operations</p>
                <h2 className="mt-6 text-3xl font-semibold text-[#071A2F]">A strong first impression for every visitor.</h2>
                <p className="mt-4 text-slate-600">
                  We present infrastructure with a business-first lens, using visuals and messaging that reflect real mission priorities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl sm:min-h-[420px]">
              <Image src="/images/about-journey-timeline-visual.jpg" alt="Tidal's journey and team" fill className="object-cover" priority />
            </div>
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Who we are"
                title="A practical team helping businesses modernize with confidence."
                description="We bridge operations, security, and connectivity to deliver enterprise infrastructure that stays reliable under pressure."
              />
              <div className="space-y-4 text-slate-600">
                <p>
                  Tidal IoT Solutions serves organizations that require dependable systems in complex environments. Our experience spans public sector, logistics, finance, utilities, security, and SME operations.
                </p>
                <ul className="space-y-3">
                  {[
                    "Operational clarity across field and office systems.",
                    "Security-first design for every network and communication layer.",
                    "Flexible delivery that supports both large deployments and agile teams.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00C4B3]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Button href="/contact">Meet the team</Button>
                  <Button href="/solutions" variant="secondary">View services</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#071A2F] px-6 py-10 text-white sm:px-8 sm:py-12 lg:px-12">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_15%_15%,#00c4b3_0,transparent_25%),radial-gradient(circle_at_85%_75%,#265d81_0,transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#5DE6D6]">Our story</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Built to close the gap between infrastructure and operational continuity.</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Tidal started with a simple belief: technology should make critical work easier, not add more complexity. We bring field operations, secure connectivity, and practical delivery into one clear approach.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["01", "Listen first", "We begin with the realities of your people, assets, and operating environment."],
                ["02", "Design for the field", "Every system is shaped for dependable use beyond the data centre."],
                ["03", "Stay alongside you", "We support continuous improvement long after deployment."],
              ].map(([number, title, description]) => (
                <div key={number} className="rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm">
                  <p className="text-xs font-bold tracking-[0.22em] text-[#5DE6D6]">{number}</p>
                  <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-2">
            {missionVision.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8FFF9] text-[#00C4B3]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold text-[#071A2F]">{item.title}</h2>
                  <p className="mt-4 text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Core values"
              title="Principles that shape every decision we make."
              description="We operate with integrity, customer focus, and a relentless drive for reliable results."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {coreValues.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="rounded-[2rem] border border-slate-200 bg-[#F8FBFC] p-8 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8FFF9] text-[#00C4B3]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-[#071A2F]">{value.title}</h3>
                    <p className="mt-3 text-slate-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Our expertise"
                title="Technical capabilities built around business impact."
                description="We focus on infrastructure that improves efficiency, security, and continuity across operations."
              />
              <ul className="space-y-4 text-slate-600">
                {expertiseAreas.map((area) => (
                  <li key={area.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-[#071A2F]">{area.title}</h3>
                    <p className="mt-3 text-slate-600">{area.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl sm:min-h-[340px]"><Image src="/images/about-expertise-section-accent.jpg" alt="Tidal technology expertise" fill className="object-cover" /></div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-[#00a999]">Technology ecosystem</p>
                <h2 className="mt-5 text-3xl font-semibold text-[#071A2F]">Practical systems for modern operations.</h2>
                <p className="mt-6 text-slate-600">
                  We assemble technology from trusted partners and tailor it to each customer’s environment, so the result is both powerful and usable.
                </p>
                <div className="mt-10 grid gap-4">
                  {[
                    "Field-ready telemetry and asset tracking",
                    "Redundant network design for business continuity",
                    "Integrated security controls that protect mission-critical assets",
                  ].map((item) => (
                    <div key={item} className="rounded-3xl bg-[#F8FBFC] p-4 text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#071A2F] px-6 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Technology partnerships"
              title="A broad ecosystem that strengthens our delivery."
              description="We work with trusted partners to deliver better integration, resilience, and ongoing support."
              align="center"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {partnerNames.map((partner) => (
                <div key={partner} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center text-lg font-semibold text-white shadow-sm">
                  <Image src={partnerLogos[partner]} alt={partner} width={160} height={40} className="mx-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Industries"
              title="Sector experience that builds confidence quickly."
              description="We support organizations in markets where uptime, security, and coordination matter most."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <Link
                    key={industry.title}
                    href={industrySlug(industry.title)}
                    className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:border-[#00C4B3] hover:bg-[#F8FBFC]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8FFF9] text-[#00C4B3]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-[#071A2F]">{industry.title}</h3>
                    <p className="mt-3 text-slate-600">{industry.description}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#071A2F] transition group-hover:text-[#00C4B3]">
                      Explore
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#F8FBFC] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Why choose Tidal"
              title="Differentiators that matter for enterprise decision-makers."
              description="We combine deep technical capability with a customer-first mindset and long-term support."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {whyChooseItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8FFF9] text-[#00C4B3]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-[#071A2F]">{item.title}</h3>
                    <p className="mt-3 text-slate-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Our journey"
              title="A timeline of focus, growth, and continued innovation."
              description="These milestones show how we’ve expanded capability while staying true to our purpose."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-5">
              {journeySteps.map((step, index) => (
                <div key={step.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00C4B3]">{index + 1}</p>
                  <h3 className="mt-4 text-xl font-semibold text-[#071A2F]">{step.title}</h3>
                  <p className="mt-3 text-slate-600">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <Image src="/images/about-faq-background-pattern.jpg" alt="" fill sizes="100vw" className="object-cover opacity-100" />
          <div className="absolute inset-0 bg-white/20" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Answers to the questions we hear most often."
              description="These details help prospective customers move from interest to confidence faster."
            />
            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => (
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

        <section className="bg-[#071A2F] px-6 py-10 text-white sm:px-8 sm:py-12 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#102A45] p-8 text-center shadow-[0_30px_80px_rgba(7,26,47,0.22)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5DE6D6]">Ready to partner</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Trust Tidal to build infrastructure your organization can depend on.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Start with a concise conversation about your challenges, and we’ll help you design the right approach for secure, resilient operations.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact">Request consultation</Button>
              <Button href="/solutions" variant="secondary">Explore solutions</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
