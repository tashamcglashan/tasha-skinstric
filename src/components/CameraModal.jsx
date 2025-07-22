import React from "react";
import "./CameraModal.css";

export default function CameraModal({ onAllow, onDeny }) {
  return (
    <div className="camera-modal">
      <p className="camera-modal__text">ALLOW AI TO ACCESS YOUR CAMERA</p>
      <div className="camera-modal__buttons">
        <button onClick={onDeny}>DENY</button>
        <button onClick={onAllow}>ALLOW</button>
      </div>
    </div>
  );
}
