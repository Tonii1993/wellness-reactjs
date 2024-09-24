import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoCard = ({ title, videourl, id }) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
      className="w-full rounded-lg"
    >
      <ReactPlayer
        url={videourl}
        width="100%"
        height="100%"
        pip={true}
        controls={visibility}
        playing={false}
      />
      <div className="absolute flex flex-row top-0 p-2 text-white text-semibold">
        <span className="border w-5 h-6 text-center bg-slate-400">{id}</span>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default VideoCard;
