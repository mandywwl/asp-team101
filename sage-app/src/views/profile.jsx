// import React from 'react';
// import ReactDOM from 'react-dom/client'
// import '../index.css';

// function Profile() {
//     return (
//         <div>
//             {/* Your content goes here */}
//         </div>
//     );
// }

// export default Profile;

import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../index.css';

const Profile = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <h1>Welcome, {user?.username}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Profile;
