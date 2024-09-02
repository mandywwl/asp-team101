import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const user = localStorage.getItem('user'); // Check if user is logged in
    return user ? children : <Navigate to="/login" />; // Redirect to login if not logged in
};

export default ProtectedRoute;
