import React, { FC } from 'react';
import { BaseComponent } from '../../../utils';

import style from './card.module.scss';

type CardType = {
  closeButton?: boolean;
  closeClick?: () => void;
} & BaseComponent;

export const Card: FC<CardType> = ({ closeButton, children, closeClick }) => {
  return (
    <div className={style['card-wrapper']}>
      {closeButton && (
        <button onClick={() => closeClick?.()} className={style.close}>
          X
        </button>
      )}
      {children}
    </div>
  );
};
