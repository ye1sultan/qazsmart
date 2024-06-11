import React from 'react';
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo, useState } from "react";

export default function Map({ setFormData }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading ...</div>;
    return <GMap setFormData={setFormData} />;
}

const GMap = ({ setFormData }) => {
    const kazakhstan = useMemo(() => ({ lat: 48.0196, lng: 66.9237 }), []);

    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);

    const [clickedLocation, setClickedLocation] = useState(null);

    const handleMapClick = (e) => {
        const clickedLat = e.latLng.lat();
        const clickedLng = e.latLng.lng();

        setLat(clickedLat);
        setLng(clickedLng);

        setFormData((prevFormData) => ({
            ...prevFormData,
            coordinates: { lat: clickedLat, lng: clickedLng },
        }));

        setClickedLocation({ lat: clickedLat, lng: clickedLng });
    };

    return (
        <div className="w-full">
            <div className="w-full flex flex-col justify-between items-start mb-4">
                <div className="block text-base font-medium text-gray-700 mb-2">
                    Координаты на карте
                </div>
                <div className="max-w-3xl w-full flex flex-col gap-2 md:flex-row justify-center md:justify-start items-start md:items-center">
                    <div className="max-w-xs w-full">
                        <div className="block text-sm font-medium text-gray-700">
                            Широта - {lat}
                        </div>
                    </div>
                    <div className="max-w-xs w-full">
                        <div className="block text-sm font-medium text-gray-700">
                            Долгота - {lng}
                        </div>
                    </div>
                </div>
            </div>
            <GoogleMap
                zoom={5.5}
                center={kazakhstan}
                mapContainerClassName="h-[70vh] lg:h-screen w-full z-[99]"
                onClick={handleMapClick}
            >
                {clickedLocation && (
                    <MarkerF position={clickedLocation} />
                )}
            </GoogleMap>
        </div>
    );
}