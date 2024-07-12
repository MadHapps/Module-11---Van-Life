/* eslint-disable react/prop-types */
import "./styling/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { useState } from "react";
import LogOutModal from "./LogOutModal";

export default function Navbar({ className, isLoggedIn, logInOut }) {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal((prev) => !prev);
  }

  return (
    <nav className={className}>
      <Link to="/" className="logo" role="banner">
        #VANLIFE
      </Link>
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
        {!isLoggedIn ? (
          <NavLink
            to="/login"
            end
            className={({ isActive }) => (isActive ? "isActive" : null)}
          >
            <FaRegUserCircle className="account-icon" />
          </NavLink>
        ) : (
          <IoMdExit onClick={handleClick} className="account-icon" />
        )}
      </div>
      {showModal && (
        <LogOutModal logInOut={logInOut} showModal={setShowModal} />
      )}
    </nav>
  );
}
