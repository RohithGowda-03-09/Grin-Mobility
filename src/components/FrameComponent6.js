import PropTypes from "prop-types";
import "./FrameComponent6.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
const homePageDriversBenefits = ({ className = "" }) => {
  const navigate = useNavigate()
  const onDriveWithUsClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);
  return (
    <div className={`community-content-parent ${className}`}>
      <div className="community-content">
        <div className="join-the-grin">
          Join the Grin community and unlock a world of opportunities by being a
          valued driver-partner.
        </div>
        <div className="benefit-icons-parent">
          <div className="benefit-icons">
            <div className="icon-labels">
              <div className="icon-labels-child" />
              <img
                className="coin-icon"
                loading="lazy"
                alt=""
                src="/coin.svg"
              />
            </div>
            <div className="icon-labels">
              <div className="icon-labels-child" />
              <img
                className="coin-icon"
                loading="lazy"
                alt=""
                src="/time.svg"
              />
            </div>
            <div className="icon-labels">
              <div className="icon-labels-child" />
              <img
                className="coin-icon"
                loading="lazy"
                alt=""
                src="/zerowaste.svg"
              />
            </div>
          </div>
          <div className="payout-details-wrapper">
            <div className="payout-details">
              <div className="weekly-payouts">{`Weekly Payouts & Bonus`}</div>
              <div className="weekly-payouts">Flexible working hours</div>
              <div className="weekly-payouts">Zero ownership cost</div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-3-parent">
        <img className="image-3-icon" alt="" src="/image-3@2x.png" />
        <button className="rectangle-parent22" onClick={onDriveWithUsClick} >
          <div className="frame-child29" />
          <div className="apply" >Apply</div>
        </button>
      </div>
    </div>
  );
};

homePageDriversBenefits.propTypes = {
  className: PropTypes.string,
};

export default homePageDriversBenefits;
