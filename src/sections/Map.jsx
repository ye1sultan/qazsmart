import { GoogleMap, InfoWindowF, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";

export default function Map({ coord }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading ...</div>;

    return <GMap coord={coord} />;
}

const Tooltip = ({ text }) => {
    return (
        <div className="bg-white rounded-md shadow-xl">
            <div className="text-xl font-medium">
                {text}
            </div>
        </div>
    );
}

const GMap = ({ coord }) => {
    const kazakhstan = useMemo(() => ({ lat: 48.0196, lng: 66.9237 }), []);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [map, setMap] = useState(null);

    const handleMarkerClick = (location) => {
        setSelectedLocation(location);
    }

    const handleMapClick = () => {
        setSelectedLocation(null);
    }

    useEffect(() => {
        if (map && coord.length > 0) {
            const bounds = new window.google.maps.LatLngBounds();

            coord.forEach((location) => {
                bounds.extend(new window.google.maps.LatLng(location.coordinates.lat, location.coordinates.lng));
            });

            map.fitBounds(bounds);
        }
    }, [map, coord]);

    return (
        <GoogleMap
            zoom={5.5}
            center={coord[0]?.coordinates || kazakhstan}
            mapContainerClassName="h-[70vh] lg:h-screen w-full z-[99] rounded-md"
            onClick={handleMapClick}
            onLoad={(map) => {
                if (coord.length > 1) {
                    setMap(map)
                }
            }}
        >
            {coord.map((location, index) => (
                <MarkerF
                    key={index}
                    onClick={() => handleMarkerClick(location)}
                    position={{ lat: location.coordinates.lat, lng: location.coordinates.lng }}
                />
            ))}
            {selectedLocation && (
                <InfoWindowF
                    position={{ lat: selectedLocation.coordinates.lat, lng: selectedLocation.coordinates.lng }}
                    onCloseClick={() => setSelectedLocation(null)}
                >
                    <Tooltip text={selectedLocation.name} />
                </InfoWindowF>
            )}
        </GoogleMap>
    );
}