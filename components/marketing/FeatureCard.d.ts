import * as React from 'react';

/**
 * Product / capability card: image or gradient icon tile, title, body, uppercase text link.
 * @startingPoint section="Marketing" subtitle="Three-up product capability cards" viewport="700x330"
 */
export interface FeatureCardProps {
  /** Lucide slug used when no image is supplied. */
  icon?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  linkLabel?: string;
  href?: string;
  /** Optional cover image URL; replaces the icon tile. */
  image?: string;
  tone?: 'light' | 'subtle' | 'ink';
}
export declare function FeatureCard(props: FeatureCardProps): JSX.Element;
