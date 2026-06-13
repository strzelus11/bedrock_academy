'use client'

import { useState } from 'react'
import { DocumentCard } from '@/components/documents/DocumentCard'
import { PdfPreviewModal } from '@/components/documents/PdfPreviewModal'
import type { SiteDocument } from '@/types/document'

interface DocumentsClientProps {
  documents: SiteDocument[]
}

export function DocumentsClient({ documents }: DocumentsClientProps) {
  const [previewDoc, setPreviewDoc] = useState<SiteDocument | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc) => (
          <DocumentCard
            key={doc.id}
            document={doc}
            onPreview={(d) => setPreviewDoc(d)}
          />
        ))}
      </div>

      <PdfPreviewModal
        document={previewDoc}
        onClose={() => setPreviewDoc(null)}
      />
    </>
  )
}
