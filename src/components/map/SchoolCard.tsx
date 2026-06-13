'use client'

import { MapPin, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { School } from '@/types/school'

interface SchoolCardProps {
  school: School
  isSelected?: boolean
  onClick?: () => void
}

export function SchoolCard({ school, isSelected, onClick }: SchoolCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left rounded-xl border p-4 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        isSelected
          ? 'border-primary bg-primary/5 shadow-soft'
          : 'border-border bg-white hover:border-primary/40 hover:bg-primary/3 shadow-soft',
      )}
      aria-pressed={isSelected}
      aria-label={`${school.name}, ${school.city}`}
    >
      <div className="flex items-start gap-3">
        {/* Marker indicator */}
        <div
          className={cn(
            'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors',
            isSelected ? 'bg-primary text-white' : 'bg-primary/10 text-primary',
          )}
        >
          <MapPin size={15} aria-hidden="true" />
        </div>

        <div className="flex-1 min-w-0">
          <h3
            className={cn(
              'font-heading text-sm font-semibold leading-snug mb-0.5 truncate',
              isSelected ? 'text-primary-dark' : 'text-text-primary',
            )}
          >
            {school.name}
          </h3>
          <p className="text-xs text-text-secondary truncate">
            {school.address}, {school.city}
          </p>

          {school.scheduleNote && (
            <div className="mt-2 flex items-center gap-1.5">
              <Clock size={12} className="text-primary shrink-0" aria-hidden="true" />
              <span className="text-xs font-medium text-primary">
                {school.scheduleNote}
              </span>
            </div>
          )}

          {school.note && isSelected && (
            <p className="mt-1.5 text-xs text-text-secondary/80 italic leading-relaxed">
              {school.note}
            </p>
          )}
        </div>
      </div>
    </button>
  )
}
