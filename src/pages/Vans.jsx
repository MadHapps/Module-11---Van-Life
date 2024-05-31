import { useEffect, useState } from "react";
import "./styling/Vans.css";
import VanCard from "../components/VanCard";

export default function Vans() {
  const [vans, setVans] = useState(null);
  const [filteredVans, setFilteredVans] = useState(null);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const response = await fetch("/api/vans");
        const data = await response.json();
        setTimeout(() => {
          setVans(data.vans);
          setFilteredVans(data.vans);
        }, 918);
      } catch (error) {
        console.error("Error fetching vans:", error);
      }
    };

    fetchVans();
  }, []);

  useEffect(() => {
    if (filter) {
      setFilteredVans(vans.filter((van) => van.type === filter));
    } else {
      setFilteredVans(vans);
    }
  }, [filter, vans]);

  function handleClick(type) {
    setFilter(type);
  }

  function clearFilter() {
    setFilter(null);
  }

  return (
    <div className="van-page-wrapper">
      <div className="van-filter-options">
        <h2>Explore our van options</h2>
        <ul>
          <li
            className={`link-button default filter ${
              filter === "simple" ? "simple" : ""
            }`}
            onClick={() => handleClick("simple")}
          >
            Simple
          </li>
          <li
            className={`link-button default filter ${
              filter === "luxury" ? "luxury" : ""
            }`}
            onClick={() => handleClick("luxury")}
          >
            Luxury
          </li>
          <li
            className={`link-button default filter ${
              filter === "rugged" ? "rugged" : ""
            }`}
            onClick={() => handleClick("rugged")}
          >
            Rugged
          </li>
          <li className="link-button" onClick={clearFilter}>
            Clear filter
          </li>
        </ul>
      </div>
      <div className="van-card-wrapper">
        {filteredVans ? (
          filteredVans.map((van) => {
            return (
              <VanCard
                key={van.id}
                image={van.imageUrl}
                name={van.name}
                price={van.price}
                type={van.type}
              />
            );
          })
        ) : (
          <h3 className="van-cards-loading">Retrieving Vans</h3>
        )}
      </div>
    </div>
  );
}
