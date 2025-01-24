import React from "react";
import "./partnership.css";

// Import images
import digilockerLogo from "../assets/didgilocker.webp";
import nitiAayogLogo from "../assets/niti ayog.png";
import ngosLogo from "../assets/adhar.webp";
import aadhaarLogo from "../assets/didgilocker.webp";
import iimtLogo from "../assets/iimt.png";
import bharatLogo from "../assets/bharat.jpeg";
import cpgramsLogo from "../assets/cpgrams.png";
import dataGovLogo from "../assets/data.gov.in.png";
import g20Logo from "../assets/g20.png";
import indiaGovLogo from "../assets/india gove.in.png";

const Partnership = () => {
  return (
    <div className="partnership-section">
      <h2>Our Affiliations & Partnerships</h2>
      <div className="marquee-container">
        <div className="scrolling-logos">
          <img src={digilockerLogo} alt="DigiLocker" className="partner-logo" />
          <img src={nitiAayogLogo} alt="NITI Aayog" className="partner-logo" />
          <img src={ngosLogo} alt="NGOs" className="partner-logo" />
          <img src={aadhaarLogo} alt="Aadhaar" className="partner-logo" />
          <img src={iimtLogo} alt="IIMT" className="partner-logo" />
          <img src={bharatLogo} alt="Bharat" className="partner-logo" />
          <img src={cpgramsLogo} alt="CPGRAMS" className="partner-logo" />
          <img src={dataGovLogo} alt="Data.gov" className="partner-logo" />
          <img src={g20Logo} alt="G20" className="partner-logo" />
          <img src={indiaGovLogo} alt="India Gov" className="partner-logo" />
        </div>
      </div>
    </div>
  );
};

export default Partnership;
