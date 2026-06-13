// Dokumenty — pliki PDF należy umieścić w katalogu /public/documents/
// Zamień fileUrl na właściwe ścieżki po dodaniu plików
import type { SiteDocument } from '@/types/document'

export const documents: SiteDocument[] = [
  {
    id: 'regulamin',
    title: 'Regulamin zajęć',
    description:
      'Zasady uczestnictwa w zajęciach, prawa i obowiązki uczestników oraz rodziców.',
    fileUrl: '/documents/placeholder.pdf',
    category: 'Regulaminy',
    updatedAt: '2024-09-01',
  },
  {
    id: 'rodo',
    title: 'Zgoda RODO',
    description:
      'Zgoda na przetwarzanie danych osobowych dziecka w celach związanych z uczestnictwem w zajęciach.',
    fileUrl: '/documents/placeholder.pdf',
    category: 'Prawne',
    updatedAt: '2024-09-01',
  },
  {
    id: 'umowa',
    title: 'Umowa z rodzicami',
    description:
      'Umowa określająca warunki współpracy między Bedrock Academy a rodzicami / opiekunami dziecka.',
    fileUrl: '/documents/placeholder.pdf',
    category: 'Prawne',
    updatedAt: '2024-09-01',
  },
  {
    id: 'program',
    title: 'Program zajęć',
    description:
      'Szczegółowy program nauczania z podziałem na semestry i poziomy zaawansowania.',
    fileUrl: '/documents/placeholder.pdf',
    category: 'Edukacja',
    updatedAt: '2024-09-01',
  },
  {
    id: 'cennik',
    title: 'Cennik 2024/2025',
    description:
      'Aktualne ceny zajęć indywidualnych i grupowych na rok szkolny 2024/2025.',
    fileUrl: '/documents/placeholder.pdf',
    category: 'Cennik',
    updatedAt: '2024-09-01',
  },
]

export function getDocuments(): SiteDocument[] {
  return documents
}

export function getDocumentById(id: string): SiteDocument | undefined {
  return documents.find((d) => d.id === id)
}
