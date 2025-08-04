import React, { useState } from "react";
import "./style/Gpa.css"; // Assuming you have a CSS file for styling

const Gpa = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState("");
  const [marks, setMarks] = useState("");
  const [credits, setCredits] = useState("");

  const handleAddCourse = () => {
    if (!course || !marks || !credits) return;

    const numericMarks = parseFloat(marks);
    const numericCredits = parseFloat(credits);

    const gpaValue = calculateGPAValue(numericMarks);

    const newCourse = {
      course,
      marks: numericMarks,
      credits: numericCredits,
      gpa: gpaValue,
    };

    setCourses([...courses, newCourse]);
    setCourse("");
    setMarks("");
    setCredits("");
  };

  const calculateGPAValue = (marks) => {
    if (marks >= 85) return 4.00;
    if (marks >= 80) return 3.67;
    if (marks >= 75) return 3.33;
    if (marks >= 71) return 3.00;
    if (marks >= 68) return 2.67;
    if (marks >= 64) return 2.33;
    if (marks >= 60) return 2.00;
    if (marks >= 57) return 1.67;
    if (marks >= 53) return 1.33;
    if (marks >= 50) return 1.00;
    return 0.00;
  };

  const calculateTotalGPA = () => {
    const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);
    const totalPoints = courses.reduce((sum, c) => sum + c.gpa * c.credits, 0);
    return totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  return (
    <div>
      <div className="gpa">
        <div className="gpa-heading">
          <h1>Calculate your GPA</h1>
          <p>Enter your course grades and credits to calculate your GPA.</p>
        </div>
        <div className="gpa-form">
          <div className="subjects">
            <div className="course-input">
              <label htmlFor="course">Course Name:</label>
              <input
                type="text"
                id="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="Enter course name"
              />
            </div>
            <div className="marks-input">
              <label htmlFor="marks">Marks:</label>
              <input
                type="number"
                id="marks"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                placeholder="Enter subject marks"
              />
            </div>
            <div className="credits-input">
              <label htmlFor="credits">Credits:</label>
              <input
                type="number"
                id="credits"
                value={credits}
                onChange={(e) => setCredits(e.target.value)}
                placeholder="Enter credits"
              />
            </div>
            <button className="add-button" onClick={handleAddCourse}>
              Add Course
            </button>
          </div>
        </div>

        {courses.length > 0 && (
          <div className="gpa-result">
            <h2>Course List</h2>
            <table>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Marks</th>
                  <th>Credits</th>
                  <th>GPA</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((c, index) => (
                  <tr key={index}>
                    <td>{c.course}</td>
                    <td>{c.marks}</td>
                    <td>{c.credits}</td>
                    <td>{c.gpa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3>Total GPA: {calculateTotalGPA()}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gpa;
