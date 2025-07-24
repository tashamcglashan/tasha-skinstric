import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineCameraAlt, MdPhotoLibrary } from "react-icons/md";
import Navbar from "../components/Nav";
import "./Result.css";

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [showCameraPrompt, setShowCameraPrompt] = useState(false);
  const [isLoadingCamera, setIsLoadingCamera] = useState(false);

  // ✅ GALLERY LOGIC
  const handleGalleryClick = () => {
    fileInputRef.current.click();
  };

  const handleImageSelected = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);

      // Navigate to PreparingPage after a short delay
      setTimeout(() => {
        navigate("/preparing");
      }, 1000);
    }
  };

  // ✅ CAMERA FLOW
  const handleScanFaceClick = () => {
    setShowCameraPrompt(true);
  };

  // ✅ LOADING SCREEN
  if (isLoadingCamera) {
    return (
      <>
        <Navbar />
        <div className="result-loading-wrapper">
          <div className="camera-icon-container">
            <MdOutlineCameraAlt className="camera-loading-icon" />
            <div className="loading-diamond diamond-1"></div>
            <div className="loading-diamond diamond-2"></div>
            <div className="loading-diamond diamond-3"></div>
          </div>
          <h1 className="camera-loading-text">Setting up Camera...</h1>
          <div className="camera-instructions">
            TO GET BETTER RESULTS MAKE SURE TO HAVE
            <div className="camera-tips">
              <span>◆ NEUTRAL EXPRESSION</span>
              <span>◆ FRONTAL POSE</span>
              <span>◆ ADEQUATE LIGHTING</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="result-page">
        {/* HEADER */}
        <div className="result-header-wrapper">
          <div className="result-header">TO START ANALYSIS</div>
        </div>

        {/* CENTER OPTIONS */}
        <div className="result-center-content">
          {/* CAMERA OPTION */}
          <div className="result-option" onClick={handleScanFaceClick}>
            <div className="diamond-icon-wrapper">
              <MdOutlineCameraAlt className="result-icon-static" />
              <div className="diamond camera-diamond-1"></div>
              <div className="diamond camera-diamond-2"></div>
              <div className="diamond camera-diamond-3"></div>
            </div>

            {/* Angled label (top right of camera) */}
            <div className="result-label-angled camera-label">
              <div className="angled-line">
                <div className="line"></div>
                <div className="dot"></div>
              </div>
              <p>
                ALLOW A.I.
                <br />
                TO SCAN YOUR FACE
              </p>
            </div>
          </div>

          {/* GALLERY OPTION */}
          <div className="result-option" onClick={handleGalleryClick}>
            <div className="diamond-icon-wrapper">
              <MdPhotoLibrary className="result-icon-static" />
              <div className="diamond gallery-diamond-1"></div>
              <div className="diamond gallery-diamond-2"></div>
              <div className="diamond gallery-diamond-3"></div>
            </div>

            {/* Angled label (bottom left of gallery) */}
            <div className="result-label-angled gallery-label">
              <div className="angled-line">
                <div className="line reverse"></div>
                <div className="dot"></div>
              </div>
              <p>
                ALLOW A.I.
                <br />
                ACCESS GALLERY
              </p>
            </div>
          </div>

          {/* Hidden file input for gallery */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageSelected}
          />
        </div>

        {/* PREVIEW IMAGE */}
        {preview && (
          <div className="result-preview">
            <p className="preview-label">Preview</p>
            <div className="preview-box">
              <img src={preview} alt="Selected" className="preview-image" />
            </div>
          </div>
        )}

        {/* BACK BUTTON */}
        <div
          className="back-button-container"
          onClick={() => navigate("/start-analysis")}
        >
          <div className="icon-box">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          BACK
        </div>

        {/* CAMERA PERMISSION MODAL */}
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
                    setIsLoadingCamera(true);
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
                      setTimeout(() => {
                        navigate("/take-picture");
                      }, 2500);
                    } catch (err) {
                      console.error("Camera access denied or error:", err);
                      setIsLoadingCamera(false);
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
