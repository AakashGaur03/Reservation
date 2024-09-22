import React from "react";
import CallNowButton from "./CallNowButton";

const ContentOnImage = ({
  readyToFly = true,
  heading,
  text,
  bgImage,
  bookTicketButton = false,
  budgetButton = false,
  ticketContent=""
}) => {
  return (
    <>
      <div className={`${bgImage} text-white d-flex `}>
        <div className="d-flex justify-content-center flex-column mx-5">
          {readyToFly && (
            <div className="d-flex align-items-center">
              <div className="line me-3"></div>
              Ready to Fly
              <div className="line ms-3"></div>
            </div>
          )}
          <div className={`bookContent mb-4 ${ticketContent}`}>{heading}</div>
          <div>{text}</div>
          {bookTicketButton && (
            <div>
              <CallNowButton message="Us Today" />
            </div>
          )}
          {budgetButton && (
            <div className="mt-5">
              <CallNowButton
                message="Call Now To Book Your Cheap Flight"
                call={false}
                showNumber={false}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContentOnImage;
