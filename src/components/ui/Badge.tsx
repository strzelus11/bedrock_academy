import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type BadgeColor = 'green' | 'blue' | 'gray' | 'amber' | 'red'

interface BadgeProps {
  children: ReactNode
  color?: BadgeColor
  className?: string
}

const colorStyles: Record<BadgeColor, string> = {
  green: 'bg-primary-light/40 text-primary-dark border-primary-light',
  blue: 'bg-accent-blue/10 text-accent-blue border-accent-blue/30',
  gray: 'bg-slate-100 text-text-secondary border-slate-200',
  amber: 'bg-amber-50 text-amber-700 border-amber-200',
  red: 'bg-red-50 text-red-700 border-red-200',
}

export function Badge({ children, color = 'green', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
        colorStyles[color],
        className,
      )}
    >
      {children}
    </span>
  )
}
