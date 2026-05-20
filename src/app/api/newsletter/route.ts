import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('[Newsletter] RESEND_API_KEY not configured — skipping email send');
      return NextResponse.json({ success: true });
    }

    const res = await fetch('https://api.resend.com/audiences/newsletter/members', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('[Newsletter] Resend error:', text);
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Newsletter] Error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
