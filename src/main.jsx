import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./pages/Navbar.jsx";
import Footer from "./pages/Footer.jsx";
import Gpa from "./pages/BodyPages/Gpa.jsx";
import Cgpa from "./pages/BodyPages/Cgpa.jsx";
import MainPage from "./pages/BodyPages/MainPage.jsx";
import Grading from "./pages/BodyPages/Grading.jsx";
import React from "react";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="navbar" element={<Navbar />} />
        <Route index element={<MainPage/>} />
        <Route path="bodyPages/gpa" element={<Gpa />} />
        <Route path="bodyPages/cgpa" element={<Cgpa />} />
        <Route path="bodyPages/grading" element={<Grading />} />
        <Route path="footer" element={<Footer />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
