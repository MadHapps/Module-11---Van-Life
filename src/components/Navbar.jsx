/* eslint-disable react/prop-types */
import "./styling/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ className }) {
  return (
    <nav className={className}>
      <Link to="/" className="logo" role="banner">
        #VANLIFE
      </Link>
      <div className="link-wrapper">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </div>
    </nav>
  );
}
