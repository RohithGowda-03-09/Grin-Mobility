import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "react-modal";
import "./NameField.css";

const NameField = ({ className = "" }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onSimpleLineIconscloseClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRideWithUsClick = useCallback(() => {
    navigate("/RideWithUs");
  }, [navigate]);
  const modalClose = () => {
    onSimpleLineIconscloseClick();
    closeModal();
  };
  return (
    <section className={`name-field ${className}`}>
      <header className="name-input">
        <div className="name-input-wrapper">
          <div className="name-input-wrapper-child" />
          <div className="name-input-inner-wrapper">
            <div className="name-input-container">
              <div className="name-input-box">
                <img
                  className="simple-line-iconsclose"
                  loading="lazy"
                  alt=""
                  src="/simplelineiconsclose.svg"
                  onClick={onSimpleLineIconscloseClick}
                />
              </div>
              <div className="name">Name</div>
            </div>
            <div className="placeholder">
              <div className="placeholder-child" />
              <input
                className="enter-you-name"
                placeholder="Enter you name"
                type="text"
              />
            </div>
          </div>
          <div className="phone-field">
            <div className="phone-number">Phone Number</div>
            <div className="phone-number-input">
              <div className="placeholder-child" />
              <input
                className="xxxxxxxxxx"
                placeholder="+91 XXXXXXXXXX"
                type="text"
              />
            </div>
          </div>
          <button
            className="rectangle-parent13"
            // onClick={onSimpleLineIconscloseClick}
            onClick={openModal}
          >
            <div className="frame-child20" />
            <div className="register-to-drive">Register to drive</div>
          </button>
        </div>
        <div className="rectangle-parent14">
          <div className="frame-child21" />
          <div className="hero-image">
            <img
              className="image-2-icon1"
              loading="lazy"
              alt=""
              src="/image-2@2x.png"
            />
          </div>
          <div className="hero-content">
            <div className="home-ride-title-parent">
              <div className="home-ride-title">
                <a className="home1" onClick={onHomeTextClick}>
                  Home
                </a>
                <a className="ride-with-us1" onClick={onRideWithUsClick}>
                  Ride with us
                </a>
              </div>
              <div className="drive-content-parent">
                <div className="drive-content">
                  <a className="drive-with-us1">Drive with us</a>
                  <div className="drive-divider" />
                </div>
                <a className="lets-charge1">Let’s charge</a>
              </div>
            </div>
          </div>
          <button className="rectangle-parent15">
            <div className="frame-child22" />
            <a className="download-app1">Download App</a>
          </button>
        </div>
      </header>
      <div className="drive-banner">
        <h1 className="be-a-part-container">
          <p className="be-a-part">Be a part of our family</p>
          <p className="be-a-part">Drive with us</p>
        </h1>
      </div>
      <div className="name-field-inner">
        <button className="rectangle-parent16">
          <div className="frame-child23" />
          <div className="apply-to-drive1">Apply to Drive</div>
        </button>
      </div>
      <div className="register-yourself-well-get-b-wrapper">
        <div className="register-yourself-well">
          Register yourself, We’ll get back to you soon.
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="modal-content"
          overlayClassName="modal-backdrop"
          closeTimeoutMS={300}
        >
          <header className="modal-header">
            <h2>Thank You!</h2>
            <button className="close-button" onClick={modalClose}>
              ×
            </button>
          </header>
          <div className="modal-body">
            <p>Your registration was successful. We’ll get back to you soon.</p>
          </div>
          <footer className="modal-footer">
            <button className="footer-close-button" onClick={modalClose}>
              Close
            </button>
          </footer>
        </Modal>
      )}
    </section>
  );
};

NameField.propTypes = {
  className: PropTypes.string,
};

export default NameField;
