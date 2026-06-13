'use client'

import { useState, FormEvent } from 'react'
import { contactSchema } from '@/lib/validation/contact-schema'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface FieldErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
  rodoConsent?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    rodoConsent: false,
    website: '', // honeypot
  })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [generalError, setGeneralError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    // Clear field error on change
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setGeneralError(null)

    const parsed = contactSchema.safeParse({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      message: formData.message,
      rodoConsent: formData.rodoConsent,
      website: formData.website,
    })

    if (!parsed.success) {
      const fieldErrors: FieldErrors = {}
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof FieldErrors
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message
        }
      }
      setErrors(fieldErrors)
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })

      const data = await response.json()

      if (!response.ok || data.error) {
        setGeneralError(
          data.error ?? 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.',
        )
        return
      }

      setIsSuccess(true)
    } catch {
      setGeneralError(
        'Nie udało się połączyć z serwerem. Sprawdź połączenie internetowe i spróbuj ponownie.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-card bg-white border border-border p-10 text-center shadow-soft">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle size={32} className="text-primary" aria-hidden="true" />
        </div>
        <h3 className="font-heading text-xl font-bold text-text-primary">
          Wiadomość wysłana!
        </h3>
        <p className="text-text-secondary max-w-sm">
          Dziękujemy za kontakt. Odpowiemy na Twoją wiadomość w ciągu 1–2 dni
          roboczych.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formularz kontaktowy"
      className="flex flex-col gap-5 rounded-card bg-white border border-border p-6 shadow-soft sm:p-8"
    >
      {/* Honeypot — hidden from humans */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: 'none' }}
      />

      {/* General error */}
      {generalError && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4"
        >
          <AlertCircle
            size={18}
            className="text-red-600 shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-sm text-red-700">{generalError}</p>
        </div>
      )}

      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-text-primary">
          Imię i nazwisko <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          placeholder="Jan Kowalski"
          className={cn(
            'rounded-xl border px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 transition-colors focus:outline-none focus:ring-2',
            errors.name
              ? 'border-red-300 bg-red-50/50 focus:border-red-400 focus:ring-red-200'
              : 'border-border bg-white hover:border-primary/40 focus:border-primary focus:ring-primary/20',
          )}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-text-primary">
          Adres e-mail <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          placeholder="jan@przyklad.pl"
          className={cn(
            'rounded-xl border px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 transition-colors focus:outline-none focus:ring-2',
            errors.email
              ? 'border-red-300 bg-red-50/50 focus:border-red-400 focus:ring-red-200'
              : 'border-border bg-white hover:border-primary/40 focus:border-primary focus:ring-primary/20',
          )}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone (optional) */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-text-primary">
          Numer telefonu{' '}
          <span className="text-text-secondary/70 font-normal">(opcjonalnie)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          autoComplete="tel"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          placeholder="+48 500 000 000"
          className={cn(
            'rounded-xl border px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 transition-colors focus:outline-none focus:ring-2',
            errors.phone
              ? 'border-red-300 bg-red-50/50 focus:border-red-400 focus:ring-red-200'
              : 'border-border bg-white hover:border-primary/40 focus:border-primary focus:ring-primary/20',
          )}
        />
        {errors.phone && (
          <p id="phone-error" role="alert" className="text-xs text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-sm font-medium text-text-primary"
        >
          Wiadomość <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          rows={5}
          placeholder="Napisz, w czym możemy pomóc…"
          className={cn(
            'rounded-xl border px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 transition-colors focus:outline-none focus:ring-2 resize-y min-h-28',
            errors.message
              ? 'border-red-300 bg-red-50/50 focus:border-red-400 focus:ring-red-200'
              : 'border-border bg-white hover:border-primary/40 focus:border-primary focus:ring-primary/20',
          )}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {/* RODO consent */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-start gap-3">
          <input
            id="rodoConsent"
            name="rodoConsent"
            type="checkbox"
            checked={formData.rodoConsent}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.rodoConsent}
            aria-describedby={errors.rodoConsent ? 'rodo-error' : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-primary focus:ring-2 focus:ring-primary/30 accent-primary cursor-pointer"
          />
          <label
            htmlFor="rodoConsent"
            className="text-xs text-text-secondary leading-relaxed cursor-pointer"
          >
            Wyrażam zgodę na przetwarzanie moich danych osobowych przez Bedrock
            Academy Sp. z o.o. w celu odpowiedzi na przesłaną wiadomość, zgodnie
            z{' '}
            <Link
              href="/polityka-prywatnosci"
              className="text-primary underline underline-offset-2 hover:text-primary-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Polityką prywatności
            </Link>
            .{' '}
            <span className="text-red-500" aria-hidden="true">*</span>
          </label>
        </div>
        {errors.rodoConsent && (
          <p id="rodo-error" role="alert" className="text-xs text-red-600 ml-7">
            {errors.rodoConsent}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="flex items-center justify-center gap-2 rounded-button bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shadow-soft"
        aria-busy={isLoading}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Wysyłanie…
          </>
        ) : (
          <>
            <Send size={16} aria-hidden="true" />
            Wyślij wiadomość
          </>
        )}
      </button>

      <p className="text-xs text-text-secondary/70 text-center">
        Pola oznaczone <span className="text-red-500" aria-hidden="true">*</span> są wymagane.
      </p>
    </form>
  )
}
