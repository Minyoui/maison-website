import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Therapist" },
    date: Date,
    time: String,
    service: String,
    addOns: [String],
    notes: String,
});

export default mongoose.model("Appointment", appointmentSchema);