import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./profilesection.css";
import image1 from "../assets/face1.png";
import image2 from "../assets/face2.png";
import image3 from "../assets/face3.png";

const ProfileSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageList = [image1, image2, image3];

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(imageTimer);
  }, []);

  return (
    <motion.div
      className="profile-section"
      initial={{ opacity: 0 }} // Starts hidden
      animate={{ opacity: 1 }} // Fades in
      transition={{ duration: 1 }}
    >
      <motion.div
        className="image-container"
        key={currentImageIndex}
        initial={{ opacity: 0, scale: 0.8 }} // Starts faded out & small
        animate={{ opacity: 1, scale: 1 }} // Fades in & enlarges
        exit={{ opacity: 0, scale: 0.8 }} // Fades out when changing
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          className="profile-image"
          src={imageList[currentImageIndex]}
          alt="Profile Animation"
        />
      </motion.div>
    </motion.div>
  );
};

export default ProfileSection;
