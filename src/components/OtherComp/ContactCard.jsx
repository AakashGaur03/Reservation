import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CallNowButton from "./CallNowButton";

const ContactCard = () => {
  return (
    <Container className="mb-5">
      {" "}
      <Row className="align-items-center">
        <Col md={3}>
          <div className="d-flex justify-content-center">
            <Card.Img
              className="mw300"
              variant="top"
              src="/supportWomen.jpg"
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="contactCardClass mb-3 mx-3 text-center">
            Contact Your Personal Agent 24/7. We're here to make your domestic &
            international flights as cheap & smooth as possible.
          </div>
        </Col>
        <Col md={3} className="p-0">
          <CallNowButton message="" showNow={true} />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactCard;
