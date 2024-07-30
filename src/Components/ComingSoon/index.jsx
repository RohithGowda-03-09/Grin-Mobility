// src/Components/ComingSoon.js
import React from 'react';
import './Styles.scss'; // Import CSS for styling if needed
import { ComingSoonImage } from '../../Assets/Icons';
const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <img src={ComingSoonImage} alt="Coming Soon" />
    </div>
  );
};

export default ComingSoon;
