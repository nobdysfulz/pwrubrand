import React from 'react';
import { Logo } from '../core/Logo.jsx';
import { Button } from '../core/Button.jsx';

export function SiteHeader({ items = [], active, onNavigate, assetBase = '', tone = 'light', onLogin }) {
  const inverse = tone === 'inverse';
  return (
    <header style={{
      display: 'flex', alignItems: 'center', gap: 32, padding: '18px 40px',
      background: inverse ? 'rgba(13,13,13,.72)' : 'var(--white)',
      backdropFilter: inverse ? 'blur(14px)' : 'none',
      borderBottom: '1px solid ' + (inverse ? 'rgba(255,255,255,.12)' : 'var(--border-subtle)'),
    }}>
      <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('Home'); }} style={{ display: 'flex' }}>
        <Logo tone={inverse ? 'white' : 'black'} height={30} assetBase={assetBase} />
      </a>
      <nav style={{ display: 'flex', gap: 26, marginLeft: 8 }}>
        {items.map((it) => {
          const on = it === active;
          return (
            <a key={it} href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(it); }}
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 14,
                textDecoration: 'none', paddingBottom: 3, transition: 'var(--transition-control)',
                color: on ? (inverse ? 'var(--white)' : 'var(--pwru-magenta-600)') : inverse ? 'rgba(255,255,255,.72)' : 'var(--ink-700)',
                borderBottom: '2px solid ' + (on ? 'var(--pwru-magenta-500)' : 'transparent'),
              }}>{it}</a>
          );
        })}
      </nav>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onLogin && onLogin(); }} style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 14, color: inverse ? 'rgba(255,255,255,.8)' : 'var(--ink-700)', textDecoration: 'none' }}>Login</a>
        <Button size="sm" variant={inverse ? 'gradient' : 'primary'}>Register</Button>
      </div>
    </header>
  );
}
