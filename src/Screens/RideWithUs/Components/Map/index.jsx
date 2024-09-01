import React, { useState } from "react";
import GoogleMapSection from "../GoogleMapSection";
import SearchSection from "../SearchSection";
import { SourceContext } from "../../../../Context/SourceContext";
import { DestinationContext } from "../../../../Context/DestinationContext";

function MapPage({ setCarDistance ,setUserRideType,userRideType}) {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [rideType, setRideType] = useState("");

  return (
    <SourceContext.Provider value={{ source, setSource }}>
      <DestinationContext.Provider value={{ destination, setDestination }}>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <SearchSection setCarDistance={setCarDistance} setRideType={setRideType} rideType={rideType} setUserRideType={setUserRideType} />
          </div>
          <div className="Col-span-2">
            <GoogleMapSection rideType={rideType} userRideType={userRideType} />
          </div>
        </div>
      </DestinationContext.Provider>
    </SourceContext.Provider>
  );
}

export default MapPage;
