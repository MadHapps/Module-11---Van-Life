import { useOutletContext } from "react-router-dom";

export default function HostVanDetail() {
  const [van, tag] = useOutletContext();
  const { name, description } = van;

  return (
    <>
      <p>
        <span>Name:</span> {name}
      </p>
      <p>
        <span>Category:</span> {tag}
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
