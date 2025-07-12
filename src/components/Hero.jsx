import React, { useState } from 'react';
import './Hero.css';
import { FaPlay } from 'react-icons/fa';
import { Link } from "react-router-dom";


export default function Hero() {
  const [hoverDirection, setHoverDirection] = useState(null);

  return (
    <section className={`hero ${hoverDirection}`}>
      {/* Left Large Diamond Border */}
      <div className="diamond-border diamond-border-left"></div>

      {/* Right Large Diamond Border */}
      <div className="diamond-border diamond-border-right"></div>

      <div className="hero__top">
        {/* Left Section */}
        <div
          className="hero__left"
          onMouseEnter={() => setHoverDirection('hover-left')}
          onMouseLeave={() => setHoverDirection(null)}
        >
          <div className="hover-container">
            <div className="diamond">
              <div className="arrow-wrapper">
                <FaPlay className="arrow left flipped" />
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
        >
          <Link to="/start-analysis" className="hero__link">
          <div className="hover-container">
            <p className="hero__label">Take Test</p>
            <div className="diamond">
              <div className="arrow-wrapper">
                <FaPlay className="arrow right" />
              </div>
            </div>
          </div>
        
        </Link>
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
