import "../../styling/HostVanSelectionLayout.css";
import "../../../components/styling/VanCard.css";
import { useEffect, useState } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function HostVanDetail() {
  const { id } = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    const fetchVan = async () => {
      const res = await fetch(`/api/vans/${id}`);
      const data = await res.json();
      setVan(data.vans);
    };

    fetchVan();
  }, [id]);

  const tag = van ? van.type.charAt(0).toUpperCase() + van.type.slice(1) : null;

  return (
    <>
      <Link className="hvd-back-btn" to={"/host/vans"}>
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
                to={`/host/vans/${id}`}
                end
                className={({ isActive }) => (isActive ? "isActive" : null)}
              >
                Details
              </NavLink>
              <NavLink
                to={`/host/vans/${id}/pricing`}
                className={({ isActive }) => (isActive ? "isActive" : null)}
              >
                Pricing
              </NavLink>
              <NavLink
                to={`/host/vans/${id}/photos`}
                className={({ isActive }) => (isActive ? "isActive" : null)}
              >
                Photos
              </NavLink>
            </div>
          </nav>
          <Outlet />
        </section>
      ) : (
        <p>Loading van details...</p>
      )}
    </>
  );
}
