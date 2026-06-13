import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { CookieBanner } from '@/components/ui/CookieBanner'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bedrock-academy.pl',
  ),
  title: {
    template: '%s | Bedrock Academy',
    default: 'Bedrock Academy — Programowanie dla dzieci',
  },
  description:
    'Prowadzimy zajęcia z programowania dla dzieci w szkołach podstawowych w Poznaniu i okolicach. Uczymy przez zabawę w środowisku Minecraft Education.',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: '/',
    siteName: 'Bedrock Academy',
    title: 'Bedrock Academy — Programowanie dla dzieci',
    description:
      'Nauka programowania, logicznego myślenia i kreatywności w przyjaznym środowisku Minecraft Education.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bedrock Academy — Programowanie dla dzieci',
    description:
      'Nauka programowania, logicznego myślenia i kreatywności w przyjaznym środowisku.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pl"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-text-primary">
        <SiteHeader />
        <main className="flex flex-1 flex-col" id="main-content">
          {children}
        </main>
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  )
}
