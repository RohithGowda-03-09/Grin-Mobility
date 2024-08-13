import Component2 from "../../Component2";
import Component1 from "../../Component1";
import Component from "../../Component";
import PropTypes from "prop-types";
import "./Styles.scss";

const HomePageServiceCards = ({ className = "" }) => {
  return (
    <div className={`booking-content-wrapper ${className}`}>
      <div className="booking-content">
        <Component2 />
        <div className="hourly-rental">
          <div className="layer-1" />
          <Component1 />
        </div>
        <Component />
      </div>
    </div>
  );
};

HomePageServiceCards.propTypes = {
  className: PropTypes.string,
};

export default HomePageServiceCards;
