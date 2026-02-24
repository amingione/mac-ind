import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import ServicesOverview from '@/components/home/ServicesOverview'
import CapabilitiesGrid from '@/components/home/CapabilitiesGrid'
import ClientsSection from '@/components/home/ClientsSection'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesOverview />
      <CapabilitiesGrid />
      <ClientsSection />
      <CTASection />
    </>
  )
}
