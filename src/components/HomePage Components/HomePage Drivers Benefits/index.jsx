import PropTypes from "prop-types";
import "./Styles.scss";
import applyNowImage from '../../../Assets/Images/image-3@2x.png'
const homePageDriversBenefits = ({ className = "" }) => {
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
        <img className="image-3-icon" alt="" src={applyNowImage} />
        <button className="rectangle-parent22">
          <div className="frame-child29" />
          <div className="apply">Apply</div>
        </button>
      </div>
    </div>
  );
};

homePageDriversBenefits.propTypes = {
  className: PropTypes.string,
};

export default homePageDriversBenefits;
