import React from 'react';
import './Styles.scss'; 
import { grinlogo } from '../../Assets/Icons'; 
import { FaTimes } from 'react-icons/fa'; 

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src={grinlogo} alt="Grin Logo" />
        </div>
        <button className="close-btn" onClick={onClose} aria-label="Close Sidebar">
          <FaTimes />
        </button>
      </div>
      <nav className="sidebar-nav">
        <div className="nav-item" onClick={onClose}>
          Home
        </div>
        <div className="nav-item" onClick={onClose}>
          Ride with us
        </div>
        <div className="nav-item" onClick={onClose}>
          Drive with us
        </div>
        <div className="nav-item" onClick={onClose}>
          Let's charge
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
