import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { Button } from '../core/Button.jsx';
import { Icon } from '../core/Icon.jsx';

export function PricingCard({ name, blurb, price, period = '/mo', priceNote, features = [], ctaLabel, href = '#', featured = false }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', padding: 32, borderRadius: 'var(--radius-card)', position: 'relative',
      background: featured ? 'var(--gradient-ink)' : 'var(--white)',
      border: '1px solid ' + (featured ? 'transparent' : 'var(--border-subtle)'),
      boxShadow: featured ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      color: featured ? 'rgba(255,255,255,.74)' : 'var(--text-muted)',
    }}>
      {featured && <span style={{ position: 'absolute', top: 20, right: 20 }}><Badge tone="solid">Most Popular</Badge></span>}
      <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-extrabold)', fontSize: 20, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: featured ? 'var(--white)' : 'var(--text-strong)' }}>{name}</h3>
      <p style={{ margin: '10px 0 22px', fontSize: 14.5, lineHeight: 'var(--leading-relaxed)' }}>{blurb}</p>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, fontFamily: 'var(--font-display)', color: featured ? 'var(--white)' : 'var(--text-strong)' }}>
        <span style={{ fontSize: 52, fontWeight: 'var(--weight-black)', letterSpacing: '-0.04em', lineHeight: 1 }}>{price}</span>
        {period && <span style={{ fontSize: 16, fontWeight: 'var(--weight-semibold)', color: featured ? 'rgba(255,255,255,.6)' : 'var(--text-muted)' }}>{period}</span>}
      </div>
      {priceNote && <div style={{ marginTop: 8, fontSize: 13 }}>{priceNote}</div>}
      <div style={{ margin: '24px 0', height: 1, background: featured ? 'rgba(255,255,255,.14)' : 'var(--border-subtle)' }} />
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 12 }}>
        {features.map((t, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, lineHeight: 1.45, color: featured ? 'rgba(255,255,255,.86)' : 'var(--text-body)' }}>
            <Icon name="check" size={18} color="var(--pwru-magenta-400)" style={{ marginTop: 1 }} />{t}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 28, paddingTop: 4 }}>
        <Button as="a" href={href} fullWidth variant={featured ? 'gradient' : 'outline'}>{ctaLabel}</Button>
      </div>
    </div>
  );
}
