'use client'

import { useState } from 'react'

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  service: string
  budget: string
  message: string
}

export default function ContactClient() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target
    let key = id
    if (id === 'fullName') key = 'name'
    if (id === 'emailAddress') key = 'email'
    if (id === 'phoneNumber') key = 'phone'
    if (id === 'projectDetails') key = 'message'

    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    key: keyof FormData
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for your inquiry! Our team will get back to you shortly.',
        })
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          message: '',
        })
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Submission failed. Please check your inputs.',
        })
      }
    } catch (error) {
      console.error('Submission error:', error)
      setStatus({
        type: 'error',
        message: 'An error occurred while sending your message. Please try again later.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex-grow pt-32 pb-40 px-6 md:px-16 max-w-[1440px] mx-auto w-full">
      {/* Hero Section */}
      <section className="mb-40 reveal-up">
        <h1 className="font-hanken text-5xl md:text-8xl font-bold text-primary tracking-tighter max-w-4xl">
          Let&apos;s Build Something Valuable.
        </h1>
      </section>

      {/* Split Layout Contact */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#252525] pt-16">
        {/* Left: Contact Info */}
        <div className="md:col-span-5 md:border-r border-[#252525] md:pr-12 pb-16 md:pb-0 reveal-up">
          <div className="space-y-16 md:sticky md:top-32">
            <div>
              <h2 className="font-geist text-xs font-semibold text-on-surface-variant mb-4 uppercase tracking-wider">
                Direct Inquiry
              </h2>
              <a
                className="block font-hanken text-2xl md:text-4xl font-bold text-primary hover:text-on-surface-variant transition-colors mb-2 tracking-tight"
                href="mailto:hello@vistasolution.com"
              >
                hello@vistasolution.com
              </a>
              <a
                className="block font-hanken text-xl md:text-2xl font-bold text-primary hover:text-on-surface-variant transition-colors tracking-tight"
                href="tel:+18005550199"
              >
                +1 (800) 555-0199
              </a>
            </div>
            <div className="border-b border-[#252525] pb-8">
              <h2 className="font-geist text-xs font-semibold text-on-surface-variant mb-4 uppercase tracking-wider">
                Global Headquarters
              </h2>
              <p className="font-inter text-base text-primary leading-relaxed">
                100 Innovation Drive
                <br />
                Suite 400
                <br />
                San Francisco, CA 94103
              </p>
            </div>
            <div className="flex gap-6">
              <a
                className="font-geist text-xs font-semibold text-primary hover:text-on-surface-variant transition-colors uppercase tracking-widest"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="font-geist text-xs font-semibold text-primary hover:text-on-surface-variant transition-colors uppercase tracking-widest"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                className="font-geist text-xs font-semibold text-primary hover:text-on-surface-variant transition-colors uppercase tracking-widest"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="md:col-span-7 md:pl-12 reveal-up transition-delay-100">
          {status.type && (
            <div
              className={`p-6 mb-8 text-sm border font-geist tracking-wide ${
                status.type === 'success'
                  ? 'bg-[#1c1b1b] border-[#0068ec] text-[#ffffff]'
                  : 'bg-[#93000a]/10 border-[#93000a] text-[#ffb4ab]'
              }`}
            >
              {status.message}
            </div>
          )}

          <form className="space-y-12" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <label className="block font-geist text-xs font-semibold text-on-surface-variant mb-2 uppercase tracking-widest">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  className="w-full bg-transparent border-b border-[#252525] py-4 text-primary font-inter text-base focus:border-primary transition-colors rounded-none focus:outline-none focus:ring-0"
                  placeholder="Jane Doe"
                  required
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="relative group">
                <label className="block font-geist text-xs font-semibold text-on-surface-variant mb-2 uppercase tracking-widest">
                  Company
                </label>
                <input
                  id="company"
                  className="w-full bg-transparent border-b border-[#252525] py-4 text-primary font-inter text-base focus:border-primary transition-colors rounded-none focus:outline-none focus:ring-0"
                  placeholder="Acme Corp"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <label className="block font-geist text-xs font-semibold text-on-surface-variant mb-2 uppercase tracking-widest">
                  Email Address *
                </label>
                <input
                  id="emailAddress"
                  className="w-full bg-transparent border-b border-[#252525] py-4 text-primary font-inter text-base focus:border-primary transition-colors rounded-none focus:outline-none focus:ring-0"
                  placeholder="jane@example.com"
                  required
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="relative group">
                <label className="block font-geist text-xs font-semibold text-on-surface-variant mb-2 uppercase tracking-widest">
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  className="w-full bg-transparent border-b border-[#252525] py-4 text-primary font-inter text-base focus:border-primary transition-colors rounded-none focus:outline-none focus:ring-0"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <label className="block font-geist text-xs font-semibold text-on-surface-variant mb-2 uppercase tracking-widest">
                  Service Required
                </label>
                <select
                  className="w-full bg-transparent border-b border-[#252525] py-4 text-primary font-inter text-base focus:border-primary transition-colors rounded-none focus:outline-none focus:ring-0 appearance-none cursor-pointer"
                  value={formData.service}
                  onChange={(e) => handleSelectChange(e, 'service')}
                >
                  <option className="bg-[#131313] text-primary" value="">
                    Select an option
                  </option>
                  <option className="bg-[#131313] text-primary" value="strategy">
                    Digital Strategy
                  </option>
                  <option className="bg-[#131313] text-primary" value="design">
                    Product Design
                  </option>
                  <option className="bg-[#131313] text-primary" value="engineering">
                    Software Engineering
                  </option>
                  <option className="bg-[#131313] text-primary" value="data">
                    Data Architecture
                  </option>
                </select>
              </div>
              <div className="relative group">
                <label className="block font-geist text-xs font-semibold text-on-surface-variant mb-2 uppercase tracking-widest">
                  Estimated Budget
                </label>
                <select
                  className="w-full bg-transparent border-b border-[#252525] py-4 text-primary font-inter text-base focus:border-primary transition-colors rounded-none focus:outline-none focus:ring-0 appearance-none cursor-pointer"
                  value={formData.budget}
                  onChange={(e) => handleSelectChange(e, 'budget')}
                >
                  <option className="bg-[#131313] text-primary" value="">
                    Select a range
                  </option>
                  <option className="bg-[#131313] text-primary" value="50k">
                    $50k - $100k
                  </option>
                  <option className="bg-[#131313] text-primary" value="100k">
                    $100k - $250k
                  </option>
                  <option className="bg-[#131313] text-primary" value="250k">
                    $250k - $500k
                  </option>
                  <option className="bg-[#131313] text-primary" value="500k">
                    $500k+
                  </option>
                </select>
              </div>
            </div>

            <div className="relative group">
              <label className="block font-geist text-xs font-semibold text-on-surface-variant mb-2 uppercase tracking-widest">
                Project Details *
              </label>
              <textarea
                id="projectDetails"
                className="w-full bg-transparent border-b border-[#252525] py-4 text-primary font-inter text-base focus:border-primary transition-colors rounded-none focus:outline-none focus:ring-0 min-h-[150px] resize-y"
                placeholder="Tell us about your objectives, timeline, and current challenges..."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="pt-8">
              <button
                disabled={loading}
                className="w-full md:w-auto px-12 py-5 bg-[#F5F5F5] text-[#050505] font-geist text-xs font-semibold uppercase tracking-widest hover:bg-[#0068ec] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
              >
                {loading ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Final Statement */}
      <section className="mt-40 border-t border-[#252525] pt-16 text-center reveal-up">
        <p className="font-hanken text-2xl md:text-5xl text-on-surface-variant max-w-3xl mx-auto leading-tight tracking-tight">
          Have an idea? <br className="md:hidden" />
          <span className="text-primary font-bold">Let&apos;s turn it into something remarkable.</span>
        </p>
      </section>
    </main>
  )
}
