import { Typography } from '@mui/material';
import React, { FC } from 'react';
import { BaseComponent } from '../../../utils';

import classStyle from './Title.module.scss';

export const Title: FC<BaseComponent> = ({ children, style }) => {
  return (
    <Typography
      variant="h1"
      style={style as any}
      className={(classStyle as any).title}
    >
      {children || 'Photo Gallery'}
    </Typography>
  );
};
