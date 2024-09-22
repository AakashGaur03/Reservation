import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ProgressBar,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CallNowButton from "./CallNowButton";

const TravelBook = () => {
  return (
    <div className="mtop mb-5">
      <Container>
        <Row>
          {/* Left Side */}
          <Col
            xl={5}
            className="d-flex flex-column justify-content-center text-white ticketBookPadding"
            style={{ backgroundColor: "#0a254f", padding: "2em" }}
          >
            <h2 style={{ fontWeight: "bold" }} className="ticketBookHeading">
              Want To Travel The World With ReservationTeams?
            </h2>
            <p style={{ fontSize: "18px", lineHeight: "1.5rem" }}>
              Embark on unforgettable journeys, discover new cultures, and
              create lasting memories with us. Book your next adventure now and
              let’s soar to new heights together!
            </p>
            <h3
              style={{ fontWeight: "bold", marginTop: "20px" }}
              className="text-center"
            >
              Starting From
            </h3>
            <h2
              style={{ fontWeight: "bold", fontSize: "48px" }}
              className="text-center"
            >
              $250
            </h2>
            <CallNowButton
              call={false}
              book={false}
              showNow={false}
              showNumber={false}
              showCallIcon={false}
              message={"Book Your Tickets Now"}
              showRightArrow={true}
            />
          </Col>

          {/* Right Side */}
          <Col xl={7} className="ticketBookPadding bpxShadowTicketBooking">
            <Image
              src="https://reservationteams.com/wp-content/uploads/2024/05/plane1.jpg"
              alt="Plane"
              fluid
              className="mb-4"
            />
            <h4 style={{ fontWeight: "bold" }}>Why Choose ReservationTeams?</h4>
            <ul className="list-unstyled">
              <li>Exclusive Deals</li>
              <li>Free Cancellations</li>
              <li>Secure And Easy Booking</li>
            </ul>

            {/* Progress Bars */}
            <div className="mt-4 d-flex gap-4">
              <div>
                <h5>Dubai Flight Booked This Month</h5>
                <ProgressBar
                  now={88}
                  label={`${88}%`}
                  style={{ height: "1.3rem", backgroundColor: "#0a254f" }}
                />
              </div>

              <div>
                <h5 className="">Canadian Flight Booked This Month</h5>
                <ProgressBar
                  now={90}
                  label={`${90}%`}
                  style={{ height: "1.3rem", backgroundColor: "#0a254f" }}
                />
              </div>
              <div>
                <h5 className="">USA Flight Booked This Month</h5>
                <ProgressBar
                  now={77}
                  label={`${77}%`}
                  style={{ height: "1.3rem", backgroundColor: "#0a254f" }}
                />
                <div
                  className="progress-bar"
                  style={{ backgroundColor: "red" }}
                ></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TravelBook;
