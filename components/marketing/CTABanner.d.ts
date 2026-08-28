import * as React from 'react';

/**
 * Full-width closing call-to-action band.
 * @startingPoint section="Marketing" subtitle="Closing CTA band on the brand gradient" viewport="700x300"
 */
export interface CTABannerProps {
  title: React.ReactNode;
  body?: React.ReactNode;
  /** Bold supporting line, e.g. "Just $49/month. Cancel Anytime." */
  note?: React.ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  tone?: 'gradient' | 'ink';
}
export declare function CTABanner(props: CTABannerProps): JSX.Element;
