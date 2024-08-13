import NameField from "../components/NameField";
import FrameComponent2 from "../components/FrameComponent2";
import Investment from "../components/Investment";
import DocumentsSubTitle from "../components/DocumentsSubTitle";
import DocumentTypes from "../components/DocumentTypes";
import FooterColumn from "../components/Footer";
import Link from "../components/Footer/Links";
import "./Desktop3.css";

const Desktop3 = () => {
  return (
    <div className="desktop-5">
      <img className="mask-group-icon" alt="" src="/mask-group1@2x.png" />
      <div className="desktop-5-child" />
      <main className="user-form">
        <NameField />
        <FrameComponent2 />
        <Investment />
        <section className="documents">
          <div className="document-process">
            <div className="document-description">
              <DocumentsSubTitle />
            </div>
            <div className="after-receiving-the-container">
              <p className="after-receiving-the">
                After receiving the required documents,
              </p>
              <p className="after-receiving-the">
                we conduct a thorough background verification prior to
                onboarding.
              </p>
            </div>
          </div>
        </section>
        <DocumentTypes propFlex="unset" propWidth="1230px" />
        <div className="divider-wrapper">
          <div className="divider2" />
        </div>
        <footer className="footer">
          <div className="footer-content1">
            <div className="footer-top">
              <div className="ev12-wrapper">
                <img
                  className="ev12-icon1"
                  loading="lazy"
                  alt=""
                  src="/ev12@2x.png"
                />
              </div>
              <div className="copyright-social1">
                <div className="copyright1">
                  <p className="after-receiving-the">
                    Drive your dream with our exclusive
                  </p>
                  <p className="after-receiving-the">
                    deals. For a sustainable future.
                  </p>
                </div>
                <div className="social-media">
                  <div className="social-media-icon-squarefaceb1">
                    <div className="social-media-icon4" />
                    <img
                      className="facebook-icon1"
                      loading="lazy"
                      alt=""
                      src="/facebook.svg"
                    />
                  </div>
                  <div className="twitter-you-tube2">
                    <div className="social-media-icon-squaretwitt1">
                      <div className="social-media-icon5" />
                      <img
                        className="twitter-icon1"
                        loading="lazy"
                        alt=""
                        src="/twitter.svg"
                      />
                    </div>
                  </div>
                  <img
                    className="social-media-icon-squareinsta1"
                    loading="lazy"
                    alt=""
                    src="/social-media-icon-squareinstagram@2x.png"
                  />
                  <div className="social-media-icon-squarelinke1">
                    <div className="social-media-icon6" />
                    <img
                      className="linkedin-icon1"
                      loading="lazy"
                      alt=""
                      src="/linkedin.svg"
                    />
                  </div>
                  <div className="twitter-you-tube3">
                    <div className="social-media-icon-squareyoutu1">
                      <div className="social-media-icon7" />
                      <img
                        className="youtube-icon1"
                        loading="lazy"
                        alt=""
                        src="/youtube.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-navigation">
              <div className="columns">
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
            <div className="contact">
              <div className="content1">
                <b className="footer-title1">Contacts us</b>
                <div className="details">
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
                  <div className="description">
                    <img
                      className="spacer-icon-wrapper1"
                      loading="lazy"
                      alt=""
                      src="/spacer-icon-wrapper.svg"
                    />
                    <div className="footer-description1">Bangalore</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <div className="line-group">
        <div className="frame-item" />
        <div className="content2">
          <div className="footer-left-parent">
            <div className="footer-left1">Copyright © grinmobilty</div>
            <div className="footer-right1">
              <span>{`All Rights Reserved | `}</span>
              <span className="terms-and-conditions1">
                Terms and Conditions
              </span>
              <span>{` | `}</span>
              <span className="terms-and-conditions1">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop3;
