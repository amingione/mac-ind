import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'MAC Industrial Services | Industrial Maintenance & Outage Services',
    template: '%s | MAC Industrial Services',
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  keywords: [
    'industrial maintenance',
    'outage services',
    'welding fabrication',
    'boiler tube repair',
    'air preheater',
    'PWHT',
    'P91 welding',
    'emergency response',
    'capital projects',
    'resource solutions',
  ],
  openGraph: {
    title: 'MAC Industrial Services',
    description:
      'Optimizing Performance • Improving Reliability • Extending Asset Lifetime',
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.socialImage,
        width: 2048,
        height: 1536,
        alt: 'Industrial power facility served by MAC Industrial Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAC Industrial Services',
    description:
      'Optimizing Performance • Improving Reliability • Extending Asset Lifetime',
    images: [siteConfig.socialImage],
  },
  icons: {
    icon: '/media/logo/mac-logo-display.png',
    shortcut: '/media/logo/mac-logo-display.png',
    apple: '/media/logo/mac-logo-display.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B9NSMY1RXP"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B9NSMY1RXP');
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
