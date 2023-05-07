import React from "react";
import pfp from "./pfp.png";
import youtube_icon from "./Youtube.png";
import twitter_icon from "./Twitter.png";
import github_logo from "./GitHub.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p
          className="Welcome"
          style={{ margin: 0, padding: 0 }}
          rel="noopener noreferrer">
          Welcome!
        </p>
        <p className="bio">My name is Yoru. I'm a beginner-level programmer and I like playing video games!</p>
        <img
          src={pfp}
          className="pfp-pic"
          alt="logo"
        />
        <p className="socials-title">Socials:</p>
        <div className="social-icons">
          <a
            className="Youtube-link"
            href="https://www.youtube.com"
            rel="noopener noreferrer">
            <img
              src={youtube_icon}
              alt="Youtube"
              className="Youtube-icon"></img>
          </a>
          <a
            className="Twitter-link"
            href="https://twitter.com/ken_yoru"
            rel="noopener noreferrer">
            <img
              src={twitter_icon}
              alt="Twitter"
              className="Twitter-icon"></img>
          </a>
          <a
            className="Github-link"
            href="https://github.com/YoruNoKen"
            rel="noopener noreferrer">
            <img
              src={github_logo}
              alt="GitHub"
              className="Github-icon"></img>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
