import type { Metadata } from 'next'
import { Mail, Phone, Building2 } from 'lucide-react'
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
    <div className="pt-24 pb-20 bg-background">
      <Container>
        <div className="mb-12">
          <span className="mb-3 inline-block font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            Kontakt
          </span>
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl mb-4">
            Napisz do nas
          </h1>
          <p className="text-text-secondary max-w-xl leading-relaxed">
            Masz pytania o zajęcia, zapisy lub dostępne lokalizacje? Chętnie
            odpowiemy na wszystkie wiadomości w ciągu 1–2 dni roboczych.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Contact info — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Company info card */}
            <div className="rounded-card bg-white border border-border p-6 shadow-soft">
              <h2 className="font-heading text-lg font-semibold text-text-primary mb-5">
                Dane kontaktowe
              </h2>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Mail size={18} className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-text-secondary mb-0.5">
                      E-mail
                    </p>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-sm font-medium text-text-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                    >
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Phone size={18} className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-text-secondary mb-0.5">
                      Telefon
                    </p>
                    <a
                      href={`tel:${company.phone.replace(/\s/g, '')}`}
                      className="text-sm font-medium text-text-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                    >
                      {company.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Building2
                      size={18}
                      className="text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-text-secondary mb-0.5">
                      Firma
                    </p>
                    <p className="text-sm font-medium text-text-primary">
                      {company.fullName}
                    </p>
                    <p className="text-xs text-text-secondary mt-0.5">
                      NIP: {company.nip}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Info box */}
            <div
              className="rounded-card p-5 border"
              style={{
                background: 'rgba(184,216,168,0.18)',
                borderColor: 'rgba(62,124,58,0.18)',
              }}
            >
              <p className="text-sm text-primary-dark leading-relaxed font-medium">
                Odpowiadamy na wiadomości od poniedziałku do piątku,
                w godzinach 9:00–17:00.
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
