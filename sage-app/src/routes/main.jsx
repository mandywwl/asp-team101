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
import ProtectedRoute from '../components/ProtectedRoute.jsx'; // Import the ProtectedRoute component


import '../index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Protect these routes via ProtectedRoute */}
        <Route 
          path="/homepage" 
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/journal-log" 
          element={
            <ProtectedRoute>
              <JournalLog />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/chatbot" 
          element={
            <ProtectedRoute>
              <Chatbot />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/tracker" 
          element={
            <ProtectedRoute>
              <Tracker />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/insights" 
          element={
            <ProtectedRoute>
              <Insights />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  </React.StrictMode>
)
