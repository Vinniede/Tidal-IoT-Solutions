import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export default function InsightsResourcesPage() {
  return (
    <div className="min-h-screen bg-[#F8FBFC] text-slate-700">
      <Navbar />
      <main>
        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Insights"
                title="Resources"
                description="Actionable guides and tools for teams building resilient and secure infrastructure."
              />
              <p className="max-w-2xl text-slate-600">
                Access frameworks, checklists, and practical advice for deploying systems that are reliable, secure, and operationally fit.
              </p>
              <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-[#F8FBFC] p-8">
                {[
                  "Network design checklist for resilient deployments",
                  "Operational guidance for secure field connectivity",
                  "Monitoring and response framework for enterprise teams",
                ].map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-white p-4 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
              <Button href="/contact">Request a resource briefing</Button>
            </div>
            <div className="space-y-4">
              <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl sm:min-h-[340px]"><Image src="/images/technical-guide-cover.jfif" alt="Technical guide cover" fill className="object-cover" priority /></div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-3xl font-semibold text-[#071A2F]">Practical resources for infrastructure delivery.</h2>
                <p className="mt-4 text-slate-600">Tools and guidance to make your next deployment more predictable and secure.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
