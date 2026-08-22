import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="dialect-a bg-[#080808] text-on-surface font-inter min-h-screen flex items-center justify-center relative overflow-hidden scanlines">
      <div className="relative z-10 text-center px-6 max-w-2xl reveal-up">
        {/* Large Decorative 404 Code */}
        <h1 className="font-sora text-8xl md:text-9xl font-bold tracking-tighter text-on-surface mb-2 animate-pulse">
          404
        </h1>
        {/* Technical Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded bg-on-surface/10 border border-on-surface/5">
          <span className="w-2 h-2 rounded-full bg-[#0136e8]"></span>
          <span className="font-jetbrains text-xs text-on-surface font-semibold uppercase tracking-widest">
            ERROR: STRUCT_NOT_FOUND
          </span>
        </div>
        {/* Narrative Description */}
        <h2 className="font-sora text-2xl md:text-3xl font-medium text-[#F5F5F5] mb-6 tracking-tight">
          System Coordinate Unreachable
        </h2>
        <p className="font-inter text-base text-[#c4c7c7] mb-12 max-w-md mx-auto leading-relaxed">
          The digital architecture you are looking for does not exist, has been moved, or has been decommissioned.
        </p>
        {/* Back Link */}
        <Link
          className="inline-flex items-center justify-center font-jetbrains text-xs font-semibold uppercase tracking-widest bg-[#0136e8] text-white px-8 py-4 rounded-sm hover:opacity-90 transition-all"
          href="/"
        >
          RETURN TO HOME
        </Link>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="notFoundGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect width="60" height="60" fill="none" />
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#notFoundGrid)" />
        </svg>
      </div>
    </div>
  )
}
