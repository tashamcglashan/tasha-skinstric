import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegImages } from "react-icons/fa";
import { MdOutlineCameraAlt } from "react-icons/md";
import Navbar from "../components/Nav";
import "./Result.css";

export default function Result() {
  const navigate = useNavigate();
  const [showCameraPrompt, setShowCameraPrompt] = useState(false);

  const handleGalleryClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();
  };

  const handleScanFaceClick = () => {
    setShowCameraPrompt(true);
  };

  return (
    <>
      <Navbar />

      <div className="result-page">
        {/* Top Right Preview */}
        <div className="result-preview">
          <p className="preview-label">Preview</p>
          <div className="preview-box"></div>
        </div>
        
        {/* Top Left Header */}
        <div className="result-header">TO START ANALYSIS</div>

        

        {/* Bottom Left Back Button */}
        <div className="back-button-container" onClick={() => navigate(-1)}>
          <div className="back-diamond">
            <span className="arrow-left">&#9664;</span>
          </div>
          <span className="back-label">BACK</span>
        </div>

        {/* Main Icons Section */}
        <div className="result-center-content">
          {/* Left - Camera */}
          <div className="result-option scan-face" onClick={handleScanFaceClick}>
            <div className="result-diamond-wrapper">
              <div className="result-diamond diamond-3"></div>
              <div className="result-diamond diamond-2"></div>
              <div className="result-diamond diamond-1"></div>
              <MdOutlineCameraAlt className="result-icon" />
            </div>
            <p className="result-label">
              ALLOW A.I. <br /> TO SCAN YOUR FACE
            </p>
          </div>

          {/* Right - Gallery */}
          <div className="result-option access-gallery" onClick={handleGalleryClick}>
            <div className="result-diamond-wrapper">
              <div className="result-diamond diamond-3"></div>
              <div className="result-diamond diamond-2"></div>
              <div className="result-diamond diamond-1"></div>
              <FaRegImages className="result-icon" />
            </div>
            <p className="result-label">
              ALLOW A.I. <br /> ACCESS GALLERY
            </p>
          </div>
        </div>

        {/* Camera Permission Modal */}
        {showCameraPrompt && (
          <div className="camera-popup">
            <div className="camera-popup-content">
              <p>Allow A.I. to access your camera</p>
              <div className="popup-line"></div>
              <div className="popup-actions">
                <button onClick={() => setShowCameraPrompt(false)}>DENY</button>
                <button
                  onClick={async () => {
                    setShowCameraPrompt(false);
                    try {
                      await navigator.mediaDevices.getUserMedia({ video: true });

                      const response = await fetch(
                        "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo",
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ access: "granted" }),
                        }
                      );

                      const result = await response.json();
                      console.log("📸 API response:", result);
                    } catch (err) {
                      console.error("Camera access denied or error:", err);
                    }
                  }}
                >
                  ALLOW
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
