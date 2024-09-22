import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CallNowButton from "./CallNowButton";

const PlacesCard = () => {
  return (
    <>
      {/* Card Section */}
      <Col md={4}>
        <Card className="mb-4 border-0 desrtinationCard mb-5">
          <Card.Img
            variant="top"
            src="https://reservationteams.com/wp-content/uploads/2024/05/60fwwpxv_fq.jpg"
            alt="white concrete houses near body of water during daytime"
          />
          <Card.Body>
            <Card.Title>Santorini, Greece</Card.Title>
            <div className="d-flex mb-3">
              <div className="pe-3">
                <svg
                  height={20}
                  aria-hidden="true"
                  className="e-font-icon-svg e-fas-star"
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                </svg>
              </div>
              <Card.Text>
                Famous for its stunning sunsets and picturesque cliffside
                villages.
              </Card.Text>
            </div>
            <div className="d-flex justify-content-center">
              <CallNowButton book={true} call={false} showNumber={false} />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default PlacesCard;
