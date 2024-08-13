import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Styles.scss";

const NavBar = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDriveWithUsClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  return (
    <header className={`rectangle-parent ${className}`}>
      <div className="frame-child1" />
      <div className="home-content">
        <div className="home-options">
          <img
            className="image-2-icon"
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
          <div className="home-charge-wrapper">
            <div className="home-charge">
              <div className="charge-title">
                <a className="home" onClick={onHomeTextClick}>
                  Home
                </a>
              </div>
              <div className="ride-drive">
                <div className="ride-us">
                  <a className="ride-with-us">Ride with us</a>
                  <div className="ride-background" />
                </div>
                <div className="drive-us">
                  <a className="drive-with-us" onClick={onDriveWithUsClick}>
                    Drive with us
                  </a>
                </div>
              </div>
              <div className="charge-title">
                <a className="lets-charge">Let’s charge</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="rectangle-group">
        <div className="frame-child2" />
        <a className="download-app">Download App</a>
      </button>
    </header>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
};

export default NavBar;
