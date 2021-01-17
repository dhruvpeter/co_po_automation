import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'


// It's not clear to me how to trigger updates to the UI
const useForceUpdate = () => useState()[1];

function AddStudent() {
  const fileInput = useRef(null);
  const forceUpdate = useForceUpdate();

  const form = useRef(null);

  useEffect(e => {
    window.addEventListener("keyup", clickFileInput);
    return () => window.removeEventListener("keyup", clickFileInput);
  });

  function clickFileInput(e) {
    if (fileInput.current.nextSibling.contains(document.activeElement)) {
      // Bind space to trigger clicking of the button when focused
      if (e.keyCode === 32) {
        fileInput.current.click();
      }
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    console.log("Submit Button clicked.");
    e.preventDefault();
    // console.log(file);

    try {
      // console.log(filterCourse);

      const formData = new FormData(form.current);

      // console.log(formData);
      // formData.append("courseCode", filterCourse);
      //   formData.append("year", "2020");
      formData.append("passoutYear", filterBatchYear);
      formData.append("deptId", 1);
      // formData.append("internalExamNo", "1");
      console.log(formData)

      const res = await axios.post(
        "http://localhost:5000/api/student/uploadStudentList",
        formData
      );

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  const batchYear = [
    2019,
    2020,
    2021,
    2022,
    2023,
    2024,
    2025,
    2026,
    2027,
    2028,
    2029,
    2030,
  ];
  const [filterBatchYear, setFilterBatchYear] = useState(2022);
  const handleChangeFilterBatchYear = (event) => {
    setFilterBatchYear(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="container-fluid">
      <div><h3>Add Student</h3></div>
      <div>        <label>
          <select
            value={filterBatchYear}
            onChange={handleChangeFilterBatchYear}>
            {batchYear.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
        </label></div>
      <form ref={form} onSubmit={onSubmit}>
        <input
          id="file"
          type="file"
          name="file"
          ref={fileInput}
          // The onChange should trigger updates whenever
          // the value changes?
          // Try to select a file, then try selecting another one.
          onChange={forceUpdate}
          multiple
        />
        <br />
        <br />
    
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AddStudent />, rootElement);


export default AddStudent;
