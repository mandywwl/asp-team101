import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaLightbulb, FaComment, FaRegHeart, FaUser } from 'react-icons/fa';


function NavMenu() {
  return (
    <nav className="p-4 text-white">
      <ul className="flex justify-center space-x-4">
        <li className='mx-4'><Link to="/homepage">Home</Link></li>
        <li className='mx-4'><Link to="/insights">Insights</Link></li>
        <li className='mx-4'><Link to="/chat">Chatbot</Link></li>
        <li className='mx-4'><Link to="/track">Tracker</Link></li>
        <li className='mx-4'><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default NavMenu;