import PropTypes from "prop-types";
import "./Styles.scss";

const EarlyRideBooking = ({ className = "" }) => {
  return (
    <div className={`rental-content-wrapper ${className}`}>
      <div className="rental-content">
        <div className="rental-details">
          <h1 className="rental-rides1">Rental Rides</h1>
          <div className="rent-us-as">
            Rent us, as well as the sustainable energy
          </div>
        </div>
        <div className="rental-navigation">
          <div className="rental-navigation-child" />
          <div className="rental-location">
            <div className="pickup-location">
              <div className="rectangle-parent4">
                <div className="frame-child9" />
                <img
                  className="iconamoonlocation-light1"
                  alt=""
                  src="/iconamoonlocationlight.svg"
                />
                <input
                  className="frame-child10"
                  placeholder="Car Pick up Location"
                  type="text"
                />
              </div>
              <div className="select-a-car">
                Select a car pickup location near to you.
              </div>
            </div>
            <div className="rectangle-parent5">
              <div className="frame-child9" />
              <div className="select-the-date">{`Select the date & Time`}</div>
            </div>
            <div className="rental-details">
              <div className="select-a-car">
                Select the dates you want to rent.
              </div>
              <div className="date-options">
                <button className="rectangle-parent6">
                  <div className="frame-child12" />
                  <div className="today">Today</div>
                </button>
                <button className="rectangle-parent7">
                  <div className="frame-child13" />
                  <div className="tomorrow">Tomorrow</div>
                </button>
                <button className="rectangle-parent8">
                  <div className="frame-child14" />
                  <div className="weekend">Weekend</div>
                </button>
              </div>
            </div>
          </div>
          <img
            className="stylish-elegant-woman-car-salo-icon"
            loading="lazy"
            alt=""
            src="/stylishelegantwomancarsalon-1@2x.png"
          />
          <img
            className="primecalendar-icon"
            loading="lazy"
            alt=""
            src="/primecalendar.svg"
          />
          <img
            className="iconamoonarrow-up-2"
            loading="lazy"
            alt=""
            src="/iconamoonarrowup2.svg"
          />
          <img
            className="iconamoonarrow-up-21"
            alt=""
            src="/iconamoonarrowup2.svg"
          />
        </div>
      </div>
    </div>
  );
};

EarlyRideBooking.propTypes = {
  className: PropTypes.string,
};

export default EarlyRideBooking;
