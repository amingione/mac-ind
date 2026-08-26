import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Contact MAC Industrial Services for industrial maintenance, outage support, specialty welding, emergency response, and project staffing.',
  path: '/contact',
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
