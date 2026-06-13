import Link from 'next/link'
import { Leaf, Mail, Phone } from 'lucide-react'
import { company } from '@/data/company'
import { navLinks } from '@/data/navigation'
import { Container } from '@/components/ui/Container'

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Leaf size={20} aria-hidden="true" />
              </div>
              <span className="font-heading text-lg font-bold">
                {company.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              {company.description}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white/50">
              Nawigacja
            </h3>
            <nav aria-label="Nawigacja stopki">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/polityka-prywatnosci"
                    className="text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light rounded-sm"
                  >
                    Polityka prywatności
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white/50">
              Kontakt
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light rounded-sm"
                >
                  <Mail size={15} aria-hidden="true" className="shrink-0" />
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light rounded-sm"
                >
                  <Phone size={15} aria-hidden="true" className="shrink-0" />
                  {company.phone}
                </a>
              </li>
              <li className="text-sm text-white/60 mt-1">
                NIP: {company.nip}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            &copy; {currentYear} {company.fullName}. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-white/40">
            Wykonanie:{' '}
            <span className="text-white/60">Bedrock Academy</span>
          </p>
        </div>
      </Container>
    </footer>
  )
}
