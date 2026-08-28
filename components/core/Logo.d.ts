import * as React from 'react';

/** The PWRU wordmark. Always use the supplied PNG artwork — never redraw the shield or bolt. */
export interface LogoProps {
  /** "black" on light surfaces, "white" on charcoal/gradient surfaces. */
  tone?: 'black' | 'white';
  /** Rendered height in px; width scales. Minimum 24px. */
  height?: number;
  /** Path prefix to the design-system root, e.g. "../.." from a nested page. */
  assetBase?: string;
  /** Render the wordmark as type instead of artwork (email, tiny sizes). */
  wordmarkFallback?: boolean;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
