import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to authenticate users based on JWT token
const userAuth = (req, res, next) => {
    // Get the token from the header
    const token = req.header('auth-token');

    // If no token is provided, respond with 401 Unauthorized
    if (!token) {
        return res.status(401).json({status : 'error', message: 'No token provided, authorization denied' });
    }

    try {
        // Verify the token
        const verified = jwt.verify(token, JWT_SECRET);

        // Set the verified user data in req.user for access in subsequent routes
        req.user = verified.user; 

        // Proceed to the next middleware or route
        next();
    } catch (error) {
        // Handle invalid or expired token
        return res.status(401).json({status : 'error', message: 'Invalid token, authorization denied' });
    }
}

export default userAuth;