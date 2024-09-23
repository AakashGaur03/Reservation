import React from "react";
import PlacesCard from "./PlacesCard";
import { Container, Row } from "react-bootstrap";

const DestinationLayout = () => {
  return (
    <>
      <Container>
        <div className="fs40 mb-3 text-center">Top Trending Destinations</div>
        <Row>
          <PlacesCard />
          <PlacesCard />
          <PlacesCard />
          <PlacesCard />
          <PlacesCard />
          <PlacesCard />
        </Row>
      </Container>
    </>
  );
};

export default DestinationLayout;
