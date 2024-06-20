import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
    const [van] = useOutletContext();
    const { imageUrl } = van;

    return (
        <>
            <img src={imageUrl} alt="" />
        </>
    )
}