import * as React from 'react';

/** Square 20px checkbox that fills magenta when checked. */
export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
