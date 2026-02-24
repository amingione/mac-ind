import type { Metadata } from 'next'
import Link from 'next/link'
import { capabilities, weldingSpecs } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Capabilities',
  description:
    'Deep industrial capabilities: air preheater repair, boiler tube replacement, P91 welding, HEP, structural steel, SO2 scrubbers, HDPE piping, and more.',
}

export default function CapabilitiesPage() {
  const categories = Array.from(new Set(capabilities.map((c) => c.category)))

  return (
    <>
      {/* Page header */}
      <section className="pt-36 pb-16 bg-mac-dark relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-mac-red" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/" className="text-gray-600 hover:text-gray-400 text-xs uppercase tracking-widest transition-colors">
              Home
            </Link>
            <span className="text-gray-700 text-xs">/</span>
            <span className="text-mac-red text-xs uppercase tracking-widest">Capabilities</span>
          </div>
          <div className="w-12 h-0.5 bg-mac-red mb-5" />
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Capabilities</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Hands-on expertise across the equipment and systems that keep industrial
            facilities running — from power generation boilers to HDPE piping systems.
          </p>
        </div>
      </section>

      {/* Capabilities by category */}
      <section className="py-16 bg-mac-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => {
            const items = capabilities.filter((c) => c.category === category)
            return (
              <div key={category} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-px h-6 bg-mac-red" />
                  <h2 className="text-white text-sm font-bold uppercase tracking-widest">
                    {category}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {items.map((cap) => (
                    <Link
                      key={cap.id}
                      href={`/capabilities/${cap.id}`}
                      className="group bg-mac-gray border border-mac-gray-light hover:border-mac-red/30 rounded-lg px-5 py-4 transition-colors duration-200 flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-mac-red flex-shrink-0 mt-2 group-hover:bg-mac-red-light transition-colors" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium leading-snug group-hover:text-mac-red transition-colors">
                          {cap.name}
                        </p>
                      </div>
                      <svg
                        className="w-3.5 h-3.5 text-gray-700 group-hover:text-mac-red transition-colors flex-shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Welding Specs section */}
      <section className="py-16 bg-mac-gray border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Welding & Metallurgy"
            title="Specialty Welding Expertise"
            description="MAC Industrial's welding teams are qualified to work with the most demanding alloys and codes in the industry."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {weldingSpecs.map((spec) => (
              <div
                key={spec.label}
                className="bg-mac-dark border border-mac-gray-light rounded-xl p-6 hover:border-mac-red/30 transition-colors duration-200"
              >
                <div className="w-8 h-0.5 bg-mac-red mb-4" />
                <h3 className="text-white font-bold text-base mb-2">{spec.label}</h3>
                {spec.description && (
                  <p className="text-gray-500 text-sm leading-relaxed">{spec.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-mac-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-mac-red text-xs font-bold uppercase tracking-widest mb-3">
            Put Our Expertise to Work
          </p>
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to discuss your project?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Our team has the knowledge and workforce to tackle your most complex
            industrial maintenance and construction challenges.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
