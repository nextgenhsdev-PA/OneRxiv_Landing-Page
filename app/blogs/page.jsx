import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { POSTS, CATEGORIES } from '../../lib/posts';

export const metadata = { title: 'Blogs | OneRxiv', description: 'Practical reading on running a modern healthcare practice.' };

export default function Blogs({ searchParams }) {
  const cat = CATEGORIES.includes(searchParams?.c) ? searchParams.c : null;
  const list = cat ? POSTS.filter((p) => p.category === cat) : POSTS;
  const chip = (on) => `rounded-full border px-4 py-2 text-sm font-medium transition ${on ? 'border-brand bg-brand text-white' : 'border-blush-300 hover:border-brand'}`;
  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">Blogs</h1>
        <p className="mt-4 max-w-xl text-lg text-slate2">Practical reading for hospitals, insurers and private practices.</p>
        <nav aria-label="Categories" className="mt-8 flex flex-wrap gap-2">
          <Link href="/blogs" className={chip(!cat)}>All</Link>
          {CATEGORIES.map((c) => (<Link key={c} href={`/blogs?c=${c}`} className={chip(cat === c)}>{c}</Link>))}
        </nav>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {list.map((p) => (
            <li key={p.slug}><Link href={`/blogs/${p.slug}`} className="block h-full rounded-3xl bg-blush-50 p-7 transition hover:bg-blush-100">
              <div className="mb-6 aspect-video rounded-2xl bg-gradient-to-br from-blush-200 to-white" />
              <p className="text-sm text-brand">{p.category} · {p.read}</p><h2 className="mt-1 text-xl font-semibold">{p.title}</h2><p className="mt-2 text-slate2">{p.excerpt}</p>
            </Link></li>))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
