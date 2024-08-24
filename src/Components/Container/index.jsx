// src/components/AuthContainer.jsx
import React from 'react';
import './Styles.scss';

const AuthContainer = ({ title, children }) => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default AuthContainer;
