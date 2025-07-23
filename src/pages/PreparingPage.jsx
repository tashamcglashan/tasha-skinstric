import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PreparingPage.css";

export default function PreparingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/analysis");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="preparing-page">
      <div className="center-wrapper">
        <div className="diamond-wrapper">
          <div className="diamond-stack">
            <div className="analysis-diamond outer"></div>
            <div className="analysis-diamond middle"></div>
            <div className="analysis-diamond inner"></div>

            <div className="center-content-inside">
              <p className="loading-text">
                PREPARING YOUR ANALYSIS
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
