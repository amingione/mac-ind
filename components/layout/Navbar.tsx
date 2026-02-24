'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/lib/data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-mac-dark/95 backdrop-blur-sm border-b border-white/5 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="MAC Industrial Services Home">
            <Image
              src="/media/logo/mac-logo.png"
              alt="MAC Industrial Services logo"
              width={180}
              height={72}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-200 relative group ${
                    isActive ? 'text-mac-red' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-mac-red transition-all duration-200 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex btn-primary text-xs"
            >
              Get In Touch
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className="block w-6 h-px bg-white mb-1.5 transition-all duration-200" />
              <span
                className={`block w-4 h-px bg-mac-red mb-1.5 transition-all duration-200 ${
                  isOpen ? 'w-6' : ''
                }`}
              />
              <span className="block w-6 h-px bg-white transition-all duration-200" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="pt-4 mt-2 border-t border-white/10 bg-mac-dark/95 backdrop-blur-sm rounded-md flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-3 text-sm font-semibold uppercase tracking-widest rounded transition-colors duration-200 ${
                    isActive
                      ? 'text-mac-red bg-mac-red/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="btn-primary mt-4 justify-center text-xs"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
