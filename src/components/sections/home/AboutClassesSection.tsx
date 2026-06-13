'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

// Decorative Minecraft-inspired color block grid
const BLOCK_COLORS = [
  ['#3E7C3A', '#B8D8A8', '#5DADE2', '#1F3D2B', '#3E7C3A', '#B8D8A8'],
  ['#B8D8A8', '#5DADE2', '#3E7C3A', '#B8D8A8', '#5DADE2', '#3E7C3A'],
  ['#1F3D2B', '#3E7C3A', '#B8D8A8', '#5DADE2', '#3E7C3A', '#1F3D2B'],
  ['#5DADE2', '#1F3D2B', '#3E7C3A', '#3E7C3A', '#B8D8A8', '#5DADE2'],
  ['#3E7C3A', '#B8D8A8', '#1F3D2B', '#5DADE2', '#1F3D2B', '#3E7C3A'],
  ['#B8D8A8', '#3E7C3A', '#5DADE2', '#3E7C3A', '#B8D8A8', '#1F3D2B'],
]

function BlockGrid() {
  return (
    <div
      className="grid gap-2"
      style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}
      aria-hidden="true"
    >
      {BLOCK_COLORS.map((row, ri) =>
        row.map((color, ci) => (
          <div
            key={`${ri}-${ci}`}
            className="aspect-square rounded-sm shadow-inner transition-transform duration-500 hover:scale-105"
            style={{ backgroundColor: color, opacity: 0.85 + (ri + ci) * 0.01 }}
          />
        )),
      )}
    </div>
  )
}

const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }
const fadeRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }

export function AboutClassesSection() {
  return (
    <Section background="white" padding="lg">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="mb-3 inline-block font-heading text-sm font-semibold uppercase tracking-wider text-primary">
              Jak uczymy?
            </span>
            <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl mb-5">
              Minecraft jako narzędzie edukacyjne
            </h2>
            <p className="text-text-secondary leading-relaxed mb-5">
              Wykorzystujemy platformę{' '}
              <strong className="text-text-primary">Minecraft Education Edition</strong>{' '}
              jako środowisko do nauki podstaw programowania. Dzieci uczą się
              poprzez budowanie, eksplorację i rozwiązywanie praktycznych zadań.
            </p>
            <p className="text-text-secondary leading-relaxed mb-5">
              Nasz program jest dostosowany do wieku i możliwości dzieci ze szkół
              podstawowych. Skupiamy się na rozwijaniu{' '}
              <strong className="text-text-primary">myślenia algorytmicznego</strong>,
              kreatywności i umiejętności pracy w zespole.
            </p>
            <ul className="flex flex-col gap-3 mt-6">
              {[
                'Zajęcia prowadzone bezpośrednio w szkołach',
                'Grupy max. 12 uczestników',
                'Doświadczeni i certyfikowani nauczyciele',
                'Program dostosowany do poziomu uczniów',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: block grid decorative */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex items-center justify-center"
          >
            {/* pb-6 pr-6 makes room for the floating label without overflowing viewport */}
            <div className="relative pb-6 pr-6">
              <div
                className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-elevated p-3"
                style={{ background: 'rgba(31,61,43,0.06)', border: '1px solid rgba(62,124,58,0.12)' }}
              >
                <BlockGrid />
              </div>
              {/* Floating label — bottom-0 right-0 so it sits inside the pb/pr padding area */}
              <div className="absolute bottom-0 right-0 glass rounded-xl px-4 py-2 shadow-card">
                <p className="font-heading text-xs font-semibold text-primary-dark">Minecraft Education</p>
                <p className="text-xs text-text-secondary">nauka przez budowanie</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
