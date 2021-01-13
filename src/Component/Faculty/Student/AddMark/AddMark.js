import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

// It's not clear to me how to trigger updates to the UI
const useForceUpdate = () => useState()[1];

function AddMark() {
  const fileInput = useRef(null);
  const forceUpdate = useForceUpdate();

  useEffect((e) => {
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

  function onSubmit(e) {
    e.preventDefault();
    console.log("Submit Button clicked.");
  }
  const faculty = {
    id: "TVE18",
    name: "Sreelal",
    course: ["Physics", "Chemistry"],
  };
  const [filterCourse, setFilterCourse] = useState(faculty.course[0]);
  const handleChangeFilterCourse = (event) => {
    setFilterCourse(event.target.value);
  };
  return (
    <div className="container-fluid">
      <div>
        <h3>Add Marks</h3>
      </div>
      <div>
        <h5>Choose course:</h5>
        <label>
          <select value={filterCourse} onChange={handleChangeFilterCourse}>
            {faculty.course.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
        </label>
      </div>
      <form onSubmit={onSubmit}>
        <input
          id="file"
          type="file"
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
ReactDOM.render(<AddMark />, rootElement);

export default AddMark;
