import type { Metadata } from 'next'
import Link from 'next/link'
import { safetyPillars } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Safety & Quality',
  description:
    'MAC Industrial Services operates under a zero-compromise safety culture built on Commitment, Care, and Courage. Safety is not a priority — it is the foundation.',
}

export default function SafetyPage() {
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
            <span className="text-mac-red text-xs uppercase tracking-widest">Safety & Quality</span>
          </div>
          <div className="w-12 h-0.5 bg-mac-red mb-5" />
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
            Safety & Quality
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            At MAC Industrial, safety is not a competing priority — it is the
            non-negotiable foundation of every job we perform.
          </p>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-16 bg-mac-gray border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-12 h-0.5 bg-mac-red mx-auto mb-6" />
            <blockquote className="text-2xl sm:text-3xl font-bold text-white leading-relaxed mb-6">
              &ldquo;Every MAC Industrial team member goes home safe — every shift,
              every project, every day.&rdquo;
            </blockquote>
            <p className="text-gray-400 text-base leading-relaxed">
              We build safety into every pre-task plan, every toolbox talk, every crew
              decision. Our people have the authority — and the responsibility — to stop
              work whenever safety is at risk.
            </p>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-20 bg-mac-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Safety Program"
            title="Built on Three Pillars"
            description="Commitment. Care. Courage. These aren't slogans — they're the behaviors we hire for, train for, and hold each other accountable to."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {safetyPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="bg-mac-gray border border-mac-gray-light rounded-xl p-8 hover:border-mac-red/30 transition-colors duration-300 relative overflow-hidden"
              >
                {/* Large background number */}
                <div className="absolute top-4 right-6 text-8xl font-black text-white/3 select-none leading-none">
                  {index + 1}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-px h-10 bg-mac-red" />
                    <div>
                      <p className="text-mac-red text-xs font-bold uppercase tracking-widest">
                        Pillar {index + 1}
                      </p>
                      <h3 className="text-white text-2xl font-black">{pillar.title}</h3>
                    </div>
                  </div>

                  <p className="text-white font-semibold text-sm mb-3">{pillar.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2.5">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-gray-300 text-sm">
                        <span className="w-4 h-4 rounded bg-mac-red/10 border border-mac-red/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 text-mac-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality commitments */}
      <section className="py-20 bg-mac-gray border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Quality Standards"
            title="Quality Is Not Negotiable"
            description="We apply the same zero-compromise mindset to quality as we do to safety. Our work meets or exceeds all applicable industry codes and client specifications."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Code Compliance',
                desc: 'All welding, piping, and structural work performed to ASME, AWS, and client-specified codes.',
                icon: '⚙',
              },
              {
                title: 'Qualified Workforce',
                desc: 'Craft professionals are verified, tested, and certified before deployment. No shortcuts.',
                icon: '✓',
              },
              {
                title: 'Documentation & Traceability',
                desc: 'Full documentation package provided for all code-quality work, including material certs and WPS.',
                icon: '📋',
              },
              {
                title: 'Client Coordination',
                desc: 'Proactive communication with client QC, inspection, and operations teams throughout every job.',
                icon: '🤝',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-mac-dark border border-mac-gray-light rounded-xl p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-mac-red/10 border border-mac-red/20 flex items-center justify-center text-mac-red flex-shrink-0 font-bold text-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-mac-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions about our safety program?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            We&apos;re proud of our safety culture and happy to discuss it with you in detail.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  )
}
