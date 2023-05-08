import pfp from "./img/pfp.png";
import youtube_icon from "./img/Youtube.png";
import twitter_icon from "./img/Twitter.png";
import github_logo from "./img/GitHub.png";
import screenshot1 from "./img/screenshot1.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mVtehI3Xf6o"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div className="github-container">
          <p className="github-title">Some of the projects I've worked on:</p>
          <br></br>
          <h2 className="mia-osu">Mia-osu</h2>
          <p className="mia-osu-text">A Discord bot written in JavaScript for osu!game</p>
          <img
            src={screenshot1}
            alt="Screenshot"
            className="image-container"
          />
        </div>
        <p>pwease send me luv</p>
      </header>
    </div>
  );
}

export default App;
