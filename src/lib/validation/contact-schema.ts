import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Imię i nazwisko musi mieć co najmniej 2 znaki.')
    .max(100, 'Imię i nazwisko jest za długie.'),
  email: z.string().email('Podaj poprawny adres e-mail.'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\+\-\(\)]{7,20}$/.test(val),
      'Podaj poprawny numer telefonu.',
    ),
  message: z
    .string()
    .min(10, 'Wiadomość musi mieć co najmniej 10 znaków.')
    .max(2000, 'Wiadomość jest za długa (max 2000 znaków).'),
  rodoConsent: z.boolean().refine((val) => val === true, {
    message: 'Zgoda na przetwarzanie danych jest wymagana.',
  }),
  // Honeypot — powinno być puste
  website: z.string().optional(),
})

export type ContactSchemaData = z.infer<typeof contactSchema>
