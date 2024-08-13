import PropTypes from "prop-types";
import "./Styles.scss";

const RideOptions = ({ className = "", rentalRides }) => {
  return (
    <div className={`rectangle-container ${className}`}>
      <div className="frame-child3" />
      <div className="rental-rides">{rentalRides}</div>
      <div className="icround-arrow-back-wrapper">
        <img
          className="icround-arrow-back-icon"
          alt=""
          src="/icroundarrowback.svg"
        />
      </div>
    </div>
  );
};

RideOptions.propTypes = {
  className: PropTypes.string,
  rentalRides: PropTypes.string,
};

export default RideOptions;
