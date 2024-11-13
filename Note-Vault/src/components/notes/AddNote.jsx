import React, { useContext, useState } from 'react';
import NoteContext from '../../context/note/NoteContext';

function AddNote() {
    const { addNote } = useContext(NoteContext);
    const [newNote, setNewNote] = useState({ title: '', content: '', completed: false });

    const getNoteData = (e) => {
        e.preventDefault(); // Prevent form submission from reloading the page   
        addNote(newNote.title, newNote.content, newNote.completed);
        setNewNote({ title: '', content: '' }); // Reset form after adding note
    };

    const handleNoteInput = (e) => {
        const { name, value } = e.target;
        setNewNote((prevNote) => ({
            ...prevNote,
            [name]: value
        }));
    };

    return (

        <div className="flex flex-col w-full max-w-md mx-auto p-6 rounded-lg input-group backdrop-blur-lg bg-white/30 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Add a New Note</h2>
            <form onSubmit={getNoteData} className="w-full">
            <input
                id="title"
                name="title"
                type="text"
                minLength={1}
                className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:ring-blue-500 form-control"
                placeholder="Add your note title ..."
                value={newNote.title}
                onChange={handleNoteInput}
                aria-label="Add your Note"
                required
            />

            <br />
            <input
                id="content"
                name="content"
                type="text"
                minLength={1}
                className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:shadow-none"
                placeholder="Add your note content ..."
                value={newNote.content}
                onChange={handleNoteInput}
                aria-label="Add your Content"
                required
            />
            <button
                className="w-full bg-blue-500 text-white font-semibold py-3 rounded hover:bg-blue-600 transition duration-300"
                type="submit"
                id="addNoteBtn"
            >
                Add Note
                <i className="fa-solid fa-pencil ml-2"></i>
            </button>
            </form>
        </div>

    );
}

export default AddNote;
