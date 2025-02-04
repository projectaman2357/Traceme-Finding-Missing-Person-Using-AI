// facephoto.js

import React, { useState } from 'react';

function FacePhoto() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccessful, setUploadSuccessful] = useState(false);
  const [error, setError] = useState(null);


  const handleCameraCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement('video');
      video.srcObject = stream;
      await video.play();

      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);

      const dataUrl = canvas.toDataURL('image/png'); // Or 'image/jpeg'
      setImage(dataUrl);
      stream.getTracks().forEach(track => track.stop()); // Stop the camera stream
    } catch (err) {
      setError("Error accessing camera: " + err.message);
      console.error("Error accessing camera:", err);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      setError("Please select or capture an image.");
      return;
    }

    setUploading(true);
    setError(null); // Clear any previous errors

    try {
      const formData = new FormData();
      formData.append('image', dataURLtoBlob(image), 'photo.png'); // Or 'photo.jpeg'

      const response = await fetch('/api/upload', { // Replace with your API endpoint
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json(); // Try to get error details from the server
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      setUploadSuccessful(true);
      setTimeout(() => {
        window.location.href = '/findperson'; // Redirect after successful upload
      }, 2000); // Redirect after 2 seconds

    } catch (err) {
      setError("Upload failed: " + err.message);
      console.error("Upload error:", err);
    } finally {
      setUploading(false);
    }
  };

  // Helper function to convert data URL to Blob (for FormData)
  function dataURLtoBlob(dataURL) {
    const parts = dataURL.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }

  return (
    <div>
      <h1>Face Photo Upload</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error messages */}

      <div>
        <button onClick={handleCameraCapture} disabled={uploading}>Capture Photo</button>
        <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploading} />
      </div>

      {image && (
        <div>
          <h2>Preview:</h2>
          <img src={image} alt="Preview" style={{ maxWidth: '300px' }} />
        </div>
      )}

      <button onClick={handleUpload} disabled={uploading || !image}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>

      {uploadSuccessful && <p style={{ color: 'green' }}>Upload Successful! Redirecting...</p>}

    </div>
  );
}

export default FacePhoto;