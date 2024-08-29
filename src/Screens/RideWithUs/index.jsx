import React, { useRef, useState } from 'react';
import './Styles.scss';
import { LeafIcon, RideWithUsImgae } from '../../Assets/Icons';
import MapPage from './Components/Map';
import CarListOptions from './Components/CarListOptions';

const RideWithUs = () => {
  const mapRef = useRef(null);
  const [carDistance, setCarDistance] = useState(null);
  const scrollToMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };



  const OvalCard = ({ text }) => (
    <div className="oval-card">
      <span>{text}</span>
      <img src={LeafIcon} alt="Leaf Icon" className="border-icon" />
    </div>
  );
  
  return (
    <div className='ride-with-us'>
      <section className="riding-experience">
        <div className="content">
          <h1>Riding Experience<br/> Like Never Before</h1>
          <p>Choose Between These</p>
          <div className="ride-options">
            <div className="ride-card" onClick={scrollToMap}>
              <span>City Rides</span>
              <div className="arrow">→</div>
            </div>
            <div className="ride-card" onClick={scrollToMap}>
              <span>Rental Rides</span>
              <div className="arrow">→</div>
            </div>
            <div className="ride-card" onClick={scrollToMap}>
              <span>Airport Rides</span>
              <div className="arrow">→</div>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img alt='ride-with-us' src={RideWithUsImgae} />
        </div>
      </section>
      
      <div className="oval-cards">
        <OvalCard text="Reliable Pricing" />
        <OvalCard text="Zero Emission" />
        <OvalCard text="Zero Cancellation" />
      </div>

      <div className="map-container" ref={mapRef}>
        <MapPage setCarDistance={setCarDistance} />
      </div>
      <div>
      {carDistance?<CarListOptions carDistance={carDistance}/>:null}
      </div>
    </div>
  );
}

export default RideWithUs;
