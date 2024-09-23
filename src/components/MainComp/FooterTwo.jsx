import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const FooterTwo = () => {
  return (
    <footer className="bg-light py-5">
      <Container>
        <Row className="mb-4">
          {/* Left Column */}
          <Col md={4}>
            <div className="d-flex flex-column">
              <p className="h4 mb-2">
                <NavLink
                  to="/"
                  target="_self"
                  className="text-black ps-0 text-decoration-none"
                  rel="home"
                >
                  ReservationTeams
                </NavLink>
              </p>
              <p className="text-muted small">
                BOOK FLIGHTS | CHANGE FLIGHTS | CANCEL FLIGHTS
              </p>
            </div>
          </Col>

          <Col md={2}></Col>

          <Col md={6}>
            <Row>
              <Col xs={3} className="text-start">
                <h5 className="font-weight-bold">About</h5>
                <Nav className="flex-column">
                  <Nav.Link className="text-black ps-0" href="#">
                    Team
                  </Nav.Link>
                  <Nav.Link className="text-black ps-0" href="#">
                    History
                  </Nav.Link>
                  <Nav.Link className="text-black ps-0" href="#">
                    Careers
                  </Nav.Link>
                </Nav>
              </Col>

              <Col xs={5} className="text-start">
                <h5 className="font-weight-bold">Privacy</h5>
                <Nav className="flex-column">
                  <NavLink
                    className="text-black text-decoration-none ps-0"
                    to="/privacy-policy"
                  >
                    Privacy Policy
                  </NavLink>
                  <Nav.Link className="text-black ps-0" href="#">
                    Terms and Conditions
                  </Nav.Link>
                  <Nav.Link className="text-black ps-0" href="#">
                    Contact Us
                  </Nav.Link>
                </Nav>
              </Col>

              <Col xs={4} className="text-start">
                <h5 className="font-weight-bold">Social</h5>
                <Nav className="flex-column">
                  <Nav.Link className="text-black ps-0" href="#">
                    Facebook
                  </Nav.Link>
                  <Nav.Link className="text-black ps-0" href="#">
                    Instagram
                  </Nav.Link>
                  <Nav.Link className="text-black ps-0" href="#">
                    Twitter/X
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <p className="text-muted small">
              Designed with{" "}
              <a href="#" rel="nofollow" className="text-black ps-0">
                WordPress
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterTwo;
