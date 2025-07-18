import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Demographics.css";
import PredictionCircle from "../components/PredictionCircle";

const Demographics = () => {
  const [selectedCategory, setSelectedCategory] = useState("race");
  const [selectedValue, setSelectedValue] = useState("Middle eastern");
  const [selectedConfidence, setSelectedConfidence] = useState(25);

  const raceOptions = [
    { label: "South asian", confidence: 39 },
    { label: "Middle eastern", confidence: 25 },
    { label: "Latino hispanic", confidence: 17 },
    { label: "Black", confidence: 7 },
    { label: "Southeast asian", confidence: 6 },
    { label: "East asian", confidence: 3 },
    { label: "White", confidence: 0 },
  ];

  const handleSidebarClick = (category, value, confidence) => {
    setSelectedCategory(category);
    setSelectedValue(value);
    setSelectedConfidence(confidence);
  };

  return (
    <div className="demographics-page">
      <nav className="demographics-nav">
        <span className="nav-logo">Skinstric</span>
        <span className="nav-title">[ Analysis ]</span>
      </nav>

      <div className="demographics-wrapper">
        {/* Sidebar */}
        <div className="sidebar">
          {[
            { category: "race", value: "Middle eastern", confidence: 25 },
            { category: "age", value: "0–2", confidence: 10 },
            { category: "sex", value: "Male", confidence: 90 },
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

          <div className="sidebar-back">
            <Link to="/analysis">BACK</Link>
          </div>
        </div>

        {/* Center */}
        <div className="middle-section">
          <div className="middle-content-box">
            <h2 className="main-prediction">{selectedValue}</h2>
            <PredictionCircle percentage={selectedConfidence} />
          </div>
        </div>

        {/* Right panel */}
        <div className="right-panel">
          <div className="confidence-header">
            <span>Race</span>
            <span>A.I. Confidence</span>
          </div>
          <ul className="confidence-list">
            {raceOptions.map((item, index) => (
              <li
                key={index}
                className={item.label === selectedValue ? "selected" : ""}
                onClick={() =>
                  handleSidebarClick("race", item.label, item.confidence)
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
