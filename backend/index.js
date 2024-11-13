import db from "./db.js"; // Importing the database connection
import express from "express"; // Importing Express for API handling
import auth from './routes/auth.js'; // Importing auth routes
import notes from './routes/notes.js'; // Importing notes routes
import cors from 'cors'; // Importing CORS middleware

// Initialize express application
const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/auth', auth); // API route for authentication
app.use('/api/notes', notes); // API route for handling notes

// Default route for the API
app.get("/", (req, res) => {
    res.send("Note Vault API");
});

// Port for the server to listen on
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});