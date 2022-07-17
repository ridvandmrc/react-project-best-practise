import React, { useEffect, useState } from 'react';
import { Title, UploadImage } from './components/atoms';
import { FileUpload, ImageGallery } from './components/molecules';

const App = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <div className="App">
      <div className="title">
        <UploadImage />
        <Title style={{ marginTop: '12rem' }} />
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
