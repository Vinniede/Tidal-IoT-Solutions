"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  CircleCheckBig,
  Clock3,
  Cpu,
  FileText,
  Gauge,
  Globe2,
  Headphones,
  KeyRound,
  LockKeyhole,
  Mail,
  MapPin,
  Network,
  Phone,
  RadioTower,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  Users,
  Wifi,
  Workflow,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";

const consultationReasons = [
  {
    title: "Understand Your Needs",
    description: "We assess your business goals and operational challenges.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Recommend the Right Solution",
    description: "Receive expert recommendations tailored to your industry.",
    icon: Sparkles,
  },
  {
    title: "Plan Your Deployment",
    description: "Discuss implementation, scalability, and integration.",
    icon: Gauge,
  },
  {
    title: "Receive a Tailored Proposal",
    description: "Get a customized solution designed for your organization.",
    icon: FileText,
  },
];

const solutionCards = [
  {
    title: "Intelligent Telematics",
    description:
      "Fleet tracking, smart asset visibility, and operational analytics that improve decisions in real time.",
    icon: RadioTower,
    href: "/solutions/intelligent-telematics",
  },
  {
    title: "Secure Communications",
    description:
      "Mission-critical connectivity with resilient voice, messaging, and data services for distributed operations.",
    icon: Headphones,
    href: "/solutions/secure-communications",
  },
  {
    title: "Resilient Networks",
    description:
      "Purpose-built network architecture for uptime, redundancy, and long-term growth across connected sites.",
    icon: Network,
    href: "/solutions/resilient-networks",
  },
  {
    title: "Integrated Cybersecurity",
    description:
      "Protect your people, infrastructure, and data with proactive, policy-driven security controls.",
    icon: ShieldCheck,
    href: "/solutions/integrated-cybersecurity",
  },
  {
    title: "E-Mobility Solutions",
    description:
      "Electrification support for modern fleets, charging infrastructure, and smarter operational management.",
    icon: BatteryCharging,
    href: "/solutions/e-mobility",
  },
];

const workflowSteps = [
  { step: "Submit Request", icon: FileText },
  { step: "Consultation Review", icon: CircleCheckBig },
  { step: "Discovery Meeting", icon: Users },
  { step: "Solution Design", icon: Cpu },
  { step: "Proposal", icon: BriefcaseBusiness },
  { step: "Implementation", icon: Workflow },
];

const whyChoose = [
  { title: "Industry Expertise", description: "Solutions shaped around the realities of your operating environment.", icon: Building2 },
  { title: "Certified Engineers", description: "Delivery from specialists who understand connected infrastructure at scale.", icon: KeyRound },
  { title: "End-to-End Delivery", description: "From design to rollout, our team stays accountable throughout the project.", icon: Zap },
  { title: "Scalable Solutions", description: "Architectures built to expand with your business, not against it.", icon: Globe2 },
  { title: "Trusted Technologies", description: "We connect robust, proven platforms to create dependable operations.", icon: LockKeyhole },
  { title: "Long-Term Support", description: "Ongoing optimization and field support keep systems resilient over time.", icon: ShieldCheck },
];

const faqItems = [
  {
    question: "Is the consultation free?",
    answer:
      "Yes. Our initial consultation is designed to understand your current challenges, priorities, and goals so we can recommend the right starting point for your business.",
  },
  {
    question: "How long does the consultation take?",
    answer:
      "Most consultations take 30 to 60 minutes, depending on the complexity of your project and the number of stakeholders involved.",
  },
  {
    question: "Can you integrate with existing systems?",
    answer:
      "Absolutely. We regularly work with legacy technologies, current field systems, and enterprise workflows to create secure, practical integrations.",
  },
  {
    question: "Do you support nationwide deployment?",
    answer:
      "Yes. We support multi-location and nationwide rollouts, including fleet operations, communications infrastructure, and enterprise connectivity programs.",
  },
  {
    question: "Can multiple solutions be combined?",
    answer:
      "Yes. Many organizations combine telematics, secure communications, and cybersecurity or network resilience into a single integrated roadmap.",
  },
  {
    question: "What happens after I submit my request?",
    answer:
      "Our team reviews your request, follows up for context where needed, and schedules a discovery call to map the best next steps for your organization.",
  },
];

const solutionOptions = [
  "Intelligent Telematics",
  "Secure Communications",
  "Resilient Networks",
  "Integrated Cybersecurity",
  "E-Mobility Solutions",
  "Multiple Solutions",
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#F5F6F8] text-slate-700">
      <Navbar />

      <main className="pb-20">
        <section className="relative overflow-hidden bg-[#0B1F3A]">
          <Image
            src="/images/about-hero-background.jfif"
            alt=""
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.22),_transparent_28%),linear-gradient(90deg,rgba(11,31,58,0.90)_0%,rgba(11,31,58,0.78)_52%,rgba(11,31,58,0.74)_100%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]"
            >
              <div>
                <p className="mb-5 inline-flex items-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#F5F6F8]">
                  Professional consultation
                </p>
                <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Let&apos;s Build Smarter Infrastructure Together
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
                  Whether you&apos;re planning an IoT deployment, upgrading communications,
                  improving fleet operations, strengthening cybersecurity, or investing in
                  e-mobility, our specialists are ready to help you find the right
                  solution.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/contact#consultation-form"
                    className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3.5 text-base font-semibold text-[#0B1F3A] shadow-[0_18px_35px_rgba(212,175,55,0.32)] transition hover:-translate-y-0.5 hover:bg-[#e4c563]"
                  >
                    Request Consultation
                  </a>
                  <a
                    href="tel:+254700000000"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:border-[#D4AF37]/50 hover:bg-white/10"
                  >
                    Call Our Experts
                  </a>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {[
                    "Enterprise Solutions",
                    "Certified Engineers",
                    "Nationwide Support",
                    "End-to-End Delivery",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 backdrop-blur-sm">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00A651]/15 text-[#00A651]">
                        <Check className="h-4 w-4" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                className="relative"
              >
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur-sm shadow-[0_28px_80px_rgba(11,31,58,0.4)]">
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
                    <Image
                      src="/images/about-hero-foreground-visual.jfif"
                      alt="Enterprise technology team discussing digital transformation"
                      width={700}
                      height={760}
                      className="h-[520px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/40 to-transparent" />
                  </div>
                </div>

                <div className="absolute -bottom-5 left-4 right-4 rounded-[1.5rem] border border-[#D4AF37]/20 bg-[#0B1F3A]/85 p-5 text-white shadow-[0_24px_60px_rgba(11,31,58,0.38)] backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">Operations</p>
                      <p className="mt-2 text-2xl font-semibold">99.98%</p>
                    </div>
                    <div className="rounded-full bg-[#00A651]/15 p-3 text-[#00A651]">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-200">
                    <div>
                      <p className="text-slate-400">Response</p>
                      <p className="mt-1 font-semibold text-white">24/7</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Sites</p>
                      <p className="mt-1 font-semibold text-white">15+</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Support</p>
                      <p className="mt-1 font-semibold text-white">N/A</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Why request a consultation"
              title="A clear strategy starts with the right conversation."
              description="We look beyond the immediate challenge and help you shape a resilient, scalable roadmap that supports your business goals."
              align="center"
              titleClassName="!text-[#0B1F3A]"
              descriptionClassName="!text-[#4B5563]"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {consultationReasons.map(({ title, description, icon: Icon }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(11,31,58,0.05)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5F6F8] text-[#0B1F3A] shadow-sm">
                    <Icon className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[#0B1F3A]">{title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="consultation-form" className="px-6 py-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_28px_80px_rgba(11,31,58,0.06)] sm:p-8 lg:p-10">
            <div className="mb-8">
              <SectionHeading
                eyebrow="Consultation form"
                title="Tell us about your project and goals."
                description="Share your requirements and our team will reach out to understand the right solution path for your organization."
              />
            </div>

            <div className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-[1.75rem] bg-[#0B1F3A] p-6 text-white shadow-[0_24px_50px_rgba(11,31,58,0.18)] sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#D4AF37]/15 p-3 text-[#D4AF37]">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">Trusted guidance</p>
                    <h3 className="mt-2 text-2xl font-semibold">A proven engagement model</h3>
                  </div>
                </div>

                <div className="mt-8 space-y-5">
                  {[
                    ["Expert Review", "A senior advisor evaluates your challenge and operational context."],
                    ["Custom Recommendations", "We map relevant solutions to your technical, commercial, and strategic needs."],
                    ["Execution Roadmap", "You receive a practical deployment plan with next steps and priorities."],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                      <p className="font-semibold text-white">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-200">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.25rem] border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">Response time</p>
                  <p className="mt-3 text-2xl font-semibold text-white">Within 1 business day</p>
                </div>
              </div>

              <form className="space-y-8">
                <div className="rounded-[1.5rem] border border-slate-200 bg-[#F5F6F8] p-5 sm:p-6">
                  <h3 className="text-xl font-semibold text-[#0B1F3A]">Company information</h3>
                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Company Name *
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </label>
                    <label className="block text-sm font-medium text-slate-700">
                      Contact Person *
                      <input
                        type="text"
                        placeholder="Contact Person"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </label>
                    <label className="block text-sm font-medium text-slate-700">
                      Job Title
                      <input
                        type="text"
                        placeholder="Job Title"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </label>
                    <label className="block text-sm font-medium text-slate-700">
                      Business Email *
                      <input
                        type="email"
                        placeholder="name@company.com"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </label>
                    <label className="block text-sm font-medium text-slate-700">
                      Phone Number *
                      <input
                        type="tel"
                        placeholder="+254 ..."
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </label>
                    <label className="block text-sm font-medium text-slate-700">
                      Country *
                      <input
                        type="text"
                        placeholder="Country"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </label>
                    <label className="block text-sm font-medium text-slate-700">
                      City
                      <input
                        type="text"
                        placeholder="City"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </label>
                    <label className="block text-sm font-medium text-slate-700">
                      Company Website
                      <input
                        type="url"
                        placeholder="https://company.com"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </label>
                    <label className="block text-sm font-medium text-slate-700">
                      Industry *
                      <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20">
                        <option>Select industry</option>
                        <option>Logistics & Transport</option>
                        <option>Government</option>
                        <option>Banking & Financial Services</option>
                        <option>Utilities</option>
                        <option>Security</option>
                        <option>SMEs</option>
                        <option>Other</option>
                      </select>
                    </label>
                    <label className="block text-sm font-medium text-slate-700">
                      Company Size
                      <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20">
                        <option>Select company size</option>
                        <option>1–20 employees</option>
                        <option>21–50 employees</option>
                        <option>51–200 employees</option>
                        <option>201–500 employees</option>
                        <option>500+ employees</option>
                      </select>
                    </label>
                    <label className="block text-sm font-medium text-slate-700 md:col-span-2">
                      Project Location
                      <input
                        type="text"
                        placeholder="Site or deployment location"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </label>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-6">
                  <h3 className="text-xl font-semibold text-[#0B1F3A]">Interested solution</h3>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {solutionOptions.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#F5F6F8] px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[#D4AF37]/50 hover:bg-[#FFF9EE]"
                      >
                        <input type="checkbox" className="h-4 w-4 accent-[#00A651]" />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-6">
                  <h3 className="text-xl font-semibold text-[#0B1F3A]">Project details</h3>
                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Project Timeline
                      <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20">
                        <option>Select timeline</option>
                        <option>Immediately</option>
                        <option>Within 1 Month</option>
                        <option>Within 3 Months</option>
                        <option>Within 6 Months</option>
                        <option>Planning Stage</option>
                      </select>
                    </label>
                    <label className="block text-sm font-medium text-slate-700">
                      Estimated Budget
                      <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20">
                        <option>Select budget</option>
                        <option>Under $10,000</option>
                        <option>$10,000–50,000</option>
                        <option>$50,000–100,000</option>
                        <option>$100,000+</option>
                      </select>
                    </label>
                  </div>

                  <label className="mt-5 block text-sm font-medium text-slate-700">
                    Prefer to Discuss
                    <textarea
                      rows={6}
                      placeholder="Describe your project, current challenges, and desired goals."
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                    />
                  </label>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-6">
                  <h3 className="text-xl font-semibold text-[#0B1F3A]">File upload</h3>
                  <label className="mt-5 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-[1.25rem] border border-dashed border-slate-300 bg-[#F5F6F8] px-6 py-8 text-center text-slate-600 transition hover:border-[#D4AF37] hover:bg-[#FFF9EE]">
                    <UploadCloud className="h-8 w-8 text-[#D4AF37]" />
                    <span className="text-base font-medium text-[#0B1F3A]">Upload supporting documents</span>
                    <span className="text-sm text-slate-500">PDF, Word, Excel, Images, CAD Drawings</span>
                    <input type="file" className="hidden" multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.dwg,.dxf" />
                  </label>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-6">
                  <label className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                    <input type="checkbox" className="mt-1 h-4 w-4 accent-[#00A651]" />
                    <span>
                      I agree to the <Link href="/privacy-policy" className="font-semibold text-[#0B1F3A] underline-offset-2 hover:underline">Privacy Policy</Link> and consent to being contacted.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0B1F3A] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_35px_rgba(11,31,58,0.24)] transition hover:-translate-y-0.5 hover:bg-[#6E1E2D]"
                >
                  Request Consultation
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Our solutions"
              title="Explore the systems that power resilient growth."
              description="Our portfolio is built to help organizations connect critical assets, optimize operations, and protect infrastructure without slowing the business down."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-5">
              {solutionCards.map(({ title, description, icon: Icon, href }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(11,31,58,0.04)] transition hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(11,31,58,0.10)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F6F8] text-[#D4AF37]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#0B1F3A]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                  <Link
                    href={href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3A] transition group-hover:text-[#6E1E2D]"
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F6F8] px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="What happens next"
              title="A structured path from first conversation to delivery."
              description="Your consultation is the start of a practical engagement model designed to align technology, people, and operational goals."
              align="center"
              titleClassName="!text-[#0B1F3A]"
              descriptionClassName="!text-[#4B5563]"
            />

            <div className="mt-12 overflow-x-auto">
              <div className="flex min-w-[760px] items-center justify-between gap-4">
                {workflowSteps.map(({ step, icon: Icon }, index) => (
                  <div key={step} className="flex flex-1 items-center justify-center gap-4">
                    <div className="relative flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B1F3A] text-white shadow-[0_16px_32px_rgba(11,31,58,0.18)]">
                        <Icon className="h-7 w-7 text-[#D4AF37]" />
                      </div>
                      <div className="mt-3 text-center">
                        <p className="text-xs uppercase tracking-[0.18em] text-[#D4AF37]">{`0${index + 1}`}</p>
                        <p className="mt-2 text-sm font-semibold text-[#0B1F3A]">{step}</p>
                      </div>
                    </div>
                    {index < workflowSteps.length - 1 ? (
                      <div className="hidden h-px flex-1 bg-gradient-to-r from-[#D4AF37] via-[#6E1E2D] to-[#D4AF37] sm:block" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(212,175,55,0.10), transparent 30%), radial-gradient(circle at 80% 0%, rgba(110,30,45,0.08), transparent 30%), linear-gradient(180deg, #ffffff 0%, #f5f6f8 100%)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(rgba(11,31,58,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(11,31,58,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Why choose Tidal"
              title="Enterprise-ready systems built around real operational needs."
              description="We help organizations modernize with clarity, security, and measurable outcomes that support long-term performance."
              align="center"
              titleClassName="!text-[#0B1F3A]"
              descriptionClassName="!text-[#4B5563]"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {whyChoose.map(({ title, description, icon: Icon }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(11,31,58,0.04)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F6F8] text-[#D4AF37]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#0B1F3A]">{title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_28px_80px_rgba(11,31,58,0.05)] sm:p-8 lg:p-10">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Answers to the questions we hear most often."
              description="We keep the process straightforward, transparent, and tailored to your business context."
            />

            <div className="mt-8 space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;

                return (
                  <div key={item.question} className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-[#F5F6F8]">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                    >
                      <span className="text-base font-semibold text-[#0B1F3A]">{item.question}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-[#0B1F3A] transition ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6">{item.answer}</p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(11,31,58,0.05)] sm:p-8">
              <SectionHeading
                eyebrow="Contact information"
                title="Speak with our specialists."
                description="We are ready to help you evaluate your infrastructure, identify risks, and plan the right next step."
              />

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4 rounded-[1.25rem] border border-slate-200 bg-[#F5F6F8] p-4">
                  <div className="rounded-full bg-white p-2 text-[#00A651] shadow-sm">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Phone</p>
                    <a href="tel:+254700000000" className="mt-2 block text-base font-semibold text-[#0B1F3A]">+254 700 000 000</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-[1.25rem] border border-slate-200 bg-[#F5F6F8] p-4">
                  <div className="rounded-full bg-white p-2 text-[#00A651] shadow-sm">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Email</p>
                    <a href="mailto:info@tidal-iot.com" className="mt-2 block text-base font-semibold text-[#0B1F3A]">info@tidal-iot.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-[1.25rem] border border-slate-200 bg-[#F5F6F8] p-4">
                  <div className="rounded-full bg-white p-2 text-[#00A651] shadow-sm">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Office address</p>
                    <p className="mt-2 text-base font-semibold text-[#0B1F3A]">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-[1.25rem] border border-slate-200 bg-[#F5F6F8] p-4">
                  <div className="rounded-full bg-white p-2 text-[#00A651] shadow-sm">
                    <Clock3 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Business hours</p>
                    <p className="mt-2 text-base font-semibold text-[#0B1F3A]">Mon–Fri, 8:00 AM – 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-[1.25rem] border border-slate-200 bg-[#F5F6F8] p-4">
                  <div className="rounded-full bg-white p-2 text-[#00A651] shadow-sm">
                    <Wifi className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Social</p>
                    <a href="https://www.linkedin.com" className="mt-2 block text-base font-semibold text-[#0B1F3A]">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(11,31,58,0.05)]">
              <iframe
                title="Tidal IoT Solutions location map"
                src="https://www.google.com/maps?q=Nairobi%20Kenya&z=11&output=embed"
                className="h-[540px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="px-6 pb-10 pt-8 sm:px-8 lg:px-12">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0B1F3A] shadow-[0_32px_80px_rgba(11,31,58,0.20)]">
            <Image
              src="/images/industries-final-cta-background.jpg"
              alt=""
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/85 to-[#0B1F3A]/70" />

            <div className="relative z-10 px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">Ready to move forward</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Ready to Transform Your Infrastructure?
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-slate-200">
                    Speak with our specialists and discover how Tidal IoT Solutions can help connect, secure, and optimize your business.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/contact#consultation-form"
                    className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3.5 text-base font-semibold text-[#0B1F3A] shadow-[0_18px_35px_rgba(212,175,55,0.25)] transition hover:-translate-y-0.5 hover:bg-[#e4c563]"
                  >
                    Request Consultation
                  </a>
                  <a
                    href="tel:+254700000000"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <aside className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
        <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-4 shadow-[0_18px_40px_rgba(11,31,58,0.12)] backdrop-blur-md">
          <p className="text-sm font-semibold text-[#0B1F3A]">Need Expert Advice?</p>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00A651]" />
              Free Initial Consultation
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00A651]" />
              Tailored Recommendations
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00A651]" />
              Industry Specialists
            </div>
          </div>
          <a
            href="/contact#consultation-form"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0B1F3A] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#6E1E2D]"
          >
            Request Consultation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </aside>

      <Footer />
    </div>
  );
}
