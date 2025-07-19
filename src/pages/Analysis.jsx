import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Nav";
import "./Analysis.css";
import {Link} from "react-router-dom";

export default function Analysis() {
  const navigate = useNavigate();
  const handleGetSummary = () => {
    navigate("/demographics");
  };

  return (
    <div className="analysis-wrapper">
      <Navbar />

      {/* Header Section */}
      <div className="analysis-header-container">
        <h1 className="analysis-title">A.I. Analysis</h1>
        <p className="analysis-subtitle">
          A. I. has estimated the following.
          <br />
          Fix estimated information if needed.
        </p>
      </div>

      {/* Diamond Layout */}
      <div className="diamond-layout-wrapper">
        {/* Outer dotted diamond */}
        <div className="dotted-diamond-border"></div>

        {/* Inner diamond buttons */}
        <div className="diamond-button-grid">
          <Link to="/demographics" className="diamond-button top">
          <span>DEMOGRAPHICS</span>
          </Link>
          <div className="diamond-button right" onClick={() => console.log("Cosmetic clicked")}>
            <span>COSMETIC CONCERNS</span>
          </div>
          <div className="diamond-button bottom" onClick={() => console.log("Weather clicked")}>
            <span>WEATHER</span>
          </div>
          <div className="diamond-button left" onClick={() => console.log("Skin Type clicked")}>
            <span>SKIN TYPE DETAILS</span>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="analysis-bottom-buttons">
        <div className="back-button" onClick={() => navigate(-1)}>
          <div className="icon-box">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          BACK
        </div>

        <div className="proceed-button" onClick={() => navigate("/demographics")}>
          <div className="icon-box">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
          GET SUMMARY
        </div>
      </div>
    </div>
  );
}
