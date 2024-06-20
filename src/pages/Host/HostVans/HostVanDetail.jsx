import { useContext } from "react";
import VanContext from "../../../components/VanContext";

export default function HostVanDetail() {
  const { van, type } = useContext(VanContext);
  const { name, description } = van;

  return (
    <>
      <p>
        <span>Name:</span> {name}
      </p>
      <p>
        <span>Category:</span> {type}
      </p>
      <p>
        <span>Description:</span> {description}
      </p>
      <p>
        <span>Visibility:</span> Public
      </p>
    </>
  );
}
