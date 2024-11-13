import express from "express";
import userAuth from '../middleware/userAuth.js';
import {getAllNotes, addNote, updateNote, deleteNote} from '../controllers/noteController.js';

const router = express.Router();

/**
 * GET / - Fetch all notes for the authenticated user.
 * Only notes belonging to the authenticated user are returned.
 * Protected by userAuth middleware, which ensures only logged-in users can access.
 */
router.get('/', 
    userAuth, 
    getAllNotes
);

/**
 * POST /add - Create a new note for the authenticated user.
 * The note is associated with the logged-in user.
 * Protected by userAuth middleware.
 */
router.post('/add', 
    userAuth, 
    addNote
);

/**
 * PUT /update/:id - Update a note by its ID.
 * Only the owner of the note (authenticated user) can update their own note.
 * Protected by userAuth middleware.
 */
router.put('/update/:id', 
    userAuth, 
    updateNote
);

/**
 * DELETE /delete/:id - Delete a note by its ID.
 * Only the owner of the note (authenticated user) can delete their own note.
 * Protected by userAuth middleware.
 */
router.delete('/delete/:id', 
    userAuth, 
    deleteNote
);

export default router;