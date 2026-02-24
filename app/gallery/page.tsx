import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { services, capabilities } from '@/lib/data'
import { getAlbumSummaries } from '@/lib/gallery-albums'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Visual showcase of MAC Industrial Services capabilities — from boiler tube repair and high-energy piping to structural steel and capital projects.',
}

// ── Grouped capabilities by category ────────────────────────────────────────
function groupByCategory<T extends { category: string }>(items: T[]): Record<string, T[]> {
  return items.reduce<Record<string, T[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {})
}

export default async function GalleryPage() {
  const capsByCategory = groupByCategory(capabilities)
  const categoryKeys = Object.keys(capsByCategory)
  const albums = await getAlbumSummaries()

  return (
    <>
      {/* ── Page header ──────────────────────────────────────────────────── */}
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
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-400 text-xs uppercase tracking-widest transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-700 text-xs">/</span>
            <span className="text-mac-red text-xs uppercase tracking-widest">Gallery</span>
          </div>
          <div className="w-12 h-0.5 bg-mac-red mb-5" />
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Visual Gallery</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A technical showcase of our services and areas of expertise — illustrated with
            precision engineering diagrams built to the MAC Industrial design standard.
          </p>
        </div>
      </section>

      {/* ── Photo Albums ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-mac-gray border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Photo Albums"
            title="Browse Project Photo Collections"
            description="Open an album to view full-size job photo sets."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => (
              <Link
                key={album.id}
                href={`/gallery/${album.id}`}
                className="group bg-mac-dark border border-mac-gray-light rounded-xl overflow-hidden hover:border-mac-red/40 transition-colors duration-300"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-mac-dark">
                  {album.coverImage ? (
                    <Image
                      src={album.coverImage}
                      alt={`${album.title} album cover`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-700 text-xs uppercase tracking-widest">No image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-mac-dark via-transparent to-transparent opacity-50" />
                </div>

                <div className="px-4 py-4">
                  <p className="text-white text-base font-semibold mb-1 group-hover:text-mac-red transition-colors">
                    {album.title}
                  </p>
                  <p className="text-gray-500 text-xs mb-3 line-clamp-2">{album.description}</p>
                  <span className="text-mac-red text-xs font-semibold uppercase tracking-widest">
                    {album.imageCount} Photos
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-mac-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="Six Core Service Lines"
            description="Each service area supported by dedicated crews, purpose-built workflows, and a zero-compromise safety culture."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group bg-mac-gray border border-mac-gray-light rounded-xl overflow-hidden hover:border-mac-red/40 transition-colors duration-300"
              >
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-mac-dark">
                  {service.imagePath ? (
                    <Image
                      src={service.imagePath}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-700 text-xs uppercase tracking-widest">No image</span>
                    </div>
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-mac-gray via-transparent to-transparent opacity-60" />
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-4 bg-mac-red rounded-full flex-shrink-0" />
                    <h3 className="text-white font-bold text-base leading-tight">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-mac-red text-xs font-semibold uppercase tracking-widest group-hover:text-mac-red-light transition-colors">
                    View Service
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities by category ─────────────────────────────────────── */}
      <section className="py-20 bg-mac-gray border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Areas of Expertise"
            title="Capabilities by Sector"
            description="Twelve specialty capability areas grouped by industry sector, each backed by craft-certified professionals and code-compliant execution."
          />

          <div className="space-y-16">
            {categoryKeys.map((category) => {
              const items = capsByCategory[category]
              return (
                <div key={category}>
                  {/* Category label */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px flex-1 bg-white/5" />
                    <span className="text-mac-red text-xs font-bold uppercase tracking-[0.2em] flex-shrink-0">
                      {category}
                    </span>
                    <div className="h-px flex-1 bg-white/5" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {items.map((cap) => (
                      <Link
                        key={cap.id}
                        href={`/capabilities/${cap.id}`}
                        className="group bg-mac-dark border border-mac-gray-light rounded-xl overflow-hidden hover:border-mac-red/40 transition-colors duration-300"
                      >
                        {/* Image */}
                        <div className="relative aspect-video w-full overflow-hidden bg-mac-dark">
                          {cap.imagePath ? (
                            <Image
                              src={cap.imagePath}
                              alt={cap.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-gray-700 text-xs uppercase tracking-widest">No image</span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-mac-dark via-transparent to-transparent opacity-50" />
                        </div>

                        {/* Card body */}
                        <div className="px-4 py-4 flex items-center justify-between">
                          <div>
                            <p className="text-white text-sm font-semibold leading-snug mb-1 group-hover:text-mac-red transition-colors">
                              {cap.name}
                            </p>
                            <p className="text-gray-600 text-xs">{cap.category}</p>
                          </div>
                          <svg className="w-3.5 h-3.5 text-gray-700 group-hover:text-mac-red transition-colors flex-shrink-0 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-mac-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to put these capabilities to work?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Contact our team to discuss your project scope, timeline, and requirements.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/contact" className="btn-primary">
              Contact Our Team
            </Link>
            <Link href="/capabilities" className="btn-outline">
              View Full Capabilities
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
