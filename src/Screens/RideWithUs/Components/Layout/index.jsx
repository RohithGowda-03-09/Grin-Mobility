import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../../../Components/NavBar";
import Footer from "../../../../Components/Footer";


const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!isAuthPage && <NavBar />}
      <main>{children}</main>
      {!isAuthPage && <Footer/>}
    </>
  );
};

export default Layout;
