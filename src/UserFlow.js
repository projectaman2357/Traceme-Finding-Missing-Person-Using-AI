// src/UserFlow.js
import React, { useState } from "react";
import Signup from "./components/Signup";
import ProfileSection from "./components/ProfileSection";

const UserFlow = () => {
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleSignup = (name, image) => {
    setUserName(name);
    setProfileImage(image);
  };

  return (
    <div>
      {!userName ? (
        <Signup onSignup={handleSignup} />
      ) : (
        <ProfileSection userName={userName} profileImage={profileImage} />
      )}
    </div>
  );
};

export default UserFlow;
