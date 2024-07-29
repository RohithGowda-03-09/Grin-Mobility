import React, { useState } from 'react';
import './Styles.scss';
import { grinlogo } from '../../Assets/Icons';
import Sidebar from '../sideBar';
import { FaBars } from 'react-icons/fa'; 

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = (link) => {
    setActiveLink(link);
  };

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
          <div 
            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
            onClick={() => handleClick('home')}
          >
            Home
          </div>
          <div 
            className={`nav-link ${activeLink === 'ride' ? 'active' : ''}`}
            onClick={() => handleClick('ride')}
          >
            Ride with us
          </div>
          <div 
            className={`nav-link ${activeLink === 'drive' ? 'active' : ''}`}
            onClick={() => handleClick('drive')}
          >
            Drive with us
          </div>
          <div 
            className={`nav-link ${activeLink === 'charge' ? 'active' : ''}`}
            onClick={() => handleClick('charge')}
          >
            Let's charge
          </div>
        </div>
        <button className="download-btn">Download App</button>
      </div>
    </>
  );
}

export default NavBar;
