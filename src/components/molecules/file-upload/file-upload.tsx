import React, { FC, useState } from 'react';
import { BackdropGallery, GalleryButton } from '../../atoms';
import { ImageUpload } from '../image-upload/image-upload';

import style from './file-upload.module.scss';

type FileUploadType = {
  onChange: (imagePath: string) => void;
};

export const FileUpload: FC<FileUploadType> = ({ onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={style['file-indicator']} onClick={() => setOpen(!open)}>
        File Upload
      </div>
      <GalleryButton
        className="gallery-button"
        color="success"
        variant="contained"
        text="Select a File"
        onClick={() => setOpen(!open)}
      />
      <BackdropGallery open={open}>
        <ImageUpload onChange={onChange} onClose={() => setOpen(false)} />
      </BackdropGallery>
    </>
  );
};
