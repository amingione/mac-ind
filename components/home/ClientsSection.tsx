import { clients } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export default function ClientsSection() {
  return (
    <section className="py-24 bg-mac-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Trusted Partners"
          title="Clients Who Count On Us"
          description="From Fortune 500 utilities to regional manufacturers, our clients trust MAC Industrial to deliver when it matters most."
          centered
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-mac-gray hover:bg-mac-gray-light transition-colors duration-200 p-6 flex flex-col items-center justify-center text-center gap-2 group"
            >
              <div className="w-8 h-0.5 bg-mac-red/40 group-hover:bg-mac-red transition-colors duration-200 mb-1" />
              <p className="text-white text-sm font-semibold leading-tight">
                {client.name}
              </p>
              {client.industry && (
                <p className="text-gray-600 text-xs">{client.industry}</p>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-8 uppercase tracking-widest">
          Serving power generation, manufacturing, infrastructure & beyond
        </p>
      </div>
    </section>
  )
}
