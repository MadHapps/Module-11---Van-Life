import { useEffect } from "react";
import "./styling/Vans.css";

export default function Vans() {
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <h2>This is the Vans page~!</h2>
    </>
  );
}
