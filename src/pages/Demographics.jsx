import React, { useState } from "react";
import "./Demographics.css";
import { Link } from "react-router-dom";

const Demographics = () => {
  const [selectedRace, setSelectedRace] = useState("East Asian");

  const raceData = [
    { label: "East Asian", value: "96%" },
    { label: "White", value: "6%" },
    { label: "Black", value: "3%" },
    { label: "South Asian", value: "2%" },
    { label: "Latino Hispanic", value: "0%" },
    { label: "South East Asian", value: "0%" },
    { label: "Middle Eastern", value: "0%" },
  ];

  return (
    <div className="demographics-page">
      {/* Top Nav */}
      <nav className="demographics-nav">
        <div className="nav-logo">
          Skinstric <span className="nav-sub">[Analysis]</span>
        </div>
        <div className="nav-title">DEMOGRAPHICS</div>
        <div className="predicted">PREDICTED RACE & AGE</div>
      </nav>

      {/* Page Layout */}
      <div className="demographics-wrapper">
        {/* Sidebar */}
        <div className="sidebar">
  <div className="sidebar-section active">
    {selectedRace.toUpperCase()}
    <br />
    <span>RACE</span>
  </div>
  <div className="sidebar-section">30–39 <br /><span>AGE</span></div>
  <div className="sidebar-section">FEMALE <br /><span>SEX</span></div>

  <Link to="/analysis" className="back-button">
    <div className="icon-box">
      <i className="fa-solid fa-arrow-left"></i>
    </div>
    BACK
  </Link>
</div>


        {/* Middle Section */}
        <div className="middle-section">
          <div className="middle-content-box">
            <h2 className="main-prediction">{selectedRace}</h2>
            <div className="confidence-circle">
              <span>
                {
                  raceData.find((item) => item.label === selectedRace)?.value ||
                  "0%"
                }
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-panel">
          <div className="confidence-header">
            <span>RACE</span>
            <span>A.I. CONFIDENCE</span>
          </div>
          <ul className="confidence-list">
            {raceData.map(({ label, value }) => (
              <li
                key={label}
                className={`confidence-item ${
                    selectedRace.toLowerCase() === label.toLowerCase() ? "selected" : ""
                  }`}
                  
              >
                <span className="diamond-shape" />
                {label} <span>{value}</span>
              </li>
            ))}
          </ul>

          <div className="bottom-buttons">
            <button className="reset-btn">RESET</button>
            <button className="confirm-btn">CONFIRM</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demographics;
