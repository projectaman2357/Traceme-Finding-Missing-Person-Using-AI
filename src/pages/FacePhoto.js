import React, { useState, useRef } from 'react';
import './FacePhoto.css';

const FacePhoto = () => {
  const [gender, setGender] = useState('');
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Handle gender selection
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  // Open camera and capture image
  const handleCaptureClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      alert('Error accessing camera: ' + error.message);
    }
  };

  // Capture the current frame from the video stream
  const handleTakePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      const imageUrl = canvasRef.current.toDataURL('image/png');
      setCapturedPhoto(imageUrl);
      
      // Stop the camera stream after capturing
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  return (
    <div className="facephoto-container">
      <h2 className="facephoto-title">
        Select Gender <span className="required">*</span>
      </h2>
      <div className="gender-options">
        {['Male', 'Female', 'Other'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="gender"
              value={option}
              onChange={handleGenderChange}
            />
            {option}
          </label>
        ))}
      </div>

      <div className="photo-section">
        <h3>Sample Photo</h3>
        <div className="photo-container">
          {capturedPhoto ? (
            <img src={capturedPhoto} alt="Captured" className="sample-photo" />
          ) : (
            <img
              src="https://www.shutterstock.com/shutterstock/photos/752963539/display_1500/stock-vector-silhouette-missing-person-with-stamp-752963539.jpg"
              alt="Sample"
              className="sample-photo"
            />
          )}
          <button className="capture-button" onClick={handleCaptureClick}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/041/655/706/non_2x/capture-and-camera-icon-concept-vector.jpg"
              alt="Capture"
              className="camera-icon"
            />
          </button>
        </div>

        {/* Video Stream for Camera */}
        <video ref={videoRef} autoPlay className="video-preview"></video>
        <button className="capture-button" onClick={handleTakePhoto}>Take Photo</button>

        {/* Canvas to capture image */}
        <canvas ref={canvasRef} width={300} height={300} style={{ display: 'none' }}></canvas>
      </div>
    </div>
  );
};

export default FacePhoto;
