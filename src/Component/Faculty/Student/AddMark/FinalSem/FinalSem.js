import React, { useRef } from "react";
// import ReactDOM from "react-dom";
import axios from "axios";
import {Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import "./FinalSem.css"
export default function FinalSem() {
  const [file, setFile] = React.useState("");
  const form = useRef(null);

  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(file);

    try {
      // console.log(filterCourse);

      const formData = new FormData(form.current);

      console.log(formData);
      // formData.append("courseCode", filterCourse);
      //   formData.append("year", "2020");
      // formData.append("batch", "2022");
      // formData.append("assignmentNo", "2");

      const res = await axios.post(
        "http://localhost:5000/api/marks/endsemexam",
        formData
      );

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  // const [faculty, setFaculty] = useState({
  //   id: "TVE18",
  //   name: "Sreelal",
  //   course: [
  //     { code: "PH100", name: "Physics" },
  //     { code: "CH", name: "Chemistry" },
  //     { code: "CS301", name: "Theory of computation" }
  //   ],
  // })

  // const [filterCourse, setFilterCourse] = useState(faculty.course[0].code);

  // console.log(filterCourse);

  // const handleChangeFilterCourse = (event) => {
  //   setFilterCourse(event.target.value);
  //   console.log(event.target.value);
  // };
  return (
    <div className="container-fluid">
      <div>
        <h3>Upload Final Sem Exam Marks</h3>
      </div>
      <div>
        {/* <h5>Choose course:</h5> */}
        <label>
          {/* <select value={filterCourse} onChange={handleChangeFilterCourse}>
            {faculty.course.map((data, index) => (
              <option key={index} value={data.code}>
                {data.name}
              </option>
            ))}
          </select> */}
        </label>
      </div>
      <form ref={form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="year">Course year: </label>
          <input type="text" name="year" required />
        </div>
        <div>
          <label htmlFor="batch">Batch: </label>
          <input type="text" name="batch" required />
        </div>
        <div>
          <input type="file" name="file" onChange={handleUpload} required />
        </div>
        <div className="add-mark-button">
        <Button variant="dark">
          <Link to="/faculty/student/add-mark">Back</Link>
        </Button>{" "}
          <Button type="submit" onClick={handleSubmit} variant="dark">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
