import React from "react";
import CallNowButton from "./CallNowButton";

const ContentOnImage = () => {
  return (
    <>
      <div className={`bacgroundImageTop text-white d-flex `}>
        <div className="d-flex justify-content-center flex-column mx-5">
          <div className="d-flex align-items-center">
            <div className="line me-3"></div>
            Ready to Fly
            <div className="line ms-3"></div>
          </div>
          <div className="bookContent mb-4">
            Book your Flights at Lowest Price
          </div>
          <div>
            Book your flights with us for a seamless, hassle-free experience and
            exclusive deals.
          </div>
          <div>
            <CallNowButton message="Us Today" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentOnImage;
