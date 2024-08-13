import PropTypes from "prop-types";
import "./Component2.css";

const Component2 = ({ className = "" }) => {
  return (
    <div className={`component-2 ${className}`}>
      <div className="component-2-child" />
      <div className="book-button">
        <div className="book">Book</div>
      </div>
      <div className="logo-city-rides">
        <img
          className="logo-removebg-preview-2-icon"
          loading="lazy"
          alt=""
          src="/logoremovebgpreview-2@2x.png"
        />
        <h2 className="city-rides2">City Rides</h2>
        <h2 className="city-rides3">Airport Rides</h2>
      </div>
    </div>
  );
};

Component2.propTypes = {
  className: PropTypes.string,
};

export default Component2;
