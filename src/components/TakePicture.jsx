import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./TakePicture.css";

export default function TakePicture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [captured, setCaptured] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showGreatShot, setShowGreatShot] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let mediaStream;

    const startCamera = async () => {
      try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        console.error("Error accessing webcam:", err);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (!canvas || !video) return;

    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL("image/png");
    setCapturedImage(dataUrl);
    setCaptured(true);
    setShowGreatShot(true);
  };

  const handleProceed = () => {
    navigate("/demographics");
  };

  return (
    <div className="camera-page">
      {/* CAMERA VIEW */}
      <div className="camera-container">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className={`camera-video ${captured ? "hidden" : ""}`}
        />
        {captured && (
          <img
            src={capturedImage}
            alt="Captured"
            className="captured-image"
          />
        )}
      </div>

      {/* GREAT SHOT MESSAGE */}
      {showGreatShot && (
        <div className="preparing-wrapper">
          <div className="great-shot">GREAT SHOT!</div>
        </div>
      )}

      {/* INSTRUCTIONS */}
      <div className="camera-instructions">
        TO GET BETTER RESULTS MAKE SURE TO HAVE
        <div className="camera-tips">
          <span>◆ NEUTRAL EXPRESSION</span>
          <span>◆ FRONTAL POSE</span>
          <span>◆ ADEQUATE LIGHTING</span>
        </div>
      </div>

      {/* TAKE PICTURE */}
      {!captured && (
        <div className="take-picture-button" onClick={handleCapture}>
          TAKE PICTURE <i className="fa-solid fa-camera"></i>
        </div>
      )}

      {/* BACK BUTTON — always visible */}
      <Link to="/result" className="back-button-white">
        <div className="icon-box-white">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        BACK
      </Link>

      {/* PROCEED BUTTON — only after great shot */}
      {showGreatShot && (
        <button className="proceed-button-white" onClick={handleProceed}>
          PROCEED
          <div className="icon-box-white">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </button>
      )}

      {/* HIDDEN CANVAS */}
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}
