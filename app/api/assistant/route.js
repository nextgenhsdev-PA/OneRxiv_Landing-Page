import { SECTIONS, localRoute } from '../../../lib/assistant';

const SYSTEM = `You are the website assistant for OneRxiv, a healthcare software company: "One patient. One record. One ecosystem."
Products: EHR, Telemedicine, Practice Management, Patient Engagement, AI Automation (ambient charting, Intelligent Agent, coding assist), Reporting & Analytics. Specialties: primary care, behavioral health, pain and spine, multi-location groups.
Rules: be warm and concise (max 60 words). Never give medical advice or ask for personal health information; patients are sent to their clinic's portal. Never state statistics, awards, certifications, pricing or customer names; offer a demo instead. If unsure, say so and suggest talking to the team. AI drafts notes and clinicians always review and sign.
Reply ONLY with JSON: {"reply":"...","section":"products|ai|journey|demo|careers|support|none"}`;

const hits = new Map(); // best-effort limiter; use Upstash/Redis on serverless
const limited = (ip) => { const n = Date.now(), a = (hits.get(ip) || []).filter((t) => n - t < 60000); a.push(n); hits.set(ip, a); return a.length > 10; };

export async function POST(req) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'x';
  let messages = [];
  try { ({ messages } = await req.json()); } catch {}
  messages = (messages || []).slice(-6).map((m) => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: String(m.content || '').slice(0, 500) }));
  const last = messages[messages.length - 1]?.content || '';
  if (!last || messages[0]?.role !== 'user') return Response.json(localRoute(last));
  if (!process.env.ANTHROPIC_API_KEY || limited(ip)) return Response.json(localRoute(last));
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-5-5', max_tokens: 250, system: SYSTEM, messages }),
    });
    const data = await r.json();
    const raw = (data.content?.[0]?.text || '').replace(/```json|```/g, '').trim();
    const { reply, section } = JSON.parse(raw);
    const [href, label] = SECTIONS[section] || SECTIONS.none;
    return Response.json({ reply: String(reply).slice(0, 600), href, label });
  } catch { return Response.json(localRoute(last)); }
}
