import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth, db } from '../Auth/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log('Form submitted:', {
            firstName,
            lastName,
            email,
            username,
            password,
            confirmPassword,
        });
        navigate('/');

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    firstName: firstName,
                    lastName: lastName,
                    email: user.email,
                    userName: username,
                    password: password,
                    confirmPassword: confirmPassword,
                });
            }
            console.log("User data stored in Firestore.");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="flex flex-col md:flex-row border-2 px-5 rounded-3xl border-gray-400 w-full max-w-[90%] h-auto md:h-[640px] bg-violet-100 mx-auto my-8">
            <div className="w-full md:w-1/2 rounded-xl shadow-md cursor-pointer flex items-center justify-center">
                <img
                    src="/assets/first1.png"
                    className="h-full w-full md:h-[600px] md:w-auto rounded-xl object-cover"
                    alt="Signup Visual"
                />
            </div>
            <div className="w-full md:w-1/2 container pl-2">
                <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl px-8 pt-4 pb-8 mb-4 mt-4">
                    <h1 className="text-3xl font-bold mb-2 text-center font-mono">New to Us?</h1>
                    <div className="flex flex-col md:flex-row md:space-x-3">
                        <div className="mb-4 w-full">
                            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Gmail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Create Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {/* Add icon here */}
                            </span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                            Re-enter Password
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <span
                                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {/* Add icon here */}
                            </span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-4 italic">
                        *password must not be less than 8 letters, and should contain an
                        UPPERCASE, a LOWERCASE, a number and a special character
                    </p>
                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Get Started
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignupForm;
