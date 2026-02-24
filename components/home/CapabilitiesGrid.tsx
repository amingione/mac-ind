import Image from 'next/image'
import Link from 'next/link'
import { capabilities } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export default function CapabilitiesGrid() {
  return (
    <section className="py-24 bg-mac-gray relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(204,31,31,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(204,31,31,0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Areas of Expertise"
          title="Deep Capabilities Across Industry Sectors"
          description="Our teams have direct, hands-on experience with the equipment and systems that matter most to power generation, industrial, and infrastructure clients."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
          {capabilities.map((cap) => (
            <Link
              key={cap.id}
              href={`/capabilities/${cap.id}`}
              className="group bg-mac-dark border border-mac-gray-light rounded-xl overflow-hidden hover:border-mac-red/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Thumbnail */}
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
                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-mac-dark via-mac-dark/40 to-transparent" />
                {/* Category badge */}
                <span className="absolute top-2.5 left-2.5 text-[10px] font-bold uppercase tracking-widest text-mac-red bg-mac-dark/80 px-2 py-0.5 rounded-full border border-mac-red/20">
                  {cap.category}
                </span>
              </div>

              {/* Card body */}
              <div className="px-4 py-3 flex items-center justify-between gap-2">
                <p className="text-white text-sm font-semibold leading-snug group-hover:text-mac-red transition-colors">
                  {cap.name}
                </p>
                <svg
                  className="w-3.5 h-3.5 text-gray-600 group-hover:text-mac-red transition-colors flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/capabilities" className="btn-primary">
            Explore All Capabilities
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
