import express from "express";
import { body } from "express-validator";
import userAuth from '../middleware/userAuth.js';
import {createProfile,login,getUser} from '../controllers/authController.js'

const router = express.Router();


// Create a user using POST /api/auth/createprofile
router.post('/createprofile', [
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
], createProfile);

// User login using POST /api/auth/login
router.post('/signin', [
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('password').exists().withMessage('Password is required')
], login);

// User using POST /api/auth/getuser
router.post('/getuser', 
    userAuth, 
    getUser
);

export default router;