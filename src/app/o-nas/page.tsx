import type { Metadata } from 'next'
import { AboutHeroSection } from '@/components/sections/about/AboutHeroSection'
import { AboutGoalsSection } from '@/components/sections/about/AboutGoalsSection'
import { AboutBenefitsSection } from '@/components/sections/about/AboutBenefitsSection'
import { CtaSection } from '@/components/sections/home/CtaSection'

export const metadata: Metadata = {
  title: 'O nas',
  description:
    'Poznaj Bedrock Academy — akademię programowania dla dzieci, która uczy poprzez zabawę w środowisku Minecraft Education.',
  openGraph: {
    title: 'O nas | Bedrock Academy',
    description:
      'Poznaj Bedrock Academy — akademię programowania dla dzieci, która uczy poprzez zabawę w środowisku Minecraft Education.',
    url: '/o-nas',
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutGoalsSection />
      <AboutBenefitsSection />
      <CtaSection />
    </>
  )
}
