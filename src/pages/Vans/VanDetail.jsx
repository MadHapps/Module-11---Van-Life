import { useEffect, useState } from "react";
import "../styling/VanDetail.css";
import { useParams } from "react-router-dom";
import VanCard from "../../components/VanCard";

export default function VanDetail() {
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

  return (
    <>
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
