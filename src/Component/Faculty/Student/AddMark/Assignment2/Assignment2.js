import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default function Assignment2() {
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
      formData.append("courseCode", "CS301");
      formData.append("year", "2020");
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

  return (
    <div id="container-fluid">
      <div>
        <h3>Upload Assignment 2 Marks</h3>
      </div>
      <form ref={form} onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleUpload} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
