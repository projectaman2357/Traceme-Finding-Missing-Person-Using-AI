import React, { useState } from "react";
import "./indetity.css"; // Add custom styles here

const Identity = () => {
  const [idType, setIdType] = useState("Aadhaar");
  const [idNumber, setIdNumber] = useState("");

  const handleSearch = () => {
    // Add search functionality here
    console.log(`Searching for ID Type: ${idType}, ID Number: ${idNumber}`);
  };

  return (
    <div className="identity-section">
      <h2>Enter Person ID</h2>
      <div className="identity-container">
        {/* Left Image */}
        <div className="identity-image">
          <img
            src="https://cdn.pixabay.com/photo/2022/11/09/00/44/aadhaar-card-7579588_1280.png" // Replace with your actual image path
            alt="Identification Card"
          />
        </div>

        {/* Right Form */}
        <div className="identity-form">
          <label htmlFor="idType">ID Type </label>
          <select
            id="idType"
            value={idType}
            onChange={(e) => setIdType(e.target.value)}
          >
            <option value="Aadhaar">Aadhaar</option>
            <option value="PAN">PAN</option>
            <option value="Passport">Passport</option>
          </select>

          <label htmlFor="idNumber">Enter {idType} No</label>
          <input
            type="text"
            id="idNumber"
            placeholder={`Enter ${idType} Number`}
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
          />

          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Identity;
