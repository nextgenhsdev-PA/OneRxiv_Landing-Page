import './globals.css';
import { Fraunces, Instrument_Sans } from 'next/font/google';
import Chat from '../components/Chat';

const display = Fraunces({ subsets: ['latin'], variable: '--font-display', axes: ['opsz'] });
const sans = Instrument_Sans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'OneRxiv | One patient. One record. One ecosystem.',
  description: 'OneRxiv connects EHR, telemedicine, billing and AI documentation into one closed-loop platform for modern practices.',
  openGraph: { title: 'OneRxiv', description: 'One patient. One record. One ecosystem.', images: ['/logo.png'] },
};

export default function RootLayout({ children }) {
  const ld = { '@context': 'https://schema.org', '@type': 'Organization', name: 'OneRxiv', logo: '/logo.png' };
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
        {children}
        <Chat />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </body>
    </html>
  );
}
