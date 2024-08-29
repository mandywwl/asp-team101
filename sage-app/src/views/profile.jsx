import React, { useState }from 'react';
import { Link } from 'react-router-dom';

import NavMenu from '../components/NavMenu.jsx';
import '../index.css';

function Profile() {
    const [profilePicture, setProfilePicture] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(URL.createObjectURL(file));
        }
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //@suizzzzz Save the updated profile details (e.g., send to a server)
        //alert('Profile updated successfully!');
    };

    const handleFeedback = () => {
        // Handle feedback submission (e.g., navigate to a feedback form or open a modal)
        //alert('Feedback submitted!');
    };

    const handleDeleteAccount = () => {
        // @suizzzzz Handle account deletion logic 
        //alert('Account deleted successfully!');
    };

    return (
        <div className='mainViewBody relative'>
            <NavMenu className='md:max-xl:order-first sm:order-last' />
            <div className="profile-container max-w-md mx-auto p-4">
                <h2 className="text-2xl font-bold text-center mb-4">Your Profile</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col items-center">
                        {profilePicture ? (
                            <img src={profilePicture} alt="Profile" className="w-24 h-24 rounded-full object-cover mb-4" />
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                                <span className="text-gray-500">No Image</span>
                            </div>
                        )}
                        <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleProfilePictureChange} 
                            className="text-center"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={handleNameChange} 
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={handleEmailChange} 
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <button 
                            type="submit" 
                            className="bg-teal-500 text-white py-2 px-4 rounded"
                        >
                            Save Profile
                        </button>
                        <button 
                            type="button" 
                            onClick={handleFeedback} 
                            className="bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            Give Feedback
                        </button>
                        <button 
                            type="button" 
                            onClick={handleDeleteAccount} 
                            className="bg-red-500 text-white py-2 px-4 rounded"
                        >
                            Delete Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;