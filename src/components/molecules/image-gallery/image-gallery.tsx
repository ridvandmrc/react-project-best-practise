import React, { FC } from 'react';
import { ImageViewer } from '../../atoms';

import style from './image-gallery.module.scss';

type ImageGalleryType = {
  imageList: string[];
};

export const ImageGallery: FC<ImageGalleryType> = ({ imageList }) => {
  console.log('image gallery');
  return (
    <div className={style['gallery-container']}>
      {imageList.map((item, index) => (
        <ImageViewer key={index} src={item} />
      ))}

      {Array(20)
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
