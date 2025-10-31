import mongoose from "mongoose";

const therapistSchema = new mongoose.Schema({
    name: String,
    specialty: [String],
    availability: Boolean,
});

export default mongoose.model("Therapist", userSchema);
