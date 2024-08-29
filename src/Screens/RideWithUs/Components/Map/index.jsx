import React, { useState } from "react";
import GoogleMapSection from "../GoogleMapSection";
import SearchSection from "../SearchSection";
import { SourceContext } from "../../../../Context/SourceContext";
import { DestinationContext } from "../../../../Context/DestinationContext";

function MapPage({setCarDistance}) {
  const [source, setSource] = useState([]);
  const [selectCurrentLocation, setSelectCurrentLocation] = useState([]);
  const [destination, setDestination] = useState([]);
  
  return (
    <SourceContext.Provider value={{ source, setSource }}>
      <DestinationContext.Provider value={{ destination, setDestination }}>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <SearchSection setCarDistance={setCarDistance} selectCurrentLocation={selectCurrentLocation} />
          </div>
          <div className="Col-span-2">
            <GoogleMapSection  setSelectCurrentLocation={setSelectCurrentLocation}/>
          </div>
        </div>
      </DestinationContext.Provider>
    </SourceContext.Provider>
  );
}

export default MapPage;
