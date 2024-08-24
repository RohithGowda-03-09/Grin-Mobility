import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Screens/Login";
import SignupPage from "./Screens/SignUp";
import Home from "./Screens/Home";
import "./App.css";
import ProtectedRoute from "./Components/ProtectedRoute";
import RideWithUs from "./Screens/RideWithUs";
import { LoadScript } from "@react-google-maps/api";
import Layout from "./Screens/RideWithUs/Components/Layout";

const App = () => {
  return (
    <Router>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={["places"]}>
        <Routes>
          <Route
            path="/login"
            element={
              <Layout>
                <LoginPage />
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout>
                <SignupPage />
              </Layout>
            }
          />
          <Route
            path="/home"
            element={
              <Layout>
                <ProtectedRoute element={Home} />
              </Layout>
            }
          />
          <Route
            path="/ride"
            element={
              <Layout>
                <ProtectedRoute element={RideWithUs} />
              </Layout>
            }
          />
          <Route
            path="/"
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
