import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import CallNowButton from "./CallNowButton";
import CustomCard from "./CustomCard";

const OurServices = () => {
  return (
    <>
      <div className="mtop fw-bold fs-1 mb-4 text-center">Our Services</div>
      <Container>
        <Row className="m-0">
          {/* <Col sm={12} md={6} lg={4} className="mb-4"> */}
          <CustomCard
            cardImage={
              "https://reservationteams.com/wp-content/uploads/elementor/thumbs/jphw8ndwj_q-quctjhk2xzzzv68merfmifxrfij0l56jrikcejw2m0.jpg"
            }
            cardTitle={"Reserve, Change Or Cancel Your Flight"}
            cardText={
              "Reserve, change, or cancel your flight with ease. Contact us for flexible and hassle-free travel arrangements tailored to your needs."
            }
          />
          {/* </Col> */}
          {/* <Col sm={12} md={6} lg={4} className="mb-4"> */}
          <CustomCard
            cardTitle={"24/7 Airline Customer Support"}
            cardText={
              "Experience reliable 24/7 airline customer support for all your travel needs. Our dedicated team is here to assist you anytime, ensuring a smooth and stress-free journey."
            }
          />
          {/* </Col> */}
          {/* <Col sm={12} md={6} lg={4} className="mb-4"> */}
          <CustomCard
            cardTitle={"Experienced Travel experts"}
            cardText={
              "Trust our experienced travel experts to plan your perfect trip. With deep knowledge and personalized service, we ensure every journey is unforgettable."
            }
          />
          {/* </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default OurServices;
