import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Industrial Resources',
  description:
    'Download MAC Industrial Services capability sheets, safety documents, technical references, planning templates, and company information.',
  path: '/resources',
})

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
