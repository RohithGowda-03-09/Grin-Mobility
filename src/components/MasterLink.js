import { useMemo } from "react";
import PropTypes from "prop-types";
import "./MasterLink.css";

const MasterLink = ({
  className = "",
  propFlex,
  lineRoundedPhone,
  linkItem,
}) => {
  const masterLinkStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={`master-link5 ${className}`} style={masterLinkStyle}>
      <img
        className="line-roundedphone-icon"
        loading="lazy"
        alt=""
        src={lineRoundedPhone}
      />
      <div className="link-item">{linkItem}</div>
      <img
        className="line-roundedchevron-down5"
        alt=""
        src="/line-roundedchevron-down.svg"
      />
    </div>
  );
};

MasterLink.propTypes = {
  className: PropTypes.string,
  lineRoundedPhone: PropTypes.string,
  linkItem: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
};

export default MasterLink;
