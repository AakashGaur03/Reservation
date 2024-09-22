import React from "react";
import ContentOnImage from "../OtherComp/ContentOnImage";
import OurServices from "../OtherComp/OurServices";
import ContactCard from "../OtherComp/ContactCard";
import DestinationLayout from "../OtherComp/DestinationLayout";
import FlightBookingSection from "../OtherComp/FlightBookingSection";
import Testimonials from "../OtherComp/Testimonials";

const Home = () => {
  return (
    <>
      <ContentOnImage />
      <OurServices />
      <ContactCard />
      <DestinationLayout />
      <FlightBookingSection />
      <Testimonials />
    </>
  );
};

export default Home;
