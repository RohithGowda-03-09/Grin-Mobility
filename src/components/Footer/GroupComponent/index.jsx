import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Styles.scss";

const GroupComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onRideWithUsClick = useCallback(() => {
    navigate("/RideWithUs");
  }, [navigate]);

  const onDriveWithUsClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  return (
    <header className={`group-header ${className}`}>
      <div className="frame-child31" />
      <div className="image-container">
        <img
          className="image-2-icon2"
          loading="lazy"
          alt=""
          src="/image-2@2x.png"
        />
      </div>
      <div className="cta-options-wrapper">
        <div className="cta-options">
          <div className="home-button">
            <a className="home2">Home</a>
            <div className="home-button-child" />
          </div>
          <div className="cta-buttons">
            <a className="ride-with-us2" onClick={onRideWithUsClick}>
              Ride with us
            </a>
          </div>
          <div className="cta-buttons">
            <a className="drive-with-us3" onClick={onDriveWithUsClick}>
              Drive with us
            </a>
          </div>
          <div className="cta-buttons">
            <a className="lets-charge2">Let’s charge</a>
          </div>
        </div>
      </div>
      <button className="rectangle-parent24">
        <div className="frame-child32" />
        <a className="download-app2">Download App</a>
      </button>
    </header>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
