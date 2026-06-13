import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface GlassPanelProps {
  children: ReactNode
  className?: string
  dark?: boolean
}

export function GlassPanel({ children, className, dark = false }: GlassPanelProps) {
  return (
    <div
      className={cn(dark ? 'glass-dark' : 'glass', 'shadow-card', className)}
      style={{
        background: dark
          ? 'rgba(31, 61, 43, 0.72)'
          : 'rgba(255, 255, 255, 0.82)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderRadius: '24px',
      }}
    >
      {children}
    </div>
  )
}
