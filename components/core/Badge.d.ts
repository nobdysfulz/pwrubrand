import * as React from 'react';

/** Small uppercase status/label pill. */
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'brand' | 'violet' | 'solid' | 'ink' | 'neutral' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
