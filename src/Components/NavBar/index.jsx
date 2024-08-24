import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaSignOutAlt } from 'react-icons/fa'; // Import the logout icon
import { GrinLogo } from '../../Assets/Icons';
import Sidebar from '../sideBar';
import Modal from '../Modal'; // Import the Modal component
import './Styles.scss';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Hook to get current location

  useEffect(() => {
    // Update active link based on the current route
    const path = location.pathname;
    if (path === '/ride') {
      setActiveLink('ride');
    } else if (path === '/') {
      setActiveLink('home');
    }
    // Add other paths as needed
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear(); // Clear local storage
    navigate('/login'); // Redirect to login page
    closeModal(); // Close the modal after logout
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <Modal isOpen={isModalOpen} onClose={closeModal} onLogout={handleLogout} />
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
            <img src={GrinLogo} alt="Grin Logo" />
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
          {/* Uncomment and add other links as needed */}
          {/* <Link 
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
          </Link> */}
        </div>
        <div className="navbar-actions">
          <button className="download-btn">Download App</button>
          <button 
            className="logout-btn" 
            onClick={openModal} 
            aria-label="Logout"
          >
            <FaSignOutAlt />
            <span className="logout-text">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
