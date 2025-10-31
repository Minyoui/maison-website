// src/pages/booking/form/onsite-service/StepDateTime.jsx
import React, { useEffect, useState } from "react";
import { getAvailableTimeSlots } from "../../../../api/bookingAPI";
import { useBookingState } from "../../../../context/BookingContext";

export default function StepDateTime() {
  const { bookingData, updateBookingData } = useBookingState();

  const [selectedDate, setSelectedDate] = useState(bookingData.date || "");
  const [selectedTime, setSelectedTime] = useState(bookingData.time || "");
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  useEffect(() => {
    if (!selectedDate) {
      setAvailableSlots([]);
      return;
    }

    const load = async () => {
      try {
        setLoadingSlots(true);
        const data = await getAvailableTimeSlots(selectedDate);
        // Expect backend to return an array like [{ time: "13:00", bookedCount: 2 }, ...]
        setAvailableSlots(Array.isArray(data) ? data : data.availableSlots || []);
      } catch (err) {
        console.error("Failed to load slots:", err);
        setAvailableSlots([]);
      } finally {
        setLoadingSlots(false);
      }
    };

    load();
  }, [selectedDate]);

  // When user changes date
  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    setSelectedTime(""); // reset time when date changes
    updateBookingData({ date, time: "" }); // update context immediately
  };

  // When user selects time
  const handleTimeSelect = (timeValue) => {
    setSelectedTime(timeValue);
    updateBookingData({ time: timeValue }); // update context immediately
  };

  // Generate 15-min interval times (13:00 -> 23:45)
  const generateTimes = () => {
    const times = [];
    const start = new Date();
    start.setHours(13, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 45, 0, 0);

    const cursor = new Date(start);
    while (cursor <= end) {
      const hours = cursor.getHours();
      const minutes = cursor.getMinutes().toString().padStart(2, "0");
      const labelHour = ((hours + 11) % 12) + 1;
      const ampm = hours >= 12 ? "PM" : "AM";
      times.push({ label: `${labelHour}:${minutes} ${ampm}`, value: `${hours}:${minutes}` });
      cursor.setMinutes(cursor.getMinutes() + 15);
    }
    return times;
  };

  const times = generateTimes();
  const now = new Date();
  const todayStr = now.toISOString().split("T")[0];

  return (
    <div>
      <h2>Select Date & Time</h2>

      {/* DATE INPUT */}
      <input
        type="date"
        min={new Date().toISOString().split("T")[0]}
        value={selectedDate}
        onChange={handleDateChange}
      />

      {/* LOADING */}
      {loadingSlots && <p>Checking availability...</p>}

      {/* TIME BUTTONS */}
      <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {times.map((t) => {
          const slot = availableSlots.find((s) => s.time === t.value);
          const full = slot && slot.bookedCount >= 4; // maximum number of slots available per time slot

          const [hour, minute] = t.value.split(":").map(Number);
          const isToday = selectedDate === todayStr;
          const nowMinutes = now.getHours() * 60 + now.getMinutes();
          const slotMinutes = hour * 60 + minute;
          const isPast = isToday && slotMinutes <= nowMinutes;

          return (
            <button
              key={t.value}
              disabled={!selectedDate || full || isPast}
              onClick={() => handleTimeSelect(t.value)}
              style={{
                background: selectedTime === t.value ? "#ccc" : "transparent",
                padding: "8px 10px",
                borderRadius: 6,
                border: "1px solid #ddd",
                opacity: !selectedDate ? 0.6 : 1,
                cursor: (!selectedDate || full || isPast) ? "not-allowed" : "pointer",
              }}
              title={
                !selectedDate
                  ? "Select a date first"
                  : full
                  ? "This time slot is full"
                  : isPast
                  ? "This time has already passed"
                  : ""
              }
            >
              {t.label} {full ? "(Full)" : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
}
