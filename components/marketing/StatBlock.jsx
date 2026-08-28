import React from 'react';

export function StatBlock({ value, label, tone = 'light', align = 'left' }) {
  const inverse = tone === 'inverse';
  return (
    <div style={{ textAlign: align }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-black)', fontSize: 46, lineHeight: 1, letterSpacing: '-0.04em', background: 'var(--gradient-brand)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{value}</div>
      <div style={{ marginTop: 10, fontSize: 15, lineHeight: 'var(--leading-normal)', color: inverse ? 'rgba(255,255,255,.7)' : 'var(--text-muted)', maxWidth: 260, marginInline: align === 'center' ? 'auto' : 0 }}>{label}</div>
    </div>
  );
}
