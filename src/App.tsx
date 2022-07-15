import React from 'react';
import {
  Title,
  GalleryInput,
  GalleryButton,
  UploadImage,
} from './components/atoms';

const App = () => {
  return (
    <div className="App">
      <div className="title">
        <UploadImage />
        <Title />
      </div>
      <div className="gallery">
        <GalleryInput label="File Upload" className="gallery-input" disabled />
        <GalleryButton
          className="gallery-button"
          color="success"
          variant="contained"
          text="Select a File"
        />
      </div>
    </div>
  );
};

export default App;
