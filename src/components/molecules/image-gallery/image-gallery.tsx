import React from 'react';
import { ImageViewer } from '../../atoms';

import style from './image-gallery.module.scss';

export const ImageGallery = () => {
  return (
    <div className={style['gallery-container']}>
      {Array(50)
        .fill(0)
        .map((item, index) => (
          <ImageViewer
            key={item + index}
            src="https://im.haberturk.com/yerel_haber/2020/08/01/ver1596270900/79819132_620x410.jpg"
          />
        ))}
    </div>
  );
};
