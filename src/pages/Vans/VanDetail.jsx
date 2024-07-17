import { useEffect, useState } from "react";
import "../styling/VanDetail.css";
import { Link, useLocation, useParams } from "react-router-dom";
import VanCard from "../../components/VanCard";
import { FaArrowLeftLong } from "react-icons/fa6";
import { getVan } from "../../api";

export default function VanDetail() {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const location = useLocation();

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

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }

  const search = location.state?.search || "";
  const type = location.state?.type || "all";


  return (
    <>
      {van?.type && (
        <Link className="hvd-back-btn" to={`..?${search}`} relative="path">
          <FaArrowLeftLong />
          Back to {type} vans
        </Link>
      )}
      {van && (
        <VanCard
          id={id}
          image={van.imageUrl}
          name={van.name}
          price={van.price}
          description={van.description}
          type={van.type}
          details={true}
        />
      )}
    </>
  );
}
