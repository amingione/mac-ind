import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/lib/data'
import { serviceDetails } from '@/lib/details'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.id === params.slug)
  if (!service) return { title: 'Not Found' }
  return {
    title: service.title,
    description: service.description,
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.id === params.slug)
  const detail = serviceDetails.find((d) => d.slug === params.slug)
  if (!service || !detail) notFound()

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[420px] flex items-end pb-16 pt-36 overflow-hidden bg-mac-dark">
        {/* Background image */}
        {service.imagePath && (
          <div className="absolute inset-0">
            <Image
              src={service.imagePath}
              alt={service.title}
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-mac-dark via-mac-dark/80 to-transparent" />
          </div>
        )}
        {/* Left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-mac-red" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest">
            <Link href="/" className="text-gray-600 hover:text-gray-400 transition-colors">Home</Link>
            <span className="text-gray-700">/</span>
            <Link href="/services" className="text-gray-600 hover:text-gray-400 transition-colors">Services</Link>
            <span className="text-gray-700">/</span>
            <span className="text-mac-red">{service.title}</span>
          </div>

          <div className="w-12 h-0.5 bg-mac-red mb-5" />
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4 max-w-3xl leading-tight">
            {service.title}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">{service.description}</p>
        </div>
      </section>

      {/* ── Main content grid ─────────────────────────────────────────────── */}
      <section className="py-20 bg-mac-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left: long-form content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Overview paragraphs */}
              <div className="space-y-5">
                {detail.longDescription.map((para, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed text-[15px]">
                    {para}
                  </p>
                ))}
              </div>

              {/* Service items */}
              <div>
                <h2 className="text-white text-2xl font-bold mb-5 flex items-center gap-3">
                  <span className="w-1 h-6 bg-mac-red rounded-full inline-block" />
                  Service Scope
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-mac-gray border border-mac-gray-light rounded-lg p-4"
                    >
                      <div className="w-1.5 h-1.5 bg-mac-red rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key highlights */}
              <div>
                <h2 className="text-white text-2xl font-bold mb-5 flex items-center gap-3">
                  <span className="w-1 h-6 bg-mac-red rounded-full inline-block" />
                  Key Capabilities
                </h2>
                <ul className="space-y-3">
                  {detail.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-mac-red mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-white text-2xl font-bold mb-5 flex items-center gap-3">
                  <span className="w-1 h-6 bg-mac-red rounded-full inline-block" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-5">
                  {detail.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="border border-mac-gray-light rounded-xl p-6 bg-mac-gray"
                    >
                      <h3 className="text-white font-semibold mb-3 text-base">{faq.question}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: sidebar */}
            <div className="space-y-6">

              {/* Applications */}
              <div className="bg-mac-gray border border-mac-gray-light rounded-xl p-6">
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-mac-red rounded-full" />
                  Industry Applications
                </h3>
                <ul className="space-y-2">
                  {detail.applications.map((app, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                      <div className="w-1 h-1 bg-mac-red/60 rounded-full mt-2 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Standards */}
              <div className="bg-mac-gray border border-mac-gray-light rounded-xl p-6">
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-mac-red rounded-full" />
                  Applicable Standards
                </h3>
                <ul className="space-y-2">
                  {detail.standards.map((std, i) => (
                    <li key={i} className="text-gray-400 text-xs leading-relaxed border-b border-white/5 last:border-0 pb-2 last:pb-0">
                      {std}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div className="bg-mac-red rounded-xl p-6">
                <h3 className="text-white font-bold text-base mb-2">Ready to discuss your project?</h3>
                <p className="text-red-100 text-sm mb-4">
                  Contact our team to scope your specific needs.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-white text-mac-red font-bold text-sm py-3 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Contact MAC Industrial
                </Link>
              </div>

              {/* All services nav */}
              <div className="bg-mac-gray border border-mac-gray-light rounded-xl p-6">
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-mac-red rounded-full" />
                  All Services
                </h3>
                <ul className="space-y-1">
                  {services.map((s) => (
                    <li key={s.id}>
                      <Link
                        href={`/services/${s.id}`}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          s.id === service.id
                            ? 'bg-mac-red/10 text-mac-red font-semibold'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related capabilities ──────────────────────────────────────────── */}
      {detail.relatedCapabilityIds.length > 0 && (
        <section className="py-16 bg-mac-gray border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1 h-6 bg-mac-red rounded-full inline-block" />
              Related Technical Capabilities
            </h2>
            <div className="flex flex-wrap gap-3">
              {detail.relatedCapabilityIds.map((id) => (
                <Link
                  key={id}
                  href={`/capabilities/${id}`}
                  className="px-4 py-2 bg-mac-dark border border-mac-gray-light rounded-lg text-sm text-gray-300 hover:border-mac-red/40 hover:text-white transition-colors"
                >
                  {id.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-mac-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-white text-2xl font-bold mb-1">Explore all services</h2>
            <p className="text-gray-400 text-sm">Six core service lines, one accountable partner.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/services" className="btn-outline text-sm">
              View All Services
            </Link>
            <Link href="/contact" className="btn-primary text-sm">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
