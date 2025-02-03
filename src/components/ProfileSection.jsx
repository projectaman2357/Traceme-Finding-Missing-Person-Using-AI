import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./profilesection.css";
import video4 from "../assets/videos/video4.mp4";

const ProfileSection = ({ userName, profileImage }) => {
  const [scannedImage, setScannedImage] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoStream, setVideoStream] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [imageCaptured, setImageCaptured] = useState(null);
  const cameraRef = useRef(null); // Reference to the video element
  const navigate = useNavigate();

  const videoList = [video4];

  useEffect(() => {
    const videoTimer = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoList.length);
    }, 5000);

    return () => clearInterval(videoTimer);
  }, [videoList.length]);

  // Handle image upload (from file input)
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setScannedImage(imageURL);
      setImageCaptured(null); // Clear any captured image
    }
  };

  // Start camera for image capturing
  const handleScanImage = () => {
    if (!isCameraActive) {
      const video = cameraRef.current;
      const constraints = {
        video: {
          facingMode: "environment", // Set camera to back camera (for mobile)
        },
      };

      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
          video.srcObject = stream;
          video.play();
          setVideoStream(stream);
          setIsCameraActive(true);
        })
        .catch((err) => alert('Camera access denied or not supported!'));
    }
  };

  // Capture image from camera
  const captureImage = () => {
    const video = cameraRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current frame from the video onto the canvas
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageURL = canvas.toDataURL('image/png');
    setImageCaptured(imageURL); // Set captured image
    stopCamera(); // Stop the camera after capturing
  };

  // Stop the camera stream
  const stopCamera = () => {
    if (videoStream) {
      videoStream.getTracks().forEach(track => track.stop());
      setVideoStream(null);
    }
    setIsCameraActive(false);
  };

  // Navigate if a photo is selected
  const handleAddMissingPerson = () => {
    if (scannedImage || imageCaptured) {
      navigate("/anonymous");
    } else {
      alert("Please upload or capture an image before proceeding.");
    }
  };

  return (
    <div className="profile-section">
      <div className="left-column">
        <div className="scan-container">
          {scannedImage || imageCaptured ? (
            <img
              src={scannedImage || imageCaptured}
              alt="Scanned or Captured"
              className="scanned-image"
            />
          ) : (
            <>
              <div className="scan-icon-wrapper">
                <p>Upload or Capture Image</p>
                <div className="button-group">
                  <button
                    onClick={handleScanImage}
                    className="scan-btn"
                  >
                    Capture with Camera
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="scan-input"
                  />
                </div>
              </div>
            </>
          )}
          {isCameraActive && (
            <div className="camera-actions">
              <button className="capture-btn" onClick={captureImage}>
                Capture Photo
              </button>
              <button className="stop-camera-btn" onClick={stopCamera}>
                Stop Camera
              </button>
            </div>
          )}
          <button
            className="add-missing-button"
            onClick={handleAddMissingPerson}
          >
            Add Your Missing Person
          </button>
        </div>
      </div>

      <div className="right-column">
        {isCameraActive && (
          <video
            className="suspicious-video"
            ref={cameraRef}
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        )}
        {!isCameraActive && (
          <video
            className="suspicious-video"
            src={videoList[currentVideoIndex]}
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default ProfileSection;
