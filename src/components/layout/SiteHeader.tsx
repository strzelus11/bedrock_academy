'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, Leaf } from 'lucide-react'
import { navLinks } from '@/data/navigation'
import { MobileNav } from './MobileNav'
import { cn } from '@/lib/utils'

const DARK_HERO_PAGES = new Set(['/', '/o-nas'])

export function SiteHeader() {
  // Start as "scrolled" (frosted glass) so SSR and first client render always match.
  // useEffect corrects immediately based on real scroll position.
  const [scrolled, setScrolled] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const overDarkHero = DARK_HERO_PAGES.has(pathname) && !scrolled

  useEffect(() => {
    function handleScroll() {
      // Math.max(0, …) prevents iOS rubber-band negative scrollY from triggering a switch
      setScrolled(Math.max(0, window.scrollY) > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-1000 h-18 overflow-hidden">

        {/*
          WHY TWO LAYERS: CSS cannot transition between background-image (gradient) and
          background-color (white) — they are different properties. When toggling a single
          element's classes, the background jumps instantly causing a transparent-flash frame
          while text colors are mid-transition. Solution: always keep both layers in the DOM
          and cross-fade them via opacity only, which CSS animates perfectly.
        */}

        {/* Layer 1: frosted glass — fades IN when scrolled or on non-hero pages */}
        <div
          className="pointer-events-none absolute inset-0 bg-white/92 backdrop-blur-md border-b border-border shadow-soft transition-opacity duration-300"
          style={{ opacity: overDarkHero ? 0 : 1 }}
          aria-hidden="true"
        />

        {/* Layer 2: hero gradient — fades IN when over dark hero at scroll-top */}
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/30 to-transparent transition-opacity duration-300"
          style={{ opacity: overDarkHero ? 1 : 0 }}
          aria-hidden="true"
        />

        {/* Content sits above both background layers */}
        <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            aria-label="Bedrock Academy — strona główna"
          >
            <div
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300',
                overDarkHero
                  ? 'bg-white/20 text-white border border-white/30 group-hover:bg-white/30'
                  : 'bg-primary text-white group-hover:bg-primary-dark',
              )}
            >
              <Leaf size={20} aria-hidden="true" />
            </div>
            <span
              className={cn(
                'font-heading text-lg font-bold transition-colors duration-300',
                overDarkHero ? 'text-white' : 'text-primary-dark',
              )}
            >
              Bedrock Academy
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Główna nawigacja">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-button px-4 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                  overDarkHero
                    ? 'text-white/90 hover:bg-white/15 hover:text-white'
                    : 'text-text-secondary hover:bg-primary-light/30 hover:text-primary',
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className={cn(
                'ml-3 rounded-button px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                overDarkHero
                  ? 'border border-white/60 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 focus-visible:ring-white'
                  : 'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary',
              )}
            >
              Skontaktuj się
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Otwórz menu"
            aria-expanded={mobileOpen}
            className={cn(
              'flex items-center justify-center rounded-button p-2 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden',
              overDarkHero
                ? 'text-white hover:text-white/80'
                : 'text-text-secondary hover:text-primary',
            )}
          >
            <Menu size={26} aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
