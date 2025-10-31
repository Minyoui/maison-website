import React from "react";
import { useBookingState } from "../../../../context/BookingContext";

const BookingReceipt = () => {
  // Optional: fallback if bookingData isn't passed
  const { bookingData } = useBookingState();

  return (
    <div className="booking-receipt">
      <h3>Booking Receipt</h3>
      <p>Date: {bookingData.date || "—"}</p>
      <p>Time: {bookingData.time || "—"}</p>
      <p>Name: {bookingData.name || "—"}</p>
      <p>Service: {bookingData.service || "—"}</p>
    </div>
  );
};

export default BookingReceipt;
