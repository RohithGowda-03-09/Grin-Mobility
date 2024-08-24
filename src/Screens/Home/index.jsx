import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStartedImage } from "../../Assets/images";
import "./Styles.scss";
import {
  carbonEnergy,
  coveringGeoLocation,
  driveGrin,
  insearchFor,
  LeafIcon,
  rideBookLogo,
  weeklyPayouts,
  flexibleHours,
  zeroOwnerShip
} from "../../Assets/Icons";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Function to handle success case
    const handleSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      localStorage.setItem("userLocation", JSON.stringify({ latitude, longitude }));
    };

    // Function to handle error case
    const handleError = (error) => {
      console.error("Error getting location:", error.message);
    };

    // Request location access
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const OvalCard = ({ text }) => (
    <div className="oval-card">
      <span>{text}</span>
      <img src={LeafIcon} alt="Leaf Icon" className="border-icon" />
    </div>
  );

  const RideCard = ({ title }) => (
    <div className="ride-card">
      <span className="ride-card__text">{title}</span>
      <div className="ride-card__image">
        <img src={rideBookLogo} alt="Ride Book Logo" />
      </div>
    </div>
  );

  return (
    <>

      <main className="home">
        <section className="promo-section">
          <div className="promo-banner">
            <div className="promo-background" />
            <h1 className="promo-title">
              <p>DRIVE YOUR DREAMS</p>
              <p>WITH OUR EXCLUSIVE DEALS</p>
            </h1>
            <h2 className="promo-subtitle">For a sustainable future</h2>
          </div>

          <div className="promo-content">
            <div className="promo-card">
              <div className="card-shadow" />
              <img
                className="card-image"
                src={getStartedImage}
                alt="Get Started"
                loading="lazy"
              />
              <button
                className="get-started-button"
                onClick={() => navigate("/ride")}
                aria-label="Get Started"
              >
                <div className="button-background" />
                <div className="button-text">Get Started</div>
              </button>
            </div>
          </div>
        </section>

        <section className="cards-container">
          <div className="card">
            <div className="content">
              <div className="icon">
                <img src={insearchFor} alt="In search for icon" />
              </div>
              <div className="text">
                <h3>In search for</h3>
                <p>Sustainable commuters</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="icon">
                <img src={coveringGeoLocation} alt="Covering Geo Location icon" />
              </div>
              <div className="text">
                <h3>Covering</h3>
                <p>Geo Locations</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="icon">
                <img src={carbonEnergy} alt="Sustaining Carbon Emission icon" />
              </div>
              <div className="text">
                <h3>Sustaining</h3>
                <p>Carbon emission</p>
              </div>
            </div>
          </div>
        </section>

        <section className="electric-rides-container">
          <h1 className="headline">100%</h1>
          <h2 className="subheadline">Electric Rides</h2>
          <p className="tagline">Reliable, Safe & Premium</p>
        </section>

        <section className="benifits-card-container">
          <div className="oval-cards">
            <OvalCard text="Reliable Pricing" />
            <OvalCard text="Zero Emission" />
            <OvalCard text="Zero Cancellation" />
          </div>

          <div className="ride-cards">
            <RideCard title="City Rides" />
            <RideCard title="Rental Rides" />
            <RideCard title="Airport Rides" />
          </div>
        </section>

        <section className="apply-to-drive">
          <h1>Apply to Drive</h1>
          <div className="content">
            <div className="info">
              <p>
                Join the Grin community and unlock a world of opportunities by
                being a valued driver-partner.
              </p>
              <ul className="benefits">
                <li>
                  <div className="icon">
                    <img src={weeklyPayouts} alt="Weekly Payouts & Bonus" />
                  </div>
                  <span>Weekly Payouts & Bonus</span>
                </li>
                <li>
                  <div className="icon">
                    <img src={flexibleHours} alt="Flexible working hours" />
                  </div>
                  <span>Flexible working hours</span>
                </li>
                <li>
                  <div className="icon">
                    <img src={zeroOwnerShip} alt="Zero ownership cost" />
                  </div>
                  <span>Zero ownership cost</span>
                </li>
              </ul>
            </div>
            <div className="apply-to-drive-image-container">
              <img src={driveGrin} alt="Driver holding phone" />
              <button className="apply-button" aria-label="Apply to Drive">Apply</button>
            </div>
          </div>
        </section>
      </main>

    </>
  );
};

export default Home;
