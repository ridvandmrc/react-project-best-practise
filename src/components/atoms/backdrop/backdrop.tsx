import { Backdrop } from '@mui/material';
import React, { FC } from 'react';
import { BaseComponent } from '../../../utils';

type BackdropType = {
  open: boolean;
} & BaseComponent;

export const BackdropGallery: FC<BackdropType> = ({ children, open }) => {
  return <Backdrop open={open}>{children}</Backdrop>;
};
