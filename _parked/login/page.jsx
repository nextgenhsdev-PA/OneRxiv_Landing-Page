import Link from 'next/link';
import { redirect } from 'next/navigation';
import { auth, signIn } from '../../auth';
import { Wordmark } from '../../components/ui';

export const metadata = { title: 'Log in | OneRxiv', robots: { index: false } };

export default async function Login({ searchParams }) {
  const s = await auth();
  if (s?.user) redirect('/admin');

  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-br from-blush-50 to-blush-100 px-5">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl">
        <Link href="/" aria-label="OneRxiv home"><Wordmark /></Link>
        <h1 className="mt-6 font-display text-3xl font-semibold">Welcome back</h1>
        <p className="mt-2 text-slate2">Sign in with your Google account to continue.</p>

        {searchParams?.error && (
          <p role="alert" className="mt-5 rounded-xl bg-blush-100 p-3 text-sm">
            That Google account isn’t approved yet. Please ask an OneRxiv admin to add your email, then try again.
          </p>
        )}

        <form action={async () => { 'use server'; await signIn('google', { redirectTo: '/admin' }); }} className="mt-6">
          <button className="flex w-full items-center justify-center gap-3 rounded-full border border-ink/20 bg-white py-3.5 font-medium transition hover:border-brand hover:shadow-md">
            <span aria-hidden className="grid h-6 w-6 place-items-center rounded-full bg-brand text-sm font-bold text-white">G</span>
            Continue with Google
          </button>
        </form>
        <p className="mt-6 text-xs text-slate2">For company and individual accounts. Please don’t enter patient information anywhere on this site.</p>
        <Link href="/" className="mt-4 inline-block text-sm text-brand hover:underline">Back to the website</Link>
      </div>
    </main>
  );
}
