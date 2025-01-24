import React, { useState } from "react";
import "./FindPerson.css";

const FindPerson = () => {
  // Sample data for reports and matches
  const [searchQuery, setSearchQuery] = useState("");
  const [reportDetails, setReportDetails] = useState([
    {
      photo: "https://c.ndtvimg.com/2022-05/r1rspu2g_manikanth-kondaveeti-missing-indian-650_625x300_26_May_22.jpg",
      age: 25,
      height: "5'8\"",
      color: "Fair",
      name: "Abdul Azad",
      lastSeen: "Lucknow, Dec 20, 2012",
    },
    {
      photo: "https://pbs.twimg.com/profile_images/1614207496432013315/KTQ-Hfxh_400x400.jpg",
      age: 30,
      height: "5'6\"",
      color: "Wheatish",
      name: "Ravi Sharma",
      lastSeen: "Kanpur, Jan 15, 2020",
    },
    {
      photo: "https://pbs.twimg.com/profile_images/1351085735663833094/xyxFz_2f_400x400.jpg",
      age: 22,
      height: "5'7\"",
      color: "Dark",
      name: "Suresh Kumar",
      lastSeen: "Agra, Feb 10, 2018",
    },
    {
      photo: "https://avatars.githubusercontent.com/u/48642509?v=4",
      age: 18,
      height: "5'5\"",
      color: "Fair",
      name: "Priyanshu Singh",
      lastSeen: "Varanasi, Mar 12, 2019",
    },
    {
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDr8kbk2EkJdjNB6RWDFyjidq7_IPc_ByLdV1rFtUEyT8p4H0Rs4zOrYl4Y0gd5KALvDA&usqp=CAU",
      age: 35,
      height: "5'9\"",
      color: "Wheatish",
      name: "Alok Verma",
      lastSeen: "Delhi, Apr 25, 2021",
    },
    {
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRejRBFaNak0vQGAEsxOncg8_XoDcs7b9qh-wB9EGKY7dMEDJ7PoktLL9yE_TKSx1j7Ro&usqp=CAU",
      age: 40,
      height: "5'10\"",
      color: "Dark",
      name: "Sunil kumar",
      lastSeen: "Patna, May 30, 2016",
    },
    {
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1UwdxbkGktUW2uu2hRcxFTbqpjw7gqqvmT9cRh6aOmxYYz1YSwO1eUfYsAzBdtN5EjyU&usqp=CAU",
      age: 28,
      height: "5'8\"",
      color: "Fair",
      name: "Rahul Mehra",
      lastSeen: "Mumbai, Jun 18, 2017",
    },
    {
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1d_kUjNrbQjsJnvVJ-xvtYQmVJ3jUnW3nm-E7DHSuvKLgFOF9CPuwg9badzxFysXMh7I&usqp=CAU",
      age: 26,
      height: "5'4\"",
      color: "Wheatish",
      name: "Anshuman Gupta",
      lastSeen: "Chennai, Jul 22, 2022",
    },
    {
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqBzpjOY4KDCsmDUZz5s2xEd7-hBgbv_mvDxN15PcA71rejgOfH7kvWWtBvXk5NvJHi4&usqp=CAU",
      age: 45,
      height: "6'0\"",
      color: "Dark",
      name: "Vikram Rao",
      lastSeen: "Hyderabad, Aug 14, 2015",
    },
    {
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcsWdQjkAJrj2NuuDltxJ5hH4iKrFWB6hGm0ZrktekjzjgtB1K4_Gbz_BRw_raBAUTDc&usqp=CAU",
      age: 32,
      height: "5'6\"",
      color: "Fair",
      name: "Meeher Kapoor",
      lastSeen: "Jaipur, Sep 29, 2019",
    },
  ]);

  const [matches, setMatches] = useState([
    {
      id: 1,
      photo: "https://c.ndtvimg.com/2022-05/r1rspu2g_manikanth-kondaveeti-missing-indian-650_625x300_26_May_22.jpg",
      name: "Abdul Azad",
      similarity: "85%",
    },
    {
      id: 2,
      photo: "https://pbs.twimg.com/profile_images/1614207496432013315/KTQ-Hfxh_400x400.jpg",
      name: "Mark Smith",
      similarity: "75%",
    },
    {
      id: 3,
      photo: "https://pbs.twimg.com/profile_images/1614207496432013315/KTQ-Hfxh_400x400.jpg",
      name: "Emily Johnson",
      similarity: "70%",
    },
    {
        id: 3,
        photo: "https://pbs.twimg.com/profile_images/1614207496432013315/KTQ-Hfxh_400x400.jpg",
        name: "Emily Johnson",
        similarity: "70%",
      },
      {
        id: 3,
        photo: "https://pbs.twimg.com/profile_images/1614207496432013315/KTQ-Hfxh_400x400.jpg",
        name: "Emily Johnson",
        similarity: "70%",
      },
      {
        id: 3,
        photo: "https://pbs.twimg.com/profile_images/1614207496432013315/KTQ-Hfxh_400x400.jpg",
        name: "Emily Johnson",
        similarity: "70%",
      },
      {
        id: 3,
        photo: "https://pbs.twimg.com/profile_images/1614207496432013315/KTQ-Hfxh_400x400.jpg",
        name: "Emily Johnson",
        similarity: "70%",
      },
      {
        id: 3,
        photo: "https://pbs.twimg.com/profile_images/1614207496432013315/KTQ-Hfxh_400x400.jpg",
        name: "Emily Johnson",
        similarity: "70%",
      },
      {
        id: 3,
        photo: "https://pbs.twimg.com/profile_images/1614207496432013315/KTQ-Hfxh_400x400.jpg",
        name: "Emily Johnson",
        similarity: "70%",
      },
  ]);

  // Handle search
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter reportDetails based on search query
  const filteredReports = reportDetails.filter((report) =>
    report.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort filtered reports based on similarity to search (for now, just by the name)
  const sortedReports = filteredReports.sort((a, b) => {
    return a.name.toLowerCase().indexOf(searchQuery.toLowerCase()) -
      b.name.toLowerCase().indexOf(searchQuery.toLowerCase());
  });

  return (
    <div className="find-person-page">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or details..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>

      {/* Content Section */}
      <div className="content-section">
        {/* Left Section: Report Details */}
        <div className="report-details">
          <h2>Report Details</h2>
          {sortedReports.map((report, index) => (
            <div key={index} className="report-card">
              <img src={report.photo} alt={report.name} />
              <p><strong>Name:</strong> {report.name}</p>
              <p><strong>Age:</strong> {report.age}</p>
              <p><strong>Height:</strong> {report.height}</p>
              <p><strong>Color:</strong> {report.color}</p>
              <p><strong>Last Seen:</strong> {report.lastSeen}</p>
            </div>
          ))}
        </div>

        {/* Right Section: Matches */}
        <div className="matches-section">
          <h2>Potential Matches</h2>
          {matches.length > 0 ? (
            matches.map((match) => (
              <div className="match-card" key={match.id}>
                <img src={match.photo} alt={match.name} />
                <p><strong>Name:</strong> {match.name}</p>
                <p><strong>Similarity:</strong> {match.similarity}</p>
              </div>
            ))
          ) : (
            <p>No matches found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindPerson;
