import React from "react";
import "./style/Grading.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";

const Grading = () => {
  return (
    <div>
      <section className="grade-section">
        <h1>Grade Scale &amp; GPA Reference</h1>
        <p>
          This table shows the academic grading system, including GPA values and
          the corresponding marks percentage.
        </p>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Grade</th>
                <th>GPA Value</th>
                <th>Marks Range (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>4.00</td>
                <td>85.00 – 100.00</td>
              </tr>
              <tr>
                <td>A−</td>
                <td>3.67</td>
                <td>80.00 – 84.00</td>
              </tr>
              <tr>
                <td>B+</td>
                <td>3.33</td>
                <td>75.00 – 79.00</td>
              </tr>
              <tr>
                <td>B</td>
                <td>3.00</td>
                <td>71.00 – 74.00</td>
              </tr>
              <tr>
                <td>B−</td>
                <td>2.67</td>
                <td>68.00 – 70.00</td>
              </tr>
              <tr>
                <td>C+</td>
                <td>2.33</td>
                <td>64.00 – 67.00</td>
              </tr>
              <tr>
                <td>C</td>
                <td>2.00</td>
                <td>60.00 – 63.00</td>
              </tr>
              <tr>
                <td>C−</td>
                <td>1.67</td>
                <td>57.00 – 59.00</td>
              </tr>
              <tr>
                <td>D+</td>
                <td>1.33</td>
                <td>53.00 – 56.00</td>
              </tr>
              <tr>
                <td>D</td>
                <td>1.00</td>
                <td>50.00 – 52.00</td>
              </tr>
              <tr>
                <td>F</td>
                <td>0.00</td>
                <td>0.00 – 49.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Grading;
