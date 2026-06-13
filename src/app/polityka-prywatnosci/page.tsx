import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { company } from '@/data/company'

export const metadata: Metadata = {
  title: 'Polityka prywatności',
  description: 'Polityka prywatności i ochrony danych osobowych Bedrock Academy.',
  openGraph: {
    title: 'Polityka prywatności | Bedrock Academy',
    url: '/polityka-prywatnosci',
  },
  robots: {
    index: false,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-background">
      <Container size="md">
        {/* Legal disclaimer banner */}
        <div
          className="mb-8 rounded-xl border-2 border-amber-400 bg-amber-50 p-5"
          role="alert"
        >
          <p className="text-sm font-semibold text-amber-800 mb-1">
            ⚠️ SZABLON — Ten dokument wymaga weryfikacji prawnej przed
            publikacją.
          </p>
          <p className="text-xs text-amber-700 leading-relaxed">
            Poniższy tekst stanowi wyłącznie szablon informacyjny. Przed
            opublikowaniem na stronie należy skonsultować go z radcą prawnym lub
            kancelarią specjalizującą się w ochronie danych osobowych (RODO).
          </p>
        </div>

        <article className="prose prose-slate max-w-none">
          <h1 className="font-heading text-3xl font-bold text-text-primary mb-2">
            Polityka prywatności
          </h1>
          <p className="text-text-secondary text-sm mb-8">
            Data ostatniej aktualizacji: 1 września 2024 r.
          </p>

          <Section title="1. Administrator danych osobowych">
            <p>
              Administratorem Twoich danych osobowych jest{' '}
              <strong>{company.fullName}</strong>, NIP: {company.nip}.
            </p>
            <p>
              Możesz skontaktować się z administratorem:
            </p>
            <ul>
              <li>
                e-mail:{' '}
                <a
                  href={`mailto:${company.email}`}
                  className="text-primary hover:text-primary-dark underline underline-offset-2"
                >
                  {company.email}
                </a>
              </li>
              <li>telefon: {company.phone}</li>
            </ul>
          </Section>

          <Section title="2. Cele i podstawy przetwarzania danych">
            <p>Przetwarzamy Twoje dane osobowe w następujących celach:</p>
            <ul>
              <li>
                <strong>Obsługa formularza kontaktowego</strong> — podstawa
                prawna: art. 6 ust. 1 lit. a RODO (zgoda) lub art. 6 ust. 1
                lit. b RODO (podjęcie działań na żądanie osoby, której dane
                dotyczą, przed zawarciem umowy).
              </li>
              <li>
                <strong>Realizacja umowy</strong> (zajęcia programowania) — art.
                6 ust. 1 lit. b RODO.
              </li>
              <li>
                <strong>Wypełnienie obowiązków prawnych</strong> (np.
                rachunkowość) — art. 6 ust. 1 lit. c RODO.
              </li>
              <li>
                <strong>Prawnie uzasadniony interes administratora</strong>{' '}
                (dochodzenie roszczeń, ochrona przed roszczeniami) — art. 6 ust.
                1 lit. f RODO.
              </li>
            </ul>
          </Section>

          <Section title="3. Rodzaj przetwarzanych danych">
            <p>W zależności od celu przetwarzamy następujące kategorie danych:</p>
            <ul>
              <li>Dane identyfikacyjne: imię i nazwisko.</li>
              <li>Dane kontaktowe: adres e-mail, numer telefonu.</li>
              <li>Dane dzieci (uczestników): imię, nazwisko, klasa, szkoła.</li>
              <li>Dane dotyczące płatności (w zakresie niezbędnym do rozliczeń).</li>
            </ul>
          </Section>

          <Section title="4. Odbiorcy danych">
            <p>
              Twoje dane mogą być przekazywane następującym kategoriom odbiorców:
            </p>
            <ul>
              <li>
                Podmiotom przetwarzającym dane w naszym imieniu (dostawcy usług
                IT, poczty e-mail, hostingu).
              </li>
              <li>
                Podmiotom uprawnionym do otrzymania danych na podstawie przepisów
                prawa (np. organy podatkowe).
              </li>
            </ul>
            <p>
              Nie przekazujemy Twoich danych do państw trzecich poza Europejskim
              Obszarem Gospodarczym, z wyjątkiem sytuacji, gdy jest to niezbędne
              do realizacji usługi (np. korzystanie z usług dostawców chmurowych z
              siedzibą w USA dysponujących certyfikatem EU-U.S. DPF lub
              stosujących Standardowe Klauzule Umowne).
            </p>
          </Section>

          <Section title="5. Okres przechowywania danych">
            <ul>
              <li>
                Dane z formularza kontaktowego: do 12 miesięcy od ostatniego
                kontaktu lub do momentu wycofania zgody.
              </li>
              <li>
                Dane związane z umową: przez czas trwania umowy i 6 lat po jej
                zakończeniu (obowiązki podatkowe i rachunkowe).
              </li>
              <li>
                Dane przetwarzane na podstawie uzasadnionego interesu:
                do momentu zgłoszenia skutecznego sprzeciwu.
              </li>
            </ul>
          </Section>

          <Section title="6. Twoje prawa">
            <p>
              W związku z przetwarzaniem Twoich danych osobowych przysługują Ci
              następujące prawa:
            </p>
            <ul>
              <li>
                <strong>Prawo dostępu</strong> do swoich danych (art. 15 RODO).
              </li>
              <li>
                <strong>Prawo do sprostowania</strong> danych (art. 16 RODO).
              </li>
              <li>
                <strong>Prawo do usunięcia</strong> danych („prawo do bycia
                zapomnianym") (art. 17 RODO).
              </li>
              <li>
                <strong>Prawo do ograniczenia przetwarzania</strong> (art. 18
                RODO).
              </li>
              <li>
                <strong>Prawo do przenoszenia danych</strong> (art. 20 RODO).
              </li>
              <li>
                <strong>Prawo do sprzeciwu</strong> wobec przetwarzania (art. 21
                RODO).
              </li>
              <li>
                <strong>Prawo do cofnięcia zgody</strong> w dowolnym momencie
                (bez wpływu na zgodność z prawem przetwarzania przed cofnięciem).
              </li>
              <li>
                <strong>Prawo do wniesienia skargi</strong> do Prezesa Urzędu
                Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa,
                uodo.gov.pl).
              </li>
            </ul>
            <p>
              Aby skorzystać z powyższych praw, skontaktuj się z nami pod adresem{' '}
              <a
                href={`mailto:${company.email}`}
                className="text-primary hover:text-primary-dark underline underline-offset-2"
              >
                {company.email}
              </a>
              .
            </p>
          </Section>

          <Section title="7. Pliki cookies">
            <p>
              Nasza strona internetowa używa plików cookies (ciasteczek) w
              następujących celach:
            </p>
            <ul>
              <li>
                <strong>Niezbędne cookies</strong> — zapewniają prawidłowe
                działanie serwisu. Nie wymagają zgody.
              </li>
              <li>
                <strong>Analityczne cookies</strong> — pozwalają nam mierzyć ruch
                i ulepszać serwis. Wymagają zgody użytkownika.
              </li>
            </ul>
            <p>
              Możesz zmienić ustawienia cookies w swojej przeglądarce lub
              skorzystać z bannera cookies na naszej stronie.
            </p>
          </Section>

          <Section title="8. Bezpieczeństwo danych">
            <p>
              Stosujemy odpowiednie środki techniczne i organizacyjne w celu
              ochrony Twoich danych osobowych przed nieautoryzowanym dostępem,
              utratą lub zniszczeniem, zgodnie z wymaganiami RODO.
            </p>
          </Section>

          <Section title="9. Zmiany polityki prywatności">
            <p>
              Zastrzegamy sobie prawo do zmiany niniejszej polityki prywatności.
              O istotnych zmianach poinformujemy poprzez ogłoszenie na stronie
              internetowej lub w inny odpowiedni sposób.
            </p>
          </Section>
        </article>
      </Container>
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-8">
      <h2 className="font-heading text-xl font-semibold text-text-primary mb-3 mt-8">
        {title}
      </h2>
      <div className="flex flex-col gap-3 text-text-secondary text-sm leading-relaxed [&_ul]:pl-5 [&_ul]:list-disc [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5 [&_strong]:text-text-primary [&_a]:text-primary [&_a:hover]:text-primary-dark">
        {children}
      </div>
    </section>
  )
}
