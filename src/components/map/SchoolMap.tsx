'use client'

import { useEffect, useRef } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { School } from '@/types/school'
import { SchoolPopup } from './SchoolPopup'

// Fix Leaflet default icon issue in Next.js / webpack
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: '/leaflet/marker-icon.png',
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  shadowUrl: '/leaflet/marker-shadow.png',
})

// Custom green marker icon
const greenIcon = new L.Icon({
  iconUrl: '/leaflet/marker-icon.png',
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  shadowUrl: '/leaflet/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  className: 'leaflet-marker-green',
})

const selectedIcon = new L.Icon({
  iconUrl: '/leaflet/marker-icon.png',
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  shadowUrl: '/leaflet/marker-shadow.png',
  iconSize: [30, 48],
  iconAnchor: [15, 48],
  popupAnchor: [1, -40],
  shadowSize: [48, 48],
  className: 'leaflet-marker-selected',
})

interface FlyToSchoolProps {
  school: School | null
}

function FlyToSchool({ school }: FlyToSchoolProps) {
  const map = useMap()
  const prevIdRef = useRef<string | null>(null)

  useEffect(() => {
    if (school && school.id !== prevIdRef.current) {
      map.flyTo([school.latitude, school.longitude], 14, {
        duration: 1.2,
        easeLinearity: 0.25,
      })
      prevIdRef.current = school.id
    }
  }, [school, map])

  return null
}

interface SchoolMapProps {
  schools: School[]
  selectedId: string | null
  onSchoolSelect: (id: string) => void
}

export function SchoolMap({ schools, selectedId, onSchoolSelect }: SchoolMapProps) {
  const selectedSchool = schools.find((s) => s.id === selectedId) ?? null

  return (
    <div className="relative h-full w-full rounded-card overflow-hidden shadow-card">
      <MapContainer
        center={[52.4064, 16.9252]}
        zoom={11}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom
        aria-label="Mapa lokalizacji szkół Bedrock Academy"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <FlyToSchool school={selectedSchool} />

        {schools.map((school) => (
          <Marker
            key={school.id}
            position={[school.latitude, school.longitude]}
            icon={school.id === selectedId ? selectedIcon : greenIcon}
            eventHandlers={{
              click: () => onSchoolSelect(school.id),
            }}
            aria-label={school.name}
          >
            <Popup>
              <SchoolPopup school={school} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Map attribution override for dark/green style */}
      <style>{`
        .leaflet-marker-green {
          filter: hue-rotate(90deg) saturate(1.4);
        }
        .leaflet-marker-selected {
          filter: hue-rotate(90deg) saturate(1.8) brightness(1.1);
          z-index: 1000 !important;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
          border: 1px solid rgba(62, 124, 58, 0.15);
          box-shadow: 0 8px 32px rgba(31, 61, 43, 0.12);
          padding: 0;
          overflow: hidden;
        }
        .leaflet-popup-content {
          margin: 0;
          width: auto !important;
        }
        .leaflet-popup-tip {
          background: white;
        }
      `}</style>
    </div>
  )
}
