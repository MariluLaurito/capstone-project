import React from 'react';
import { useNavigate } from 'react-router';
import '../Styles/ConfirmedBooking.css';

function ConfirmedBooking() {
  return (
    <div className="booking-confirmed">
      <h1>Booking confirmed! </h1>
      <h3 className="booking__processed">Your booking has been successfully processed. We will send you a confirmation email soon! </h3>
    </div>
  )
}

export default ConfirmedBooking
