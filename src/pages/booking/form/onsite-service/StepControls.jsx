// src/pages/booking/form/onsite-service/StepControls.jsx
import React from "react";
import { useBookingState } from "../../../../context/BookingContext";

export default function StepControls({ onNext, onBack, isLastStep }) {
  const { bookingData } = useBookingState();
  const isNextDisabled = !bookingData.date || !bookingData.time; // disable if missing

  return (
    <div className="flex justify-between mt-8">
      <button
        onClick={onBack}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Back
      </button>

      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className={`px-4 py-2 rounded text-white transition 
          ${isNextDisabled 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-blue-500 hover:bg-blue-600"}`}
      >
        {isLastStep ? "Finish" : "Next"}
      </button>
    </div>
  );
}
