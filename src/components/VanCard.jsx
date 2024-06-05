/* eslint-disable react/prop-types */
import "./styling/VanCard.css";
import { Link } from "react-router-dom";

export default function VanCard({
  id,
  image,
  name,
  price,
  description,
  type,
  details,
}) {
  const tag = type.charAt(0).toUpperCase() + type.slice(1);
  const VanCard = details ? 'div' : Link;

  return (
    <VanCard to={`/vans/${id}`} className={`van-card ${details ? "details" : ""}`}>
      <img className="card-img" src={image} alt={name} />
      <div className="card-title-wrapper">
        <h3 className="card-title">{name}</h3>
        <p className="card-price">
          ${price}
          <span className="card-price--after">/day</span>
        </p>
      </div>
      {details && <p className="card-description">{description}</p>}
      <p className={`card-tag ${type ? type : "default"}`}>{tag}</p>
    </VanCard>
  );
}
