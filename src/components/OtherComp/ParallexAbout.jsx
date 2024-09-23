import React from "react";
import { Col, Row, Button, Container } from "react-bootstrap";
import CallNowButton from "./CallNowButton";
const ParallexAbout = () => {
  return (
    <div className="bgImageParallex1">
      <div className="parallax-header mtop">
        <h2>Our Story</h2>
        <h1>About Us</h1>
      </div>
      <Container>
        <Row className="about-content position-relative">
          <Col md={6}>
            <img
              src="https://reservationteams.com/wp-content/uploads/2024/05/mimi-thian-737711-unsplash.jpg"
              alt="Team"
              className="about-img opacity-75 imageHue"
            />
          </Col>
          <Col md={6} className="about-text">
            <div className="position-absolute ourStoryAbout p-5">
              <p className="text-start fw-bold">Our Story</p>
              <p className="text-start ">
                ReservationTeams makes finding budget-friendly flights a breeze!
                Filter by price, dates, and airlines to find your perfect trip.
                Ready to soar? Call us now at +1 (855) 601-3858 to book your
                flight!
              </p>
              <CallNowButton
                call={false}
                book={false}
                showNow={false}
                showNumber={false}
                message="Call Us Today"
              ></CallNowButton>
            </div>
          </Col>
        </Row>
        <Row className="about-content position-relative mtop100">
          <Col md={6} className="about-text bg-white text-black">
            <Row>
              <Col md={2}>
                <svg
                  aria-hidden="true"
                  class="e-font-icon-svg e-fas-plane"
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"></path>
                </svg>
              </Col>
              <Col md={10}>
                <div>
                  <div className="text-start">
                    Reserve Your Flight On A Call{" "}
                  </div>
                  <div className="text-start">
                    Reserve your flight with a simple call! Contact us now for a
                    quick and hassle-free booking experience.{" "}
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <img
              src="https://reservationteams.com/wp-content/uploads/2024/05/91ykdj2wqeg-1536x1024.jpg"
              alt="Team"
              className="about-img opacity-75 imageHue"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ParallexAbout;
