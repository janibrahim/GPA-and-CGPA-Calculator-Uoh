import React from "react";
import "./style/MainPage.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <div className="content">
        <h2>Welcome to the UOH GPA &amp; CGPA Calculator</h2>
        <div className="content-text">
          <p>
            This tool is designed to help students at the University of Haripur
            calculate their GPA and CGPA easily.
          </p>
          <p>
            Simply enter your course grades and credits to get your GPA or CGPA.
          </p>
          <p>Use the links above to navigate to the GPA or CGPA calculator.</p>
        </div>
        <div className="gpa">
          <h3>GPA Calculator</h3>
          <p>Calculate your GPA by entering your course grades and credits.</p>
          <Link to="/bodyPages/gpa">
            <button className="gpa-btn">Go to GPA</button>
          </Link>
        </div>
        <div className="cgpa">
          <h3>CGPA Calculator</h3>
          <p>Calculate your CGPA by entering your course grades and credits.</p>
          <Link to="/bodyPages/cgpa">
            <button className="gpa-btn">Go to CGPA</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
