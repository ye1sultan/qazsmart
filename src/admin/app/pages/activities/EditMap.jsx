import { GoogleMap, InfoWindowF, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";

export default function Map({ coord, setFormData }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading ...</div>;
    return <GMap coord={coord} setFormData={setFormData} />;
}

const Tooltip = ({ setSelectedLocation, setMarker, setFormData }) => {
    const handleDeleteMarker = () => {
        setMarker(null);
        setFormData((prevFormData) => ({
            ...prevFormData,
            coordinates: { lat: "", lng: "" },
        }));
        setSelectedLocation(null);
    };

    return (
        <div className="bg-white rounded-md shadow-xl p-2">
            <div className="text-xl font-medium">
                Удалить маркер?
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                    type="button"
                    onClick={handleDeleteMarker}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                    Удалить
                </button>
                <button
                    type="button"
                    onClick={() => setSelectedLocation(null)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                >
                    Отменить
                </button>
            </div>
        </div>
    );
}

const GMap = ({ coord, setFormData }) => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [marker, setMarker] = useState(coord);

    const handleMarkerClick = (location) => {
        setSelectedLocation(location);
    }

    const handleMapClick = (e) => {
        const clickedLat = e.latLng.lat();
        const clickedLng = e.latLng.lng();

        const newMarkerCoord = { lat: clickedLat, lng: clickedLng };

        setMarker(newMarkerCoord);

        setFormData((prevFormData) => ({
            ...prevFormData,
            coordinates: newMarkerCoord,
        }));
    }

    return (
        <div className="w-full">
            <div className="w-full flex flex-col justify-between items-start mb-4">
                <div className="block text-base font-medium text-gray-700 mb-2">
                    Координаты на карте
                </div>
                <div className="max-w-3xl w-full flex flex-col gap-2 md:flex-row justify-center md:justify-start items-start md:items-center">
                    <div className="max-w-xs w-full">
                        <div className="block text-sm font-medium text-gray-700">
                            Широта - {coord.lat}
                        </div>
                    </div>
                    <div className="max-w-xs w-full">
                        <div className="block text-sm font-medium text-gray-700">
                            Долгота - {coord.lng}
                        </div>
                    </div>
                </div>
            </div>
            <GoogleMap
                zoom={10}
                center={coord}
                mapContainerClassName="h-[70vh] lg:h-screen w-full z-[99]"
                onClick={handleMapClick}
            >
                {selectedLocation && (
                    <InfoWindowF
                        position={coord}
                        onCloseClick={() => setSelectedLocation(null)}
                    >
                        <Tooltip
                            setSelectedLocation={setSelectedLocation}
                            setMarker={setMarker}
                            setFormData={setFormData} />
                    </InfoWindowF>
                )}
                {marker && (
                    <MarkerF
                        onClick={handleMarkerClick}
                        position={coord}
                    />
                )}
            </GoogleMap>
        </div>
    );
}