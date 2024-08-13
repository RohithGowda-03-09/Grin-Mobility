import PropTypes from "prop-types";
import "./DocumentsSubTitle.css";

const DocumentsSubTitle = ({ className = "" }) => {
  return (
    <div className={`documents-sub-title ${className}`}>
      <div className="required-title">
        <h1 className="required-documents">Required Documents</h1>
      </div>
      <div className="ellipse-parent">
        <div className="ellipse-div" />
        <b className="b">5</b>
      </div>
    </div>
  );
};

DocumentsSubTitle.propTypes = {
  className: PropTypes.string,
};

export default DocumentsSubTitle;
