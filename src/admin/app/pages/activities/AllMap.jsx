import { GoogleMap, InfoWindow, useLoadScript, MarkerF } from "@react-google-maps/api";
import React, { useEffect, useMemo, useState } from "react";

export default function AllMap({ coord }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading ...</div>;
    return <GMap coord={coord} />;
}

const Tooltip = ({ text }) => {
    return (
        <div className=" bg-white rounded-md shadow-xl">
            <div className="text-xl p-2">
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
        <div className="w-full mt-4">
            <div className="w-full flex flex-col justify-between items-start mb-4">
                <div className="block text-lg font-medium text-gray-700 mb-2">
                    Координаты на карте
                </div>
            </div>
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
                    <InfoWindow
                        position={{ lat: selectedLocation.coordinates.lat, lng: selectedLocation.coordinates.lng }}
                        onCloseClick={() => setSelectedLocation(null)}
                    >
                        <Tooltip text={selectedLocation.name} />
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    );
}