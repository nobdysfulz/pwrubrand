import * as React from 'react';

/** Lucide icon (2px stroke, rounded caps) loaded from CDN and masked to the current colour. */
export interface IconProps {
  /** Lucide icon slug, e.g. "zap", "check", "trending-up", "users". */
  name?: string;
  size?: number;
  color?: string;
  /** Fill the glyph with the brand gradient instead of a flat colour. */
  strokeAccent?: boolean;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
