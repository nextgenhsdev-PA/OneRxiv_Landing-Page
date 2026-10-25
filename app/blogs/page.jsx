import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { POSTS } from '../../lib/posts';

export const metadata = { title: 'Blogs | OneRxiv', description: 'Practical reading on running a modern healthcare practice.' };

export default function Blogs() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">Blogs</h1>
        <p className="mt-4 max-w-xl text-lg text-slate2">Practical reading for hospitals, insurers and private practices.</p>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {POSTS.map((p) => (
            <li key={p.slug}><Link href={`/blogs/${p.slug}`} className="block h-full rounded-3xl bg-blush-50 p-7 transition hover:bg-blush-100">
              <div className="mb-6 aspect-video rounded-2xl bg-gradient-to-br from-blush-200 to-white" />
              <p className="text-sm text-brand">{p.read}</p><h2 className="mt-1 text-xl font-semibold">{p.title}</h2><p className="mt-2 text-slate2">{p.excerpt}</p>
            </Link></li>))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
