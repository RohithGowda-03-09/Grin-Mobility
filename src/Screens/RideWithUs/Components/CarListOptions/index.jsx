import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CarListItems from '../CarListItems';
import './Styles.scss'; // Import the SCSS file for styling
import { FaCar } from 'react-icons/fa';
import Modal from '../../../../Components/Modal'; // Ensure this import is correct
import { CarListData } from '../../../../Utils/CarListData';

const CarListOptions = ({ carDistance }) => {
  const [selectedCarId, setSelectedCarId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleCarClick = (id) => {
    setSelectedCarId(id);
  };

  const handleBookRideClick = () => {
    const isAuthenticated = localStorage.getItem('authToken');

    if (!isAuthenticated) {
      // Save current state before redirecting to login
      localStorage.setItem('carDistance', carDistance);
      localStorage.setItem('selectedCarId', selectedCarId);
      navigate('/login?redirectTo=/ride');
    } else {
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="car-list-container">
      <div className="car-list-content">
        <h2 className="car-list-heading">Recommended</h2>
        <div className="car-list-scrollable">
          {CarListData.map((item) => (
            <div key={item.id} onClick={() => handleCarClick(item.id)}>
              <CarListItems carDistance={carDistance} car={item} isSelected={selectedCarId === item.id} />
            </div>
          ))}
        </div>
      </div>
      <div className="car-list-buttons">
        <button className="book-ride-btn" onClick={handleBookRideClick}>
          <span className="icon">
            <FaCar />
          </span>
          Book a Ride
        </button>
      </div>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleModalClose} onLogout={() => { /* Add your logout function here */ }} />}
    </div>
  );
};

export default CarListOptions;
