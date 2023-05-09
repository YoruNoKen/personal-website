import { useState, useEffect } from "react";
import pfp from "./img/pfp.png";
import youtube_icon from "./img/Youtube.png";
import twitter_icon from "./img/Twitter.png";
import github_logo from "./img/GitHub.png";
import screenshot1 from "./img/screenshot1.png";
import "./App.css";

function App() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  const [backgroundY, setbackgroundY] = useState(0);
  useEffect(() => {
    const handScroll = () => {
      const scrollPercent = (window.scrollY / window.innerHeight) * 80;
      const newY = scrollPercent * 0.1;
      setbackgroundY(newY);
    };
    window.addEventListener("scroll", handScroll);

    return () => {
      window.removeEventListener("scroll", handScroll);
    };
  }, []);

  const headerStyle = {
    backgroundImage: `url(https://yorunoken.s-ul.eu/88Mh3UnN)`,
    backgroundAttachment: "fixed",
    backgroundPosition: `center ${backgroundY + 25}%`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={headerStyle}>
        <div className="bio-container">
          <h6
            className="Welcome"
            rel="noopener norefer rer">
            Welcome!
          </h6>
          <p className="bio">
            My name is Yoru.
            <br /> I'm a beginner-level programmer and I like playing video games!
          </p>
          <p className="bio">A photo of my wife:</p>
          <img
            src={pfp}
            className="pfp-pic"
            alt="logo"
          />
          <div className="social-icons">
            <a
              className="Youtube-link"
              href="https://www.youtube.com/@yorunoken"
              rel="noopener noreferrer"
              target="_blank">
              <img
                src={youtube_icon}
                alt="Youtube"
                className="icon"></img>
            </a>
            <a
              className="Twitter-link"
              href="https://twitter.com/ken_yoru"
              rel="noopener noreferrer"
              target="_blank">
              <img
                src={twitter_icon}
                alt="Twitter"
                className="icon"></img>
            </a>
            <a
              className="Github-link"
              href="https://github.com/YoruNoKen"
              rel="noopener noreferrer"
              target="_blank">
              <img
                src={github_logo}
                alt="GitHub"
                className="icon"
              />
            </a>
          </div>
        </div>
        <div className="video-container">
          <p className="video-title">Here's a recent video of mine:</p>
          <iframe
            title="cool titlee"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mVtehI3Xf6o"
            className="ifram"></iframe>
        </div>
        <div className="github-container">
          <p className="github-title">Some of the projects I've worked on:</p>
          <br></br>
          <h2 className="mia-osu">Mia-osu</h2>
          <p className="mia-osu-text">A Discord bot written in JavaScript for osu!game</p>
          <img
            src={screenshot1}
            alt="Screenshot"
            className={`image ${clicked ? "clicked" : ""}`}
            onClick={handleClick}
          />
        </div>
        <p>pwease send me luv</p>
      </header>
    </div>
  );
}

export default App;
