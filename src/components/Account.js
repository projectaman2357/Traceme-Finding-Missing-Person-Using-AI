import React from 'react';
import './Account.css';

const Account = () => {
  return (
    <div className="account-container">
      <h1 className="account-title">CREATE FREE ACCOUNT</h1>
      <p className="account-subtitle">
        Our website offers <span className="highlight">two options</span> for account creation
      </p>

      <div className="account-section">
        <div className="account-text">
          <h2 className="account-option-title">
            Create Your Account Using <span className="highlight-box">DigiLocker</span>
          </h2>
          <p className="account-description">
            Nowadays, most people are familiar with DigiLocker. If you already have
            a DigiLocker account, you can watch the provided video to learn how to
            create your account using this method.
          </p>
          <button className="signup-button">Sign Up</button>
        </div>
        <div className="account-video">
          <img
            src="data:image/png;base64,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"
            alt="How to Sign Up"
            className="video-thumbnail"
          />
          <div className="video-overlay">
            <button className="play-button">▶</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
