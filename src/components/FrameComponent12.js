import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent12.css";

const FrameComponent12 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRideWithUsClick = useCallback(() => {
    navigate("/RideWithUs");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  return (
    <section className={`frame-section ${className}`}>
      <header className="rectangle-parent25">
        <div className="frame-child33" />
        <div className="image-2-wrapper">
          <img
            className="image-2-icon3"
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
        </div>
        <div className="frame-wrapper2">
          <div className="home-title-parent">
            <div className="home-title">
              <a className="home3" onClick={onHomeTextClick}>
                Home
              </a>
              <a className="ride-with-us3" onClick={onRideWithUsClick}>
                Ride with us
              </a>
            </div>
            <div className="frame-parent2">
              <div className="drive-with-us-parent">
                <a className="drive-with-us4">Drive with us</a>
                <div className="frame-child34" />
              </div>
              <a className="lets-charge3">Let’s charge</a>
            </div>
          </div>
        </div>
        <button className="rectangle-parent26">
          <div className="frame-child35" />
          <a className="download-app3">Download App</a>
        </button>
      </header>
      <div className="be-driver-content-wrapper">
        <div className="be-driver-content">
          <div className="be-driver-content-inner">
            <div className="be-a-part-of-our-family-drive-parent">
              <h1 className="be-a-part-container1">
                <p className="be-a-part1">Be a part of our family</p>
                <p className="be-a-part1">Drive with us</p>
              </h1>
              <button
                className="rectangle-parent27"
                onClick={onGroupButtonClick}
              >
                <div className="frame-child36" />
                <div className="apply-to-drive2">Apply to Drive</div>
              </button>
            </div>
          </div>
          <img
            className="mask-group-icon2"
            loading="lazy"
            alt=""
            src="/mask-group1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent12.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent12;
