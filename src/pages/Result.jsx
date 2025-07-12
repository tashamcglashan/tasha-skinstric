import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegImages } from "react-icons/fa";
import { MdOutlineCameraAlt } from "react-icons/md";
import Navbar from "../components/Nav";
import "./Result.css";

export default function Result() {
  const navigate = useNavigate();

  const handleGalleryClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();
  };

  return (
    <>
      <Navbar />

      <div className="result-page">
        {/* Header Left */}
        <div className="result-header">TO START ANALYSIS</div>

        {/* Header Right */}
        <div className="result-preview">
          <p>Preview</p>
          <div className="result-preview-box" />
        </div>

        {/* Main Content */}
        <div className="result-center-content">
          {/* Left Option - Scan Face */}
          <div className="result-option scan-face">
            <div className="result-diamond-wrapper">
              <div className="result-diamond"></div>
              <MdOutlineCameraAlt className="result-icon" />
            </div>
            <p className="result-label">
              ALLOW A.I. <br /> TO SCAN YOUR FACE
            </p>
          </div>

          {/* Right Option - Access Gallery */}
          <div
            className="result-option access-gallery"
            onClick={handleGalleryClick}
          >
            <div className="result-diamond-wrapper">
              <div className="result-diamond"></div>
              <FaRegImages className="result-icon" />
            </div>
            <p className="result-label">
              ALLOW A.I. <br /> ACCESS GALLERY
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
