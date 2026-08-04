"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, Sparkles, BriefcaseBusiness } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";

const interestOptions = [
  "Intelligent Telematics",
  "Secure Communications",
  "Resilient Networks",
  "Integrated Cybersecurity",
  "E-Mobility Solutions",
];

const nextSteps = [
  "Submit Request",
  "Consultation Call",
  "Solution Assessment",
  "Proposal",
];

const benefits = [
  {
    title: "Certified Engineers",
    description: "Industry professionals with practical deployment experience.",
    icon: ShieldCheck,
  },
  {
    title: "Tailored Solutions",
    description: "Recommendations designed around your business objectives.",
    icon: BriefcaseBusiness,
  },
  {
    title: "End-to-End Delivery",
    description: "From consultation and design to deployment and ongoing support.",
    icon: Sparkles,
  },
  {
    title: "Long-Term Partnership",
    description: "We continue supporting your infrastructure as your business grows.",
    icon: Check,
  },
];

export default function RequestConsultationPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setStatus("submitting");
    setFeedback("");

    const payload = {
      companyName: formData.get("companyName")?.toString() ?? "",
      contactPerson: formData.get("contactPerson")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      industry: formData.get("industry")?.toString() ?? "",
      interests: formData.getAll("interests").map((value) => value.toString()),
      timeline: formData.get("timeline")?.toString() ?? "",
      budget: formData.get("budget")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
    };

    try {
      const response = await fetch("/api/request-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Unable to submit the form.");
      }

      setStatus("success");
      setFeedback("Thank you! Your consultation request has been submitted.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "There was an error submitting the form."
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F6F8] text-slate-700">

      <main>
        <section className="relative overflow-hidden bg-[#0B1F3A]">
          <Image
            src="/images/home-hero-background.jpg"
            alt="Business consultation with digital dashboard"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-[#0B1F3A]/70" />
          <div className="relative mx-auto max-w-7xl px-6 py-6 sm:px-8 sm:py-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-3xl space-y-6 text-white"
            >
              <p className="inline-flex rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#F5F6F8]">
                Request consultation
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Let&apos;s Design the Right Solution for Your Business
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                Whether you&apos;re looking for fleet telematics, secure communications, resilient networks,
                cybersecurity, or e-mobility, our specialists will work with you to understand your
                operational goals and recommend the right solution.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3.5 text-base font-semibold text-[#0B1F3A] transition hover:-translate-y-0.5 hover:bg-[#e4c563]"
                >
                  Request Consultation
                </a>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:border-[#D4AF37]/50 hover:bg-white/10"
                >
                  View Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-shell px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_0.35fr]">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(11,31,58,0.06)]">
                <div id="consultation-form">
                  <SectionHeading
                    eyebrow="Consultation form"
                    title="Share your business priorities and project scope."
                    description="Provide the details that matter most so our team can prepare a focused response."
                  />
                </div>

                <form onSubmit={handleSubmit} className="mt-10 space-y-8">
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Company Name
                      <input
                        name="companyName"
                        type="text"
                        required
                        placeholder="Company Name"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </label>
                    <label className="block text-sm font-medium text-slate-700">
                      Contact Person
                      <input
                        name="contactPerson"
                        type="text"
                        required
                        placeholder="Contact Person"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </label>
                    <label className="block text-sm font-medium text-slate-700">
                      Email
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="name@company.com"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </label>
                    <label className="block text-sm font-medium text-slate-700">
                      Phone
                      <input
                        name="phone"
                        type="tel"
                        required
                        placeholder="+254 ..."
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </label>
                    <label className="block text-sm font-medium text-slate-700 md:col-span-2">
                      Industry
                      <select
                        name="industry"
                        required
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      >
                        <option value="">Select industry</option>
                        <option>Logistics & Transport</option>
                        <option>Government</option>
                        <option>Banking & Financial Services</option>
                        <option>Utilities</option>
                        <option>Security</option>
                        <option>SMEs</option>
                        <option>Other</option>
                      </select>
                    </label>
                  </div>

                  <div className="rounded-[1.75rem] border border-slate-200 bg-[#F8FAFC] p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0B1F3A]">Interested solutions</p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {interestOptions.map((option) => (
                        <label
                          key={option}
                          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700 transition hover:border-[#D4AF37]/50 hover:bg-[#FEF8E7]"
                        >
                          <input type="checkbox" name="interests" value={option} className="h-4 w-4 accent-[#00A651]" />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Project Timeline
                      <select
                        name="timeline"
                        required
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      >
                        <option value="">Select timeline</option>
                        <option>Immediately</option>
                        <option>Within 1 Month</option>
                        <option>Within 3 Months</option>
                        <option>Within 6 Months</option>
                        <option>Planning Stage</option>
                      </select>
                    </label>
                    <label className="block text-sm font-medium text-slate-700">
                      Budget
                      <select
                        name="budget"
                        required
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      >
                        <option value="">Select budget</option>
                        <option>Under $10,000</option>
                        <option>$10,000–50,000</option>
                        <option>$50,000–100,000</option>
                        <option>$100,000+</option>
                      </select>
                    </label>
                  </div>

                  <label className="block text-sm font-medium text-slate-700">
                    Message
                    <textarea
                      name="message"
                      rows={6}
                      required
                      placeholder="Describe your project, challenges, and expected outcomes."
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0B1F3A] px-6 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#161f31] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" ? "Submitting..." : "Request Consultation"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  {feedback ? (
                    <p className={`text-sm ${status === "success" ? "text-emerald-400" : "text-rose-400"}`}>
                      {feedback}
                    </p>
                  ) : null}
                </form>
              </div>

              <aside className="space-y-8 rounded-[2rem] border border-slate-200 bg-[#0B1F3A] p-8 text-white shadow-[0_24px_80px_rgba(11,31,58,0.12)]">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">Why this matters</p>
                  <h2 className="mt-4 text-2xl font-semibold">A focused form for faster follow-up.</h2>
                  <p className="mt-4 text-slate-200">
                    The details you share help our specialists prepare a relevant consultation and save time on the first call.
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-3 text-[#D4AF37]">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#D4AF37]/15">
                      <Sparkles className="h-5 w-5" />
                    </span>
                    <p className="font-semibold">Faster next steps</p>
                  </div>
                  <p className="mt-4 text-slate-200">
                    Expect a response within one business day so you can move quickly from request to planning.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="What happens next"
              title="A clear process from request to proposal."
              description="We keep the next steps transparent so you know what to expect after submitting your consultation request."
              align="center"
            />

            <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(11,31,58,0.06)]">
              <div className="grid gap-6 text-center sm:grid-cols-4">
                {nextSteps.map((step, index) => (
                  <div key={step} className="space-y-3">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-semibold">
                      {index + 1}
                    </div>
                    <p className="font-semibold text-[#0B1F3A]">{step}</p>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-center text-lg leading-8 text-slate-600">
                Our engineers typically respond within one business day to schedule an initial consultation and discuss your project requirements.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F8FAFC] px-6 py-20 sm:px-8 lg:px-12">
          <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_25%)]" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Why choose Tidal"
              title="Solutions built for long-term operational success."
              description="We bring engineering depth, practical delivery, and ongoing support to every consultation."
              align="center"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(11,31,58,0.08)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[#0B1F3A]">{title}</h3>
                  <p className="mt-3 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
