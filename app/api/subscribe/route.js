import { CONTACT } from '../../../lib/content';

const hits = new Map(); // best-effort limiter
const limited = (ip) => { const n = Date.now(), a = (hits.get(ip) || []).filter((t) => n - t < 600000); a.push(n); hits.set(ip, a); return a.length > 5; };

export async function POST(req) {
  let d; try { d = await req.json(); } catch { return Response.json({ ok: false }, { status: 400 }); }
  if (d.website) return Response.json({ ok: true }); // honeypot
  const email = String(d.email || '').trim().slice(0, 200);
  if (!/^\S+@\S+\.\S+$/.test(email)) return Response.json({ ok: false, error: 'invalid' }, { status: 400 });
  if (limited(req.headers.get('x-forwarded-for')?.split(',')[0] || 'x')) return Response.json({ ok: false, error: 'rate' }, { status: 429 });
  const key = process.env.RESEND_API_KEY;
  if (!key) return Response.json({ ok: false, error: 'not-configured' }, { status: 503 });
  // For now each signup is emailed to your team. Connect a real list (database or Mailchimp) later.
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL || 'OneRxiv Website <onboarding@resend.dev>', to: [process.env.CONTACT_TO_EMAIL || CONTACT.email], subject: 'New newsletter subscriber', html: `<p>New subscriber: <b>${email.replace(/[<>&"']/g, '')}</b></p>` }),
  });
  return r.ok ? Response.json({ ok: true }) : Response.json({ ok: false, error: 'send-failed' }, { status: 502 });
}