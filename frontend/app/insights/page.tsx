import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { insights } from '@/data/insights'
import NewsletterForm from '@/components/insights/NewsletterForm'

export const metadata: Metadata = {
  title: 'Perspectives & Insights - Vista Solutions',
  description: 'Read our technical articles and strategic frameworks on zero-trust architectures, latency, and data meshes.',
}

export default function InsightsPage() {
  const featuredInsight = insights.find((i) => i.featured)
  const latestInsights = insights.filter((i) => !i.featured)

  return (
    <div className="dialect-b bg-[#131313] text-on-surface font-inter min-h-screen flex flex-col">
      <main className="flex-grow pt-[120px]">
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-24 border-b border-[#252525]">
          <div className="reveal-up">
            <h1 className="font-hanken text-5xl md:text-8xl font-bold tracking-tighter text-primary mb-8 max-w-4xl">
              Ideas, Insights &amp; Perspectives.
            </h1>
            <p className="font-inter text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Navigating the complexities of modern enterprise architecture, digital transformation, and systemic innovation.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        {featuredInsight && (
          <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-24 border-b border-[#252525]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 border border-[#252525] p-1 reveal-up">
                <div className="relative w-full aspect-[16/9] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  {featuredInsight.imageUrl && (
                    <Image
                      alt={featuredInsight.title}
                      src={featuredInsight.imageUrl}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  )}
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col justify-center py-8 lg:py-0 reveal-up transition-delay-100">
                <div className="font-geist text-xs font-semibold text-on-surface-variant mb-4 uppercase tracking-widest">
                  Featured Insight — {featuredInsight.numIndex}
                </div>
                <h2 className="font-hanken text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight tracking-tight">
                  {featuredInsight.title}
                </h2>
                <p className="font-inter text-base text-on-surface-variant mb-8 leading-relaxed">
                  {featuredInsight.summary}
                </p>
                <Link
                  className="inline-flex items-center gap-2 font-geist text-xs font-semibold uppercase tracking-widest text-primary border-b border-primary pb-1 w-max hover:text-[#0068ec] hover:border-[#0068ec] transition-colors"
                  href={`#`}
                >
                  Read Full Analysis{' '}
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Article Grid */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-24 border-b border-[#252525]">
          <div className="flex justify-between items-end mb-16 border-b border-[#252525] pb-4 reveal-up">
            <h3 className="font-hanken text-2xl font-bold text-primary tracking-tight">
              Latest Perspectives
            </h3>
            <div className="font-geist text-sm text-[#5d5f5f]">02 — 07</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 reveal-up">
            {latestInsights.map((insight) => (
              <article
                key={insight.id}
                className="group cursor-pointer border-t border-[#252525] pt-6"
              >
                <div className="font-geist text-xs text-[#5d5f5f] mb-4 flex justify-between uppercase tracking-wider">
                  <span>{insight.category}</span>
                  <span>{insight.date}</span>
                </div>
                <h4 className="font-hanken text-xl font-bold text-primary mb-4 group-hover:text-[#0068ec] transition-colors tracking-tight">
                  {insight.title}
                </h4>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                  {insight.summary}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 flex justify-center border-t border-[#252525] pt-8 reveal-up">
            <button className="bg-transparent border border-[#252525] text-primary font-geist text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:border-primary transition-all duration-300">
              Load Archive
            </button>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-40">
          <div className="border border-[#252525] p-16 md:p-24 bg-[#1c1b1b]/30 backdrop-blur-sm text-center max-w-4xl mx-auto flex flex-col items-center reveal-up">
            <h3 className="font-hanken text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
              Stay Ahead of Digital
            </h3>
            <p className="font-inter text-base text-on-surface-variant mb-12 max-w-lg leading-relaxed">
              A curated selection of our deepest technical writing, strategic frameworks, and industry analysis, delivered monthly.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </main>
    </div>
  )
}
