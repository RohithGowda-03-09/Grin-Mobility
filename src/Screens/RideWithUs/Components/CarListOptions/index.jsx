import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CarListItems from '../CarListItems';
import './Styles.scss';
import { FaCar } from 'react-icons/fa';
import { CarListData } from '../../../../Utils/CarListData';
import { IoClose } from 'react-icons/io5';
import { rideBookLogo } from '../../../../Assets/Icons';
import emailjs from 'emailjs-com';

const CarListOptions = ({ carDistance }) => {
  const [selectedCarId, setSelectedCarId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false); // State for booking confirmation
  const navigate = useNavigate();

  const handleCarClick = (id) => {
    setSelectedCarId(id);
  };



  const sendEmailConfirmation = (userEmail) => {
    console.log(userEmail)
    emailjs.init('NZX-WCxlcMW3SRvta'); // Replace with your EmailJS user ID

    const templateParams = {
      user_email:userEmail,
      message:'Thanks for booking a ride with Grin Mobility. A Captain will contact you within a few minutes.',
    };

    emailjs.send('service_2ejwis8', 'template_xh15s9o', templateParams)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  const handlePayByCashClick = () => {
    setIsBookingConfirmed(true);

    const currentUser = localStorage.getItem('user-email');
    if (currentUser) {
      const userEmail = currentUser;

      sendEmailConfirmation(userEmail);
    } else {
      console.error('User is not authenticated!');
      navigate('/login');
    }
  };
  const handleBookRideClick = () => {
    const isAuthenticated = localStorage.getItem('authToken');

    if (!isAuthenticated) {
      localStorage.setItem('carDistance', carDistance);
      localStorage.setItem('selectedCarId', selectedCarId);
      navigate('/login?redirectTo=/ride');
    } else {
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsBookingConfirmed(false); // Reset confirmation state when modal closes
  };




  const RideCard = ({ title, onClick }) => (
    <div className="ride-card" onClick={onClick}>
      <span className="ride-card__text">{title}</span>
      <div className="ride-card__image">
        <img src={rideBookLogo} alt="Payment" />
      </div>
    </div>
  );

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

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Grin Mobility</h2>
              <button className="modal-close" onClick={handleModalClose}>
                <IoClose />
              </button>
            </div>
            <div className="modal-body">
              {isBookingConfirmed ? (
                <div className="booking-confirmation">
                  <p>Thanks for booking a ride with Grin Mobility.</p>
                  <p>A Captain will contact you within a few minutes.</p>
                </div>
              ) : (
                <div className="modal-cards">
                  <div className="ride-cards">
                    <RideCard title="Pay By Cash" onClick={handlePayByCashClick} />
                    <RideCard title="Payment Options" />
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button className="modal-close-btn" onClick={handleModalClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarListOptions;
