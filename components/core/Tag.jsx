import React from 'react';

export function Tag({ children, active = false, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-semibold)', fontSize: 13, padding: '7px 14px',
        borderRadius: 'var(--radius-pill)', cursor: 'pointer', transition: 'var(--transition-control)',
        background: active ? 'var(--ink-900)' : hover ? 'var(--ink-100)' : 'var(--white)',
        color: active ? 'var(--white)' : 'var(--ink-700)',
        border: '1px solid ' + (active ? 'var(--ink-900)' : 'var(--border-subtle)'), ...style,
      }}>
      {children}
    </button>
  );
}
