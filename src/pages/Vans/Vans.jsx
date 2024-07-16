import { useEffect, useState } from "react";
import "../styling/Vans.css";
import VanCard from "../../components/VanCard";
import { useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export default function Vans() {
  const [vans, setVans] = useState(null);
  const [filterParams, setFilterParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const typeFilter = filterParams.get("type");

  useEffect(() => {
    async function fetchVans() {
      setIsLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (error) {
        setError(error);
        console.error("Error fetching vans:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchVans();
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  function handleClick(type) {
    setFilterParams((prevParams) => {
      type === null ? prevParams.delete("type") : prevParams.set("type", type);

      return prevParams;
    });
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
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
          {filterParams.get("type") && (
            <li className="link-button" onClick={() => handleClick(null)}>
              Clear filter
            </li>
          )}
        </ul>
      </div>
      <div className="van-card-wrapper">
        {displayedVans ? (
          displayedVans.map((van) => {
            return (
              <VanCard
                key={van.id}
                id={van.id}
                state={{
                  search: filterParams.toString(),
                  type: filterParams.get("type"),
                }}
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
