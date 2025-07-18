// src/components/PredictionCircle.jsx
import React, { useEffect, useState } from "react";
import "./PredictionCircle.css";

const PredictionCircle = ({ percentage }) => {
  const [animatedPercent, setAnimatedPercent] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedPercent(percentage);
    }, 100); // smooth transition trigger

    return () => clearTimeout(timeout);
  }, [percentage]);

  const radius = 50;
  const strokeWidth = 6;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset =
    circumference - (animatedPercent / 100) * circumference;

  return (
    <div className="prediction-circle">
      <svg width="120" height="120">
        <circle
          className="circle-bg"
          stroke="#e0e0e0"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx="60"
          cy="60"
        />
        <circle
          className="circle-fg"
          stroke="#000"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx="60"
          cy="60"
        />
      </svg>
      <div className="circle-text">{animatedPercent}%</div>
    </div>
  );
};

export default PredictionCircle;
