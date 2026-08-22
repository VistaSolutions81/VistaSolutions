import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - Vista Solutions',
  description: 'Learn about Vista Solutions, our structural approach to digital engineering, and our leadership team.',
}

export default function AboutPage() {
  return (
    <div className="dialect-a bg-background text-on-surface font-inter min-h-screen">
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-10 reveal-up">
              <span className="font-jetbrains text-xs uppercase text-[#bac3ff] tracking-widest mb-6 block">
                ABOUT VISTA SOLUTIONS
              </span>
              <h1 className="font-sora text-4xl md:text-7xl font-semibold mb-8 max-w-4xl text-on-surface leading-tight tracking-tighter">
                WE TURN COMPLEXITY INTO CLARITY.
              </h1>
              <p className="font-inter text-lg text-[#c4c7c7] max-w-2xl mb-12 leading-relaxed">
                In an era defined by noise and accelerating change, we build foundational technology that provides a clear path forward. We engineer systems that scale, secure data, and drive meaningful outcomes for global enterprises.
              </p>
            </div>
            <div className="col-span-12 h-[60vh] min-h-[400px] border border-[#444748]/20 relative overflow-hidden reveal-up">
              <Image
                alt="Brutalist Design Office Concept"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvY5H8rUYermR3uQTZ1_B3mo4ZSijxUbLtISbD2rniaeNiur3zXIAQiJQcIxyDh-q9yd_g-uWKPqBM0PUHxaiSvmFXIJCmJmPSKC0mH5T1ydTJtwjfAouriRSbDNekfgZC6ouSkMOkAkuQC7eGUYT4M6RGPnIeJxxbkAvi4ogctNAdurr4kyBdk3PkGpmLbXiw7b7JPZsE4N6kAP2QPyKBF4SJf5gmt0qqRBQYoZ8PgO3cenMeUn51"
                fill
                className="object-cover filter grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                sizes="100vw"
              />
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-32">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 lg:col-span-6 mb-12 lg:mb-0 pr-0 lg:pr-12 reveal-up">
              <h2 className="font-sora text-3xl md:text-5xl font-semibold text-on-surface mb-8 leading-tight tracking-tight">
                WE DON&apos;T JUST BUILD TECHNOLOGY. WE BUILD WHAT TECHNOLOGY MAKES POSSIBLE.
              </h2>
              <div className="space-y-6 font-inter text-base text-[#c4c7c7] leading-relaxed">
                <p>
                  Vista Solutions was founded on a simple premise: technology should clarify, not obfuscate. For over a decade, we have partnered with industry leaders to untangle their most complex operational challenges, architecting solutions that are as elegant as they are robust.
                </p>
                <p>
                  Our approach is deeply rooted in structural integrity. We view software engineering not just as code, but as digital architecture. By enforcing rigorous standards and embracing sophisticated minimalism, we deliver platforms that perform under pressure and adapt to future demands.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 border-l border-[#444748]/20 pl-0 lg:pl-12 h-full flex flex-col justify-center space-y-12 py-12 reveal-up transition-delay-100">
              <div className="border-b border-[#444748]/20 pb-8">
                <h3 className="font-sora text-5xl md:text-7xl text-on-surface mb-2 tracking-tighter">15+</h3>
                <p className="font-jetbrains text-xs uppercase text-[#bac3ff] tracking-widest font-semibold">
                  YEARS OF EXPERIENCE
                </p>
              </div>
              <div className="border-b border-[#444748]/20 pb-8">
                <h3 className="font-sora text-5xl md:text-7xl text-on-surface mb-2 tracking-tighter">100+</h3>
                <p className="font-jetbrains text-xs uppercase text-[#bac3ff] tracking-widest font-semibold">
                  ENTERPRISE PROJECTS
                </p>
              </div>
              <div>
                <h3 className="font-sora text-5xl md:text-7xl text-on-surface mb-2 tracking-tighter">GLOBAL</h3>
                <p className="font-jetbrains text-xs uppercase text-[#bac3ff] tracking-widest font-semibold">
                  IMPACT ACROSS 20 COUNTRIES
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-32 border-t border-[#444748]/20 pt-24">
          <div className="mb-16 reveal-up">
            <span className="font-jetbrains text-xs uppercase text-[#bac3ff] tracking-widest mb-4 block">
              HOW WE THINK
            </span>
            <h2 className="font-sora text-3xl md:text-5xl font-semibold text-on-surface tracking-tight">
              OUR APPROACH
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-l border-[#444748]/20 reveal-up">
            {/* Stage 1 */}
            <div className="p-8 border-r border-b border-[#444748]/20 hover:bg-[#292a2a] transition-colors duration-300">
              <span className="font-jetbrains text-xs text-[#bac3ff] mb-8 block font-semibold">01</span>
              <h3 className="font-sora text-2xl font-medium text-on-surface mb-4 tracking-tight">
                UNDERSTAND
              </h3>
              <p className="font-inter text-sm text-[#c4c7c7] leading-relaxed">
                We begin by dismantling assumptions, engaging deeply with your core challenges to uncover the true architectural requirements.
              </p>
            </div>
            {/* Stage 2 */}
            <div className="p-8 border-r border-b border-[#444748]/20 hover:bg-[#292a2a] transition-colors duration-300">
              <span className="font-jetbrains text-xs text-[#bac3ff] mb-8 block font-semibold">02</span>
              <h3 className="font-sora text-2xl font-medium text-on-surface mb-4 tracking-tight">
                DEFINE
              </h3>
              <p className="font-inter text-sm text-[#c4c7c7] leading-relaxed">
                Translating insight into a rigid blueprint. We establish the structural grid, technology stack, and operational parameters.
              </p>
            </div>
            {/* Stage 3 */}
            <div className="p-8 border-r border-b border-[#444748]/20 hover:bg-[#292a2a] transition-colors duration-300">
              <span className="font-jetbrains text-xs text-[#bac3ff] mb-8 block font-semibold">03</span>
              <h3 className="font-sora text-2xl font-medium text-on-surface mb-4 tracking-tight">
                BUILD
              </h3>
              <p className="font-inter text-sm text-[#c4c7c7] leading-relaxed">
                Execution with precision. Engineering robust, scalable systems governed by sophisticated minimalism and clean code.
              </p>
            </div>
            {/* Stage 4 */}
            <div className="p-8 border-r border-b border-[#444748]/20 hover:bg-[#292a2a] transition-colors duration-300">
              <span className="font-jetbrains text-xs text-[#bac3ff] mb-8 block font-semibold">04</span>
              <h3 className="font-sora text-2xl font-medium text-on-surface mb-4 tracking-tight">
                EVOLVE
              </h3>
              <p className="font-inter text-sm text-[#c4c7c7] leading-relaxed">
                Technology is never static. We ensure systems are resilient, adaptable, and prepared for future complex integrations.
              </p>
            </div>
          </div>
        </section>

        {/* People/Culture */}
        <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-32 border-t border-[#444748]/20 pt-24">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-6 reveal-up">
              <span className="font-jetbrains text-xs uppercase text-[#bac3ff] tracking-widest mb-4 block">
                PEOPLE BEHIND THE POSSIBILITY
              </span>
              <h2 className="font-sora text-3xl md:text-5xl font-semibold text-on-surface tracking-tight">
                LEADERSHIP
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Person 1 */}
            <div className="group cursor-pointer reveal-up">
              <div className="aspect-[3/4] mb-6 overflow-hidden border border-[#444748]/20 bg-[#121414] relative">
                <Image
                  alt="Elias Vance portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQLkX4A9QZpprsSxz0c214Ef0VP78uNXodAzqwutwV2avDLAXEjCS8L2ifrOfA6GYP62-13b2PdeMGtWYT4nkxcnx-B7Na0A21mD0AotgxrKyMC8R9OdKU4cNF35zJo01FtP4g7N7NXYAgjd0KtV19q43tcjmNGVZRGUu3c1qXcotpd0D9DCd_YhuOHIfIetI4cnuEdCTgBLZ_1jJrybB4R1ZFEBqbhqBK1ssAhI6EvcjbZpldGvBp"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-sora text-2xl font-semibold text-on-surface mb-1 tracking-tight">
                Elias Vance
              </h3>
              <p className="font-jetbrains text-xs text-[#bac3ff] mb-4 font-semibold uppercase tracking-widest">
                FOUNDER &amp; CEO
              </p>
              <p className="font-inter text-sm text-[#c4c7c7] leading-relaxed">
                Visionary architect of enterprise systems, dedicated to driving clarity in complex digital transformations.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Statement & CTA */}
        <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-16 text-center border-t border-[#444748]/20 pt-32 pb-16 reveal-up">
          <h2 className="font-sora text-4xl md:text-7xl font-semibold text-on-surface mb-8 max-w-4xl mx-auto tracking-tighter leading-tight">
            THE NEXT POSSIBILITY STARTS WITH A CLEARER VIEW.
          </h2>
          <Link
            className="inline-flex items-center justify-center px-8 py-4 bg-[#0136e8] text-white font-jetbrains text-xs font-semibold uppercase tracking-widest rounded-sm hover:opacity-90 transition-all border border-transparent"
            href="/contact"
          >
            WORK WITH VISTA
          </Link>
        </section>
      </main>
    </div>
  )
}
