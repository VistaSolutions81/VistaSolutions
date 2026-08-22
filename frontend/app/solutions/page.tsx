import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Enterprise Solutions - Vista Solutions',
  description: 'Explore how we architect scalable solutions that eliminate systemic friction and drive business velocity.',
}

export default function SolutionsPage() {
  return (
    <div className="dialect-b dialect-b-solutions bg-[#131313] text-on-surface font-inter min-h-screen flex flex-col">
      <main className="flex-grow pt-[120px]">
        {/* Hero Section */}
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-16 py-40 border-b border-[#252525]">
          <div className="grid grid-cols-12 gap-6 reveal-up">
            <div className="col-span-12 md:col-span-10">
              <p className="font-geist text-xs font-semibold text-on-surface-variant mb-8 uppercase tracking-widest">
                [ Core Philosophy ]
              </p>
              <h1 className="font-hanken text-4xl md:text-8xl font-bold text-primary max-w-5xl leading-tight tracking-tighter">
                Technology Should Solve Problems.<br />
                <span className="text-on-surface-variant">Not Create Them.</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Architectures Section */}
        <section className="w-full max-w-[1440px] mx-auto border-b border-[#252525]">
          {/* Header */}
          <div className="px-6 md:px-16 py-16 border-b border-[#252525] grid grid-cols-12 gap-6 items-end reveal-up">
            <div className="col-span-12 md:col-span-4">
              <h2 className="font-hanken text-3xl md:text-5xl font-semibold text-primary tracking-tight">
                Architecture.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <p className="font-inter text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Precision-engineered digital environments tailored to operational realities.
              </p>
            </div>
          </div>

          {/* Offerings List */}
          <div className="flex flex-col">
            {/* Item 1 */}
            <div className="group border-b border-[#252525] hover:bg-[#1c1b1b] transition-colors duration-500 reveal-up">
              <div className="px-6 md:px-16 py-12 grid grid-cols-12 gap-6 items-center">
                <div className="col-span-12 md:col-span-1 font-geist text-sm text-on-surface-variant group-hover:text-primary transition-colors">
                  01
                </div>
                <div className="col-span-12 md:col-span-5">
                  <h3 className="font-hanken text-2xl font-semibold text-primary tracking-tight">
                    Business Websites
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="font-inter text-base text-on-surface-variant leading-relaxed">
                    High-performance digital flagships focused on conversion and brand authority.
                  </p>
                </div>
                <div className="col-span-12 md:col-span-1 text-right text-on-surface-variant group-hover:text-primary transition-transform group-hover:translate-x-2">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="group border-b border-[#252525] hover:bg-[#1c1b1b] transition-colors duration-500 reveal-up transition-delay-100">
              <div className="px-6 md:px-16 py-12 grid grid-cols-12 gap-6 items-center">
                <div className="col-span-12 md:col-span-1 font-geist text-sm text-on-surface-variant group-hover:text-primary transition-colors">
                  02
                </div>
                <div className="col-span-12 md:col-span-5">
                  <h3 className="font-hanken text-2xl font-semibold text-primary tracking-tight">
                    Enterprise Portals
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="font-inter text-base text-on-surface-variant leading-relaxed">
                    Secure, scalable hubs unifying disparate internal systems and data silos.
                  </p>
                </div>
                <div className="col-span-12 md:col-span-1 text-right text-on-surface-variant group-hover:text-primary transition-transform group-hover:translate-x-2">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="group border-b border-[#252525] hover:bg-[#1c1b1b] transition-colors duration-500 reveal-up transition-delay-200">
              <div className="px-6 md:px-16 py-12 grid grid-cols-12 gap-6 items-center">
                <div className="col-span-12 md:col-span-1 font-geist text-sm text-on-surface-variant group-hover:text-primary transition-colors">
                  03
                </div>
                <div className="col-span-12 md:col-span-5">
                  <h3 className="font-hanken text-2xl font-semibold text-primary tracking-tight">
                    Customer Portals
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="font-inter text-base text-on-surface-variant leading-relaxed">
                    Frictionless self-service environments that elevate client retention.
                  </p>
                </div>
                <div className="col-span-12 md:col-span-1 text-right text-on-surface-variant group-hover:text-primary transition-transform group-hover:translate-x-2">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="group border-b border-[#252525] hover:bg-[#1c1b1b] transition-colors duration-500 reveal-up transition-delay-300">
              <div className="px-6 md:px-16 py-12 grid grid-cols-12 gap-6 items-center">
                <div className="col-span-12 md:col-span-1 font-geist text-sm text-on-surface-variant group-hover:text-primary transition-colors">
                  04
                </div>
                <div className="col-span-12 md:col-span-5">
                  <h3 className="font-hanken text-2xl font-semibold text-primary tracking-tight">
                    Admin Dashboards
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="font-inter text-base text-on-surface-variant leading-relaxed">
                    Data-dense, highly actionable control panels for operational oversight.
                  </p>
                </div>
                <div className="col-span-12 md:col-span-1 text-right text-on-surface-variant group-hover:text-primary transition-transform group-hover:translate-x-2">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive Methodology Section */}
        <section className="w-full max-w-[1440px] mx-auto py-40 px-6 md:px-16 border-b border-[#252525]">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4 border-r border-[#252525] pr-8 reveal-up">
              <h2 className="font-hanken text-3xl md:text-5xl font-semibold text-primary mb-8 tracking-tight">
                Methodology.
              </h2>
              <p className="font-inter text-base text-on-surface-variant mb-12 leading-relaxed">
                How we transform systemic friction into fluid capability.
              </p>
              <div className="relative h-[400px] border border-[#252525] overflow-hidden">
                <Image
                  alt="Precision engineering concept gears"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQA6qz5Ggj09fmdTyHR-ymuTz_SNyIlkW4IOOEkboawBPQ_X57D0L6Mz8cBof8qCM3O1uRvlWez8A1M3t252Cj-22biHSEDzzgZTVTNEUXTVT02T0qCGGlqHqoVvfq7eBFJwltslXX1NpBnoetRxN2RHZaA08ar1vSUaCM_CxeyPWxr7zdu-Sw7NyMXjrjADuyo6AW_tCxsHNJrtDbaTVDk5BucpSzhE8Gpx_vr8lRUwbqb1YAUKf_1A"
                  fill
                  className="object-cover grayscale opacity-50 mix-blend-luminosity"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-8 pl-0 md:pl-8 flex flex-col gap-12 reveal-up transition-delay-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="border-t border-[#252525] pt-6">
                  <p className="font-geist text-sm font-semibold text-primary mb-4">
                    01. Challenge
                  </p>
                  <p className="font-inter text-base text-on-surface-variant leading-relaxed">
                    Identifying the core friction point. We map undocumented workflows, expose data bottlenecks, and define the exact metric of failure in current systems.
                  </p>
                </div>
                <div className="border-t border-[#252525] pt-6">
                  <p className="font-geist text-sm font-semibold text-primary mb-4">
                    02. Strategy
                  </p>
                  <p className="font-inter text-base text-on-surface-variant leading-relaxed">
                    Architecting the intervention. We design systemic logic frameworks, select optimal tech stacks, and blueprint the data ontology before writing a single line of code.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                <div className="border-t border-[#252525] pt-6">
                  <p className="font-geist text-sm font-semibold text-primary mb-4">
                    03. Solution
                  </p>
                  <p className="font-inter text-base text-on-surface-variant leading-relaxed">
                    Precision execution. Building rigorous, scalable interfaces and backend infrastructures that adhere strictly to the strategic blueprint with zero bloat.
                  </p>
                </div>
                <div className="border-t border-[#252525] pt-6">
                  <p className="font-geist text-sm font-semibold text-primary mb-4">
                    04. Outcome
                  </p>
                  <p className="font-inter text-base text-on-surface-variant leading-relaxed">
                    Measurable velocity. Deploying systems that drastically reduce processing time, eliminate manual errors, and provide real-time strategic clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
