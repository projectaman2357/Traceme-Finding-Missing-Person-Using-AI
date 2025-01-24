import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./profilesection.css";
import video4 from "../assets/videos/video4.mp4";

const ProfileSection = ({ userName, profileImage }) => {
  const [scannedImage, setScannedImage] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const navigate = useNavigate();

  const videoList = [video4];

  useEffect(() => {
    const videoTimer = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoList.length);
    }, 5000);

    return () => clearInterval(videoTimer);
  }, [videoList.length]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setScannedImage(imageURL);
    }
  };

  const handleAddMissingPerson = () => {
    if (scannedImage) {
      navigate("/anonymous");
    } else {
      alert("Please upload or scan an image before proceeding.");
    }
  };

  return (
    <div className="profile-section">
      <div className="suspicious-images left">
        <div className="scan-container">
          {scannedImage ? (
            <img
              src={scannedImage}
              alt="Scanned"
              style={{
                maxWidth: "100%",
                maxHeight: "200px",
                objectFit: "contain",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          ) : (
            <>
              <div className="scan-icon-wrapper">
                <p>Upload or Scan Image</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="scan-input"
                />
              </div>
            </>
          )}
          <button
            className="add-missing-button"
            onClick={handleAddMissingPerson}
          >
            Add Your Missing Person
          </button>
        </div>
      </div>
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
    </div>
  );
};

export default ProfileSection;
