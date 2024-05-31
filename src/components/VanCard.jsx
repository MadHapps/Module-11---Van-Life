/* eslint-disable react/prop-types */
import "./styling/VanCard.css";

export default function VanCard({ image, name, price, type }) {
  const tag = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className="van-card">
      <img className="card-img" src={image} />
      <div className="card-text-wrapper">
        <h3 className="card-title">{name}</h3>
        <p className="card-price">${price}</p>
      </div>
      <p className={`card-tag ${type ? type : "default"}`}>{tag}</p>
    </div>
  );
}
