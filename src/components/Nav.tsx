import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Nav() {
  const [backgroundY, setBackgroundY] = useState(0);
  useEffect(() => {
    const handScroll = () => {
      const scrollPercent = (window.scrollY / window.innerHeight) * 90;
      const newY = scrollPercent * 0.2;
      setBackgroundY(newY);
    };
    window.addEventListener("scroll", handScroll);

    return () => {
      window.removeEventListener("scroll", handScroll);
    };
  }, []);

  return (
    <div
      className="background"
      style={{ backgroundPosition: `center ${backgroundY + 25}%` }}>
      <div className="top-box">
        <a href="https://youtube.com">
          <button className="top-button">
            <Link
              to="/home"
              className="top-link">
              Home
            </Link>
          </button>
        </a>
        <button className="top-button">
          <Link
            to="/poems"
            className="top-link">
            Poems
          </Link>
        </button>
        <button className="top-button">
          <Link
            to="/mothersday"
            className="top-link">
            Mother's Day
          </Link>
        </button>
      </div>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense> */}
    </div>
  );
}
