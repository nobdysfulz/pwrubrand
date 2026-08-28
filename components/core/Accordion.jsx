import React from 'react';

export function Accordion({ items = [], defaultOpen = 0, allowMultiple = false }) {
  const [open, setOpen] = React.useState(allowMultiple ? (defaultOpen === null ? [] : [defaultOpen]) : defaultOpen);
  const isOpen = (i) => (allowMultiple ? open.includes(i) : open === i);
  const toggle = (i) => {
    if (allowMultiple) setOpen((o) => (o.includes(i) ? o.filter((x) => x !== i) : [...o, i]));
    else setOpen((o) => (o === i ? null : i));
  };
  return (
    <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
      {items.map((it, i) => (
        <div key={i} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
          <button type="button" onClick={() => toggle(i)} style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
            background: 'transparent', border: 0, padding: '20px 4px', cursor: 'pointer', textAlign: 'left',
            fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 17,
            color: isOpen(i) ? 'var(--pwru-magenta-600)' : 'var(--text-strong)', transition: 'var(--transition-control)',
          }}>
            {it.title}
            <span style={{ flex: '0 0 auto', width: 26, height: 26, borderRadius: 'var(--radius-pill)', background: isOpen(i) ? 'var(--pwru-magenta-500)' : 'var(--ink-100)', color: isOpen(i) ? '#fff' : 'var(--ink-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, lineHeight: 1, transition: 'var(--transition-control)' }}>{isOpen(i) ? '–' : '+'}</span>
          </button>
          {isOpen(i) && <div style={{ padding: '0 4px 22px', fontSize: 15, lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)' }}>{it.body}</div>}
        </div>
      ))}
    </div>
  );
}
