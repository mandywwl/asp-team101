import axios from 'axios';
import React, { useState } from 'react';

import '../index.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', {
                username,
                password,
            });
    
            // Assuming the backend returns a user object with a name and a token
            const user = response.data;
            localStorage.setItem('user', JSON.stringify(user));  // Store user information in localStorage
            
            
            // Redirect to the homepage
            window.location.href = '/homepage';
        } catch (error) {
            console.error('Login Error:', error.response ? error.response.data : error.message);
            alert('Invalid credentials.');
        }
    };
    

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-300">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            id='LoginButton'
                            className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sign In
                        </button>
                        <a href="/register" className="text-blue-500 text-sm">Don't have an account? Register here</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
