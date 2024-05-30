import { useEffect, useState } from "react";
import "./styling/Vans.css";
import VanCard from "../components/VanCard";

export default function Vans() {
  const [vans, setVans] = useState();

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => setVans(data.vans), 638);
      });
  }, []);

  return (
    <div className="van-page-wrapper">
      <div className="van-filter-options">
        <h2>Explore our van options</h2>
        <ul>
          <li className="link-button default filter">Simple</li>
          <li className="link-button default filter">Luxury</li>
          <li className="link-button default filter">Rugged</li>
          <a className="link-button">Clear filter</a>
        </ul>
      </div>
      <div className="van-card-wrapper">
        {vans ? (
          vans.map((van) => (
            <VanCard
              key={van.id}
              image={van.imageUrl}
              name={van.name}
              price={van.price}
              type={van.type}
            />
          ))
        ) : (
          <h3 className="van-cards-loading">Retrieving Vans</h3> //...elipsis animated in css
        )}
      </div>
    </div>
  );
}
