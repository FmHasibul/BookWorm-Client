import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import useAdmin from '../../Hooks/useAdmin.js'

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    const location = useLocation()

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }


    if (!user?.uid && !isAdmin) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    else return children;
};

export default AdminRoute