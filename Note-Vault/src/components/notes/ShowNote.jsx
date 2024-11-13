import React, { useState, useContext, useEffect } from 'react';
import NoteContext from '../../context/note/NoteContext';
import EditNoteModal from '../modals/EditNoteModal';
import ConfirmDeleteNoteModal from '../modals/ConfirmDeleteNoteModal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function ShowNote({ note }) {
  const { error, deleteNote, editNote } = useContext(NoteContext);

  const [status, setStatus] = useState(note.completed);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editNewNote, setEditNewNote] = useState({ editTitle: '', editContent: '' });

  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  useEffect(() => {
    // Ensure status syncs with the updated notes in case of external change
    setStatus(note.completed);
  }, [note.completed]);

  // Function to handle note deletion with confirmation
  const handleDelete = (id) => {
    setNoteToDelete(id);  // Set the note id you want to delete
    setShowConfirmDeleteModal(true);    // Show the confirmation modal
  };

  const confirmDelete = () => {
    // Replace this with your deleteNote logic
    deleteNote(noteToDelete);
    setShowConfirmDeleteModal(false);   // Hide the modal after deleting
    setNoteToDelete(null); // Clear the note to delete
  };

  const cancelDelete = () => {
    setShowConfirmDeleteModal(false);   // Hide the modal without deleting
    setNoteToDelete(null); // Clear the note to delete
  };

  const handleStatusChange = (note) => {
    const newStatus = !note.completed;
    setStatus(newStatus);
    editNote(note._id, note.title, note.content, newStatus);
  };

  const handleEdit = (currentNote) => {
    setEditNewNote({ editTitle: currentNote.title, editContent: currentNote.content });
    setIsModalOpen(true);
  };

  const handleEditNoteInput = (e) => {
    const { name, value } = e.target;
    setEditNewNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  };

  const handleSaveEdit = () => {
    const editNoteStatus = editNote(note._id, editNewNote.editTitle, editNewNote.editContent, note.completed);
    setIsModalOpen(false);

    if (editNoteStatus) {
      Swal.fire({
        position: 'bottom-end',
        icon: 'warning',
        title: 'Note edited successfully!',
        showConfirmButton: false,
        timer: 3000, // Auto-close after 3 seconds
        timerProgressBar: true, // Show progress bar
        toast: true, // Toast notification style
        background: '#f0f9ff',
        customClass: {
          popup: 'swal2-toast-class',
        },
      });
    }
  };

  const noteDate = new Date(note.date);

  return (
    <>
      <tr>
        <td className={`width-20 ${status ? 'wavy' : ''}`}>{note.title}</td>
        <td className={`width-50 ${status ? 'wavy' : ''}`}>{note.content}</td>
        <td className={`note-date width-20 justify-content-center ${status ? 'wavy' : ''}`}>
          <span>{String(noteDate.getDate()).padStart(2, '0')}</span> / <span>{String(noteDate.getMonth() + 1).padStart(2, '0')}</span> / <span>{noteDate.getFullYear()}</span>
        </td>
        <td className='px-1'>
          <i
            onClick={() => handleStatusChange(note)}
            className={` ${note.completed ? 'fa-solid fa-square-xmark' : 'fa-regular fa-square-check'}`}
          ></i>
        </td>
        <td className='px-1'>
          <i onClick={() => handleDelete(note._id)} className="fa-solid fa-trash-can"></i>
        </td>
        <td className='px-1'>
          <i onClick={() => handleEdit(note)} className="fa-solid fa-pen-to-square"></i>
        </td>
      </tr>

      {/* Modal for editing the note */}
      {isModalOpen && (
        <EditNoteModal
          note={editNewNote}
          handleNoteInput={handleEditNoteInput}
          handleSaveEdit={handleSaveEdit}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      {showConfirmDeleteModal && (
        <ConfirmDeleteNoteModal
          confirmDelete={confirmDelete}
          cancelDelete={cancelDelete}
          message={{ title: 'Delete Note', message: 'Do you really want to delete the note?' }}
        />
      )}
    </>
  );
}

export default ShowNote;
