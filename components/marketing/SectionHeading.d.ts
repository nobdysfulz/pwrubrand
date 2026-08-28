import * as React from 'react';

/** Eyebrow + H2 + lede block that opens every marketing section. */
export interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'inverse';
  maxWidth?: number;
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
