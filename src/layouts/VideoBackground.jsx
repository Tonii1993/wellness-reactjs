import React from "react";
import "./VideoBackground.css";

const VideoBackground = ({ videoSrc, text, buttonText, onClick }) => {
  return (
    <>
      <div className="pt-20">
        <div className="video-background">
          <video autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="bg-overlay"></div>
          <div className="content">
            <h1>{text}</h1>
            <button onClick={onClick}>{buttonText}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoBackground;
