import React from 'react';
import './Choose.css';

const Choose = () => {
  return (
    <div className="choose-container">
      <h2 className="choose-title">Why Choose TraceMe?</h2>
      <p className="choose-subtitle">
        Here are a few reasons why our customers choose TraceMe.
      </p>
      <div className="choose-features">
        <div className="feature-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3352/3352700.png"
            alt="Personalized Profiles"
            className="feature-icon"
          />
          <h3>Personalized Profiles</h3>
          <p>
            Create a personal profile to receive alerts if your loved one is
            found in emergencies or accidents, ensuring a quick response and
            peace of mind.
          </p>
        </div>
        <div className="feature-card">
          <img
            src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
            alt="Automatic Search"
            className="feature-icon"
          />
          <h3>Automatic Search During Upload</h3>
          <p>
            Our system automatically checks if missing persons are in the care
            of NGOs or other institutions when details are uploaded.
          </p>
        </div>
        <div className="feature-card">
          <img
            src="https://c8.alamy.com/comp/HY98P8/alert-icon-stock-vector-illustration-flat-design-HY98P8.jpg"
            alt="Real-Time Alerts"
            className="feature-icon"
          />
          <h3>Real-Time Alerts</h3>
          <p>
            Receive instant notifications and connect with searchers directly
            when a missing person is found.
          </p>
        </div>
        <div className="feature-card">
          <img
            src="https://media.istockphoto.com/id/1402476465/vector/finger-print-with-magnifying-glass-vector-simple-logo-or-icon-incognito-man-concept.jpg?s=612x612&w=0&k=20&c=fynJJHQaAywF1EDwLquPPz3_XpPZxtIU7Kx_RVHaQ10="
            alt="Search by Identity"
            className="feature-icon"
          />
          <h3>Search by Identity</h3>
          <p>
            Easily verify if a person is missing by searching with government-issued
            IDs, ensuring fast identification and contact with families.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
