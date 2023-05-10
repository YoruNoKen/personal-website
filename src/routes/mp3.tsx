import "./Home.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import parser from "../utils/youtubeUrlParser";
import axios from "axios";

function getURLParameter(url: string, name: string) {
  name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  const results = regex.exec(url);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

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

      // const apiKey = process.env.RAPID_API_KEY;
      const apiKey = "8f0ccab30cmsh4fd7992d86e20e0p18a33fjsna8be655472a0";
      const options = {
        method: "GET",
        url: "https://youtube-video-download-info.p.rapidapi.com/dl",
        params: { id: youtubeID },
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "youtube-video-download-info.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setDone(true);
      } catch (e) {
        console.error(e);
      }
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
            {isDone ? <a href={result}>Click here</a> : "Waiting for result.."}
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
