import React from "react";
import ContactHeader from "../OtherComp/ContactHeader";
import Testimonials from "./../OtherComp/Testimonials";
import TravelBook from "../OtherComp/TravelBook";
import Footer from "./Footer";
import ContentOnImage from "../OtherComp/ContentOnImage";
import ContactCard from "../OtherComp/ContactCard";
const Contact = () => {
  return (
    <>
      <ContactHeader />
      <ContactCard />
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

export default Contact;
