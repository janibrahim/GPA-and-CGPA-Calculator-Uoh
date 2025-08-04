import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/6/63/University_of_Haripur_%28logo%29.jpg"
            alt="UOH LOGO"
          />
          <h1>UOH GPA &amp; CGPA Calculator</h1>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </div>

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
      </div>
    </div>
  );
};

export default Navbar;
