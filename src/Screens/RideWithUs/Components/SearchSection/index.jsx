import React, { useContext, useEffect, useState } from "react";
import InputItem from "../InputGroup";
import { DestinationContext } from "../../../../Context/DestinationContext";
import { SourceContext } from "../../../../Context/SourceContext";
import { FaCar, FaClock } from "react-icons/fa";
import "./Styles.scss";

function SearchSection({ setCarDistance }) {
  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);
  const [distance, setDistance] = useState();
  const [travelTime, setTravelTime] = useState();
  const [rideType, setRideType] = useState("");

  useEffect(() => {
    // Retrieve saved data if available
    const savedSource = JSON.parse(localStorage.getItem('source'));
    const savedDestination = JSON.parse(localStorage.getItem('destination'));
    const savedRideType = localStorage.getItem('rideType');

    if (savedSource) {
      setSource(savedSource);
    }

    if (savedDestination) {
      setDestination(savedDestination);
    }

    if (savedRideType) {
      setRideType(savedRideType);
    }
  }, [setSource, setDestination]);

  const calculateDistance = () => {
    if (source && destination) {
      const directionsService = new window.google.maps.DirectionsService();

      const request = {
        origin: new window.google.maps.LatLng(source.lat, source.lng),
        destination: new window.google.maps.LatLng(destination.lat, destination.lng),
        travelMode: window.google.maps.TravelMode.DRIVING,
      };

      directionsService.route(request, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          const distanceInMeters = result.routes[0].legs[0].distance.value;
          const distanceInKms = distanceInMeters * 0.001;
          setDistance(distanceInKms);
          setCarDistance(distanceInKms);

          const averageSpeedKph = 50;
          const timeInMinutes = (distanceInKms / averageSpeedKph) * 60;
          setTravelTime(timeInMinutes);
        } else {
          console.error("Directions request failed due to", status);
        }
      });
    } else {
      console.error("Source or Destination is missing");
    }
  };

  const handleRideTypeChange = (event) => {
    const newRideType = event.target.value;
    setRideType(newRideType);
    localStorage.setItem('rideType', newRideType); // Save ride type data
  };

  const handleSearchClick = () => {
    // Save the current state
    localStorage.setItem('source', JSON.stringify(source));
    localStorage.setItem('destination', JSON.stringify(destination));
    localStorage.setItem('rideType', rideType);
    calculateDistance();
  };

  return (
    <div className="search-section">
      <div className="header">
        <p className="title">Book a Ride</p>
        <div className="dropdown">
          <select value={rideType} onChange={handleRideTypeChange}>
            <option value="" disabled hidden>
              Book Your Choice
            </option>
            <option value="City Rides">City Rides</option>
            <option value="Rental Rides">Rental Rides</option>
            <option value="Airport Rides">Airport Rides</option>
          </select>
        </div>
      </div>

      <p className="description">
        Zero emission rides between traffics & pollution
      </p>

      <InputItem type="source" />
      <InputItem type="destination" />
      <button className="mt-5 p-3 bg-[#00CA00] text-white rounded-lg w-full hover:bg-[#00CA00] transition" onClick={handleSearchClick}>
        Search
      </button>
      {distance !== undefined && (
        <div className="result">
          <div className="result-item distance">
            <FaCar className="icon" />
            <p className="text">
              Distance: <span className="text-blue-500">{distance.toFixed(2)} Kms</span>
            </p>
          </div>
          <div className="result-item time">
            <FaClock className="icon" />
            <p className="text">
              Estimated Time: <span className="text-red-500">{travelTime.toFixed(2)} minutes</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchSection;
