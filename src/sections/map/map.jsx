import { useEffect, useMemo, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "../../redux/slices/activities";

import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";

import { MarkerCard } from "./components/tooltip";

const GMap = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities.activities.items);

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  const kazakhstan = useMemo(() => ({ lat: 48.0196, lng: 66.9237 }), []);

  const [clickedMarker, setClickedMarker] = useState(null);
  const [map, setMap] = useState(null);

  const handleMarkerClick = (location) => {
    setClickedMarker(location);
  };

  const handleMapClick = () => {
    setClickedMarker(null);
  };

  useEffect(() => {
    if (map && activities.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();

      activities.forEach((activity) => {
        if (activity.coordinates) {
          bounds.extend(
            new window.google.maps.LatLng(
              activity.coordinates.lat,
              activity.coordinates.lng
            )
          );
        }
      });

      map.fitBounds(bounds);
    }
  }, [map, activities]);

  return (
    <GoogleMap
      zoom={5.5}
      center={activities[0]?.coordinates || kazakhstan}
      mapContainerClassName="h-[300px] md:h-[400px] lg:h-[500px] xl:h-[620px] z-[99] rounded-md"
      onClick={handleMapClick}
      onLoad={(map) => {
        if (activities.length > 1) {
          setMap(map);
        }
      }}
    >
      {activities.map(
        (location, index) =>
          location.coordinates && (
            <Marker
              key={index}
              onClick={() => handleMarkerClick(location)}
              position={{
                lat: location.coordinates.lat,
                lng: location.coordinates.lng,
              }}
            />
          )
      )}
      {clickedMarker && (
        <InfoWindow
          position={{
            lat: clickedMarker.coordinates.lat,
            lng: clickedMarker.coordinates.lng,
          }}
          onCloseClick={() => setClickedMarker(null)}
        >
          <MarkerCard activity={clickedMarker} />
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading ...</div>;

  return (
    <div className="max-w-[1526px] w-full mx-auto px-4">
      <GMap />
    </div>
  );
}
