import React, { FC } from 'react';
import { BaseComponent } from '../../../utils';

import style from './image-viewer.module.scss';

type ImageViewerType = {
  src: string;
} & BaseComponent;

export const ImageViewer: FC<ImageViewerType> = ({ src }) => {
  return (
    <div className={style['viewer-container']}>
      <img src={src} />
    </div>
  );
};
