import React from 'react';
import { Link } from 'react-router-dom';

function UserDropdown({
    showAlertForSignOut,
    position = 'right-0 top-12 font-sans w-full min-w-[8rem]', // Default position
}) {
    return (
        <ul className={`absolute ${position} flex-col rounded-md border border-gray-200 bg-white shadow-lg py-2 z-50 transition-all duration-200 ease-in-out`}>
            <li>
                <Link
                    className="block px-4 py-2 text-sm text-gray-700 text-center hover:bg-gray-100 transition-colors duration-200 ease-in-out rounded-t-md"
                    to="/note"
                >
                    Notes
                </Link>
            </li>
            <hr className="my-1 border-gray-300" />
            <li>
                <button
                    onClick={showAlertForSignOut}
                    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 ease-in-out rounded-b-md"
                >
                    Sign Out
                </button>
            </li>
        </ul>
    );
}

export default UserDropdown;


// small /mobile : right-1/2 top-12 font-sans w-1/4 min-w-[2rem]
// lg/md : right-0 top-12 font-sans w-full min-w-[6rem]