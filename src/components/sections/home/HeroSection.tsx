'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { company } from '@/data/company'
import { Container } from '@/components/ui/Container'
import { ArrowRight, MapPin } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export function HeroSection() {
  return (
    <section
      className="relative min-h-dvh overflow-hidden flex flex-col justify-between"
      style={{
        backgroundColor: '#0a1811',
        // Pull the section 1px into the next section so there is no subpixel gap between
        // the compositing layers (hero image layer vs the white section below).
        marginBottom: '-1px',
      }}
    >
      {/* Background image */}
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

      {/*
        Pillar gradient: dark at the top (badge + H1 readable) → transparent in the
        middle (characters + coding screen fully visible) → dark at the bottom (CTAs
        readable). The image scene fills the full hero height; text frames it.
      */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,24,17,0.93) 0%, rgba(10,24,17,0.68) 14%, rgba(10,24,17,0.22) 34%, rgba(10,24,17,0.06) 52%, rgba(10,24,17,0.06) 60%, rgba(10,24,17,0.20) 70%, rgba(10,24,17,0.62) 84%, rgba(10,24,17,0.90) 100%)',
        }}
        aria-hidden="true"
      />

      {/*
        Bottom fade uses rgba(255,255,255,0) not `transparent`.
        CSS `transparent` = rgba(0,0,0,0) which causes the gradient to pass through
        a dark/grey midpoint, creating the hairline "border" at the section boundary.
        rgba(255,255,255,0) keeps the entire fade in the white spectrum → seamless join.
      */}
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0), #ffffff)' }}
        aria-hidden="true"
      />

      {/* ── TOP: badge + headline ── */}
      <Container className="relative z-10 pt-24 md:pt-32">
        <motion.div
          className="max-w-2xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] mb-5">
              <span className="h-2 w-2 rounded-full bg-primary-light animate-pulse" aria-hidden="true" />
              Poznań i okolice
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance mb-6"
          >
            Programowanie dla dzieci{' '}
            <span className="text-primary-light">poprzez zabawę</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:block text-lg text-white/80 leading-relaxed max-w-lg"
          >
            {company.shortDescription}
          </motion.p>
        </motion.div>
      </Container>

      {/* ── BOTTOM: CTAs ── */}
      <Container className="relative z-10 pb-14 md:pb-20">
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
            className="inline-flex items-center justify-center gap-2 rounded-button border border-white/60 bg-white/15 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/25 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <MapPin size={18} aria-hidden="true" />
            Dostępne lokalizacje
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
