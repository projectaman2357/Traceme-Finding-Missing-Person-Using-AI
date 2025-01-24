import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="left-section">
        <img
          src="https://img.freepik.com/premium-vector/customer-service-woman-manager-concept-ai-assistance-headphone-call-center-hotline-client-support-consultant-online-help-information-headset-girl_115739-918.jpg?semt=ais_hybrid" // Replace with your image URL
          alt="Contact Us"
          className="image"
        />
        <div className="contact-info">
          <div className="info-box">
            <p>Email</p>
            <p>amankumartiwari5255@gmail.com</p>
          </div>
          <div className="info-box">
            <p>Phone</p>
            <p>+91 9031359720</p>
          </div>
          <div className="info-box">
            <p>Address</p>
            <p>Greater Noida</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <h2>Contact Us</h2>
        <p>Let's talk about your problem.</p>
        <form className="form">
          <label>
            Your Name
            <input type="text" placeholder="Enter your name" className="input" />
          </label>
          <label>
            Your Email
            <input type="email" placeholder="Enter your email" className="input" />
          </label>
          <label>
            Your Message
            <textarea placeholder="Enter your message" className="textarea"></textarea>
          </label>
          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
