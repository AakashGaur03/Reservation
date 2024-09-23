import React from "react";
import ParallexAbout from "../OtherComp/ParallexAbout";
import VisionSection from "../OtherComp/VisionSection";
import ContactCard from "./../OtherComp/ContactCard";
import FlightBookingSection from "../OtherComp/FlightBookingSection";
import TravelBook from "./../OtherComp/TravelBook";
import Footer from "./Footer";
import ContentOnImage from "../OtherComp/ContentOnImage";
const About = () => {
  return (
    <>
      <ParallexAbout />
      <VisionSection />
      <div className="mt-2"></div>
      <ContactCard />
      <FlightBookingSection />
      <TravelBook />
      <ContentOnImage
        readyToFly={false}
        heading={"In Need Of Budget-Friendly Flight Options?"}
        text={
          "Discover affordable fares and exclusive deals with us. Book now to enjoy seamless travel without breaking the bank."
        }
        bgImage={"bacgroundImageBudget text-center justify-content-center"}
        budgetButton={true}
        ticketContent="ticketContent"
      />
      <Footer />
    </>
  );
};

export default About;
