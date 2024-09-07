import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Screens/Login";
import SignupPage from "./Screens/SignUp";
import Home from "./Screens/Home";
import "./App.css";
import ProtectedRoute from "./Components/ProtectedRoute";
import RideWithUs from "./Screens/RideWithUs";
import { LoadScript } from "@react-google-maps/api";
import Layout from "./Screens/RideWithUs/Components/Layout";
import Loader from "./Components/Loader";
import Invest from "./Screens/Invest";

const App = () => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Check authentication status
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <LoadScript googleMapsApiKey="AIzaSyA_V4J1t09TrGyClkuYzvENZvJoba15i2c" libraries={["places"]}>
        <Routes>
          <Route
            path="/signup"
            element={
              <Layout>
                <SignupPage />
              </Layout>
            }
          />
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/ride"
            element={
              <Layout>
                {isAuthenticated ? (
                  <ProtectedRoute element={RideWithUs} />
                ) : (
                  <RideWithUs />
                )}
              </Layout>
            }
          />
            <Route
            path="/invest"
            element={
              <Layout>
                {isAuthenticated ? (
                  <ProtectedRoute element={Invest} />
                ) : (
                  <Invest />
                )}
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <LoginPage />
              </Layout>
            }
          />
        </Routes>
      </LoadScript>
    </Router>
  );
};

export default App;
