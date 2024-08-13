import FrameComponent from "../../FrameComponent";
import PropTypes from "prop-types";
import "./Styles.scss";

const BenefitsCard = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent21 ${className}`}>
      <div className="frame-child28" />
      <FrameComponent
        fluentpeopleStar32Regular="/fluentpeoplestar32regular.svg"
        inSearchFor="In search for"
        sustainableCommuters="Sustainable commuters"
      />
      <FrameComponent
        fluentpeopleStar32Regular="/arcticonsrecyclelocation.svg"
        propFlex="unset"
        propMinWidth="unset"
        propAlignSelf="unset"
        inSearchFor="Covering"
        sustainableCommuters="Geo Locations"
        propTextAlign="center"
      />
      <FrameComponent
        fluentpeopleStar32Regular="/carbonenergyrenewable.svg"
        propFlex="unset"
        propMinWidth="unset"
        propAlignSelf="unset"
        inSearchFor="Sustaining"
        sustainableCommuters="Carbon emission"
        propTextAlign="left"
      />
    </div>
  );
};

BenefitsCard.propTypes = {
  className: PropTypes.string,
};

export default BenefitsCard;
