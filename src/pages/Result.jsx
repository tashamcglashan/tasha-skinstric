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
      <div className="start-analysis-page">
        {/* Header Title */}
        <div className="analysis-title">TO START ANALYSIS</div>

        {/* Center Icons + Animated Diamonds */}
        <div className="result-center-content">
          {/* Camera Option */}
          <div className="result-option" onClick={handleScanFaceClick}>
            <div className="icon-diamond-wrapper">
              <div className="analysis-diamond"></div>
              <div className="analysis-diamond"></div>
              <div className="analysis-diamond delay"></div>
              <MdOutlineCameraAlt className="result-icon" />
            </div>
            <p className="result-label">
              ALLOW A.I. <br /> TO SCAN YOUR FACE
            </p>
          </div>

          {/* Gallery Option */}
          <div className="result-option" onClick={handleGalleryClick}>
            <div className="icon-diamond-wrapper">
              <div className="analysis-diamond"></div>
              <div className="analysis-diamond"></div>
              <div className="analysis-diamond delay"></div>
              <FaRegImages className="result-icon" size={80} />
            </div>
            <p className="result-label">
              ALLOW A.I. <br /> ACCESS GALLERY
            </p>
          </div>
        </div>

        {/* Preview Top Right */}
        <div className="result-preview">
          <p className="preview-label">Preview</p>
          <div className="preview-box"></div>
        </div>

        {/* Back Button Bottom Left */}
        <div className="back-button-container" onClick={() => navigate(-1)}>
          <div className="icon-box">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          BACK
        </div>

        {/* Camera Modal */}
        {showCameraPrompt && (
          <div className="camera-popup">
            <div className="camera-popup-content">
              <p>Allow A.I. to access your camera</p>
              <div className="popup-line"></div>
              <div className="popup-actions">
                <button onClick={() => setShowCameraPrompt(false)}>DENY</button>
                <button
  onClick={async () => {
    setShowCameraPrompt(false); // close modal immediately

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

      // ✅ Navigate to preparing screen AFTER successful API call
      navigate("/preparing");

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
