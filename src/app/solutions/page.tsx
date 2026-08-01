import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Blocks,
  Globe2,
  RadioTower,
  ShieldCheck,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const solutions = [
  {
    slug: "intelligent-telematics",
    title: "Fleet Management",
    description: "Live tracking, route insight, and control center clarity.",
    icon: Blocks,
    points: [
      "Live vehicle telemetry",
      "Geofencing intelligence",
      "Operational analytics",
    ],
    image: "/images/solution-telematics-illustration.png",
  },
  {
    slug: "secure-communications",
    title: "Secure Communications",
    description:
      "Private, resilient connectivity built for field teams and distributed operations.",
    icon: RadioTower,
    points: [
      "Encrypted connectivity",
      "Field-ready mobility",
      "Low-latency communications",
    ],
    image: "/images/solution-secure-communications-illustration.jpg",
  },
  {
    slug: "e-mobility",
    title: "E-Mobility Solutions",
    description: "Connected charging, fleet electrification, and smarter mobility operations.",
    icon: BatteryCharging,
    points: [
      "Smart charging visibility",
      "Fleet electrification support",
      "Operational control",
    ],
    image: "/images/E-Mobility/emobility-background.jpg",
  },
  {
    slug: "resilient-networks",
    title: "Resilient Networks",
    description: "Network architecture made to withstand interruptions.",
    icon: Globe2,
    points: [
      "Redundant architecture",
      "Edge resilience",
      "Scalable deployments",
    ],
    image: "/images/solution-network-infrastructure-illustration.jfif",
  },
  {
    slug: "integrated-cybersecurity",
    title: "Security operations",
    description: "Modern cybersecurity designed for enterprise continuity.",
    icon: ShieldCheck,
    points: [
      "Threat detection",
      "Policy controls",
      "Security operations support",
    ],
    image: "/images/solution-cybersecurity-illustration.jfif",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#F5F6F8] text-slate-700">
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,_#F5F6F8_0%,_#F5F6F8_45%,_#F5F6F8_100%)] px-6 py-24 sm:px-8 lg:px-12">
          <Image
            src="/images/solutions-hero-background.jfif"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.34)_0%,_rgba(255,255,255,0.12)_45%,_rgba(7,26,47,0.12)_100%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_24px_60px_rgba(7,26,47,0.12)] backdrop-blur-xl">
                <SectionHeading
                  eyebrow="Solutions"
                  title="Purpose-built infrastructure for intelligent operations."
                  description="Every solution is designed to combine secure performance, measurable business value, and long-term scalability."
                  titleClassName="!text-[#0B1F3A] !font-bold"
                  descriptionClassName="!text-[#0B1F3A] !font-semibold"
                />
                <p className="mt-5 max-w-2xl text-[#0B1F3A] font-semibold">
                  From fleet telemetry to secure communications, our solutions
                  create operational clarity and resilience for demanding
                  enterprise environments.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#0B1F3A] via-[#6E1E2D] to-[#00A651] p-6 text-white shadow-[0_22px_50px_rgba(0,196,179,0.22)]">
                <div className="absolute -right-6 -top-8 h-28 w-28 rounded-full bg-[#00A651]/35 blur-3xl" />
                <div className="absolute -bottom-10 -left-12 h-32 w-32 rounded-full bg-white/20 blur-3xl" />
                <Image
                  src="/images/solutions-featured-approach-background.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 32rem, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,26,47,0.18)_0%,rgba(0,196,179,0.16)_100%)]" />
                <div className="relative z-10 rounded-[1.5rem] border border-white/20 bg-slate-950/75 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-md">
                  <div className="inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FFFFFF] shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                    Featured approach
                  </div>
                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-100">
                    We design systems with visibility, security, and reliability
                    at the center so teams can move faster without compromising
                    continuity.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative isolate min-h-[280px] overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#0B1F3A] via-[#6E1E2D] to-[#00A651] shadow-[0_24px_60px_rgba(7,26,47,0.18)] sm:min-h-[340px]">
                <Image
                  src="/images/solutions-hero-foreground-visual.jpg"
                  alt="Connected infrastructure visual"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/45 via-transparent to-[#00A651]/20" />
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-[#F5F6F8] to-[#F5F6F8] p-7 shadow-[0_18px_40px_rgba(7,26,47,0.12)] sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#00A651]">
                  Secure communication
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[#0B1F3A] sm:text-3xl">
                  Solutions built for continuity
                </h2>
                <p className="mt-3 text-slate-600">
                  Reliable connectivity for teams that must stay in contact.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/contact">Talk to our team</Button>
                  <Link
                    href="/about"
                    className="inline-flex items-center rounded-full border border-slate-200 bg-[#F5F6F8] px-4 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#00A651] hover:bg-white"
                  >
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
                    className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-[#F5F6F8] to-[#F5F6F8] shadow-[0_12px_30px_rgba(7,26,47,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(0,196,179,0.16)]"
                  >
                    <div className="relative h-[360px] sm:h-[420px]">
                      <Image
                        src={solution.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/50 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/20 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.15)] backdrop-blur-md">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h2 className="mt-4 text-2xl font-semibold text-white">
                          {solution.title}
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-slate-50">
                          {solution.description}
                        </p>
                        <ul className="mt-5 space-y-2 text-sm text-slate-100">
                          {solution.points.map((point) => (
                            <li key={point} className="flex items-start gap-2">
                              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#00A651]" />
                              {point}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={`/solutions/${solution.slug}`}
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37]"
                        >
                          Learn more about this solution{" "}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
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
