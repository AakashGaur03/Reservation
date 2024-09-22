import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "",
        padding: "40px 0",
        boxShadow: " 0px -4px 7px 0px #e7e7e7",
      }}
      className="mtop"
    >
      <Container>
        <Row>
          <Col md={3}>
            <img
              src="https://reservationteams.com/wp-content/uploads/2024/09/resteams.png"
              alt="resteams"
              style={{ width: "150px" }}
            />
          </Col>
          <Col md={3}>
            <h4 className="text-end">Get In Touch</h4>
            <ListGroup variant="flush">
              <ListGroup.Item className="border-0 p-0 text-end">
                <a
                  href="tel:18556013858"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <i className="fas fa-phone-alt"></i> +1 (855) 601-3858
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0 text-end">
                <a
                  href="mailto:help@reservationteams.com"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <i className="fas fa-envelope"></i> help@reservationteams.com
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0 text-end">
                13219 Jones Rd, Houston, TX 77070
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <h4 className="text-center">Useful Links</h4>
            <ListGroup variant="flush">
              <ListGroup.Item className="border-0 p-0 text-center">
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Home
                </NavLink>
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0 text-center">
                <NavLink
                  to="/about"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  About us
                </NavLink>
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0 text-center">
                <NavLink
                  to="/contact"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Contact us
                </NavLink>
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0 text-center">
                <a
                  href="https://reservationteams.com/privacy-policy/"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Privacy Policy
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0 text-center">
                <a
                  href="https://reservationteams.com/refund-policy/"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Refund Policy
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <h4 className="text-start">Popular Destinations</h4>
            <ListGroup variant="flush">
              <ListGroup.Item className="border-0 p-0 text-start">
                Santorini, Greece
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0 text-start">
                Kyoto, Japan
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0 text-start">
                Amalfi Coast, Italy
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0 text-start">
                Dubrovnik, Croatia
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0 text-start">
                Bora Bora, French Polynesia
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0 text-start">
                Cappadocia, Turkey
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <section className="mtop py-4" style={{ backgroundColor: "#ebeaea" }}>
        <Container>
          <Row>
            <Col className="text-center">
              <p style={{ margin: 0 }}>
                ©2024 ReservationTeams. All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
