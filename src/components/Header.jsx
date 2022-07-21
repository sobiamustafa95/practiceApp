import React, { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user-info"));

  //   LogOut function
  const logOut = () => {
    localStorage.clear();
    navigate.push("/login");
  };
  return (
    <>
      <Navbar bg="light" variant="light" style={{ color: "black" }}>
        <Container>
          <Navbar.Brand>{user.username}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={logOut}>Log Out</Nav.Link>
            <Nav.Link href="#createNote">Create Notes</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={user.firstName}>
              <NavDropdown.Item onClick={logOut}> Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
