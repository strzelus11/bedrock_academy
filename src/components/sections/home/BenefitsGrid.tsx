'use client'

import { motion } from 'framer-motion'
import { Brain, Lightbulb, Code, Users } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { GlassPanel } from '@/components/ui/GlassPanel'

const benefits = [
  {
    icon: Brain,
    title: 'Logiczne myślenie',
    description:
      'Dzieci uczą się rozwiązywać problemy krok po kroku, budując algorytmiczne podejście do wyzwań codziennego życia.',
    color: '#3E7C3A',
    bg: 'rgba(184,216,168,0.25)',
  },
  {
    icon: Lightbulb,
    title: 'Kreatywność',
    description:
      'Tworzenie własnych projektów w Minecraft Education rozwija wyobraźnię i zachęca do eksperymentowania.',
    color: '#5DADE2',
    bg: 'rgba(93,173,226,0.12)',
  },
  {
    icon: Code,
    title: 'Praktyczne projekty',
    description:
      'Każde zajęcia kończą się działającym projektem, który dziecko może pokazać rodzinie i przyjaciołom.',
    color: '#3E7C3A',
    bg: 'rgba(184,216,168,0.25)',
  },
  {
    icon: Users,
    title: 'Praca zespołowa',
    description:
      'Wspólne projekty uczą współpracy, komunikacji i wzajemnego szacunku — umiejętności kluczowych w przyszłości.',
    color: '#5DADE2',
    bg: 'rgba(93,173,226,0.12)',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export function BenefitsGrid() {
  return (
    <Section background="light" padding="lg">
      <Container>
        {/* Heading */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            Dlaczego my?
          </span>
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Czego uczy nasze programowanie?
          </h2>
        </motion.div>

        {/* Grid 2x2 */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.1 }}
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                variants={cardVariants}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <GlassPanel className="h-full p-6 transition-lift">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: benefit.bg }}
                    >
                      <Icon
                        size={24}
                        style={{ color: benefit.color }}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="mb-2 font-heading text-lg font-semibold text-text-primary">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
