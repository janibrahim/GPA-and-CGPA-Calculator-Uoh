import "./App.css";
import React from "react";
import Navbar from "./pages/Navbar.jsx";
import Footer from "./pages/Footer.jsx";
import { Outlet } from "react-router-dom";
import NavbarTwo from "./pages/NavbarTwo.jsx";


function App() {
  return (
    <>
      <NavbarTwo/>
      {/* <Navbar/> */}
      <Outlet/>
      <Footer/>
      
    </>
  );
}

export default App;
