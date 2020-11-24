import React from "react";
import { Table } from "react-bootstrap";

export default function PSO() {
  const pso = [
    {
      admissionYear: "2015",
      pso1: "3",
      pso2: "3",
      pso3: "3",
    },
    {
      admissionYear: "2016",
      pso1: "3",
      pso2: "3",
      pso3: "3",
    },
  ];
  return (
    <div className="container-fluid">
      <div>
        <h3>PSO Attained</h3>
      </div>
      <Table
        striped
        bordered
        hover
        variant="dark"
        className="viewFacultyTable"
        responsive
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Year of admission</th>

            {Array.from({ length: 3 }).map((_, index) => (
              <th key={index}>PSO{index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pso.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.admissionYear}</td>
              <td>{data.pso1}</td>
              <td>{data.pso2}</td>
              <td>{data.pso3}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
