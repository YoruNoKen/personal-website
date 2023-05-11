import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="background">
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
          <a
            href="/poems"
            rel="noopener norefer rer"
            target="_blank"
            className="top-link">
            Ko-fi
          </a>
        </button>
      </div>
    </div>
  );
}
