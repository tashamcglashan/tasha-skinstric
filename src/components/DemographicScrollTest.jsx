import React from "react";
import "./DemographicScrollTest.css";

export default function DemographicScrollTest() {
  return (
    <div className="demo-page">
      <div className="top-header">
        <div className="top-left">
          <span className="nav-logo">Skinstric</span>
          <span className="nav-intro">[ INTRO ]</span>
        </div>
        <button className="enter-code-button">ENTER CODE</button>
      </div>

      <div className="section-header">
        <h1>Demographics</h1>
        <p>Predicted Race and Age</p>
      </div>

      <div className="demo-wrapper">
        <div className="sidebar">Sidebar</div>

        <div className="middle-section">
          <div className="circle-container">
            <div className="circle">Circle</div>
          </div>
          <p className="note">
            If A.I. estimate is wrong, select the correct one.
          </p>
          <div className="filler">
            {/* Filler to force scroll */}
            <p>Scroll Down ⬇️</p>
            <div style={{ height: "600px" }}></div>
          </div>
        </div>

        <div className="right-panel">
          <p>Right Panel</p>
        </div>
      </div>
    </div>
  );
}
