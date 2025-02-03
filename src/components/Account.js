import React from 'react';
import './Account.css';
// import DigiLocker from '../assets/DigiLocker.png'

const Account = () => {
  return (
    <div className="account-container">
      <h1 className="account-title">CREATE FREE ACCOUNT</h1>
      <p className="account-subtitle">
        Our website offers <span className="highlight">Two options</span> for account creation
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
            src={require('../assets/DigiLocker.png')}  // Path to the image in your assets folder
            alt="DigiLocker"
            className="digilocker-image"  // Add a class for styling the image
          />
        </div>
      </div>

      {/* You can repeat the same process for other account creation options */}
      <div className="account-section">
        <div className="account-text">
          <h2 className="account-option-title">
            Create Your Account Using <span className="highlight-box">Google</span>
          </h2>
          <p className="account-description">
            If you prefer using your Google account, click the button below to sign up quickly.
          </p>
          <button className="signup-button">Sign Up with Google</button>
        </div>
        <div className="account-video">
          {/* Add the image for Google login if applicable */}
        </div>
      </div>
    </div>
  );
}

export default Account;
