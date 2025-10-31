import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: String, required: true }, // e.g. "2025-10-31"
    time: { type: String, required: true }, // e.g. "13:15"
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Booking", bookingSchema);