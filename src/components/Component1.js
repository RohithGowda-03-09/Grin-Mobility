import PropTypes from "prop-types";
import "./Component1.css";

const Component1 = ({ className = "" }) => {
  return (
    <div className={`component-1 ${className}`}>
      <div className="component-1-child" />
      <div className="hourly-label">
        <div className="hourly">Hourly</div>
      </div>
      <div className="rental-label">
        <h2 className="rental-rides2">Rental Rides</h2>
        <img
          className="logo-removebg-preview-2-icon1"
          alt=""
          src="/logoremovebgpreview-2@2x.png"
        />
      </div>
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
};

export default Component1;
