import React, {  useMemo, useState } from 'react';
import { Title, UploadImage } from './components/atoms';
import { FileUpload, ImageGallery } from './components/molecules';

const App = () => {
  const [images, setImages] = useState<string[]>([]);
  const [title] = useState('title');


  return (
      <div className="App">
        <div className="title">
          <UploadImage />
          {useMemo(
            () => (
              <Title style={{ marginTop: '12rem' }}>
                <>{title}</>
              </Title>
            ),
            [title]
          )}
        </div>
        <div className="gallery">
          <FileUpload
            onChange={(imagePath) => setImages([...images, imagePath])}
          />
        </div>
        <ImageGallery imageList={images} />
      </div>
  );
};

export default App;
