import * as React from 'react';

/**
 * Primary call-to-action control. Square (0 radius) corners, uppercase display type.
 * @startingPoint section="Core" subtitle="Square CTA buttons in every brand variant" viewport="700x220"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual treatment. Use "primary" or "gradient" for the single main CTA on a view. */
  variant?: 'primary' | 'gradient' | 'dark' | 'outline' | 'outline-brand' | 'outline-inverse' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Render as an anchor instead of a button. */
  as?: 'button' | 'a';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
