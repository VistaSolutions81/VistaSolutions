import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#080808] w-full py-20 border-t border-[#252525] transition-all duration-200">
      <div className="grid grid-cols-12 gap-8 px-6 md:px-16 max-w-[1440px] mx-auto">
        {/* Left: Branding & Pitch */}
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <Link
            href="/"
            className="font-hanken text-2xl font-bold tracking-tighter text-[#F5F5F5] mb-6 block"
          >
            VISTA SOLUTIONS
          </Link>
          <p className="font-inter text-sm text-[#888888] max-w-xs mb-8 leading-relaxed">
            Architectural Integrity in Technology. We build digital structures that last.
          </p>
          <div className="font-geist text-xs text-[#888888]">
            © {new Date().getFullYear()} Vista Solutions. All rights reserved.
          </div>
        </div>

        {/* Column 1: Company */}
        <div className="col-span-6 md:col-span-2 md:col-start-7">
          <h5 className="font-geist text-xs font-semibold text-[#F5F5F5] mb-6 uppercase tracking-widest">
            Company
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                className="font-inter text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="font-inter text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
                href="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="font-inter text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="font-inter text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
                href="/insights"
              >
                Insights
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Legal */}
        <div className="col-span-6 md:col-span-2">
          <h5 className="font-geist text-xs font-semibold text-[#F5F5F5] mb-6 uppercase tracking-widest">
            Legal
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                className="font-inter text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
                href="#"
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                className="font-inter text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
                href="#"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                className="font-inter text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
                href="#"
              >
                Cookies
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Social */}
        <div className="col-span-12 md:col-span-2 mt-12 md:mt-0">
          <h5 className="font-geist text-xs font-semibold text-[#F5F5F5] mb-6 uppercase tracking-widest">
            Social
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                className="font-inter text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="font-inter text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className="font-inter text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
