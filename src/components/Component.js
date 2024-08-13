import PropTypes from "prop-types";
import "./Component.css";

const Component = ({ className = "" }) => {
  return (
    <div className={`component-3 ${className}`}>
      <div className="component-3-child" />
      <div className="book-wrapper">
        <div className="book1">Book</div>
      </div>
      <div className="logo-removebg-preview-2-wrapper">
        <img
          className="logo-removebg-preview-2-icon2"
          alt=""
          src="/logoremovebgpreview-2@2x.png"
        />
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
