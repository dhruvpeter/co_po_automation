import React from "react";
import { Link } from "react-router-dom";
export default function AddMark() {
  return (
    <div className="container-fluid">
      <div>
        <h3>Add Marks</h3>
      </div>
      <div>
        <Link to="/faculty/student/add-mark/internal-1">
          Upload Internal 1 marks
        </Link>
      </div>
      <div>
        <Link to="/faculty/student/add-mark/internal-2">
          Upload Internal 2 marks
        </Link>
      </div>
      <div>
        <Link to="/faculty/student/add-mark/assignment-1">
          Upload Assignment 1 marks
        </Link>
      </div>
      <div>
        <Link to="/faculty/student/add-mark/assignment-2">
          Upload Assignment 2 marks
        </Link>
      </div>
      <div>
        <Link to="/faculty/student/add-mark/final-sem">
          Upload Final Sem Exam marks
        </Link>
      </div>
    </div>
  );
}
