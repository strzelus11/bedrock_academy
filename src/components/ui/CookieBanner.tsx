'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'

const STORAGE_KEY = 'bedrock_cookie_consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY)
      if (!consent) {
        setVisible(true)
      }
    } catch {
      // localStorage not available (SSR or privacy mode)
    }
  }, [])

  function handleAccept() {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted')
    } catch {
      // ignore
    }
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          role="dialog"
          aria-live="polite"
          aria-label="Informacja o plikach cookies"
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl"
        >
          <div className="glass shadow-elevated flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-4 sm:p-5">
            <p className="flex-1 text-sm text-text-secondary">
              Ta strona używa plików cookies w celu zapewnienia prawidłowego
              działania serwisu. Dowiedz się więcej w{' '}
              <Link
                href="/polityka-prywatnosci"
                className="text-primary font-medium underline underline-offset-2 hover:text-primary-dark"
              >
                Polityce prywatności
              </Link>
              .
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleAccept}
                className="rounded-button bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Akceptuję
              </button>
              <button
                onClick={handleAccept}
                aria-label="Zamknij baner cookies"
                className="rounded-button p-2 text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
