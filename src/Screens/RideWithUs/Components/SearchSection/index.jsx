import React, { useContext, useEffect, useState } from "react";
import InputItem from "../InputGroup";
import { DestinationContext } from "../../../../Context/DestinationContext";
import { SourceContext } from "../../../../Context/SourceContext";

function SearchSection() {
  const { source } = useContext(SourceContext);
  const { destination } = useContext(DestinationContext);
  const [distance, setDistance] = useState();
  const [travelTime, setTravelTime] = useState();

  useEffect(() => {
    console.log("Source:", source);
    console.log("Destination:", destination);
  }, [source, destination]);

  const calculateDistance = () => {
    if (source && destination) {
      const dist = window.google.maps.geometry.spherical.computeDistanceBetween(
        new window.google.maps.LatLng(source.lat, source.lng),
        new window.google.maps.LatLng(destination.lat, destination.lng)
      );
      const distanceInMiles = dist * 0.000621371; // Convert meters to miles
      setDistance(distanceInMiles);

      // Assume an average speed (in miles per hour), e.g., 30 mph
      const averageSpeedMph = 30;
      const timeInMinutes = (distanceInMiles / averageSpeedMph) * 60;
      setTravelTime(timeInMinutes);
    } else {
      console.error("Source or Destination is missing");
    }
  };

  return (
    <div className="p-4 md:p-6 border-2 border-gray-300 rounded-xl shadow-md max-w-lg mx-auto">
      <p className="text-30px font-poppins font-bold mb-4 text-custom-green">
        Book a Ride
      </p>
      <p className="text-20px font-poppins text-gray-800">
        Zero emission rides between traffics & pollution
      </p>

      <InputItem type="source" />
      <InputItem type="destination" />
      <button
        className="mt-5 p-3 bg-[#00CA00] text-white rounded-lg w-full hover:bg-[#00CA00] transition"
        onClick={calculateDistance}
      >
        Search
      </button>

      {distance !== undefined && (
        <div className="mt-4 text-lg font-semibold text-gray-700">
          <p>Distance: {distance.toFixed(2)} miles</p>
          <p>Estimated Time: {travelTime.toFixed(2)} minutes</p>
        </div>
      )}
    </div>
  );
}

export default SearchSection;
