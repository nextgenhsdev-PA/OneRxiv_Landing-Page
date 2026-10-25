import { ImageResponse } from 'next/og';

export const alt = 'OneRxiv: One patient. One record. One ecosystem.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 90, background: 'linear-gradient(135deg,#FFF6F8,#F9CFD9)', color: '#1B2230' }}>
        <div style={{ display: 'flex', fontSize: 96, fontWeight: 700 }}>One<span style={{ color: '#C8102E' }}>R</span>xiv</div>
        <div style={{ display: 'flex', fontSize: 52, marginTop: 28 }}>One patient. One record.</div>
        <div style={{ display: 'flex', fontSize: 52, color: '#C8102E' }}>One ecosystem.</div>
        <div style={{ display: 'flex', fontSize: 28, marginTop: 40, color: '#5B6474' }}>Healthcare software for hospitals, insurers and practitioners</div>
      </div>
    ),
    size
  );
}
