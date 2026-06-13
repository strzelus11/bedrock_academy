import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/home/HeroSection'
import { AboutClassesSection } from '@/components/sections/home/AboutClassesSection'
import { BenefitsGrid } from '@/components/sections/home/BenefitsGrid'
import { VideoSection } from '@/components/sections/home/VideoSection'
import { CtaSection } from '@/components/sections/home/CtaSection'

export const metadata: Metadata = {
  title: 'Bedrock Academy — Programowanie dla dzieci przez zabawę',
  description:
    'Prowadzimy zajęcia z programowania dla dzieci w szkołach podstawowych w Poznaniu i okolicach. Uczymy przez zabawę w środowisku Minecraft Education.',
  openGraph: {
    title: 'Bedrock Academy — Programowanie dla dzieci przez zabawę',
    description:
      'Nauka programowania, logicznego myślenia i kreatywności w przyjaznym środowisku Minecraft Education.',
    url: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutClassesSection />
      <BenefitsGrid />
      <VideoSection />
      <CtaSection />
    </>
  )
}
