import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { Btn } from '../../../components/ui';
import { POSTS } from '../../../lib/posts';

export const dynamicParams = false;
export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }) {
  const p = POSTS.find((x) => x.slug === params.slug);
  return p ? { title: `${p.title} | OneRxiv`, description: p.excerpt } : {};
}

export default function Post({ params }) {
  const p = POSTS.find((x) => x.slug === params.slug);
  if (!p) notFound();
  const more = POSTS.filter((x) => x.slug !== p.slug);
  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-2xl px-5 py-16 lg:py-24">
        <Link href="/blogs" className="text-sm text-brand hover:underline">Back to all posts</Link>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">{p.title}</h1>
        <p className="mt-3 text-sm text-slate2">{p.category} · OneRxiv team · {p.read}</p>
        <div className="mt-8 space-y-5 text-lg leading-relaxed">{p.body.map((t) => <p key={t}>{t}</p>)}</div>
        <div className="mt-12 rounded-3xl bg-blush-50 p-8 text-center">
          <p className="font-display text-2xl font-semibold">Want to see this in your own workflow?</p>
          <div className="mt-5"><Btn href="/contact">Talk to our team</Btn></div>
        </div>
        <h2 className="mt-14 text-xl font-semibold">Keep reading</h2>
        <ul className="mt-4 space-y-3">{more.map((x) => (<li key={x.slug}><Link href={`/blogs/${x.slug}`} className="text-brand hover:underline">{x.title}</Link></li>))}</ul>
      </main>
      <SiteFooter />
    </>
  );
}
