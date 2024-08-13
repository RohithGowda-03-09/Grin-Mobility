import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Styles.scss";

const FooterColumn = ({
  className = "",
  footerTitle,
  propMinWidth,
  features,
  propMinWidth1,
  propTextDecoration,
  pricing,
  propTextDecoration1,
  propMinWidth2,
  caseStudies,
  propMinWidth3,
  propTextDecoration2,
  reviews,
  propMinWidth4,
  updates,
  propMinWidth5,
}) => {
  const footerTitleStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const featuresStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      textDecoration: propTextDecoration,
    };
  }, [propMinWidth1, propTextDecoration]);

  const pricingStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
      minWidth: propMinWidth2,
    };
  }, [propTextDecoration1, propMinWidth2]);

  const caseStudiesStyle = useMemo(() => {
    return {
      minWidth: propMinWidth3,
      textDecoration: propTextDecoration2,
    };
  }, [propMinWidth3, propTextDecoration2]);

  const reviewsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth4,
    };
  }, [propMinWidth4]);

  const updatesStyle = useMemo(() => {
    return {
      minWidth: propMinWidth5,
    };
  }, [propMinWidth5]);

  return (
    <div className={`footer-column ${className}`}>
      <b className="footer-title3" style={footerTitleStyle}>
        {footerTitle}
      </b>
      <div className="footer-links2">
        <div className="link">
          <div className="master-link">
            <img
              className="line-roundedpassword-icon"
              alt=""
              src="/line-roundedpassword.svg"
            />
            <div className="features" style={featuresStyle}>
              {features}
            </div>
            <img
              className="line-roundedpassword-icon"
              alt=""
              src="/line-roundedchevron-down.svg"
            />
          </div>
        </div>
        <div className="link">
          <div className="master-link">
            <img
              className="line-roundedpassword-icon"
              alt=""
              src="/line-roundedpassword.svg"
            />
            <a className="pricing" style={pricingStyle}>
              {pricing}
            </a>
            <img
              className="line-roundedpassword-icon"
              alt=""
              src="/line-roundedchevron-down.svg"
            />
          </div>
        </div>
        <div className="link">
          <div className="master-link">
            <img
              className="line-roundedpassword-icon"
              alt=""
              src="/line-roundedpassword.svg"
            />
            <div className="case-studies" style={caseStudiesStyle}>
              {caseStudies}
            </div>
            <img
              className="line-roundedpassword-icon"
              alt=""
              src="/line-roundedchevron-down.svg"
            />
          </div>
        </div>
        <div className="link">
          <div className="master-link">
            <img
              className="line-roundedpassword-icon"
              alt=""
              src="/line-roundedpassword.svg"
            />
            <div className="reviews" style={reviewsStyle}>
              {reviews}
            </div>
            <img
              className="line-roundedpassword-icon"
              alt=""
              src="/line-roundedchevron-down.svg"
            />
          </div>
        </div>
        <div className="link">
          <div className="master-link">
            <img
              className="line-roundedpassword-icon"
              alt=""
              src="/line-roundedpassword.svg"
            />
            <div className="updates" style={updatesStyle}>
              {updates}
            </div>
            <img
              className="line-roundedpassword-icon"
              alt=""
              src="/line-roundedchevron-down.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FooterColumn.propTypes = {
  className: PropTypes.string,
  footerTitle: PropTypes.string,
  features: PropTypes.string,
  pricing: PropTypes.string,
  caseStudies: PropTypes.string,
  reviews: PropTypes.string,
  updates: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propTextDecoration1: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propMinWidth3: PropTypes.any,
  propTextDecoration2: PropTypes.any,
  propMinWidth4: PropTypes.any,
  propMinWidth5: PropTypes.any,
};

export default FooterColumn;
