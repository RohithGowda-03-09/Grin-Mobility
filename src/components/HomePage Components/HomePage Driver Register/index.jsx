import PropTypes from "prop-types";
import "./Styles.scss";

const HomePageDriverRegistration = ({ className = "" }) => {
  return (
    <section className={`partner-content-parent ${className}`}>
      <div className="partner-content">
        <div className="partner-content-child" />
        <h2 className="become-our-valued">
          Become our valued partner in sculpting the nation's most dynamic and
          unstoppable EV ecosystem while promoting sustainability for a better
          future
        </h2>
      </div>
      <div className="register-content-wrapper">
        <div className="register-content">
          <div className="register-content-child" />
          <button className="register-content-inner">
            <button className="rectangle-parent23">
              <div className="frame-child30" />
              <div className="register">Register</div>
            </button>
          </button>
          <img
            className="httpslottiefilescomanimat-icon"
            loading="lazy"
            alt=""
            src="/httpslottiefilescomanimationsfirstelectricbatterywasinventedbycountalessandrovoltamswhpt77jj@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

HomePageDriverRegistration.propTypes = {
  className: PropTypes.string,
};

export default HomePageDriverRegistration;
