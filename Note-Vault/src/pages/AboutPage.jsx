import React from 'react';
import { Link } from 'react-router-dom';
function AboutPage() {
    return (
        <div className="max-w-screen-xl mx-auto lg:my-12 p-8 bg-white dark:bg-gray-800 lg:rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">About Note Vault</h1>
            <hr className="border-0 h-1 mb-4 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 rounded-full" />
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Note Vault is a secure and efficient platform designed to help you store, organize, and manage your personal and professional notes with ease. Our mission is to provide a user-friendly, yet powerful application that allows you to keep your important notes safe and easily accessible.
            </p>

            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-2">How It Works</h2>
            <hr className="border-0 w-40 h-1 mb-4 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 rounded-full" />
            <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-4">
                <li><strong>Create and Manage Notes:</strong> Use the sign-up feature to create an account and securely store your notes. Add new notes, edit, and organize them through a simple and user-friendly interface.</li>
                <li><strong>CRUD Operations:</strong> Perform Create, Read, Update, and Delete actions seamlessly, with all notes being stored securely in MongoDB via our Express backend API.</li>
                <li><strong>Real-Time Feedback:</strong> Get instant visual feedback with SweetAlert notifications for every action like adding, updating, or deleting a note.</li>
                <li><strong>Access Notes Anywhere:</strong> Thanks to cloud-based storage with MongoDB, your notes are safe and accessible from any device. Just log in to retrieve your notes at any time.</li>
                <li><strong>Security:</strong> We take data security seriously. In upcoming versions, encryption will be applied to your notes to ensure the safety and privacy of your information.</li>
            </ol>

            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-2">Key Features</h2>
            <hr className="border-0 w-40 h-1 mb-4 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 rounded-full" />
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-4">
                <li><strong>Full-Stack Architecture:</strong> Powered by React for the frontend, Express for backend logic, and MongoDB for secure data storage, ensuring efficient and reliable note management.</li>
                <li><strong>Real-Time Feedback:</strong> SweetAlert integration provides instant feedback when a note is added, edited, or deleted.</li>
                <li><strong>Responsive Design:</strong> The UI is fully responsive, built with React and Tailwind CSS, making it accessible on any screen size, from mobile to desktop.</li>
                <li><strong>Dark Mode:</strong> Switch between light and dark modes for a personalized viewing experience.</li>
                <li><strong>Backup and Sync (Upcoming):</strong> In future updates, you will be able to back up your notes and sync them across all devices through cloud-based storage.</li>
            </ul>

            <p className="text-lg text-gray-700 dark:text-gray-300 mt-8">
                Whether you are a student, professional, or just someone who likes to stay organized, Note Vault makes it easy to manage your notes and keep track of important information.
            </p>
            <div className="flex justify-center mt-8">
                <Link to="/" className="px-8 py-3 bg-sky-500 text-white font-bold rounded-md shadow-md hover:bg-sky-600 dark:hover:bg-sky-700 transition duration-300">
                    Start Using Note Vault
                </Link>
            </div>
        </div>

    );
}

export default AboutPage;
