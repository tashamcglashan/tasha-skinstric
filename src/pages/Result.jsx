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
        <div className="result-header">TO START ANALYSIS</div>

        <div className="result-center-content">
          {/* CAMERA OPTION */}
          <div className="result-option" onClick={handleScanFaceClick}>
            <div className="diamond-wrapper camera-wrapper">
              <div className="diamond camera-diamond-1"></div>
              <div className="diamond camera-diamond-2"></div>
              <div className="diamond camera-diamond-3"></div>
              <MdOutlineCameraAlt className="result-icon" />
            </div>
            <p className="result-label">
              ALLOW A.I. <br /> TO SCAN YOUR FACE
            </p>
          </div>

          {/* GALLERY OPTION */}
          <div className="result-option" onClick={handleGalleryClick}>
            <div className="diamond-wrapper gallery-wrapper">
              <div className="diamond gallery-diamond-1"></div>
              <div className="diamond gallery-diamond-2"></div>
              <div className="diamond gallery-diamond-3"></div>
              <FaRegImages className="result-icon" />
            </div>
            <p className="result-label">
              ALLOW A.I. <br /> ACCESS GALLERY
            </p>
          </div>
        </div>

        {/* PREVIEW BOX */}
        <div className="result-preview">
          <p className="preview-label">Preview</p>
          <div className="preview-box"></div>
        </div>

        {/* BACK BUTTON */}
        <div className="back-button-container" onClick={() => navigate(-1)}>
          <div className="icon-box">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          BACK
        </div>

        {/* MODAL (Optional) */}
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
                      await fetch(
                        "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo",
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ access: "granted" }),
                        }
                      );
                      navigate("/take-picture");
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
