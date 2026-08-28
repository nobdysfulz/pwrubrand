import * as React from 'react';

/** Marketing site top bar: wordmark, nav, Login link, Register button. */
export interface SiteHeaderProps {
  items?: string[];
  active?: string;
  onNavigate?: (item: string) => void;
  onLogin?: () => void;
  /** Relative path to the design-system root so the logo resolves. */
  assetBase?: string;
  /** "inverse" = translucent dark bar over a hero image. */
  tone?: 'light' | 'inverse';
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
