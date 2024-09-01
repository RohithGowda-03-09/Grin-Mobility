import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.scss';
import { GrinLogo } from '../../Assets/Icons';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src={GrinLogo} alt="Grin Logo" />
        </div>
        <button className="close-btn" onClick={onClose} aria-label="Close Sidebar">
          <FaTimes />
        </button>
      </div>
      <nav className="sidebar-nav">
        <Link to="/" className="nav-item" onClick={onClose}>
          Home
        </Link>
        <Link to="/ride" className="nav-item" onClick={onClose}>
          Ride with Us
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
