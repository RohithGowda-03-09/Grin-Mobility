import PropTypes from "prop-types";
import "./Styles.scss";

const AirportBooking = ({ className = "" }) => {
  return (
    <div className={`airport-details-wrapper ${className}`}>
      <div className="airport-details">
        <div className="airport-locations">
          <div className="rectangle-parent9">
            <div className="frame-child15" />
            <div className="from-to">
              <div className="from">From :</div>
              <div className="select-your-airport">Select your Airport</div>
            </div>
            <div className="location-controls-airport">
              <img
                className="iconamoonarrow-up-22"
                alt=""
                src="/iconamoonarrowup2-2.svg"
              />
            </div>
          </div>
          <div className="airport-locations-inner">
            <img
              className="frame-child16"
              loading="lazy"
              alt=""
              src="/group-39489.svg"
            />
          </div>
          <div className="rectangle-parent10">
            <div className="frame-child15" />
            <div className="to-parent">
              <div className="to">To :</div>
              <div className="select-your-airport">Current Location</div>
            </div>
            <div className="change-wrapper">
              <div className="change1">Change</div>
            </div>
          </div>
        </div>
        <div className="pnr-details">
          <div className="rectangle-parent11">
            <div className="frame-child18" />
            <div className="pnr">PNR :</div>
            <input
              className="enter-your-pnr"
              placeholder="Enter your PNR here"
              type="text"
            />
          </div>
          <div className="remove-background">
            <img
              className="removebg-preview-1-icon"
              loading="lazy"
              alt=""
              src="/31202removebgpreview-1@2x.png"
            />
            <div className="book-ride-button">
              <button className="rectangle-parent12">
                <div className="frame-child19" />
                <div className="book-ride1">Book Ride</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AirportBooking.propTypes = {
  className: PropTypes.string,
};

export default AirportBooking;
