import React from "react";
import { Form } from "react-bootstrap";

export default function Home() {
  const admin = {
    name: "Name",
  };
  return (
    <div className="container-fluid">
      <Form>
        {" "}
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={admin.name} readOnly />
        </Form.Group>
      </Form>
    </div>
  );
}
