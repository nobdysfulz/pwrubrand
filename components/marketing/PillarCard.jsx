import React from 'react';

export function PillarCard({ number, title, body, active = false, onClick }) {
  const [hover, setHover] = React.useState(false);
  const lit = active || hover;
  return (
    <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', padding: '24px 24px 24px 26px', borderRadius: 'var(--radius-card)',
        background: active ? 'var(--gradient-brand)' : 'var(--white)',
        border: '1px solid ' + (active ? 'transparent' : 'var(--border-subtle)'),
        boxShadow: lit ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        cursor: onClick ? 'pointer' : 'default', transition: 'box-shadow var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)',
      }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-black)', fontSize: 40, lineHeight: 1, letterSpacing: '-0.04em', color: active ? 'rgba(255,255,255,.55)' : 'var(--ink-200)', marginBottom: 10 }}>
        {String(number).padStart(2, '0')}
      </div>
      <h4 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-extrabold)', fontSize: 18, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: active ? 'var(--white)' : 'var(--text-strong)' }}>{title}</h4>
      <p style={{ margin: 0, fontSize: 14.5, lineHeight: 'var(--leading-relaxed)', color: active ? 'rgba(255,255,255,.86)' : 'var(--text-muted)' }}>{body}</p>
    </div>
  );
}
