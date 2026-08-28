import * as React from 'react';

/** Numbered card for the six PULSE Method pillars. */
export interface PillarCardProps {
  /** 1–6; rendered zero-padded as an oversized numeral. */
  number: number;
  title: string;
  body: React.ReactNode;
  /** Selected state — fills with the brand gradient. One per row at most. */
  active?: boolean;
  onClick?: () => void;
}
export declare function PillarCard(props: PillarCardProps): JSX.Element;
