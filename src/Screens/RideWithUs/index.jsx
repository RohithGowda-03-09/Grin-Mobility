import NavBar from "../../components/NavBar"; 
import RideWithUsBenefits from "../../components/RideWithUs Components/RideWithUsBenifits";
import RideBooking from "../../components/RideWithUs Components/RideBooking";
import EarlyRideBooking from "../../components/RideWithUs Components/EarlyRideBooking";
import AirportBooking from "../../components/RideWithUs Components/AirportBooking";
import FooterColumn from "../../components/Footer";
import Link from "../../components/Footer/Links";
import "./Styles.scss";

const RideWithUs = () => {
  return (
    <div className="desktop-3">
      <div className="desktop-3-child" />
      <NavBar />
      <main className="content">
        <RideWithUsBenefits />
        <section className="rides-description">
          <div className="ride-details">
            <div className="ride-info">
              <h1 className="city-rides">City Rides</h1>
              <div className="zero-emission-rides">{`Zero emission rides between traffics & pollution`}</div>
            </div>
          </div>
          <RideBooking />
          <EarlyRideBooking />
          <div className="ride-details1">
            <div className="ride-info">
              <h1 className="airport-rides">Airport Rides</h1>
              <div className="zero-emission-rides">
                So you gonna fly? We will drop you till airport.
              </div>
            </div>
          </div>
          <AirportBooking />
          <div className="divider">
            <div className="divider1" />
          </div>
          <footer className="footer-content-wrapper">
            <div className="footer-content">
              <div className="footer-columns">
                <div className="footer-column-left">
                  <img
                    className="ev12-icon"
                    loading="lazy"
                    alt=""
                    src="/ev12@2x.png"
                  />
                </div>
                <div className="copyright-social">
                  <div className="copyright">
                    <p className="drive-your-dream">
                      Drive your dream with our exclusive
                    </p>
                    <p className="drive-your-dream">
                      deals. For a sustainable future.
                    </p>
                  </div>
                  <div className="social-icons">
                    <div className="social-media-icon-squarefaceb">
                      <div className="social-media-icon" />
                      <img
                        className="facebook-icon"
                        loading="lazy"
                        alt=""
                        src="/facebook.svg"
                      />
                    </div>
                    <div className="twitter-you-tube">
                      <div className="social-media-icon-squaretwitt">
                        <div className="social-media-icon1" />
                        <img
                          className="twitter-icon"
                          loading="lazy"
                          alt=""
                          src="/twitter.svg"
                        />
                      </div>
                    </div>
                    <img
                      className="social-media-icon-squareinsta"
                      loading="lazy"
                      alt=""
                      src="/social-media-icon-squareinstagram@2x.png"
                    />
                    <div className="social-media-icon-squarelinke">
                      <div className="social-media-icon2" />
                      <img
                        className="linkedin-icon"
                        loading="lazy"
                        alt=""
                        src="/linkedin.svg"
                      />
                    </div>
                    <div className="twitter-you-tube1">
                      <div className="social-media-icon-squareyoutu">
                        <div className="social-media-icon3" />
                        <img
                          className="youtube-icon"
                          loading="lazy"
                          alt=""
                          src="/youtube.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-links">
                <div className="footer-links1">
                  <FooterColumn
                    footerTitle="Product"
                    propMinWidth="79px"
                    features="Features"
                    propMinWidth1="72px"
                    propTextDecoration="unset"
                    pricing="Pricing"
                    propTextDecoration1="none"
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
                    propTextDecoration="none"
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
              <div className="contact-info">
                <div className="contact-content">
                  <b className="footer-title">Contacts us</b>
                  <div className="contact-links">
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
                    <div className="spacer-description">
                      <img
                        className="spacer-icon-wrapper"
                        loading="lazy"
                        alt=""
                        src="/spacer-icon-wrapper.svg"
                      />
                      <div className="footer-description">Bangalore</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
      <div className="line-parent">
        <div className="frame-child" />
        <div className="footer-end">
          <div className="footer-end1">
            <div className="footer-left">Copyright © grinmobilty</div>
            <div className="footer-right">
              <span>{`All Rights Reserved | `}</span>
              <span className="terms-and-conditions">Terms and Conditions</span>
              <span>{` | `}</span>
              <span className="terms-and-conditions">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideWithUs;
