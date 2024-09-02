import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaLightbulb, FaComment, FaRegHeart, FaUser, FaSignOutAlt } from 'react-icons/fa';


function NavMenu() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="nav-container p-4 md:relative md:top-0 md:left-0 md:w-auto fixed bottom-0 left-0 w-full">
      <ul className="flex justify-between md:justify-center space-x-4">
      <li className='flex-1 text-center'>
          <Link to="/">
            {/* <FaRocket className="md:hidden mx-auto" size={24} color="#defcf9" /> */}
            {/* <span className="hidden md:inline">Main</span> */}
            <img src="/sage-logo.png" alt="SAGE logo" className="w-20 h-20 hidden md:block" />
          </Link>
        </li>
        <li className='flex-1 text-center'>
          <Link to="/homepage">
            <FaHome className="md:hidden mx-auto" size={24} color="#defcf9" />
            <span className="hidden md:inline">Home</span>
          </Link>
        </li>
        <li className='flex-1 text-center'>
          <Link to="/insights">
            <FaLightbulb className="md:hidden mx-auto" size={24} color="#defcf9" />
            <span className="hidden md:inline">Insights</span>
          </Link>
        </li>
        <li className='flex-1 text-center'>
          <Link to="/chatbot">
            <FaComment className="md:hidden mx-auto" size={24} color="#defcf9" />
            <span className="hidden md:inline">Chatbot</span>
          </Link>
        </li>
        <li className='flex-1 text-center'>
          <Link to="/tracker">
            <FaRegHeart className="md:hidden mx-auto" size={24} color="#defcf9" />
            <span className="hidden md:inline">Tracker</span>
          </Link>
        </li>
        <li className='flex-1 text-center'>
          <Link to="/profile">
            <FaUser className="md:hidden mx-auto" size={24} color="#defcf9" />
            <span className="hidden md:inline">Profile</span>
          </Link>
        </li>
        <li className='flex-1 text-center'>
          <button onClick={handleLogout} className="w-full">
            <FaSignOutAlt className="md:hidden mx-auto" size={24} color="#defcf9" />
            <span className="hidden md:inline">Logout</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;