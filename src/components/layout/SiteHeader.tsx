'use client'

import { useState, useLayoutEffect, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, Leaf } from 'lucide-react'
import { navLinks } from '@/data/navigation'
import { MobileNav } from './MobileNav'
import { cn } from '@/lib/utils'

const DARK_HERO_PAGES = new Set(['/', '/o-nas'])

// On the server this module runs in Node — window doesn't exist, so we fall back
// to useEffect (which is a no-op on the server). On the client this evaluates to
// useLayoutEffect, which fires synchronously BEFORE the browser paints, so the
// correct scroll state is already committed when the first pixel is drawn.
// This eliminates the flash where useEffect fires after paint and causes a jump.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

const SCROLL_THRESHOLD = 20 // px — also guards against iOS rubber-band negative scrollY

export function SiteHeader() {
  // True = frosted glass (safe initial state for both SSR and first client render).
  // useIsomorphicLayoutEffect immediately corrects to the real scroll position
  // before the browser paints, so the user never sees a wrong state flash.
  const [scrolled, setScrolled] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const overDarkHero = DARK_HERO_PAGES.has(pathname) && !scrolled

  useIsomorphicLayoutEffect(() => {
    function handleScroll() {
      setScrolled(Math.max(0, window.scrollY) > SCROLL_THRESHOLD)
    }
    handleScroll() // set correct state synchronously before first paint
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/*
        No overflow-hidden here — it would clip the box-shadow on the frosted glass layer
        (absolutely positioned children's shadows are clipped by overflow:hidden on the parent).
        The background layers are absolute inset-0 so they stay within bounds without clipping.
      */}
      <header className="fixed top-0 left-0 right-0 z-1000 h-18">

        {/*
          WHY TWO LAYERS instead of toggling classes on a single element:
          CSS cannot cross-fade between background-image (gradient) and background-color (white).
          They are different CSS properties, so transition-all fails silently and the background
          jumps instantly to the new state — causing a fully-transparent frame while text
          colors are still mid-transition (the "disappearing" bug).

          Keeping both layers always in the DOM and animating ONLY their opacity gives CSS a
          single property to interpolate, which it always handles correctly.
        */}

        {/* Layer 1: frosted glass — fully visible when NOT over dark hero */}
        <div
          className="pointer-events-none absolute inset-0 bg-white/92 backdrop-blur-md border-b border-border shadow-soft transition-opacity duration-300"
          style={{ opacity: overDarkHero ? 0 : 1 }}
          aria-hidden="true"
        />

        {/* Layer 2: hero gradient — fully visible when over dark hero at scroll-top */}
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/30 to-transparent transition-opacity duration-300"
          style={{ opacity: overDarkHero ? 1 : 0 }}
          aria-hidden="true"
        />

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
