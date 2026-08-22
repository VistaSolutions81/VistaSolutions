'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'

const categories = ['All', 'Websites', 'UI/UX', 'Web Apps', 'E-Commerce']

export default function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = projects.filter((p) => {
    const isHeroProject = p.id === 'global-ledger' || p.id === 'nexus-data-sync'
    if (isHeroProject) return false

    if (selectedCategory === 'All') return true
    return p.category.toLowerCase() === selectedCategory.toLowerCase()
  })

  return (
    <main className="pt-32 pb-40 px-6 md:px-16 max-w-[1440px] mx-auto">
      {/* Header Section */}
      <header className="mb-24">
        <h1 className="font-hanken text-5xl md:text-8xl font-bold tracking-tighter text-primary mb-8 mt-12 md:mt-24 reveal-up">
          Selected Work
        </h1>
        <div className="flex flex-wrap gap-6 items-center border-t border-[#252525] pt-8 reveal-up">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-geist text-xs font-semibold uppercase tracking-widest pb-1 transition-all ${
                  isSelected
                    ? 'text-primary border-b border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </header>

      {/* Masonry Grid */}
      <div className="masonry-grid reveal-up">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="masonry-item project-card group cursor-pointer"
          >
            <div className="border border-[#252525] transition-colors duration-500 overflow-hidden relative group-hover:border-t-2 group-hover:border-t-primary bg-[#0e0e0e]">
              <div className="w-full relative aspect-[4/3]">
                <Image
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 bg-[#0e0e0e]">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-geist text-sm text-[#5d5f5f]">
                    {project.numIndex}
                  </span>
                  <span className="font-geist text-xs font-semibold uppercase tracking-widest text-[#8e9192]">
                    {project.category}
                  </span>
                </div>
                <h2 className="font-hanken text-2xl font-semibold text-primary mb-6 tracking-tight">
                  {project.title}
                </h2>
                <Link
                  className="inline-flex items-center gap-2 font-geist text-xs font-semibold uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors"
                  href={project.link}
                >
                  View Project{' '}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
