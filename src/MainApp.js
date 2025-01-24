// src/MainApp.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'; // Import routing components
import Navbar from './components/Navbar';
import ProfileSection from './components/ProfileSection';
import Footer from './components/Footer';
import Login from './pages/Login';   // Assuming you have a Login page
import Signup from './pages/Signup'; // Assuming you have a Signup page
import Report from './pages/Report'; // Assuming you have a Report page
import UserFlow from './UserFlow';   // Import UserFlow for signup logic
import './App.css';

const MainApp = () => {
  const [userName, setUserName] = useState(null); // Store user state

  return (
    <>
      <Navbar />
      <div className="app-content">
        <Routes>  {/* Use Routes to define different routes */}
          {/* Redirect user based on authentication */}
          <Route path="/" element={userName ? <ProfileSection userName={userName} /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup onSignup={(name) => setUserName(name)} />} />
          <Route path="/report" element={<Report />} />
          <Route path="/user-flow" element={<UserFlow />} />  {/* For handling signup and profile section */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default MainApp;
