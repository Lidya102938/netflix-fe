import React from "react";

const Video = ({ img }) => {
  return (
    <div className="video">
      <iframe
        width="370"
        height="240"
        src="https://www.youtube.com/embed/r6sq39jer-Q"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
