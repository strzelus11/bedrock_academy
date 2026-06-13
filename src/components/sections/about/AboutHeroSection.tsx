'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { company } from '@/data/company'

export function AboutHeroSection() {
  return (
    <section className="relative flex items-end overflow-hidden" style={{ height: '480px' }}>
      {/* Background image — same asset as home hero */}
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

      {/* Bottom-heavy overlay: scene visible at top, readable text at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(31,61,43,0.25) 0%, rgba(31,61,43,0.65) 55%, rgba(31,61,43,0.92) 100%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 pb-14 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
            O nas
          </span>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-5">
            Kim jesteśmy?
          </h1>
          <p className="text-lg text-white/80 leading-relaxed max-w-xl">
            {company.description}
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
