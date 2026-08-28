import React from 'react';

export function Input({ label, hint, error, type = 'text', textarea = false, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const field = {
    width: '100%', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-strong)',
    background: 'var(--white)', padding: textarea ? '12px 14px' : '0 14px', height: textarea ? 'auto' : 48,
    minHeight: textarea ? 104 : undefined, resize: textarea ? 'vertical' : undefined,
    borderRadius: 'var(--radius-sm)', outline: 'none', transition: 'var(--transition-control)',
    border: '1px solid ' + (error ? 'var(--red-500)' : focus ? 'var(--pwru-magenta-500)' : 'var(--border-subtle)'),
    boxShadow: focus ? 'var(--focus-ring)' : 'none',
  };
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <label style={{ display: 'block' }}>
      {label && <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--ink-700)', marginBottom: 8 }}>{label}</span>}
      <Tag type={textarea ? undefined : type} style={field} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest} />
      {(hint || error) && <span style={{ display: 'block', marginTop: 6, fontSize: 13, color: error ? 'var(--red-500)' : 'var(--text-muted)' }}>{error || hint}</span>}
    </label>
  );
}
