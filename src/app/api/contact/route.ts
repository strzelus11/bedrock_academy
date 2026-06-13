import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validation/contact-schema'
import { sendContactEmail } from '@/lib/email/resend'

export async function POST(request: NextRequest) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: 'Nieprawidłowy format danych.' },
      { status: 400 },
    )
  }

  // Honeypot check — if 'website' field is non-empty, silently accept (bot)
  if (
    typeof body === 'object' &&
    body !== null &&
    'website' in body &&
    typeof (body as Record<string, unknown>).website === 'string' &&
    (body as Record<string, unknown>).website !== ''
  ) {
    return NextResponse.json({ success: true })
  }

  const parsed = contactSchema.safeParse(body)

  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]
    return NextResponse.json(
      { error: firstIssue?.message ?? 'Błąd walidacji danych.' },
      { status: 422 },
    )
  }

  try {
    await sendContactEmail(parsed.data)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[contact/route] sendContactEmail error:', error)
    return NextResponse.json(
      { error: 'Nie udało się wysłać wiadomości. Spróbuj ponownie lub skontaktuj się bezpośrednio.' },
      { status: 500 },
    )
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 })
}
