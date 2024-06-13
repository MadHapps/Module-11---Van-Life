import "./styling/Navbar.css";
import "./styling/HostLayout.css";
import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="host-nav-wrapper">
        <div className="link-wrapper">
          <NavLink
            to="/host"
            end
            className={({ isActive }) => (isActive ? "isActive" : null)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="income"
            className={({ isActive }) => (isActive ? "isActive" : null)}
          >
            Income
          </NavLink>
          <NavLink
            to="vans"
            className={({ isActive }) => (isActive ? "isActive" : null)}
          >
            Vans
          </NavLink>
          <NavLink
            to="reviews"
            className={({ isActive }) => (isActive ? "isActive" : null)}
          >
            Reviews
          </NavLink>
        </div>
      </nav>
      <section className="host-section-wrapper">
        <Outlet />
      </section>
    </>
  );
}
