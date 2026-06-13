'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const benefits = [
  {
    number: '01',
    title: 'Rozwijają myślenie algorytmiczne',
    description:
      'Dzieci uczą się rozkładać skomplikowane problemy na mniejsze kroki — umiejętność przydatna nie tylko w programowaniu, ale też w matematyce i codziennym życiu.',
  },
  {
    number: '02',
    title: 'Zwiększają pewność siebie',
    description:
      'Każdy działający projekt to powód do dumy. Dzieci widzą namacalne efekty swojej pracy, co buduje poczucie sprawczości i motywuje do dalszej nauki.',
  },
  {
    number: '03',
    title: 'Uczą się współpracy',
    description:
      'Praca w parach i małych grupach uczy dzieci komunikacji, dzielenia zadań i wspólnego rozwiązywania problemów — kompetencji niezbędnych w przyszłej karierze.',
  },
  {
    number: '04',
    title: 'Poznają bezpieczny internet',
    description:
      'Przy okazji nauki programowania rozmawiamy o bezpieczeństwie w sieci, prywatności danych i odpowiedzialnym korzystaniu z technologii.',
  },
  {
    number: '05',
    title: 'Mają świetną zabawę',
    description:
      'Przede wszystkim — dzieci się bawią! Minecraft Education to radość z tworzenia, eksploracji i odkrywania. Nauka musi być przyjemnością.',
  },
  {
    number: '06',
    title: 'Rozwijają kreatywność',
    description:
      'Nieograniczone możliwości Minecraft Education zachęcają do eksperymentowania i tworzenia własnych rozwiązań, rozwijając twórcze myślenie.',
  },
]

export function AboutBenefitsSection() {
  return (
    <Section background="light" padding="lg">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            Korzyści
          </span>
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Co zyskują dzieci?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className="relative p-6 rounded-card bg-white border border-border shadow-soft"
            >
              <div
                className="mb-3 font-heading text-4xl font-bold"
                style={{ color: 'rgba(62, 124, 58, 0.15)' }}
                aria-hidden="true"
              >
                {benefit.number}
              </div>
              <h3 className="mb-2 font-heading text-base font-semibold text-text-primary">
                {benefit.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
