import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";

const insights = [
  {
    slug: "blog",
    title: "The shift from connectivity to operational intelligence",
    description:
      "How teams are turning telemetry and analytics into dependable business outcomes.",
    category: "Blog",
    image: "/images/technology-article.jfif",
  },
  {
    slug: "case-studies",
    title: "Connected logistics and secure field operations",
    description:
      "How resilient networks and encrypted communications improved performance for complex operations.",
    category: "Case Studies",
    image: "/images/deployment-photo.png",
  },
  {
    slug: "resources",
    title: "Designing resilient networks for hybrid operations",
    description:
      "Principles for creating infrastructure that remains available in mixed urban and remote environments.",
    category: "Resources",
    image: "/images/technical-guide-cover.jfif",
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#F5F6F8] text-slate-700">
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-12">
          <Image
            src="/images/insights-hero-background.jfif"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            quality={100}
          />
          <div className="absolute inset-0 bg-white/8" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_24px_60px_rgba(7,26,47,0.14)] backdrop-blur-xl">
                <SectionHeading
                  eyebrow="Insights"
                  title="Thought leadership for modern infrastructure decisions."
                  description="Ideas, resources, and case learnings for enterprise teams building resilient systems."
                />
                <p className="mt-5 max-w-2xl text-slate-700">
                  Discover perspectives and practical guidance that help
                  enterprise teams deploy systems with confidence and clarity.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/70 bg-slate-950/80 p-6 text-white shadow-[0_20px_45px_rgba(7,26,47,0.2)] backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.3em] text-[#FFFFFF]">
                  Featured content
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-100">
                  From strategic briefs to field case studies, our insights
                  provide a clear view of modern infrastructure choices.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl sm:min-h-[340px]">
                <Image
                  src="/images/insights-hero-foreground-visual.jpg"
                  alt="Insights visual"
                  fill
                  className="object-cover object-center"
                  quality={100}
                  priority
                />
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-3xl font-semibold text-[#0B1F3A]">
                  A smarter way to think about infrastructure.
                </h2>
                <p className="mt-4 text-slate-600">
                  We share the frameworks and real-world lessons that make
                  critical deployments more predictable and resilient.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/insights/blog"
                    className="inline-flex items-center rounded-full border border-slate-200 bg-[#F5F6F8] px-4 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#00A651] hover:bg-white"
                  >
                    Explore blog
                  </Link>
                  <Link
                    href="/insights/case-studies"
                    className="inline-flex items-center rounded-full border border-slate-200 bg-[#F5F6F8] px-4 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#00A651] hover:bg-white"
                  >
                    View case studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden px-6 pb-24 sm:px-8 lg:px-12">
          <Image
            src="/images/insights-featured-content-pattern.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            quality={100}
          />
          <div className="absolute inset-0 bg-transparent" />
          <div className="relative mx-auto max-w-7xl grid gap-6 lg:grid-cols-3">
            {insights.map((item) => (
              <article
                key={item.title}
                className="group relative min-h-[310px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src="/images/insight-card-illustration.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover object-center"
                  quality={100}
                />
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover object-center transition duration-500 group-hover:scale-105"
                  quality={100}
                />
                <div className="relative rounded-[1.5rem] bg-white/90 p-5 backdrop-blur-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00A651]">
                    {item.category}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold text-[#0B1F3A]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-slate-600">{item.description}</p>
                  <Link
                    href={`/insights/${item.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3A]"
                  >
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
