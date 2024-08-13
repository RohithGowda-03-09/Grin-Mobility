import { useMemo } from "react";
import PropTypes from "prop-types";
import "./DocumentTypes.css";

const DocumentTypes = ({ className = "", propFlex, propWidth }) => {
  const documentListStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  return (
    <div className={`document-types ${className}`}>
      <div className="document-list" style={documentListStyle}>
        <div className="document-row-one">
          <div className="document-row-two">
            <div className="license-row">
              <div className="license-title">
                <div className="license-title-child" />
                <div className="valid-driving-licenses-container">
                  <p className="valid-driving">{`Valid Driving `}</p>
                  <p className="valid-driving">{`Licenses `}</p>
                </div>
              </div>
            </div>
            <div className="license-placeholder">
              <div className="license-placeholder-child" />
              <b className="item-one-symbol">1</b>
            </div>
          </div>
          <div className="document-items-one">
            <div className="license-title-child" />
            <div className="document-item-one">
              <div className="license-placeholder-child" />
              <b className="item-one-symbol">2</b>
            </div>
            <div className="document-item-two">
              <div className="valid-driving-licenses-container">
                Aadhar Card
              </div>
            </div>
          </div>
          <div className="document-items-one">
            <div className="license-title-child" />
            <div className="rectangle-parent28">
              <div className="license-placeholder-child" />
              <b className="item-one-symbol">3</b>
            </div>
            <div className="current-permanent-address-pr-wrapper">
              <div className="valid-driving-licenses-container">
                <p className="valid-driving">{`Current & Permanent`}</p>
                <p className="valid-driving">Address Proof</p>
              </div>
            </div>
          </div>
        </div>
        <div className="document-row-three">
          <div className="document-items-two">
            <div className="document-items-three">
              <div className="license-title-child" />
              <div className="document-item-three">
                <div className="license-placeholder-child" />
                <b className="item-one-symbol">4</b>
              </div>
              <div className="current-permanent-address-pr-wrapper">
                <div className="valid-driving-licenses-container">
                  <p className="valid-driving">One Reference</p>
                  <p className="valid-driving">Details</p>
                </div>
              </div>
            </div>
            <div className="document-items-three">
              <div className="license-title-child" />
              <div className="rectangle-parent29">
                <div className="license-placeholder-child" />
                <b className="item-one-symbol">5</b>
              </div>
              <div className="document-item-two">
                <div className="valid-driving-licenses-container">
                  Bank Details
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DocumentTypes.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propWidth: PropTypes.any,
};

export default DocumentTypes;
