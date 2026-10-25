import { AUDIENCES } from '../lib/audiences';
import { POSTS } from '../lib/posts';
import { PRODUCT_PAGES } from '../lib/products';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://onerxivlandingpagecv.vercel.app';

export default function sitemap() {
  const paths = ['', '/contact', '/blogs', '/roi', '/security', '/terms', '/privacy',
    ...AUDIENCES.map((a) => `/${a.slug}`), ...POSTS.map((p) => `/blogs/${p.slug}`), ...PRODUCT_PAGES.map((p) => `/products/${p.slug}`)];
  return paths.map((p) => ({ url: base + p, lastModified: new Date() }));
}
