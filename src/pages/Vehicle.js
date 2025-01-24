import React, { useState } from "react";
import "./Vehicle.css"; // Add custom styles here

const Vehicle = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSendOTP = () => {
    // Add OTP functionality here
    console.log(`Sending OTP to: ${mobileNumber}`);
  };

  return (
    <div className="vehicle-section">
      <h2>Search Vehicle Details</h2>
      <div className="vehicle-container">
        {/* Left Image */}
        <div className="vehicle-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/713/713313.png" // Replace with your actual image path
            alt="Vehicle Details"
          />
        </div>

        {/* Right Form */}
        <div className="vehicle-form">
          <label htmlFor="mobileNumber">Enter Your Mobile Number</label>
          <input
            type="text"
            id="mobileNumber"
            placeholder="Enter Your Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />

          <button className="send-otp-button" onClick={handleSendOTP}>
            Send OTP <span role="img" aria-label="arrow">➡️</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
