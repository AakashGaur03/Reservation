import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import CustomCard from "./CustomCard";

const VisionSection = () => {
  return (
    <section
      className="backgroundVision vision-section "
      style={{ position: "relative" }}
    >
      <div className="backgroundWhiteOpac"></div>
      <Container className="position-relative z-1 ptop100 pbot100">
        <Row>
          <Col md={4}>
            <h2>
              Get Ready To Fly <br />
              with ReservationTeams
            </h2>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={6} className="text-center">
                <CustomCard
                  customClass="mt-4"
                  customClassTitle="fs30"
                  customClassText="customFontCard"
                  cardImage={
                    "https://reservationteams.com/wp-content/uploads/elementor/thumbs/eowabmcnedg-quctj93j8hoeyokws5rze02m31opnv8yqcoz328m60.jpg"
                  }
                  cardTitle={"Our Vision"}
                  cardText={
                    "Our vision is to offer a seamless and personalized flight booking experience through a simple phone call. We aim to provide quick, tailored travel solutions with expert assistance. Ensuring convenience and customer satisfaction is our top priority."
                  }
                />
              </Col>
              <Col md={6} className="text-center">
                <CustomCard
                  customClass="mt-4"
                  customClassTitle="fs30"
                  customClassText="customFontCard"
                  cardImage={
                    "https://reservationteams.com/wp-content/uploads/elementor/thumbs/ypkurn54y4w-quctjaz7m5qzlwi6h6l8izlj9tfg39gfelzy1m5ttk.jpg"
                  }
                  cardTitle={"Our Mission"}
                  cardText={
                    " Our mission is to make flight booking through a call effortless and efficient. We are dedicated to providing expert guidance, personalized service, and swift solutions, ensuring a stress-free and enjoyable experience for every traveler."
                  }
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VisionSection;
