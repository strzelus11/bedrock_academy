import type { Metadata } from 'next'
import { getDocuments } from '@/data/documents'
import { DocumentsClient } from './DocumentsClient'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Dokumenty',
  description:
    'Regulaminy, umowy, zgody RODO, program zajęć i cennik Bedrock Academy — wszystkie dokumenty do pobrania.',
  openGraph: {
    title: 'Dokumenty | Bedrock Academy',
    description:
      'Wszystkie dokumenty Bedrock Academy — regulaminy, umowy, zgody RODO i cennik.',
    url: '/dokumenty',
  },
}

export default function DocumentsPage() {
  const documents = getDocuments()

  return (
    <div className="pt-24 pb-20">
      <Container>
        {/* Page header */}
        <div className="mb-12">
          <span className="mb-3 inline-block font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            Do pobrania
          </span>
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl mb-4">
            Dokumenty
          </h1>
          <p className="text-text-secondary max-w-xl leading-relaxed">
            Poniżej znajdziesz wszystkie dokumenty związane z zajęciami. Możesz je
            przejrzeć w podglądzie lub pobrać na swoje urządzenie.
          </p>
        </div>

        <DocumentsClient documents={documents} />
      </Container>
    </div>
  )
}
