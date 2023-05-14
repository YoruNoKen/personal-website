import "./Home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { poem1 } from "../utils/poem";
import React from "react";

export function Mother() {
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
      className="Download-background"
      style={{ backgroundPosition: `center ${backgroundY + 25}%` }}>
      <header className="Mom-header">
        <div className="Mom-container">
          <h2>{poem1.title}</h2>
          {poem1.content.split("\n").map((line, index) => {
            return (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            );
          })}
        </div>
        <Link
          to="/home"
          className="Refer">
          Go back
        </Link>
      </header>
    </div>
  );
}
