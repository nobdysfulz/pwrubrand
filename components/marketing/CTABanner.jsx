import React from 'react';
import { Button } from '../core/Button.jsx';

export function CTABanner({ title, body, note, primaryLabel, primaryHref = '#', secondaryLabel, secondaryHref = '#', tone = 'gradient' }) {
  const bg = tone === 'gradient' ? 'var(--gradient-brand-band)' : 'var(--gradient-ink)';
  return (
    <section style={{ background: bg, borderRadius: 'var(--radius-lg)', padding: '56px 48px', textAlign: 'center', color: 'rgba(255,255,255,.82)' }}>
      <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-black)', fontSize: 'var(--text-h2)', letterSpacing: 'var(--tracking-tight)', color: 'var(--white)', textWrap: 'balance' }}>{title}</h2>
      {body && <p style={{ maxWidth: 620, margin: '16px auto 0', fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-relaxed)' }}>{body}</p>}
      {note && <p style={{ margin: '20px 0 0', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 17, color: 'var(--white)' }}>{note}</p>}
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 28 }}>
        {primaryLabel && <Button as="a" href={primaryHref} size="lg" variant={tone === 'gradient' ? 'dark' : 'gradient'}>{primaryLabel}</Button>}
        {secondaryLabel && <Button as="a" href={secondaryHref} size="lg" variant="outline-inverse">{secondaryLabel}</Button>}
      </div>
    </section>
  );
}
