import FooterColumn from "../components/Footer";
import Link from "../components/Footer/Links";
import PropTypes from "prop-types";
import "./FooterTop.css";

const FooterTop = ({ className = "" }) => {
  return (
    <footer className={`footer-top1 ${className}`}>
      <div className="divider4" />
      <div className="footer-content4">
        <div className="footer-items">
          <div className="footer-logo">
            <div className="ev12-frame">
              <img
                className="ev12-icon4"
                loading="lazy"
                alt=""
                src="/ev12@2x.png"
              />
            </div>
            <div className="copyright-parent">
              <div className="copyright3">
                <p className="drive-your-dream3">
                  Drive your dream with our exclusive
                </p>
                <p className="drive-your-dream3">
                  deals. For a sustainable future.
                </p>
              </div>
              <div className="social-icons2">
                <div className="social-media-icon-squarefaceb3">
                  <div className="social-media-icon12" />
                  <img
                    className="facebook-icon3"
                    loading="lazy"
                    alt=""
                    src="/facebook.svg"
                  />
                </div>
                <div className="social-media-icon-squaretwitt-wrapper">
                  <div className="social-media-icon-squaretwitt3">
                    <div className="social-media-icon13" />
                    <img
                      className="twitter-icon3"
                      loading="lazy"
                      alt=""
                      src="/twitter.svg"
                    />
                  </div>
                </div>
                <img
                  className="social-media-icon-squareinsta3"
                  loading="lazy"
                  alt=""
                  src="/social-media-icon-squareinstagram@2x.png"
                />
                <div className="social-media-icon-squarelinke3">
                  <div className="social-media-icon14" />
                  <img
                    className="linkedin-icon3"
                    loading="lazy"
                    alt=""
                    src="/linkedin.svg"
                  />
                </div>
                <div className="social-media-icon-squareyoutu-wrapper">
                  <div className="social-media-icon-squareyoutu3">
                    <div className="social-media-icon15" />
                    <img
                      className="youtube-icon3"
                      loading="lazy"
                      alt=""
                      src="/youtube.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-columns-container">
            <div className="footer-columns-wrapper">
              <FooterColumn
                footerTitle="Product"
                propMinWidth="79px"
                features="Features"
                propMinWidth1="72px"
                propTextDecoration="unset"
                pricing="Pricing"
                propTextDecoration1="unset"
                propMinWidth2="57px"
                caseStudies="Case studies"
                propMinWidth3="108px"
                propTextDecoration2="unset"
                reviews="Reviews"
                propMinWidth4="67px"
                updates="Updates"
                propMinWidth5="70px"
              />
              <FooterColumn
                footerTitle="Company"
                propMinWidth="94px"
                features="About"
                propMinWidth1="52px"
                propTextDecoration="unset"
                pricing="Contact us"
                propTextDecoration1="unset"
                propMinWidth2="92px"
                caseStudies="Careers"
                propMinWidth3="66px"
                propTextDecoration2="unset"
                reviews="Culture"
                propMinWidth4="62px"
                updates="Blog"
                propMinWidth5="36px"
              />
              <FooterColumn
                footerTitle="Support"
                propMinWidth="80px"
                features="Getting started"
                propMinWidth1="127px"
                propTextDecoration="unset"
                pricing="Help center"
                propTextDecoration1="unset"
                propMinWidth2="98px"
                caseStudies="Server status"
                propMinWidth3="110px"
                propTextDecoration2="unset"
                reviews="Report a bug"
                propMinWidth4="108px"
                updates="Chat support"
                propMinWidth5="111px"
              />
            </div>
          </div>
          <div className="contact-info-container">
            <div className="contact-info-wrapper">
              <b className="footer-title4">Contacts us</b>
              <div className="contact-links1">
                <Link
                  propAlignSelf="stretch"
                  lineRoundedPhone="/line-roundedemail.svg"
                  linkItem="contact@grinmobilty.com"
                />
                <Link
                  propAlignSelf="unset"
                  lineRoundedPhone="/line-roundedphone.svg"
                  linkItem="(414) 687 - 5892"
                />
                <div className="spacer-description-wrapper">
                  <img
                    className="spacer-icon-wrapper3"
                    loading="lazy"
                    alt=""
                    src="/spacer-icon-wrapper.svg"
                  />
                  <div className="footer-description3">Bangalore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterTop.propTypes = {
  className: PropTypes.string,
};

export default FooterTop;
