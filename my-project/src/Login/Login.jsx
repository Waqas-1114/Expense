
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// src/Login/Login.js
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../Auth/firebase'


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleRememberMeChange = (e) => setRememberMe(e.target.checked);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Logged in Successfully");
        }
        catch (error) {
            console.log(error.message);
        }
        navigate("/");
    };

    return (

        <div className="h-screen w-screen flex bg-[#E7E0FB] justify-center items-center relative">

            {/* Background Video */}
            <video
                loop
                autoPlay
                muted
                preload="auto"
                type="video/mp4"
                src="/assets/Comp 1_2.mp4"
                className="fixed inset-0 w-full h-full object-cover z-0"
            ></video>

            {/* Main Container */}
            <div className="fixed flex items-center justify-center w-[89%] h-[85%] max-w-8xl p-7 bg-white bg-opacity-10 backdrop-blur-lg border border-white rounded-3xl shadow-lg z-10">
                {/* Content Wrapper */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full h-full space-y-8 md:space-y-0 md:space-x-8">
                    {/* Photo Section */}
                    <div className="w-full md:w-1/2 h-full bg-cover bg-center bg-no-repeat rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 flex items-center justify-center">
                        <img
                            src="/assets/login-image.jpg"
                            className="max-w-full h-full py-3 rounded-lg object-cover"
                            alt="Login Visual"
                        />
                    </div>

                    {/* Form Section */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col justify-evenly items-center w-full md:w-1/2 space-y-6"
                    >
                        <p className="text-4xl font-semibold font-sans flex gap-2">
                            <span className="text-white">Welcome</span><span className="text-blue-400">Back!</span>
                        </p>

                        {/* Username Field */}
                        <div className="relative w-full h-10">
                            <input
                                type="email"
                                name="username"
                                id="userName"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                className="w-full h-full bg-transparent border-b border-black focus:outline-none text-xl"
                                aria-label="Username or email"
                            />
                            <label
                                htmlFor="userName"
                                className="absolute left-0 bottom-2 text-lg transition-transform transform origin-left pointer-events-none"
                            >
                                Username or email
                            </label>
                        </div>

                        {/* Password Field */}
                        <div className="relative w-full h-10">
                            <input
                                type="password"
                                name="password"
                                id="passWord"
                                required
                                value={password}
                                onChange={handlePasswordChange}
                                className="w-full h-full bg-transparent border-b border-black focus:outline-none text-xl"
                                aria-label="Password"
                            />
                            <label
                                htmlFor="passWord"
                                className="absolute left-0 bottom-2 text-lg transition-transform transform origin-left pointer-events-none"
                            >
                                Password
                            </label>
                        </div>

                        {/* Password Safety Section */}
                        <div className="flex items-center justify-between w-full text-lg">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="chk"
                                    checked={rememberMe}
                                    onChange={handleRememberMeChange}
                                    className="w-5 h-5"
                                />
                                <label htmlFor="chk">Remember Password</label>
                            </div>
                            <p>Forgot Password?</p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full h-11 bg-white rounded-2xl shadow-lg text-xl transition hover:bg-gray-200 active:bg-gray-300 text-black"
                        >
                            Continue
                        </button>

                        <p className="text-xl">Or</p>

                        {/* Continue with Google */}
                        <button
                            type="button"
                            className="flex items-center justify-center w-full h-11 bg-white rounded-2xl shadow-lg text-xl transition hover:bg-gray-200 active:bg-gray-300"
                        >
                            <img src="/assets/google.png" alt="Google logo" className="w-8 h-8" />
                            <span className="ml-4">Continue with Google</span>
                        </button>

                        <p className="text-xl">Don't have an account?</p>

                        {/* Sign Up Button */}
                        <button
                            type="button"
                            className="w-full h-11 bg-purple-600 text-white rounded-2xl shadow-lg text-xl transition hover:bg-purple-700 active:bg-purple-800"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
