import React, { useState, useEffect, useContext } from "react";
import "../../styles/auth.css";
import AuthContext from '../../context/auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function Auth({ panel }) {
  const { createProfile, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [isSignIn, setIsSignIn] = useState(panel);
  const [loading, setLoading] = useState(false); // Loading state
  const [signInData, setSignInData] = useState({ signinEmail: '', signinPassword: '' });
  const [signUpData, setSignUpData] = useState({ signupName: '', signupEmail: '', signupPassword: '' });

  useEffect(() => {
    setIsSignIn(panel);
  }, [panel]);

  // Handle panel change
  const handleSignIn = () => setIsSignIn(true);
  const handleSignUp = () => setIsSignIn(false);

  // Handle Sign-In
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    const data = await signIn(signInData.signinEmail, signInData.signinPassword);
    setLoading(false); // Set loading to false after response

    if (data.status) {
      localStorage.setItem('NoteVault', data.token);
      Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Sign in successfully!',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        toast: true,
        background: '#f0f9ff',
      });
      navigate('/note');
    } else {
      Swal.fire({
        position: 'bottom-end',
        icon: 'error',
        title: 'Invalid email or password!',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        toast: true,
        background: '#ffe4e6',
      });
    }
  };

  // Handle Sign-Up
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    const data = await createProfile(signUpData.signupName, signUpData.signupEmail, signUpData.signupPassword);
    setLoading(false); // Set loading to false after response

    if (data.status) {
      localStorage.setItem('NoteVault', data.token);
      Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Profile created successfully!',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        toast: true,
        background: '#f0f9ff',
      });
      navigate('/note');
    }
  };

  // Handle input changes for Sign-In 
  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  // Handle input changes for Sign-Up
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className={`app-container ${!isSignIn ? "right-panel-active" : ""}`}>
      <div className="form-container sign-up-container">
        <form onSubmit={handleSignUpSubmit} className="bg-white flex items-center justify-center flex-col px-12 h-full text-center">
          <h1 className="font-bold">Create Account</h1>
          <input onChange={handleSignUpChange} value={signUpData.signupName} name='signupName' className="bg-gray-200 rounded-lg border-none py-3 px-4 my-2 w-full" type="text" placeholder="Name" minLength={3} required />
          <input onChange={handleSignUpChange} value={signUpData.signupEmail} name='signupEmail' className="bg-gray-200 rounded-lg border-none py-3 px-4 my-2 w-full" type="email" placeholder="Email" required />
          <input onChange={handleSignUpChange} value={signUpData.signupPassword} name='signupPassword' className="bg-gray-200 rounded-lg border-none py-3 px-4 my-2 w-full" type="password" placeholder="Password" minLength='5' required />
          <button type="submit" className="mt-5 rounded-full border border-[#418dff] bg-[#418dff] text-white text-xs font-bold py-3 px-11 tracking-wider uppercase transition-transform duration-75 ease-in active:scale-95 focus:outline-none" disabled={loading}>
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleSignInSubmit} className="bg-white flex items-center justify-center flex-col px-12 h-full text-center">
          <h1 className="font-bold">Sign in</h1>
          <input onChange={handleSignInChange} value={signInData.signinEmail} name='signinEmail' className="bg-gray-200 rounded-lg border-none py-3 px-4 my-2 w-full" type="email" placeholder="Email" required />
          <input onChange={handleSignInChange} value={signInData.signinPassword} name='signinPassword' className="bg-gray-200 rounded-lg border-none py-3 px-4 my-2 w-full" type="password" placeholder="Password" minLength='5' required />
          <a className="text-gray-800 text-sm no-underline my-4" href="/contact">Forgot your password?</a>
          <button type="submit" className="rounded-full border border-[#418dff] bg-[#418dff] text-white text-xs font-bold py-3 px-11 tracking-wider uppercase transition-transform duration-75 ease-in active:scale-95 focus:outline-none" disabled={loading}>
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>
      </div>
      {/* Overlay for panel switching */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className="font-bold">Welcome Back!</h1>
            <p className="text-sm font-thin leading-5 tracking-wide my-5 mb-7">To keep connected with us please login with your personal info</p>
            <button className="rounded-full border border-[#ffffff] bg-transparent text-white text-xs font-bold py-3 px-11 tracking-wider uppercase transition-transform duration-75 ease-in active:scale-95 focus:outline-none" id="signIn" onClick={handleSignIn} disabled={loading}>
              {loading ? 'Please wait...' : 'Sign In'}
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className="font-bold">Hello, Friend!</h1>
            <p className="text-sm font-thin leading-5 tracking-wider my-5 mb-7">Enter your personal details and start journey with us</p>
            <button className="rounded-full border border-[#ffffff] bg-transparent text-white text-xs font-bold py-3 px-11 tracking-wider uppercase transition-transform duration-75 ease-in active:scale-95 focus:outline-none" id="signUp" onClick={handleSignUp} disabled={loading}>
              {loading ? 'Please wait...' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
