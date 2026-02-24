import Link from 'next/link'
import { capabilities } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export default function CapabilitiesGrid() {
  const categories = Array.from(new Set(capabilities.map((c) => c.category)))

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {capabilities.map((cap) => (
            <Link
              key={cap.id}
              href={`/capabilities/${cap.id}`}
              className="group flex items-start gap-3 bg-mac-dark/60 border border-white/5 rounded-lg px-4 py-4 hover:border-mac-red/30 hover:bg-mac-dark transition-colors duration-200"
            >
              <div className="w-1 h-full min-h-[1.25rem] bg-mac-red flex-shrink-0 rounded-full mt-0.5 group-hover:bg-mac-red-light transition-colors" />
              <div className="flex-1">
                <p className="text-white text-sm font-medium leading-snug group-hover:text-mac-red transition-colors">
                  {cap.name}
                </p>
                <p className="text-gray-600 text-xs mt-0.5">{cap.category}</p>
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
