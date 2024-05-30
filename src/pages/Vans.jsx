import { useEffect, useState } from "react";
import "./styling/Vans.css";
import VanCard from "../components/VanCard";

export default function Vans() {
  const [vans, setVans] = useState();

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => (setVans(data.vans)), 1000)
      });
  }, []);

  console.log(vans);

  return (
    <div className="van-page-wrapper">
      {vans ? vans.map((van) => (
        <VanCard
          key={van.id}
          image={van.imageUrl}
          name={van.name}
          price={van.price}
          type={van.type}
        />
      )) : <h3 className="van-cards-loading">Retrieving Vans</h3>}
    </div>
  );
}
