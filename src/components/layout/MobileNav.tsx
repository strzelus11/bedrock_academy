'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'
import { navLinks } from '@/data/navigation'
import { useEffect } from 'react'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop — z-1000 to cover the fixed header (also z-1000) via DOM order */}
          <motion.div
            key="mobile-nav-backdrop"
            className="fixed inset-0 z-1000 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel — z-1001 ensures it's always above the header */}
          <motion.div
            key="mobile-nav-panel"
            className="fixed right-0 top-0 bottom-0 z-1001 flex w-80 max-w-[85vw] flex-col bg-white shadow-elevated"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu nawigacji"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <span className="font-heading text-lg font-bold text-primary-dark">
                Bedrock Academy
              </span>
              <button
                onClick={onClose}
                aria-label="Zamknij menu"
                className="rounded-sm p-1.5 text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-1 flex-col gap-1 px-4 py-6" aria-label="Główna nawigacja (mobilna)">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + index * 0.04, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center rounded-button px-4 py-3 text-base font-medium text-text-primary transition-colors hover:bg-primary-light/30 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA */}
            <div className="border-t border-border p-6">
              <Link
                href="/kontakt"
                onClick={onClose}
                className="block w-full rounded-button bg-primary py-3 text-center text-base font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Skontaktuj się
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
