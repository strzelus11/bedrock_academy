'use client'

import { motion } from 'framer-motion'
import { Target, BookOpen, Heart, Star } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { GlassPanel } from '@/components/ui/GlassPanel'

const goals = [
  {
    icon: Target,
    title: 'Dostępność edukacji programistycznej',
    description:
      'Chcemy, aby każde dziecko w szkole podstawowej miało dostęp do wysokiej jakości zajęć z programowania, niezależnie od miejsca zamieszkania czy zasobności portfela rodziców.',
  },
  {
    icon: BookOpen,
    title: 'Nauka przez doświadczenie',
    description:
      'Wierzymy, że najlepsza nauka odbywa się przez działanie. Minecraft Education pozwala dzieciom eksperymentować, popełniać błędy i wyciągać wnioski w bezpiecznym środowisku.',
  },
  {
    icon: Heart,
    title: 'Pasja do technologii',
    description:
      'Naszym celem jest zaszczepienie w dzieciach autentycznej pasji do technologii i rozwiązywania problemów — pasji, która będzie im towarzyszyć przez całe życie.',
  },
  {
    icon: Star,
    title: 'Przygotowanie do przyszłości',
    description:
      'Umiejętności programistyczne i algorytmiczne myślenie to kompetencje kluczowe w XXI wieku. Przygotowujemy dzieci na wyzwania, które ich czekają.',
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
            Tworzymy Bedrock Academy z konkretną misją — sprawiamy, by programowanie
            było dostępne, zrozumiałe i fascynujące dla każdego dziecka.
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
