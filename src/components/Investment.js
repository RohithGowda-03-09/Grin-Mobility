import BenefitsDescription from "./BenefitsDescription";
import PropTypes from "prop-types";
import "./Investment.css";

const Investment = ({ className = "" }) => {
  return (
    <section className={`investment ${className}`}>
      <div className="investment-icons">
        <BenefitsDescription
          propFlex="unset"
          propWidth="390px"
          propFlex1="1"
          propWidth1="unset"
          uil0Plus="/uil0plus.svg"
          propAlignSelf="unset"
          propAlignSelf1="unset"
          zeroInvestment="Zero Investment"
          propTextAlign="left"
          propAlignSelf2="unset"
          weTakeCareOfAssetRelated="We take care of asset related "
          expensesZeroLiabilityForY="expenses, zero liability for you"
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
    </section>
  );
};

Investment.propTypes = {
  className: PropTypes.string,
};

export default Investment;
