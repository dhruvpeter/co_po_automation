import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
  }
  const [userValue, setUserValue] = useState("1");

  const users = [
    { name: "Faculty", value: "1" },
    { name: "Admin", value: "2" },
  ];
  return (
    <div className="container-fluid">
      <div className="title">
        <h2>CO PO Automation</h2>
      </div>

      <div className="toggle">
        <ButtonGroup toggle>
          {users.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={userValue === radio.value}
              onChange={(e) => setUserValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
