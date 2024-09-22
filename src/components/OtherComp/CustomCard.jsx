import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import CallNowButton from "./CallNowButton";

const CustomCard = ({
  cardImage = "https://reservationteams.com/wp-content/uploads/elementor/thumbs/jphw8ndwj_q-quctjhk2xzzzv68merfmifxrfij0l56jrikcejw2m0.jpg",
  cardTitle,
  cardText,
}) => {
  return (
    <>
      <Col sm={12} md={6} lg={4} className="mb-4">
        <Card className="h-100">
          <div className="d-flex justify-content-center">
            <Card.Img className="mw300" variant="top" src={cardImage} />
          </div>
          <Card.Body className="text-center">
            <Card.Title className="fs-5 text-capitalize fw-bolder mb-3">
              {cardTitle}
            </Card.Title>
            <div className="d-flex justify-content-center mb-3">
              <div className="blueline"></div>
              <div className="redline"></div>
            </div>
            <Card.Text className="mb-4" style={{ lineHeight: "1.4" }}>
              {cardText}
            </Card.Text>
            <div className="d-flex justify-content-center my-4">
              <CallNowButton showNumber={false} message=" US NOW" />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CustomCard;
