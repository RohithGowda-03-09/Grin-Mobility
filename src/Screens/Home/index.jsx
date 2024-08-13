import Introduction from "../../components/HomePage Components/Introduction";
import BenefitsCard from "../../components/HomePage Components/Benifits Card";
import HomePageServiceCards from "../../components/HomePage Components/Service Crads";
import FrameComponent6 from "../../components/FrameComponent6"; // yet to convert
import HomePageDriverRegistration from "../../components/HomePage Components/HomePage Driver Register";
import FooterColumn from "../../components/Footer";
import Link from "../../components/Footer/Links";
import GroupComponent from "../../components/Footer/GroupComponent";
import "./Styles.scss";


const HomePage = () => {

  return (
    <div className="desktop-2">
      <img className="ev6-icon" alt="" src="/ev6@2x.png" />
      <img className="ev3-icon" alt="" src="/ev3@2x.png" />
      <Introduction />
      <section className="action-buttons-wrapper">
        <div className="action-buttons">
          <BenefitsCard />
          <div className="electric-rides-content-wrapper">
            <div className="electric-rides-content">
              <div className="electric-rides-header">
                <h1 className="electric-rides">
                  <p className="p">100%</p>
                  <p className="p">Electric Rides</p>
                </h1>
              </div>
              <h2 className="reliable-safe">{`Reliable, Safe & Premium`}</h2>
            </div>
          </div>
          <div className="pricing-items-parent">
            <div className="pricing-items">
              <div className="pricing-items-child" />
              <div className="reiable-pricing">Reiable Pricing</div>
              <img
                className="pricing-items-item"
                loading="lazy"
                alt=""
                src="/group-394721.svg"
              />
            </div>
            <div className="pricing-items1">
              <div className="pricing-items-inner" />
              <div className="reiable-pricing">Zero emission</div>
              <img
                className="group-icon"
                loading="lazy"
                alt=""
                src="/group-394721.svg"
              />
            </div>
            <div className="pricing-items2">
              <div className="pricing-items-inner" />
              <div className="reiable-pricing">Zero Cancellation</div>
              <img
                className="pricing-items-child1"
                loading="lazy"
                alt=""
                src="/group-394721.svg"
              />
            </div>
          </div>
          <HomePageServiceCards />
          <div className="apply-charge">
            <h1 className="apply-to-drive">Apply to Drive</h1>
          </div>
          <FrameComponent6 />
          <div className="apply-charge1">
            <h1 className="electric-rides">Charge your Grin</h1>
          </div>
        </div>
      </section>
      <HomePageDriverRegistration />
      <div className="divider-container">
        <div className="divider3" />
      </div>
      <footer className="footer1">
        <div className="footer-content2">
          <div className="frame-parent">
            <div className="ev12-container">
              <img className="ev12-icon2" alt="" src="/ev12@2x.png" />
            </div>
            <div className="copyright-social2">
              <div className="copyright2">
                <p className="p">Drive your dream with our exclusive</p>
                <p className="p">deals. For a sustainable future.</p>
              </div>
              <div className="social-icons1">
                <div className="social-media-icon-squarefaceb2">
                  <div className="social-media-icon8" />
                  <img
                    className="facebook-icon2"
                    loading="lazy"
                    alt=""
                    src="/facebook.svg"
                  />
                </div>
                <div className="twitter-you-tube4">
                  <div className="social-media-icon-squaretwitt2">
                    <div className="social-media-icon9" />
                    <img
                      className="twitter-icon2"
                      loading="lazy"
                      alt=""
                      src="/twitter.svg"
                    />
                  </div>
                </div>
                <img
                  className="social-media-icon-squareinsta2"
                  loading="lazy"
                  alt=""
                  src="/social-media-icon-squareinstagram@2x.png"
                />
                <div className="social-media-icon-squarelinke2">
                  <div className="social-media-icon10" />
                  <img
                    className="linkedin-icon2"
                    loading="lazy"
                    alt=""
                    src="/linkedin.svg"
                  />
                </div>
                <div className="twitter-you-tube5">
                  <div className="social-media-icon-squareyoutu2">
                    <div className="social-media-icon11" />
                    <img
                      className="youtube-icon2"
                      loading="lazy"
                      alt=""
                      src="/youtube.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-links-content-wrapper">
            <div className="footer-links-content">
              <FooterColumn
                footerTitle="Product"
                features="Features"
                pricing="Pricing"
                caseStudies="Case studies"
                reviews="Reviews"
                updates="Updates"
              />
              <FooterColumn
                footerTitle="Company"
                propMinWidth="94px"
                features="About"
                propMinWidth1="52px"
                propTextDecoration="none"
                pricing="Contact us"
                propTextDecoration1="none"
                propMinWidth2="92px"
                caseStudies="Careers"
                propMinWidth3="66px"
                propTextDecoration2="none"
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
          <div className="footer-address">
            <div className="address-content">
              <b className="footer-title2">Contacts us</b>
              <div className="contact-info1">
                <Link
                  propAlignSelf="stretch"
                  lineRoundedPhone="/line-roundedemail.svg"
                  linkItem="contact@grinmobilty.com"
                />
                <Link
                  lineRoundedPhone="/line-roundedphone.svg"
                  linkItem="(414) 687 - 5892"
                />
                <div className="description-container">
                  <img
                    className="spacer-icon-wrapper2"
                    loading="lazy"
                    alt=""
                    src="/spacer-icon-wrapper.svg"
                  />
                  <div className="footer-description2">Bangalore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="line-container">
        <div className="frame-inner" />
        <div className="footer-content-container">
          <div className="footer-content3">
            <div className="footer-left2">Copyright © grinmobilty</div>
            <div className="footer-right2">
              <span>{`All Rights Reserved | `}</span>
              <span className="terms-and-conditions2">
                Terms and Conditions
              </span>
              <span>{` | `}</span>
              <span className="terms-and-conditions2">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
      <GroupComponent />
    </div>
  );
};

export default HomePage;
