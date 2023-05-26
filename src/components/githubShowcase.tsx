import { useState, useEffect } from "react";
import "prismjs/themes/prism-twilight.css";
import Prism from "prismjs";
import "../styles/Home.css";
const screenshotsMia = ["https://i.imgur.com/M761LdQ.png", "https://i.imgur.com/rLCbEtE.png", "https://i.imgur.com/jYR8t3N.png"];

const code = `const { v1, tools, mods } = require('gatari-api-wrapper');
async function main() {
const user_test = await v1.user.info("neriv");
console.log(user_test); // returns general user info

const beatmap_test = await v1.beatmap.info(1000);
console.log(beatmap_test); // returns beatmap information

const leaderboard_test = await v1.leaderboard.score("0");
console.log(leaderboard_test); // returns global score leaderboard

const mods_test = mods.name(64);
console.log(mods_test); // returns "DT"
}

main();`;

export function Github() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const [imageIndex, setImageIndex] = useState(0);

  const prevMia = () => {
    setImageIndex((i) => (i === 0 ? screenshotsMia.length - 1 : i - 1));
  };
  const nextMia = () => {
    setImageIndex((i) => (i === screenshotsMia.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="github-container">
      <p className="github-title">Some of the projects I've worked on:</p>
      <br></br>
      <div className="mia">
        <h2 className="mia-osu">Mia-osu</h2>
        <p className="mia-osu-text">
          A Discord bot written in JavaScript for osu!game
          <br />
          It has commands not only for osu, but for general purposes as well!
        </p>
        <button
          onClick={prevMia}
          className="button-top">
          Prev
        </button>
        <button
          onClick={nextMia}
          className="button-bottom">
          Next
        </button>
        <img
          src={screenshotsMia[imageIndex]}
          alt="Screenshot"
          className={"image"}
        />
      </div>
      <div className="gatari-api">
        <h2 className="mia-osu">Gatari API Wrapper</h2>
        <p className="mia-osu-text">
          A simple API wrapper written for the open-source{" "}
          <a
            href="https://osu.gatari.pw/docs/api"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#698ac9" }}>
            Gatari API
          </a>
        </p>
        <pre>
          <code className="language-js">{code}</code>
        </pre>
      </div>
    </div>
  );
}
