
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
    const [van] = useOutletContext();
    const { price } = van;

    return (
        <>
            <p><span style={{fontSize: '1.5em'}}>${price}</span>/day</p>
        </>
    )
}