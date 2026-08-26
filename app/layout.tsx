import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/lib/site'
import { siteStructuredData } from '@/lib/structured-data'

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
    images: [
      {
        url: '/media/logo/mac-logo.png',
        width: 1024,
        height: 1024,
        alt: 'MAC Industrial Services logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAC Industrial Services',
    description:
      'Optimizing Performance • Improving Reliability • Extending Asset Lifetime',
    images: ['/media/logo/mac-logo.png'],
  },
  icons: {
    icon: '/media/logo/mac-logo.png',
    shortcut: '/media/logo/mac-logo.png',
    apple: '/media/logo/mac-logo.png',
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
        <JsonLd data={siteStructuredData} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
