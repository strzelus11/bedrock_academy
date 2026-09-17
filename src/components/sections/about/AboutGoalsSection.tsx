'use client'

import { motion } from 'framer-motion'
import { Target, BookOpen, Heart, Star } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { GlassPanel } from '@/components/ui/GlassPanel'

const goals = [
  {
    icon: Target,
    title: 'Dobry start w programowaniu',
    description:
      'Chcemy dać dzieciom możliwość poznania programowania w przystępnej formie, już od pierwszych lat szkoły.',
  },
  {
    icon: BookOpen,
    title: 'Nauka przez doświadczenie',
    description:
      'Dzieci uczą się poprzez działanie - eksperymentują, popełniają błędy i samodzielnie dochodzą do rozwiązania.',
  },
  {
    icon: Heart,
    title: 'Ciekawość technologii',
    description:
      'Chcemy rozbudzać zainteresowanie technologią i pokazywać dzieciom, że mogą ją nie tylko wykorzystywać, ale także rozumieć.',
  },
  {
    icon: Star,
    title: 'Umiejętności na przyszłość',
    description:
      'Programowanie uczy sposobu myślenia, który przydaje się znacznie szerzej niż tylko podczas pracy z komputerem.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function AboutGoalsSection() {
  return (
    <Section background="white" padding="lg">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            Nasze cele
          </span>
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Po co to robimy?
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Żeby dzieci zamieniały ciekawość w realne umiejętności i
            przekonywały się, że nauka może naprawdę wciągać.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.1 }}
        >
          {goals.map((goal) => {
            const Icon = goal.icon
            return (
              <motion.div
                key={goal.title}
                variants={cardVariants}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <GlassPanel className="h-full p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon size={22} className="text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-text-primary">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {goal.description}
                  </p>
                </GlassPanel>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
