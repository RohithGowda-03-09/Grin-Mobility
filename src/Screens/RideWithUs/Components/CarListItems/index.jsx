import React from "react";
import './Styles.scss'; // Import SCSS file
import { HiUser } from "react-icons/hi";

const CarListItems = ({ car, isSelected, carDistance }) => {
    return (
        <div className={`car-list-item ${isSelected ? 'selected' : ''}`} aria-label={`Car: ${car.name}`} role="listitem">
            <div className="car-image-container">
                <div className="car-image">
                    {car.icon}
                </div>
            </div>
            <div className="car-details">
                <div className="car-header">
                    <h2 className="car-name">{car.name}</h2>
                    <span className="car-seats">
                        <HiUser className="seat-icon" />
                        {car.seat}
                    </span>
                </div>
                <p className="car-description">{car.desc}</p>
            </div>
            <div className="car-amount">
                ₹{ Math.round(car.amount * carDistance) }
            </div>
        </div>
    );
};

export default React.memo(CarListItems);
