// Shared by browser + server. One routing table = instant answers, and the fallback if the AI is offline.
export const SECTIONS = {
  products: ['#products', 'View products'], ai: ['#ai', 'See AI in action'], journey: ['#journey', 'See how it works'],
  demo: ['#contact', 'Book a demo'], careers: ['#footer', 'See careers'], support: ['#contact', 'Reach support'], none: ['#contact', 'Talk to our team'],
};
const RULES = [
  [/patient|appointment|my record|portal/, 'support', 'For appointments or records, please use your clinic’s patient portal. Please don’t share medical details here.'],
  [/career|job|hiring/, 'careers', 'We’d love to hear from you. Open roles are listed in the footer.'],
  [/support|customer|log ?in|help desk/, 'support', 'Our support team can help current customers directly.'],
  [/price|pricing|cost|quote/, 'demo', 'Pricing depends on your providers and modules. A short demo gets you a clear quote.'],
  [/\bai\b|scribe|ambient|chart|note|document|slow|time/, 'ai', 'Clinical AI drafts notes while you talk, and you review and sign. See it in action.'],
  [/bill|claim|coding|revenue|collect|denial/, 'products', 'Practice Management and AI coding assist help claims go out clean and get paid faster.'],
  [/tele|virtual|video/, 'products', 'Telemedicine is built into the same workflow as in-person visits.'],
  [/secure|hipaa|privacy|compliance/, 'demo', 'Security is built in. Ask us for our current compliance documentation.'],
  [/demo|sales|talk|human|person/, 'demo', 'Great. Pick a time and we’ll tailor a walkthrough to your specialty.'],
  [/product|ehr|learn|feature|platform/, 'products', 'Here is the full platform, from EHR to analytics.'],
];
export function localRoute(q) {
  const t = q.toLowerCase();
  const [, key, reply] = RULES.find(([re]) => re.test(t)) || [0, 'none', 'I can point you to the right place or connect you with our team.'];
  return { reply, href: SECTIONS[key][0], label: SECTIONS[key][1] };
}
// Free text goes to the AI (8s timeout) and falls back to local routing. Chips use localRoute directly: instant, free.
export async function ask(history) {
  const last = history[history.length - 1]?.content || '';
  try {
    const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 8000);
    const r = await fetch('/api/assistant', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: history.slice(-6) }), signal: ctl.signal });
    clearTimeout(t);
    if (!r.ok) throw 0;
    return await r.json();
  } catch { return localRoute(last); }
}
