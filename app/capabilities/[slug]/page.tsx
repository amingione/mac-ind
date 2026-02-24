import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { capabilities, services } from '@/lib/data'
import { capabilityDetails } from '@/lib/details'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cap = capabilities.find((c) => c.id === params.slug)
  const detail = capabilityDetails.find((d) => d.slug === params.slug)
  if (!cap) return { title: 'Not Found' }
  return {
    title: cap.name,
    description: detail?.description ?? cap.name,
  }
}

export default function CapabilityDetailPage({ params }: Props) {
  const cap = capabilities.find((c) => c.id === params.slug)
  const detail = capabilityDetails.find((d) => d.slug === params.slug)
  if (!cap || !detail) notFound()

  // Capabilities in same category for sidebar nav
  const categoryPeers = capabilities.filter(
    (c) => c.category === cap.category && c.id !== cap.id
  )

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[420px] flex items-end pb-16 pt-36 overflow-hidden bg-mac-dark">
        {cap.imagePath && (
          <div className="absolute inset-0">
            <Image
              src={cap.imagePath}
              alt={cap.name}
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-mac-dark via-mac-dark/80 to-transparent" />
          </div>
        )}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-mac-red" />
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
          <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest flex-wrap">
            <Link href="/" className="text-gray-600 hover:text-gray-400 transition-colors">Home</Link>
            <span className="text-gray-700">/</span>
            <Link href="/capabilities" className="text-gray-600 hover:text-gray-400 transition-colors">Capabilities</Link>
            <span className="text-gray-700">/</span>
            <span className="text-mac-red">{cap.name}</span>
          </div>

          {/* Category badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-4 bg-mac-red rounded-full" />
            <span className="text-mac-red text-xs font-bold uppercase tracking-[0.2em]">
              {cap.category}
            </span>
          </div>

          <div className="w-12 h-0.5 bg-mac-red mb-5" />
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 max-w-3xl leading-tight">
            {cap.name}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">{detail.description}</p>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-mac-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left: main content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Long description */}
              <div className="space-y-5">
                {detail.longDescription.map((para, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed text-[15px]">
                    {para}
                  </p>
                ))}
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-white text-2xl font-bold mb-5 flex items-center gap-3">
                  <span className="w-1 h-6 bg-mac-red rounded-full inline-block" />
                  What We Deliver
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {detail.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-mac-gray border border-mac-gray-light rounded-lg p-4"
                    >
                      <svg
                        className="w-4 h-4 text-mac-red mt-0.5 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {detail.faqs.length > 0 && (
                <div>
                  <h2 className="text-white text-2xl font-bold mb-5 flex items-center gap-3">
                    <span className="w-1 h-6 bg-mac-red rounded-full inline-block" />
                    Technical Q&amp;A
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
              )}

              {/* Related services */}
              {detail.relatedServiceIds.length > 0 && (
                <div>
                  <h2 className="text-white text-2xl font-bold mb-5 flex items-center gap-3">
                    <span className="w-1 h-6 bg-mac-red rounded-full inline-block" />
                    Related Service Lines
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {detail.relatedServiceIds.map((sid) => {
                      const svc = services.find((s) => s.id === sid)
                      if (!svc) return null
                      return (
                        <Link
                          key={sid}
                          href={`/services/${sid}`}
                          className="group flex items-center gap-4 bg-mac-gray border border-mac-gray-light rounded-xl p-4 hover:border-mac-red/40 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-mac-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-mac-red/20 transition-colors">
                            <span className="text-mac-red text-xs font-bold">
                              {svc.title.substring(0, 2).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <p className="text-white text-sm font-semibold">{svc.title}</p>
                            <p className="text-gray-500 text-xs mt-0.5 line-clamp-1">{svc.description}</p>
                          </div>
                          <svg
                            className="w-4 h-4 text-gray-600 group-hover:text-mac-red transition-colors ml-auto flex-shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
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
                  Codes &amp; Standards
                </h3>
                <ul className="space-y-2">
                  {detail.standards.map((std, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-xs leading-relaxed border-b border-white/5 last:border-0 pb-2 last:pb-0"
                    >
                      {std}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-mac-red rounded-xl p-6">
                <h3 className="text-white font-bold text-base mb-2">Need this capability?</h3>
                <p className="text-red-100 text-sm mb-4">
                  Talk to our team about your specific project requirements.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-white text-mac-red font-bold text-sm py-3 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Contact MAC Industrial
                </Link>
              </div>

              {/* Peers in same category */}
              {categoryPeers.length > 0 && (
                <div className="bg-mac-gray border border-mac-gray-light rounded-xl p-6">
                  <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-mac-red rounded-full" />
                    More {cap.category}
                  </h3>
                  <ul className="space-y-1">
                    {categoryPeers.map((peer) => (
                      <li key={peer.id}>
                        <Link
                          href={`/capabilities/${peer.id}`}
                          className="block px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {peer.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* All capabilities link */}
              <Link
                href="/capabilities"
                className="flex items-center justify-between w-full px-5 py-4 bg-mac-gray border border-mac-gray-light rounded-xl text-sm text-gray-400 hover:border-mac-red/40 hover:text-white transition-colors"
              >
                <span>View All Capabilities</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-mac-gray border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-white text-2xl font-bold mb-1">Explore our full capability set</h2>
            <p className="text-gray-400 text-sm">Twelve specialty areas across power, industrial, and process sectors.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/capabilities" className="btn-outline text-sm">All Capabilities</Link>
            <Link href="/contact" className="btn-primary text-sm">Get In Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
