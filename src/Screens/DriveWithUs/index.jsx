import React, { useState } from "react";
import "./Styles.scss";
import {
  FaCar,
  FaMoneyBill,
  FaHandHoldingUsd,
  FaStar,
  FaShieldAlt,
  FaThumbsUp,
  FaCalendar,
  FaHandsHelping,
} from "react-icons/fa";
import driveImage from "../../Assets/Icons/drive-1.jpg";
const benefitsData = [
  {
    icon: <FaCar />,
    title: "Flexible Hours",
    description: "Create a work schedule that fits your life.",
  },
  {
    icon: <FaMoneyBill />,
    title: "Competitive Earnings",
    description: "Maximize your income with attractive rates.",
  },
  {
    icon: <FaHandHoldingUsd />,
    title: "Weekly Payments",
    description:
      "Receive your earnings on a weekly basis, promptly and reliably.",
  },
  {
    icon: <FaStar />,
    title: "Rewards & Incentives",
    description: "Earn bonuses and rewards for exceptional performance.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Insurance Coverage",
    description: "Enjoy comprehensive insurance for your peace of mind.",
  },
  {
    icon: <FaThumbsUp />,
    title: "Driver Support",
    description: "Access 24/7 support whenever you need it.",
  },
  {
    icon: <FaCalendar />,
    title: "Convenient Scheduling",
    description:
      "Select shifts that align perfectly with your personal schedule.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Community Support",
    description: "Join a vibrant community of drivers who support each other.",
  },
];

const DriveWithUs = () => {
  const [offset, setOffset] = useState(0);
  const itemWidth = 250;
  const itemsCount = benefitsData.length;
  const totalWidth = itemWidth * itemsCount;

  const handleNext = () => {
    setOffset((prevOffset) => {
      const newOffset = prevOffset - itemWidth;
      return newOffset <= -totalWidth ? 0 : newOffset;
    });
  };

  const handlePrev = () => {
    setOffset((prevOffset) => {
      const newOffset = prevOffset + itemWidth;
      return newOffset > 0 ? -totalWidth + itemWidth : newOffset;
    });
  };

  const loopedItems = [...benefitsData, ...benefitsData, ...benefitsData];

  return (
    <div className="drive-with-us">
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${driveImage})` }}
      >
        <div className="hero-content">
          <h1>
            Join the Premier Network of Driver-Partners with Grin Mobility!
          </h1>
          <p>
            Start your journey with Grin Mobility and discover how easy it is to
            earn. Apply now to learn more about our competitive pay structure
            and track your weekly earnings with ease.
          </p>
          <div className="hero-buttons">
            <button className="apply-button">Apply to Drive</button>
            <button className="watch-video-button">Watch Video →</button>
          </div>
        </div>
      </div>

      <div className="statistics-section">
        <div className="stat-item">
          <i className="fa fa-users"></i>
          <h2>10,000+</h2>
          <p>Satisfied Driver-Partners</p>
        </div>
        <div className="stat-item">
          <i className="fa fa-dollar-sign"></i>
          <h2>Up to $10,000+</h2>
          <p>Weekly Earnings</p>
        </div>
        <div className="stat-item">
          <i className="fa fa-ban"></i>
          <h2>Zero</h2>
          <p>Investment Required</p>
        </div>
      </div>

      <div className="benefits-section">
        <div className="why-drive-with-us">
          <div className="title-container">
            <FaCar className="car-icon" />
            <h2>Why Drive with Us?</h2>
          </div>
          <p>
            At Grin Mobility, you’re not just driving; you’re driving positive
            change! Our driver-partners are at the forefront of a greener future
            with emission-free vehicles. Experience the freedom of flexible
            schedules, weekly payouts, and exciting incentives without the
            hassle of vehicle ownership.
          </p>
        </div>

        <div className="benefits-carousel">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(${offset}px)`,
              transition: "transform 0.5s ease",
            }}
          >
            {loopedItems.map((benefit, index) => (
              <div key={index} className="carousel-item">
                <div className="benefits-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
          <button
            className="carousel-control prev"
            onClick={handlePrev}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            className="carousel-control next"
            onClick={handleNext}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default DriveWithUs;
