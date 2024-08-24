import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Screens/Login';
import DriveWithUs from '../Screens/DriveWithUs';
import Home from '../Screens/Home';
import Signup from '../Screens/SignUp';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<DriveWithUs />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
