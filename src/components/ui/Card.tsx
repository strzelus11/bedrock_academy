import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type PaddingVariant = 'none' | 'sm' | 'md' | 'lg'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: PaddingVariant
  hover?: boolean
  glass?: boolean
}

const paddingStyles: Record<PaddingVariant, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function Card({
  children,
  className,
  padding = 'md',
  hover = false,
  glass = false,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card border overflow-hidden',
        glass
          ? 'glass shadow-card'
          : 'bg-card-bg border-border shadow-soft',
        hover && 'transition-lift cursor-pointer',
        paddingStyles[padding],
        className,
      )}
    >
      {children}
    </div>
  )
}
