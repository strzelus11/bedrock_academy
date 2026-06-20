'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import type { SiteDocument } from '@/types/document'

interface PdfPreviewModalProps {
  document: SiteDocument | null
  onClose: () => void
}

export function PdfPreviewModal({ document, onClose }: PdfPreviewModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const isOpen = !!document

  // Focus trap + keyboard handling
  useEffect(() => {
    if (!isOpen) return

    const previouslyFocused = window.document.activeElement as HTMLElement

    // Focus close button on open
    setTimeout(() => closeButtonRef.current?.focus(), 50)

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    // Lock scroll
    window.document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.document.body.style.overflow = ''
      previouslyFocused?.focus?.()
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && document && (
        <>
          {/* Backdrop — above site header (z-1000) */}
          <motion.div
            key="pdf-modal-backdrop"
            className="fixed inset-0 z-1010 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal — above backdrop */}
          <motion.div
            key="pdf-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pdf-modal-title"
            className="fixed inset-4 z-1020 flex flex-col overflow-hidden rounded-card bg-white shadow-elevated md:inset-8 lg:inset-12"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4 shrink-0">
              <h2
                id="pdf-modal-title"
                className="font-heading text-base font-semibold text-text-primary truncate mr-4"
              >
                {document.title}
              </h2>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Zamknij podgląd"
                className="shrink-0 flex items-center justify-center rounded-button p-2 text-text-secondary transition-colors hover:bg-slate-100 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            {/* PDF iframe */}
            <div className="flex-1 bg-slate-100">
              <iframe
                src={document.fileUrl}
                title={`Podgląd: ${document.title}`}
                className="h-full w-full border-0"
                aria-label={`Podgląd dokumentu PDF: ${document.title}`}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
