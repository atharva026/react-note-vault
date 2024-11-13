import React from 'react';
import AuthContext from './AuthContext';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const AuthState = (props) => {

  const host = import.meta.env.VITE_BACKEND_HOST_URL;
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

  // Create profile function
  const createProfile = async (username, email, password) => {
    try {
      const response = await fetch(`${host}/api/auth/createprofile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const result = await response.json(); // Parse the response

      if (!response.ok) {
        // If response is not OK, show error SweetAlert
        showAlert('error', result.message || 'Failed to create profile');
        return null;
      }

      return result; // Return response data if successful
    } catch (err) {
      // Handle unexpected errors
      showAlert('error', 'An unexpected error occurred. Please try again.');
    }
  };

  // Sign-in function
  const signIn = async (email, password) => {
    try {
      const response = await fetch(`${host}/api/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        // If response is not OK, show error SweetAlert
        showAlert('error', result.message || 'Failed to sign in');
        return null;
      }

      return result; // Return response data if successful
    } catch (err) {
      // Handle unexpected errors
      showAlert('error', 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <AuthContext.Provider value={{ createProfile, signIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
