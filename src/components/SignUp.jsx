import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import SignImg from "./SignImg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate.push("/add");
    }
  }, []);

  async function signUp() {
    let item = { firstName, lastName, email, username, password };
    console.warn(item);

    let result = await fetch("https://notingapp.herokuapp.com/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate.push("/add");
  }
  return (
    <>
      <div className="container mt-5 col-lg-8">
        <SignImg />
        <section className="d-flex justify-content-center">
          <Card
            className="mt-3 col-lg-8 shadow mb-5 bg-white rounded"
            style={{ width: "100%" }}
          >
            <Card.Header
              className="mb-2"
              style={{ fontWeight: 500, fontSize: 30 }}
            >
              Create Account
            </Card.Header>
            <Card.Body>
              <Form className="mb-5 p-2">
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="User Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </Form.Group>
                <Button
                  variant="info"
                  //   type="submit"
                  style={{
                    color: "white",
                    background: "#17a2b8",
                    fontWeight: 500,
                  }}
                  onClick={signUp}
                >
                  Sign UP
                </Button>{" "}
                <Button
                  variant="info"
                  //   type="submit"
                  style={{
                    color: "white",
                    background: "#17a2b8",
                    fontWeight: 500,
                  }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Go Back
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </section>
        <Alert variant="info">Please Sign Up</Alert>
      </div>
    </>
  );
};

export default SignUp;
