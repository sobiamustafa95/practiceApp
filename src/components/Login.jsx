import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import SignImg from "./SignImg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate.push("/add");
    }
  }, []);

  async function login() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch("https://notingapp.herokuapp.com/auth/signin", {
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
              Login
            </Card.Header>
            <Card.Body>
              <Form className="mb-5 p-2">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
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
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  Log in
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
                    navigate("/");
                  }}
                >
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </section>
        <Alert variant="info">Please Login</Alert>
      </div>
    </>
  );
};

export default Login;
