/* eslint-disable react/prop-types */
import "./styling/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import LogOutModal from "./LogOutModal";
import ModalWrapper from "./ModalWrapper";

export default function Navbar({ className, isLoggedIn, logInOut }) {
  const [showModal, setShowModal] = useState(false);

  // Ref for the modal wrapper div
  const modalRef = useRef(null);

  // Close modal when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      {/* Modal using portal */}
      {showModal && (
        <ModalWrapper modalRef={modalRef}>
          <LogOutModal logInOut={logInOut} showModal={setShowModal} />
        </ModalWrapper>
      )}
    </nav>
  );
}
