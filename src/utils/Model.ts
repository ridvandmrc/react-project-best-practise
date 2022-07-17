import { ReactElement } from 'react';

export type BaseComponent = {
  className?: string;
  children?: ReactElement;
  style?: Partial<CSSStyleDeclaration>;
};
