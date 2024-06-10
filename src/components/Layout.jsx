/* eslint-disable react/prop-types */
import "./styling/Layout.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="page-wrapper">
      <Navbar className="navbar" />
      <main className="content-wrapper">{<Outlet />}</main>
      <Footer className="footer" />
    </div>
  );
}
