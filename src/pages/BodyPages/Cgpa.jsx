import React, { useState } from "react";
import "./style/Cgpa.css"; // Optional for your styles

const gradePointMap = {
  A: 4.0,
  B: 3.0,
  C: 2.0,
  D: 1.0,
  F: 0.0,
};

const CgpaCalculator = () => {
  const [courses, setCourses] = useState([{ grade: "", credit: "" }]);
  const [cgpa, setCgpa] = useState(null);

  const handleChange = (index, field, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index][field] = value;
    setCourses(updatedCourses);
  };

  const addCourse = () => {
    setCourses([...courses, { grade: "", credit: "" }]);
  };

  const calculateCgpa = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    for (let course of courses) {
      const grade = course.grade.toUpperCase();
      const credit = parseFloat(course.credit);

      if (gradePointMap[grade] !== undefined && !isNaN(credit)) {
        totalPoints += gradePointMap[grade] * credit;
        totalCredits += credit;
      }
    }

    const result = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
    setCgpa(result);
  };

  return (
    <div className="cgpa-calculator">
      <h1>CGPA Calculator</h1>
      <p>Enter your course grades and credit hours below:</p>

      {courses.map((course, index) => (
        <div key={index} className="course-row">
          <input
            type="text"
            placeholder="Grade (A, B, C...)"
            value={course.grade}
            onChange={(e) => handleChange(index, "grade", e.target.value)}
          />
          <input
            type="number"
            placeholder="Credit Hours"
            value={course.credit}
            onChange={(e) => handleChange(index, "credit", e.target.value)}
          />
        </div>
      ))}

      <button onClick={addCourse}>+ Add Course</button>
      <button onClick={calculateCgpa}>Calculate CGPA</button>

      {cgpa !== null && (
        <div className="result">
          <h2>Your CGPA: {cgpa}</h2>
        </div>
      )}
    </div>
  );
};

export default CgpaCalculator;
