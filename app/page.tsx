import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import ServicesOverview from '@/components/home/ServicesOverview'
import CapabilitiesGrid from '@/components/home/CapabilitiesGrid'
import ClientsSection from '@/components/home/ClientsSection'
import CTASection from '@/components/home/CTASection'
import JsonLd from '@/components/seo/JsonLd'
import { createPageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/site'
import { siteStructuredData } from '@/lib/structured-data'

export const metadata: Metadata = createPageMetadata({
  title: 'MAC Industrial Services | Industrial Maintenance & Outage Services',
  description: siteConfig.description,
  path: '/',
  absoluteTitle: true,
})

export default function HomePage() {
  return (
    <>
      <JsonLd data={siteStructuredData} />
      <Hero />
      <StatsBar />
      <ServicesOverview />
      <CapabilitiesGrid />
      <ClientsSection />
      <CTASection />
    </>
  )
}
