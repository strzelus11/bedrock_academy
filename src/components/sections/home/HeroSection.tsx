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

      {/* Base tint — takes the edge off the bright Minecraft golden-hour scene uniformly */}
      <div className="absolute inset-0 bg-primary-dark/20" aria-hidden="true" />

      {/* Pillar gradient: dark top (text) → transparent mid (characters) → dark bottom (CTAs) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,24,17,0.95) 0%, rgba(10,24,17,0.90) 10%, rgba(10,24,17,0.78) 22%, rgba(10,24,17,0.55) 38%, rgba(10,24,17,0.22) 52%, rgba(10,24,17,0.10) 60%, rgba(10,24,17,0.10) 66%, rgba(10,24,17,0.22) 74%, rgba(10,24,17,0.65) 86%, rgba(10,24,17,0.92) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Left vignette: protects left-aligned text without blocking the scene on the right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(10,24,17,0.62) 0%, rgba(10,24,17,0.32) 28%, rgba(10,24,17,0.08) 50%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* Right-edge vignette: cinematic depth, tones down the bright sky at the right border */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to left, rgba(10,24,17,0.30) 0%, rgba(10,24,17,0.08) 35%, transparent 55%)',
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
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/30 px-4 py-1.5 text-sm font-semibold text-primary-light backdrop-blur-sm border border-primary-light/40 shadow-[inset_0_1px_0_rgba(184,216,168,0.15)] mb-5">
              <span className="h-2 w-2 rounded-full bg-primary-light animate-pulse" aria-hidden="true" />
              Poznań i okolice
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance mb-6"
            style={{ textShadow: '0 2px 28px rgba(0,0,0,0.55), 0 1px 6px rgba(0,0,0,0.35)' }}
          >
            Programowanie dla dzieci{' '}
            <span className="text-primary-light">poprzez zabawę</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:block text-lg text-white/80 leading-relaxed max-w-lg"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.45)' }}
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
            className="inline-flex items-center justify-center gap-2 rounded-button bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-elevated transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-primary-dark hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
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
