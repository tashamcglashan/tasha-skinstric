import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Nav";
import "./Analysis.css";

export default function Analysis() {
  const navigate = useNavigate();

  const handleGetSummary = () => {
    navigate("/demographics");
  };

  return (
    <>
      <div className="analysis-wrapper">
        <Navbar />

        {/* Title */}
        <div className="analysis-title-wrapper">
          <h1 className="analysis-title">A.I. Analysis</h1>
        </div>

        {/* Subtitle */}
        <div className="analysis-subtitle-wrapper">
          <p className="analysis-subtitle">
            A. I. HAS ESTIMATED THE FOLLOWING.
            <br />
            FIX ESTIMATED INFORMATION IF NEEDED.
          </p>
        </div>

        {/* Diamond Layout */}
        <div className="diamond-layout-wrapper">
          <div className="dotted-diamond-border"></div>

          <div className="diamond-button-grid">
            <Link to="/demographics" className="diamond-button top">
              <span>DEMOGRAPHICS</span>
            </Link>
            <div className="diamond-button right">
              <span>COSMETIC CONCERNS</span>
            </div>
            <div className="diamond-button bottom">
              <span>WEATHER</span>
            </div>
            <div className="diamond-button left">
              <span>SKIN TYPE DETAILS</span>
            </div>
          </div>
        </div>

        {/* BOTTOM BUTTONS */}
        <div className="analysis-bottom-buttons">
  <div className="proceed-button" onClick={handleGetSummary}>
    <div className="icon-box">
      <i className="fa-solid fa-arrow-right"></i>
    </div>
    GET SUMMARY
  </div>

  <div className="back-button" onClick={() => navigate("/start-analysis")}>
    <div className="icon-box">
      <i className="fa-solid fa-arrow-left"></i>
    </div>
    BACK
  </div>
</div>

      </div>
    </>
  );
}
