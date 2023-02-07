import React, { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user-info"));
  console.log(user.firstName);

  //   LogOut function
  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <Navbar bg="light" variant="light" style={{ color: "black" }}>
        <Container>
          <Navbar.Brand>user Name</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={logOut}>Log Out</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/home/createNotes");
              }}
            >
              Create Notes
            </Nav.Link>
          </Nav>
          <Nav>
            {/*<NavDropdown title={user.firstName}>
              <NavDropdown.Item onClick={logOut}> Logout</NavDropdown.Item>
  </NavDropdown>*/}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
