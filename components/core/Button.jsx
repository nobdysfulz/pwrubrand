import React from 'react';

const SIZES = {
  sm: { padding: '8px 16px', fontSize: 13, minHeight: 36 },
  md: { padding: '12px 24px', fontSize: 15, minHeight: 46 },
  lg: { padding: '16px 32px', fontSize: 16, minHeight: 56 },
};

const VARIANTS = {
  primary: { background: 'var(--action-primary)', color: 'var(--text-on-brand)', border: '2px solid var(--action-primary)', boxShadow: 'var(--shadow-brand)' },
  gradient: { background: 'var(--gradient-brand)', color: 'var(--text-on-brand)', border: '2px solid transparent', boxShadow: 'var(--shadow-brand)' },
  dark: { background: 'var(--action-secondary)', color: 'var(--text-inverse)', border: '2px solid var(--action-secondary)', boxShadow: 'var(--shadow-sm)' },
  outline: { background: 'transparent', color: 'var(--text-strong)', border: '2px solid var(--ink-900)', boxShadow: 'none' },
  'outline-brand': { background: 'transparent', color: 'var(--pwru-magenta-600)', border: '2px solid var(--pwru-magenta-500)', boxShadow: 'none' },
  'outline-inverse': { background: 'transparent', color: 'var(--white)', border: '2px solid rgba(255,255,255,.6)', boxShadow: 'none' },
  ghost: { background: 'transparent', color: 'var(--text-strong)', border: '2px solid transparent', boxShadow: 'none' },
};

const HOVER = {
  primary: { background: 'var(--action-primary-hover)', borderColor: 'var(--action-primary-hover)' },
  gradient: { filter: 'saturate(1.1) brightness(1.05)' },
  dark: { background: 'var(--action-secondary-hover)', borderColor: 'var(--action-secondary-hover)' },
  outline: { background: 'var(--ink-900)', color: 'var(--white)' },
  'outline-brand': { background: 'var(--pwru-magenta-500)', color: 'var(--white)' },
  'outline-inverse': { background: 'rgba(255,255,255,.14)', borderColor: 'var(--white)' },
  ghost: { background: 'var(--ink-100)' },
};

export function Button({ children, variant = 'primary', size = 'md', iconLeft, iconRight, fullWidth = false, disabled = false, as = 'button', href, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const Tag = as === 'a' ? 'a' : 'button';
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
    fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)',
    letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', textDecoration: 'none',
    borderRadius: 0, cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-control), filter var(--dur-base) var(--ease-standard)',
    width: fullWidth ? '100%' : 'auto', opacity: disabled ? 0.45 : 1,
    transform: active && !disabled ? 'translateY(1px) scale(.99)' : 'none',
    ...SIZES[size], ...VARIANTS[variant], ...(hover && !disabled ? HOVER[variant] : null), ...style,
  };
  return (
    <Tag href={href} onClick={disabled ? undefined : onClick} disabled={Tag === 'button' ? disabled : undefined} style={base}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)} onMouseUp={() => setActive(false)} {...rest}>
      {iconLeft}{children}{iconRight}
    </Tag>
  );
}
