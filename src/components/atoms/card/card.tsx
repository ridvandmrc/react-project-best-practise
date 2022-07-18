import React, { FC } from 'react';
import { BaseComponent } from '../../../utils';

import cardStyle from './card.module.scss';

type CardType = {
  closeButton?: boolean;
  closeClick?: () => void;
} & BaseComponent;

export const Card: FC<CardType> = ({
  closeButton,
  children,
  closeClick,
  style,
}) => {
  return (
    <div style={style as any} className={cardStyle['card-wrapper']}>
      {closeButton && (
        <button onClick={() => closeClick?.()} className={cardStyle.close}>
          X
        </button>
      )}
      {children}
    </div>
  );
};
