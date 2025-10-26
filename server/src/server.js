import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Routes
import authRoutes from "../routes/authRoutes";

// Load .env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: "http://localhost:5173", // Vite dev URL
    methods: ["GET" , "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json()); // to parse JSON data

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.log("❌ MongoDB connection error:", err));

// Example Route
app.get("/", (req, res) => {
  res.send("Hello from Maison backend!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// User Authentication
app.use("/api/auth", authRoutes);