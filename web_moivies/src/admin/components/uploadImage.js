// ImageUploader.js

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const ImageUploader = ({ onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    // Thực hiện upload hình ảnh ở đây
    onImageUpload(selectedFile);
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Upload ảnh thành công');
    } catch (error) {
      console.error('Lỗi khi upload ảnh:', error);
      alert('Lỗi khi upload ảnh');
    }
  };

  return (
    <div>
      <h2>Upload ảnh</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUploader;
