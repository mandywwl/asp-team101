// This is the main route handler and implements the routing for the application.
import React from 'react';
import ReactDOM from 'react-dom/client';

import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from '../views/Landing.jsx';
import Homepage from '../views/Homepage.jsx';
import Login from '../views/Login.jsx';
import Register from '../views/Register.jsx';
import Profile from '../views/Profile.jsx';
import JournalLog from '../views/JournalLog.jsx';
import Chatbot from '../views/chatbot.jsx';
import Tracker from '../views/tracker.jsx';
import Insights from '../views/insights.jsx';

import '../index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/journal-log" element={<JournalLog />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
