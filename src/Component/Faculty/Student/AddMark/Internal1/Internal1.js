import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default function Internal1() {
  const [file, setFile] = React.useState("");
  const form = useRef(null);

  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(file);

    try {
      const formData = new FormData(form.current);

      console.log(formData);
      formData.append("courseCode", filterCourse.code);
    //   formData.append("year", "2020");
      formData.append("batch", "2022");
      formData.append("internalExamNo", "1");

      const res = await axios.post(
        "http://localhost:5000/api/marks/internalexam",
        formData
      );

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  const faculty = {
    id: "TVE18",
    name: "Sreelal",
    course: [
      { code: "PH100", name: "Physics" },
      { code: "CH", name: "Chemistry" },
    ],
  };
  const [filterCourse, setFilterCourse] = useState(faculty.course[0]);
  const handleChangeFilterCourse = (event) => {
    setFilterCourse(event.target.value);
  };
  return (
    <div id="container-fluid">
      <div>
        <h3>Upload Internal 1 Marks</h3>
      </div>
      <div>
        <h5>Choose course:</h5>
        <label>
          <select value={filterCourse.name} onChange={handleChangeFilterCourse}>
            {faculty.course.map((data, index) => (
              <option key={index} value={data}>
                {data.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <form ref={form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="year">Enter year: </label>
          <input type="text" name="year" required />
        </div>
        <input type="file" name="file" onChange={handleUpload} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
