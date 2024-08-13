import PropTypes from "prop-types";
import "./Styles.scss";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Introduction = ({ className = "" }) => {
  const navigate = useNavigate();
  const onRideWithUsClick = useCallback(() => {
    navigate("/RideWithUs");
  }, [navigate]);

  return (
    <section className={`frame-container ${className}`}>
      <div className="rectangle-parent17">
        <div className="frame-child24" />
        <h1 className="drive-your-dreams-with-container">
          <p className="drive-your-dreams">DRIVE YOUR DREAMS</p>
          <p className="drive-your-dreams">WITH OUR EXCLUSIVE DEALS</p>
        </h1>
        <h2 className="for-a-sustainable">For a sustainable future</h2>
      </div>
      <div className="frame-wrapper">
        <div className="rectangle-parent18">
          <div className="frame-child25" />
          <img
            className="ev12-icon3"
            loading="lazy"
            alt=""
            src="/ev121@2x.png"
          />
          <button className="rectangle-parent19" onClick={onRideWithUsClick} >
            <div className="frame-child26" />
            <div className="get-started" >
              Get Started
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

Introduction.propTypes = {
  className: PropTypes.string,
};

export default Introduction;
