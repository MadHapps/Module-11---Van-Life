import { useEffect, useState } from "react";
import "../styling/Vans.css";
import VanCard from "../../components/VanCard";
import { useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState(null);
  const [displayedVans, setDisplayedVans] = useState(null);
  const [filterParams, setFilterParams] = useSearchParams();

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const response = await fetch("/api/vans");
        const data = await response.json();
        setTimeout(() => {
          setVans(data.vans);
          setDisplayedVans(data.vans);
        }, 500);
      } catch (error) {
        console.error("Error fetching vans:", error);
      }
    };

    fetchVans();
  }, []);

  useEffect(() => {
    if (filterParams.get("type") && vans) {
      setDisplayedVans(vans.filter((van) => van.type === filterParams.get("type")));
    } else {
      setDisplayedVans(vans);
    }

  }, [filterParams, vans]);

  function handleClick(type) {
    setFilterParams(prevParams => {
      type === null
        ? prevParams.delete("type")
        : prevParams.set("type", type)
      
      return prevParams
    });
  }

  return (
    <div className="van-page-wrapper">
      <div className="van-filter-options">
        <h2>Explore our van options</h2>
        <ul>
          <li
            className={`link-button default filter ${
              filterParams.get("type") === "simple" ? "simple" : ""
            }`}
            onClick={() => handleClick("simple")}
          >
            Simple
          </li>
          <li
            className={`link-button default filter ${
              filterParams.get("type") === "luxury" ? "luxury" : ""
            }`}
            onClick={() => handleClick("luxury")}
          >
            Luxury
          </li>
          <li
            className={`link-button default filter ${
              filterParams.get("type") === "rugged" ? "rugged" : ""
            }`}
            onClick={() => handleClick("rugged")}
          >
            Rugged
          </li>
          <li className="link-button" onClick={() => handleClick(null)}>
            Clear filter
          </li>
        </ul>
      </div>
      <div className="van-card-wrapper">
        {displayedVans ? (
          displayedVans.map((van) => {
            return (
              <VanCard
                key={van.id}
                id={van.id}
                image={van.imageUrl}
                name={van.name}
                price={van.price}
                description={van.description}
                type={van.type}
                details={false}
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
