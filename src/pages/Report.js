import React, { useState } from 'react';
import './Report.css';

const Report = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    height: '',
    color: '',
    phoneNumber: '',
    email: '',
    address: '',
    incidentDetails: '',
    dateOfDisappearance: '',
    locationLastSeen: '',
    aadharNumber: '',
    panNumber: '',
    medicalConditions: '',
    allergies: '',
    photos: [],
  });

  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [otpStatus, setOtpStatus] = useState({
    aadhar: null,
    pan: null,
    mobile: null,
    email: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    if (formData.photos.length + files.length > 4) {
      alert('You can only upload up to 4 photos.');
      return;
    }

    setFormData({
      ...formData,
      photos: [...formData.photos, ...files],
    });
  };

  const handlePhotoRemove = (index) => {
    const updatedPhotos = formData.photos.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      photos: updatedPhotos,
    });
  };

  const generateOtp = () => {
    // Generate a random 6-digit OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOtp(otpCode);
    setOtp(''); // Clear any existing OTP in the input field
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Process the form data here
  };

  const verifyOtp = (type) => {
    if (otp === String(generatedOtp)) {
      setOtpStatus((prevStatus) => ({
        ...prevStatus,
        [type]: 'Verified',
      }));
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="missing-person-report-container">
      <div className="missing-person-report">
        <h2>Missing Person Report</h2>
        <form onSubmit={handleSubmit}>
          <h3>Personal Information</h3>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Height:
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Complexion:
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              required
            />
          </label>

          <h3>Photos of the Missing Person</h3>
          <label>
            Upload Photos (Max 4):
            <input
              type="file"
              name="photos"
              onChange={handleFileChange}
              accept="image/*"
              multiple
            />
          </label>

          <h3>Verification Details</h3>

          <label>
            Aadhar Number:
            <input
              type="text"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={generateOtp}>Generate OTP for Aadhar</button>
            <div>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                type="button"
                onClick={() => verifyOtp('aadhar')}
              >
                Verify OTP
              </button>
              {otpStatus.aadhar && <span className="verified-message">{otpStatus.aadhar}</span>}
            </div>
          </label>

          <label>
            PAN Number:
            <input
              type="text"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={generateOtp}>Generate OTP for PAN</button>
            <div>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                type="button"
                onClick={() => verifyOtp('pan')}
              >
                Verify OTP
              </button>
              {otpStatus.pan && <span className="verified-message">{otpStatus.pan}</span>}
            </div>
          </label>

          <label>
            Mobile Number:
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={generateOtp}>Generate OTP for Mobile</button>
            <div>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                type="button"
                onClick={() => verifyOtp('mobile')}
              >
                Verify OTP
              </button>
              {otpStatus.mobile && <span className="verified-message">{otpStatus.mobile}</span>}
            </div>
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={generateOtp}>Generate OTP for Email</button>
            <div>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                type="button"
                onClick={() => verifyOtp('email')}
              >
                Verify OTP
              </button>
              {otpStatus.email && <span className="verified-message">{otpStatus.email}</span>}
            </div>
          </label>

          <h3>Submit Report</h3>
          <button type="submit">Submit Report</button>
        </form>
      </div>

      {/* Right Section to Display Photos */}
      <div className="photo-preview-section">
        <h3>Uploaded Photos</h3>
        {formData.photos.length === 0 ? (
          <p>No photos uploaded yet.</p>
        ) : (
          <div className="photo-preview">
            {formData.photos.map((photo, index) => (
              <div key={index} className="photo-container">
                <img
                  src={URL.createObjectURL(photo)}
                  alt={`Uploaded ${index + 1}`}
                  className="uploaded-photo"
                />
                <button
                  type="button"
                  onClick={() => handlePhotoRemove(index)}
                  className="remove-photo-button"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;
