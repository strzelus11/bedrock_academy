'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark border border-primary shadow-soft',
  secondary:
    'bg-primary-light text-primary-dark hover:bg-primary hover:text-white border border-primary-light',
  outline:
    'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white',
  ghost:
    'bg-transparent text-text-secondary hover:text-primary hover:bg-primary-light/30 border border-transparent',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
}

interface ButtonBaseProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
  disabled?: boolean
  loading?: boolean
  href?: string
  external?: boolean
}

type ButtonProps = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof ButtonBaseProps>

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  disabled,
  loading,
  href,
  external,
  ...props
}: ButtonProps) {
  const baseClass = cn(
    'inline-flex items-center justify-center font-semibold rounded-button transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 select-none',
    variantStyles[variant],
    sizeStyles[size],
    (disabled || loading) && 'opacity-60 pointer-events-none',
    className,
  )

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </>
  )

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
          whileHover={{ translateY: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
        >
          {content}
        </motion.a>
      )
    }
    return (
      <motion.div
        whileHover={{ translateY: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
        style={{ display: 'inline-block' }}
      >
        <Link href={href} className={baseClass}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      className={baseClass}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { translateY: -2 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.97 } : {}}
      transition={{ duration: 0.15 }}
      {...(props as HTMLMotionProps<'button'>)}
    >
      {content}
    </motion.button>
  )
}
