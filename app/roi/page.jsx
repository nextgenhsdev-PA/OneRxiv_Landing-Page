import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import ROICalculator from '../../components/ROICalculator';

export const metadata = { title: 'Time savings calculator | OneRxiv', description: 'Estimate how much documentation time your practice could save.' };

export default function Roi() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">What could your team get back?</h1>
        <p className="mb-10 mt-4 max-w-2xl text-lg text-slate2">Enter a few numbers about your practice to estimate the documentation time you could free up.</p>
        <ROICalculator />
      </main>
      <SiteFooter />
    </>
  );
}
