'use client'

import { SchoolCard } from './SchoolCard'
import type { School } from '@/types/school'

interface SchoolListProps {
  schools: School[]
  selectedId: string | null
  onSelect: (id: string) => void
}

export function SchoolList({ schools, selectedId, onSelect }: SchoolListProps) {
  if (schools.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-sm font-medium text-text-secondary">
          Brak wyników dla tej frazy.
        </p>
        <p className="mt-1 text-xs text-text-secondary/70">
          Spróbuj wyszukać inaczej.
        </p>
      </div>
    )
  }

  return (
    <ul
      className="flex flex-col gap-2"
      role="list"
      aria-label="Lista szkół"
    >
      {schools.map((school) => (
        <li key={school.id}>
          <SchoolCard
            school={school}
            isSelected={school.id === selectedId}
            onClick={() => onSelect(school.id)}
          />
        </li>
      ))}
    </ul>
  )
}
