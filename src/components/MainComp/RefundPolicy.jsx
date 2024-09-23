import React from "react";
import FooterTwo from "./FooterTwo";

const RefundPolicy = () => {
  return (
    <div>
      <div className="mw620 container">
        <h1 className="fontPolicy">Refund Policy</h1>

        <p>
          At ReservationTeams, we understand that plans can change unexpectedly,
          and we strive to provide flexible solutions to accommodate our valued
          customers. Our refund policy is designed to be transparent, fair, and
          customer-centric. Please review the following terms and conditions
          regarding refunds for flight bookings made through our platform:
        </p>

        <p>
          <strong>1. Cancellation Fees:</strong>
        </p>

        <ul className="">
          <li>
            For cancellations made within 24 hours of booking: Customers are
            eligible for a full refund without any cancellation fees, provided
            that the booking was made at least 7 days prior to the scheduled
            departure date.
          </li>

          <li>
            For cancellations made beyond 24 hours of booking: Customers may
            incur a cancellation fee, which varies based on the airline, fare
            type, and specific booking conditions. These fees will be
            communicated to customers during the booking process and will be
            deducted from the refund amount.
          </li>
        </ul>

        <p>
          <strong>2. Refund Eligibility:</strong>
        </p>

        <ul className="">
          <li>
            Refunds are subject to the rules and regulations of the airline
            carrier and fare type selected at the time of booking.
          </li>

          <li>
            Some promotional or discounted fares may be non-refundable or have
            additional restrictions. Customers are advised to carefully review
            the fare conditions before completing their booking.
          </li>

          <li>
            Refunds are processed to the original form of payment used for the
            booking.
          </li>
        </ul>

        <p>
          <strong>3. Refund Process:</strong>
        </p>

        <ul className="">
          <li>
            To request a refund, customers must contact Flyonover’s customer
            support team either through our website or by phone. Please have
            your booking reference number and relevant details readily
            available.
          </li>

          <li>
            Refund requests are typically processed within 7-14 business days
            from the date of submission. However, the timeframe may vary
            depending on the airline carrier’s processing procedures.
          </li>

          <li>
            Once processed, customers will receive an email notification
            confirming the refund amount and the timeline for the funds to
            reflect in their account.
          </li>
        </ul>

        <p>
          <strong>4. Exceptional Circumstances:</strong>
        </p>

        <ul className="">
          <li>
            In cases of flight cancellations, delays, or other disruptions due
            to reasons beyond the customer’s control (e.g., weather conditions,
            natural disasters, government regulations), ReservationTeams will
            work with the airline carrier to facilitate refunds or alternative
            travel arrangements as per the airline’s policies.
          </li>
        </ul>

        <p>
          <strong>5. No-Show Policy:</strong>
        </p>

        <ul className="">
          <li>
            Customers who fail to show up for their scheduled flight without
            prior cancellation will not be eligible for a refund. However, they
            may be entitled to certain taxes or fees refundable by the airline
            carrier, subject to the carrier’s policies.
          </li>
        </ul>

        <p>
          <strong>6. Modification and Updates:</strong>
        </p>

        <ul className="">
          <li>
            ReservationTeams reserves the right to modify or update its refund
            policy at any time without prior notice. Any changes to the policy
            will be effective immediately upon posting on our website.
          </li>
        </ul>

        <p>
          By using the ReservationTeams platform and making a flight booking,
          customers acknowledge and agree to abide by the terms and conditions
          outlined in this refund policy. For further assistance or inquiries
          regarding refunds, please contact our customer support team.
        </p>
      </div>
      <FooterTwo />
    </div>
  );
};

export default RefundPolicy;
