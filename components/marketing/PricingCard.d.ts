import * as React from 'react';

/**
 * Plan card for the pricing grid (PWRU University / PULSEIntel PRO / Teams & Brokers).
 * @startingPoint section="Marketing" subtitle="Three-plan pricing grid" viewport="700x420"
 */
export interface PricingCardProps {
  name: string;
  blurb?: React.ReactNode;
  /** Formatted price string, e.g. "$49" or "Let's Chat". */
  price: string;
  period?: string;
  priceNote?: React.ReactNode;
  features?: React.ReactNode[];
  ctaLabel: string;
  href?: string;
  /** Charcoal treatment + "Most Popular" badge. Exactly one per grid. */
  featured?: boolean;
}
export declare function PricingCard(props: PricingCardProps): JSX.Element;
