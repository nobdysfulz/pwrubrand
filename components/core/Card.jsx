import React from 'react';

const TONES = {
  light: { background: 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid var(--border-subtle)' },
  subtle: { background: 'var(--surface-subtle)', color: 'var(--text-body)', border: '1px solid var(--border-subtle)' },
  ink: { background: 'var(--gradient-ink)', color: 'rgba(255,255,255,.78)', border: '1px solid rgba(255,255,255,.10)' },
  brand: { background: 'var(--gradient-brand)', color: 'rgba(255,255,255,.90)', border: '1px solid transparent' },
};

export function Card({ children, tone = 'light', padding = 28, interactive = false, topAccent = false, style, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', overflow: 'hidden', padding, borderRadius: 'var(--radius-card)',
        boxShadow: interactive && hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: interactive && hover ? 'translateY(-3px)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
        cursor: interactive ? 'pointer' : 'default', ...TONES[tone], ...style,
      }}>
      {topAccent && <span style={{ position: 'absolute', insetInline: 0, top: 0, height: 4, background: 'var(--gradient-brand)' }} />}
      {children}
    </div>
  );
}
