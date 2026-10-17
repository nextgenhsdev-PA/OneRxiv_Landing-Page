import Link from 'next/link';

export const Wordmark = ({ className = '' }) => (
  <span className={`font-display text-3xl font-bold tracking-tight text-ink ${className}`}>One<span className="text-brand">R</span>xiv</span>
);

export const Btn = ({ href, children, ghost }) => (
  <Link href={href} className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 font-medium transition ${ghost ? 'border border-ink/20 bg-white hover:border-brand hover:text-brand' : 'bg-brand text-white shadow-lg shadow-brand/25 hover:bg-[#a90d26]'}`}>{children}</Link>
);
