import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services - Vista Solutions',
  description: 'Discover our high-end digital services, from UI/UX design and custom software development to enterprise system modernization.',
}

export default function ServicesPage() {
  return (
    <div className="dialect-b bg-[#050505] text-on-surface font-inter min-h-screen flex flex-col">
      <main className="flex-grow pt-[120px]">
        {/* Hero Section */}
        <section className="grid-bg min-h-[60vh] flex flex-col justify-end pb-40 px-6 md:px-16 max-w-[1440px] mx-auto border-b border-[#252525]">
          <div className="max-w-4xl reveal-up">
            <h1 className="font-hanken text-5xl md:text-8xl font-bold text-primary leading-none tracking-tighter mb-8">
              Digital Services<br />Designed Around<br />Your Business.
            </h1>
            <p className="font-inter text-lg text-on-surface-variant max-w-2xl mt-8 leading-relaxed">
              We deliver high-end digital solutions combining precise engineering with cinematic aesthetics. Our methodologies ensure scalable, high-performance outcomes for ambitious enterprises.
            </p>
          </div>
        </section>

        {/* Services Editorial List */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-40">
          <div className="flex justify-between items-end border-b border-[#252525] pb-8 mb-16 reveal-up">
            <h2 className="font-geist text-xs font-semibold text-on-surface-variant uppercase tracking-widest">
              Our Capabilities
            </h2>
            <span className="font-geist text-sm text-[#5d5f5f]">Total: 03</span>
          </div>

          <div className="flex flex-col">
            {/* 01 UI/UX Design */}
            <article className="service-row group border-b border-[#252525] py-16 flex flex-col md:flex-row gap-8 items-start relative cursor-pointer reveal-up">
              <div className="font-geist text-sm text-[#5d5f5f] w-16 pt-2">01</div>
              <div className="flex-grow flex flex-col justify-between h-full">
                <h3 className="font-hanken text-3xl md:text-5xl font-semibold text-primary mb-6 tracking-tight">
                  UI/UX Design
                </h3>
                <p className="font-inter text-base text-on-surface-variant max-w-md leading-relaxed">
                  Creating intuitive, architectural interfaces that balance high-end aesthetics with seamless user journeys. We focus on structural clarity and micro-interactions.
                </p>
              </div>
              <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden service-img-wrapper border border-[#252525] bg-[#1c1b1b] hidden md:block relative">
                <Image
                  alt="UI/UX Design Abstract"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5F1VtGRm2xvx0chMFp6nTkgPtR4uCyWWHq-EYKPM01QW7javjeLxuex8TFxD0IzBje1d-bMYPY8bgc3DcGjNRikokA0rJSskpsYR1zD__tpGHDjAx3qfTA5r2fDNRWX6eRVS8EIYSt2fTasgLL3B3qCKjRwCtEuez4wi0n8ijmXDsJ_IjJX8dOxpCEzvAu0P-Pt0jURaLY5RRwYIs9RDnEkCZNLLV88N9eZzkEFhuDQMFnV4dM_PxEw"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  sizes="33vw"
                />
              </div>
              <div className="hidden md:flex items-center justify-center w-16 h-full absolute right-0 top-0 bottom-0 pointer-events-none">
                <span className="material-symbols-outlined text-3xl service-arrow">
                  arrow_forward
                </span>
              </div>
            </article>

            {/* 02 Web Design & Development */}
            <article className="service-row group border-b border-[#252525] py-16 flex flex-col md:flex-row gap-8 items-start relative cursor-pointer reveal-up transition-delay-100">
              <div className="font-geist text-sm text-[#5d5f5f] w-16 pt-2">02</div>
              <div className="flex-grow flex flex-col justify-between h-full">
                <h3 className="font-hanken text-3xl md:text-5xl font-semibold text-primary mb-6 tracking-tight">
                  Web Design &amp; Development
                </h3>
                <p className="font-inter text-base text-on-surface-variant max-w-md leading-relaxed">
                  Building robust digital presences. Our development process prioritizes extreme performance, exacting grid alignment, and flawless responsive execution.
                </p>
              </div>
              <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden service-img-wrapper border border-[#252525] bg-[#1c1b1b] hidden md:block relative">
                <Image
                  alt="Web Development Abstract"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtqjKuoX3O-sDIMVivGSaNb31v94d9CDyBFQZaX38i6ZJXrJxncaXw9EasPsP15_DyAE29GS4LJ6gX4UpkFUM4q0Ptt9HnBcfvjbUlUez4ZK6BCMWfLpPdYKe-cwkhxTTD3znQfKgpNXqnaPO_RXF5gsV7ELJkSgNOXZul0NJh9uCe2tapxam0xZNSBo_zYS3TPQVfXu7R1dO9t_1UqkaSFdZyyqUBYjNJCGsWn8ozqGyX6Vd2PevnPg"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  sizes="33vw"
                />
              </div>
              <div className="hidden md:flex items-center justify-center w-16 h-full absolute right-0 top-0 bottom-0 pointer-events-none">
                <span className="material-symbols-outlined text-3xl service-arrow">
                  arrow_forward
                </span>
              </div>
            </article>

            {/* 03 Web Application Development */}
            <article className="service-row group border-b border-[#252525] py-16 flex flex-col md:flex-row gap-8 items-start relative cursor-pointer reveal-up transition-delay-200">
              <div className="font-geist text-sm text-[#5d5f5f] w-16 pt-2">03</div>
              <div className="flex-grow flex flex-col justify-between h-full">
                <h3 className="font-hanken text-3xl md:text-5xl font-semibold text-primary mb-6 tracking-tight">
                  Web Application Development
                </h3>
                <p className="font-inter text-base text-on-surface-variant max-w-md leading-relaxed">
                  Engineering complex, state-driven platforms. We architect scalable solutions handling vast data flows while maintaining an impossibly clean frontend experience.
                </p>
              </div>
              <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden service-img-wrapper border border-[#252525] bg-[#1c1b1b] hidden md:block relative">
                <Image
                  alt="Web App Data Flow"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZTJblTZvmIoeNjgUm7rcgIhwjD9siGoZwxG3VsG-E20Pvb7eGhI3BpXoUHevlCam27nxBPPcLrMNg2MwXcD5I6VF-kjT03Onmmii_nugGYHSXRceNgxXhevOIAe4_X3Oqwe3mp7imKR01cppB1v2s5XoPY1EoZa8EfrEcTYK_Ix0zUg90yEg65udKavC1sULi5Q3cLID5xO0cw_zkktNhRSdmvVhJFsj_WTpwoq6MIYgT9t4hf9KZHA"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  sizes="33vw"
                />
              </div>
              <div className="hidden md:flex items-center justify-center w-16 h-full absolute right-0 top-0 bottom-0 pointer-events-none">
                <span className="material-symbols-outlined text-3xl service-arrow">
                  arrow_forward
                </span>
              </div>
            </article>
          </div>

          <div className="mt-16 flex justify-center reveal-up">
            <Link
              href="/projects"
              className="border border-[#252525] bg-transparent text-primary font-geist text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:border-primary transition-colors"
            >
              View All Services
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
