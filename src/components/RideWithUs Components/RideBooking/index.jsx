// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import Modal from "react-modal";
// import "leaflet/dist/leaflet.css";
// import "./Styles.scss";
// import L from "leaflet";

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });

// const RideBooking = ({ className = "" }) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedLocation, setSelectedLocation] = useState("Current Location");
//   const [markerPosition, setMarkerPosition] = useState([12.9716, 77.5946]);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const handleConfirmLocation = () => {
//     setSelectedLocation("Selected Location"); // You can use markerPosition to set the actual address
//     closeModal();
//   };

//   const LocationMarker = () => {
//     useMapEvents({
//       click(e) {
//         setMarkerPosition([e.latlng.lat, e.latlng.lng]);
//       },
//     });

//     return markerPosition ? <Marker position={markerPosition} /> : null;
//   };

//   return (
//     <div className={`location-input-wrapper ${className}`}>
//       <div className="location-input">
//         <img className="location-icon" alt="" src="/location-icon.svg" />
//         <div className="location-details">
//           <div className="location-details-child" />
//           <div className="location-address">
//             <div className="location-controls">
//               <div className="group-div">
//                 <div className="frame-child5" />
//                 <div className="location-input-control">
//                   <img
//                     className="iconamoonlocation-light"
//                     loading="lazy"
//                     alt=""
//                     src="/iconamoonlocationlight.svg"
//                   />
//                   <div className="current-location">
//                     <div className="current-location1">{selectedLocation}</div>
//                   </div>
//                 </div>
//                 <div className="change-location">
//                   <div
//                     className="change"
//                     style={{ cursor: "pointer" }}
//                     onClick={openModal}
//                   >
//                     Change
//                   </div>
//                 </div>
//               </div>
//               <div className="rectangle-parent2">
//                 <div className="frame-child5" />
//                 <img className="uilenter-icon" alt="" src="/uilenter.svg" />
//                 <input
//                   className="frame-input"
//                   placeholder="Where to ?"
//                   type="text"
//                 />
//               </div>
//             </div>
//             <div className="destinations">
//               <div className="your-last-destinations">
//                 Your last destinations
//               </div>
//             </div>
//             <div className="location-address-child" />
//             <div className="cafe-de-paris-18th-cross-6th-wrapper">
//               <div className="cafe-de-paris-18th">
//                 Cafe De-paris, 18th cross, 6th main road, Bangalore
//               </div>
//             </div>
//             <div className="location-address-child" />
//             <div className="cafe-de-paris-18th-cross-6th-wrapper">
//               <div className="cafe-de-paris-18th">
//                 People Restaurant, Express way road, Bangalore
//               </div>
//             </div>
//           </div>
//           <div className="booking">
//             <button className="group-button">
//               <div className="frame-child7" />
//               <div className="schedule-ride">Schedule Ride</div>
//             </button>
//             <button className="rectangle-parent3">
//               <div className="frame-child8" />
//               <a className="book-ride">Book Ride</a>
//             </button>
//           </div>
//         </div>
//         <img
//           className="location-input-child"
//           loading="lazy"
//           alt=""
//           src="/group-39476.svg"
//         />
//       </div>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Select Location"
//         className="modal"
//         overlayClassName="overlay"
//       >
//         <div className="modal-header">
//           <h2 className="modal-title">SELECT LOCATION</h2>
//         </div>
//         <div className="map-container">
//           <MapContainer
//             center={markerPosition}
//             zoom={10}
//             style={{ height: "100%", width: "100%" }}
//           >
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <LocationMarker />
//           </MapContainer>
//         </div>
//         <div className="modal-footer">
//           <button className="modal-confirm-btn" onClick={handleConfirmLocation}>
//             Confirm
//           </button>
//           <button className="modal-cancel-btn" onClick={closeModal}>
//             Close
//           </button>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// RideBooking.propTypes = {
//   className: PropTypes.string,
// };

// export default RideBooking;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Styles.scss";
import L from "leaflet";
import Modal from "react-modal";


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const RideBooking = ({ className = "" }) => {
  const [selectedLocation, setSelectedLocation] = useState("Current Location");
  const [destination, setDestination] = useState("");
  const [markerPosition, setMarkerPosition] = useState([12.9716, 77.5946]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { origin, destination } = location.state;
      setSelectedLocation(origin || "Current Location");
      setDestination(destination || "");
    } else {
      // Reset fields only if there's no location state
      setSelectedLocation("Current Location");
      setDestination("");
    }
  }, [location.state]);

  const handleConfirmLocation = () => {
    navigate("/ridewithus", {
      state: {
        origin: selectedLocation,
        destination,
      },
    });
  };
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    navigate("/")

  };
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setMarkerPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return markerPosition ? <Marker position={markerPosition} /> : null;
  };

  return (
    <div className={`location-input-wrapper ${className}`}>
      <div className="location-input">
        <img className="location-icon" alt="" src="/location-icon.svg" />
        <div className="location-details">
          <div className="location-details-child" />
          <div className="location-address">
            <div className="location-controls">
              <div className="group-div">
                <div className="frame-child5" />
                <div className="location-input-control">
                  <img
                    className="iconamoonlocation-light"
                    loading="lazy"
                    alt=""
                    src="/iconamoonlocationlight.svg"
                  />
                  <div className="current-location">
                    <div className="current-location1">{selectedLocation}</div>
                  </div>
                </div>
                <div className="change-location">
                  <div
                    className="change"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/maps")}
                  >
                    Change
                  </div>
                </div>
              </div>
              <div className="rectangle-parent2">
                <div className="frame-child5" />
                <img className="uilenter-icon" alt="" src="/uilenter.svg" />
                <input
                  className="frame-input"
                  placeholder="Where to ?"
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>
            <div className="destinations">
              <div className="your-last-destinations">
                Your last destinations
              </div>
            </div>
            <div className="location-address-child" />
            <div className="cafe-de-paris-18th-cross-6th-wrapper">
              <div className="cafe-de-paris-18th">
                Cafe De-paris, 18th cross, 6th main road, Bangalore
              </div>
            </div>
            <div className="location-address-child" />
            <div className="cafe-de-paris-18th-cross-6th-wrapper">
              <div className="cafe-de-paris-18th">
                People Restaurant, Express way road, Bangalore
              </div>
            </div>
          </div>
          <div className="booking">
            <button className="group-button">
              <div className="frame-child7" />
              <div className="schedule-ride">Schedule Ride</div>
            </button>
            <button className="rectangle-parent3" onClick={openModal}>
              <div className="frame-child8" />
              <a className="book-ride">Book Ride</a>
            </button>
          </div>
        </div>
        <img
          className="location-input-child"
          loading="lazy"
          alt=""
          src="/group-39476.svg"
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Thank You"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-header">
          <h2 className="modal-title">Ride Confirmed</h2>
        </div>

        <div className="modal-body">
          <p>
            Thanks for choosing Grin Mobility. We booked your ride, and a rider
            will contact you in a few minutes.
          </p>
        </div>

        <div className="modal-footer">
          <button className="modal-cancel-btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

RideBooking.propTypes = {
  className: PropTypes.string,
};

export default RideBooking;
