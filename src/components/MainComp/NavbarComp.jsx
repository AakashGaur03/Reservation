import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CallNowButton from "../OtherComp/CallNowButton";

function NavbarComp() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand to="/">
        <img
          className="ms-4"
          src="/logo.png"
          width="250"
          height="40"
          alt="Rest Teams"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-5" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto align-items-center">
          <NavLink
            className="nav-link text-center fs-5 fw-semibold"
            style={{ width: "140px" }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link text-center fs-5 fw-semibold"
            style={{ width: "140px" }}
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className="nav-link text-center fs-5 fw-semibold"
            style={{ width: "140px" }}
            to="/contact"
          >
            Contact Us
          </NavLink>
          {/* <a
            className="nav-link text-center fs-5 fw-semibold"
            style={{ width: "140px" }}
            to="#"
          >
            Destinations
          </a> */}
        </Nav>

        <div className="me-4 text-center">
          <CallNowButton message={"Now"} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComp;
