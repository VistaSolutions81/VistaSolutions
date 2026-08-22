'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  if (subscribed) {
    return (
      <div className="w-full max-w-md p-6 bg-[#131313] border border-[#0068ec] text-[#ffffff] font-geist text-sm tracking-wide text-center">
        Thank you for subscribing to our newsletter!
      </div>
    )
  }

  return (
    <form
      className="w-full max-w-md flex flex-col sm:flex-row gap-8 items-end"
      onSubmit={handleSubmit}
    >
      <div className="relative flex-grow w-full text-left">
        <label
          className="block font-geist text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          className="w-full bg-transparent border-b border-[#252525] border-t-0 border-l-0 border-r-0 rounded-none px-0 py-3 text-primary font-inter text-base focus:ring-0 focus:border-primary transition-colors placeholder:text-[#353534] focus:outline-none"
          id="email"
          placeholder="hello@company.com"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        className="bg-primary text-[#050505] font-geist text-xs font-semibold uppercase tracking-widest px-8 py-3 whitespace-nowrap hover:bg-[#0068ec] hover:text-white transition-all duration-300 w-full sm:w-auto"
        type="submit"
      >
        Subscribe
      </button>
    </form>
  )
}
