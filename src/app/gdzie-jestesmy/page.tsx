'use client'

import { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { schools } from '@/data/schools'
import { SchoolList } from '@/components/map/SchoolList'
import { SchoolSearch } from '@/components/map/SchoolSearch'
import { Container } from '@/components/ui/Container'
import { useDebounce } from '@/hooks/useDebounce'
import { MapPin } from 'lucide-react'

const SchoolMap = dynamic(
  () => import('@/components/map/SchoolMap').then((m) => m.SchoolMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-primary-light/20 animate-pulse flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-primary/60">
          <MapPin size={32} aria-hidden="true" />
          <span className="text-sm font-medium">Ładowanie mapy…</span>
        </div>
      </div>
    ),
  },
)

export default function LocationsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedQuery = useDebounce(searchQuery, 250)

  const filteredSchools = useMemo(() => {
    if (!debouncedQuery.trim()) return schools
    const q = debouncedQuery.toLowerCase()
    return schools.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.city.toLowerCase().includes(q) ||
        s.address.toLowerCase().includes(q),
    )
  }, [debouncedQuery])

  function handleSelect(id: string) {
    setSelectedId(id)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* pt-18 clears the fixed header (72px) */}
      <div className="pt-18 bg-background">
        <Container className="py-10">
          <span className="mb-3 inline-block font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            Lokalizacje
          </span>
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl mb-3">
            Gdzie jesteśmy?
          </h1>
          <p className="text-text-secondary max-w-xl leading-relaxed">
            Prowadzimy zajęcia w szkołach podstawowych na terenie Poznania i
            okolic. Kliknij na szkołę, aby zobaczyć szczegóły.
          </p>
        </Container>
      </div>

      {/* Desktop: 40% list | 60% map — explicit 580px height so Leaflet renders correctly */}
      <div className="hidden lg:block pb-16">
        <Container>
          <div className="flex gap-6 h-145">
            {/* List pane */}
            <div className="w-2/5 flex flex-col gap-4 min-h-0">
              <SchoolSearch value={searchQuery} onChange={setSearchQuery} />
              <div className="flex-1 overflow-y-auto pr-1">
                <SchoolList
                  schools={filteredSchools}
                  selectedId={selectedId}
                  onSelect={handleSelect}
                />
              </div>
            </div>

            {/* Map pane — isolate creates a stacking context that contains Leaflet's internal z-indexes */}
            <div className="w-3/5 h-full rounded-card overflow-hidden shadow-card isolate">
              <SchoolMap
                schools={schools}
                selectedId={selectedId}
                onSchoolSelect={handleSelect}
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile: search → map → list */}
      <div className="flex flex-col gap-5 lg:hidden pb-16">
        <Container>
          <SchoolSearch value={searchQuery} onChange={setSearchQuery} />
          <div className="h-72 sm:h-96 rounded-card overflow-hidden shadow-card isolate mt-4">
            <SchoolMap
              schools={schools}
              selectedId={selectedId}
              onSchoolSelect={handleSelect}
            />
          </div>
          <div className="mt-4">
            <SchoolList
              schools={filteredSchools}
              selectedId={selectedId}
              onSelect={handleSelect}
            />
          </div>
        </Container>
      </div>
    </div>
  )
}
