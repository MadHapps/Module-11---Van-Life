/* eslint-disable react/prop-types */
import "./styling/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

export default function Navbar({ className }) {
  return (
    <nav className={className}>
      < Link to="/" className="logo" role="banner">
        #VANLIFE
      </ Link>
      <div className="link-wrapper">
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "isActive" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "isActive" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "isActive" : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "isActive" : null)}
        >
          <FaRegUserCircle className="user-icon" />
        </NavLink>
      </div>
    </nav>
  );
}
