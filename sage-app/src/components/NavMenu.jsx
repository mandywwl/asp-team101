import React from 'react';
import { Link } from 'react-router-dom';

function NavMenu() {
  return (
    <nav>
      <ul>
        <li><Link to="/homepage">Home</Link></li>
        <li><Link to="/insights">Insights</Link></li>
        <li><Link to="/chat">Chatbot</Link></li>
        <li><Link to="/track">Tracker</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default NavMenu;