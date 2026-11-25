// Dokumenty — pliki PDF znajdują się w katalogu /public/documents/
import type { SiteDocument } from '@/types/document'

export const documents: SiteDocument[] = [
  {
    id: 'umowa',
    title: 'Umowa o świadczenie usług edukacyjnych',
    description:
      'Umowa określająca warunki zajęć z programowania z wykorzystaniem Minecraft Education, w tym zgodę i klauzulę informacyjną RODO.',
    fileUrl: '/documents/umowa-o-swiadczenie-uslug-edukacyjnych.pdf',
    category: 'Prawne',
    updatedAt: '2026-11-13',
  },
  {
    id: 'som-pelna',
    title: 'Standardy Ochrony Małoletnich',
    description:
      'Pełna wersja Standardów Ochrony Małoletnich w Bedrock Academy — zasady bezpiecznych relacji, procedury interwencyjne oraz zasady ochrony danych i wizerunku dzieci.',
    fileUrl: '/documents/standardy-ochrony-maloletnich.pdf',
    category: 'Bezpieczeństwo',
    updatedAt: '2026-11-25',
  },
  {
    id: 'som-dzieci',
    title: 'Standardy Ochrony Małoletnich — wersja dla dzieci',
    description:
      'Wersja skrócona Standardów Ochrony Małoletnich, napisana prostym językiem dla najmłodszych uczestników zajęć.',
    fileUrl: '/documents/standardy-ochrony-maloletnich-dla-dzieci.pdf',
    category: 'Bezpieczeństwo',
    updatedAt: '2026-11-25',
  },
]

export function getDocuments(): SiteDocument[] {
  return documents
}

export function getDocumentById(id: string): SiteDocument | undefined {
  return documents.find((d) => d.id === id)
}
