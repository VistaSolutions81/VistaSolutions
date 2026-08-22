'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Projects', href: '/projects' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-[#252525] py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-16 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="font-hanken text-2xl font-bold tracking-tighter text-[#F5F5F5] hover:opacity-90 transition-opacity"
        >
          VISTA SOLUTIONS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-geist text-xs font-semibold uppercase tracking-widest transition-all duration-300 pb-1 ${
                  isActive
                    ? 'text-[#F5F5F5] border-b border-[#0068ec]'
                    : 'text-[#888888] hover:text-[#F5F5F5]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-geist text-xs font-semibold uppercase tracking-widest bg-[#0068ec] text-white px-6 py-3 rounded-none hover:bg-[#0136e8] transition-colors border border-transparent"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#F5F5F5] p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-[#0b0b0b] z-40 border-l border-[#252525] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col pt-24 px-8 pb-10 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col space-y-6 flex-grow">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-geist text-sm font-semibold uppercase tracking-widest transition-all pb-1 border-b border-transparent w-max ${
                  isActive
                    ? 'text-[#F5F5F5] border-[#0068ec]'
                    : 'text-[#888888] hover:text-[#F5F5F5]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="mt-auto">
          <Link
            href="/contact"
            className="w-full inline-flex items-center justify-center font-geist text-xs font-semibold uppercase tracking-widest bg-[#0068ec] text-white py-4 rounded-none hover:bg-[#0136e8] transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </header>
  )
}
