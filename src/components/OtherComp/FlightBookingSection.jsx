import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import CallNowButton from "./CallNowButton";

const FlightBookingSection = () => {
  return (
    <section className="mtop100">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="pr-lg-5">
            <h2 className="font-weight-bold">
              Book Your Domestic And International Flights Today
            </h2>
            <p className="mt-4">
              Ready to soar? Book your tickets with us now for a hassle-free
              travel experience. With our extensive network of airlines and
              personalized service, we ensure your journey is smooth from start
              to finish.
            </p>
            <p>
              Don’t miss out on exclusive deals and flexible booking options –
              reserve your seats today and embark on your next adventure with
              confidence. Fly with us and discover the world in style!
            </p>

            <ul className="list-unstyled mt-4">
              <li className="d-flex align-items-center mb-2">
                <i className="fas fa-check text-primary me-2"></i>
                <span className="fw-bolder">Dial our booking line.</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="fas fa-check text-primary me-2"></i>
                <span className="fw-bolder">
                  Share your destination, dates, and preferences.
                </span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="fas fa-check text-primary me-2"></i>
                <span className="fw-bolder">
                  Get the best flight options from our agent.
                </span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="fas fa-check text-primary me-2"></i>
                <span className="fw-bolder">Select your preferred flight.</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="fas fa-check text-primary me-2"></i>
                <span className="fw-bolder">
                  Our agent completes the transaction.
                </span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="fas fa-check text-primary me-2"></i>
                <span className="fw-bolder">
                  Receive your booking confirmation and e-ticket via email or
                  SMS.
                </span>
              </li>
            </ul>

            <CallNowButton
              message={"For Instant Booking Call Now"}
              call={false}
              book={false}
              showNow={false}
              showNumber={false}
            />
          </Col>

          <Col lg={6} className="position-relative text-center">
            <div className="position-relative">
              <Image
                src="/manOnBridge.jpg"
                alt="Flight 2"
                className="img-fluid"
                style={{
                  position: "relative",
                  width: "80%",
                  boxShadow: "-17px -18px 0px 0px rgba(38,16,13,0.07)",
                }}
              />
              <Image
                src="/streets.jpg"
                alt="Flight"
                className="img-fluid"
                style={{
                  position: "absolute",
                  width: "60%",
                  top: "20%",
                  zIndex: 2,
                  left: "0px",
                  boxShadow: "16px 18px 0px 0px rgba(38,16,13,0.15)",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FlightBookingSection;
