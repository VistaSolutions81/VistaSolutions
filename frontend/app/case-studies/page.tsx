import { Metadata } from 'next'
import CaseStudiesClient from '@/components/case-studies/CaseStudiesClient'

export const metadata: Metadata = {
  title: 'Case Studies - Vista Solutions',
  description: 'Read detailed case studies of supply chain redesigns and next-gen wealth management platforms built by Vista Solutions.',
}

export default function CaseStudiesPage() {
  return (
    <div className="dialect-b bg-[#050505] text-on-surface font-inter min-h-screen">
      <CaseStudiesClient />
    </div>
  )
}
