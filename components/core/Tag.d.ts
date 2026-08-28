import * as React from 'react';

/** Filter chip for blog categories and resource lists. */
export interface TagProps {
  children?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
