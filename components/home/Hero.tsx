import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-mac-dark">
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Red diagonal accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 overflow-hidden hidden lg:block">
        <div
          className="absolute inset-0 bg-mac-red opacity-5"
          style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />
        <div
          className="absolute inset-0 border-l-2 border-mac-red/20"
          style={{
            transform: 'skewX(-12deg) translateX(40%)',
            left: '-10%',
            right: '-10%',
          }}
        />
      </div>

      {/* Floating accent lines */}
      <div className="absolute top-1/4 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-mac-red/40 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/3 right-1/3 w-px h-20 bg-gradient-to-b from-transparent via-mac-red/20 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-mac-red" />
            <p className="text-mac-red text-xs font-bold uppercase tracking-widest">
              MAC Industrial Services
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
            Industrial
            <br />
            <span className="text-mac-red">Excellence.</span>
            <br />
            Delivered.
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-gray-300 font-medium mb-4 leading-relaxed max-w-xl">
            Optimizing Performance &bull; Improving Reliability
            <br />
            Extending Asset Lifetime
          </p>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-mac-red/50 my-8" />

          {/* Sub-copy */}
          <p className="text-gray-400 text-base leading-relaxed max-w-xl mb-10">
            From planned outages and boiler tube repair to P91 welding, emergency
            response, and capital projects — MAC Industrial deploys the right
            expertise, exactly when and where you need it.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services" className="btn-primary">
              View Our Services
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-outline">
              Request a Quote
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10">
            {[
              { val: '40K+', label: 'Pros in Network' },
              { val: '100+', label: 'Years Experience' },
              { val: '24/7', label: 'Emergency Response' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <div className="w-px h-8 bg-mac-red" />
                <div>
                  <p className="text-white text-2xl font-black leading-none">{badge.val}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mt-0.5">{badge.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-white/0 to-white/60" />
        <span className="text-white text-xs uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  )
}
