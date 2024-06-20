
import { useContext } from "react";
import VanContext from "../../../components/VanContext";

export default function HostVanPhotos() {
  const { van } = useContext(VanContext);

    return (
        <>
            <img src={van.imageUrl} alt="" />
        </>
    )
}