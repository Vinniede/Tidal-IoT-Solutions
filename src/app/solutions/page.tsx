import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Blocks, Globe2, RadioTower, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const solutions = [
  {
    slug: "intelligent-telematics",
    title: "Fleet visibility",
    description: "Live tracking, route insight, and control center clarity.",
    icon: Blocks,
    points: ["Live vehicle telemetry", "Geofencing intelligence", "Operational analytics"],
    image: "/images/solution-telematics-illustration.png",
  },
  {
    slug: "secure-communications",
    title: "Secure Communications",
    description: "Private, resilient connectivity built for field teams and distributed operations.",
    icon: RadioTower,
    points: ["Encrypted connectivity", "Field-ready mobility", "Low-latency communications"],
    image: "/images/solution-secure-communications-illustration.jpg",
  },
  {
    slug: "resilient-networks",
    title: "Resilient Networks",
    description: "Network architecture made to withstand interruptions.",
    icon: Globe2,
    points: ["Redundant architecture", "Edge resilience", "Scalable deployments"],
    image: "/images/solution-network-infrastructure-illustration.jfif",
  },
  {
    slug: "integrated-cybersecurity",
    title: "Security operations",
    description: "Modern cybersecurity designed for enterprise continuity.",
    icon: ShieldCheck,
    points: ["Threat detection", "Policy controls", "Security operations support"],
    image: "/images/solution-cybersecurity-illustration.jfif",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#F8FBFC] text-slate-700">
      <Navbar />
      <main>
        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Solutions"
                title="Purpose-built infrastructure for intelligent operations."
                description="Every solution is designed to combine secure performance, measurable business value, and long-term scalability."
              />
              <p className="max-w-2xl text-slate-600">
                From fleet telemetry to secure communications, our solutions create operational clarity and resilience for demanding enterprise environments.
              </p>
              <div className="rounded-[2rem] border border-slate-200 bg-[#F8FBFC] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#00C4B3]">Featured approach</p>
                <p className="mt-4 text-slate-600">
                  We design systems with visibility, security, and reliability at the center so teams can move faster without compromising continuity.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative isolate min-h-[280px] overflow-hidden rounded-[2rem] border border-slate-200 bg-[#071A2F] shadow-xl sm:min-h-[340px]">
                <Image src="/images/solutions-hero-foreground-visual.jpg" alt="Connected infrastructure visual" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F]/35 to-transparent" />
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_16px_34px_rgba(7,26,47,0.12)] sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#00a999]">Secure communication</p>
                <h2 className="mt-3 text-2xl font-semibold text-[#071A2F] sm:text-3xl">Solutions built for continuity</h2>
                <p className="mt-3 text-slate-600">Reliable connectivity for teams that must stay in contact.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/contact">Talk to our team</Button>
                  <Link href="/about" className="inline-flex items-center rounded-full border border-slate-200 bg-[#F8FBFC] px-4 py-3 text-sm font-semibold text-[#071A2F] transition hover:border-[#00C4B3] hover:bg-white">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <article
                    key={solution.slug}
                    id={solution.slug}
                    className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Image src={solution.image} alt="" fill className="object-cover opacity-[0.08] transition duration-500 group-hover:scale-105 group-hover:opacity-[0.14]" />
                    <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8FFF9] text-[#00C4B3]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-6 text-2xl font-semibold text-[#071A2F]">{solution.title}</h2>
                    <p className="mt-3 text-slate-600">{solution.description}</p>
                    <ul className="mt-6 space-y-3 text-sm text-slate-600">
                      {solution.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#00C4B3]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/solutions/${solution.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#071A2F]">
                      Learn more about this solution <ArrowRight className="h-4 w-4" />
                    </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
