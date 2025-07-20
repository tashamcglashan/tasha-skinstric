import React from "react";
import "./LoadingPage.css"; // Create this CSS file
import { FaCamera } from "react-icons/fa";

export default function LoadingPage() {
  return (
    <div className="loading-wrapper">
      {/* Dotted Diamonds */}
      <div className="diamond-container">
        <div className="dotted-diamond outer"></div>
        <div className="dotted-diamond middle"></div>
        <div className="dotted-diamond inner"></div>

        {/* Camera Icon and Text */}
        <div className="camera-content">
         <FaCamera className="camera-icon" />
          <p className="camera-text">SETTING UP CAMERA...</p>
        </div>
      </div>

      {/* Instructions */}
      <div className="instructions">
        <p className="instruction-title">TO GET BETTER RESULTS MAKE SURE TO HAVE</p>
        <div className="instruction-icons">
          <div className="instruction-item">
            <span className="diamond-symbol">◆</span> NEUTRAL EXPRESSION
          </div>
          <div className="instruction-item">
            <span className="diamond-symbol">◆</span> FRONTAL POSE
          </div>
          <div className="instruction-item">
            <span className="diamond-symbol">◆</span> ADEQUATE LIGHTING
          </div>
        </div>
      </div>
    </div>
  );
}
