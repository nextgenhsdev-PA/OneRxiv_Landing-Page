const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://onerxivlandingpagecv.vercel.app';

export default function robots() {
  return { rules: { userAgent: '*', allow: '/', disallow: ['/admin', '/login', '/api/'] }, sitemap: `${base}/sitemap.xml` };
}
