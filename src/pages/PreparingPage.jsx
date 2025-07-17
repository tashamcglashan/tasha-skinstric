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
    <div className="preparing-wrapper">
      <div className="icon-diamond-wrapper">
        <div className="analysis-diamond"></div>
        <div className="analysis-diamond delay"></div>
        <p className="preparing-text">PREPARING YOUR ANALYSIS…</p>
      </div>
    </div>
  );
}
