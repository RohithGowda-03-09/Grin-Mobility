import React, { useContext, useEffect, useState } from "react";
import InputItem from "../InputGroup";
import { DestinationContext } from "../../../../Context/DestinationContext";
import { SourceContext } from "../../../../Context/SourceContext";
import { FaCar, FaClock } from "react-icons/fa";
import Select from 'react-select';
import "./Styles.scss";

function SearchSection({ setCarDistance,setUserRideType }) {
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
  const handleRideTypeChange = (selectedOption) => {
    const newRideType = selectedOption.value;
    setRideType(newRideType);
    setUserRideType(newRideType);
    localStorage.setItem('rideType', newRideType); // Save ride type data
  
    if (newRideType === 'Airport Rides') {
      // Auto-fill with Kempegowda International Airport
      const kempegowdaAirport = {
        lat: 13.1986,
        lng: 77.7066,
        label: 'Kempegowda International Airport',
        placeId: 'airport-place-id' // Placeholder ID, adjust if necessary
      };
      setSource(kempegowdaAirport);
      localStorage.setItem('source', JSON.stringify(kempegowdaAirport));
      // Clear destination for airport rides if needed
      setDestination(null);
      localStorage.removeItem('destination');
    } else {
      // Clear both source and destination for other ride types
      setSource(null);
      setDestination(null);
      localStorage.removeItem('source');
      localStorage.removeItem('destination');
    }
  };
  

  const handleSearchClick = () => {
    // Save the current state
    localStorage.setItem('source', JSON.stringify(source));
    localStorage.setItem('destination', JSON.stringify(destination));
    localStorage.setItem('rideType', rideType);
    calculateDistance();
  };

  // Options for React Select
  const rideTypeOptions = [
    { value: 'City Rides', label: 'City Rides' },
    { value: 'Rental Rides', label: 'Rental Rides' },
    { value: 'Airport Rides', label: 'Airport Rides' }
  ];

  return (
    <div className="search-section">
      <div className="header">
        <p className="title">Book a Ride</p>
        <div className="dropdown">
          <Select
            options={rideTypeOptions}
            value={rideTypeOptions.find(option => option.value === rideType)}
            onChange={handleRideTypeChange}
            placeholder="Book Your Choice"
            styles={{
              control: (provided) => ({
                ...provided,
                borderColor: '#00ca00',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  borderColor: '#008f00',
                },
                '&:focus': {
                  borderColor: '#006f00',
                  boxShadow: '0 0 0 3px rgba(0, 175, 0, 0.2)',
                },
                height: '3.5rem', // Larger height for better UX
              }),
              menu: (provided) => ({
                ...provided,
                borderRadius: '0.5rem',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isSelected ? '#dfe6e9' : '#f0f0f0',
                color: '#00CA00',
                fontSize: '1.125rem',
                cursor: 'pointer',
                fontFamily: 'Poppins, sans-serif', // Font family
                fontWeight: 600, // Slightly bold
                '&:hover': {
                  backgroundColor: '#dfe6e9',
                },
                padding: '1rem',
              }),
              singleValue: (provided) => ({
                ...provided,
                color: '#333',
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                color: '#00ca00',
                cursor: 'pointer',
              }),
              indicatorSeparator: (provided) => ({
                ...provided,
                display: 'none', // Hide the separator line
              }),
            }}
          />
        </div>
      </div>

      <p className="description">
        Zero emission rides between traffics & pollution
      </p>

      <InputItem type="source"rideType={rideType} />
      <InputItem type="destination" rideType={rideType}/>
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
