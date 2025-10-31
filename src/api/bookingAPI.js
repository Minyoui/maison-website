// src/api/bookingAPI.js
import axios from "axios";

// Create a reusable Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api", // adjust if needed
});

// ==============================
// GET available time slots
// ==============================
export const getAvailableTimeSlots = async (date) => {
  try {
    const response = await api.get(`/bookings/available?date=${date}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching available slots:", error);
    throw error;
  }
};

// ==============================
// POST: create new booking
// ==============================
export const createBooking = async (bookingData) => {
  try {
    const response = await api.post("/bookings", bookingData);
    return response.data;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};
