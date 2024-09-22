import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CallNowButton from "../OtherComp/CallNowButton";

function NavbarComp() {
  return (
    <Navbar bg="light" expand="lg" className="d-none d-lg-flex">
      <Navbar.Brand to="/">
        <img
          className="ms-4"
          src="https://reservationteams.com/wp-content/uploads/2024/09/resteams.png"
          width="250"
          height="40"
          alt="Rest Teams"
        />
      </Navbar.Brand>

      <Nav className="mx-auto">
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
        <NavLink
          className="nav-link text-center fs-5 fw-semibold"
          style={{ width: "140px" }}
          to="/destination"
        >
          Destinations
        </NavLink>
      </Nav>

      <CallNowButton customclassName="me-4" message={"Now"} />
    </Navbar>
  );
}

export default NavbarComp;
