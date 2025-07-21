import React from "react";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      {/* Top Left Branding */}
      <div className="hero__top">
        SKINSTRIC <span className="hero__intro">[ INTRO ]</span>
      </div>

      {/* Center Title */}
      <div className="hero__center">
        <h1 className="hero__title">Sophisticated<br />skincare</h1>
      </div>

      {/* Left Section */}
      <div className="hero__side hero__left" onClick={() => navigate("/start-analysis")}>
        <div className="hero__arrow-button">
          <div className="diamond">
            <FaPlay className="arrow left" />
          </div>
          <p className="hero__label">Discover A.I.</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hero__side hero__right" onClick={() => navigate("/start-analysis")}>
        <div className="hero__arrow-button">
          <p className="hero__label">Take Test</p>
          <div className="diamond">
            <FaPlay className="arrow right" />
          </div>
        </div>
      </div>

      {/* Bottom Description */}
      <div className="hero__bottom">
        SKINSTRIC DEVELOPED AN A.I. THAT CREATES
        <br />
        A HIGHLY-PERSONALISED ROUTINE TAILORED TO
        <br />
        WHAT YOUR SKIN NEEDS.
      </div>
    </div>
  );
}
