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
        <article className="prose prose-slate max-w-none">
          <h1 className="font-heading text-3xl font-bold text-text-primary mb-2">
            Polityka prywatności
          </h1>
          <p className="text-text-secondary text-sm mb-8">
            Data ostatniej aktualizacji: 15 września 2026 r.
          </p>

          <Section title="1. Administrator danych osobowych">
            <p>
              Administratorem Twoich danych osobowych jest{' '}
              <strong>{company.president}</strong>, prowadzący działalność
              gospodarczą pod nazwą <strong>{company.fullName}</strong>,
              adres: {company.address}, NIP: {company.nip}, REGON:{' '}
              {company.regon}.
            </p>
            <p>Możesz skontaktować się z administratorem:</p>
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
            <p>Twoje dane osobowe przetwarzamy w następujących celach:</p>
            <ul>
              <li>
                <strong>Zawarcie i wykonywanie umowy</strong> o świadczenie
                usług edukacyjnych (zajęcia z programowania z wykorzystaniem
                Minecraft Education) — na podstawie art. 6 ust. 1 lit. b RODO.
              </li>
              <li>
                <strong>Usprawnienie realizacji umowy</strong>, w przypadku
                podania dodatkowych danych — na podstawie art. 6 ust. 1 lit. f
                RODO, tj. prawnie uzasadnionego interesu administratora, w
                szczególności ustalenia, dochodzenia lub obrony przed
                roszczeniami oraz obsługi korespondencji, do czasu ustania
                celu biznesowego lub wniesienia skutecznego sprzeciwu.
              </li>
              <li>
                <strong>Wypełnienie obowiązków prawnych</strong> ciążących na
                administratorze — na podstawie art. 6 ust. 1 lit. c RODO, w
                tym m.in. obowiązków podatkowych, rachunkowych oraz obowiązków
                wynikających z przepisów dotyczących przeciwdziałania
                zagrożeniom przestępczością na tle seksualnym i ochrony
                małoletnich.
              </li>
              <li>
                <strong>Przesyłanie informacji handlowych i marketingowych</strong>{' '}
                — jeżeli wyraziłeś/-aś odrębną zgodę — na podstawie art. 6
                ust. 1 lit. a RODO.
              </li>
              <li>
                <strong>
                  Utrwalanie, wykorzystywanie i rozpowszechnianie wizerunku
                  uczestnika zajęć
                </strong>{' '}
                do celów promocyjnych lub marketingowych — jeżeli została
                udzielona odrębna zgoda na wykorzystanie wizerunku — na
                podstawie art. 6 ust. 1 lit. a RODO.
              </li>
              <li>
                <strong>Realizacja procedur ochrony małoletnich</strong>, w
                tym przyjmowanie zgłoszeń o zdarzeniach zagrażających
                małoletniemu, udzielanie mu wsparcia oraz dokumentowanie i
                przechowywanie zgłoszonych incydentów lub zdarzeń zagrażających
                dobru małoletniego — na podstawie obowiązków prawnych
                ciążących na administratorze, a w zakresie szczególnych
                kategorii danych także ze względów związanych z ważnym
                interesem publicznym, zgodnie z art. 9 ust. 2 lit. g RODO.
              </li>
            </ul>
          </Section>

          <Section title="3. Rodzaj przetwarzanych danych">
            <p>W zależności od celu przetwarzamy następujące kategorie danych:</p>
            <ul>
              <li>Dane identyfikacyjne: imię i nazwisko, PESEL rodzica/opiekuna.</li>
              <li>Dane kontaktowe: adres zamieszkania, adres e-mail, numer telefonu.</li>
              <li>Dane dzieci (uczestników): imię, nazwisko, szkoła, klasa.</li>
              <li>Dane dotyczące płatności (w zakresie niezbędnym do rozliczeń).</li>
              <li>
                W razie potrzeby — dane związane ze zgłoszeniami dotyczącymi
                bezpieczeństwa i ochrony małoletnich.
              </li>
            </ul>
          </Section>

          <Section title="4. Odbiorcy danych">
            <p>
              Twoje dane mogą być przekazywane lub powierzane m.in.: firmie
              hostingowej, firmie świadczącej usługi rachunkowo-księgowe,
              dostawcom narzędzi mailingowych, kurierom, operatorom pocztowym,
              prawnikowi oraz podmiotom świadczącym usługi informatyczne — o
              ile jest to niezbędne do realizacji danego celu przetwarzania.
            </p>
            <p>
              Nie przekazujemy Twoich danych do państw trzecich poza
              Europejskim Obszarem Gospodarczym, z wyjątkiem sytuacji, gdy
              jest to niezbędne do realizacji usługi (np. korzystanie z usług
              dostawców chmurowych z siedzibą w USA dysponujących
              certyfikatem EU-U.S. DPF lub stosujących Standardowe Klauzule
              Umowne).
            </p>
          </Section>

          <Section title="5. Okres przechowywania danych">
            <ul>
              <li>
                Dane przetwarzane w związku z zawarciem i wykonywaniem umowy
                będą przechowywane przez okres <strong>5 lat</strong> ze
                względu na przepisy podatkowe — okres ten może zostać
                wydłużony na podstawie uzasadnionych roszczeń
                administratora.
              </li>
              <li>
                Dane przetwarzane na podstawie zgody — do chwili jej
                wycofania lub zakończenia celu, dla którego zgoda na
                przetwarzanie została pozyskana, w zależności co nastąpi
                wcześniej.
              </li>
              <li>
                Dane przetwarzane na podstawie uzasadnionego interesu
                administratora — do momentu zgłoszenia skutecznego sprzeciwu.
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
                <strong>Prawo do usunięcia</strong> danych (art. 17 RODO).
              </li>
              <li>
                <strong>Prawo do ograniczenia przetwarzania</strong> (art. 18
                RODO).
              </li>
              <li>
                <strong>Prawo do przenoszenia danych</strong> (art. 20 RODO).
              </li>
              <li>
                <strong>Prawo do wniesienia sprzeciwu</strong> wobec
                przetwarzania (art. 21 RODO), chyba że skorzystanie z danego
                prawa jest ograniczone przepisami prawa.
              </li>
              <li>
                <strong>Prawo do cofnięcia zgody</strong> w dowolnym momencie,
                bez wpływu na zgodność z prawem przetwarzania dokonanego przed
                jej wycofaniem. Dotyczy to w szczególności zgody na
                otrzymywanie informacji handlowych i treści marketingowych
                oraz zgody na wykorzystanie wizerunku.
              </li>
              <li>
                <strong>Prawo do wniesienia skargi</strong> do Prezesa Urzędu
                Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa,
                uodo.gov.pl).
              </li>
            </ul>
            <p>
              Aby skorzystać z powyższych praw, skontaktuj się z nami pod
              adresem{' '}
              <a
                href={`mailto:${company.email}`}
                className="text-primary hover:text-primary-dark underline underline-offset-2"
              >
                {company.email}
              </a>
              .
            </p>
          </Section>

          <Section title="7. Dobrowolność podania danych">
            <p>
              Podanie danych jest dobrowolne, ale w zakresie danych
              niezbędnych do zawarcia i realizacji umowy, wypełnienia
              obowiązków prawnych albo ustalenia, dochodzenia lub obrony przed
              roszczeniami może być konieczne do zawarcia lub wykonania
              umowy.
            </p>
            <p>
              Podanie danych fakultatywnych, w tym danych przetwarzanych na
              podstawie zgody, jest dobrowolne i nie wpływa na możliwość
              zawarcia umowy.
            </p>
          </Section>

          <Section title="8. Pliki cookies">
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

          <Section title="9. Bezpieczeństwo danych">
            <p>
              Stosujemy odpowiednie środki techniczne i organizacyjne w celu
              ochrony Twoich danych osobowych przed nieautoryzowanym dostępem,
              utratą lub zniszczeniem, zgodnie z wymaganiami RODO.
            </p>
          </Section>

          <Section title="10. Zmiany polityki prywatności">
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
