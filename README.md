# OneRxiv landing page
npm install && npm run dev  (http://localhost:3000)

- Content lives at the top of app/page.jsx. Items marked VERIFY need approved claims, logos and permissions.
- Optional hero loop: public/hero.mp4 (<3 MB) and public/hero-poster.jpg
- Form posts to app/api/demo/route.js: connect your CRM there.

## AI assistant
Copy .env.example to .env.local and add ANTHROPIC_API_KEY. Without a key (or if the API fails/rate-limits) the assistant falls back to the built-in routing in lib/assistant.js, so the site never breaks.
The key stays server-side in app/api/assistant/route.js. Never expose it in client code.
