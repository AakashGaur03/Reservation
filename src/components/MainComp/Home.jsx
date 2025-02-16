import React from "react";
import ContentOnImage from "../OtherComp/ContentOnImage";
import OurServices from "../OtherComp/OurServices";
import ContactCard from "../OtherComp/ContactCard";
import DestinationLayout from "../OtherComp/DestinationLayout";
import FlightBookingSection from "../OtherComp/FlightBookingSection";
import Testimonials from "../OtherComp/Testimonials";
import TravelBook from "../OtherComp/TravelBook";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <ContentOnImage
        heading={"Book your  Flights at Lowest Price"}
        text={"Book your flights with us for a seamless, hassle-free experience and exclusive deals."}
        bgImage={"bacgroundImageTop"}
        bookTicketButton={true}
      />
      <OurServices />
      <ContactCard />
      <DestinationLayout />
      <FlightBookingSection />
      <Testimonials />
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

export default Home;
