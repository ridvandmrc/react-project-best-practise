import { Backdrop } from '@mui/material';
import React, { FC, useState } from 'react';
import { BaseComponent } from '../../../utils';
import { Card } from '../card/card';

import style from './image-viewer.module.scss';

type ImageViewerType = {
  src: string;
} & BaseComponent;

export const ImageViewer: FC<ImageViewerType> = ({ src }) => {
  const [bigger, setBigger] = useState(false);
  return (
    <>
      <div
        className={style['viewer-container']}
        onClick={() => setBigger(!bigger)}
      >
        <img src={src} />
      </div>
      {bigger && (
        <Backdrop open={true} className={style.backdrop} style={{ zIndex: 2 }}>
          <Card
            closeButton
            closeClick={() => setBigger(false)}
            style={{ paddingTop: '100px' }}
          >
            <img src={src} width="700" height="400" />
          </Card>
        </Backdrop>
      )}
    </>
  );
};
