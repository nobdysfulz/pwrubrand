import React from 'react';

const TONES = {
  brand: { background: 'var(--pwru-magenta-50)', color: 'var(--pwru-magenta-700)', border: '1px solid var(--pwru-magenta-100)' },
  violet: { background: 'var(--pwru-violet-50)', color: 'var(--pwru-violet-600)', border: '1px solid var(--pwru-violet-100)' },
  solid: { background: 'var(--pwru-magenta-500)', color: 'var(--white)', border: '1px solid var(--pwru-magenta-500)' },
  ink: { background: 'var(--ink-900)', color: 'var(--white)', border: '1px solid var(--ink-900)' },
  neutral: { background: 'var(--ink-100)', color: 'var(--ink-700)', border: '1px solid var(--ink-200)' },
  success: { background: 'var(--green-50)', color: 'var(--green-500)', border: '1px solid rgba(23,166,115,.28)' },
  warning: { background: 'var(--amber-50)', color: '#8A5B00', border: '1px solid rgba(240,162,2,.32)' },
  danger: { background: 'var(--red-50)', color: 'var(--red-500)', border: '1px solid rgba(214,40,40,.28)' },
};

export function Badge({ children, tone = 'brand', size = 'md', style }) {
  const s = size === 'sm' ? { fontSize: 10, padding: '3px 8px' } : { fontSize: 11, padding: '5px 12px' };
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)', lineHeight: 1.4, whiteSpace: 'nowrap', ...s, ...TONES[tone], ...style }}>
      {children}
    </span>
  );
}
