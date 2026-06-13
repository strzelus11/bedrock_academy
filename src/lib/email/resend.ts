import { Resend } from 'resend'
import type { ContactFormData } from '@/types/contact'

// Lazily instantiate Resend so the build doesn't fail without env vars
function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error(
      'RESEND_API_KEY is not set. Add it to your .env.local file.',
    )
  }
  return new Resend(apiKey)
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const resend = getResend()
  const to = process.env.CONTACT_EMAIL_TO ?? 'biuro@bedrock-academy.pl'

  await resend.emails.send({
    from: 'Bedrock Academy <formularz@bedrock-academy.pl>',
    to,
    replyTo: data.email,
    subject: `Nowa wiadomość od ${data.name} — formularz kontaktowy`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1F3D2B; border-bottom: 2px solid #3E7C3A; padding-bottom: 12px;">
          Nowa wiadomość z formularza kontaktowego
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #1E293B; width: 140px;">Imię i nazwisko:</td>
            <td style="padding: 8px 0; color: #334155;">${escapeHtml(data.name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #1E293B;">E-mail:</td>
            <td style="padding: 8px 0; color: #334155;">${escapeHtml(data.email)}</td>
          </tr>
          ${
            data.phone
              ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #1E293B;">Telefon:</td>
            <td style="padding: 8px 0; color: #334155;">${escapeHtml(data.phone)}</td>
          </tr>
          `
              : ''
          }
        </table>
        <h3 style="color: #1F3D2B; margin-top: 24px;">Wiadomość:</h3>
        <div style="background: #F6F8F2; border-left: 4px solid #3E7C3A; padding: 16px; border-radius: 4px; color: #334155; line-height: 1.6;">
          ${escapeHtml(data.message).replace(/\n/g, '<br>')}
        </div>
        <p style="color: #64748B; font-size: 12px; margin-top: 24px; border-top: 1px solid #E2E8F0; padding-top: 12px;">
          Ta wiadomość została wysłana przez formularz kontaktowy na stronie bedrock-academy.pl.<br>
          Użytkownik wyraził zgodę na przetwarzanie danych osobowych (RODO).
        </p>
      </div>
    `,
  })
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
