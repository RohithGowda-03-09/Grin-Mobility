import { useMemo } from "react";
import MasterLink from "../../MasterLink";
import PropTypes from "prop-types";
import "./Styles.scss";

const Link = ({
  className = "",
  propAlignSelf,
  lineRoundedPhone,
  linkItem,
}) => {
  const linkStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={`link5 ${className}`} style={linkStyle}>
      <MasterLink lineRoundedPhone={lineRoundedPhone} linkItem={linkItem} />
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  lineRoundedPhone: PropTypes.string,
  linkItem: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
};

export default Link;
