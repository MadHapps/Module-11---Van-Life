import "../../styling/HostVans.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../../../api";

export default function HostVans() {
  const [hostVans, setHostVans] = useState(null);

  useEffect(() => {
    const fetchHostVans = async () => {
      const data = await getHostVans();
      setHostVans(data);
    };

    fetchHostVans();
  }, []);

  return (
    <>
      <h2>Your listed vans</h2>
      <ul className="host-vans-list">
        {hostVans ? (
          hostVans.map((van) => (
            <li className="list-card" key={van.id}>
              <Link className="link" to={`/host/vans/${van.id}`}>
                <img
                  src={van.imageUrl}
                  alt={`Thumbnail for the ${van.name} van`}
                />
                <h3 className="title">{van.name}</h3>
                <p className="price">${van.price}/day</p>
              </Link>
            </li>
          ))
        ) : (
          <p>Loading vans...</p>
        )}
      </ul>
    </>
  );
}
