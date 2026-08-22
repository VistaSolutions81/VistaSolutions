import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured)
  const largeProject = featuredProjects.find((p) => p.size === 'large')
  const smallProject = featuredProjects.find((p) => p.size === 'small')

  return (
    <div className="dialect-a bg-background text-on-surface font-inter overflow-x-hidden min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-16 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity scanlines">
            <Image
              alt="Hero Backdrop"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY-J46NNnftvKn6_OxNtJgX6fyL_zLyJPzHWXdgxnNjVDozlaYExCE4pcEO632vjhlP7VfqX9B5ujRw9C5S4Qw6LBugkF8-3i_SHq57gvNYM6UTmplctzL2YhSq87Fj8RAaiDbGNuIPe4HHs0YDpBBf9AREHZnbxAUWi_EYI9wv-vCd2HzypA457jvavydmhF_C91cVEOEFtq9nmO17ZehYbUr0WYI1vPadeieMSDPRvG6yy3tdhQ5"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/50 to-transparent"></div>
          </div>
          <div className="relative z-10 w-full max-w-[1440px] mx-auto grid grid-cols-12 gap-6 mt-16 md:mt-24">
            <div className="col-span-12 lg:col-span-10 xl:col-span-9 reveal-up">
              <h1 className="font-sora text-4xl md:text-7xl font-semibold text-on-surface mb-8 leading-tight tracking-tighter">
                BUILDING<br />
                WHAT&apos;S <span className="text-[#8e9192]">NEXT.</span>
              </h1>
              <p className="font-inter text-lg text-[#c4c7c7] max-w-2xl mb-12 leading-relaxed">
                Technology, digital experiences and intelligent solutions engineered to move businesses forward. We architect the future with precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  className="inline-flex items-center justify-center font-jetbrains text-xs font-semibold uppercase tracking-widest bg-[#0136e8] text-white px-8 py-4 rounded-sm hover:opacity-90 transition-all"
                  href="/solutions"
                >
                  EXPLORE SOLUTIONS &rarr;
                </Link>
                <Link
                  className="inline-flex items-center justify-center font-jetbrains text-xs font-semibold uppercase tracking-widest bg-transparent text-on-surface px-8 py-4 rounded-sm border border-[#444748]/30 hover:border-[#444748] transition-all"
                  href="/projects"
                >
                  VIEW OUR WORK &rarr;
                </Link>
              </div>
            </div>
          </div>
          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-6 md:left-16 z-10 flex items-center gap-4 animate-pulse opacity-60">
            <span className="font-jetbrains text-xs tracking-widest text-[#c4c7c7] uppercase">
              Scroll to explore
            </span>
            <div className="w-12 h-px bg-[#c4c7c7]/50"></div>
          </div>
        </section>

        {/* Introduction Strip */}
        <section className="py-24 md:py-32 border-y border-[#444748]/15 bg-[#0d0e0f]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16">
            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 lg:col-span-5 reveal-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded bg-on-surface/10 border border-on-surface/5">
                  <span className="w-2 h-2 rounded-full bg-[#0136e8]"></span>
                  <span className="font-jetbrains text-xs text-on-surface font-semibold uppercase tracking-widest">
                    15+ YEARS OF EXPERIENCE
                  </span>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 reveal-up transition-delay-100">
                <h2 className="font-sora text-3xl md:text-5xl font-semibold text-on-surface mb-8 leading-tight tracking-tight">
                  TECHNOLOGY WITH A CLEARER VIEW OF WHAT&apos;S POSSIBLE.
                </h2>
                <p className="font-inter text-lg text-[#c4c7c7] leading-relaxed">
                  We bridge the gap between complex engineering and elegant user experiences. Our structural approach to software development ensures scalable, secure, and performant solutions that define industry standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Numbered List */}
        <section className="py-24 md:py-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16">
            <div className="mb-16 md:mb-24 reveal-up">
              <h3 className="font-jetbrains text-xs text-[#c4c7c7] uppercase tracking-widest mb-4">
                What We Build
              </h3>
              <div className="w-full h-px bg-[#444748]/20"></div>
            </div>
            <div className="flex flex-col">
              {/* Service 01 */}
              <Link
                className="group block py-10 md:py-12 border-b border-[#444748]/20 hover:border-[#0136e8]/50 transition-colors reveal-up"
                href="/services"
              >
                <div className="grid grid-cols-12 gap-6 items-center">
                  <div className="col-span-2 md:col-span-1 font-jetbrains text-xs text-[#c4c7c7] group-hover:text-[#0136e8] transition-colors">
                    01
                  </div>
                  <div className="col-span-10 md:col-span-5">
                    <h4 className="font-sora text-2xl font-medium text-on-surface group-hover:text-[#0136e8] transition-colors tracking-tight">
                      Digital Products
                    </h4>
                  </div>
                  <div className="col-span-12 md:col-span-5 mt-4 md:mt-0 md:col-start-7 text-[#c4c7c7] font-inter text-base pr-8">
                    End-to-end product design and engineering for platforms that demand scale and stability.
                  </div>
                  <div className="hidden md:flex col-span-1 justify-end text-[#c4c7c7] group-hover:text-[#0136e8] transition-colors">
                    <span className="material-symbols-outlined transform group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
              {/* Service 02 */}
              <Link
                className="group block py-10 md:py-12 border-b border-[#444748]/20 hover:border-[#0136e8]/50 transition-colors reveal-up"
                href="/services"
              >
                <div className="grid grid-cols-12 gap-6 items-center">
                  <div className="col-span-2 md:col-span-1 font-jetbrains text-xs text-[#c4c7c7] group-hover:text-[#0136e8] transition-colors">
                    02
                  </div>
                  <div className="col-span-10 md:col-span-5">
                    <h4 className="font-sora text-2xl font-medium text-on-surface group-hover:text-[#0136e8] transition-colors tracking-tight">
                      Software Development
                    </h4>
                  </div>
                  <div className="col-span-12 md:col-span-5 mt-4 md:mt-0 md:col-start-7 text-[#c4c7c7] font-inter text-base pr-8">
                    Custom architectural solutions and robust backend systems tailored to enterprise requirements.
                  </div>
                  <div className="hidden md:flex col-span-1 justify-end text-[#c4c7c7] group-hover:text-[#0136e8] transition-colors">
                    <span className="material-symbols-outlined transform group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
              {/* Service 03 */}
              <Link
                className="group block py-10 md:py-12 border-b border-[#444748]/20 hover:border-[#0136e8]/50 transition-colors reveal-up"
                href="/services"
              >
                <div className="grid grid-cols-12 gap-6 items-center">
                  <div className="col-span-2 md:col-span-1 font-jetbrains text-xs text-[#c4c7c7] group-hover:text-[#0136e8] transition-colors">
                    03
                  </div>
                  <div className="col-span-10 md:col-span-5">
                    <h4 className="font-sora text-2xl font-medium text-on-surface group-hover:text-[#0136e8] transition-colors tracking-tight">
                      Enterprise Solutions
                    </h4>
                  </div>
                  <div className="col-span-12 md:col-span-5 mt-4 md:mt-0 md:col-start-7 text-[#c4c7c7] font-inter text-base pr-8">
                    System integration, modernization, and digital transformation for established organizations.
                  </div>
                  <div className="hidden md:flex col-span-1 justify-end text-[#c4c7c7] group-hover:text-[#0136e8] transition-colors">
                    <span className="material-symbols-outlined transform group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 md:py-32 bg-[#0d0e0f] border-t border-[#444748]/15">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 reveal-up">
              <div>
                <h3 className="font-jetbrains text-xs text-[#c4c7c7] uppercase tracking-widest mb-4">
                  Selected Work
                </h3>
                <h2 className="font-sora text-3xl md:text-5xl font-semibold text-on-surface tracking-tight leading-tight">
                  ARCHITECTURAL<br />INTEGRITY IN CODE.
                </h2>
              </div>
              <Link
                className="mt-8 md:mt-0 inline-flex items-center gap-2 font-jetbrains text-xs font-semibold text-on-surface hover:text-[#0136e8] transition-colors uppercase tracking-widest"
                href="/projects"
              >
                VIEW ALL PROJECTS
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {/* Project 1 (Large) */}
              {largeProject && (
                <div className="col-span-12 md:col-span-8 reveal-up mb-12 md:mb-0">
                  <Link
                    className="group block relative overflow-hidden rounded-sm bg-[#121414] border border-[#444748]/10 aspect-[4/3] md:aspect-[16/9]"
                    href="/case-studies"
                  >
                    <Image
                      alt={largeProject.title}
                      src={largeProject.imageUrl}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col md:flex-row justify-between items-start md:items-end">
                      <div>
                        <span className="font-jetbrains text-xs text-[#c4c7c7] mb-2 block uppercase tracking-widest">
                          {largeProject.category}
                        </span>
                        <h4 className="font-sora text-2xl font-medium text-on-surface tracking-tight">
                          {largeProject.title}
                        </h4>
                      </div>
                      <div className="mt-4 md:mt-0 font-jetbrains text-xs font-semibold text-on-surface opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 uppercase tracking-widest">
                        VIEW CASE STUDY
                        <span className="material-symbols-outlined text-sm">
                          arrow_forward
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Project 2 (Small) */}
              {smallProject && (
                <div className="col-span-12 md:col-span-4 reveal-up md:mt-24">
                  <Link
                    className="group block relative overflow-hidden rounded-sm bg-[#121414] border border-[#444748]/10 aspect-square"
                    href="/case-studies"
                  >
                    <Image
                      alt={smallProject.title}
                      src={smallProject.imageUrl}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="font-jetbrains text-xs text-[#c4c7c7] mb-2 block uppercase tracking-widest">
                        {smallProject.category}
                      </span>
                      <h4 className="font-sora text-2xl font-medium text-on-surface tracking-tight">
                        {smallProject.title}
                      </h4>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative py-32 md:py-48 overflow-hidden border-t border-[#444748]/20 bg-[#121414]">
          <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen">
            <Image
              alt="CTA Backdrop"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBspxFTNpfMOBpgTRABSyJ3ZpWUx3KreLkpaRoUnO8j2jDBQoLF2v0amAtL8wASxRzpH9yDGiBXUF2Ogph-mwZhh0C29JJgsDFO_P4U89ZeieDk2UP_tOZzCtdobVgSKHPhDnEHekKjEZGHM-MAl4aEaY3oPGYb6FqRgVurSPygv51YGAJmmdhxGFjbwKP95b3K8mNztmVqTaGbMMUS9uCoYUSt8h2yI3vQFWfDXOP7ZPGO-LE6Fj_0"
              fill
              className="object-cover object-bottom"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 text-center reveal-up">
            <h2 className="font-sora text-4xl md:text-7xl font-semibold text-on-surface mb-8 tracking-tighter leading-tight">
              HAVE AN IDEA<br />WORTH BUILDING?
            </h2>
            <p className="font-inter text-lg text-[#c4c7c7] max-w-xl mx-auto mb-12 leading-relaxed">
              Let&apos;s engineer a solution that scales with your ambition.
            </p>
            <Link
              className="inline-flex items-center justify-center font-jetbrains text-xs font-semibold uppercase tracking-widest bg-[#0136e8] text-white px-10 py-5 rounded-sm hover:opacity-90 transition-all"
              href="/contact"
            >
              CONTACT OUR TEAM &rarr;
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
