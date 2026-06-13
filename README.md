# Bedrock Academy — Strona internetowa

Strona internetowa akademii programowania dla dzieci **Bedrock Academy**, zbudowana w Next.js 16 (App Router), TypeScript i Tailwind CSS v4.

---

## Uruchomienie lokalne

### Wymagania

- Node.js 20+
- pnpm 9+

### Instalacja

```bash
# Sklonuj repozytorium
git clone <adres-repo>
cd bedrock_academy

# Zainstaluj zależności
pnpm install

# Skopiuj plik zmiennych środowiskowych
cp .env.example .env.local
```

### Zmienne środowiskowe (`.env.local`)

| Zmienna | Opis | Wymagana |
|---|---|---|
| `RESEND_API_KEY` | Klucz API do Resend (wysyłka e-maili) | Tak (do formularza) |
| `CONTACT_EMAIL_TO` | Adres e-mail, na który trafiają wiadomości | Tak |
| `NEXT_PUBLIC_SITE_URL` | Publiczny adres strony (bez `/` na końcu) | Tak (sitemap, OG) |

Uzyskaj klucz API Resend na [resend.com](https://resend.com).

### Uruchomienie serwera deweloperskiego

```bash
pnpm dev
```

Strona będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000).

### Budowanie produkcyjne

```bash
pnpm build
pnpm start
```

---

## Struktura katalogów

```
src/
├── app/                    # Next.js App Router — strony i API
│   ├── api/contact/        # Route handler formularza kontaktowego
│   ├── dokumenty/          # Strona dokumentów do pobrania
│   ├── gdzie-jestesmy/     # Strona z mapą szkół
│   ├── kontakt/            # Strona kontaktowa
│   ├── o-nas/              # Strona O nas
│   ├── polityka-prywatnosci/ # Polityka prywatności (RODO)
│   ├── layout.tsx          # Główny layout (header, footer, czcionki)
│   └── page.tsx            # Strona główna
├── components/
│   ├── contact/            # Formularz kontaktowy
│   ├── documents/          # Karty dokumentów, modal PDF
│   ├── layout/             # Header, Footer, MobileNav
│   ├── map/                # Mapa Leaflet, lista i wyszukiwarka szkół
│   ├── sections/
│   │   ├── about/          # Sekcje strony O nas
│   │   └── home/           # Sekcje strony głównej
│   └── ui/                 # Komponenty bazowe (Button, Card, Badge, itp.)
├── data/                   # Dane statyczne (szkoły, dokumenty, firma, nawigacja)
├── hooks/                  # Custom React hooks
├── lib/
│   ├── email/              # Wysyłka e-maili przez Resend
│   ├── validation/         # Schematy Zod
│   └── utils.ts            # Pomocnicze funkcje (cn, formatDate)
├── styles/
│   └── globals.css         # Globalne style, Tailwind v4, design system
└── types/                  # TypeScript typy (School, SiteDocument, Contact)
```

---

## Jak dodać nową szkołę?

1. Otwórz `/src/data/schools.ts`
2. Dodaj nowy obiekt do tablicy `schools`:

```ts
{
  id: 'sp-10-poznan',              // unikalne ID (slug)
  name: 'Szkoła Podstawowa nr 10',
  address: 'ul. Przykładowa 1',
  city: 'Poznań',
  latitude: 52.4100,               // z Google Maps / OpenStreetMap
  longitude: 16.9300,
  scheduleNote: 'Czwartki 15:00–16:30',
  note: 'Opcjonalna notatka dla rodziców.',
  isActive: true,
}
```

Szkoła automatycznie pojawi się na mapie i na liście.

---

## Jak dodać/zmienić dokument PDF?

1. Umieść plik PDF w katalogu `/public/documents/`
   (np. `/public/documents/regulamin.pdf`)

2. Otwórz `/src/data/documents.ts` i zaktualizuj `fileUrl`:

```ts
{
  id: 'regulamin',
  title: 'Regulamin zajęć',
  fileUrl: '/documents/regulamin.pdf',  // zmień tę ścieżkę
  // ...
}
```

---

## Jak zmienić dane firmy?

Wszystkie dane firmy (nazwa, e-mail, telefon, NIP, opis) znajdują się w jednym pliku:

**`/src/data/company.ts`**

Zmiana w tym pliku automatycznie zaktualizuje header, footer, stronę kontaktową i stopkę e-maila.

---

## Jak zmienić tło hero sekcji?

1. Dodaj zdjęcie do `/public/images/hero-bg.jpg`
2. Otwórz `/src/components/sections/home/HeroSection.tsx`
3. Znajdź komentarz `// TODO: Replace gradient background with hero image`
4. Zmień styl sekcji z gradientu na `background-image: url('/images/hero-bg.jpg')`

---

## Jak zmienić film YouTube?

1. Otwórz `/src/components/sections/home/VideoSection.tsx`
2. Znajdź komentarz `// TODO: Replace placeholder video ID`
3. Zmień wartość `VIDEO_ID` na właściwe ID filmu z YouTube

---

## Stos technologiczny

| Technologia | Wersja | Zastosowanie |
|---|---|---|
| Next.js | 16 (App Router) | Framework |
| TypeScript | 5 | Typowanie |
| Tailwind CSS | 4 | Stylowanie |
| Framer Motion | 12 | Animacje |
| React Leaflet | 5 | Mapa |
| Resend | 6 | Wysyłka e-maili |
| Zod | 4 | Walidacja formularzy |
| Lucide React | 1.18 | Ikony |

---

## Przyszłe integracje (TODO)

- **System CRM** — automatyczne dodawanie zgłoszeń z formularza do CRM.
  Zmienne: `CRM_API_URL`, `CRM_API_TOKEN` (zakomentowane w `.env.example`).
  Punkt integracji: `/src/app/api/contact/route.ts` po linii `await sendContactEmail(...)`.

- **Google Analytics / Plausible** — dodanie skryptu analitycznego do layoutu.

- **Strona bloga** — dodanie `/blog` z artykułami edukacyjnymi.

---

## Weryfikacja prawna

**WAŻNE:** Plik `/src/app/polityka-prywatnosci/page.tsx` zawiera **szablon** polityki
prywatności. Przed opublikowaniem strony należy skonsultować jego treść z radcą
prawnym lub kancelarią specjalizującą się w RODO.
