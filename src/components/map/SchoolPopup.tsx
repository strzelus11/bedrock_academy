// Note: No Framer Motion inside Leaflet popups — plain HTML/React only
import type { School } from '@/types/school'

interface SchoolPopupProps {
  school: School
}

export function SchoolPopup({ school }: SchoolPopupProps) {
  return (
    <div
      style={{
        padding: '12px 16px',
        minWidth: '200px',
        maxWidth: '260px',
        fontFamily: 'var(--font-inter, Inter, system-ui, sans-serif)',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-poppins, Poppins, system-ui, sans-serif)',
          fontWeight: 700,
          fontSize: '14px',
          color: '#1F3D2B',
          marginBottom: '4px',
          lineHeight: 1.3,
        }}
      >
        {school.name}
      </h3>
      <p
        style={{
          fontSize: '12px',
          color: '#64748B',
          marginBottom: '2px',
        }}
      >
        {school.address}
      </p>
      <p
        style={{
          fontSize: '12px',
          color: '#64748B',
          marginBottom: school.scheduleNote || school.note ? '8px' : '0',
        }}
      >
        {school.city}
      </p>
      {school.scheduleNote && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginTop: '6px',
            padding: '4px 8px',
            backgroundColor: 'rgba(184, 216, 168, 0.3)',
            borderRadius: '6px',
          }}
        >
          <span style={{ fontSize: '11px', color: '#3E7C3A', fontWeight: 600 }}>
            {school.scheduleNote}
          </span>
        </div>
      )}
      {school.note && (
        <p
          style={{
            fontSize: '11px',
            color: '#94A3B8',
            marginTop: '6px',
            lineHeight: 1.4,
            fontStyle: 'italic',
          }}
        >
          {school.note}
        </p>
      )}
    </div>
  )
}
