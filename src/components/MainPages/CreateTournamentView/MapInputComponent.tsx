"use client";
import React, { useCallback, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "60%",
  height: "400px",
};

const center = {
  lat: 37.7749, // Latitud de San Francisco
  lng: -122.4194, // Longitud de San Francisco
};

interface MapInputComponentProps {
  onLocationSelect: (location: { lat: number; lng: number }) => void;
}

const MapInputComponent: React.FC<MapInputComponentProps> = ({
  onLocationSelect,
}) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });
  console.log(useJsApiLoader);

  if (loadError) {
    console.error("Error loading Google Maps API:", loadError);
    return <div>Error loading map...</div>;
  }

  const [markerPosition, setMarkerPosition] = useState(center);

  const onClickMap = useCallback(
    (e: google.maps.MapMouseEvent) => {
      const lat = e.latLng?.lat() || 0;
      const lng = e.latLng?.lng() || 0;
      const location = { lat, lng };
      setMarkerPosition(location);
      onLocationSelect(location);
    },
    [onLocationSelect]
  );

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={markerPosition}
      zoom={10}
      onClick={onClickMap}>
      <Marker position={markerPosition} />
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
};

export default MapInputComponent;
