import React from "react";
import { Table } from "react-bootstrap";
export default function PO() {
  const po = [
    {
      admissionYear: "2015",
      po1: "3",
      po2: "3",
      po3: "3",
      po4: "3",
      po5: "3",
      po6: "3",
      po7: "3",
      po8: "3",
      po9: "3",
      po10: "3",
      po11: "3",
      po12: "3",
    },
    {
      admissionYear: "2016",
      po1: "3",
      po2: "3",
      po3: "3",
      po4: "3",
      po5: "3",
      po6: "3",
      po7: "3",
      po8: "3",
      po9: "3",
      po10: "3",
      po11: "3",
      po12: "3",
    },
  ];
  return (
    <div className="container-fluid">
      <div>
        <h3>PO Attained</h3>
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

            {Array.from({ length: 12 }).map((_, index) => (
              <th key={index}>PO{index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {po.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.admissionYear}</td>
              <td>{data.po1}</td>
              <td>{data.po2}</td>
              <td>{data.po3}</td>
              <td>{data.po4}</td>
              <td>{data.po5}</td>
              <td>{data.po6}</td>
              <td>{data.po7}</td>
              <td>{data.po8}</td>
              <td>{data.po9}</td>
              <td>{data.po10}</td>
              <td>{data.po11}</td>
              <td>{data.po12}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
