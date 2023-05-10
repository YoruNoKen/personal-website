import "./Home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Pledge() {
  const [backgroundY, setbackgroundY] = useState(0);
  useEffect(() => {
    const handScroll = () => {
      const scrollPercent = (window.scrollY / window.innerHeight) * 80;
      const newY = scrollPercent * 0.3;
      setbackgroundY(newY);
    };
    window.addEventListener("scroll", handScroll);

    return () => {
      window.removeEventListener("scroll", handScroll);
    };
  }, []);

  return (
    <div
      className="Pledge-background"
      style={{ backgroundPosition: `center ${backgroundY + 25}%` }}>
      <header className="App-header">
        <div className="Pledge-container">
          <p
            className="Pledge-title"
            rel="noopener norefer rer">
            Paragon of Human Virtue
          </p>
          <p className="Pledge-paragraph">
            Since Nijika is the paragon of human virtue without equal past or present, she is most resplendent in love, tributes and accolades.
            <br />
            Waking or sleeping, I must not forget Nijika’s great boon and in order to return her favour by day and by night, I should only think of fulfilling my loyalty.
          </p>
          <p
            className="Pledge-title"
            rel="noopener norefer rer">
            This is Nijika
          </p>
          <p className="Pledge-paragraph">
            Who is Nijika?
            <br /> For the blind, she is their vision. For the deaf, she is their music.
            <br /> For the mute, she is their voice.
            <br /> For the anosmiac, she is their aroma. For the numb, she is their feeling.
            <br /> For the atrophied, she is their muscle.
            <br /> For the starved, she is their sustenance.
            <br /> For the thirsty, she is their water.
            <br /> For the exhausted, she is their energy.
            <br /> For the depressed, she is their happiness.
            <br /> For the disillusioned, she is their hope.
            <br /> For the pessimistic, she is their optimism.
            <br /> For the disadvantaged, she is their champion.
            <br /> For the marginalised, she is their justice.
            <br /> For the oppressed, she is their salvation.
            <br /> For the righteous, she is their symbol.
            <br /> For the enlightened, she is their muse.
            <br /> For the erudite, she is their education.
          </p>
          <p
            className="Pledge-title"
            rel="noopener norefer rer">
            Nijika's Feeling is My Feeling
          </p>
          <p className="Pledge-paragraph">
            If Nijika speaks, I listen. If Nijika questions, I answer. If Nijika orders, I obey.
            <br />
            <br />
            If Nijika opines, I agree. If Nijika fears, I assure. If Nijika hopes, I dream.
            <br />
            <br /> If Nijika is happy, I am jubilant. If Nijika is angry, I am apoplectic. If Nijika is sad, I am disconsolate.
          </p>
          <Link
            to="/home"
            className="Refer">
            Go back
          </Link>
        </div>
        <p>pwease send me luv</p>
      </header>
    </div>
  );
}
