import React from "react";

const PredictionCircle = ({ percentage }) => {
  const radius = 180;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <svg height="384" width="384">
      <circle
        stroke="#e0e0e0"
        fill="none"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx="192"
        cy="192"
      />
      <circle
        stroke="black"
        fill="none"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        r={normalizedRadius}
        cx="192"
        cy="192"
        style={{ transition: "stroke-dashoffset 0.6s ease" }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="40"
        fill="black"
        fontWeight="bold"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default PredictionCircle;
