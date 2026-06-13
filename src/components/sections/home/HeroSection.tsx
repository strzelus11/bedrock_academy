'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { company } from '@/data/company'
import { Container } from '@/components/ui/Container'
import { ArrowRight, MapPin } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

export function HeroSection() {
  return (
    <section
      className="relative min-h-dvh overflow-hidden flex flex-col justify-end"
      style={{ backgroundColor: '#0a1811' }}
    >
      {/* Background image
          sizes: on mobile request ~200vw so browser picks the 1920px srcset entry
          (landscape image scaled to fill portrait viewport = wider than screen)
          object-position: user-tuned 83% horizontal on mobile to show characters + building */}
      <Image
        src="/image.png"
        alt=""
        fill
        priority
        quality={90}
        sizes="(max-width: 640px) 200vw, 100vw"
        className="object-cover object-[83%_50%] sm:object-[60%_50%] lg:object-center"
        aria-hidden="true"
      />

      {/* Main overlay: heavy at bottom for text, dissolves to nothing at top so
          the Minecraft scene shows fully in the upper 60%+ of the hero */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(10,24,17,0.97) 0%, rgba(10,24,17,0.80) 28%, rgba(10,24,17,0.40) 58%, rgba(10,24,17,0.08) 82%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Top vignette — makes header icons readable against bright sky */}
      <div
        className="absolute inset-x-0 top-0 h-36"
        style={{ background: 'linear-gradient(to bottom, rgba(10,24,17,0.60), transparent)' }}
        aria-hidden="true"
      />

      {/* Bottom fade into page background color */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: 'linear-gradient(to bottom, transparent, #F6F8F2)' }}
        aria-hidden="true"
      />

      {/* Content anchored to bottom — image shows freely above */}
      <Container className="relative z-10 pb-16 md:pb-24">
        <motion.div
          className="max-w-2xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] mb-5">
              <span className="h-2 w-2 rounded-full bg-primary-light animate-pulse" aria-hidden="true" />
              Poznań i okolice
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance mb-5"
          >
            Programowanie dla dzieci{' '}
            <span className="text-primary-light">poprzez zabawę</span>
          </motion.h1>

          {/* Description — hidden on mobile to keep content footprint small so more
              of the Minecraft scene is visible above; shown on sm+ where there's room */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:block text-lg text-white/80 leading-relaxed mb-10 max-w-lg"
          >
            {company.shortDescription}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-0"
          >
            <Link
              href="/o-nas"
              className="inline-flex items-center justify-center gap-2 rounded-button bg-white px-6 py-3.5 text-base font-semibold text-primary-dark shadow-elevated transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-primary-light hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Dowiedz się więcej
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/gdzie-jestesmy"
              className="inline-flex items-center justify-center gap-2 rounded-button border border-white/50 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/20 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              <MapPin size={18} aria-hidden="true" />
              Dostępne lokalizacje
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
