
import { useContext } from "react";
import VanContext from "../../../components/VanContext";

export default function HostVanPricing() {
  const { van } = useContext(VanContext);
  const { price } = van;

    return (
        <>
            <p><span style={{fontSize: '1.5em'}}>${price}</span>/day</p>
        </>
    )
}