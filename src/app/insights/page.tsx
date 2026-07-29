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
    description: "How teams are turning telemetry and analytics into dependable business outcomes.",
    category: "Blog",
    image: "/images/technology-article.jfif",
  },
  {
    slug: "case-studies",
    title: "Connected logistics and secure field operations",
    description: "How resilient networks and encrypted communications improved performance for complex operations.",
    category: "Case Studies",
    image: "/images/deployment-photo.png",
  },
  {
    slug: "resources",
    title: "Designing resilient networks for hybrid operations",
    description: "Principles for creating infrastructure that remains available in mixed urban and remote environments.",
    category: "Resources",
    image: "/images/technical-guide-cover.jfif",
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#F8FBFC] text-slate-700">
      <Navbar />
      <main>
        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Insights"
                title="Thought leadership for modern infrastructure decisions."
                description="Ideas, resources, and case learnings for enterprise teams building resilient systems."
              />
              <p className="max-w-2xl text-slate-600">
                Discover perspectives and practical guidance that help enterprise teams deploy systems with confidence and clarity.
              </p>
              <div className="rounded-[2rem] border border-slate-200 bg-[#F8FBFC] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#00C4B3]">Featured content</p>
                <p className="mt-4 text-slate-600">
                  From strategic briefs to field case studies, our insights provide a clear view of modern infrastructure choices.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl sm:min-h-[340px]"><Image src="/images/insights-hero-foreground-visual.jpg" alt="Insights visual" fill className="object-cover" priority /></div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-3xl font-semibold text-[#071A2F]">A smarter way to think about infrastructure.</h2>
                <p className="mt-4 text-slate-600">
                  We share the frameworks and real-world lessons that make critical deployments more predictable and resilient.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/insights/blog" className="inline-flex items-center rounded-full border border-slate-200 bg-[#F8FBFC] px-4 py-3 text-sm font-semibold text-[#071A2F] transition hover:border-[#00C4B3] hover:bg-white">
                    Explore blog
                  </Link>
                  <Link href="/insights/case-studies" className="inline-flex items-center rounded-full border border-slate-200 bg-[#F8FBFC] px-4 py-3 text-sm font-semibold text-[#071A2F] transition hover:border-[#00C4B3] hover:bg-white">
                    View case studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-3">
            {insights.map((item) => (
              <article key={item.title} className="group relative min-h-[310px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <Image src={item.image} alt="" fill className="object-cover opacity-[0.08] transition duration-500 group-hover:scale-105 group-hover:opacity-[0.15]" />
                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00C4B3]">{item.category}</p>
                <h2 className="mt-4 text-2xl font-semibold text-[#071A2F]">{item.title}</h2>
                <p className="mt-3 text-slate-600">{item.description}</p>
                <Link href={`/insights/${item.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#071A2F]">
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
