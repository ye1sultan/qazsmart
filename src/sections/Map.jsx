import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "../redux/slices/activities";

export default function Map() {
  const dispatch = useDispatch();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  if (!isLoaded) return <div>Loading ...</div>;

  return <GMap />;
}

const Tooltip = ({ text }) => {
  return (
    <div className="bg-white rounded-md shadow-xl">
      <div className="text-xl font-medium">{text}</div>
    </div>
  );
};

const GMap = () => {
  const dispatch = useDispatch();

  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  const activities = useSelector((state) => state.activities.activities.items);

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  const kazakhstan = useMemo(() => ({ lat: 48.0196, lng: 66.9237 }), []);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [map, setMap] = useState(null);

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  const handleMapClick = () => {
    setSelectedLocation(null);
  };

  const collectCoordinates = (activities) => {
    const coordinatesArray = activities.map((activity) => ({
      name: activity.name,
      coordinates: activity.coordinates,
    }));

    return coordinatesArray;
  };

  const allCoordinates = collectCoordinates(activities);

  useEffect(() => {
    if (map && allCoordinates.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();

      allCoordinates.forEach((location) => {
        if (location.coordinates) {
          bounds.extend(
            new window.google.maps.LatLng(
              location.coordinates.lat,
              location.coordinates.lng
            )
          );
        }
      });

      map.fitBounds(bounds);
    }
  }, [map, allCoordinates]);

  return (
    <GoogleMap
      zoom={5.5}
      center={allCoordinates[0]?.coordinates || kazakhstan}
      mapContainerClassName="h-[70vh] lg:h-screen w-full z-[99] rounded-md"
      onClick={handleMapClick}
      onLoad={(map) => {
        if (allCoordinates.length > 1) {
          setMap(map);
        }
      }}
    >
      {allCoordinates.map(
        (location, index) =>
          location.coordinates && (
            <MarkerF
              key={index}
              onClick={() => handleMarkerClick(location)}
              position={{
                lat: location.coordinates.lat,
                lng: location.coordinates.lng,
              }}
            />
          )
      )}
      {selectedLocation && (
        <InfoWindowF
          position={{
            lat: selectedLocation.coordinates.lat,
            lng: selectedLocation.coordinates.lng,
          }}
          onCloseClick={() => setSelectedLocation(null)}
        >
          <Tooltip text={selectedLocation.name[selectedLanguage]} />
        </InfoWindowF>
      )}
    </GoogleMap>
  );
};
