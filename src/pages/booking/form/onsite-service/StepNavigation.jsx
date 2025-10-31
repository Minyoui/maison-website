// src/pages/booking/form/onsite-service/StepNavigation.jsx
import React from "react";

export default function StepNavigation({ currentStep }) {
  // Define the step labels — only one for now
  const steps = ["Date & Time"];

  return (
    <div className="flex items-center justify-center mb-6 space-x-6">
      {steps.map((label, index) => {
        const step = index + 1;
        const isActive = step === currentStep;

        return (
          <div
            key={step}
            className={`flex items-center justify-center px-4 py-2 rounded-full border-2 text-sm font-medium
              ${
                isActive
                  ? "bg-blue-500 text-white border-blue-500"
                  : "border-gray-300 text-gray-500"
              }
            `}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
}
