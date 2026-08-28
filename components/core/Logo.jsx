import React from 'react';

const SRC = {
  black: 'assets/pwru-logo-black.png',
  white: 'assets/pwru-logo-white.png',
};

export function Logo({ tone = 'black', height = 36, assetBase = '', wordmarkFallback = false, style }) {
  if (wordmarkFallback) {
    return (
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: height * 0.78, letterSpacing: '-0.03em', color: tone === 'white' ? 'var(--white)' : 'var(--ink-900)', lineHeight: 1, ...style }}>
        PWRU
      </span>
    );
  }
  const base = assetBase ? assetBase.replace(/\/$/, '') + '/' : '';
  return <img src={base + SRC[tone]} alt="Power Unit Coaching" style={{ height, width: 'auto', display: 'block', ...style }} />;
}
