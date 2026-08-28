import React from 'react';

const CDN = 'https://unpkg.com/lucide-static@0.469.0/icons/';

/** Lucide (CDN) glyph rendered as a CSS mask so it inherits any brand colour. */
export function Icon({ name = 'zap', size = 20, color = 'currentColor', strokeAccent = false, style }) {
  const url = `url("${CDN}${name}.svg")`;
  return (
    <span aria-hidden="true" style={{
      display: 'inline-block', width: size, height: size, flex: '0 0 auto',
      background: strokeAccent ? 'var(--gradient-brand)' : color,
      WebkitMask: `${url} center / contain no-repeat`, mask: `${url} center / contain no-repeat`,
      ...style,
    }} />
  );
}
