import * as React from 'react';

export interface AccordionItem { title: string; body: React.ReactNode }
/** Rule-separated expander list — the brand's FAQ and curriculum pattern. */
export interface AccordionProps {
  items?: AccordionItem[];
  /** Index open on mount, or null for all closed. */
  defaultOpen?: number | null;
  allowMultiple?: boolean;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
