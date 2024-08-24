import React from 'react';
import './Styles.scss';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { footerLogo } from '../../Assets/Icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <img src={footerLogo} alt="Grin Mobility Logo" className="footer-logo" />
          <p className="footer-description">Drive your dream with our exclusive deals. For a sustainable future.</p>
          <div className="footer-socials">
            <FaFacebookF className="footer-social-icon" />
            <FaTwitter className="footer-social-icon" />
            <FaInstagram className="footer-social-icon" />
            <FaLinkedinIn className="footer-social-icon" />
            <FaYoutube className="footer-social-icon" />
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-title">Product</h4>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Case studies</li>
              <li>Reviews</li>
              <li>Updates</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Company</h4>
            <ul>
              <li>About</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>Culture</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Support</h4>
            <ul>
              <li>Getting started</li>
              <li>Help center</li>
              <li>Server status</li>
              <li>Report a bug</li>
              <li>Chat support</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Contacts us</h4>
            <ul>
              <li>Email: contact@grinmobility.com</li>
              <li>Phone: (414) 687 - 5892</li>
              <li>Location: Bangalore</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Copyright @ grinmobility</p>
        <p>All Rights Reserved | <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
