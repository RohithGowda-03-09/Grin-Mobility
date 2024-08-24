import React, { useContext, useEffect, useState, useCallback } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { DestinationContext } from "../../../../Context/DestinationContext";
import { SourceContext } from "../../../../Context/SourceContext";
import { sourceIcon, whereToIcon } from "../../../../Assets/Icons";

function InputItem({ type }) {
  const [value, setValue] = useState(null);
  const [placeholder, setPlaceholder] = useState(null);
  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);

  const handleSelect = useCallback((place) => {
    if (!place || !place.value) {
      setValue(null);
      return;
    }
  
    const placeId = place.value.place_id;
    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
  
    service.getDetails({ placeId }, (place, status) => {
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        place.geometry &&
        place.geometry.location
      ) {
        const latLng = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          name: place.formatted_address,
          label: place.name,
        };
  
        if (type === "source") {
          setSource(latLng);
        } else {
          setDestination(latLng);
        }
      } else {
        console.error("Failed to get place details:", status);
      }
    });
  
    setValue(place);
  }, [setSource, setDestination, type]);
  

  useEffect(() => {
    setPlaceholder(type === "source" ? "Pickup Location" : "Dropoff Location");
  }, [type]);

  return (
    <div className="relative bg-gray-100 p-3 rounded-full mt-3 flex items-center gap-3 shadow-sm">
      <img
        src={type === "source" ? sourceIcon : whereToIcon}
        alt={type === "source" ? "Source Icon" : "Destination Icon"}
        className="w-6 h-6"
      />
      <GooglePlacesAutocomplete
        selectProps={{
          value,
          onChange: handleSelect,
          placeholder,
          isClearable: true,
          styles: {
            control: (provided) => ({
              ...provided,
              backgroundColor: "#fff",
              border: "2px solid #00CA00",
              borderRadius: "9999px",
              boxShadow: "none",
              width: "400px", 
              height:"65px"
            }),
            input: (provided) => ({
              ...provided,
              color: "#333",
              fontSize: "16px",
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "#6c757d",
              fontSize: "16px",
            }),
            clearIndicator: (provided) => ({
              ...provided,
              color: "#007bff",
              padding: "0 8px",
            }),
            menu: (provided) => ({
              ...provided,
              backgroundColor: "#fff",
              borderRadius: "0.375rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              border: "1px solid #ddd",
              zIndex: 1000,
              minWidth: "calc(100% + 20px)", // Ensure dropdown is wide enough
              width: "calc(100% + 20px)", // Adjust to ensure the width is consistent with the input
            }),
            menuList: (provided) => ({
              ...provided,
              padding: "0.5rem 0",
            }),
            option: (provided, state) => ({
              ...provided,
              padding: "0.5rem 1rem",
              backgroundColor: state.isFocused ? "#e6ffed" : "#fff",
              cursor: "pointer",
              fontSize: "16px",
            }),
          },
        }}
        className="w-full"
      />
    </div>
  );
}

export default InputItem;
