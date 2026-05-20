import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, subject, message } = data;

    if (!email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('[Contact] RESEND_API_KEY not configured — logging locally');
      console.log('[Contact form submission]', { firstName, lastName, email, subject, message });
      return NextResponse.json({ success: true });
    }

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'contact@welcomingplanet.com',
        to: 'hello@welcomingplanet.com',
        reply_to: email,
        subject: `[Contact] ${subject} — ${firstName} ${lastName}`,
        html: `<p><strong>From:</strong> ${firstName} ${lastName} (${email})</p><p><strong>Subject:</strong> ${subject}</p><p>${message}</p>`,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact] Error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
