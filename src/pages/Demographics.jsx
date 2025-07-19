import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Demographics.css";
import PredictionCircle from "../components/PredictionCircle";

const Demographics = () => {
  const [selectedCategory, setSelectedCategory] = useState("race");
  const [selectedValue, setSelectedValue] = useState("Middle eastern");
  const [selectedConfidence, setSelectedConfidence] = useState(25);

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

  const handleSidebarClick = (category, value, confidence) => {
    setSelectedCategory(category);
    setSelectedValue(value);
    setSelectedConfidence(confidence);
  };

  return (
    <div className="demographics-page">
      {/* Top Navigation */}
      <nav className="demographics-nav">
        <span className="nav-logo">Skinstric</span>
        <span className="nav-title">[ Analysis ]</span>
      </nav>

      {/* Header section */}
      <div className="nav-header-container">
        <h1 className="nav-header-main">Demographics</h1>
        <span className="nav-subtitle">Predicted Race and Age</span>
      </div>

      <div className="demographics-wrapper">
        {/* Sidebar */}
        <div className="sidebar">
          {[
            { category: "race", value: "Middle eastern", confidence: 25 },
            { category: "age", value: "30-39", confidence: 20 },
            { category: "sex", value: "Female", confidence: 10 },
          ].map(({ category, value, confidence }) => (
            <div
              key={category}
              className={`sidebar-section ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => handleSidebarClick(category, value, confidence)}
            >
              {value}
              <span>{category.toUpperCase()}</span>
            </div>
          ))}
        </div>

        {/* Center Section */}
        <div className="middle-section">
          <div className="middle-content-box">
            <h2 className="main-prediction main-prediction-title">{selectedValue}</h2>
            <div className="prediction-circle">
              <PredictionCircle percentage={selectedConfidence} />
            </div>
          </div>
          <div className="middle-note">
            If A.I. estimate is wrong, select the correct one.
          </div>
          <div className="analysis-bottom-buttons">
            <Link to="/" className="back-button">
              <div className="icon-box">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              BACK
            </Link>
            <Link to="/" className="home-button">
              <div className="icon-box">
                <i className="fa-solid fa-arrow-right" style={{ color: 'black' }}></i>
              </div>
             HOME
            </Link>
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <div className="confidence-header">
            <span>{selectedCategory}</span>
            <span>A.I. Confidence</span>
          </div>
          <ul className="confidence-list">
            {data[selectedCategory].map((item, index) => (
              <li
                key={index}
                className={item.label === selectedValue ? "selected" : ""}
                onClick={() =>
                  handleSidebarClick(selectedCategory, item.label, item.confidence)
                }
              >
                <div className="diamond-shape" />
                <span>{item.label}</span>
                <span>{item.confidence}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Demographics;
