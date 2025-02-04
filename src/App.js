import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import routing components
import Navbar from './components/Navbar';
import ProfileSection from './components/ProfileSection';
import Partnership from './components/Partnership'; // Import the Partnership component
import SearchNow from './components/SearchNow';
import Choose from './components/Choose';
import Account from './components/Account';
import Footer from './components/Footer';
// import ImageUpload from './components/ImageUpload';
import Login from './pages/Login'; // Assuming you have a Login page
import Signup from './pages/Signup'; // Assuming you have a Signup page
import Report from './pages/Report'; // Assuming you have a Report page
import FacePhoto from './pages/FacePhoto';
import Identity from  './pages/Identity';
import Vehicle from   './pages/Vehicle';
import FindPerson from './pages/FindPerson';
import Anonymous from './pages/Anonymous';
import Contact from './pages/Contact'
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app-content">
        <Routes> {/* Use Routes to define different routes */}
          {/* Home route includes both ProfileSection and Partnership */}
          <Route
            path="/"
            element={
              <>
                {/* <ImageUpload/> */}
                <ProfileSection />
                <Partnership /> {/* Add Partnership below ProfileSection */}
                <SearchNow />
                <Choose />
                <Account />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/report" element={<Report />} /> {/* Ensure the path is lowercase */}
          <Route path="/FacePhoto" element={<FacePhoto />} />
          <Route path="/Identity"  element={<Identity />} />
          <Route path="/Vehicle"  element={<Vehicle />} />
          <Route path="/FindPerson" element={<FindPerson />} />
          <Route path="/Anonymous" element={<Anonymous />} />
          <Route path="/contact" element={<Contact/>} />

        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
