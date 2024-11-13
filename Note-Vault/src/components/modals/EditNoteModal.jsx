import React from 'react';

function Modal({ note, handleNoteInput, handleSaveEdit, setIsModalOpen }) {
  const toggleModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen overflow-y-auto overflow-x-hidden">
      {/* Overlay */}
      <div
        aria-hidden="true"
        className="fixed inset-0 w-full h-full bg-black opacity-50 cursor-pointer"
        onClick={toggleModal}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg mx-auto p-4 pointer-events-none">
        <div className="w-full py-2 bg-white pointer-events-auto rounded-xl shadow-lg">
          <button
            type="button"
            className="absolute top-8 right-8 text-gray-400 hover:text-gray-600 transition-all ease-in-out duration-300"
            onClick={toggleModal}
          >
            <i className="fa-solid fa-xmark h-8 w-8 text-lg"></i>
          </button>

          <div className="space-y-4 p-4 text-center text-black">
            <h2 className="text-xl font-bold tracking-tight">Update Note</h2>
            <p className="text-gray-500">Edit the note below:</p>
          </div>

          <div className="flex flex-col w-full max-w-md mx-auto p-6 rounded-lg input-group">
            <input
              id="editTitle"
              name="editTitle"
              type="text"
              className="mb-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-0"
              placeholder="Note title"
              value={note.editTitle}
              onChange={handleNoteInput}
              aria-label="Note Title"
              required
            />
            <input
              id="editContent"
              name="editContent"
              type="text"
              className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-0"
              placeholder="Note content"
              value={note.editContent}
              onChange={handleNoteInput}
              aria-label="Note Content"
              required
            />
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="flex justify-end space-x-4 mx-10 my-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
              onClick={toggleModal}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              onClick={handleSaveEdit}
            >
              Update Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
