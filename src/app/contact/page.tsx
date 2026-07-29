import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8FBFC] text-slate-700">
      <Navbar />
      <main>
        <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let’s discuss your next intelligent infrastructure project."
                description="Whether you are planning a new deployment or strengthening an existing environment, we would be glad to help."
              />
              <p className="mt-6 max-w-2xl text-slate-600">
                Share your priorities, constraints, and performance expectations so we can propose the right architecture for your operations.
              </p>
            </div>

            <div className="relative isolate overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl">
              <Image src="/images/deployment-photo.png" alt="Tidal infrastructure deployment" fill className="object-cover opacity-40" priority />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/85 to-transparent" />
              <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/90 p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-[#E8FFF9] p-2 text-[#00C4B3]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-white">Email</h2>
                      <p className="mt-1 text-slate-300">hello@tidal-iot.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-[#E8FFF9] p-2 text-[#00C4B3]">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-white">Phone</h2>
                      <p className="mt-1 text-slate-300">+254 700 000 000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-[#E8FFF9] p-2 text-[#00C4B3]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-white">Location</h2>
                      <p className="mt-1 text-slate-300">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
