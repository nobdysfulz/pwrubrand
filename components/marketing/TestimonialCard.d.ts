import * as React from 'react';

/** Member proof card: optional headline result, quote, name + brokerage. */
export interface TestimonialCardProps {
  quote: React.ReactNode;
  name: string;
  /** Brokerage or market, e.g. "LPT Realty" or "Miami, FL". */
  role?: string;
  /** Headshot URL; falls back to a gradient initial disc. */
  avatar?: string;
  /** Oversized magenta stat pulled from the quote, e.g. "22 deals closed". */
  result?: string;
  tone?: 'light' | 'ink';
}
export declare function TestimonialCard(props: TestimonialCardProps): JSX.Element;
