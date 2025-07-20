import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TakePicture.css";

export default function TakePicture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [captured, setCaptured] = useState(false);
  const [showGreatShot, setShowGreatShot] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
      setStream(mediaStream);
      if (videoRef.current) videoRef.current.srcObject = mediaStream;
    });

    return () => {
      if (stream) stream.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const handleCapture = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    setCaptured(true);
    setShowGreatShot(true);
  };

  const handleProceed = () => {
    navigate("/analysis");
  };

  return (
    <div className="camera-page">
      {/* Top Left Branding */}
      <div className="top-bar">
        <span className="logo-text">SKINSTRIC</span>
        <span className="bracket-box">[ ]</span>
      </div>

      {/* Video or Captured Image */}
      <div className="camera-container">
        {!captured ? (
          <video ref={videoRef} autoPlay playsInline muted className="camera-video" />
        ) : (
          <canvas ref={canvasRef} className="captured-image" />
        )}
        {showGreatShot && <div className="great-shot">GREAT SHOT!</div>}
      </div>

      {/* Bottom Instruction */}
      <div className="camera-instructions">
        TO GET BETTER RESULTS MAKE SURE TO HAVE
        <div className="camera-tips">
          <span>◆ NEUTRAL EXPRESSION</span>
          <span>◆ FRONTAL POSE</span>
          <span>◆ ADEQUATE LIGHTING</span>
        </div>
      </div>

      {/* Right side action button */}
      {!captured && (
        <div className="take-picture-button" onClick={handleCapture}>
          TAKE PICTURE <i className="fa-solid fa-camera"></i>
        </div>
      )}

      {/* Proceed button after capture */}
      {captured && (
        <button className="proceed-button" onClick={handleProceed}>
          <div className="icon-box">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
          PROCEED
        </button>
      )}

      {/* Optional: Back button bottom-left */}
      {captured && (
        <Link to="/" className="back-button">
          <div className="icon-box">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          BACK
        </Link>
      )}
    </div>
  );
}
