'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { caseStudies } from '@/data/caseStudies'

const filters = ['All Cases', 'FinTech', 'Healthcare', 'Logistics', 'Retail']

export default function CaseStudiesClient() {
  const [selectedFilter, setSelectedFilter] = useState('All Cases')

  const filteredCases = caseStudies.filter((cs) => {
    if (selectedFilter === 'All Cases') return true
    return cs.industry.toLowerCase() === selectedFilter.toLowerCase()
  })

  return (
    <main className="flex-grow pt-32 md:pt-48 pb-40">
      {/* Hero Section */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-10 md:col-start-2 text-center reveal-up">
            <p className="font-geist text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-6 inline-block border-b border-[#252525] pb-2">
              Our Work
            </p>
            <h1 className="font-hanken text-4xl md:text-8xl font-bold tracking-tighter text-primary mb-8 leading-tight">
              From Business Challenges to <span className="text-[#0068ec]">Digital Outcomes.</span>
            </h1>
            <p className="font-inter text-lg text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
              We don&apos;t just build software; we architect solutions that redefine industries. Explore our portfolio of high-impact transformations.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="border-y border-[#252525] py-6 mt-16 overflow-x-auto whitespace-nowrap hide-scrollbar reveal-up">
          <div className="flex gap-8 justify-center min-w-max px-4">
            {filters.map((filter) => {
              const isSelected = selectedFilter === filter
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`font-geist text-xs font-semibold uppercase tracking-widest pb-1 transition-all ${
                    isSelected
                      ? 'text-primary border-b border-primary'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {filter}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto flex flex-col gap-40">
        {filteredCases.map((cs) => {
          const isReversed = cs.layoutType === 'reversed'
          return (
            <article
              key={cs.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center group cursor-pointer relative pb-40 border-b border-[#252525] reveal-up"
            >
              {/* Text Content */}
              <div
                className={`md:col-span-5 flex flex-col ${
                  isReversed ? 'order-2 md:order-2 md:pl-12' : 'order-2 md:order-1'
                }`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-geist text-sm text-[#0068ec]">
                    {cs.numIndex}
                  </span>
                  <div className="h-px bg-[#252525] flex-grow"></div>
                  <span className="font-geist text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                    {cs.client}
                  </span>
                </div>
                <h2 className="font-hanken text-3xl md:text-5xl font-bold text-primary mb-6 group-hover:text-[#0068ec] transition-colors duration-300 tracking-tight">
                  {cs.title}
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-8 border-t border-[#252525] pt-4">
                  <div>
                    <p className="font-geist text-xs font-semibold uppercase text-on-surface-variant mb-2">
                      Industry
                    </p>
                    <p className="font-inter text-base text-primary">{cs.industry}</p>
                  </div>
                  <div>
                    <p className="font-geist text-xs font-semibold uppercase text-on-surface-variant mb-2">
                      Outcome
                    </p>
                    <p className="font-inter text-base text-primary">{cs.outcome}</p>
                  </div>
                </div>
                <div className="space-y-6 mb-10">
                  <div>
                    <h3 className="font-geist text-xs font-semibold uppercase text-on-surface-variant mb-2">
                      The Challenge
                    </h3>
                    <p className="font-inter text-base text-on-surface leading-relaxed line-clamp-3">
                      {cs.challenge}
                    </p>
                  </div>
                </div>
                <Link
                  className="inline-flex items-center gap-2 font-geist text-xs font-semibold uppercase tracking-widest text-primary hover:text-[#0068ec] transition-colors w-max group/btn"
                  href={cs.link}
                >
                  Read Full Case
                  <span className="material-symbols-outlined transform group-hover/btn:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>

              {/* Image Panel */}
              <div
                className={`md:col-span-7 h-[50vh] md:h-[70vh] w-full bg-[#1c1b1b] border border-[#252525] overflow-hidden relative ${
                  isReversed ? 'order-1 md:order-1' : 'order-1 md:order-2'
                }`}
              >
                <div className="absolute inset-0 bg-[#050505]/20 group-hover:bg-transparent transition-colors z-10"></div>
                <Image
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                  src={cs.imageUrl}
                  alt={cs.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </article>
          )
        })}
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mt-40 reveal-up">
        <div className="border border-[#252525] p-12 md:p-24 text-center bg-[#1c1b1b] flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <rect width="40" height="40" fill="none"></rect>
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#e2e2e2"
                    strokeWidth="0.5"
                  ></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)"></rect>
            </svg>
          </div>
          <h2 className="font-hanken text-4xl md:text-6xl font-bold text-primary mb-6 relative z-10 tracking-tighter">
            Ready to transform?
          </h2>
          <p className="font-inter text-lg text-on-surface-variant max-w-xl mb-10 relative z-10 leading-relaxed">
            Let&apos;s discuss how we can architect a solution tailored to your specific business challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#F5F5F5] text-[#050505] font-geist text-xs font-semibold uppercase tracking-widest px-8 py-4 relative z-10 hover:bg-[#0068ec] hover:text-white transition-colors"
          >
            Start a Project
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
