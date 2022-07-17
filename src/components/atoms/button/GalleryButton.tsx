import { Button } from '@mui/material';
import React, { FC } from 'react';
import { BaseComponent } from '../../../utils';

type GalleryButtonType = {
  variant?: 'text' | 'outlined' | 'contained';
  text: string;
  color?: string;
  onClick?: () => void;
} & BaseComponent;

export const GalleryButton: FC<GalleryButtonType> = ({
  text,
  className,
  variant,
  color,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      className={className}
      color={color as any}
      variant={variant}
    >
      {text}
    </Button>
  );
};
