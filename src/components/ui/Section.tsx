import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type PaddingSize = 'sm' | 'md' | 'lg'
type Background = 'default' | 'white' | 'dark' | 'light' | 'none'

interface SectionProps {
  children: ReactNode
  className?: string
  padding?: PaddingSize
  background?: Background
  id?: string
}

const paddingStyles: Record<PaddingSize, string> = {
  sm: 'py-10 md:py-14',
  md: 'py-16 md:py-24',
  lg: 'py-24 md:py-32',
}

const backgroundStyles: Record<Background, string> = {
  default: 'bg-background',
  white: 'bg-white',
  dark: 'bg-primary-dark text-white',
  light: 'bg-primary-light/20',
  none: '',
}

export function Section({
  children,
  className,
  padding = 'md',
  background = 'default',
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(paddingStyles[padding], backgroundStyles[background], className)}
    >
      {children}
    </section>
  )
}
