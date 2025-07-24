import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Demographics.css";
import PredictionCircle from "../components/PredictionCircle";

const Demographics = () => {
  const [selectedCategory, setSelectedCategory] = useState("race");
  const [selectedValues, setSelectedValues] = useState({
    race: { label: "Middle eastern", confidence: 25 },
    age: { label: "30-39", confidence: 20 },
    sex: { label: "Female", confidence: 10 },
  });

  const data = {
    race: [
      { label: "South asian", confidence: 39 },
      { label: "Middle eastern", confidence: 25 },
      { label: "Latino hispanic", confidence: 17 },
      { label: "Black", confidence: 7 },
      { label: "Southeast asian", confidence: 6 },
      { label: "East asian", confidence: 3 },
      { label: "White", confidence: 3 },
    ],
    age: [
      { label: "0–9", confidence: 5 },
      { label: "10-19", confidence: 8 },
      { label: "20-29", confidence: 12 },
      { label: "30-39", confidence: 20 },
      { label: "40-49", confidence: 28 },
      { label: "50-59", confidence: 10 },
      { label: "60-69", confidence: 10 },
      { label: "70+", confidence: 7 },
    ],
    sex: [
      { label: "Male", confidence: 90 },
      { label: "Female", confidence: 10 },
    ],
  };

  const handleSidebarClick = (category, label, confidence) => {
    setSelectedCategory(category);
    setSelectedValues((prev) => ({
      ...prev,
      [category]: { label, confidence },
    }));
  };

  const handleReset = () => {
    setSelectedValues({
      race: { label: "Middle eastern", confidence: 25 },
      age: { label: "30-39", confidence: 20 },
      sex: { label: "Female", confidence: 10 },
    });
  };

  const handleConfirm = () => {
    console.log("Confirmed:", selectedValues);
  };

  return (
    <div className="demographics-page">
      {/* Top Nav */}
      <div className="top-header">
        <div className="top-left">
          <span className="nav-logo">Skinstric</span>
          <span className="nav-intro">[ INTRO ]</span>
        </div>
        <button className=".demographics-page enter-code-button">ENTER CODE</button>
      </div>

      {/* Section Title */}
      <div className="nav-header-container">
        <p className="nav-analysis">A.I. ANALYSIS</p>
        <h1 className="nav-header-main">DEMOGRAPHICS</h1>
        <p className="nav-subtitle">Predicted Race and Age</p>
      </div>

      {/* Back Button */}
      <Link to="/analysis" className="back-button-wrapper">
  <div className="back-button-diamond">
    <span className="back-arrow">←</span>
  </div>
  <span className="back-text">BACK</span>
</Link>

      {/* Main Wrapper */}
      <div className="demographics-wrapper">
        {/* Sidebar */}
        <div className="sidebar">
          {["race", "age", "sex"].map((category) => (
            <div
              key={category}
              className={`sidebar-section ${selectedCategory === category ? "active" : ""}`}
              onClick={() =>
                handleSidebarClick(
                  category,
                  selectedValues[category].label,
                  selectedValues[category].confidence
                )
              }
            >
              {selectedValues[category].label}
              <span>{category.toUpperCase()}</span>
            </div>
          ))}
        </div>

        {/* Center Content */}
        <div className="middle-section">
          <div className="middle-content-box">
            <h2 className="main-prediction">{selectedValues[selectedCategory].label}</h2>
            <div className="prediction-circle">
              <PredictionCircle percentage={selectedValues[selectedCategory].confidence} />
            </div>
            <div className="middle-note">
              If A.I. estimate is wrong, select the correct one.
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <div className="confidence-header">
            <span>{selectedCategory}</span>
            <span>A.I. Confidence</span>
          </div>
          <ul className="confidence-list">
            {data[selectedCategory].map((item, i) => (
              <li
                key={i}
                className={item.label === selectedValues[selectedCategory].label ? "selected" : ""}
                onClick={() => handleSidebarClick(selectedCategory, item.label, item.confidence)}
              >
                <div className="diamond-shape" />
                <span>{item.label}</span>
                <span>{item.confidence}%</span>
              </li>
            ))}
          </ul>

          <div className="reset-confirm-wrapper">
            <button className="reset-button" onClick={handleReset}>RESET</button>
            <button className="confirm-button" onClick={handleConfirm}>CONFIRM</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demographics;
