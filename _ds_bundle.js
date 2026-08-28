/* @ds-bundle: {"format":4,"namespace":"PowerUnitCoachingDesignSystem_dff922","components":[{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"CTABanner","sourcePath":"components/marketing/CTABanner.jsx"},{"name":"FeatureCard","sourcePath":"components/marketing/FeatureCard.jsx"},{"name":"PillarCard","sourcePath":"components/marketing/PillarCard.jsx"},{"name":"PricingCard","sourcePath":"components/marketing/PricingCard.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"SiteFooter","sourcePath":"components/marketing/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/marketing/SiteHeader.jsx"},{"name":"StatBlock","sourcePath":"components/marketing/StatBlock.jsx"},{"name":"TestimonialCard","sourcePath":"components/marketing/TestimonialCard.jsx"}],"sourceHashes":{"components/core/Accordion.jsx":"8bb2be35a0cb","components/core/Badge.jsx":"b41afc68e985","components/core/Button.jsx":"2c523e1fa77d","components/core/Card.jsx":"68b68b2ef523","components/core/Checkbox.jsx":"7b8c92cd7240","components/core/Icon.jsx":"61b719786780","components/core/Input.jsx":"f79bde1172ae","components/core/Logo.jsx":"cd87ac1d01cf","components/core/Tag.jsx":"d4bd5dcd154b","components/marketing/CTABanner.jsx":"5c605952cf13","components/marketing/FeatureCard.jsx":"85a1d7346eac","components/marketing/PillarCard.jsx":"c9828b9d4d90","components/marketing/PricingCard.jsx":"cb7c2e597ba4","components/marketing/SectionHeading.jsx":"f01b384114c0","components/marketing/SiteFooter.jsx":"034d14ce5749","components/marketing/SiteHeader.jsx":"3c89aaaf140d","components/marketing/StatBlock.jsx":"ef6454a0925f","components/marketing/TestimonialCard.jsx":"ba83f1ec16fd","ui_kits/marketing-site/BlogScreen.jsx":"d27d4ff8620f","ui_kits/marketing-site/BrokersScreen.jsx":"4cc06658643d","ui_kits/marketing-site/HomeScreen.jsx":"1fe7a526ebd9","ui_kits/marketing-site/UniversityScreen.jsx":"b2a5459b36ee"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PowerUnitCoachingDesignSystem_dff922 = window.PowerUnitCoachingDesignSystem_dff922 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = 0,
  allowMultiple = false
}) {
  const [open, setOpen] = React.useState(allowMultiple ? defaultOpen === null ? [] : [defaultOpen] : defaultOpen);
  const isOpen = i => allowMultiple ? open.includes(i) : open === i;
  const toggle = i => {
    if (allowMultiple) setOpen(o => o.includes(i) ? o.filter(x => x !== i) : [...o, i]);else setOpen(o => o === i ? null : i);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => toggle(i),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      background: 'transparent',
      border: 0,
      padding: '20px 4px',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 17,
      color: isOpen(i) ? 'var(--pwru-magenta-600)' : 'var(--text-strong)',
      transition: 'var(--transition-control)'
    }
  }, it.title, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 26,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      background: isOpen(i) ? 'var(--pwru-magenta-500)' : 'var(--ink-100)',
      color: isOpen(i) ? '#fff' : 'var(--ink-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
      lineHeight: 1,
      transition: 'var(--transition-control)'
    }
  }, isOpen(i) ? '–' : '+')), isOpen(i) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 4px 22px',
      fontSize: 15,
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)'
    }
  }, it.body))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  brand: {
    background: 'var(--pwru-magenta-50)',
    color: 'var(--pwru-magenta-700)',
    border: '1px solid var(--pwru-magenta-100)'
  },
  violet: {
    background: 'var(--pwru-violet-50)',
    color: 'var(--pwru-violet-600)',
    border: '1px solid var(--pwru-violet-100)'
  },
  solid: {
    background: 'var(--pwru-magenta-500)',
    color: 'var(--white)',
    border: '1px solid var(--pwru-magenta-500)'
  },
  ink: {
    background: 'var(--ink-900)',
    color: 'var(--white)',
    border: '1px solid var(--ink-900)'
  },
  neutral: {
    background: 'var(--ink-100)',
    color: 'var(--ink-700)',
    border: '1px solid var(--ink-200)'
  },
  success: {
    background: 'var(--green-50)',
    color: 'var(--green-500)',
    border: '1px solid rgba(23,166,115,.28)'
  },
  warning: {
    background: 'var(--amber-50)',
    color: '#8A5B00',
    border: '1px solid rgba(240,162,2,.32)'
  },
  danger: {
    background: 'var(--red-50)',
    color: 'var(--red-500)',
    border: '1px solid rgba(214,40,40,.28)'
  }
};
function Badge({
  children,
  tone = 'brand',
  size = 'md',
  style
}) {
  const s = size === 'sm' ? {
    fontSize: 10,
    padding: '3px 8px'
  } : {
    fontSize: 11,
    padding: '5px 12px'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      ...s,
      ...TONES[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '8px 16px',
    fontSize: 13,
    minHeight: 36
  },
  md: {
    padding: '12px 24px',
    fontSize: 15,
    minHeight: 46
  },
  lg: {
    padding: '16px 32px',
    fontSize: 16,
    minHeight: 56
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--text-on-brand)',
    border: '2px solid var(--action-primary)',
    boxShadow: 'var(--shadow-brand)'
  },
  gradient: {
    background: 'var(--gradient-brand)',
    color: 'var(--text-on-brand)',
    border: '2px solid transparent',
    boxShadow: 'var(--shadow-brand)'
  },
  dark: {
    background: 'var(--action-secondary)',
    color: 'var(--text-inverse)',
    border: '2px solid var(--action-secondary)',
    boxShadow: 'var(--shadow-sm)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-strong)',
    border: '2px solid var(--ink-900)',
    boxShadow: 'none'
  },
  'outline-brand': {
    background: 'transparent',
    color: 'var(--pwru-magenta-600)',
    border: '2px solid var(--pwru-magenta-500)',
    boxShadow: 'none'
  },
  'outline-inverse': {
    background: 'transparent',
    color: 'var(--white)',
    border: '2px solid rgba(255,255,255,.6)',
    boxShadow: 'none'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-strong)',
    border: '2px solid transparent',
    boxShadow: 'none'
  }
};
const HOVER = {
  primary: {
    background: 'var(--action-primary-hover)',
    borderColor: 'var(--action-primary-hover)'
  },
  gradient: {
    filter: 'saturate(1.1) brightness(1.05)'
  },
  dark: {
    background: 'var(--action-secondary-hover)',
    borderColor: 'var(--action-secondary-hover)'
  },
  outline: {
    background: 'var(--ink-900)',
    color: 'var(--white)'
  },
  'outline-brand': {
    background: 'var(--pwru-magenta-500)',
    color: 'var(--white)'
  },
  'outline-inverse': {
    background: 'rgba(255,255,255,.14)',
    borderColor: 'var(--white)'
  },
  ghost: {
    background: 'var(--ink-100)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  as = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const Tag = as === 'a' ? 'a' : 'button';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--weight-bold)',
    letterSpacing: 'var(--tracking-wide)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-control), filter var(--dur-base) var(--ease-standard)',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.45 : 1,
    transform: active && !disabled ? 'translateY(1px) scale(.99)' : 'none',
    ...SIZES[size],
    ...VARIANTS[variant],
    ...(hover && !disabled ? HOVER[variant] : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
const TONES = {
  light: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)',
    border: '1px solid var(--border-subtle)'
  },
  subtle: {
    background: 'var(--surface-subtle)',
    color: 'var(--text-body)',
    border: '1px solid var(--border-subtle)'
  },
  ink: {
    background: 'var(--gradient-ink)',
    color: 'rgba(255,255,255,.78)',
    border: '1px solid rgba(255,255,255,.10)'
  },
  brand: {
    background: 'var(--gradient-brand)',
    color: 'rgba(255,255,255,.90)',
    border: '1px solid transparent'
  }
};
function Card({
  children,
  tone = 'light',
  padding = 28,
  interactive = false,
  topAccent = false,
  style,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding,
      borderRadius: 'var(--radius-card)',
      boxShadow: interactive && hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: interactive && hover ? 'translateY(-3px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : 'default',
      ...TONES[tone],
      ...style
    }
  }, topAccent && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInline: 0,
      top: 0,
      height: 4,
      background: 'var(--gradient-brand)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      width: 20,
      height: 20,
      marginTop: 1,
      borderRadius: 'var(--radius-xs)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--pwru-magenta-500)' : 'var(--white)',
      border: '2px solid ' + (checked ? 'var(--pwru-magenta-500)' : 'var(--border-strong)'),
      transition: 'var(--transition-control)',
      color: '#fff',
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1
    }
  }, checked ? '✓' : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const CDN = 'https://unpkg.com/lucide-static@0.469.0/icons/';

/** Lucide (CDN) glyph rendered as a CSS mask so it inherits any brand colour. */
function Icon({
  name = 'zap',
  size = 20,
  color = 'currentColor',
  strokeAccent = false,
  style
}) {
  const url = `url("${CDN}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      background: strokeAccent ? 'var(--gradient-brand)' : color,
      WebkitMask: `${url} center / contain no-repeat`,
      mask: `${url} center / contain no-repeat`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  type = 'text',
  textarea = false,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const field = {
    width: '100%',
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    color: 'var(--text-strong)',
    background: 'var(--white)',
    padding: textarea ? '12px 14px' : '0 14px',
    height: textarea ? 'auto' : 48,
    minHeight: textarea ? 104 : undefined,
    resize: textarea ? 'vertical' : undefined,
    borderRadius: 'var(--radius-sm)',
    outline: 'none',
    transition: 'var(--transition-control)',
    border: '1px solid ' + (error ? 'var(--red-500)' : focus ? 'var(--pwru-magenta-500)' : 'var(--border-subtle)'),
    boxShadow: focus ? 'var(--focus-ring)' : 'none'
  };
  const Tag = textarea ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--ink-700)',
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement(Tag, _extends({
    type: textarea ? undefined : type,
    style: field,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 13,
      color: error ? 'var(--red-500)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
const SRC = {
  black: 'assets/pwru-logo-black.png',
  white: 'assets/pwru-logo-white.png'
};
function Logo({
  tone = 'black',
  height = 36,
  assetBase = '',
  wordmarkFallback = false,
  style
}) {
  if (wordmarkFallback) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: height * 0.78,
        letterSpacing: '-0.03em',
        color: tone === 'white' ? 'var(--white)' : 'var(--ink-900)',
        lineHeight: 1,
        ...style
      }
    }, "PWRU");
  }
  const base = assetBase ? assetBase.replace(/\/$/, '') + '/' : '';
  return /*#__PURE__*/React.createElement("img", {
    src: base + SRC[tone],
    alt: "Power Unit Coaching",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  active = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 13,
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      transition: 'var(--transition-control)',
      background: active ? 'var(--ink-900)' : hover ? 'var(--ink-100)' : 'var(--white)',
      color: active ? 'var(--white)' : 'var(--ink-700)',
      border: '1px solid ' + (active ? 'var(--ink-900)' : 'var(--border-subtle)'),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CTABanner.jsx
try { (() => {
function CTABanner({
  title,
  body,
  note,
  primaryLabel,
  primaryHref = '#',
  secondaryLabel,
  secondaryHref = '#',
  tone = 'gradient'
}) {
  const bg = tone === 'gradient' ? 'var(--gradient-brand-band)' : 'var(--gradient-ink)';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      borderRadius: 'var(--radius-lg)',
      padding: '56px 48px',
      textAlign: 'center',
      color: 'rgba(255,255,255,.82)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--text-h2)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--white)',
      textWrap: 'balance'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 620,
      margin: '16px auto 0',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, body), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 17,
      color: 'var(--white)'
    }
  }, note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: 28
    }
  }, primaryLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "a",
    href: primaryHref,
    size: "lg",
    variant: tone === 'gradient' ? 'dark' : 'gradient'
  }, primaryLabel), secondaryLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "a",
    href: secondaryHref,
    size: "lg",
    variant: "outline-inverse"
  }, secondaryLabel)));
}
Object.assign(__ds_scope, { CTABanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CTABanner.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureCard.jsx
try { (() => {
function FeatureCard({
  icon = 'zap',
  title,
  body,
  linkLabel,
  href = '#',
  image,
  tone = 'light'
}) {
  const inverse = tone === 'ink';
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    tone: tone,
    padding: 0,
    interactive: true,
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 168,
      background: `var(--ink-100) url(${image}) center/cover no-repeat`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 26,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, !image && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--gradient-brand)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 20,
      lineHeight: 1.25,
      color: inverse ? 'var(--white)' : 'var(--text-strong)',
      margin: 0
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 'var(--leading-relaxed)',
      color: inverse ? 'rgba(255,255,255,.72)' : 'var(--text-muted)'
    }
  }, body), linkLabel && /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      marginTop: 'auto',
      paddingTop: 8,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 13,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--pwru-magenta-600)',
      textDecoration: 'none'
    }
  }, linkLabel, " ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16
  }))));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PillarCard.jsx
try { (() => {
function PillarCard({
  number,
  title,
  body,
  active = false,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const lit = active || hover;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      padding: '24px 24px 24px 26px',
      borderRadius: 'var(--radius-card)',
      background: active ? 'var(--gradient-brand)' : 'var(--white)',
      border: '1px solid ' + (active ? 'transparent' : 'var(--border-subtle)'),
      boxShadow: lit ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 40,
      lineHeight: 1,
      letterSpacing: '-0.04em',
      color: active ? 'rgba(255,255,255,.55)' : 'var(--ink-200)',
      marginBottom: 10
    }
  }, String(number).padStart(2, '0')), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-extrabold)',
      fontSize: 18,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: active ? 'var(--white)' : 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 'var(--leading-relaxed)',
      color: active ? 'rgba(255,255,255,.86)' : 'var(--text-muted)'
    }
  }, body));
}
Object.assign(__ds_scope, { PillarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PillarCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PricingCard.jsx
try { (() => {
function PricingCard({
  name,
  blurb,
  price,
  period = '/mo',
  priceNote,
  features = [],
  ctaLabel,
  href = '#',
  featured = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: 32,
      borderRadius: 'var(--radius-card)',
      position: 'relative',
      background: featured ? 'var(--gradient-ink)' : 'var(--white)',
      border: '1px solid ' + (featured ? 'transparent' : 'var(--border-subtle)'),
      boxShadow: featured ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      color: featured ? 'rgba(255,255,255,.74)' : 'var(--text-muted)'
    }
  }, featured && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 20,
      right: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "solid"
  }, "Most Popular")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-extrabold)',
      fontSize: 20,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: featured ? 'var(--white)' : 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 22px',
      fontSize: 14.5,
      lineHeight: 'var(--leading-relaxed)'
    }
  }, blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      fontFamily: 'var(--font-display)',
      color: featured ? 'var(--white)' : 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 52,
      fontWeight: 'var(--weight-black)',
      letterSpacing: '-0.04em',
      lineHeight: 1
    }
  }, price), period && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 'var(--weight-semibold)',
      color: featured ? 'rgba(255,255,255,.6)' : 'var(--text-muted)'
    }
  }, period)), priceNote && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 13
    }
  }, priceNote), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '24px 0',
      height: 1,
      background: featured ? 'rgba(255,255,255,.14)' : 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 12
    }
  }, features.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontSize: 14.5,
      lineHeight: 1.45,
      color: featured ? 'rgba(255,255,255,.86)' : 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 18,
    color: "var(--pwru-magenta-400)",
    style: {
      marginTop: 1
    }
  }), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "a",
    href: href,
    fullWidth: true,
    variant: featured ? 'gradient' : 'outline'
  }, ctaLabel)));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  tone = 'light',
  maxWidth = 760,
  style
}) {
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      textAlign: align,
      maxWidth,
      marginInline: align === 'center' ? 'auto' : 0,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 12,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: inverse ? 'var(--pwru-magenta-300)' : 'var(--pwru-magenta-500)',
      marginBottom: 14
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-extrabold)',
      fontSize: 'var(--text-h2)',
      lineHeight: 'var(--leading-snug)',
      letterSpacing: 'var(--tracking-tight)',
      color: inverse ? 'var(--white)' : 'var(--text-strong)',
      margin: 0,
      textWrap: 'balance'
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      marginBottom: 0,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-relaxed)',
      color: inverse ? 'rgba(255,255,255,.72)' : 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, lede));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SiteFooter.jsx
try { (() => {
const COL = {
  fontFamily: 'var(--font-display)',
  fontWeight: 'var(--weight-bold)',
  fontSize: 12,
  letterSpacing: 'var(--tracking-eyebrow)',
  textTransform: 'uppercase',
  color: 'var(--pwru-magenta-300)',
  marginBottom: 14
};
function SiteFooter({
  columns = [],
  tagline = 'The Real Estate Performance Suite Built for Those Focused On Results',
  legal = 'Copyright © 2026 Power Unit Coaching LLC.',
  assetBase = ''
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'rgba(255,255,255,.62)',
      padding: '56px 40px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(' + Math.max(columns.length, 1) + ', 1fr)',
      gap: 40,
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    tone: "white",
    height: 30,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 14.5,
      lineHeight: 'var(--leading-relaxed)',
      maxWidth: 300
    }
  }, tagline), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: 'rgba(255,255,255,.38)'
    }
  }, "Twin Matching Technology \u2117 Patent Pending")), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("div", {
    style: COL
  }, c.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 9
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,.62)',
      textDecoration: 'none'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '40px auto 0',
      paddingTop: 20,
      borderTop: '1px solid rgba(255,255,255,.12)',
      fontSize: 12.5,
      color: 'rgba(255,255,255,.4)'
    }
  }, legal));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SiteHeader.jsx
try { (() => {
function SiteHeader({
  items = [],
  active,
  onNavigate,
  assetBase = '',
  tone = 'light',
  onLogin
}) {
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      padding: '18px 40px',
      background: inverse ? 'rgba(13,13,13,.72)' : 'var(--white)',
      backdropFilter: inverse ? 'blur(14px)' : 'none',
      borderBottom: '1px solid ' + (inverse ? 'rgba(255,255,255,.12)' : 'var(--border-subtle)')
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('Home');
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    tone: inverse ? 'white' : 'black',
    height: 30,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      marginLeft: 8
    }
  }, items.map(it => {
    const on = it === active;
    return /*#__PURE__*/React.createElement("a", {
      key: it,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(it);
      },
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: 14,
        textDecoration: 'none',
        paddingBottom: 3,
        transition: 'var(--transition-control)',
        color: on ? inverse ? 'var(--white)' : 'var(--pwru-magenta-600)' : inverse ? 'rgba(255,255,255,.72)' : 'var(--ink-700)',
        borderBottom: '2px solid ' + (on ? 'var(--pwru-magenta-500)' : 'transparent')
      }
    }, it);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onLogin && onLogin();
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 14,
      color: inverse ? 'rgba(255,255,255,.8)' : 'var(--ink-700)',
      textDecoration: 'none'
    }
  }, "Login"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: inverse ? 'gradient' : 'primary'
  }, "Register")));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label,
  tone = 'light',
  align = 'left'
}) {
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 46,
      lineHeight: 1,
      letterSpacing: '-0.04em',
      background: 'var(--gradient-brand)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 15,
      lineHeight: 'var(--leading-normal)',
      color: inverse ? 'rgba(255,255,255,.7)' : 'var(--text-muted)',
      maxWidth: 260,
      marginInline: align === 'center' ? 'auto' : 0
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  name,
  role,
  avatar,
  result,
  tone = 'light'
}) {
  const inverse = tone === 'ink';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      padding: 28,
      borderRadius: 'var(--radius-card)',
      position: 'relative',
      overflow: 'hidden',
      background: inverse ? 'var(--gradient-ink)' : 'var(--white)',
      border: '1px solid ' + (inverse ? 'rgba(255,255,255,.1)' : 'var(--border-subtle)'),
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInline: 0,
      top: 0,
      height: 4,
      background: 'var(--gradient-brand)'
    }
  }), result && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 30,
      letterSpacing: '-0.03em',
      color: 'var(--pwru-magenta-500)',
      marginBottom: 10
    }
  }, result), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 'var(--leading-relaxed)',
      color: inverse ? 'rgba(255,255,255,.86)' : 'var(--text-body)'
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      flex: '0 0 auto',
      background: avatar ? `url(${avatar}) center/cover no-repeat` : 'var(--gradient-brand)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 15
    }
  }, !avatar && name ? name.trim().charAt(0) : ''), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 15,
      color: inverse ? 'var(--white)' : 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      color: inverse ? 'rgba(255,255,255,.55)' : 'var(--text-muted)'
    }
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/BlogScreen.jsx
try { (() => {
(function () {
  const {
    SectionHeading,
    Card,
    Tag,
    Badge,
    Button,
    Icon,
    CTABanner
  } = window.PowerUnitCoachingDesignSystem_dff922;
  const wrap = window.pwruWrap,
    section = window.pwruSection;
  const IMG = 'https://powerunitcoaching.com/wp-content/uploads/2026/07/';
  const POSTS = [{
    cat: 'Sales',
    date: '29 Jul',
    img: IMG + 'close-3-homes-a-month-featured.png',
    title: 'Close 3 Homes a Month: The Script for a Market Where Buyers Do the Math First'
  }, {
    cat: 'Marketing',
    date: '27 Jul',
    img: IMG + 'dominate-real-estate-market-featured.png',
    title: 'How to Dominate a Real Estate Market: What Separates the Top 20% from Everyone Else'
  }, {
    cat: 'Sales',
    date: '24 Jul',
    img: IMG + 'objection-handling-scripts-featured.png',
    title: 'Real Estate Objection Handling Scripts That Actually Close Deals in 2026'
  }, {
    cat: 'Productivity',
    date: '22 Jul',
    img: IMG + 'consistent-real-estate-production-featured.png',
    title: 'Consistent Real Estate Production: The System That Ends the Feast-or-Famine Cycle'
  }];
  const CATS = ['All', 'AI', 'Branding', 'Broker/Owners', 'Income', 'Lead Generation', 'Marketing', 'Mindset', 'Productivity', 'Sales', 'Time Management'];
  function BlogScreen() {
    const [cat, setCat] = React.useState('All');
    const posts = cat === 'All' ? POSTS : POSTS.filter(p => p.cat === cat);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--gradient-paper)',
        paddingBlock: '56px 40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Blog",
      title: "Scripts, systems, and market strategy",
      lede: "Written from real production experience \u2014 not theory, not recycled sales advice."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 28
      }
    }, CATS.map(c => /*#__PURE__*/React.createElement(Tag, {
      key: c,
      active: c === cat,
      onClick: () => setCat(c)
    }, c))))), /*#__PURE__*/React.createElement("section", {
      style: section({
        paddingBlock: 'var(--section-y-tight)'
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: 26
      }
    }, posts.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.title,
      padding: 0,
      interactive: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 200,
        background: `var(--ink-100) url(${p.img}) center/cover no-repeat`
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brand"
    }, p.cat), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-muted)'
      }
    }, p.date, ", 2026")), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 20,
        lineHeight: 1.28,
        color: 'var(--text-strong)',
        textWrap: 'pretty'
      }
    }, p.title), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        marginTop: 16,
        display: 'inline-flex',
        gap: 8,
        alignItems: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: 'var(--pwru-magenta-600)'
      }
    }, "Read post ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })))))), !posts.length && /*#__PURE__*/React.createElement("p", {
      style: {
        padding: '40px 0',
        color: 'var(--text-muted)'
      }
    }, "No posts in this category yet."), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline"
    }, "Load more posts")))), /*#__PURE__*/React.createElement("section", {
      style: {
        paddingBottom: 'var(--section-y)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(CTABanner, {
      title: "Your Business Deserves a Powerful Blueprint",
      body: "Download the free framework that turns scattered effort into consistent production.",
      primaryLabel: "Get the Free Blueprint"
    }))));
  }
  window.BlogScreen = BlogScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/BlogScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/BrokersScreen.jsx
try { (() => {
(function () {
  const {
    SectionHeading,
    Card,
    Icon,
    Button,
    Badge,
    Input,
    Checkbox,
    TestimonialCard,
    CTABanner,
    Tag
  } = window.PowerUnitCoachingDesignSystem_dff922;
  const wrap = window.pwruWrap,
    section = window.pwruSection;
  const IMG = 'https://powerunitcoaching.com/wp-content/uploads/2026/06/';
  const GET = [['palette', 'Your Brand. Our Content.', 'Agents see your name, your logo, and your colors. Not a third-party tool. Not a franchise portal.'], ['rocket', 'Deploy on Day One.', 'Assign structured training tracks the moment an agent joins. No setup delays, no content to create.'], ['bar-chart-3', "See Who's Doing the Work.", 'Broker dashboards show completion, activity, and progress across your full roster.'], ['trophy', 'Built to Drive Engagement.', 'Leaderboards, points, and gamification keep agents competing instead of waiting on you.'], ['mic', 'AI Role-Play Simulations.', 'Agents practice objection handling and scripts before they are in front of a real client.'], ['refresh-cw', 'Ongoing Content Updates.', 'Built on the PULSE Method and updated as the market changes. You never touch it.']];
  function BrokersScreen() {
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--gradient-ink)',
        paddingBlock: 76,
        color: 'rgba(255,255,255,.75)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        display: 'grid',
        gridTemplateColumns: '1.1fr .9fr',
        gap: 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
      tone: "solid"
    }, "Brokerage Performance Suite"), /*#__PURE__*/React.createElement("h1", {
      style: {
        marginTop: 18,
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 46,
        lineHeight: 1.06,
        letterSpacing: '-0.03em',
        color: 'var(--white)',
        textWrap: 'balance'
      }
    }, "The White-Label Training Platform That Turns Your Agents Into Producers"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 18,
        fontSize: 'var(--text-body-lg)',
        lineHeight: 'var(--leading-relaxed)'
      }
    }, "BPS is a white-label training platform brokers license, brand, and deploy to their full agent roster. The curriculum is already built. Your agents see your brand on it from day one."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Tag, null, "Recruiting kit"), /*#__PURE__*/React.createElement(Tag, null, "Branded onboarding"), /*#__PURE__*/React.createElement(Tag, null, "Roster dashboards"), /*#__PURE__*/React.createElement(Tag, null, "AI role-play"))), /*#__PURE__*/React.createElement(Card, {
      padding: 28,
      style: {
        background: 'var(--white)'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 21,
        color: 'var(--text-strong)',
        margin: '0 0 6px'
      }
    }, "Book a live 1:1 demo"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 20px'
      }
    }, "Starts at just $19/mo per agent."), sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        padding: '18px 0',
        color: 'var(--green-500)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle-2",
      size: 22
    }), " Request received \u2014 we'll reach out within one business day.") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Full name",
      placeholder: "Deb Ambrosi"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Brokerage",
      placeholder: "Ambrosi Realty"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Work email",
      type: "email",
      placeholder: "deb@ambrosirealty.com"
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "I have 10+ agents on my roster",
      checked: true,
      onChange: () => {}
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "gradient",
      fullWidth: true,
      onClick: () => setSent(true)
    }, "Schedule Your Demo"))))), /*#__PURE__*/React.createElement("section", {
      style: section()
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "What you get",
      title: "Most Brokerages Have No Real Training System",
      lede: "New agents take months longer to close. Good people leave \u2014 not because your brokerage isn't good, but because it doesn't look like it has a system."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20,
        marginTop: 44
      }
    }, GET.map(([ic, t, b]) => /*#__PURE__*/React.createElement(Card, {
      key: t,
      padding: 24,
      topAccent: true,
      interactive: true
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 24,
      color: "var(--pwru-magenta-500)"
    }), /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: '14px 0 8px',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 17,
        color: 'var(--text-strong)'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14.5,
        lineHeight: 1.6,
        color: 'var(--text-muted)'
      }
    }, b)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-subtle)',
        ...section({
          paddingBlock: 'var(--section-y-tight)'
        })
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement(TestimonialCard, {
      avatar: IMG + 'deb-ambrosi.png',
      name: "Deb Ambrosi",
      role: "Broker/Owner \u2014 Ambrosi Realty",
      result: "2 agents recruited",
      quote: "We invited two agents to see it and they joined our brokerage thanks to you!"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Fit check",
      title: "BPS is not for everyone"
    }), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: '20px 0 0',
        padding: 0,
        listStyle: 'none',
        display: 'grid',
        gap: 10
      }
    }, ['Your onboarding is inconsistent from agent to agent', "You're losing recruiting conversations", 'You want visibility into agent engagement'].map(t => /*#__PURE__*/React.createElement("li", {
      key: t,
      style: {
        display: 'flex',
        gap: 10,
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18,
      color: "var(--green-500)"
    }), t)), ['You are a solo agent without a team', 'You need a CRM or transaction management tool'].map(t => /*#__PURE__*/React.createElement("li", {
      key: t,
      style: {
        display: 'flex',
        gap: 10,
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 18,
      color: "var(--ink-300)"
    }), t)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        paddingBlock: 'var(--section-y)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(CTABanner, {
      title: "See How BPS Could Look For Your Brokerage",
      body: "Book a live 1:1 demo with a member of our team.",
      note: "Starts at just $19/mo per agent.",
      primaryLabel: "Schedule Your Demo Today"
    }))));
  }
  window.BrokersScreen = BrokersScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/BrokersScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/HomeScreen.jsx
try { (() => {
(function () {
  const {
    SiteHeader,
    SiteFooter,
    SectionHeading,
    FeatureCard,
    PillarCard,
    PricingCard,
    TestimonialCard,
    StatBlock,
    CTABanner,
    Button,
    Badge,
    Icon,
    Card
  } = window.PowerUnitCoachingDesignSystem_dff922;
  const IMG = 'https://powerunitcoaching.com/wp-content/uploads/2026/06/';
  const wrap = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '0 40px'
  };
  const section = extra => ({
    padding: 'var(--section-y) 0',
    ...extra
  });
  function Hero({
    go
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        minHeight: 560,
        display: 'flex',
        alignItems: 'center',
        background: `var(--ink-900) url(${IMG}pwru-hero-background.jpg) center/cover no-repeat`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg,rgba(13,13,13,.92) 0%,rgba(13,13,13,.72) 48%,rgba(79,30,134,.45) 100%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        position: 'relative',
        paddingBlock: 72
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "solid"
    }, "Since 2018 \xB7 90,000+ agents"), /*#__PURE__*/React.createElement("h1", {
      style: {
        maxWidth: 780,
        marginTop: 20,
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 'var(--text-display-2)',
        lineHeight: 1.04,
        letterSpacing: '-0.03em',
        color: 'var(--white)',
        textWrap: 'balance'
      }
    }, "Real Estate Coaching Built on a System. Not Just Motivation."), /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: 620,
        marginTop: 20,
        fontSize: 'var(--text-body-lg)',
        lineHeight: 'var(--leading-relaxed)',
        color: 'rgba(255,255,255,.76)'
      }
    }, "Power Unit Coaching gives agents a structured production framework, daily AI-powered execution tools, and brokers a white-label training platform they can deploy on day one."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        marginTop: 32
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "gradient",
      onClick: () => go('Solutions')
    }, "I'm an Agent"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "outline-inverse",
      onClick: () => go('Teams')
    }, "I'm a Broker or Team Leader"))));
  }
  const PILLARS = [['Foundation', 'Mindset, business structure, and the systems that have to be in place before everything else.'], ['Lead Capture', "Build a pipeline across multiple channels so your business doesn't stall when one source dries up."], ['Nurture', 'The follow-up systems that keep leads moving so you stop losing deals to agents who stayed in touch.'], ['Closing', 'Scripts, objection handling, appointment setting, and how to convert conversations into contracts.'], ['Back Office', 'The operational side of real estate that most training completely ignores.'], ['Referral Systems', 'A database and referral engine so your business generates leads from work already done.']];
  function HomeScreen({
    go
  }) {
    const [pillar, setPillar] = React.useState(1);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
      go: go
    }), /*#__PURE__*/React.createElement("section", {
      style: section()
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      align: "center",
      maxWidth: 860,
      eyebrow: "Why we exist",
      title: "A Real Estate Training Platform Built for How the Business Actually Works",
      lede: "Most real estate coaching gives you content and calls it training. We give you a production system, a daily plan to run it, and for brokers, a fully built platform to put in front of your entire roster."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24,
        marginTop: 48
      }
    }, /*#__PURE__*/React.createElement(FeatureCard, {
      image: IMG + 'training1.jpg',
      title: "Real Estate Training Built on a System",
      body: "PWRU University's 6-pillar curriculum takes agents from inconsistent production to 3+ closings a month.",
      linkLabel: "Explore PWRU University"
    }), /*#__PURE__*/React.createElement(FeatureCard, {
      image: IMG + '8.jpg',
      title: "AI-Powered Daily Action Plans",
      body: "Replaces up to 12 standalone tools. PULSEIntel PRO builds your personalized daily plan every morning.",
      linkLabel: "See PULSEIntel PRO"
    }), /*#__PURE__*/React.createElement(FeatureCard, {
      image: IMG + '9.jpg',
      title: "White-Label Training for Brokerages",
      body: "A complete, branded training platform brokers deploy to their full roster without building a single lesson.",
      linkLabel: "See BPS"
    })))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-subtle)',
        ...section()
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "The PULSE Method\u2122",
      title: "Six pillars. One production system.",
      lede: "Every course, script, and lesson inside the platform connects back to the same framework."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20,
        marginTop: 40
      }
    }, PILLARS.map(([t, b], i) => /*#__PURE__*/React.createElement(PillarCard, {
      key: t,
      number: i + 1,
      title: t,
      body: b,
      active: pillar === i,
      onClick: () => setPillar(i)
    }))))), /*#__PURE__*/React.createElement("section", {
      style: section()
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      align: "center",
      eyebrow: "Member proof",
      title: "What Our Members Have to Say",
      maxWidth: 620
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24,
        marginTop: 44
      }
    }, /*#__PURE__*/React.createElement(TestimonialCard, {
      result: "22 deals closed",
      avatar: IMG + 'paula-aponte.jpg',
      name: "Paula A.",
      role: "LPT Realty",
      quote: "That was a direct result of this program. I didn't have the confidence. I was scared. You don't know what you don't know."
    }), /*#__PURE__*/React.createElement(TestimonialCard, {
      avatar: IMG + 'mario.jpg',
      name: "Mario E.",
      role: "Keller Williams Realty",
      quote: "A special thanks to Power Unit for helping me make the most money in my office last month, and in my first year in the business."
    }), /*#__PURE__*/React.createElement(TestimonialCard, {
      avatar: IMG + 'bayo.jpg',
      name: "Bayo A.",
      role: "Integrity Edge Realty",
      quote: "I built a real estate business that replaced my income and gave me freedom. It's not just training; it's transformation."
    })))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--ink-900)',
        ...section({
          paddingBlock: 'var(--section-y-tight)'
        })
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement(StatBlock, {
      tone: "inverse",
      value: "1000's",
      label: "agents helped since 2018 \u2014 six years refining the system."
    }), /*#__PURE__*/React.createElement(StatBlock, {
      tone: "inverse",
      value: "90,000+",
      label: "subscribers reached by Power Unit Coaching training content."
    }), /*#__PURE__*/React.createElement(StatBlock, {
      tone: "inverse",
      value: "3+",
      label: "closings a month is the outcome the curriculum trains toward."
    }))), /*#__PURE__*/React.createElement("section", {
      style: section()
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      align: "center",
      eyebrow: "Pricing",
      title: "Simple Pricing. No Guesswork.",
      maxWidth: 620,
      lede: "Most real estate coaching costs $1,000 to $2,000 a month. Both plans cancel anytime."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24,
        marginTop: 44,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(PricingCard, {
      name: "PWRU University",
      blurb: "For agents who want a structured production system on their own schedule.",
      price: "$49",
      features: ['100+ bite-sized courses and lessons', 'Printable workbooks', 'Branding and marketing templates', 'Built-in accountability and tracking'],
      ctaLabel: "Try 7-Days Free"
    }), /*#__PURE__*/React.createElement(PricingCard, {
      featured: true,
      name: "PULSEIntel PRO",
      blurb: "For agents who want AI to build their daily plan and replace up to 12 standalone tools.",
      price: "$99",
      features: ['Daily AI Action Plan, CRM & Content Studio', 'Role-Play Simulator & Script Library', 'AI Business Advisor', 'CMA Generator', 'Lead Generation System'],
      ctaLabel: "Get Started"
    }), /*#__PURE__*/React.createElement(PricingCard, {
      name: "Teams / Brokers",
      blurb: "For brokers who need a white-label training platform deployed to their full roster.",
      price: "Let's Chat",
      period: "",
      priceNote: "Starts at $19/mo per agent.",
      features: ['A "Plug & Play" Recruiting Kit', 'Custom branded onboarding paths', 'Real-time performance dashboards', 'A fully white-labeled brand campus'],
      ctaLabel: "More Info"
    })))), /*#__PURE__*/React.createElement("section", {
      style: {
        paddingBottom: 'var(--section-y)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(CTABanner, {
      title: "Stop guessing. Start performing.",
      body: "Not sure which product fits where you are? Talk to a Power Unit Coaching expert and we will point you in the right direction.",
      note: "Contact a Power Unit Coaching expert today at 1-888-437-7978",
      primaryLabel: "Contact Us Now",
      secondaryLabel: "See Pricing"
    }))));
  }
  window.HomeScreen = HomeScreen;
  window.pwruWrap = wrap;
  window.pwruSection = section;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/UniversityScreen.jsx
try { (() => {
(function () {
  const {
    SectionHeading,
    Accordion,
    Button,
    Badge,
    StatBlock,
    TestimonialCard,
    CTABanner,
    Card,
    Icon
  } = window.PowerUnitCoachingDesignSystem_dff922;
  const wrap = window.pwruWrap,
    section = window.pwruSection;
  const IMG = 'https://powerunitcoaching.com/wp-content/uploads/2026/06/';
  function Breadcrumb({
    trail
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        fontSize: 13,
        color: 'var(--text-muted)',
        marginBottom: 22
      }
    }, trail.map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: t
    }, i > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-300)'
      }
    }, "/"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: i === trail.length - 1 ? 'var(--pwru-magenta-600)' : 'var(--text-muted)'
      }
    }, t))));
  }
  const LEARN = [['calendar-check', 'On Your Schedule', 'Fully on-demand. No scheduled calls, no mandatory sessions. Train when it fits your day.'], ['trophy', 'Gamified to Keep You Moving', 'Leaderboards, badges, and points make the learning process competitive and measurable.'], ['message-square-quote', 'Scripts and Objection Handling', 'Every pillar includes the actual language for consultations, listing appointments, and follow-up calls.'], ['life-buoy', 'Ask A Coach', 'Community Q&A built into the platform. Get answers to real questions from your actual pipeline.']];
  function UniversityScreen() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--gradient-paper)',
        paddingBlock: '56px 72px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(Breadcrumb, {
      trail: ['Home', 'Training Solutions', 'PWRU University']
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.15fr .85fr',
        gap: 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
      tone: "violet"
    }, "PWRU University \xB7 $49/mo"), /*#__PURE__*/React.createElement("h1", {
      style: {
        marginTop: 18,
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 46,
        lineHeight: 1.06,
        letterSpacing: '-0.03em',
        color: 'var(--text-strong)',
        textWrap: 'balance'
      }
    }, "The Real Estate Training Platform for Agents Who Want a System, Not Just Content"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 18,
        fontSize: 'var(--text-body-lg)',
        lineHeight: 'var(--leading-relaxed)',
        color: 'var(--text-muted)'
      }
    }, "PWRU University is built on the PULSE Method\u2122 \u2014 a 6-pillar framework that takes agents from inconsistent production to 3 or more closings a month."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 30
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "gradient"
    }, "Try Free for 7-Days"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "outline"
    }, "Watch the VSL"))), /*#__PURE__*/React.createElement("img", {
      src: "../../assets/6-pillar-framework-book-cover.png",
      alt: "The 6-Pillar Success Framework workbook",
      style: {
        width: '100%',
        borderRadius: 6,
        boxShadow: 'var(--shadow-lg)'
      }
    })))), /*#__PURE__*/React.createElement("section", {
      style: section()
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 56
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "The problem",
      title: "Why Most Real Estate Training Doesn't Work"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 18,
        fontSize: 16,
        lineHeight: 'var(--leading-relaxed)'
      }
    }, "Agents who close 3 or more deals a month consistently don't hustle harder than everyone else. They run a system. They know what to do, when to do it, and why it works."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 'var(--leading-relaxed)'
      }
    }, "Most real estate training never teaches that. It gives you motivation, or scattered content with nothing connecting it. Neither produces a repeatable system."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 20,
        color: 'var(--pwru-magenta-600)'
      }
    }, "PWRU University does.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 16
      }
    }, LEARN.map(([ic, t, b]) => /*#__PURE__*/React.createElement(Card, {
      key: t,
      padding: 20,
      style: {
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        flex: '0 0 auto',
        borderRadius: 'var(--radius-sm)',
        background: 'var(--surface-brand-soft)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 20,
      color: "var(--pwru-magenta-500)"
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontSize: 16,
        color: 'var(--text-strong)'
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        lineHeight: 1.55
      }
    }, b))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-subtle)',
        ...section({
          paddingBlock: 'var(--section-y-tight)'
        })
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 56,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Common questions",
      title: "What agents ask before they start"
    })), /*#__PURE__*/React.createElement(Accordion, {
      items: [{
        title: 'Is this the same as BPS?',
        body: 'No. PWRU University is for individual agents who want to invest in their own training. BPS is a bulk-licensed platform brokers provide to their entire team, with admin controls and white-label branding.'
      }, {
        title: 'How is the learning structured?',
        body: 'Scenario-based and interactive. You are practicing decisions, not just watching someone explain them. Every lesson maps back to one of the six pillars.'
      }, {
        title: 'What does it cost?',
        body: 'Just $49/month. Cancel anytime. Create a free account to unlock 7 days of full access.'
      }]
    }))), /*#__PURE__*/React.createElement("section", {
      style: section({
        paddingBlock: 'var(--section-y-tight)'
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 32,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(StatBlock, {
      value: "6+",
      label: "years of curriculum development behind every lesson."
    }), /*#__PURE__*/React.createElement(StatBlock, {
      value: "100+",
      label: "bite-sized courses, scripts, and printable workbooks."
    }), /*#__PURE__*/React.createElement(TestimonialCard, {
      avatar: IMG + 'claudia_image.png',
      name: "Claudia Esmeralda Garzon",
      role: "Miami, FL",
      quote: "I've been active for a month and a half and have converted 11 leads so far."
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        paddingBottom: 'var(--section-y)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(CTABanner, {
      tone: "ink",
      title: "Try PWRU University Today",
      body: "Create a free account to unlock 7 days of full access.",
      note: "Just $49/month. Cancel Anytime.",
      primaryLabel: "Try Free for 7-Days"
    }))));
  }
  window.UniversityScreen = UniversityScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/UniversityScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CTABanner = __ds_scope.CTABanner;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.PillarCard = __ds_scope.PillarCard;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

})();
