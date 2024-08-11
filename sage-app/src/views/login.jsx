// import React from 'react';
// import ReactDOM from 'react-dom/client'
// import '../index.css';

// function Login() {
//     return (
//         <div>
//             {/* Your content goes here */}
//         </div>
//     );
// }

// export default Login;

import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
        navigate('/profile'); // Redirect to profile or another protected route
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;