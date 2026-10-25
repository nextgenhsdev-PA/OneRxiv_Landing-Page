import { CONTACT } from '../../../lib/content';

const hits = new Map(); // best-effort limiter; use Upstash/Redis for strict limits on serverless
const limited = (ip) => { const n = Date.now(), a = (hits.get(ip) || []).filter((t) => n - t < 600000); a.push(n); hits.set(ip, a); return a.length > 5; };
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clean = (v, n) => String(v || '').trim().slice(0, n);

export async function POST(req) {
  let d; try { d = await req.json(); } catch { return Response.json({ ok: false }, { status: 400 }); }
  if (d.website) return Response.json({ ok: true }); // honeypot: bots fill this
  const f = { name: clean(d.name, 120), email: clean(d.email, 200), phone: clean(d.phone, 40), org: clean(d.org, 60), size: clean(d.size, 40), topic: clean(d.topic, 60), message: clean(d.message, 2000) };
  if (!f.name || !/^\S+@\S+\.\S+$/.test(f.email) || !f.message) return Response.json({ ok: false, error: 'invalid' }, { status: 400 });
  if (limited(req.headers.get('x-forwarded-for')?.split(',')[0] || 'x')) return Response.json({ ok: false, error: 'rate' }, { status: 429 });

  const key = process.env.RESEND_API_KEY;
  if (!key) return Response.json({ ok: false, error: 'not-configured' }, { status: 503 }); // form then shows the email fallback

  const rows = Object.entries({ Name: f.name, Email: f.email, Phone: f.phone, Represents: f.org, 'Team size': f.size, Topic: f.topic, Message: f.message })
    .filter(([, v]) => v).map(([k, v]) => `<p><b>${k}:</b> ${esc(v).replace(/\n/g, '<br>')}</p>`).join('');
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || 'OneRxiv Website <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO_EMAIL || CONTACT.email],
      reply_to: f.email,
      subject: `New enquiry: ${f.topic || 'Contact'} from ${f.name}`,
      html: rows,
    }),
  });
  return r.ok ? Response.json({ ok: true }) : Response.json({ ok: false, error: 'send-failed' }, { status: 502 });
}