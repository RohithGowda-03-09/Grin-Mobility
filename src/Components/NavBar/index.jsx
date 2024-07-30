import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { grinlogo } from '../../Assets/Icons';
import Sidebar from '../sideBar';
import './Styles.scss';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className="navbar">
        <button 
          className="menu-btn" 
          onClick={toggleSidebar} 
          aria-label="Toggle Sidebar"
        >
          <FaBars />
        </button>
        <div className="logo">
          <div className="logo-green">
            <img src={grinlogo} alt="Grin Logo" />
          </div>
        </div>
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
            onClick={() => setActiveLink('home')}
          >
            Home
          </Link>
          <Link 
            to="/ride" 
            className={`nav-link ${activeLink === 'ride' ? 'active' : ''}`}
            onClick={() => setActiveLink('ride')}
          >
            Ride with us
          </Link>
          <Link 
            to="/drive" 
            className={`nav-link ${activeLink === 'drive' ? 'active' : ''}`}
            onClick={() => setActiveLink('drive')}
          >
            Drive with us
          </Link>
          <Link 
            to="/charge" 
            className={`nav-link ${activeLink === 'charge' ? 'active' : ''}`}
            onClick={() => setActiveLink('charge')}
          >
            Let's charge
          </Link>
        </div>
        <button className="download-btn">Download App</button>
      </div>
    </>
  );
};

export default NavBar;
