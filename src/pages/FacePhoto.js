import React, { useState } from 'react';
import './FacePhoto.css';


const FacePhoto = () => {
  const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCaptureClick = () => {
    alert('Camera functionality coming soon!');
  };

  return (
    <div className="facephoto-container">
      <h2 className="facephoto-title">
        Select Gender <span className="required">*</span>
      </h2>
      <div className="gender-options">
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleGenderChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleGenderChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Other"
            onChange={handleGenderChange}
          />
          Other
        </label>
      </div>

      <div className="photo-section">
        <h3>Sample Photo</h3>
        <div className="photo-container">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/752963539/display_1500/stock-vector-silhouette-missing-person-with-stamp-752963539.jpg"
            alt="Sample"
            className="sample-photo"
          />
          <button className="capture-button" onClick={handleCaptureClick}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/041/655/706/non_2x/capture-and-camera-icon-concept-vector.jpg"
              alt="Capture"
              className="camera-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacePhoto;
