import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive industrial services: maintenance, outage management, welding & fabrication, emergency response, capital projects, and resource solutions.',
}

const iconMap: Record<string, React.ReactNode> = {
  wrench: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  lightning: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  fire: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  ),
  alert: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
  ),
  building: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  ),
  users: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
}

export default function ServicesPage() {
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
            <span className="text-mac-red text-xs uppercase tracking-widest">Services</span>
          </div>
          <div className="w-12 h-0.5 bg-mac-red mb-5" />
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Our Services</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            End-to-end industrial solutions — from ongoing maintenance and outage execution
            to specialty welding and emergency response.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-16 bg-mac-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-mac-gray border border-mac-gray-light rounded-xl overflow-hidden hover:border-mac-red/30 transition-colors duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Left: Header */}
                <div className="p-8 lg:border-r border-mac-gray-light flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-mac-red/10 border border-mac-red/20 flex items-center justify-center text-mac-red mb-5">
                      {iconMap[service.icon]}
                    </div>
                    <h2 className="text-white text-2xl font-bold mb-3">{service.title}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <div className="mt-8 flex flex-col gap-3">
                    <Link href={`/services/${service.id}`} className="btn-primary text-xs">
                      Full Service Details
                    </Link>
                    <Link href="/contact" className="btn-outline text-xs">
                      Request This Service
                    </Link>
                  </div>
                </div>

                {/* Right: Items */}
                <div className="lg:col-span-2 p-8">
                  <p className="text-mac-silver text-xs font-bold uppercase tracking-widest mb-5">
                    What&apos;s Included
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-gray-300 text-sm"
                      >
                        <span className="w-5 h-5 rounded bg-mac-red/10 border border-mac-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-mac-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-mac-gray border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don&apos;t see what you need?
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us — our team will work with you to scope and deliver a custom solution.
          </p>
          <Link href="/contact" className="btn-primary">
            Talk to Our Team
          </Link>
        </div>
      </section>
    </>
  )
}
