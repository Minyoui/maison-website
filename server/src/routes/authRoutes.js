import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

//JWT Token verification
import verifyToken from "../middleware/authMiddleware.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// REGISTER ROUTE
router.post("/register", async (req, res) => {
    try {
        const { firstName, lastName, birthday, email, phoneNumber, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new User
        const newUser = new User({
            firstName,
            lastName,
            birthday,
            email,
            phoneNumber,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: "User Registered Successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// LOGIN ROUTE
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Compare Password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

        // Generate JWT Token
        const token = jwt.sign (
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" } // token will expire in 1 hour
        );

        res.status(200).json({ 
            message: "Login Successful!",
            token, 
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            }, 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// Token Verification
router.get("/profile", verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.status(200).json({ message: "Profile fetched successfully", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

export default router;