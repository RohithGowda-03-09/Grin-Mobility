import RideOptions from "../RideOptions";
import PropTypes from "prop-types";
import "./Styles.scss";

const RideWithUsBenefits = ({ className = "" }) => {
  return (
    <section className={`experience-options-wrapper ${className}`}>
      <div className="experience-options">
        <div className="experience-types">
          <div className="experience-list">
            <h2 className="riding-experience-like-container">
              <p className="riding-experience">{`Riding Experience `}</p>
              <p className="riding-experience">Like Never Before</p>
            </h2>
            <div className="choose-title">
              <div className="choose-between-these">Choose Between These</div>
            </div>
            <div className="rides">
              <div className="rectangle-parent1">
                <div className="frame-child4" />
                <input
                  className="city-rides1"
                  placeholder="City Rides"
                  type="text"
                />
                <div className="ride-icons">
                  <img
                    className="icround-arrow-back-icon1"
                    alt=""
                    src="/icroundarrowback.svg"
                  />
                </div>
              </div>
              <RideOptions rentalRides="Rental Rides" />
              <RideOptions rentalRides="Airport Rides" />
            </div>
          </div>
          <div className="vehicle">
            <div className="vehicle-image">
              <img
                className="mask-group-icon1"
                alt=""
                src="/mask-group@2x.png"
              />
              <img
                className="vehicle-image-child"
                loading="lazy"
                alt=""
                src="/group-39474.svg"
              />
            </div>
          </div>
        </div>
        <div className="pricing-items-group">
          <div className="pricing-items3">
            <div className="pricing-items-child2" />
            <div className="reiable-pricing1">Reiable Pricing</div>
            <img
              className="pricing-items-child3"
              loading="lazy"
              alt=""
              src="/group-39472.svg"
            />
          </div>
          <div className="pricing-items4">
            <div className="pricing-items-child4" />
            <div className="reiable-pricing1">Zero emission</div>
            <img
              className="pricing-items-child5"
              loading="lazy"
              alt=""
              src="/group-39472.svg"
            />
          </div>
          <div className="pricing-items5">
            <div className="pricing-items-child4" />
            <div className="reiable-pricing1">Zero Cancellation</div>
            <img
              className="pricing-items-child7"
              loading="lazy"
              alt=""
              src="/group-39472.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

RideWithUsBenefits.propTypes = {
  className: PropTypes.string,
};

export default RideWithUsBenefits;
