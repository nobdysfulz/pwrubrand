import React from 'react';

export function SectionHeading({ eyebrow, title, lede, align = 'left', tone = 'light', maxWidth = 760, style }) {
  const inverse = tone === 'inverse';
  return (
    <header style={{ textAlign: align, maxWidth, marginInline: align === 'center' ? 'auto' : 0, ...style }}>
      {eyebrow && (
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 12, letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: inverse ? 'var(--pwru-magenta-300)' : 'var(--pwru-magenta-500)', marginBottom: 14 }}>{eyebrow}</div>
      )}
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-extrabold)', fontSize: 'var(--text-h2)', lineHeight: 'var(--leading-snug)', letterSpacing: 'var(--tracking-tight)', color: inverse ? 'var(--white)' : 'var(--text-strong)', margin: 0, textWrap: 'balance' }}>{title}</h2>
      {lede && <p style={{ marginTop: 16, marginBottom: 0, fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-relaxed)', color: inverse ? 'rgba(255,255,255,.72)' : 'var(--text-muted)', textWrap: 'pretty' }}>{lede}</p>}
    </header>
  );
}
