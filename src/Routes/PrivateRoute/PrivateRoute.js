import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <progress className="progress w-56"></progress>
    }


    if (!user?.uid) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    else return children;
};

export default PrivateRoute