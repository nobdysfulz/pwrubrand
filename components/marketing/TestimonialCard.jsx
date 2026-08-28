import React from 'react';

export function TestimonialCard({ quote, name, role, avatar, result, tone = 'light' }) {
  const inverse = tone === 'ink';
  return (
    <figure style={{
      margin: 0, padding: 28, borderRadius: 'var(--radius-card)', position: 'relative', overflow: 'hidden',
      background: inverse ? 'var(--gradient-ink)' : 'var(--white)',
      border: '1px solid ' + (inverse ? 'rgba(255,255,255,.1)' : 'var(--border-subtle)'),
      boxShadow: 'var(--shadow-sm)',
    }}>
      <span style={{ position: 'absolute', insetInline: 0, top: 0, height: 4, background: 'var(--gradient-brand)' }} />
      {result && <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-black)', fontSize: 30, letterSpacing: '-0.03em', color: 'var(--pwru-magenta-500)', marginBottom: 10 }}>{result}</div>}
      <blockquote style={{ margin: 0, fontSize: 16, lineHeight: 'var(--leading-relaxed)', color: inverse ? 'rgba(255,255,255,.86)' : 'var(--text-body)' }}>“{quote}”</blockquote>
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 22 }}>
        <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-pill)', flex: '0 0 auto', background: avatar ? `url(${avatar}) center/cover no-repeat` : 'var(--gradient-brand)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15 }}>
          {!avatar && name ? name.trim().charAt(0) : ''}
        </span>
        <span>
          <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 15, color: inverse ? 'var(--white)' : 'var(--text-strong)' }}>{name}</span>
          <span style={{ display: 'block', fontSize: 13, color: inverse ? 'rgba(255,255,255,.55)' : 'var(--text-muted)' }}>{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
