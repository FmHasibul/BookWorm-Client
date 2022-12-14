import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    // console.log(user);
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
    </>

    const handleLogout = () => {
        logout()
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}

                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl text-green-600">Book Worm</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}


                    </ul>
                </div>
                <div className="ml-auto">
                    {
                        user ? <>
                            <Link className='btn btn-outline btn-sm' to='/dashboard'> Dashboard</Link>
                            <Link onClick={handleLogout} className='btn btn-outline btn-sm' > Logout</Link>
                        </>
                            :
                            <>
                                <Link className='btn btn-outline btn-sm' to='/login'> Login</Link>
                            </>
                    }

                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;