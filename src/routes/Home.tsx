import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import pfp from "../img/pfp.png";
import youtube_icon from "../img/Youtube.png";
import twitter_icon from "../img/Twitter.png";
import github_logo from "../img/GitHub.png";
import osu_logo from "../img/osu.png";
import "./Home.css";

import { VideoPlayer } from "../components/videoPlayer";
import { Github } from "../components/githubShowcase";
export default function App() {
  const [scaleSize, scaleSet] = useState(false);
  const LargenImage = () => {
    scaleSet(!scaleSize);
  };

  const [backgroundY, setBackgroundY] = useState(0);
  useEffect(() => {
    const handScroll = () => {
      const scrollPercent = (window.scrollY / window.innerHeight) * 90;
      const newY = scrollPercent * 0.2;
      setBackgroundY(newY);
    };
    window.addEventListener("scroll", handScroll);

    return () => {
      window.removeEventListener("scroll", handScroll);
    };
  }, []);

  return (
    <div
      className="background"
      style={{ backgroundPosition: `center ${backgroundY + 25}%` }}>
      <header className="App-header">
        <div className="bio-container">
          <h6 className="Welcome">Welcome!</h6>
          <p className="bio">
            My name is Yoru.
            <br /> I'm a beginner-level programmer and I like playing video games!
          </p>
          <p className="bio">A photo of my wife:</p>
          <img
            src={pfp}
            className={`pfp-pic ${scaleSize ? "enlarged" : ""}`}
            alt="logo"
            onClick={LargenImage}
            style={{ transform: `scale(${scaleSize ? 2 : 1})` }}
          />
          <br />
          <div className="social-icons">
            <a
              href="https://www.youtube.com/@yorunoken"
              rel="noopener noreferrer"
              target="_blank">
              <img
                src={youtube_icon}
                alt="Youtube"
                className="icon"></img>
            </a>
            <a
              href="https://twitter.com/ken_yoru"
              rel="noopener noreferrer"
              target="_blank">
              <img
                src={twitter_icon}
                alt="Twitter"
                className="icon"></img>
            </a>
            <a
              href="https://github.com/YoruNoKen"
              rel="noopener noreferrer"
              target="_blank">
              <img
                src={github_logo}
                alt="GitHub"
                className="icon"
              />
            </a>
            <a
              href="https://osu.ppy.sh/users/17279598"
              rel="noopener noreferrer"
              target="_blank">
              <img
                src={osu_logo}
                alt="osu!"
                className="icon"
              />
            </a>
          </div>
        </div>
        <VideoPlayer />
        <Github />
        <p>pwease send me luv</p>
      </header>
    </div>
  );
}
