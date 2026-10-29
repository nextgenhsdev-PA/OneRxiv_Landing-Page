import FaqTabs from './FaqTabs';
import { FAQ_GROUPS, ALL_FAQ } from '../lib/faq';

// Renders the questions plus search-engine FAQ markup.
export default function FaqSection({ homeOnly = false }) {
  const ld = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: ALL_FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
  return (
    <>
      <FaqTabs groups={FAQ_GROUPS} homeOnly={homeOnly} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
