import Link from 'next/link'
import Image from 'next/image'
import { navLinks, contact } from '@/lib/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-mac-gray border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-6" aria-label="MAC Industrial Services Home">
              <Image
                src="/media/logo/mac-logo.png"
                alt="MAC Industrial Services logo"
                width={260}
                height={104}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-mac-red text-xs font-semibold uppercase tracking-widest mb-3">
              Optimizing Performance • Improving Reliability • Extending Asset Lifetime
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              MAC Industrial Services delivers expert industrial maintenance, outage services,
              welding & fabrication, and emergency response to power generation, manufacturing,
              and infrastructure facilities across the nation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-white text-sm font-semibold">{contact.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{contact.title}</p>
              </div>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-200 group"
              >
                <span className="w-4 h-4 text-mac-red">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-200 group break-all"
              >
                <span className="w-4 h-4 text-mac-red flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {currentYear} MAC Industrial Services. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1 h-4 bg-mac-red" />
            <p className="text-gray-600 text-xs ml-1">
              Safety • Quality • Reliability
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
