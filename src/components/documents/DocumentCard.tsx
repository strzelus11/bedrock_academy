'use client'

import { FileText, Eye, Download } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'
import type { SiteDocument } from '@/types/document'

interface DocumentCardProps {
  document: SiteDocument
  onPreview?: (doc: SiteDocument) => void
}

export function DocumentCard({ document, onPreview }: DocumentCardProps) {
  const isMobile =
    typeof window !== 'undefined' &&
    /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)

  function handlePreview() {
    if (isMobile || !onPreview) {
      // On mobile: open in new tab
      window.open(document.fileUrl, '_blank', 'noopener,noreferrer')
    } else {
      onPreview(document)
    }
  }

  return (
    <div className="group flex flex-col gap-4 rounded-card bg-white border border-border p-6 shadow-soft transition-lift">
      {/* Icon */}
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
          <FileText
            size={28}
            className="text-primary"
            aria-hidden="true"
          />
        </div>
        {document.category && (
          <Badge color="green">{document.category}</Badge>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="mb-1.5 font-heading text-lg font-semibold text-text-primary">
          {document.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {document.description}
        </p>
        {document.updatedAt && (
          <p className="mt-3 text-xs text-text-secondary/70">
            Zaktualizowano: {formatDate(document.updatedAt)}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-2 border-t border-border">
        <button
          onClick={handlePreview}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-button border border-border px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={`Podgląd dokumentu ${document.title}`}
        >
          <Eye size={15} aria-hidden="true" />
          Podgląd
        </button>
        <a
          href={document.fileUrl}
          download
          className="flex flex-1 items-center justify-center gap-1.5 rounded-button bg-primary px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label={`Pobierz dokument ${document.title}`}
        >
          <Download size={15} aria-hidden="true" />
          Pobierz
        </a>
      </div>
    </div>
  )
}
