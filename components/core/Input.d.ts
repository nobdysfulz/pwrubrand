import * as React from 'react';

/** Labelled text field. Uppercase micro-label above, 8px radius box. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  /** Render a multi-line textarea instead. */
  textarea?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;
