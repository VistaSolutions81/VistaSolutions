import { Metadata } from 'next'
import ContactClient from '@/components/contact/ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us - Vista Solutions',
  description: 'Get in touch with the Vista Solutions team to discuss your next digital engineering project.',
}

export default function ContactPage() {
  return (
    <div className="dialect-b bg-[#050505] text-on-surface font-inter min-h-screen">
      <ContactClient />
    </div>
  )
}
