import React from 'react'

function ConfirmDeleteModal({ confirmDelete, cancelDelete, message }) {
    return (
        <div className="fixed z-50 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 py-20 text-center">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full p-6">
                    <div className="sm:flex sm:items-start my-2">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <i className="fa-solid fa-triangle-exclamation text-red-600 text-2xl"></i>
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-2xl leading-6 font-bold text-gray-900">
                                {message.title}
                            </h3>
                            <div className="mt-2">
                                <p className="text-base font-medium text-gray-500">
                                    {message.message}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button
                            onClick={confirmDelete}
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto"
                        >
                            Confirm
                        </button>
                        <button
                            onClick={cancelDelete}
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-800 hover:text-gray-500 sm:mt-0 sm:w-auto"
                        >
                            Cancel
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ConfirmDeleteModal;
