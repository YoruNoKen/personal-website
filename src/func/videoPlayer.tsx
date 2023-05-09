import "../App.css";
import { useState } from "react";

export function VideoPlayer() {
  const [videoIndex, setVideoIndex] = useState(0);
  const videos = ["https://www.youtube.com/embed/mVtehI3Xf6o", "https://www.youtube.com/embed/-y2C-f_XFeI", "https://www.youtube.com/embed/YtitNQDHGlY"];

  const prevVideo = () => {
    setVideoIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  const nextvideo = () => {
    setVideoIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="video-container">
      <p className="video-title">Here are some videos of mine:</p>
      <button
        onClick={prevVideo}
        className="button-top">
        Previous Video
      </button>
      <iframe
        title="cool titlee"
        width="560"
        height="315"
        src={videos[videoIndex]}
        className="iframe"></iframe>
      <button
        onClick={nextvideo}
        className="button-bottom">
        Next Video
      </button>
    </div>
  );
}
