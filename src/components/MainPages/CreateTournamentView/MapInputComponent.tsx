// "use client";
// import React, { useCallback, useState } from "react";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// const containerStyle = {
//   width: "60%",
//   height: "400px",
// };

// const center = {
//   lat: 37.7749, // Latitud de San Francisco
//   lng: -122.4194, // Longitud de San Francisco
// };

// interface MapInputComponentProps {
//   onLocationSelect: (location: { lat: number; lng: number }) => void;
// }

// const MapInputComponent: React.FC<MapInputComponentProps> = ({
//   onLocationSelect,
// }) => {
//   const { isLoaded, loadError } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
//   });
//   console.log(useJsApiLoader);

//   if (loadError) {
//     console.error("Error loading Google Maps API:", loadError);
//     return <div>Error loading map...</div>;
//   }

//   const [markerPosition, setMarkerPosition] = useState(center);

//   const onClickMap = useCallback(
//     (e: google.maps.MapMouseEvent) => {
//       const lat = e.latLng?.lat() || 0;
//       const lng = e.latLng?.lng() || 0;
//       const location = { lat, lng };
//       setMarkerPosition(location);
//       onLocationSelect(location);
//     },
//     [onLocationSelect]
//   );

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={markerPosition}
//       zoom={10}
//       onClick={onClickMap}>
//       <Marker position={markerPosition} />
//     </GoogleMap>
//   ) : (
//     <div>Loading...</div>
//   );
// };

// export default MapInputComponent;

import React, { useState, useEffect, useRef } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

interface MapInputComponentProps {
  onLocationSelect: (
    location: { lat: number; lng: number },
    plusCode: string
  ) => void;
}

const MapInputComponent: React.FC<MapInputComponentProps> = ({
  onLocationSelect,
}) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [plusCode, setPlusCode] = useState<string>("");

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      const initialMap = new google.maps.Map(mapRef.current as HTMLElement, {
        zoom: 8,
        center: { lat: 40.731, lng: -73.997 },
      });
      setMap(initialMap);
    }
  }, [isLoaded]);

  const handleSearch = () => {
    if (map && plusCode) {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: plusCode }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          const location = results[0].geometry.location;
          map.setCenter(location);
          new google.maps.Marker({
            map: map,
            position: location,
          });
          onLocationSelect(
            { lat: location.lat(), lng: location.lng() },
            plusCode
          );
        } else {
          alert("No se pudo encontrar la ubicación.");
        }
      });
    }
  };

  return (
    <div className="justify-center flex-col items-center w-full h-full p-4">
      <label className="text-lg text-slate mb-1">
        Inserte un plus code de Google Maps
      </label>
      <input
        type="text"
        value={plusCode}
        onChange={(e) => setPlusCode(e.target.value)}
        placeholder="Ingrese el Plus Code"
        className="input-class p-2 mb-6 text-gray-800 rounded h-fit w-[100%]" // Añade tus clases de estilo aquí
      />
      <button
        type="button"
        className="rounded-md w-[100%] h-fit p-2 mb-6  bg-lime text-xs text-black hover:shadow-lg hover:shadow-blue-700 radhiumz uppercase"
        onClick={handleSearch}>
        Buscar ubicación
      </button>
      <div
        ref={mapRef}
        className="w-full h-80 bg-gray-200 rounded-md shadow-md"
      />
    </div>
  );
};

export default MapInputComponent;
