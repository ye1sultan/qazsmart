import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

export default function PageMap({ coord }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading ...</div>;

    return <GMap coord={coord} />;
}

const GMap = ({ coord }) => {
    const center = useMemo(() => coord, []);

    return (
        <GoogleMap
            zoom={10}
            center={center}
            mapContainerClassName="h-[60vh] lg:h-[80vh] rounded-md"
        >
            <MarkerF
                position={{ lat: coord.lat, lng: coord.lng }}
            />
        </GoogleMap>

    );
}