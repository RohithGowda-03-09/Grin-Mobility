import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`benefits-title-wrapper ${className}`}>
      <div className="benefits-title">
        <div className="benefits-sub-title">
          <div className="why-title">
            <div className="why-title-child" />
            <h1 className="why-with-us-whats-container">
              <p className="why-with-us">Why with us?</p>
              <p className="why-with-us">What’s your benifit?</p>
            </h1>
          </div>
        </div>
        <div className="driver-quote">
          <div className="driver-quote-child" />
          <div className="driver-quote-item" />
          <div className="drive-with-grin-container">
            <p className="why-with-us">
              Drive with Grin mobility and be the driver of real change!
            </p>
            <p className="why-with-us">{`Behind the wheel of emission-free EVs, `}</p>
            <p className="why-with-us">{`our driver-partners play a pivotal role in creating a sustainable future. `}</p>
            <p className="why-with-us">{`Enjoy the perks of no asset ownership, weekly payouts & enticing incentives.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
