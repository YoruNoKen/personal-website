import React from "react";
import pfp from "./img/pfp.png";
import youtube_icon from "./img/Youtube.png";
import twitter_icon from "./img/Twitter.png";
import github_logo from "./img/GitHub.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h6
            className="Welcome"
            style={{ margin: 0, padding: 0 }}
            rel="noopener noreferrer">
            Welcome!
          </h6>
          <p className="bio">
            My name is Yoru.
            <br /> I'm a beginner-level programmer and I like playing video games!
          </p>
          <img
            src={pfp}
            className="pfp-pic"
            alt="logo"
          />
          <div className="social-icons">
            <a
              className="Youtube-link"
              href="https://www.youtube.com/@yorunoken"
              rel="noopener noreferrer">
              <img
                src={youtube_icon}
                alt="Youtube"
                className="icon"></img>
            </a>
            <a
              className="Twitter-link"
              href="https://twitter.com/ken_yoru"
              rel="noopener noreferrer">
              <img
                src={twitter_icon}
                alt="Twitter"
                className="icon"></img>
            </a>
            <a
              className="Github-link"
              href="https://github.com/YoruNoKen"
              rel="noopener noreferrer">
              <img
                src={github_logo}
                alt="GitHub"
                className="icon"></img>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
