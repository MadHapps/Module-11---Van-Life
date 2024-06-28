import { useEffect, useState } from "react";
import "../styling/VanDetail.css";
import { Link, useLocation, useParams } from "react-router-dom";
import VanCard from "../../components/VanCard";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function VanDetail() {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchVan = async () => {
      const res = await fetch(`/api/vans/${id}`);
      const data = await res.json();
      setVan(data.vans);
    };

    fetchVan();
  }, [id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all"

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
          id={van.id}
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
