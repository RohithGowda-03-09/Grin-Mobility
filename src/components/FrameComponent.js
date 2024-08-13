import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  fluentpeopleStar32Regular,
  propFlex,
  propMinWidth,
  propAlignSelf,
  inSearchFor,
  sustainableCommuters,
  propTextAlign,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const sustainableCommutersStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className={`rectangle-parent20 ${className}`}>
      <div className="frame-child27" />
      <div className="sustainability-icons">
        <div className="sustainability-icons-child" />
        <img
          className="fluentpeople-star-32-regular-icon"
          loading="lazy"
          alt=""
          src={fluentpeopleStar32Regular}
        />
      </div>
      <div className="frame-wrapper1" style={frameDivStyle}>
        <div className="frame-parent1" style={frameDiv1Style}>
          <div className="in-search-for-wrapper">
            <h2 className="in-search-for">{inSearchFor}</h2>
          </div>
          <div
            className="sustainable-commuters"
            style={sustainableCommutersStyle}
          >
            {sustainableCommuters}
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  fluentpeopleStar32Regular: PropTypes.string,
  inSearchFor: PropTypes.string,
  sustainableCommuters: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propTextAlign: PropTypes.any,
};

export default FrameComponent;
