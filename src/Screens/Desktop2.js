import FrameComponent12 from "../components/FrameComponent12";
import BenefitsContent from "../components/BenefitsContent";
import FooterTop from "../components/FooterTop";
import "./Desktop2.css";

const Desktop2 = () => {
  return (
    <div className="desktop-4">
      <main className="frame-group">
        <FrameComponent12 />
        <section className="benefits-content-wrapper">
          <BenefitsContent />
        </section>
        <FooterTop />
      </main>
      <div className="frame-div">
        <div className="line-div" />
        <div className="copyright-container">
          <div className="copyright-wrapper">
            <div className="footer-left3">Copyright © grinmobilty</div>
            <div className="footer-right3">
              <span>{`All Rights Reserved | `}</span>
              <span className="terms-and-conditions3">
                Terms and Conditions
              </span>
              <span>{` | `}</span>
              <span className="terms-and-conditions3">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop2;
