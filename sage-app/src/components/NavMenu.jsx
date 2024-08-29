import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaLightbulb, FaComment, FaRegHeart, FaUser } from 'react-icons/fa';


function NavMenu() {
  return (
    <nav className="nav-container p-4 md:relative md:top-0 md:left-0 md:w-auto fixed bottom-0 left-0 w-full">
      <ul className="flex justify-between md:justify-center space-x-4">
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
          <Link to="/chat">
            <FaComment className="md:hidden mx-auto" size={24} color="#defcf9" />
            <span className="hidden md:inline">Chatbot</span>
          </Link>
        </li>
        <li className='flex-1 text-center'>
          <Link to="/track">
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
      </ul>
    </nav>
  );
}

export default NavMenu;