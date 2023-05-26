import { Link } from "react-router-dom";
import "../styles/navBar.css";

export default function Nav() {
  return (
    <div className="top-box">
      <button className="top-button">
        <Link
          onClick={() => {}}
          to="/home"
          className="top-link">
          Home
        </Link>
      </button>
      <button className="top-button">
        <Link
          to="/mia"
          className="top-link">
          Mia
        </Link>
      </button>
    </div>
  );
}
