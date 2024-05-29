/* eslint-disable react/prop-types */
import "./styling/Layout.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="page-wrapper">
      <Navbar className="navbar" />
      <main className="content-wrapper">{children}</main>
      <Footer className="footer" />
    </div>
  );
}
