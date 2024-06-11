/* eslint-disable react/prop-types */
import "./styling/Footer.css";

export default function Footer({ className }) {

  const currentYear = new Date().getFullYear()

  return (
    <footer className={className}>
      <p>Ⓒ {currentYear} #VANLIFE</p>
      <div className="wip-wrapper">
        <h4>Work in progress... exercise incomplete.</h4>
      </div>
    </footer>
  );
}
