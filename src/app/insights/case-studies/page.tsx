import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export default function InsightsCaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#F5F6F8] text-slate-700">
      <Navbar />
      <main>
        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="space-y-4">
              <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl sm:min-h-[340px]">
                <Image
                  src="/images/deployment-photo.png"
                  alt="Infrastructure deployment"
                  fill
                  className="object-cover object-center"
                  quality={100}
                  priority
                />
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-950/80 p-8 text-white shadow-sm">
                <h2 className="text-3xl font-semibold text-white">
                  Case Studies
                </h2>
                <p className="mt-4 text-slate-200">
                  Real examples of how our infrastructure work improved
                  continuity and resilience.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Insights"
                title="Case Studies"
                description="Detailed stories of how connected systems and secure networks delivered measurable outcomes."
              />
              <p className="max-w-2xl text-slate-600">
                Explore real-world projects where resilience, communications,
                and analytics came together to strengthen operations.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title:
                      "Connected logistics network for a regional distributor",
                    summary:
                      "Reduced downtime by 33% and improved route visibility across all branches.",
                  },
                  {
                    title: "Protected field operations for a public utility",
                    summary:
                      "Improved operational continuity and reduced service interruption delays.",
                  },
                ].map((study) => (
                  <article
                    key={study.title}
                    className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 text-white"
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {study.title}
                    </h3>
                    <p className="mt-3 text-slate-200">{study.summary}</p>
                  </article>
                ))}
              </div>
              <Button href="/contact">Talk through a case</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
