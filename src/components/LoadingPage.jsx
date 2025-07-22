import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import "./LoadingPage.css";

export default function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/take-picture");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-page">
      <div className="diamond-container">
  {/* ROTATING DIAMONDS - each wrapped to stay centered */}
  <div className="diamond-wrapper">
    <div className="loading-diamond diamond-1"></div>
  </div>
  <div className="diamond-wrapper">
    <div className="loading-diamond diamond-2"></div>
  </div>
  <div className="diamond-wrapper">
    <div className="loading-diamond diamond-3"></div>
  </div>
</div>

        {/* CENTERED ICON + TEXT INSIDE DIAMONDS */}
        <div className="loading-center-content">
          <FaCamera className="camera-icon" />
          <p className="loading-text">SETTING UP CAMERA...</p>
        </div>
      

      {/* FOOTER */}
      <div className="loading-footer">
        <p>TO GET BETTER RESULTS MAKE SURE TO HAVE</p>
        <div className="footer-icons">
          <span>◇ NEUTRAL EXPRESSION</span>
          <span>◇ FRONTAL POSE</span>
          <span>◇ ADEQUATE LIGHTING</span>
        </div>
      </div>
    </div>
  );
}
