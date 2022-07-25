import React, { FC, useState } from 'react';
import { BackdropGallery, GalleryButton } from '../../atoms';
import { ImageUpload } from '../image-upload/image-upload';
import { useSelector } from 'react-redux';
import store from '../../../store/store';
import { setName } from '../../../store/reducers';

import style from './file-upload.module.scss';

type FileUploadType = {
  onChange: (imagePath: string) => void;
};

export const FileUpload: FC<FileUploadType> = ({ onChange }) => {
  const [open, setOpen] = useState(false);
  const data = useSelector((state: { name: string }) => state.name);
  store.dispatch(setName('furkan'));

  console.log('file upload: ', data);

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
