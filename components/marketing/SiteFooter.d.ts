import * as React from 'react';

export interface FooterColumn { title: string; links: string[] }
/** Charcoal site footer: wordmark + tagline, link columns, legal rule. */
export interface SiteFooterProps {
  columns?: FooterColumn[];
  tagline?: string;
  legal?: string;
  assetBase?: string;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
