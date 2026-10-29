import Link from 'next/link';
import { Wordmark } from '../../components/ui';

export const metadata = { title: 'Sign in | OneRxiv', robots: { index: false } };

// Placeholder until real sign-in is connected (the Google login files are parked in _parked).
export default function Login() {
  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-br from-blush-50 to-blush-100 px-5">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl">
        <Link href="/" aria-label="OneRxiv home"><Wordmark /></Link>
        <h1 className="mt-6 font-display text-3xl font-semibold">Sign in is coming soon</h1>
        <p className="mt-3 text-slate2">Client sign-in opens when your organization goes live with OneRxiv. Need access or have a question?</p>
        <div className="mt-6 flex flex-col gap-3">
          <Link href="/contact" className="rounded-full bg-brand py-3.5 font-medium text-white hover:bg-[#a90d26]">Contact our team</Link>
          <Link href="/" className="text-sm text-brand hover:underline">Back to the website</Link>
        </div>
        <p className="mt-6 text-xs text-slate2">Please don’t enter patient information anywhere on this site.</p>
      </div>
    </main>
  );
}
