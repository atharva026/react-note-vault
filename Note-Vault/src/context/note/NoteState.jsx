import NoteContext from "./NoteContext";
import { useState } from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const NoteState = (props) => {
  const host = import.meta.env.VITE_BACKEND_HOST_URL;
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Helper function for SweetAlert
  const showAlert = (icon, title) => {
    Swal.fire({
      position: 'bottom-end',
      icon: icon, // 'success', 'error', 'warning', etc.
      title: title,
      showConfirmButton: false,
      timer: 3000, // Auto-close after 3 seconds
      timerProgressBar: true,
      toast: true, // Toast style
      background: '#f0f9ff', // Optional background color
      customClass: {
        popup: 'swal2-toast-class', // Custom class for styling
      },
    });
  };

  // Get all Notes
  const getNotes = async () => {
    setLoading(true); // Start loading
    setError(null);   // Reset error
    try {
      const response = await fetch(`${host}/api/notes/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('NoteVault')
        }
      });
      if (!response.status) {
        throw new Error('Failed to fetch notes');
      }
      const json = await response.json();
      setNotes(json.notes);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Add a Note
  const addNote = async (title, content, completed = false) => {
    // setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${host}/api/notes/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('NoteVault'),
        },
        body: JSON.stringify({ title, content, completed }),
      });

      // Check if the response is OK
      if (!response.status) {
        // Show SweetAlert for error
        showAlert('error', 'Failed to add note. Please try again.');
        return; // Exit early if there's an error
      }

      // If response is OK, parse the note
      const note = await response.json();
      setNotes((prevNotes) => prevNotes.concat(note.savedNote));

      // Show SweetAlert for success
      showAlert('success','Note added successfully!');

    } catch (err) {
      // Handle any unexpected errors
      showAlert('error', 'An unexpected error occurred. Please try again.');
      setError(err.message); // Optionally, keep the error message state
    } finally {
      // setLoading(false); // Always set loading to false at the end
    }
  };


  // Delete a Note
  const deleteNote = async (id) => {
    // setLoading(true);
    setError(null);
    try {
      console.log('id', id)
      const response = await fetch(`${host}/api/notes/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('NoteVault')
        },
      });
      if (!response.status) {
        showAlert('error','Failed to delete note');
        return ;
      }
      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
      
      // Show SweetAlert for success
      showAlert('success', 'Note deleted successfully')
      
    } catch (err) {
      setError(err.message);
      showAlert('error','An unexpected error occurred. Please try again.');
    } finally {
      // setLoading(false);
    }
  };

  // Edit a Note
  const editNote = async (id, title, content, completed) => {
    // setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${host}/api/notes/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('NoteVault')
        },
        body: JSON.stringify({ title, content, completed })
      });
      if (!response.status) {
        showAlert('error','Failed to update note');
        return false ;
      }
      const json = await response.json();
      let newNotes = JSON.parse(JSON.stringify(notes));
      // Logic to edit in client
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].content = content;
          newNotes[index].completed = completed;
          break;
        }
      }
      setNotes(newNotes);
      return true   // showing edited alert from showNote.jsx only if note edited not completed      
    } catch (err) {
      setError(err.message);
      showAlert('error', 'An unexpected error occurred. Please try again.');
    } finally {
      // setLoading(false);
    }
  };

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes, error, loading }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;
