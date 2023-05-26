import "../styles/mia.css";
import { useState } from "react";

export function Mia() {
  const [showOsu, setShowOsu] = useState(false);
  const [showRs, setShowRs] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [showRb, setShowRb] = useState(false);
  const [showCompare, setShowCompare] = useState(false);

  return (
    <div className="m-background">
      <header className="m-header">
        <div className="m-container">
          <h1 className="m-title">Welcome to Mia</h1>
          <div className="description">
            <h2>About</h2>
            <p className="m-desc">
              Mia is a powerful Discord bot designed specifically for the popular rhythm game osu!. With a wide range of commands tailored to enhance your osu! experience, this bot aims to provide you with valuable information, statistics, and
              interactive features. Whether you're a dedicated player or a casual enthusiast, this bot is here to accompany you on your journey.
            </p>
          </div>
          <div className="features">
            <h2>Commands</h2>
            <div className="commands">
              <h3>
                /osu <button onClick={() => setShowOsu(!showOsu)}>{showOsu ? "Hide" : "Show"}</button>
              </h3>
              {showOsu && (
                <ul>
                  <li style={{ textAlign: "start" }}>Description: Fetches and displays the osu! profile information of a user.</li>
                  <li style={{ textAlign: "start" }}>
                    Parameters:
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> [username]: The osu! username of the player whose profile you want to view.</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> [-mode]: The osu! mode that you want to view the statistics of. (osu, mania, taiko, fruits)</li>
                  </li>
                  <li style={{ textAlign: "start" }}>
                    Examples:
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> !osu yorunoken</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> !osu yorunoken -taiko</li>
                  </li>
                  <li style={{ textAlign: "start" }}>
                    Aliases:
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}>osu</li>
                  </li>
                </ul>
              )}
              <h3>
                /rs <button onClick={() => setShowRs(!showRs)}>{showRs ? "Hide" : "Show"}</button>
              </h3>
              {showRs && (
                <ul>
                  <li style={{ textAlign: "start" }}>Description: Fetches and displays the recent plays of a user</li>
                  <li style={{ textAlign: "start" }}>
                    Parameters:
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> [username]: The osu! username of the player whose play you want to view.</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> [-mode]: The osu! mode. (osu, mania, taiko, fruits)</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> [command({"Number"})]: The index of the play</li>
                  </li>
                  <li style={{ textAlign: "start" }}>
                    Examples:
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> !rs yorunoken</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> !rs7 yorunoken -taiko</li>
                  </li>
                  <li style={{ textAlign: "start" }}>
                    Aliases:
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}>recent</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}>rs</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}>r</li>
                  </li>
                </ul>
              )}
              <h3>
                /top <button onClick={() => setShowTop(!showTop)}>{showTop ? "Hide" : "Show"}</button>
              </h3>
              {showTop && (
                <ul>
                  <li style={{ textAlign: "start" }}>Description: Fetches and displays the top pp plays of a user</li>
                  <li style={{ textAlign: "start" }}>
                    Parameters:
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> [username]: The osu! username of the player whose plays you want to view.</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> [-mode]: The osu! mode. (osu, mania, taiko, fruits)</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> [command({"Number"})]: The index of the score you want to get</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> [-p (Number)]: The page of scores</li>
                  </li>
                  <li style={{ textAlign: "start" }}>
                    Examples:
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> !top yorunoken</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> !top7 yorunoken -taiko</li>
                  </li>
                  <li style={{ textAlign: "start" }}>
                    Aliases:
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}>top</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}>t</li>
                  </li>
                </ul>
              )}
              <h3>
                /rb <button onClick={() => setShowRb(!showRb)}>{showRb ? "Hide" : "Show"}</button>
              </h3>
              {showRb && (
                <ul>
                  <li style={{ textAlign: "start" }}>Description: Fetches and displays the latest top pp plays of a user</li>
                  <li style={{ textAlign: "start" }}>
                    Parameters:
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> [username]: The osu! username of the player whose plays you want to view.</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> [-mode]: The osu! mode. (osu, mania, taiko, fruits)</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> [command({"Number"})]: The index of the score you want to get</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> [-p (Number)]: The page of scores</li>
                  </li>
                  <li style={{ textAlign: "start" }}>
                    Examples:
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> !rb yorunoken</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> !rb7 yorunoken -taiko</li>
                  </li>
                  <li style={{ textAlign: "start" }}>
                    Aliases:
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}>rb</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}>recentbest</li>
                  </li>
                </ul>
              )}
              <h3>
                /compare <button onClick={() => setShowCompare(!showCompare)}>{showCompare ? "Hide" : "Show"}</button>
              </h3>
              {showCompare && (
                <ul>
                  <li style={{ textAlign: "start" }}>Description: Fetches and displays your scores on a beatmap</li>
                  <li style={{ textAlign: "start" }}>
                    Parameters:
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> [username]: The osu! username of the player whose plays you want to view.</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> [command({"Number"})]: The index of the score you want to get</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> [-p (Number)]: The page of scores</li>
                  </li>
                  <li style={{ textAlign: "start" }}>
                    Examples:
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> !compare yorunoken</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}> !c7 yorunoken</li>
                  </li>
                  <li style={{ textAlign: "start" }}>
                    Aliases:
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}>compare</li>
                    <li style={{ marginLeft: "2em", listStyleType: "circle" }}>c</li>
                  </li>
                </ul>
              )}
            </div>
            For more information, use /help
          </div>
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=995999045157916763&permissions=139586750528&scope=bot"
            style={{ color: "red" }}>
            Invite the bot to your server
          </a>
        </div>
        <p className="interested">
          Interested?
          <br />
          Check out my other projects at{" "}
          <a
            href="https://github.com/yorunoken"
            style={{ color: "yellow" }}>
            GitHub
          </a>
        </p>
      </header>
    </div>
  );
}
