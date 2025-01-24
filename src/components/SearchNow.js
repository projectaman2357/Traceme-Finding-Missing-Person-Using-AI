import React from "react";
import "./SearchNow.css";
import { Link } from "react-router-dom";

const SearchNow = () => {
  return (
    <div className="search-now-section">
      <h2>Start Your Search Now</h2>
      <div className="search-options">
        {/* Link for FacePhoto */}
        <Link to="/facephoto">
          <button className="search-button">
            <span role="img" aria-label="magnifying-glass">🔍</span> Search By Face Photo <span role="img" aria-label="camera">📸</span>
          </button>
        </Link>

        {/* Link for Identity Search */}
        <Link to="/identity">
          <button className="search-button">
            <span role="img" aria-label="magnifying-glass">🔍</span> Search By Identity <span role="img" aria-label="ID">🆔</span>
          </button>
        </Link>

        {/* Link for Vehicle Details */}
        <Link to="/vehicle">
          <button className="search-button">
            <span role="img" aria-label="magnifying-glass">🔍</span> Search Vehicle Details <span role="img" aria-label="car">🚗</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchNow;
