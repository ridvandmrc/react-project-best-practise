import React, { useEffect, useState } from 'react';
import { Title, UploadImage } from './components/atoms';
import { FileUpload, ImageGallery } from './components/molecules';
import store from './store/store';
import { Provider } from 'react-redux';

const App = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    console.log(images);
  }, [images]);


  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
