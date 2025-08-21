import { useState } from "react";
import "./style/NavbarTwo.css";
import { Link } from "react-router-dom";

const NavbarTwo = () => {
  const [menuChecked, setMenuChecked] = useState(false);

  const handleMenuChange = (e) => {
    setMenuChecked(e.target.checked);
  };

  const menuStyle = menuChecked
    ? { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }
    : { borderRadius: "10px" };

  return (
    <nav id="menu" style={menuStyle}>
      {/* Hamburger toggle */}
      <input
        type="checkbox"
        id="responsive-menu"
        checked={menuChecked}
        onChange={handleMenuChange}
      />
      <label htmlFor="responsive-menu"></label>

      {/* Logo + Text */}
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/University_of_Haripur_%28logo%29.jpg/250px-University_of_Haripur_%28logo%29.jpg"
          alt="University of Haripur Logo"
        />
        <h1>GPA & CGPA Calculator</h1>
      </div>

      {/* Navigation Links */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bodyPages/gpa">GPA Calculator</Link>
        </li>
        <li>
          <Link to="/bodyPages/cgpa">CGPA Calculator</Link>
        </li>
        <li>
          <Link to="/bodyPages/grading">Grading Scheme</Link>
        </li>
        <li>
          <a href="https://studentportal.uoh.edu.pk/dashboard" target="_blank" rel="noopener noreferrer">
            Your Portal
          </a>
        </li>
        <li>
          <a href="https://github.com/janibrahim" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarTwo;
