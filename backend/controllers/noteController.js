import Note from "../models/Note.js";

const getAllNotes = async (req, res) => {
    try {
        // Extract authenticated user's ID
        const userId = req.user.id;

        // Fetch notes that belong to the authenticated user
        const notes = await Note.find({ user: userId });

        console.log("Notes fetched for user:", userId);
        res.status(200).json({status :true, notes : notes});
    } 
    catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({status : false, message : "Internal server error" });
    }
}


const addNote = async (req, res) => {
    try {
        const data = req.body;

        // Add the userId from the authenticated user to associate the note with them
        const userId = req.user.id;
        const newNote = new Note({
            ...data,
            user: userId  // Store the note with the user who created it
        });

        // Save the newly created note to the database
        const savedNote = await newNote.save();
        console.log("Saved note:", savedNote);

        res.status(201).json({status : true, savedNote : savedNote});
    } 
    catch (error) {
        console.error("Error saving note:", error);
        res.status(500).json({status : false, message : "Internal server error" });
    }
}

const updateNote = async (req, res) => {
    try {
        const id = req.params.id; // ID of the note to update
        const updateData = req.body;
        const userId = req.user.id; // Authenticated user's ID

        // Check if the note exists and belongs to the authenticated user
        const note = await Note.findOne({ _id: id, user: userId });
        if (!note) {
            return res.status(404).json({status : false, error : "Note not found or not authorized to update" });
        }

        // Update the note with new data
        const updatedNote = await Note.findByIdAndUpdate(id, updateData, {
            new: true, // Return the updated note
            runValidators: true, // Ensure validation is run for the new data
        });

        console.log("Note updated:", updatedNote);
        res.status(200).json({status : true, updatedNote});
    }
    catch (error) {
        console.error("Error updating note:", error);
        res.status(500).json({status : false, message : "Internal server error" });
    }
}

const deleteNote = async (req, res) => {
    try {
        const id = req.params.id; // ID of the note to delete
        const userId = req.user.id; // Authenticated user's ID

        // Check if the note exists and belongs to the authenticated user
        const note = await Note.findOne({ _id: id, user: userId });
        if (!note) {
            return res.status(404).json({status : false, error: "Note not found or not authorized to delete" });
        }

        // Delete the note
        const deletedNote = await Note.findByIdAndDelete(id);

        console.log("Note deleted:", deletedNote);
        res.status(200).json({status : true, message: "Note successfully deleted", deletedNote });
    }
    catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).json({status : false, message: "Internal server error" });
    }
}

export {getAllNotes, addNote, updateNote, deleteNote}