import React from 'react';
import { Logo } from '../core/Logo.jsx';

const COL = { fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 12, letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--pwru-magenta-300)', marginBottom: 14 };

export function SiteFooter({ columns = [], tagline = 'The Real Estate Performance Suite Built for Those Focused On Results', legal = 'Copyright © 2026 Power Unit Coaching LLC.', assetBase = '' }) {
  return (
    <footer style={{ background: 'var(--ink-900)', color: 'rgba(255,255,255,.62)', padding: '56px 40px 28px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(' + Math.max(columns.length, 1) + ', 1fr)', gap: 40, maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div>
          <Logo tone="white" height={30} assetBase={assetBase} />
          <p style={{ marginTop: 18, fontSize: 14.5, lineHeight: 'var(--leading-relaxed)', maxWidth: 300 }}>{tagline}</p>
          <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,.38)' }}>Twin Matching Technology ℗ Patent Pending</p>
        </div>
        {columns.map((c) => (
          <div key={c.title}>
            <div style={COL}>{c.title}</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 9 }}>
              {c.links.map((l) => <li key={l}><a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,.62)', textDecoration: 'none' }}>{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 'var(--container-max)', margin: '40px auto 0', paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.12)', fontSize: 12.5, color: 'rgba(255,255,255,.4)' }}>{legal}</div>
    </footer>
  );
}
