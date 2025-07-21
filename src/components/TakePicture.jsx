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
      // ✅ Stop stream and clear video srcObject
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
    navigate("/analysis");
  };

  return (
    <div className="camera-page">
      {/* Top Left Branding */}
      {/* Top Left Logo */}
<div className="nav">
 
  
</div>


      {/* Preview Image Top Right */}
      {capturedImage && (
        <div className="preview-container">
          <p className="preview-label">Preview</p>
          <img src={capturedImage} alt="Preview" className="preview-image" />
        </div>
      )}

      {/* Main Camera Area */}
      <div className="camera-container">
        {!captured ? (
          <video ref={videoRef} autoPlay playsInline muted className="camera-video" />
        ) : (
          <canvas ref={canvasRef} className="captured-image" />
        )}
      </div>

      {/* Diamonds + Great Shot! */}
      {showGreatShot && (
        <div className="preparing-wrapper">
          <div className="analysis-diamond"></div>
          <div className="analysis-diamond delay"></div>
          <div className="analysis-diamond delay2"></div>
          <div className="great-shot">GREAT SHOT!</div>
        </div>
      )}

      {/* Bottom Instructions */}
      <div className="camera-instructions">
        TO GET BETTER RESULTS MAKE SURE TO HAVE
        <div className="camera-tips">
          <span>◆ NEUTRAL EXPRESSION</span>
          <span>◆ FRONTAL POSE</span>
          <span>◆ ADEQUATE LIGHTING</span>
        </div>
      </div>

      {/* Take Picture Button */}
      {!captured && (
        <div className="take-picture-button" onClick={handleCapture}>
          TAKE PICTURE <i className="fa-solid fa-camera"></i>
        </div>
      )}

      {/* Proceed Button */}
      {captured && (
        <button className="proceed-button" onClick={handleProceed}>
          <div className="icon-box">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
          PROCEED
        </button>
      )}

      {/* Back Button */}
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
