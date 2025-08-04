import "./App.css";
import React from "react";
import Navbar from "./pages/Navbar.jsx";
import Footer from "./pages/Footer.jsx";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </>
  );
}

export default App;
