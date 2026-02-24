import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-24 bg-mac-gray relative overflow-hidden">
      {/* Red gradient background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-mac-red/10 via-transparent to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-mac-red" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <p className="text-mac-red text-xs font-bold uppercase tracking-widest mb-4">
              Ready to Get Started?
            </p>
            <div className="w-12 h-0.5 bg-mac-red mb-6" />
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Let&apos;s Put the Right
              <br />
              <span className="text-mac-red">Team on Your Job.</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
              Whether you have a planned outage coming up, a capital project in development,
              or an emergency that can&apos;t wait — MAC Industrial is ready to mobilize.
              Contact us today for a fast, no-obligation response.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Request a Quote
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>
          </div>

          {/* Contact card */}
          <div className="bg-mac-dark border border-mac-red/20 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-px h-8 bg-mac-red" />
              <h3 className="text-white font-bold text-lg">Direct Contact</h3>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-mac-silver text-xs uppercase tracking-widest mb-1">
                  Florida Operations Manager
                </p>
                <p className="text-white text-xl font-bold">Jayr McLain</p>
              </div>

              <div className="space-y-3">
                <a
                  href="tel:+18128011391"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-mac-red/10 border border-mac-red/20 flex items-center justify-center text-mac-red group-hover:bg-mac-red group-hover:text-white transition-all duration-200">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <span className="font-medium">+1-812-801-1391</span>
                </a>

                <a
                  href="mailto:JMclain@macindustrialsvcs.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-mac-red/10 border border-mac-red/20 flex items-center justify-center text-mac-red group-hover:bg-mac-red group-hover:text-white transition-all duration-200">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <span className="font-medium text-sm break-all">
                    JMclain@macindustrialsvcs.com
                  </span>
                </a>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-gray-600 text-xs uppercase tracking-widest">
                  Available 24/7 for Emergency Response
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
