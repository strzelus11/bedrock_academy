/**
 * Łączy klasy CSS z obsługą wartości falsy (bez clsx/tailwind-merge).
 * Wystarczające dla tego projektu — jeśli potrzebna deduplikacja Tailwind,
 * zainstaluj clsx + tailwind-merge i zastąp tę implementację.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Formatuje datę ISO (YYYY-MM-DD) do czytelnego formatu po polsku.
 * @example formatDate('2024-09-01') → '1 września 2024'
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Sprawdza czy wartość jest non-nullish.
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

/**
 * Przycinanie tekstu do podanej długości ze znakiem wielokropka.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + '…'
}
