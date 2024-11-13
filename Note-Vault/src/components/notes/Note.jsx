import React, { useState, useEffect, useContext } from 'react';
import "../../styles/notes.css";

import ShowNote from './ShowNote';
import AddNote from './AddNote';
import NoteContext from '../../context/note/NoteContext';
import { useNavigate } from 'react-router-dom';
import Spinner from '../spinner/Spinner';

function Note() {
  const navigate = useNavigate();

  const [completed, setCompleted] = useState([]);
  const [pending, setPending] = useState([]);

  const { notes, getNotes, loading, error } = useContext(NoteContext);

  useEffect(() => {
    if (localStorage.getItem('NoteVault')) {
      getNotes(); // Fetch notes on component mount
    }
    else {
      navigate('/signin')
    }
  }, []);

  useEffect(() => {
    // Update pending and completed notes when notes change
    setPending(notes.filter(note => note.completed === false));
    setCompleted(notes.filter(note => note.completed === true));
  }, [notes]);

  const displayTask = () => {
    return notes.map((note) => (
      <ShowNote key={note._id} note={note} />
    ));
  };

  return (
    <div className="to-do-list z-auto">

      {error ? (
        <div className="flex flex-col justify-center items-center my-2">
          <img
            src="/images/status_code_images/internal-server-error-500.png"
            alt="Internal Server Error"
            className="w-full h-full lg:w-2/5 lg:h-2/5 object-contain"
          />
          <p className="text-2xl font-semibold text-white">Internal Server Error</p>
        </div>
      ) : (
        <div className="note-container flex flex-row justify-center items-center lg:p-5">
          <div className="to-do-list-body bg-white lg:rounded-2xl">
            <div className="to-do-list-header"></div>
            <div className="to-do-list-tasks p-5">
              <div className="title text-center">
                <h1 className="fw-bold text-4xl py-2">Your To-do Note list</h1>
                <p id="tasksInfo" className="fw-bold">
                  {notes.length} Total, {completed.length} Completed, {pending.length} Pending
                </p>
              </div>
              <AddNote />
              
              {/* Conditional loading indicator */}
              { loading ? (
                <Spinner heightVH={'10vh'} />
              ) : notes.length > 0 ? (
                <table className="table">
                  <thead>
                    <tr>
                      <th className="width-20">Title</th>
                      <th className="width-50">Description</th>
                      <th className="width-20">Date</th>
                      <th colSpan={3}></th>
                    </tr>
                  </thead>
                  <tbody>{displayTask()}</tbody>
                </table>
              ) : (
                <div className="flex justify-center items-center">
                  <img
                    src="/images/noteNotFound/no_notes_poster.png"
                    alt="No notes available"
                    className="w-1/3"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note