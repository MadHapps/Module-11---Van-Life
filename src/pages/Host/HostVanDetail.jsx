import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return (
    <>
      <nav>Back to all fans</nav>
      <h3>HostVanDetail page for: {id}</h3>
    </>
  );
}
