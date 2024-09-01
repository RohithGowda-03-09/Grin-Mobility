import React, { useContext, useEffect, useState, useCallback } from "react";
import {
  GoogleMap,
  MarkerF,
  OverlayViewF,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { SourceContext } from "../../../../Context/SourceContext";
import { DestinationContext } from "../../../../Context/DestinationContext";

function GoogleMapSection({ userRideType }) {
  const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    overflow: "hidden",
  };

  const [center, setCenter] = useState({
    lat: -3.745,
    lng: -38.523,
  });
  const [map, setMap] = useState(null);
  const [directionRoutePoint, setDirectionRoutePoint] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  const { source } = useContext(SourceContext);
  const { destination } = useContext(DestinationContext);

  const isValidLatLng = (coords) => {
    return (
      coords && typeof coords.lat === "number" && typeof coords.lng === "number"
    );
  };

  const directionRoute = useCallback(() => {
    if (
      !source ||
      !destination ||
      !window.google ||
      !isValidLatLng(source) ||
      !isValidLatLng(destination)
    )
      return;

    const DirectionsService = new window.google.maps.DirectionsService();
    DirectionsService.route(
      {
        origin: { lat: source.lat, lng: source.lng },
        destination: { lat: destination.lat, lng: destination.lng },
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirectionRoutePoint(result);
        } else {
          console.error("Error loading route:", status);
        }
      }
    );
  }, [source, destination]);

  useEffect(() => {
    if (source && isValidLatLng(source) && map) {
      map.panTo({ lat: source.lat, lng: source.lng });
      setCenter({ lat: source.lat, lng: source.lng });
    }
    if (destination && isValidLatLng(destination) && source) {
      directionRoute();
    }
  }, [source, map, directionRoute, destination]);

  useEffect(() => {
    if (userRideType === 'Airport Rides' && source) {
      // Mark Bangalore Airport on map
      setCenter({ lat: source.lat, lng: source.lng });
    } else if (userRideType === 'City Rides' || userRideType === 'Rental Rides') {
      // Clear markers and route, and show current location if both inputs are cleared
      if (!source && !destination) {
        if (currentLocation) {
          setCenter({ lat: currentLocation.lat, lng: currentLocation.lng });
        }
        setDirectionRoutePoint(null);
      } else {
        setDirectionRoutePoint(null);
      }
    }
  }, [userRideType, source, destination, currentLocation]);

  useEffect(() => {
    if (destination && isValidLatLng(destination) && map) {
      setCenter({
        lat: destination.lat,
        lng: destination.lng,
      });
    }
    if (isValidLatLng(source) && isValidLatLng(destination)) {
      directionRoute();
    }
  }, [destination, map, directionRoute, source]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
          setCenter({ lat: latitude, lng: longitude });
        },
        (error) => console.error("Error getting location:", error),
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    }
  }, []);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className="relative w-full h-full">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {currentLocation && (
          <MarkerF
            position={currentLocation}
            icon={{
              scaledSize: new window.google.maps.Size(25, 25),
            }}
          />
        )}
        {source && (
          <MarkerF
            position={{ lat: source.lat, lng: source.lng }}
            icon={{
              scaledSize: new window.google.maps.Size(20, 20),
            }}
          >
            <OverlayViewF
              position={{ lat: source.lat, lng: source.lng }}
              mapPaneName={OverlayViewF.OVERLAY_MOUSE_TARGET}
            >
              <div className="p-2 bg-white font-bold inline-block rounded-lg shadow-md">
                <p className="text-black text-[18px]">{source.label}</p>
              </div>
            </OverlayViewF>
          </MarkerF>
        )}
        {destination && (
          <MarkerF
            position={{ lat: destination.lat, lng: destination.lng }}
            icon={{
              scaledSize: new window.google.maps.Size(20, 20),
            }}
          >
            <OverlayViewF
              position={{ lat: destination.lat, lng: destination.lng }}
              mapPaneName={OverlayViewF.OVERLAY_MOUSE_TARGET}
            >
              <div className="p-2 bg-white font-bold inline-block rounded-lg shadow-md">
                <p className="text-black text-[18px]">{destination.label}</p>
              </div>
            </OverlayViewF>
          </MarkerF>
        )}
        {directionRoutePoint && (
          <DirectionsRenderer directions={directionRoutePoint} />
        )}
        <DirectionsRenderer
          directions={directionRoutePoint}
          options={{
            polylineOptions: {
              strokeColor: "#000",
              strokeWeight: 5,
            },
            suppressMarkers: true,
          }}
        />
      </GoogleMap>
    </div>
  );
}

export default GoogleMapSection;
