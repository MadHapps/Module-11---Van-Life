/* eslint-disable react/prop-types */
import "./styling/Layout.css";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
