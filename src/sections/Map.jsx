import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Map() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading ...</div>;

    return <GMap />;
}

const GMap = () => {
    const kazakhstan = useMemo(() => ({ lat: 48.0196, lng: 66.9237 }), []);
    const almaty = useMemo(() => ({ lat: 43.2380, lng: 76.8829 }), []);
    const astana = useMemo(() => ({ lat: 51.1655, lng: 71.4272 }), []);

    return (
        <GoogleMap
            zoom={5.5}
            center={kazakhstan}
            mapContainerClassName="h-[70vh] lg:h-screen w-full"
        >
            <MarkerF position={almaty} />
            <MarkerF position={astana} />
        </GoogleMap>
    );
}