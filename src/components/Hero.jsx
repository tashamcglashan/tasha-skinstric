// Hero.jsx
import React, { useState } from 'react';
import './Hero.css';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "./CameraModal.css";

export default function Hero() {
  const [hoverDirection, setHoverDirection] = useState(null);
  const navigate = useNavigate();

  return (
    <section className={`hero ${hoverDirection}`}>
      {/* Diamond Borders */}
      <div className="diamond-border diamond-border-left"></div>
      <div className="diamond-border diamond-border-right"></div>

      <div className="hero__top">
        {/* Left Section */}
        <div
          className="hero__left"
          onMouseEnter={() => setHoverDirection('hover-left')}
          onMouseLeave={() => setHoverDirection(null)}
        >
          <div className="hover-container">
            <div className="diamond-box">
              <div className="arrow-wrapper">
                <FaPlay className="arrow-icon flipped" />
              </div>
            </div>
            <p className="hero__label">Discover A.I.</p>
          </div>
        </div>

        {/* Center Section */}
        <div className="hero__center">
          <h1 className="hero__title">
            Sophisticated<br />skincare
          </h1>
        </div>

        {/* Right Section */}
        <div
          className="hero__right"
          onMouseEnter={() => setHoverDirection('hover-right')}
          onMouseLeave={() => setHoverDirection(null)}
          onClick={() => navigate('/start-analysis')}
          style={{ cursor: 'pointer' }}
        >
          <div className="hover-container">
            <p className="hero__label">Take Test</p>
            <div className="diamond-box">
              <div className="arrow-wrapper">
                <FaPlay className="arrow-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Paragraph */}
      <div className="hero__bottom">
        <p>
          SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALIZED ROUTINE
          TAILORED TO WHAT YOUR SKIN NEEDS.
        </p>
      </div>
    </section>
  );
}
