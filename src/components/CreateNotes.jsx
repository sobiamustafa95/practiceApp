import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "../features/home";

const CreateNotes = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [loginHint, setLoginHint] = useState({
    message: "Please Create Note",
    variant: "info",
  });
  const navigate = useNavigate();

  async function createNote() {
    let item = { title, body };
    try {
      setLoading(true);
      let result = await fetch("https://notingapp.herokuapp.com/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
      result = await result.json();
      if (result.error || !result?.data?.user) {
        throw new Error(result.error || result.message);
      } else {
        setLoading(false);
        setLoginHint({
          message: result.message,
          variant: "success",
        });
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/home");
      }
    } catch (e) {
      setLoginHint({
        message: e.message,
        variant: "danger",
      });
      setLoading(false);
    }
  }

  return (
    <>
      <div
        className="d-flex justify-content-center mb-0"
        style={{ fontWeight: 450, fontSize: 40 }}
      >
        Note App
      </div>
      <div className="container mt-5 col-lg-8">
        <section className="d-flex justify-content-center">
          <Card
            className="mt-3 col-lg-8 shadow mb-5 bg-white rounded"
            style={{ width: "100%" }}
          >
            <Card.Header
              className="d-flex flex-row mb-2 justify-content-between"
              style={{ fontWeight: 500, fontSize: 30 }}
            >
              Create Note
            </Card.Header>
            <Card.Body>
              <Form className="mb-5 p-2">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="Title"
                    // onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter a title"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Body</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="Body"
                    // onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter a body text"
                    style={{ height: "100px" }}
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
                  Go Back
                </Button>{" "}
                <Button
                  variant="info"
                  //   type="submit"
                  style={{
                    color: "white",
                    background: "#17a2b8",
                    fontWeight: 500,
                  }}
                  onClick={createNote}
                >
                  Create Note
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </section>
        {isLoading ? (
          <Alert variant="dark">Loading...</Alert>
        ) : (
          <Alert variant={loginHint.variant}>{loginHint.message}</Alert>
        )}
      </div>
    </>
  );
};

export default CreateNotes;
