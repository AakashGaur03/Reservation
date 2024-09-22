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
        <h2 className="text-center">What Our Customers Say</h2>
        <div class="eael-testimonial-content">
          <div class="eael-testimonial-text">
            <p>Excellent</p>
          </div>{" "}
          <ul class="testimonial-star-rating">
            <li>
              <i class="fas fa-star" aria-hidden="true"></i>
            </li>
            <li>
              <i class="fas fa-star" aria-hidden="true"></i>
            </li>
            <li>
              <i class="fas fa-star" aria-hidden="true"></i>
            </li>
            <li>
              <i class="fas fa-star" aria-hidden="true"></i>
            </li>
            <li>
              <i class="fas fa-star" aria-hidden="true"></i>
            </li>
          </ul>
          <p class="eael-testimonial-user">
            Top Rated 4.5 Out Of 5 Across 2087 Reviews!
          </p>{" "}
        </div>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card text-center">
                <div className="card-body">
                  <p className="card-text">{testimonial.text}</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle me-3"
                      style={{ width: "60px", height: "60px" }}
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
