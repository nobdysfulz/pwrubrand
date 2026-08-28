import * as React from 'react';

/** Gradient-filled proof number with a supporting line. Use in rows of three. */
export interface StatBlockProps {
  /** Short numeral string, e.g. "90,000+" or "3+". */
  value: string;
  label: React.ReactNode;
  tone?: 'light' | 'inverse';
  align?: 'left' | 'center';
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;
