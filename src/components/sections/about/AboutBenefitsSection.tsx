'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const benefits = [
  {
    number: '01',
    title: 'Rozwijają myślenie algorytmiczne',
    description:
      'Dzieci uczą się dzielić większe problemy na mniejsze etapy, analizować kolejne kroki i szukać rozwiązań, które prowadzą do zamierzonego efektu.',
  },
  {
    number: '02',
    title: 'Budują pewność siebie',
    description:
      'Każde poprawnie wykonane zadanie daje dziecku poczucie sprawczości, pokazuje mu efekty własnej pracy i zachęca do podejmowania kolejnych wyzwań.',
  },
  {
    number: '03',
    title: 'Uczą się samodzielności',
    description:
      'Dzieci próbują różnych sposobów, sprawdzają swoje pomysły i poprawiają błędy, ucząc się samodzielnie dochodzić do rozwiązania.',
  },
  {
    number: '04',
    title: 'Oswajają się z technologią',
    description:
      'Regularna praca przy komputerze pomaga dzieciom coraz swobodniej korzystać z cyfrowych narzędzi i lepiej odnajdywać się w środowisku komputerowym.',
  },
  {
    number: '05',
    title: 'Uczą się przez zabawę',
    description:
      'Minecraft Education pozwala poznawać programowanie w znanym dzieciom środowisku, dzięki czemu wykonywanie kolejnych zadań staje się bardziej angażujące.',
  },
  {
    number: '06',
    title: 'Rozwijają kreatywność',
    description:
      'Dzieci eksperymentują z różnymi rozwiązaniami, sprawdzają własne pomysły i obserwują, jak ich decyzje wpływają na świat Minecrafta.',
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
