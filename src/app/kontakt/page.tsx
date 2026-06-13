import type { Metadata } from 'next'
import { Mail, Phone, Building2, UserRound } from 'lucide-react'
import { company } from '@/data/company'
import { ContactForm } from '@/components/contact/ContactForm'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Skontaktuj się z Bedrock Academy. Chętnie odpowiemy na pytania o zajęcia, lokalizacje i zapisy.',
  openGraph: {
    title: 'Kontakt | Bedrock Academy',
    description:
      'Napisz do nas — chętnie odpowiemy na pytania o zajęcia programowania dla dzieci.',
    url: '/kontakt',
  },
}

export default function ContactPage() {
  return (
    <div className="bg-background pt-24 pb-20">
      <Container>
        <div className="mb-12">
          <span className="font-heading text-primary mb-3 inline-block text-sm font-semibold tracking-wider uppercase">
            Kontakt
          </span>
          <h1 className="font-heading text-text-primary mb-4 text-4xl font-bold sm:text-5xl">
            Napisz do nas
          </h1>
          <p className="text-text-secondary max-w-xl leading-relaxed">
            Masz pytania o zajęcia, zapisy lub dostępne lokalizacje? Chętnie
            odpowiemy na wszystkie wiadomości w ciągu 1–2 dni roboczych.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Contact info — 2 cols */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* Company info card */}
            <div className="rounded-card border-border shadow-soft border bg-white p-6">
              <h2 className="font-heading text-text-primary mb-5 text-lg font-semibold">
                Dane kontaktowe
              </h2>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <UserRound
                      size={18}
                      className="text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-text-secondary mb-0.5 text-xs font-medium">
                      Dyrektor
                    </p>
                    <p className="text-text-primary text-sm font-medium">
                      {company.president}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <Mail
                      size={18}
                      className="text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-text-secondary mb-0.5 text-xs font-medium">
                      E-mail
                    </p>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-text-primary hover:text-primary focus-visible:ring-primary rounded-sm text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                    >
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <Phone
                      size={18}
                      className="text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-text-secondary mb-0.5 text-xs font-medium">
                      Telefon
                    </p>
                    <a
                      href={`tel:${company.phone.replace(/\s/g, '')}`}
                      className="text-text-primary hover:text-primary focus-visible:ring-primary rounded-sm text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                    >
                      {company.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <Building2
                      size={18}
                      className="text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-text-secondary mb-0.5 text-xs font-medium">
                      Firma
                    </p>
                    <p className="text-text-primary text-sm font-medium">
                      {company.fullName}
                    </p>
                    <p className="text-text-secondary mt-0.5 text-xs">
                      NIP: {company.nip}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Info box */}
            <div
              className="rounded-card border p-5"
              style={{
                background: 'rgba(184,216,168,0.18)',
                borderColor: 'rgba(62,124,58,0.18)',
              }}
            >
              <p className="text-primary-dark text-sm leading-relaxed font-medium">
                Odpowiadamy na wiadomości od poniedziałku do piątku, w godzinach
                9:00–17:00.
              </p>
            </div>
          </div>

          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  )
}
