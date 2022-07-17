import React, { FC, useState } from 'react';
import { Card, GalleryButton, Title } from '../../atoms';

import style from './image-upload.module.scss';

type ImageUploadType = {
  onClose: () => void;
  onChange: (imagePath: string) => void;
};

export const ImageUpload: FC<ImageUploadType> = ({ onClose, onChange }) => {
  const [file, setFile] = useState<string>();

  return (
    <Card closeButton closeClick={() => onClose()}>
      <div>
        <Title style={{ marginTop: '2rem' }}>
          <>Upload Photo</>
        </Title>
        <div className={style['button-wrapper']}>
          <GalleryButton
            className={style['upload-button']}
            color="success"
            variant="contained"
            text="Upload Your Image"
          />
          <input
            className={style['file-input']}
            type="file"
            onChange={(e) => {
              setFile(URL.createObjectURL(e.target.files?.[0] as any));
              onChange(URL.createObjectURL(e.target.files?.[0] as any));
            }}
          />
        </div>
        <div className={style['image-wrapper']}>
          <img src={file} width="200" height="200" />
        </div>
      </div>
    </Card>
  );
};
