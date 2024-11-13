import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    const features = [
        { id: 1, title: 'Easy to Use', desc: 'A user-friendly interface that makes creating and managing notes a breeze.' },
        { id: 2, title: 'Real-Time Feedback', desc: 'Get instant feedback when notes are added, updated, or deleted with SweetAlert notifications.' },
        { id: 3, title: 'Secure Data', desc: 'Your notes are stored securely in MongoDB, ensuring they are safe and accessible anytime.' },
        { id: 4, title: 'Fully Responsive', desc: 'Note Vault is designed to work seamlessly on any device, whether desktop or mobile.' },
        { id: 5, title: 'Cloud Storage', desc: 'Access your notes from anywhere with cloud-based storage, making it easy to stay organized on the go.' },
        { id: 6, title: 'Future-Ready', desc: 'Upcoming features include encryption and sync across devices for added security and flexibility.' },
    ]

    return (
        <div className="min-h-screen mt-4">
            {/* Hero Section */}
            <section className="bg-sky-500 dark:bg-sky-700 lg:mx-auto lg:w-3/4 rounded-3xl lg:rounded-full text-white">
                <div className="max-w-screen-lg mx-auto py-16 px-6 flex flex-col items-center text-center">
                    <h1 className="text-5xl font-extrabold mb-4">Welcome to Note Vault</h1>
                    <p className="text-xl font-light mb-8">
                        Securely store, manage, and organize your notes with ease. Stay organized, wherever you are!
                    </p>
                    <div className="flex space-x-4">
                        <Link
                            to="/signup"
                            className="px-8 py-3 bg-white text-sky-500 dark:bg-gray-800 dark:text-white font-bold rounded-md shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
                        >
                            Sign Up
                        </Link>
                        <a
                            href="#features"
                            className="px-8 py-3 bg-transparent border border-white text-white font-bold rounded-md shadow-md hover:bg-white hover:text-sky-500 dark:hover:bg-gray-800 dark:hover:text-sky-300 transition duration-300"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16">
                <div className="max-w-screen-lg mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-900 my-3">
                        Why Choose Note Vault?
                    </h2>
                    <hr className="border-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 dark:from-sky-600 dark:via-blue-700 dark:to-sky-600 rounded-full mb-10" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Features */}
                        {features.map(feature => (
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-3xl shadow-lg" key={feature.id}>
                                <h3 className="text-2xl font-semibold text-sky-500 dark:text-sky-300 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section id="cta" className="bg-sky-600 dark:bg-sky-800 text-white py-16 rounded-t-3xl lg:rounded-t-full">
                <div className="max-w-screen-lg mx-auto px-6 text-center">
                    <h2 className="text-4xl font-extrabold mb-4">Get Started with Note Vault Today!</h2>
                    <p className="text-xl font-light mb-8">Sign up now and take control of your notes with the most secure and user-friendly platform.</p>
                    <Link
                        to="/signup"
                        className="px-10 py-4 bg-white text-sky-600 dark:bg-gray-800 dark:text-white font-bold rounded-md shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
                    >
                        Sign Up for Free
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
