import React from 'react'
import './Styles.scss'
import Carousel from '../../Components/Carousel'
import { img1, img10, img11, img12, img2, img3, img4, img5, img6, img7, img8, img9 } from '../../Assets/Icons';

const Invest = () => {
  const images = [
img1,
img2,
img3,
img4,
img5,
img6,
img7,
img8,
img9,
img10,
img11,
img12

    // Add all your 10 images here
  ];
  return (
    <div>
        <Carousel/>
        <div className="invest-container">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Investment ${index + 1}`} className="invest-image" />
      ))}
    </div>

    </div>
  )
}

export default Invest