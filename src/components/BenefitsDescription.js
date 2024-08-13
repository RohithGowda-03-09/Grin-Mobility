import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BenefitsDescription.css";

const BenefitsDescription = ({
  className = "",
  propFlex,
  propWidth,
  propFlex1,
  propWidth1,
  uil0Plus,
  propAlignSelf,
  propAlignSelf1,
  zeroInvestment,
  propTextAlign,
  propAlignSelf2,
  weTakeCareOfAssetRelated,
  expensesZeroLiabilityForY,
}) => {
  const benefitsDescriptionStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  const benefitsListStyle = useMemo(() => {
    return {
      flex: propFlex1,
      width: propWidth1,
    };
  }, [propFlex1, propWidth1]);

  const frameDiv2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const zeroInvestmentStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const weTakeCareContainerStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
      alignSelf: propAlignSelf2,
    };
  }, [propTextAlign, propAlignSelf2]);

  return (
    <div
      className={`benefits-description ${className}`}
      style={benefitsDescriptionStyle}
    >
      <div className="benefits-description-child" />
      <div className="benefits-list-wrapper">
        <div className="benefits-list" style={benefitsListStyle}>
          <div className="benefit-one">
            <div className="benefit-one-child" />
            <img
              className="uil0-plus-icon"
              loading="lazy"
              alt=""
              src={uil0Plus}
            />
          </div>
        </div>
      </div>
      <div className="zero-investment-parent" style={frameDiv2Style}>
        <div className="zero-investment" style={zeroInvestmentStyle}>
          <div className="zero-investment1">{zeroInvestment}</div>
        </div>
        <div
          className="we-take-care-container"
          style={weTakeCareContainerStyle}
        >
          <p className="we-take-care">{weTakeCareOfAssetRelated}</p>
          <p className="we-take-care">{expensesZeroLiabilityForY}</p>
        </div>
      </div>
    </div>
  );
};

BenefitsDescription.propTypes = {
  className: PropTypes.string,
  uil0Plus: PropTypes.string,
  zeroInvestment: PropTypes.string,
  weTakeCareOfAssetRelated: PropTypes.string,
  expensesZeroLiabilityForY: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propWidth: PropTypes.any,
  propFlex1: PropTypes.any,
  propWidth1: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propTextAlign: PropTypes.any,
  propAlignSelf2: PropTypes.any,
};

export default BenefitsDescription;
