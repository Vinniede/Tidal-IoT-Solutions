import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export default function InsightsBlogPage() {
  return (
    <div className="min-h-screen bg-[#F8FBFC] text-slate-700">
      <Navbar />
      <main>
        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Insights"
                title="Blog"
                description="Practical articles on infrastructure, connectivity, and enterprise resilience."
              />
              <p className="max-w-2xl text-slate-600">
                Read the latest thinking on how modern organizations can turn connected systems into dependable outcomes.
              </p>
              <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-[#F8FBFC] p-8">
                <article className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#00C4B3]">Blog</p>
                  <h2 className="text-2xl font-semibold text-[#071A2F]">The shift from connectivity to operational intelligence</h2>
                  <p className="text-slate-600">How teams are turning telemetry and analytics into dependable business outcomes.</p>
                  <Button href="/contact">Discuss this topic</Button>
                </article>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl sm:min-h-[340px]"><Image src="/images/technology-article.jfif" alt="Technology article" fill className="object-cover" priority /></div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-3xl font-semibold text-[#071A2F]">Insights built for infrastructure leaders.</h2>
                <p className="mt-4 text-slate-600">Thoughtful, actionable articles that help you make smarter decisions.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
