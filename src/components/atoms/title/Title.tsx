import { Typography } from '@mui/material';
import React from 'react';

import style from './Title.module.scss';

export const Title = () => {
  return (
    <Typography variant="h1" className={style.title}>
      Photo Gallery
    </Typography>
  );
};
