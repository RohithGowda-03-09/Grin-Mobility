import React from 'react';
import ReactDOM from 'react-dom';
import './Styles.scss';
import GrinLogo from '../../Assets/Icons/Grin-Logo.png'; // Update the path as needed

const Modal = ({ isOpen, onClose, onLogout }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <img src={GrinLogo} alt="Grin Mobility" className="header-logo" />
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to logout?</p>
        </div>
        <div className="modal-footer">
          <button className="close-btn" onClick={onClose}>Close</button>
          <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
