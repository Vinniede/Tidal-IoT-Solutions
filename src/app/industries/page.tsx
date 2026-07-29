import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CarFront, Landmark, ShieldCheck, Sparkles, Warehouse } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const industries = [
  { slug: "logistics-transport", title: "Logistics & Transport", description: "Connected fleets and resilient communications for high-movement operations.", icon: CarFront, image: "/images/industry-logistics.jfif" },
  { slug: "government", title: "Government", description: "Secure, dependable systems for public operations and critical services.", icon: Landmark, image: "/images/industry-government.jfif" },
  { slug: "banking-financial-services", title: "Banking & Financial Services", description: "Protected infrastructure for branch connectivity and secure data flow.", icon: ShieldCheck, image: "/images/industry-banking.jfif" },
  { slug: "utilities", title: "Utilities", description: "Reliable field operations and monitoring for essential services.", icon: Building2, image: "/images/industry-utilities.jfif" },
  { slug: "security-companies", title: "Security Companies", description: "Mission-ready infrastructure for response teams and distributed operations.", icon: Warehouse, image: "/images/industry-security.jfif" },
  { slug: "smes", title: "SMEs", description: "Practical modernization that scales with growth and changing demands.", icon: Sparkles, image: "/images/industry-sme.jfif" },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#F8FBFC] text-slate-700">
      <Navbar />
      <main>
        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Industries"
                title="Enterprise-grade systems for the sectors that demand resilience."
                description="We support organizations with complex environments, distributed teams, and high expectations for continuity."
              />
              <p className="max-w-2xl text-slate-600">
                Our work helps deliver secure operational capabilities for logistics, government, financial services, utilities, security operators, and growing businesses.
              </p>
              <div className="rounded-[2rem] border border-slate-200 bg-[#F8FBFC] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#00C4B3]">Sector focus</p>
                <p className="mt-4 text-slate-600">
                  We design solutions that reflect the unique needs of each sector while preserving consistency across governance and delivery.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl sm:min-h-[340px]"><Image src="/images/industries-hero-background.jfif" alt="Industry operations visual" fill className="object-cover" priority /></div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-3xl font-semibold text-[#071A2F]">Built for the industries that require trust.</h2>
                <p className="mt-4 text-slate-600">
                  We combine operational visibility, resilient connectivity, and enterprise-grade security to meet the realities of critical sectors.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/contact">Speak with our team</Button>
                  <a href="/about" className="inline-flex items-center rounded-full border border-slate-200 bg-[#F8FBFC] px-4 py-3 text-sm font-semibold text-[#071A2F] transition hover:border-[#00C4B3] hover:bg-white">
                    Our approach
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <article key={industry.title} className="group relative min-h-[320px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="absolute inset-0">
                      <Image src="/images/industry-sector-card-accent.png" alt="" fill sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw" className="object-cover opacity-100" />
                      <Image src={industry.image} alt="" fill sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw" className="object-cover opacity-100 transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/50 to-transparent" />
                    </div>
                    <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/20 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.15)] backdrop-blur-md">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="mt-4 text-xl font-semibold text-white">{industry.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-50">{industry.description}</p>
                      <Link href={`/industries/${industry.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#fef3c7]">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-8 lg:px-12">
          <div className="relative mx-auto flex max-w-7xl flex-col gap-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-10 lg:flex-row lg:items-end lg:justify-between lg:p-14">
            <Image src="/images/industries-final-cta-background.jpg" alt="" fill sizes="100vw" className="object-cover opacity-100" />
            <div className="absolute inset-0 bg-white/20" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00C4B3]">Industry fit</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#071A2F] sm:text-4xl">We tailor architecture to the realities of your environment and operating model.</h2>
            </div>
            <div className="relative"><Button href="/contact">Book a discovery call</Button></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
