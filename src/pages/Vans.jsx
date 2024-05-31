import { useEffect, useState } from "react";
import "./styling/Vans.css";
import VanCard from "../components/VanCard";

export default function Vans() {
  const [vans, setVans] = useState(null);

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const response = await fetch("/api/vans");
        const data = await response.json();
        setTimeout(() => setVans(data.vans), 918); // Delay for 638ms
      } catch (error) {
        console.error("Error fetching vans:", error);
      }
    };

    fetchVans();
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
          <h3 className="van-cards-loading">Retrieving Vans</h3>
        )}
      </div>
    </div>
  );
}
