import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "ReservationTeams is my go-to for booking flights! When my flight got cancelled last minute, ReservationTeams helped me rebook on another flight quickly and efficiently. Highly recommend!",
      name: "Fiona",
      job: "Entrepreneur",
      image:
        "https://reservationteams.com/wp-content/uploads/2024/05/hcjbrrnqf2e.jpg",
    },
    {
      text: "ReservationTeams is a great resource for finding budget-friendly flights. They offer a variety of discount options and highlight the cheapest fares prominently.",
      name: "Ben",
      job: "",
      image:
        "https://reservationteams.com/wp-content/uploads/2024/05/v2aknjmbp_k.jpg",
    },
    {
      text: "It makes planning my travel adventures a breeze! The booking process is so smooth – I can lock in my dream trip in minutes!",
      name: "Ciara",
      job: "",
      image:
        "https://reservationteams.com/wp-content/uploads/2024/05/dp3cs405uzm.jpg",
    },
  ];

  return (
    <div className={`bacgroundImageReview mtop100 text-white d-flex `}>
      <section className="container my-5">
        <h2 className="text-center mb-5">What Our Customers Say</h2>
        <div className="text-center">
          <div className="customertext fst-italic">
            <p>Excellent</p>
          </div>{" "}
          <ul className="customerstar-rating list-unstyled">
            <li>
              <i className="fas fa-star small" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fas fa-star small" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fas fa-star small" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fas fa-star small" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fas fa-star small" aria-hidden="true"></i>
            </li>
          </ul>
          <p className="customeruser ital fst-italic mb-5">
            Top Rated 4.5 Out Of 5 Across 2087 Reviews!
          </p>{" "}
        </div>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card text-center">
                <div className="card-body" style={{padding:"2em"}}>
                  <p className="card-text customercontent">"{testimonial.text}"</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle me-3"
                      style={{ width: "41px", height: "41px" }}
                    />
                    <div>
                      <h5 className="mb-0">{testimonial.name}</h5>
                      {testimonial.job && (
                        <small className="text-muted">{testimonial.job}</small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
