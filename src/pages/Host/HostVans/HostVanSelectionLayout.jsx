import "../../styling/HostVanSelectionLayout.css";
import "../../../components/styling/VanCard.css";
import { useEffect, useState } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { getVan } from "../../../api";

export default function HostVanDetail() {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVan() {
      setIsLoading(true)
      try { 
        const data = await getVan(id);
        setVan(data);
      } catch(error) {
        setError(error)
        console.error("Error fetching vans:", error);
      } finally {
        setIsLoading(false)
      }
    }
    fetchVan();
  }, [id]);

  const tag = van ? van.type.charAt(0).toUpperCase() + van.type.slice(1) : null;

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }

  return (
    <>
      <Link className="hvd-back-btn" to={".."} relative="path">
        <FaArrowLeftLong /> Back to all vans
      </Link>
      {van ? (
        <section className="hvd-content-wrapper">
          <img
            className="hvd-image"
            src={van.imageUrl}
            alt={`Picture of the ${van.name} van.`}
          />
          <div className="hvd-title-wrapper">
            <p className={`card-tag ${van.type}`}>{tag}</p>
            <h2 className="hvd-title">{van.name}</h2>
            <p className="hvd-price">
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <nav className="hvd-navbar">
            <div className="link-wrapper hvd-links">
              <NavLink
                to={"."}
                end
                className={({ isActive }) => (isActive ? "isActive" : null)}
              >
                Details
              </NavLink>
              <NavLink
                to={"pricing"}
                className={({ isActive }) => (isActive ? "isActive" : null)}
              >
                Pricing
              </NavLink>
              <NavLink
                to={"photos"}
                className={({ isActive }) => (isActive ? "isActive" : null)}
              >
                Photos
              </NavLink>
            </div>
          </nav>
          <div className="hvd-subcontent">
            <Outlet context={[van, tag]} />
          </div>
        </section>
      ) : (
        <p>Loading van details...</p>
      )}
    </>
  );
}
