import React, { useState } from "react";
import "./StartAnalysis.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Nav";
import {useLocation} from "react-router-dom";

export default function StartAnalysis() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [error, setError] = useState("");
  const [fadeOutClick, setFadeOutClick] = useState(false);
  const navigate = useNavigate();
  const isValidString = (value) => /^[A-Za-z\s]+$/.test(value.trim());
  const location = useLocation();
  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      setError("");

      if (step === 1) {
        if (!isValidString(name)) {
          setError("Please enter a valid name (letters only).");
          return;
        }
        setStep(2);
      } else if (step === 2) {
        if (!isValidString(userLocation)) {
          setError("Please enter a valid location (letters only).");
          return;
        }

        setFadeOutClick(true);
        setStep(3);

        localStorage.setItem("name", name);
        localStorage.setItem("userLocation", userLocation);

        try {
          await fetch("https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, userLocation }),
          });

          setTimeout(() => {
            setStep(4);
          }, 2000);
        } catch (error) {
          setError("Something went wrong. Please try again.");
          setStep(2);
        }
      } else if (step === 4) {
        navigate("/result");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="start-analysis-page">
        <div className="analysis-title">TO START ANALYSIS</div>

        <div className="start-diamond-animation-wrapper">
          <div className="start-diamond outer-diamond"></div>
          <div className="start-diamond middle-diamond"></div>
          <div className="start-diamond inner-diamond"></div>
        </div>

        <div className="diamond-content">
          {(!name || (step === 2 && !userLocation) || (step === 2 && !fadeOutClick)) && (
            <p className={`click-text ${fadeOutClick ? "fade-out" : ""}`}>
              CLICK TO TYPE
            </p>
          )}

          {step === 3 && <div className="diamond-centered-message">Processing Submission...</div>}
          {step === 4 && <div className="diamond-centered-message">Thank You!</div>}
        </div>

        <div className="input-and-status">
          {step === 1 && (
            <input
              className="form-title"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Introduce Yourself"
              onKeyDown={handleKeyDown}
            />
          )}

          {step === 2 && (
            <input
              className="form-title"
              autoFocus
              value={userLocation}
              onChange={(e) => {
                setUserLocation(e.target.value);
                if (e.target.value.trim().length > 0) {
                  setFadeOutClick(true);
                }
              }}
              placeholder="Your City"
              onKeyDown={handleKeyDown}
            />
          )}

          {error && <div className="error-message">{error}</div>}
        </div>

        <Link to="/" className="back-button">
          <div className="icon-box">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          BACK
        </Link>

        {step === 4 && (
          <button className="proceed-button" onClick={() => navigate("/result")}>
            <div className="icon-box">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            PROCEED
          </button>
        )}
      </div>
    </>
  );
}
