/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./styling/LogOutModal.css";

export default function LogOutModal({ logInOut, showModal }) {
  const navigate = useNavigate();

  function handleYesClick() {
    logInOut();
    showModal(false);
    navigate("/", { replace: true });
  }

  return (
    <div className="logout-modal">
      <h1>Log out?</h1>
      <button onClick={handleYesClick}>Yes</button>
      <button onClick={() => showModal(false)}>No</button>
    </div>
  );
}
