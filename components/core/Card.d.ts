import * as React from 'react';

/** Generic surface container: 16px radius, hairline border, soft shadow. */
export interface CardProps {
  children?: React.ReactNode;
  tone?: 'light' | 'subtle' | 'ink' | 'brand';
  /** Inner padding in px. 28 default; 20 for dense grids. */
  padding?: number;
  /** Lift + deepen shadow on hover. Use for clickable cards only. */
  interactive?: boolean;
  /** 4px gradient rule across the top edge. */
  topAccent?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
