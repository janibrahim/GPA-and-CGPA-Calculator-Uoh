import React, { useState } from "react";
import "./style/Cgpa.css"; // Optional styles

const CgpaCalculator = () => {
  const [semesters, setSemesters] = useState([{ gpa: "", credit: "" }]);
  const [cgpa, setCgpa] = useState(null);

  const handleChange = (index, field, value) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[index][field] = value;
    setSemesters(updatedSemesters);
  };

  const addSemester = () => {
    setSemesters([...semesters, { gpa: "", credit: "" }]);
  };

  const calculateCgpa = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    for (let sem of semesters) {
      const gpa = parseFloat(sem.gpa);
      const credit = parseFloat(sem.credit);

      if (!isNaN(gpa) && !isNaN(credit)) {
        totalPoints += gpa * credit;
        totalCredits += credit;
      }
    }

    const result = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
    setCgpa(result);
  };

  return (
    <div className="cgpa-calculator">
      <h1>CGPA Calculator</h1>
      <p>Enter each semester GPA and total credit hours:</p>

      {semesters.map((sem, index) => (
        <div key={index} className="semester-row">
          <input
            type="number"
            step="0.01"
            placeholder="Semester GPA"
            value={sem.gpa}
            onChange={(e) => handleChange(index, "gpa", e.target.value)}
          />
          <input
            type="number"
            placeholder="Credit Hours"
            value={sem.credit}
            onChange={(e) => handleChange(index, "credit", e.target.value)}
          />
        </div>
      ))}

      <button onClick={addSemester}>+ Add Semester</button>
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
