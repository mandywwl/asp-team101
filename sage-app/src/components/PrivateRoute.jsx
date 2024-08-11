import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
    const { user } = useAuth();
    return (
        <Route
            {...rest}
            element={user ? <Component /> : <Navigate to="/login" />}
        />
    );
};

export default PrivateRoute;
