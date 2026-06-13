'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'

export function CtaSection() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        background: 'linear-gradient(135deg, #1F3D2B 0%, #3E7C3A 60%, #4a9245 100%)',
      }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <Container>
        <motion.div
          className="relative z-10 flex flex-col items-center text-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl text-balance mb-4">
              Gotowy do przygody z programowaniem?
            </h2>
            <p className="text-white/75 text-lg max-w-xl mx-auto leading-relaxed">
              Skontaktuj się z nami i dowiedz się, czy prowadzimy zajęcia w szkole
              Twojego dziecka lub w pobliżu.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2.5 rounded-button bg-white px-8 py-4 text-base font-semibold text-primary-dark shadow-elevated transition-all hover:bg-primary-light hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Napisz do nas
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
