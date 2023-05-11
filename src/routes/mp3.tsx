import "./Home.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import parser from "../utils/youtubeUrlParser";
import axios from "axios";

export default function Download() {
  const [isDone, setDone] = useState(false);
  const [result, setResult] = useState("");

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

  const inputUrlRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (inputUrlRef.current) {
      const youtubeID = parser(inputUrlRef.current.value);
      const apiUrl = `https://convert2mp3s.com/api/single/mp3?url=https://www.youtube.com/watch?v=${youtubeID.toString()}`;
      const res = await fetch(apiUrl);
      console.log(res);
      setDone(true);
      setResult(`https://convert2mp3s.com/api/button/mp3?url=https://www.youtube.com/watch?v=${youtubeID.toString()}`);
    }
  };

  return (
    <div
      className="Download-background"
      style={{ backgroundPosition: `center ${backgroundY + 25}%` }}>
      <header className="Downloader-header">
        <div className="Download-container">
          <form
            onSubmit={handleSubmit}
            className="form">
            <input
              ref={inputUrlRef}
              className="form-input"
              type="text"
              placeholder="Input the URL of your YouTube video."
            />
            <br />
            <button
              type="submit"
              className="form-button">
              Download
            </button>
            <br />
            {isDone ? <a>test</a> : "Waiting for input.."}
          </form>
          <br />
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
