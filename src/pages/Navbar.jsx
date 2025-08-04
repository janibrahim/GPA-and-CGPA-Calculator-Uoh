import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuStyle = {
    borderRadius: isOpen ? "0 0 0 0" : "10px",
    transition: "border-radius 0.3s",
  };

  return (
    <nav id="menu" className="navbar" style={menuStyle}>
      <ul className={isOpen ? "responsive" : ""}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/bodyPages/gpa"}>GPA Calculator</Link>
        </li>
        <li>
          <Link to={"/bodyPages/cgpa"}>CGPA Calculator</Link>
        </li>
        <li>
          <Link to={"/bodyPages/grading"}>Grading Scheme</Link>
        </li>
        <li>
          <a href="https://github.com/janibrahim">
            Jan Ibrahim <span>Git</span>
          </a>
        </li>
      </ul>
      {/* Hamburger icon for mobile */}
      <div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>
    </nav>
  );
};

export default Navbar;