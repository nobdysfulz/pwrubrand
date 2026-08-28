import React from 'react';

export function Checkbox({ label, checked = false, onChange, disabled = false }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={(e) => onChange && onChange(e.target.checked)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span aria-hidden="true" style={{
        flex: '0 0 auto', width: 20, height: 20, marginTop: 1, borderRadius: 'var(--radius-xs)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: checked ? 'var(--pwru-magenta-500)' : 'var(--white)',
        border: '2px solid ' + (checked ? 'var(--pwru-magenta-500)' : 'var(--border-strong)'),
        transition: 'var(--transition-control)', color: '#fff', fontSize: 13, fontWeight: 700, lineHeight: 1,
      }}>{checked ? '✓' : ''}</span>
      <span style={{ fontSize: 15, color: 'var(--text-body)' }}>{label}</span>
    </label>
  );
}
