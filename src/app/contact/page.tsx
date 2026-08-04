"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setStatus("submitting");
    setFeedback("");

    const payload = {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      subject: formData.get("subject")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Unable to submit the form.");
      }

      setStatus("success");
      setFeedback("Thank you! Your message has been sent successfully.");
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
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#0B1F3A]">
          <Image
            src="/images/about-hero-background.jfif"
            alt="Office workspace and team collaboration"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-[#0B1F3A]/70" />

          <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="max-w-3xl space-y-8 text-white"
            >
              <p className="inline-flex rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#F5F6F8]">
                Contact Tidal
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Get in Touch
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                Reach our team for general inquiries, partnership discussions, or support.
                We make it easy to connect with the right people at Tidal.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+254108661811"
                  className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3.5 text-base font-semibold text-[#0B1F3A] transition hover:-translate-y-0.5 hover:bg-[#e4c563]"
                >
                  Call Us
                </a>
                <Link
                  href="mailto:info@tidal-iot.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:border-[#D4AF37]/50 hover:bg-white/10"
                >
                  Email Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-shell px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(11,31,58,0.06)]">
              <SectionHeading
                eyebrow="Contact information"
                title="Reach the right person for your question."
                description="Use phone, email, or the form to get help from our team. We respond quickly and can direct your request to the right specialist."
              />

              <div className="mt-10 grid gap-6">
                <div className="space-y-5 rounded-[1.75rem] border border-slate-200 bg-[#F5F6F8] p-6">
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F7E9] text-[#00A651]">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <a href="tel:+254108661811" className="mt-1 block text-base font-semibold text-[#0B1F3A]">
                        +254 10 866 1811
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#1D4ED8]">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a href="mailto:info@tidal-iot.com" className="mt-1 block text-base font-semibold text-[#0B1F3A]">
                        info@tidal-iot.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 rounded-[1.75rem] border border-slate-200 bg-[#F5F6F8] p-6">
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F8F5DD] text-[#D4AF37]">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium">Office Address</p>
                      <p className="mt-1 text-base font-semibold text-[#0B1F3A]">
                        3rd Floor, West Wing, Nairobi Business Park
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F5F3FF] text-[#6366F1]">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium">Business Hours</p>
                      <p className="mt-1 text-base font-semibold text-[#0B1F3A]">
                        Mon–Fri, 8:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(11,31,58,0.06)]">
              <SectionHeading
                eyebrow="Send a message"
                title="Have a question? Start here."
                description="Use the form below to send us a note and we’ll connect you with the right team."
              />

              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Name
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
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
                </div>
                <label className="block text-sm font-medium text-slate-700">
                  Subject
                  <input
                    name="subject"
                    type="text"
                    required
                    placeholder="What would you like to discuss?"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Message
                  <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us a little about your request."
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-base text-slate-700 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                  />
                </label>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0B1F3A] px-6 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#161f31] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                  <ArrowRight className="h-4 w-4" />
                </button>
                {feedback ? (
                  <p className={`text-sm ${status === "success" ? "text-emerald-400" : "text-rose-400"}`}>
                    {feedback}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(11,31,58,0.06)] lg:grid lg:grid-cols-[0.65fr_0.35fr]">
            <div className="relative min-h-[360px]">
              <iframe
                title="Nairobi office location"
                src="https://maps.google.com/maps?q=Nairobi%20Kenya&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
            <div className="space-y-8 p-8">
              <SectionHeading
                eyebrow="Office location"
                title="Visit our Nairobi office."
                description="Our team works from a central Nairobi location with easy access to public transport and business infrastructure."
              />
              <div className="rounded-[1.75rem] border border-slate-200 bg-[#F5F6F8] p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E8F7E9] text-[#00A651]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Office address</p>
                    <p className="mt-2 text-base font-semibold text-[#0B1F3A]">
                      3rd Floor, West Wing, Nairobi Business Park
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-4 text-slate-600">
                  <p>
                    Located in the Nairobi business district with easy access to roads and public transport. Visitor parking is available on site.
                  </p>
                  <p>
                    Nearest stations: Nairobi Central, Bishop Road bus terminus. Ideal for meetings, planning sessions, and on-site consultations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0B1F3A] px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#0B1F3A]/95 p-10 text-white shadow-[0_32px_80px_rgba(11,31,58,0.24)]">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">Looking for a tailored technology solution?</p>
                <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Start with the right conversation.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                  Request a consultation to explore practical, scalable solutions for your business operations.
                </p>
              </div>
              <div className="flex items-center justify-start">
                <Link
                  href="/request-consultation"
                  className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-base font-semibold text-[#0B1F3A] transition hover:-translate-y-0.5 hover:bg-[#e4c563]"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
