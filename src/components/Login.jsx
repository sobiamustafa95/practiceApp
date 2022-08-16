import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import SignImg from "./SignImg";
import { useNavigate } from "react-router-dom";
import { auth, facebookProvider, googleProvider } from "../config/authMethods";
import socialMediaAuth from "../service/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signInWithPopup, signOut } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [loginHint, setLoginHint] = useState({
    message: "Please Login",
    variant: "info",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/home");
      JSON.parse(localStorage.getItem("user-info"));
    }
  }, []);

  async function login() {
    let item = { email, password };
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

  // handle social Media SignIn
  const handleOnClick = async (provider) => {
    try {
      setLoading(true);
      const res = await signInWithPopup(auth, provider);
      console.log({ res });
      if (res.error) {
        throw new Error(res.error);
      } else {
        setLoading(false);
        setLoginHint({
          message: "Social Login Successful",
          variant: "success",
        });
        const localUser = {
          role: "S",
          _id: res?.user?.uid,
          firstName: res?.user?.displayName?.split(" ")[0],
          lastName: res?.user?.displayName?.split(" ")[1],
          email: res?.user?.email,
          createdAt: res?.user?.metadata?.createdAt,
          updatedAt: res?.user?.metadata?.lastLoginAt,
        };
        localStorage.setItem("user-info", JSON.stringify(localUser));
        navigate("/home");
      }
      console.log(res);
      navigate("/home");
    } catch (e) {
      console.log({ e });
      setLoginHint({
        message: "User closed social login",
        variant: "danger",
      });
      setLoading(false);
    }
  };

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
              className="d-flex flex-row mb-2 justify-content-between"
              style={{ fontWeight: 500, fontSize: 30 }}
            >
              Login
              <div className="d-flex social-media">
                <Button
                  style={{
                    color: "white",
                    height: 40,
                    width: 40,
                    borderRadius: 50,
                    border: "none",
                    backgroundColor: "#4267B2",
                  }}
                  className="social-icon facebook me-2"
                  onClick={() => handleOnClick(facebookProvider)}
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </Button>
                <Button
                  style={{
                    color: "white",
                    height: 40,
                    width: 40,
                    borderRadius: 50,
                    border: "none",
                    backgroundColor: "#DB4437",
                  }}
                  className="social-icon google ml-4"
                  onClick={() => handleOnClick(googleProvider)}
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </Button>
              </div>
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
                  onClick={login}
                  // disabled={isDisabled}
                  disabled={email === "" || password.length <= 7 ? true : false}
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
        {isLoading ? (
          <Alert variant="dark">Loading...</Alert>
        ) : (
          <Alert variant={loginHint.variant}>{loginHint.message}</Alert>
        )}
      </div>
    </>
  );
};

export default Login;
