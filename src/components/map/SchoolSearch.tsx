'use client'

import { Search, X } from 'lucide-react'

interface SchoolSearchProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SchoolSearch({
  value,
  onChange,
  placeholder = 'Szukaj szkoły lub miejscowości…',
}: SchoolSearchProps) {
  return (
    <div className="relative">
      <Search
        size={17}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary/60 pointer-events-none"
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Wyszukaj szkołę"
        className="w-full rounded-xl border border-border bg-white py-2.5 pl-10 pr-10 text-sm text-text-primary placeholder:text-text-secondary/60 transition-colors hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          aria-label="Wyczyść wyszukiwanie"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary/60 hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
        >
          <X size={15} aria-hidden="true" />
        </button>
      )}
    </div>
  )
}
