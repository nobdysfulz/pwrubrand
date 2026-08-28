import React from 'react';
import { Card } from '../core/Card.jsx';
import { Icon } from '../core/Icon.jsx';

export function FeatureCard({ icon = 'zap', title, body, linkLabel, href = '#', image, tone = 'light' }) {
  const inverse = tone === 'ink';
  return (
    <Card tone={tone} padding={0} interactive style={{ display: 'flex', flexDirection: 'column' }}>
      {image && <div style={{ height: 168, background: `var(--ink-100) url(${image}) center/cover no-repeat` }} />}
      <div style={{ padding: 26, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        {!image && (
          <span style={{ width: 46, height: 46, borderRadius: 'var(--radius-md)', background: 'var(--gradient-brand)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name={icon} size={22} color="#fff" />
          </span>
        )}
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 20, lineHeight: 1.25, color: inverse ? 'var(--white)' : 'var(--text-strong)', margin: 0 }}>{title}</h3>
        {body && <p style={{ margin: 0, fontSize: 15, lineHeight: 'var(--leading-relaxed)', color: inverse ? 'rgba(255,255,255,.72)' : 'var(--text-muted)' }}>{body}</p>}
        {linkLabel && (
          <a href={href} style={{ marginTop: 'auto', paddingTop: 8, display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 13, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--pwru-magenta-600)', textDecoration: 'none' }}>
            {linkLabel} <Icon name="arrow-right" size={16} />
          </a>
        )}
      </div>
    </Card>
  );
}
