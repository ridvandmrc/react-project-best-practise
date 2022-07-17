import { TextField } from '@mui/material';
import React, { FC } from 'react';
import { BaseComponent } from '../../../utils';

type GalleryProps = {
  disabled: boolean;
  label: string;
} & BaseComponent;

export const GalleryInput: FC<Partial<GalleryProps>> = ({
  disabled,
  className,
  label,
  style,
}) => {
  return (
    <TextField
      style={style as any}
      label={label}
      className={className}
      disabled={disabled}
    />
  );
};
