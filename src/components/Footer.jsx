/* eslint-disable react/prop-types */
import "./styling/Footer.css";

export default function Footer({ className }) {
  return (
    <footer className={className}>
      <p>Ⓒ 2024 #VANLIFE</p>
      <div className="wip-wrapper">
        <h4>Work in progress... exercise incomplete.</h4>
      </div>
    </footer>
  );
}
