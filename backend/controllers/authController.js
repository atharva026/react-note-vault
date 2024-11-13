import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { validationResult } from "express-validator";


const JWT_SECRET = process.env.JWT_SECRET;

// Helper function to find profile/user by email
async function getProfileByEmailId(email) {
    return await User.findOne({ email });
}

const createProfile = async (req, res) => {
    try {
        // Validate the request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({status : false, errors : errors.array() });
        }

        const { email, password, username } = req.body;

        // Check if the user already exists
        const existingUser = await getProfileByEmailId(email);
        if (existingUser) {
            return res.status(400).json({status : false, message : 'A user already exists with this email address' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create and save new user profile
        const newUser = new User({ email, password: hashedPassword, username });
        const savedUser = await newUser.save();

        // Create and sign JWT token
        const jwtData = { user: { id: savedUser.id } };
        const jwt_token = jwt.sign(jwtData, JWT_SECRET);

        return res.status(201).json({status : true, token : jwt_token, message : "User created successfully" });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({status : false, message : 'Internal server error' });
    }
}

const login = async (req, res) => {
    try {
        // Validate the request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({status : false, errors : errors.array() });
        }

        const { email, password } = req.body;

        // Find the user by email
        const user = await getProfileByEmailId(email);
        if (!user) {
            return res.status(401).json({status : false, message : 'Invalid email or password' });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({status : false, message : 'Invalid email or password' });
        }

        // Create and sign JWT token
        const jwtData = { user: { id: user.id } };
        const jwt_token = jwt.sign(jwtData, JWT_SECRET);

        return res.status(200).json({status : true, token: jwt_token, message : "Login successful" });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({status : false, message: 'Internal server error' });
    }
}

const getUser = async (req, res) => {
    try {
        // Extract userId from req.user, which was set by the userAuth middleware
        const userId = req.user.id;

        // Find the user by ID and exclude the password field
        const userProfile = await User.findById(userId).select('-password');

        // Check if user exists
        if (!userProfile) {
            return res.status(404).json({status : false, message : "User not found" });
        }

        // Return the user profile as a response
        res.status(200).json( {status : true, user : userProfile });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({status : false, message : 'Internal server error' });
    }
}

export {createProfile,login,getUser};