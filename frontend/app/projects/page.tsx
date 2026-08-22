import { Metadata } from 'next'
import ProjectsClient from '@/components/projects/ProjectsClient'

export const metadata: Metadata = {
  title: 'Selected Work - Vista Solutions',
  description: 'Explore our portfolio of high-contrast, precision-engineered digital products and platforms built by Vista Solutions.',
}

export default function ProjectsPage() {
  return (
    <div className="dialect-b bg-[#050505] text-on-surface font-inter min-h-screen">
      <ProjectsClient />
    </div>
  )
}
