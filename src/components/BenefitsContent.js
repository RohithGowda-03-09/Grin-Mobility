import FrameComponent2 from "./FrameComponent2";
import BenefitsDescription from "./BenefitsDescription";
import DocumentsSubTitle from "./DocumentsSubTitle";
import DocumentTypes from "./DocumentTypes";
import PropTypes from "prop-types";
import "./BenefitsContent.css";

const BenefitsContent = ({ className = "" }) => {
  return (
    <div className={`benefits-content ${className}`}>
      <FrameComponent2 />
      <div className="benefits-icons">
        <div className="icon-row-one">
          <div className="icon-row-two" />
          <BenefitsDescription
            uil0Plus="/uil0plus.svg"
            zeroInvestment="Zero Investment"
            weTakeCareOfAssetRelated="We take care of asset related "
            expensesZeroLiabilityForY="expenses, zero liability for you"
          />
        </div>
        <BenefitsDescription
          propFlex="unset"
          propWidth="390px"
          propFlex1="1"
          propWidth1="unset"
          uil0Plus="/solarwalletmoneyoutline.svg"
          propAlignSelf="unset"
          propAlignSelf1="unset"
          zeroInvestment="Weekly Payouts"
          propTextAlign="center"
          propAlignSelf2="unset"
          weTakeCareOfAssetRelated="Experience stable earnings with"
          expensesZeroLiabilityForY={`our fixed earnings & incentives`}
        />
        <BenefitsDescription
          propFlex="unset"
          propWidth="390px"
          propFlex1="unset"
          propWidth1="92px"
          uil0Plus="/fa6solidhandholdingmedical.svg"
          propAlignSelf="unset"
          propAlignSelf1="unset"
          zeroInvestment="Medical Insurance"
          propTextAlign="center"
          propAlignSelf2="unset"
          weTakeCareOfAssetRelated="Get medical insurance coverage of"
          expensesZeroLiabilityForY="Rs. 1 lakh"
        />
        <BenefitsDescription
          propFlex="unset"
          propWidth="390px"
          propFlex1="unset"
          propWidth1="92px"
          uil0Plus="/gameiconspaymoney.svg"
          propAlignSelf="stretch"
          propAlignSelf1="unset"
          zeroInvestment="Zero Ownership Cost"
          propTextAlign="center"
          propAlignSelf2="stretch"
          weTakeCareOfAssetRelated="Zero down payments, start driving "
          expensesZeroLiabilityForY="without any down payments"
        />
        <BenefitsDescription
          propFlex="unset"
          propWidth="390px"
          propFlex1="1"
          propWidth1="unset"
          uil0Plus="/tablersteeringwheel.svg"
          propAlignSelf="unset"
          propAlignSelf1="unset"
          zeroInvestment="Ease of Work"
          propTextAlign="center"
          propAlignSelf2="unset"
          weTakeCareOfAssetRelated="Enjoy flexible working "
          expensesZeroLiabilityForY="hours that will fit your schedule"
        />
        <BenefitsDescription
          propFlex="unset"
          propWidth="390px"
          propFlex1="1"
          propWidth1="unset"
          uil0Plus="/iconoirheadsethelp.svg"
          propAlignSelf="unset"
          propAlignSelf1="unset"
          zeroInvestment="Get Support 24X7"
          propTextAlign="center"
          propAlignSelf2="unset"
          weTakeCareOfAssetRelated="If there is anything you need,"
          expensesZeroLiabilityForY="You can reach us anytime"
        />
      </div>
      <div className="documents-content-wrapper">
        <div className="documents-content">
          <div className="documents-title">
            <DocumentsSubTitle />
          </div>
          <div className="after-receiving-the-container1">
            <p className="after-receiving-the1">
              After receiving the required documents,
            </p>
            <p className="after-receiving-the1">
              we conduct a thorough background verification prior to onboarding.
            </p>
          </div>
        </div>
      </div>
      <DocumentTypes />
    </div>
  );
};

BenefitsContent.propTypes = {
  className: PropTypes.string,
};

export default BenefitsContent;
